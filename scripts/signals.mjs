#!/usr/bin/env node
// Meta-review signals (branch point v1.6, owner decision of 2026-10-27).
// Reads a review record and reports, per signal, what the record shows.
// Signals 1 and 3 are read from the record's numbers: the "N of M fixes
// hold" confirmation lines and "missing N, stale M" claims-check lines
// (signal 1), and the curve table's prose word counts (signal 3). Signals
// 2 and 4 are read from the record's wording and reported for a reader to
// confirm: a declined finding raised again or a mismatch recurring (2), a
// contradiction after round 3 in a passage an earlier fix touched (4).
// Usage: node scripts/signals.mjs <review-record.md> [--count <n>] [--json]

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

function num(s) { return Number(String(s).replace(/,/g, '')); }

export function readSignals(text, { fraction = 0.1 } = {}) {
  const lines = text.split('\n');
  // curve rows: | round | prose words | ... ; first numeric column after the round
  const rows = [];
  for (const l of lines) {
    const m = /^\|\s*(\d+)[a-z]?\s*\|\s*([\d,]+)\s*\|/.exec(l);
    if (m) rows.push({ round: Number(m[1]), words: num(m[2]) });
  }
  const first = rows.find((r) => r.round === 1);
  const last = rows.length ? rows[rows.length - 1] : null;
  const growth = first && last ? (last.words - first.words) / first.words : null;
  const signal3 = growth !== null && growth > fraction;
  // confirmation and claims-check lines, attributed to the nearest preceding "Round n" heading
  let round = 0;
  const roundsWithFailure = new Set();
  const evidence1 = [];
  for (const l of lines) {
    const h = /^#+\s*Round\s+(\d+)/.exec(l);
    if (h) round = Number(h[1]);
    const c = /(\d+)\s+of\s+(\d+)\s+(?:accepted\s+)?fixes\s+(?:hold|held)/i.exec(l);
    if (c && Number(c[1]) < Number(c[2])) { roundsWithFailure.add(round); evidence1.push(`round ${round}: ${c[0]}`); }
    const k = /missing\s+(\d+)(?:[^.\n]*?stale\s+(\d+))?/i.exec(l);
    if (k && (Number(k[1]) > 0 || Number(k[2] ?? 0) > 0)) { roundsWithFailure.add(round); evidence1.push(`round ${round}: ${k[0]}`); }
  }
  const signal1 = roundsWithFailure.size >= 2;
  // wording for signals 2 and 4
  const hits2 = lines.filter((l) => /raised again|recurr(ed|ing|ence)|repeated by (two|three|four)/i.test(l)).map((l) => l.trim().slice(0, 120));
  round = 0; const hits4 = [];
  for (const l of lines) {
    const h = /^#+\s*Round\s+(\d+)/.exec(l);
    if (h) round = Number(h[1]);
    if (round > 3 && /contradiction/i.test(l) && /(earlier|previous) (round'?s? )?fix|fix(es)? touched|fix-induced/i.test(l)) hits4.push(`round ${round}: ${l.trim().slice(0, 120)}`);
  }
  return {
    rounds: rows.length,
    signal1: { fired: signal1, roundsWithFailure: [...roundsWithFailure].sort(), evidence: evidence1 },
    signal2: { fired: null, check: hits2 },
    signal3: { fired: signal3, firstWords: first?.words ?? null, lastWords: last?.words ?? null, growth: growth === null ? null : Number(growth.toFixed(3)) },
    signal4: { fired: null, check: hits4 },
    subject: signal1 || signal3 ? true : (hits2.length || hits4.length ? 'check' : false),
  };
}

function main() {
  const args = process.argv.slice(2);
  const file = args.find((a) => !a.startsWith('--'));
  if (!file) { console.error('usage: signals.mjs <review-record.md> [--json]'); process.exit(2); }
  const r = readSignals(readFileSync(resolve(file), 'utf8'));
  if (args.includes('--json')) { process.stdout.write(JSON.stringify(r, null, 2)); return; }
  console.log(`rounds ${r.rounds}`);
  console.log(`signal 1 (fixes not reaching the prose or not confirmed, two or more rounds): ${r.signal1.fired ? 'FIRED' : 'no'}${r.signal1.evidence.length ? ' :: ' + r.signal1.evidence.join('; ') : ''}`);
  console.log(`signal 2 (declined finding raised again, or recurring mismatch): ${r.signal2.check.length ? 'CHECK :: ' + r.signal2.check.join(' | ') : 'no wording found'}`);
  console.log(`signal 3 (growth over one tenth): ${r.signal3.fired ? 'FIRED' : 'no'} :: ${r.signal3.firstWords} to ${r.signal3.lastWords}, ${r.signal3.growth === null ? 'n/a' : Math.round(r.signal3.growth * 100) + '%'}`);
  console.log(`signal 4 (contradiction after round 3 in a fix-touched passage): ${r.signal4.check.length ? 'CHECK :: ' + r.signal4.check.join(' | ') : 'no wording found'}`);
  console.log(`meta-review subject: ${r.subject === true ? 'yes' : r.subject === 'check' ? 'check signals 2 and 4 by hand' : 'not indicated'}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
