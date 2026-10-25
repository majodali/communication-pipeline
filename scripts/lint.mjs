#!/usr/bin/env node
// Lint for IR documents (checks CK-01..CK-10, docs/ir-schema.md) and
// rendered prose (the lint column of docs/style-spec.md).
// Usage:
//   node scripts/lint.mjs [--json] [--verbose] [files...]   (default: all tracked .md)
//   node scripts/lint.mjs --hook   (Claude Code PostToolUse: reads stdin JSON)
// Exit 1 when any violation is found (0 otherwise). In --hook mode the
// output is the hook JSON; IR violations block, everything else is context.

import { readFileSync, existsSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { resolve, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseIR, sectionKind, wordCount, idsIn, PROVENANCE_KINDS } from './ir.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const READER_RE = /^RD-[1-5]\b/;
const DEICTIC = /\b(the other|the above|the former|the latter|the same)\b/i;
const BARE_ID = /(?<![\w\[\(`/#.-])((?:[A-Z]{1,3}-\d{1,4})|§\d+)(?![\w\]\)`/-])/g;

// A semicolon that follows a colon in the same sentence separates list
// items, not clauses: "three parts: asks; what is covered; what changed".
function isList(s) {
  const colon = s.indexOf(':');
  const semi = s.indexOf(';');
  return colon !== -1 && semi !== -1 && colon < semi;
}

// A ", and" that follows a colon closes a list, not a second clause.
function colonBeforeConjunction(s) {
  const colon = s.indexOf(':');
  const conj = s.search(/,\s(and|but|so)\s/);
  return colon !== -1 && conj !== -1 && colon < conj;
}

// Sentence-initial "This specification restates" names its referent; "This
// is fine" does not. Flag the pronoun form only.
const PRONOUN_THEN_VERB = /^(It|This|That|These|Those)\s+(is|are|was|were|means|makes|made|has|have|had|does|did|will|would|can|could|should|may|might|seems|says|gives|keeps|lets|took|takes)\b/;

function vocabularyTerms() {
  const p = resolve(ROOT, 'docs/vocabulary.md');
  if (!existsSync(p)) return new Set();
  const terms = new Set();
  for (const line of readFileSync(p, 'utf8').split('\n')) {
    const m = /^\|\s*([^|]+?)\s*\|/.exec(line);
    if (m && !/^(Term|---)/.test(m[1])) {
      terms.add(m[1].replace(/\s*\(.*\)$/, '').toLowerCase());
      const abbr = /\(([A-Z]{2,})\)/.exec(m[1]);
      if (abbr) terms.add(abbr[1].toLowerCase());
    }
  }
  return terms;
}

export function lintIR(text, { vocab = vocabularyTerms() } = {}) {
  const ir = parseIR(text);
  const f = [];
  const add = (check, level, line, msg) => f.push({ check, level, line, msg });
  // CK-07 header
  if (!READER_RE.test(ir.header.reader ?? '')) add('CK-07', 'violation', 1, `Reader header is not a catalog identifier: "${ir.header.reader ?? ''}"`);
  if (!/^(report|document)\b/.test(ir.header.purpose ?? '')) add('CK-07', 'violation', 1, `Purpose header must start with "report" or "document": "${ir.header.purpose ?? ''}"`);
  // CK-10 sections
  const kinds = ir.sections.map((s) => sectionKind(s.title));
  const order = ['terms', 'claims', 'relations', 'evidence', 'asks', 'resolution'];
  let last = -1, ok = kinds.length > 0 && kinds[0] === 'terms';
  for (const k of kinds) { const i = order.indexOf(k); if (i < last && !(k === 'claims' && last === 1)) ok = false; if (i > last) last = i; }
  for (const req of ['terms', 'relations', 'evidence']) if (!kinds.includes(req)) ok = false;
  if (!ok) add('CK-10', 'violation', ir.sections[0]?.line ?? 1, `sections must run Terms, Claims, Relations, Evidence, Asks; found: ${ir.sections.map((s) => s.title).join(' | ')}`);
  // CK-08 asks for RD-1/RD-2
  if (/^RD-[12]/.test(ir.header.reader ?? '') && !kinds.includes('asks')) add('CK-08', 'violation', 1, 'an IR for RD-1 or RD-2 needs an Asks section');
  const ids = new Set(ir.elements.map((e) => e.id));
  const terms = new Set(ir.elements.filter((e) => e.kind === 'T').map((e) => e.text.split(/[:(]/)[0].trim().toLowerCase()));
  const clusterOf = new Map();
  for (const e of ir.elements) {
    // CK-05 provenance
    if (PROVENANCE_KINDS.has(e.kind)) {
      if (!e.provenance) add('CK-05', 'violation', e.line, `${e.id} has no provenance status`);
      else {
        const { status, detail } = e.provenance;
        if (status === 'decided' && !detail) add('CK-05', 'violation', e.line, `${e.id}: [decided] needs who and when, or a source`);
        if (status === 'proposed' && !detail) add('CK-05', 'violation', e.line, `${e.id}: [proposed] needs the IR identifier or "this IR"`);
        if (status === 'inferred' && !/^R\d+/.test(detail)) add('CK-05', 'violation', e.line, `${e.id}: [inferred] must cite a relation R<n>`);
      }
    }
    if (e.kind === 'C') {
      const w = wordCount(e.text);
      if (w > 40) add('CK-02', 'violation', e.line, `${e.id} is ${w} words (limit 40)`);
      if (PRONOUN_THEN_VERB.test(e.text)) add('CK-01', 'violation', e.line, `${e.id} opens with a pronoun; name the referent`);
      const d = DEICTIC.exec(e.text);
      if (d) add('CK-01', 'violation', e.line, `${e.id} uses "${d[1]}" without a named referent`);
      if (/\s—\s|\s--\s/.test(e.text) || (/;\s/.test(e.text) && !isList(e.text))) add('CK-03', 'warning', e.line, `${e.id} joins clauses with a semicolon or em-dash; split into claims`);
      else if (w > 25 && /,\s(and|but|so)\s/.test(e.text) && !colonBeforeConjunction(e.text)) add('CK-03', 'warning', e.line, `${e.id} may hold two claims (${w} words with a coordinating clause)`);
      for (const b of e.text.matchAll(/\*\*([^*]+)\*\*/g)) {
        const t = b[1].toLowerCase();
        if (!terms.has(t) && !vocab.has(t)) add('CK-04', 'warning', e.line, `${e.id} bolds "${b[1]}", which is neither a T element nor in the vocabulary`);
      }
      const ev = /evidence:\s*([^.;\]]+)/.exec(e.body);
      if (ev) for (const id of idsIn(ev[1], 'E')) if (!ids.has(id)) add('CK-06', 'violation', e.line, `${e.id} cites ${id}, which does not exist`);
    }
    if (e.kind === 'R') {
      const refs = idsIn(e.text, 'CTGA');
      if (refs.length < 2) add('CK-06', 'violation', e.line, `${e.id} must relate two identifiers`);
      for (const id of refs) if (!ids.has(id)) add('CK-06', 'violation', e.line, `${e.id} names ${id}, which does not exist`);
      if (!/\b(supports|depends-on|contradicts|refines)\b/.test(e.text)) add('CK-06', 'violation', e.line, `${e.id} needs a verb: supports, depends-on, contradicts or refines`);
    }
    if (e.kind === 'G') {
      const m = /cluster:\s*([^\]]+)/.exec(e.text);
      const members = m ? idsIn(m[1], 'C') : [];
      if (!members.length) add('CK-06', 'violation', e.line, `${e.id} lists no claims`);
      for (const id of members) {
        if (!ids.has(id)) add('CK-06', 'violation', e.line, `${e.id} lists ${id}, which does not exist`);
        if (clusterOf.has(id)) add('CK-09', 'violation', e.line, `${id} is in both ${clusterOf.get(id)} and ${e.id}`);
        clusterOf.set(id, e.id);
      }
    }
    if (e.kind === 'A') {
      const dep = /Depends:\s*([^.\]]+)/.exec(e.body);
      if (dep) for (const id of idsIn(dep[1], 'CA')) if (!ids.has(id)) add('CK-06', 'violation', e.line, `${e.id} depends on ${id}, which does not exist`);
    }
  }
  return { findings: f, ir };
}

function proseBlocks(text) {
  // Yields {line, text, kind} for prose paragraphs, skipping code fences,
  // tables, HTML comments and IR-element lines.
  const out = [];
  const lines = text.split(/\r?\n/);
  let fence = false, comment = false, buf = [], start = 0, rowStart = false;
  // A paragraph or list item that opens with a bold label is a fielded row
  // (a register entry, a Classification field). SP-09 permits one em-dash
  // there and SP-07 permits the label.
  const flush = () => { if (buf.length) out.push({ line: start, text: buf.join(' '), kind: rowStart ? 'row' : 'para' }); buf = []; rowStart = false; };
  lines.forEach((raw, i) => {
    const l = raw.trimEnd();
    if (/^\s*```/.test(l)) { flush(); fence = !fence; return; }
    if (fence) return;
    if (/<!--/.test(l)) comment = true;
    if (comment) { if (/-->/.test(l)) comment = false; return; }
    if (/^\s*$/.test(l)) { flush(); return; }
    if (/^\s*\|/.test(l)) { flush(); out.push({ line: i + 1, text: l, kind: 'table' }); return; }
    if (/^#{1,6}\s/.test(l)) { flush(); out.push({ line: i + 1, text: l.replace(/^#+\s*/, ''), kind: 'heading' }); return; }
    if (/^[TCGREA]\d+\.\s/.test(l)) { flush(); return; }
    const isItem = /^\s*(?:[-*]|\d+\.)\s+/.test(l);
    if (isItem) flush();
    const item = l.replace(/^\s*(?:[-*]|\d+\.)\s+(?:\[[ x]\]\s+)?/, '').replace(/^>\s?/, '');
    if (!buf.length) {
      start = i + 1;
      const head = item.split(/\s—\s/)[0];
      if (/^\*\*[^*]+\*\*/.test(item) || (isItem && /\s—\s/.test(item) && head.split(/\s+/).length <= 6)) rowStart = true;
    }
    buf.push(item);
  });
  flush();
  return out;
}

function sentences(p) {
  return p.replace(/`[^`]*`/g, 'code').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').split(/(?<=[.!?])\s+(?=[A-Z"(\[])/).map((s) => s.trim()).filter(Boolean);
}

export function lintProse(text, { verbose = false } = {}) {
  const f = [];
  const add = (check, level, line, msg) => f.push({ check, level, line, msg });
  const blocks = proseBlocks(text);
  const seenIds = new Set();
  const unfenced = text.replace(/```[\s\S]*?```/g, '');
  const hasAsks = /^##\s+Asks\b/m.test(unfenced);
  if (hasAsks) {
    const want = ['Asks', 'What is already covered', 'What changed'];
    const pos = want.map((h) => unfenced.search(new RegExp(`^##\\s+${h}`, 'm')));
    const present = pos.filter((p) => p >= 0).length;
    if (present >= 2 && (pos.some((p) => p < 0) || !(pos[0] < pos[1] && pos[1] < pos[2]))) add('SP-13', 'warning', 1, `a report carries Asks, What is already covered, What changed, in that order; found positions ${pos.join(',')}`);
  }
  for (const b of blocks) {
    if (b.kind === 'heading') {
      if (/^[A-Z]{1,3}-\d+\s*$/.test(b.text)) add('SP-10', 'warning', b.line, `identifier-only header "${b.text}"`);
      if (/\?\s*$/.test(b.text)) add('SP-10', 'warning', b.line, `header ends in a question mark: "${b.text}"`);
      if (/—/.test(b.text) && !/^Chunk \d/.test(b.text)) add('SP-10', 'warning', b.line, `header contains an em-dash: "${b.text}"`);
      continue;
    }
    // bare identifiers: first occurrence in the document, prose and tables
    // alike. The first cell of a table row is a definition site (the row
    // defines the identifier), so it satisfies the first use.
    const scan = b.kind === 'table' ? b.text.replace(/^\|\s*([^|]*)\|/, (m0, cell) => { for (const x of cell.matchAll(BARE_ID)) seenIds.add(x[1]); return '|' + ' '.repeat(cell.length) + '|'; }) : b.text;
    for (const m of scan.matchAll(BARE_ID)) {
      const id = m[1];
      if (seenIds.has(id)) continue;
      seenIds.add(id);
      const after = scan.slice(m.index + id.length, m.index + id.length + 4);
      const inLink = /\[[^\]]*$/.test(scan.slice(0, m.index)) && /^[^\[]*\]\(/.test(scan.slice(m.index));
      if (!inLink && !/^\s*\(/.test(after)) add('SP-05', 'warning', b.line, `${id} appears bare on first use; add its name in parentheses or a link`);
    }
    if (b.kind !== 'para' && b.kind !== 'row') continue;
    const row = b.kind === 'row';
    for (const s of sentences(b.text)) {
      const w = wordCount(s);
      if (w > 35) add('SP-02', 'warning', b.line, `${w}-word sentence: "${s.slice(0, 60)}…"`);
      else if (w > 25 && verbose) add('SP-02', 'info', b.line, `${w}-word sentence`);
      if (PRONOUN_THEN_VERB.test(s)) add('SP-03', 'warning', b.line, `sentence opens with a pronoun: "${s.slice(0, 50)}…"`);
      const d = DEICTIC.exec(s);
      if (d) add('SP-03', 'warning', b.line, `"${d[1]}" without a named referent`);
      if (/^That is [^.]{1,60}\.$/.test(s)) add('SP-08', 'warning', b.line, `aphoristic fragment: "${s}"`);
      const body = row ? s.replace(/^\*\*[^*]+\*\*/, '') : s;
      const dashes = (body.match(/\s—\s/g) ?? []).length;
      if ((row ? dashes > 1 : dashes > 0) || (/;\s+[a-z]/.test(s) && !isList(s))) add('SP-09', 'warning', b.line, `clauses joined by em-dash or semicolon: "${s.slice(0, 60)}…"`);
      // identifiers (CK-01, RD-4), versions (v1.5.0, 1.4.0) and dates are not the numbers SP-20 means
      const nums = s.replace(/\b[A-Z]{1,3}-\d+\b/g, '').replace(/\bv?\d+\.\d+(\.\d+)?\b/g, '').replace(/\b\d{4}-\d{2}-\d{2}\b/g, '').match(/\b\d[\d,.]*\b/g) ?? [];
      if (nums.length >= 3) add('SP-20', 'warning', b.line, `${nums.length} numerals in one sentence; prefer a table or its own line`);
    }
    let first = true;
    for (const m of b.text.matchAll(/\*\*([^*]+)\*\*/g)) {
      const w = wordCount(m[1]);
      const label = row && first;
      first = false;
      if (w > 4 && !/:$/.test(m[1]) && !(label && w <= 8)) add('SP-07', 'warning', b.line, `bold span of ${w} words: "${m[1].slice(0, 40)}…" (bold is a label or a definition site)`);
    }
    // X is not Y. It is Z.
    const ss = sentences(b.text);
    for (let i = 0; i + 1 < ss.length; i++) if (/\bis not\b/.test(ss[i]) && /^It is\b/.test(ss[i + 1])) add('SP-08', 'warning', b.line, `suspense construction: "${ss[i].slice(0, 40)}… ${ss[i + 1].slice(0, 20)}…"`);
  }
  return { findings: f };
}

export function lintFile(path, opts = {}) {
  const text = readFileSync(path, 'utf8');
  const isIR = path.endsWith('.ir.md');
  const r = isIR ? lintIR(text, opts) : lintProse(text, opts);
  return { path, isIR, findings: r.findings, ir: r.ir };
}

function trackedMarkdown() {
  try {
    return execSync('git ls-files -- "*.md"', { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean).map((p) => resolve(ROOT, p));
  } catch { return []; }
}

function format(results) {
  const lines = [];
  let v = 0, w = 0, i = 0;
  for (const r of results) {
    for (const f of r.findings) {
      if (f.level === 'violation') v++; else if (f.level === 'warning') w++; else i++;
      lines.push(`${relative(process.cwd(), r.path)}:${f.line}: ${f.level.toUpperCase().padEnd(9)} ${f.check} ${f.msg}`);
    }
  }
  lines.push(`${results.length} file(s); ${v} violation(s), ${w} warning(s), ${i} info`);
  return { text: lines.join('\n'), v, w, i };
}

async function main() {
  const args = process.argv.slice(2);
  const hook = args.includes('--hook');
  const json = args.includes('--json');
  const verbose = args.includes('--verbose');
  let files = args.filter((a) => !a.startsWith('--'));
  if (hook) {
    let input = '';
    for await (const chunk of process.stdin) input += chunk;
    let fp = null;
    try { const j = JSON.parse(input); fp = j.tool_response?.filePath ?? j.tool_input?.file_path ?? null; } catch { /* no input */ }
    if (!fp || !fp.endsWith('.md') || !existsSync(fp) || !statSync(fp).isFile()) return;
    const r = lintFile(fp, { verbose });
    const { text, v } = format([r]);
    if (r.isIR && v > 0) {
      const head = text.split('\n');
      const shown = head.length > 16 ? [...head.slice(0, 15), `… ${head.length - 16} more; run: node scripts/lint.mjs ${relative(ROOT, fp)}`, head.at(-1)].join('\n') : text;
      process.stdout.write(JSON.stringify({ decision: 'block', reason: `IR schema violations (docs/ir-schema.md):\n${shown}` }));
    } else if (r.findings.length) {
      process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PostToolUse', additionalContext: `lint findings for ${relative(ROOT, fp)}:\n${text}` } }));
    }
    return;
  }
  if (!files.length) files = trackedMarkdown();
  const results = files.map((p) => lintFile(resolve(p), { verbose }));
  if (json) { process.stdout.write(JSON.stringify(results.map(({ path, isIR, findings }) => ({ path: relative(ROOT, path), isIR, findings })), null, 2)); }
  else { const { text, v } = format(results); console.log(text); process.exitCode = v > 0 ? 1 : 0; return; }
  process.exitCode = results.some((r) => r.findings.some((f) => f.level === 'violation')) ? 1 : 0;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
