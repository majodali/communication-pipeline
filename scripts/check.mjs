#!/usr/bin/env node
// The checks of one round step (branch point v1.11, Rounds steps 1 and 5;
// evaluation case 015 change 24). Runs the lint, the round-trip check and
// the claims check on the text under review, and prints one line for the
// review record:
//   Checks: L sentences over 25 words; M of N claims mapped; C claims changed, X missing, Y stale.
// The claims check compares the IR and the prose with their versions at a
// base: a git ref (default HEAD), or an empty base when the IR is new.
// Usage: node scripts/check.mjs <prose.md> [--ir <file.ir.md>] [--base <ref> | --empty-base] [--json]
// Exit 1 when any count but N is not zero, or the lint finds a violation.

import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { lintIR, lintProse } from './lint.mjs';
import { roundTrip } from './roundtrip.mjs';
import { claimsCheck } from './claims-check.mjs';

// The file's text at a git ref, or '' when the file is absent there.
export function atRef(file, ref) {
  const abs = resolve(file);
  const root = execFileSync('git', ['rev-parse', '--show-toplevel'], { cwd: dirname(abs), encoding: 'utf8' }).trim();
  try { return execFileSync('git', ['show', `${ref}:${relative(root, abs).split('\\').join('/')}`], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); }
  catch { return ''; }
}

export function runChecks({ irText, proseText, baseIrText, baseProseText, irFile = null, proseFile = null }) {
  const lint = [...lintIR(irText, { file: irFile }).findings, ...lintProse(proseText, { file: proseFile }).findings];
  const long = lint.filter((f) => f.check === 'SP-02');
  const violations = lint.filter((f) => f.level === 'violation');
  const rt = roundTrip(irText, proseText);
  const cc = claimsCheck(baseIrText, irText, proseText, { oldProseText: baseProseText });
  const line = `Checks: ${long.length} sentences over 25 words; ${rt.mapped} of ${rt.claims} claims mapped; ${cc.changed.length} claims changed, ${cc.missing.length} missing, ${cc.stale.length} stale.`;
  const clean = !long.length && rt.mapped === rt.claims && !rt.unknown.length && !cc.missing.length && !cc.stale.length && !violations.length;
  return { line, clean, long, violations, unmapped: rt.missing, unknown: rt.unknown, missing: cc.missing, stale: cc.stale, removed: cc.removed, changed: cc.changed.length };
}

function main() {
  const args = process.argv.slice(2);
  const opt = (k) => { const x = args.indexOf(k); return x === -1 ? null : args[x + 1]; };
  const skip = new Set(['--ir', '--base'].map((k) => args.indexOf(k) + 1).filter((x) => x > 0));
  const prose = args.find((a, i) => !a.startsWith('--') && !skip.has(i));
  if (!prose) { console.error('usage: check.mjs <prose.md> [--ir <file.ir.md>] [--base <ref> | --empty-base] [--json]'); process.exit(2); }
  const ir = opt('--ir') ?? prose.replace(/\.md$/, '.ir.md');
  if (!existsSync(ir)) { console.error(`no IR at ${ir}; name it with --ir`); process.exit(2); }
  const empty = args.includes('--empty-base');
  const base = opt('--base') ?? 'HEAD';
  const r = runChecks({
    irText: readFileSync(ir, 'utf8'), proseText: readFileSync(prose, 'utf8'),
    baseIrText: empty ? '' : atRef(ir, base), baseProseText: empty ? '' : atRef(prose, base),
    irFile: resolve(ir), proseFile: resolve(prose),
  });
  if (args.includes('--json')) { console.log(JSON.stringify(r, null, 2)); process.exitCode = r.clean ? 0 : 1; return; }
  for (const f of r.long) console.log(`${prose}:${f.line}: ${f.msg}`);
  for (const f of r.violations) console.log(`lint violation ${f.check} line ${f.line}: ${f.msg}`);
  if (r.unmapped.length) console.log(`claims the render map omits: ${r.unmapped.join(', ')}`);
  if (r.unknown.length) console.log(`identifiers the render map names that the IR lacks: ${r.unknown.join(', ')}`);
  if (r.missing.length) console.log(`changed claims no sentence carries: ${r.missing.join(', ')}`);
  if (r.stale.length) console.log(`changed claims whose sentence did not change: ${r.stale.join(', ')}`);
  if (r.removed.length) console.log(`claims removed since the base: ${r.removed.join(', ')}`);
  console.log(`base: ${empty ? 'empty' : base}`);
  console.log(r.line);
  process.exitCode = r.clean ? 0 : 1;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
