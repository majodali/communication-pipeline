#!/usr/bin/env node
// The branch point (docs/branch-point.md v1): reads one IR, computes the
// inputs, applies BP-01..BP-09 in order, prints the disposition, and
// appends a row to eval/dispatch-log.md unless --dry-run.
// Usage: node scripts/dispatch.mjs <file.ir.md> [--flag review] [--dry-run] [--json]

import { readFileSync, appendFileSync, existsSync, writeFileSync } from 'node:fs';
import { resolve, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseIR, wordCount } from './ir.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const LOG = resolve(ROOT, 'eval/dispatch-log.md');

export function inputsOf(ir, ownerFlag = '') {
  const reader = (ir.header.reader ?? '').match(/^RD-\d/)?.[0] ?? '';
  const purpose = (ir.header.purpose ?? '').match(/^(report|document)/)?.[1] ?? '';
  const claims = ir.elements.filter((e) => e.kind === 'C');
  const normative = /^yes/i.test(ir.header.normative ?? '');
  return {
    reader, purpose, normative,
    claims: claims.length,
    proposedTerms: ir.elements.filter((e) => e.kind === 'T' && e.provenance?.status === 'proposed').length,
    dependentAsks: ir.elements.filter((e) => e.kind === 'A' && /Depends:/.test(e.body)).length,
    longestClaim: Math.max(0, ...claims.map((c) => wordCount(c.text))),
    ownerFlag,
  };
}

export function decide(i) {
  if (i.ownerFlag === 'review') return { rule: 'BP-02', disposition: i.normative ? 'D3' : 'D2' };
  if (i.purpose === 'document' && i.normative) return { rule: 'BP-02a', disposition: 'D3' }; // D3: reviewer rounds until readable, limit ten (v1.3)
  if (i.purpose === 'document') return { rule: 'BP-03', disposition: 'D2' };
  if (i.reader === 'RD-4' || i.reader === 'RD-5') return { rule: 'BP-04', disposition: 'D2' };
  if (i.proposedTerms > 0 && i.purpose === 'document') return { rule: 'BP-05', disposition: 'D2' };
  if (i.proposedTerms > 0) return { rule: 'BP-05a', disposition: 'D1' };
  if (i.reader === 'RD-2') return { rule: 'BP-06', disposition: 'D1' };
  if (i.reader === 'RD-1' && (i.claims > 6 || i.dependentAsks > 0 || i.longestClaim > 30)) return { rule: 'BP-07', disposition: 'D1' };
  if (i.reader === 'RD-3' && (i.claims > 12 || i.dependentAsks > 0)) return { rule: 'BP-08', disposition: 'D1' };
  if (i.reader === 'RD-1' || i.reader === 'RD-3') return { rule: 'BP-09', disposition: 'D0' };
  return { rule: 'BP-03', disposition: 'D2' }; // unknown reader: full pipeline, and CK-07 will have flagged it
}

const HEADER = `# Dispatch log

Register of every IR the branch point routed (docs/branch-point.md,
section *Record*). Row shape: date · IR · reader · purpose · claims ·
proposed terms · dependent asks · longest claim · flag · rule · disposition.
Newest last. The data chunk 3 tunes the thresholds against.

| Date | IR | Reader | Purpose | Claims | Proposed terms | Dependent asks | Longest claim | Flag | Rule | Disposition |
|---|---|---|---|---|---|---|---|---|---|---|
`;

function main() {
  const args = process.argv.slice(2);
  const file = args.find((a) => !a.startsWith('--'));
  if (!file) { console.error('usage: dispatch.mjs <file.ir.md> [--flag review] [--dry-run] [--json]'); process.exit(2); }
  const flag = args.includes('--flag') ? args[args.indexOf('--flag') + 1] : '';
  const ir = parseIR(readFileSync(resolve(file), 'utf8'));
  const i = inputsOf(ir, flag);
  const d = decide(i);
  const row = `| ${new Date().toISOString().slice(0, 10)} | ${relative(process.cwd(), resolve(file))} | ${i.reader} | ${i.purpose} | ${i.claims} | ${i.proposedTerms} | ${i.dependentAsks} | ${i.longestClaim} | ${flag || '—'} | ${d.rule} | ${d.disposition} |`;
  if (args.includes('--json')) console.log(JSON.stringify({ ...i, ...d }));
  else console.log(`${d.disposition} (${d.rule}) — reader ${i.reader}, ${i.purpose}, ${i.claims} claims, ${i.proposedTerms} proposed terms, ${i.dependentAsks} dependent asks, longest claim ${i.longestClaim} words`);
  if (!args.includes('--dry-run')) {
    if (!existsSync(LOG)) writeFileSync(LOG, HEADER);
    appendFileSync(LOG, row + '\n');
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
