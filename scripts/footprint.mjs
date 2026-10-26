#!/usr/bin/env node
// The prediction-surprise measure, mechanical half (docs/ir-schema.md v1.3,
// Footprint header; chunk 4 IR). An IR may declare the files its work is
// expected to touch. After the work, compare the declaration with the files
// the branch changed: files changed but not declared are surprises; files
// declared but unchanged are misses. Both counts are recorded per IR.
// Usage: node scripts/footprint.mjs <file.ir.md> [--base <ref>] [--json]

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export function parseFootprint(irText) {
  const m = /^Footprint:\s*(.+)$/m.exec(irText);
  if (!m) return null;
  return m[1].split(/[;,]\s*/).map((s) => s.trim().replace(/^`|`$/g, '')).filter(Boolean);
}

export function compareFootprint(declared, changed) {
  const match = (file, pattern) => pattern.endsWith('/') ? file.startsWith(pattern) : file === pattern;
  const surprises = changed.filter((f) => !declared.some((d) => match(f, d)));
  const misses = declared.filter((d) => !changed.some((f) => match(f, d)));
  return { declared: declared.length, changed: changed.length, surprises, misses };
}

function main() {
  const args = process.argv.slice(2);
  const json = args.includes('--json');
  const baseIdx = args.indexOf('--base');
  const base = baseIdx !== -1 ? args[baseIdx + 1] : 'main';
  const file = args.find((a) => a.endsWith('.ir.md'));
  if (!file) { console.error('usage: node scripts/footprint.mjs <file.ir.md> [--base <ref>] [--json]'); process.exit(2); }
  const declared = parseFootprint(readFileSync(file, 'utf8'));
  if (!declared) { console.log('no Footprint header'); return; }
  const root = execSync('git rev-parse --show-toplevel', { cwd: dirname(resolve(file)), encoding: 'utf8' }).trim();
  const changed = execSync(`git diff --name-only ${base}...HEAD; git diff --name-only HEAD; git ls-files --others --exclude-standard`, { cwd: root, encoding: 'utf8' })
    .split('\n').map((s) => s.trim()).filter(Boolean);
  const r = compareFootprint(declared, [...new Set(changed)]);
  if (json) { console.log(JSON.stringify(r)); return; }
  console.log(`footprint: declared ${r.declared}, changed ${r.changed}, surprises ${r.surprises.length}, misses ${r.misses.length}`);
  for (const s of r.surprises) console.log(`  surprise ${s}`);
  for (const m of r.misses) console.log(`  miss     ${m}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
