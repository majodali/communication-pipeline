import test from 'node:test';
import assert from 'node:assert/strict';
import { lintIR, lintProse, vocabularyEntries } from './lint.mjs';
import { parseIR } from './ir.mjs';
import { inputsOf, decide } from './dispatch.mjs';
import { roundTrip } from './roundtrip.mjs';

const GOOD_IR = `# IR: x

Reader: RD-1 (human owner, in conversation).
Purpose: report. A test.
Status: draft
Source: test

## Terms

T1. Widget: a thing. [proposed: this IR]

## Claims

C1. The widget exists. evidence: E1. [decided: owner, 2026-10-25]
C2. The widget is blue. [inferred: R1]

## Relations

R1. C2 depends-on C1 because a thing must exist to have a colour.

## Evidence

E1. tests/fixture.md, line 1.

## Asks

A1. Approve the widget. Depends: C1.
`;

test('a conforming IR has no findings', () => {
  const { findings } = lintIR(GOOD_IR, { vocab: new Set() });
  assert.deepEqual(findings, []);
});

test('CK-01 flags claim-initial pronouns and deictic phrases', () => {
  const t = GOOD_IR.replace('C2. The widget is blue.', 'C2. It is blue, like the other one.');
  const checks = lintIR(t, { vocab: new Set() }).findings.map((f) => f.check);
  assert.equal(checks.filter((c) => c === 'CK-01').length, 2);
});

test('CK-02 flags a claim over 40 words', () => {
  const long = 'C2. ' + Array(42).fill('word').join(' ') + '. [inferred: R1]';
  const t = GOOD_IR.replace(/C2\. .*$/m, long);
  assert.ok(lintIR(t, { vocab: new Set() }).findings.some((f) => f.check === 'CK-02'));
});

test('CK-05 requires provenance on T, C, G and the right fields', () => {
  const t = GOOD_IR.replace(' [inferred: R1]', ' [inferred]').replace(' [decided: owner, 2026-10-25]', '');
  const f = lintIR(t, { vocab: new Set() }).findings.filter((x) => x.check === 'CK-05');
  assert.equal(f.length, 2);
});

test('CK-06 flags unresolved identifiers in relations, evidence and asks', () => {
  const t = GOOD_IR.replace('evidence: E1', 'evidence: E9').replace('Depends: C1', 'Depends: C7').replace('C2 depends-on C1', 'C2 depends-on C5');
  const f = lintIR(t, { vocab: new Set() }).findings.filter((x) => x.check === 'CK-06');
  assert.equal(f.length, 3);
});

test('CK-07 and CK-08 check the header and the asks section', () => {
  const t = GOOD_IR.replace('Reader: RD-1 (human owner, in conversation).', 'Reader: the owner').replace('Purpose: report. A test.', 'Purpose: a test.').replace(/## Asks[\s\S]*$/, '');
  const checks = lintIR(t, { vocab: new Set() }).findings.map((f) => f.check);
  assert.ok(checks.includes('CK-07'));
  assert.equal(checks.filter((c) => c === 'CK-07').length, 2);
});

test('CK-09 flags a claim in two clusters; CK-10 flags section order', () => {
  const t = GOOD_IR.replace('## Relations', 'G1. cluster: C1, C2 [proposed: this IR]\nG2. cluster: C2 [proposed: this IR]\n\n## Relations');
  assert.ok(lintIR(t, { vocab: new Set() }).findings.some((f) => f.check === 'CK-09'));
  const u = GOOD_IR.replace('## Terms', '## Zebra').replace('## Claims', '## Terms');
  assert.ok(lintIR(u, { vocab: new Set() }).findings.some((f) => f.check === 'CK-10'));
});

test('prose lint catches the case 001 patterns', () => {
  const prose = `# Review

## Asks

Do the thing.

## What changed

That is the monolith. P-004 and P-006 exist and hold in 10 of 50 documents across 3 projects. **The three documents are one argument at three levels, and your framework should adjudicate the other two.** This is fine. The mapping says where the corpus is weakest — provenance of concepts; most of the package lands there.

## What is already covered

Nothing.
`;
  const checks = lintProse(prose).findings.map((f) => f.check);
  for (const c of ['SP-08', 'SP-05', 'SP-20', 'SP-07', 'SP-03', 'SP-09', 'SP-13']) assert.ok(checks.includes(c), `expected ${c} in ${checks}`);
});

test('prose lint accepts named identifiers and links', () => {
  const prose = `W-006 (branches are single-use) binds. See [P-004](x.md). W-006 again is fine.\n`;
  assert.deepEqual(lintProse(prose).findings.filter((f) => f.check === 'SP-05'), []);
});

test('dispatch applies the rules in order', () => {
  const ir = parseIR(GOOD_IR);
  assert.deepEqual(decide(inputsOf(ir)), { rule: 'BP-05a', disposition: 'D1' }); // one proposed term in a report
  const noTerms = parseIR(GOOD_IR.replace('[proposed: this IR]', '[decided: owner, 2026-10-25]'));
  assert.deepEqual(decide(inputsOf(noTerms)), { rule: 'BP-07', disposition: 'D1' }); // dependent ask
  const simple = parseIR(GOOD_IR.replace('[proposed: this IR]', '[decided: owner, 2026-10-25]').replace(' Depends: C1.', ''));
  assert.deepEqual(decide(inputsOf(simple)), { rule: 'BP-09', disposition: 'D0' });
  assert.deepEqual(decide(inputsOf(simple, 'review')), { rule: 'BP-02', disposition: 'D2' });
  const doc = parseIR(GOOD_IR.replace('Purpose: report.', 'Purpose: document.'));
  assert.equal(decide(inputsOf(doc)).rule, 'BP-03');
  const rd4 = parseIR(GOOD_IR.replace('Reader: RD-1 (human owner, in conversation).', 'Reader: RD-4 (fresh agent session).').replace('[proposed: this IR]', '[decided: owner, 2026-10-25]'));
  assert.equal(decide(inputsOf(rd4)).rule, 'BP-04');
});

test('a semicolon list after a colon is not a clause join', () => {
  const t = GOOD_IR.replace('C2. The widget is blue.', 'C2. The widget has three parts: a base; a stem; a cap.');
  assert.deepEqual(lintIR(t, { vocab: new Set() }).findings.filter((f) => f.check === 'CK-03'), []);
  assert.deepEqual(lintProse('Three parts: asks; what is covered; what changed.\n').findings.filter((f) => f.check === 'SP-09'), []);
  assert.ok(lintProse('The lint runs; the reviewer reads.\n').findings.some((f) => f.check === 'SP-09'));
});

test('a sentence-initial determiner with its noun is not a bare pronoun', () => {
  assert.deepEqual(lintProse('This specification restates the rules.\n').findings.filter((f) => f.check === 'SP-03'), []);
  assert.ok(lintProse('This is fine.\n').findings.some((f) => f.check === 'SP-03'));
  const t = GOOD_IR.replace('C2. The widget is blue.', 'C2. This widget is blue.');
  assert.deepEqual(lintIR(t, { vocab: new Set() }).findings.filter((f) => f.check === 'CK-01'), []);
});

test('a table row defines the identifier in its first cell', () => {
  const prose = '| Id | Rule |\n|---|---|\n| SP-01 | one claim per sentence |\n\nSP-01 binds everyone.\n';
  assert.deepEqual(lintProse(prose).findings.filter((f) => f.check === 'SP-05'), []);
  const bare = '| Id | Rule |\n|---|---|\n| SP-01 | see SP-02 |\n';
  assert.equal(lintProse(bare).findings.filter((f) => f.check === 'SP-05').length, 1);
});

test('SP-13 ignores headings inside fenced code', () => {
  const prose = 'Intro.\n\n```markdown\n## Asks\n\n## What changed\n```\n';
  assert.deepEqual(lintProse(prose).findings.filter((f) => f.check === 'SP-13'), []);
});

test('a colon list with "and" before its last item is not two claims', () => {
  const t = GOOD_IR.replace('C2. The widget is blue.', 'C2. The widget has three parts that matter to every reader who ever meets it in practice: a base, a stem, and a cap that fits.');
  assert.deepEqual(lintIR(t, { vocab: new Set() }).findings.filter((f) => f.check === 'CK-03'), []);
});

test('SP-20 does not count identifiers, versions or dates as numerals', () => {
  assert.deepEqual(lintProse('Checks CK-01 to CK-10 shipped in v1.5.0 on 2026-10-25 under RD-4.\n').findings.filter((f) => f.check === 'SP-20'), []);
  assert.ok(lintProse('There were 43 violations, 130 warnings and 15 files.\n').findings.some((f) => f.check === 'SP-20'));
});

test('a fielded row may open with a bold label and carry one em-dash', () => {
  const row = '- [x] **Chunk 2 — roles in Claude Code** — 2026-10-25. Three skills landed.\n';
  const checks = lintProse(row).findings.map((f) => f.check);
  assert.ok(!checks.includes('SP-07') && !checks.includes('SP-09'), checks.join());
  const para = 'The lint runs — the reviewer reads — the owner decides.\n';
  assert.ok(lintProse(para).findings.some((f) => f.check === 'SP-09'));
});

test('a pointer list item is a row: path — description', () => {
  assert.deepEqual(lintProse('- docs/classification.md — the binding declaration\n').findings.filter((f) => f.check === 'SP-09'), []);
});

test('list items are separate blocks, not one long sentence', () => {
  const list = '1. **Asks** — the decisions requested of the reader.\n2. **What changed** — the parts that are new, each with a pointer into the deliverable and what to review there.\n3. **What is covered** — the parts that encode decisions the conversation already settled before this report.\n';
  assert.deepEqual(lintProse(list).findings.filter((f) => f.check === 'SP-02'), []);
});

test('SP-13 applies to reports, not to a plan with an Asks section', () => {
  assert.deepEqual(lintProse('# Plan\n\n## Chunks\n\nx.\n\n## Asks\n\nNone.\n').findings.filter((f) => f.check === 'SP-13'), []);
});

test('dispatch: normative documents take D3; proposed terms in a report take D1', () => {
  const norm = parseIR(GOOD_IR.replace('Purpose: report.', 'Purpose: document.').replace('Status: draft', 'Status: draft\nNormative: yes'));
  assert.deepEqual(decide(inputsOf(norm)), { rule: 'BP-02a', disposition: 'D3' });
  const rep = parseIR(GOOD_IR.replace(' Depends: C1.', ''));
  assert.deepEqual(decide(inputsOf(rep)), { rule: 'BP-05a', disposition: 'D1' });
});

test('round trip: missing and unknown identifiers, sentence ratio', () => {
  const prose = 'Lead.\n\n## Asks\n\n1. Approve the widget.\n\n## What is already covered\n\nThe widget exists. The widget is blue. Also this.\n\n<!-- render map: C1\u2192\u00b61 C2\u2192\u00b61 C9\u2192\u00b61 -->\n';
  const r = roundTrip(GOOD_IR, prose);
  assert.equal(r.hasMap, true);
  assert.deepEqual(r.missing, []);
  assert.deepEqual(r.unknown, ['C9']);
  assert.equal(r.claims, 2);
  assert.ok(r.sentencesPerClaim > 1);
  const r2 = roundTrip(GOOD_IR, 'no map here\n');
  assert.equal(r2.hasMap, false);
  assert.deepEqual(r2.missing, ['C1', 'C2']);
});

test('SP-23 wants a vocabulary term linked at first use', () => {
  const vocab = new Map([['paraphraser', { term: 'Paraphraser', anchor: 'def-paraphraser' }]]);
  const bare = lintProse('The paraphraser renders prose. The paraphraser is fast.\n', { vocab });
  assert.equal(bare.findings.filter((f) => f.check === 'SP-23').length, 1);
  const linked = lintProse('The [paraphraser](docs/vocabulary.md#def-paraphraser) renders prose. The paraphraser is fast.\n', { vocab });
  assert.deepEqual(linked.findings.filter((f) => f.check === 'SP-23'), []);
});

test('vocabulary rows carry anchor and status', () => {
  const v = vocabularyEntries();
  const ir = v.get('ir') ?? v.get('intermediate representation');
  assert.ok(ir && ir.anchor && ir.anchor.startsWith('def-'), JSON.stringify(ir));
  assert.equal(ir.status, 'decided');
});

// --- footprint (chunk 4) ---
import { parseFootprint, compareFootprint } from './footprint.mjs';
test('footprint: header parsed, surprises and misses counted', () => {
  const ir = 'Reader: RD-1\nFootprint: docs/a.md; docs/records/; scripts/x.mjs\n';
  const declared = parseFootprint(ir);
  assert.deepEqual(declared, ['docs/a.md', 'docs/records/', 'scripts/x.mjs']);
  const r = compareFootprint(declared, ['docs/a.md', 'docs/records/r.ir.md', 'README.md']);
  assert.deepEqual(r.surprises, ['README.md']);
  assert.deepEqual(r.misses, ['scripts/x.mjs']);
});
test('footprint: no header returns null', () => { assert.equal(parseFootprint('Reader: RD-1\n'), null); });
