#!/usr/bin/env node
// Meta-review signals (branch point v1.11, the owner's decision of 2026-11-02
// on evaluation case 015; v1.10 on case 012; v1.9 on cases 010 and 011).
// Reads a review record and reports what it shows for the signals the
// script reads. The reasoning role runs it at Rounds step 4, after writing
// the round's "Mismatches:" line, and at the end of a count.
//   Signal 1: in two or more rounds of the last count, a confirmation line
//             reports fixes not held (case 015 change 2: the claims check
//             no longer counts). The line has one fixed form:
//             "Confirmation: H of A fixes hold. Not held: <...>. Declines accepted: K of D. New defects: N."
//   Signal 2: a claim of the last count's "Mismatches:" lines named in two
//             rounds of the text's counts (keyed on a claim, case 015 change
//             3). An entry names the claim the restatement contradicts and,
//             after "relied on", the claim of the quoted sentence:
//             "C41 (relied on C35)"; a recurrence counts on either claim. An
//             "(own)" mark in an older record is read and ignored. Claims on
//             earlier counts' lines that do not recur into the last count are
//             listed as information.
// The script stops with an error on a line it cannot read (case 015 change
// 17): a confirmation line outside the fixed form, a "Mismatches:" line
// that names no claim and is not "none", or a "Meta-review:" line whose
// value is not pending, not indicated or delivered. The reasoning role
// corrects the line and runs the script again. The script reads the
// confirmation and Meta-review lines of the last "## Count n" section only
// (text before the first such heading is count 1), and the "Mismatches:"
// lines of every count. The reasoning role reads the rest of signal 2 and
// signal 4. The script reports a "Meta-review: not indicated" line its own
// reading contradicts.
// Usage: node scripts/signals.mjs <review-record.md> [--json]

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

function num(s) { return Number(String(s).replace(/,/g, '')); }

export const CONFIRMATION_FORM = /^Confirmation: (\d+) of (\d+) fixes hold\. Not held: ([^.]+)\. Declines accepted: (\d+) of (\d+)\. New defects: (\d+)\.$/;

// Entries of a "Mismatches:" line, split at top-level commas.
export function mismatchEntries(body) {
  const entries = [];
  let depth = 0, cur = '';
  for (const ch of body) {
    if (ch === '(') depth++;
    if (ch === ')') depth = Math.max(0, depth - 1);
    if (ch === ',' && depth === 0) { entries.push(cur); cur = ''; } else cur += ch;
  }
  entries.push(cur);
  const out = [];
  for (const e of entries) {
    const relied = new Set();
    for (const r of e.matchAll(/relied on\s+([^;)]*)/gi)) for (const id of r[1].match(/\bC\d+\b/g) || []) relied.add(id);
    for (const id of e.match(/\bC\d+\b/g) || []) out.push({ id, relied: relied.has(id) });
  }
  return out;
}

export class UnreadableLine extends Error {
  constructor(line, text, why) { super(`line ${line}: ${why}: ${text.slice(0, 100)}`); this.line = line; this.text = text; }
}

export function readSignals(text) {
  const all = text.split('\n');
  // Count of each line: "## Count n" headings; text before the first is count 1.
  let start = 0, count = 1, multi = false;
  const countOf = all.map((l, i) => {
    const c = /^##\s+Count\s+(\d+)/.exec(l);
    if (c) { start = i; count = Number(c[1]); if (count > 1) multi = true; }
    return count;
  });
  const lastCount = countOf.length ? countOf[countOf.length - 1] : 1;
  const lines = all.slice(start);

  // curve rows of the last count: | round | prose words | IR claims | ...
  const rows = [];
  for (const l of lines) {
    const m = /^\|\s*(\d+)[a-z]?\s*\|\s*([\d,]+)\s*\|\s*([\d,]+)\s*\|/.exec(l);
    if (m) rows.push({ round: Number(m[1]), words: num(m[2]), claims: num(m[3]) });
  }

  // Mismatches lines of every count.
  const occurrences = new Map(); // id -> [{count, round, relied}]
  {
    let round = 0, c = 1;
    all.forEach((raw, i) => {
      const l = raw.trim();
      if (countOf[i] !== c) { c = countOf[i]; round = 0; }
      const h = /^#+\s*Round\s+(\d+)/.exec(l);
      if (h) round = Number(h[1]);
      const mm = /^Mismatches:\s*(.*)$/.exec(l);
      if (mm && !/^none\.?$/i.test(mm[1].trim()) && !/\bC\d+\b/.test(mm[1])) throw new UnreadableLine(i + 1, l, 'a Mismatches line names no claim and is not "none"');
      if (mm) for (const { id, relied } of mismatchEntries(mm[1])) {
        if (!occurrences.has(id)) occurrences.set(id, []);
        occurrences.get(id).push({ count: c, round, relied });
      }
    });
  }
  const describe = (occ) => {
    const keys = [...new Set(occ.map((o) => `${o.count}:${o.round}`))]
      .map((k) => k.split(':').map(Number))
      .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const relied = occ.filter((o) => o.relied).map((o) => (multi ? `count ${o.count} round ${o.round}` : `round ${o.round}`));
    let where;
    if (!multi) where = `round${keys.length > 1 ? 's' : ''} ${keys.map((k) => k[1]).join(', ')}`;
    else {
      const byCount = new Map();
      for (const [cn, r] of keys) { if (!byCount.has(cn)) byCount.set(cn, []); byCount.get(cn).push(r); }
      where = [...byCount].map(([cn, rs]) => `count ${cn} round${rs.length > 1 ? 's' : ''} ${rs.join(', ')}`).join('; ');
    }
    return { rounds: keys.length, where: where + (relied.length ? ` (relied on: ${[...new Set(relied)].join(', ')})` : '') };
  };
  const recurring = [];
  const earlier = [];
  for (const [id, occ] of occurrences) {
    const d = describe(occ);
    const inLast = occ.some((o) => o.count === lastCount);
    if (inLast && d.rounds >= 2) recurring.push(`${id} in ${d.where}`);
    else if (!inLast) earlier.push(`${id} in ${d.where}`);
  }
  const signal2 = recurring.length > 0;

  // Confirmation and Meta-review lines, last count only.
  let round = 0;
  const roundsSeen = new Set();
  const roundsWithFailure = new Set();
  const evidence1 = [];
  let notIndicated = null;
  lines.forEach((raw, k) => {
    const l = raw.trim();
    const at = start + k + 1;
    const h = /^#+\s*Round\s+(\d+)/.exec(l);
    if (h) { round = Number(h[1]); roundsSeen.add(round); }
    if (/^Meta-review:/i.test(l)) {
      if (!/^Meta-review:\s*(pending|not indicated|delivered)\b/i.test(l)) throw new UnreadableLine(at, l, 'a Meta-review line whose value is not pending, not indicated or delivered');
      if (/^Meta-review:\s*not indicated/i.test(l)) notIndicated = l.slice(0, 100);
      return;
    }
    if (/^Confirmation:/.test(l) || /^[\w -]*confirmation:\s*\d+\s+of\s+\d+/i.test(l)) {
      const c = CONFIRMATION_FORM.exec(l);
      if (!c) throw new UnreadableLine(at, l, 'a confirmation line outside the fixed form');
      if (Number(c[1]) < Number(c[2])) { roundsWithFailure.add(round); evidence1.push(`round ${round}: ${c[1]} of ${c[2]} fixes hold; not held ${c[3]}`); }
    }
  });
  const signal1 = roundsWithFailure.size >= 2;
  const fired = signal1 || signal2;
  return {
    rounds: rows.length,
    roundsSeen: roundsSeen.size,
    signal1: { fired: signal1, roundsWithFailure: [...roundsWithFailure].sort((a, b) => a - b), evidence: evidence1 },
    signal2: { fired: signal2, recurring, earlierCounts: earlier },
    metaReviewLine: { notIndicated: notIndicated !== null, contradicted: notIndicated !== null && fired },
    subject: fired,
  };
}

function main() {
  const args = process.argv.slice(2);
  const file = args.find((a) => !a.startsWith('--'));
  if (!file) { console.error('usage: signals.mjs <review-record.md> [--json]'); process.exit(2); }
  let r;
  try { r = readSignals(readFileSync(resolve(file), 'utf8')); }
  catch (e) {
    if (!(e instanceof UnreadableLine)) throw e;
    console.error(`signals: cannot read ${file}, ${e.message}`);
    console.error('Correct the line to its fixed form and run the script again.');
    process.exit(2);
  }
  if (args.includes('--json')) { process.stdout.write(JSON.stringify(r, null, 2)); return; }
  console.log(`rounds ${r.rounds} in the curve; ${r.roundsSeen} round headings`);
  console.log(`signal 1 (fixes not held, two or more rounds): ${r.signal1.fired ? 'FIRED' : 'no'}${r.signal1.evidence.length ? ' :: ' + r.signal1.evidence.join('; ') : ''}`);
  console.log(`signal 2 (a claim of the last count's Mismatches lines in two rounds of the text's counts): ${r.signal2.fired ? 'FIRED :: ' + r.signal2.recurring.join('; ') : 'no'}`);
  if (r.signal2.earlierCounts.length) console.log(`information, earlier counts' Mismatches claims not in the last count: ${r.signal2.earlierCounts.join('; ')}`);
  console.log('signal 2 (a declined finding raised again) and signal 4 (contradiction in a fix-touched passage): by reading, not read by the script');
  if (r.metaReviewLine.contradicted) console.log('Meta-review line: CONTRADICTED, the record says "not indicated" against the reading above');
  console.log(`meta-review subject: ${r.subject ? 'yes' : 'not by the script; check signals 2 and 4 by reading'}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
