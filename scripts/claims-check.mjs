#!/usr/bin/env node
// The text half of the round-trip check (branch point v1.4, Rounds step 1).
// Compares two versions of an IR, lists the claims whose text changed or
// that are new, and for each finds the prose sentence that best carries it,
// by overlap of content words. A claim with no sentence above the overlap
// floor is reported as missing: the fix reached the IR and not the prose.
// With --old-prose <old.md> (branch point v1.5, case 008 change 1), a changed
// claim whose best-matching sentence also stands verbatim in the old prose is
// reported as stale: the claim changed and its sentence did not.
// Usage: node scripts/claims-check.mjs <old.ir.md> <new.ir.md> <prose.md> [--old-prose <old.md>] [--floor 0.5] [--json]

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseIR } from './ir.mjs';

const STOP = new Set(['the', 'a', 'an', 'and', 'or', 'of', 'to', 'in', 'is', 'are', 'its', 'it', 'that', 'this', 'for', 'by', 'with', 'as', 'on', 'at', 'from', 'when', 'one', 'not', 'no', 'be', 'has', 'have', 'each', 'every', 'any', 'than', 'then', 'into', 'their', 'which', 'who', 'after', 'before']);

export function contentWords(s) {
  return new Set(s.toLowerCase().replace(/`[^`]*`/g, (m) => m).replace(/[^a-z0-9`<>\-\s]/g, ' ').split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)));
}

export function sentencesOf(prose) {
  const body = prose.replace(/<!--[\s\S]*?-->/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  const out = [];
  for (const line of body.split('\n')) {
    const t = line.trim();
    if (!t || /^#/.test(t)) continue;
    if (/^\|/.test(t)) { for (const cell of t.split('|')) for (const s of cell.split(/(?<=[.!?])\s+(?=[A-Z`"(])/)) if (s.trim().length > 3) out.push(s.trim()); continue; }
    out.push(t);
  }
  // join wrapped lines into paragraphs, then split into sentences
  const joined = []; let cur = '';
  for (const l of out) { if (/[.!?]$/.test(cur) || cur === '') { if (cur) joined.push(cur); cur = l; } else cur += ' ' + l; }
  if (cur) joined.push(cur);
  return joined.flatMap((p) => p.split(/(?<=[.!?])\s+(?=[A-Z`"(\[])/)).map((s) => s.trim()).filter(Boolean);
}

export function overlap(a, b) {
  if (!a.size) return 0;
  let n = 0; for (const w of a) if (b.has(w)) n++;
  return n / a.size;
}

export function claimsCheck(oldText, newText, proseText, { floor = 0.5, oldProseText = null } = {}) {
  const oldSentences = oldProseText === null ? null : new Set(sentencesOf(oldProseText));
  const oldC = new Map(parseIR(oldText).elements.filter((e) => e.kind === 'C').map((e) => [e.id, e.text]));
  const newC = parseIR(newText).elements.filter((e) => e.kind === 'C');
  const sentences = sentencesOf(proseText).map((s) => ({ s, w: contentWords(s) }));
  const changed = newC.filter((e) => oldC.get(e.id) !== e.text);
  const rows = changed.map((e) => {
    const w = contentWords(e.text);
    let best = { score: 0, sentence: '' };
    for (const x of sentences) { const sc = overlap(w, x.w); if (sc > best.score) best = { score: sc, sentence: x.s }; }
    const missing = best.score < floor;
    const stale = !missing && oldSentences !== null && oldC.has(e.id) && oldSentences.has(best.sentence);
    return { id: e.id, status: oldC.has(e.id) ? 'changed' : 'new', score: Number(best.score.toFixed(2)), sentence: best.sentence, missing, stale };
  });
  const removed = [...oldC.keys()].filter((id) => !newC.some((e) => e.id === id));
  return { changed: rows, removed, missing: rows.filter((r) => r.missing).map((r) => r.id), stale: rows.filter((r) => r.stale).map((r) => r.id) };
}

function main() {
  const args = process.argv.slice(2);
  const oi = args.indexOf('--old-prose'); const oldProse = oi >= 0 ? args[oi + 1] : null;
  const fi = args.indexOf('--floor'); const floor = fi >= 0 ? Number(args[fi + 1]) : 0.5;
  const files = args.filter((a, i) => !a.startsWith('--') && !/^\d/.test(a) && i !== oi + 1 && i !== fi + 1);
  if (files.length < 3) { console.error('usage: claims-check.mjs <old.ir.md> <new.ir.md> <prose.md> [--floor 0.5] [--json]'); process.exit(2); }
  const r = claimsCheck(readFileSync(resolve(files[0]), 'utf8'), readFileSync(resolve(files[1]), 'utf8'), readFileSync(resolve(files[2]), 'utf8'), { floor, oldProseText: oldProse ? readFileSync(resolve(oldProse), 'utf8') : null });
  if (args.includes('--json')) { process.stdout.write(JSON.stringify(r, null, 2)); return; }
  for (const row of r.changed) console.log(`${row.id} ${row.status} ${row.missing ? 'MISSING' : row.stale ? 'STALE' : 'ok'} ${row.score} :: ${row.sentence.slice(0, 100)}`);
  if (r.removed.length) console.log(`removed: ${r.removed.join(', ')}`);
  console.log(`changed ${r.changed.length}, missing ${r.missing.length}${r.missing.length ? ' (' + r.missing.join(', ') + ')' : ''}, stale ${r.stale.length}${r.stale.length ? ' (' + r.stale.join(', ') + ')' : ''}`);
  process.exitCode = r.missing.length || r.stale.length ? 1 : 0;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
