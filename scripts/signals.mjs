#!/usr/bin/env node
// Meta-review signals (branch point v1.7, owner decision of 2026-10-29 on
// evaluation case 009). Reads a review record and reports, per signal,
// what the record shows.
//   Signal 1: in two or more rounds a confirmation line reports fixes not
//             held, or a claims-check line reports a missing or stale claim.
//             Confirmation lines have one fixed form:
//             "Confirmation: H of A fixes hold. Not held: <...>. Declines accepted: K of D. New defects: N."
//             A confirmation-like line in any other form is reported as
//             unparsed, and no "not indicated" may be written while one is.
//   Signal 2: a claim named on the "Mismatches:" line of two rounds
//             (mechanical); a declined finding raised again (wording, hand check).
//   Signal 3: the prose's words per IR claim at the last round exceed round
//             1's by more than one tenth, from the curve table.
//   Signal 4: in round 3 or later, a contradiction in a fix-touched passage
//             (wording, hand check).
// Usage: node scripts/signals.mjs <review-record.md> [--json]

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

function num(s) { return Number(String(s).replace(/,/g, '')); }

export const CONFIRMATION_FORM = /^Confirmation: (\d+) of (\d+) fixes hold\. Not held: ([^.]+)\. Declines accepted: (\d+) of (\d+)\. New defects: (\d+)\.$/;

export function readSignals(text, { fraction = 0.1 } = {}) {
  const lines = text.split('\n');
  // curve rows: | round | prose words | IR claims | ...
  const rows = [];
  for (const l of lines) {
    const m = /^\|\s*(\d+)[a-z]?\s*\|\s*([\d,]+)\s*\|\s*([\d,]+)\s*\|/.exec(l);
    if (m) rows.push({ round: Number(m[1]), words: num(m[2]), claims: num(m[3]) });
  }
  const first = rows.find((r) => r.round === 1);
  const last = rows.length ? rows[rows.length - 1] : null;
  const wpc = (r) => (r && r.claims ? r.words / r.claims : null);
  const growth = wpc(first) && wpc(last) ? (wpc(last) - wpc(first)) / wpc(first) : null;
  const signal3 = growth !== null && growth > fraction;

  let round = 0;
  const roundsWithFailure = new Set();
  const evidence1 = [];
  const unparsed = [];
  const mismatchRounds = new Map();
  const hits2 = [];
  const hits4 = [];
  for (const raw of lines) {
    const l = raw.trim();
    const h = /^#+\s*Round\s+(\d+)/.exec(l);
    if (h) round = Number(h[1]);
    if (/^Confirmation:/.test(l) || /\bfixes\s+(hold|held)\b/i.test(l)) {
      const c = CONFIRMATION_FORM.exec(l);
      if (!c) { unparsed.push(`round ${round}: ${l.slice(0, 100)}`); }
      else if (Number(c[1]) < Number(c[2])) { roundsWithFailure.add(round); evidence1.push(`round ${round}: ${c[1]} of ${c[2]} fixes hold; not held ${c[3]}`); }
    }
    const k = /missing\s+(\d+)(?:[^.\n]*?stale\s+(\d+))?/i.exec(l);
    if (k && (Number(k[1]) > 0 || Number(k[2] ?? 0) > 0)) { roundsWithFailure.add(round); evidence1.push(`round ${round}: ${k[0]}`); }
    const mm = /^Mismatches:\s*(.*)$/.exec(l);
    if (mm) for (const id of mm[1].match(/\bC\d+\b/g) || []) {
      if (!mismatchRounds.has(id)) mismatchRounds.set(id, new Set());
      mismatchRounds.get(id).add(round);
    }
    if (/raised again/i.test(l)) hits2.push(`round ${round}: ${l.slice(0, 120)}`);
    if (round >= 3 && /contradiction/i.test(l) && /(earlier|previous) (round'?s? )?fix|fix(es)? touched|fix-induced/i.test(l)) hits4.push(`round ${round}: ${l.slice(0, 120)}`);
  }
  const signal1 = roundsWithFailure.size >= 2;
  const recurring = [...mismatchRounds].filter(([, r]) => r.size >= 2).map(([id, r]) => `${id} in rounds ${[...r].sort((a, b) => a - b).join(', ')}`);
  const signal2 = recurring.length > 0;
  const fired = signal1 || signal2 || signal3;
  return {
    rounds: rows.length,
    unparsed,
    signal1: { fired: signal1, roundsWithFailure: [...roundsWithFailure].sort((a, b) => a - b), evidence: evidence1 },
    signal2: { fired: signal2, recurring, check: hits2 },
    signal3: { fired: signal3, firstWordsPerClaim: wpc(first) === null ? null : Number(wpc(first).toFixed(2)), lastWordsPerClaim: wpc(last) === null ? null : Number(wpc(last).toFixed(2)), growth: growth === null ? null : Number(growth.toFixed(3)) },
    signal4: { fired: null, check: hits4 },
    subject: unparsed.length ? 'unparsed' : fired ? true : (hits2.length || hits4.length ? 'check' : false),
  };
}

function main() {
  const args = process.argv.slice(2);
  const file = args.find((a) => !a.startsWith('--'));
  if (!file) { console.error('usage: signals.mjs <review-record.md> [--json]'); process.exit(2); }
  const r = readSignals(readFileSync(resolve(file), 'utf8'));
  if (args.includes('--json')) { process.stdout.write(JSON.stringify(r, null, 2)); return; }
  console.log(`rounds ${r.rounds}`);
  if (r.unparsed.length) console.log(`unparsed confirmation lines (${r.unparsed.length}): ${r.unparsed.join(' | ')}`);
  console.log(`signal 1 (fixes not held or claims missing or stale, two or more rounds): ${r.signal1.fired ? 'FIRED' : 'no'}${r.signal1.evidence.length ? ' :: ' + r.signal1.evidence.join('; ') : ''}`);
  console.log(`signal 2 (a claim on the Mismatches line of two rounds): ${r.signal2.fired ? 'FIRED :: ' + r.signal2.recurring.join('; ') : 'no'}${r.signal2.check.length ? ' | declined raised again, CHECK :: ' + r.signal2.check.join(' | ') : ''}`);
  console.log(`signal 3 (words per claim grew over one tenth): ${r.signal3.fired ? 'FIRED' : 'no'} :: ${r.signal3.firstWordsPerClaim} to ${r.signal3.lastWordsPerClaim} words per claim, ${r.signal3.growth === null ? 'n/a' : Math.round(r.signal3.growth * 100) + '%'}`);
  console.log(`signal 4 (contradiction in round 3 or later in a fix-touched passage): ${r.signal4.check.length ? 'CHECK :: ' + r.signal4.check.join(' | ') : 'no wording found'}`);
  console.log(`meta-review subject: ${r.subject === 'unparsed' ? 'UNDECIDED, unparsed confirmation line; no "not indicated" may be written' : r.subject === true ? 'yes' : r.subject === 'check' ? 'check signal 4 or the declined wording by hand' : 'not indicated'}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
