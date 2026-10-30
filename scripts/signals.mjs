#!/usr/bin/env node
// Meta-review signals (branch point v1.10, owner decision of 2026-10-30 on
// evaluation case 012; v1.9 on cases 010 and 011; v1.7 on case 009). Reads a
// review record and reports what it shows for the signals the script reads.
// The reasoning role runs it after writing each round's "Mismatches:" line
// and before writing the verdict, so it reads a partial record: a round with
// no confirmation line or curve row yet is read as far as it goes.
//   Signal 1: in two or more rounds a confirmation line reports fixes not
//             held, or a claims-check line reports a missing or stale claim.
//             Confirmation lines have one fixed form:
//             "Confirmation: H of A fixes hold. Not held: <...>. Declines accepted: K of D. New defects: N."
//             A confirmation-like line in any other form is reported as
//             unparsed, and so is a round with a fix pass and no
//             claims-check line (case 012 change 13); a round's fix pass
//             shows as a confirmation line in the round's entry. No "not
//             indicated" may be written while a line is unparsed.
//   Signal 2: a claim of the last count's "Mismatches:" lines named in two
//             rounds of the text's counts. An entry names the claim the
//             restatement contradicts and, after "relied on", the claim of
//             the quoted sentence: "C41 (relied on C35)"; a recurrence counts
//             on either claim. An "(own)" mark in an older record is read and
//             ignored (case 012 change 1). Claims on earlier counts' lines
//             that do not recur into the last count are listed as
//             information.
// Signal 3 is struck (case 012 change 11); the curve's prose words and IR
// claims stay as measures. The script searches no wording (case 012 change
// 12): the reasoning role checks a declined finding raised again and the
// fourth signal by reading.
// The curve, confirmation and claims-check lines are read from the last
// "## Count n" section only; text before the first such heading is count 1.
// The script reports a "Meta-review: not indicated" line its own reading
// contradicts.
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

function claimsCheckCounts(l) {
  const m = /(\d+)\s+missing|missing\s+(\d+)/i.exec(l);
  const s = /(\d+)\s+stale|stale\s+(\d+)/i.exec(l);
  return { missing: m ? Number(m[1] ?? m[2]) : 0, stale: s ? Number(s[1] ?? s[2]) : 0 };
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

  // Confirmation lines and claims-check lines, last count only.
  let round = 0;
  const roundsSeen = new Set();
  const roundsWithClaimsCheck = new Set();
  const roundsWithFixPass = new Set();
  const roundsWithFailure = new Set();
  const evidence1 = [];
  const unparsed = [];
  let notIndicated = null;
  for (const raw of lines) {
    const l = raw.trim();
    const h = /^#+\s*Round\s+(\d+)/.exec(l);
    if (h) { round = Number(h[1]); roundsSeen.add(round); }
    if (/^Meta-review:/i.test(l)) {
      if (/^Meta-review:\s*not indicated/i.test(l)) notIndicated = l.slice(0, 100);
      continue;
    }
    if (/^Confirmation:/.test(l) || /\bfixes\s+(hold|held)\b/i.test(l)) {
      roundsWithFixPass.add(round);
      const c = CONFIRMATION_FORM.exec(l);
      if (!c) { unparsed.push(`round ${round}: ${l.slice(0, 100)}`); }
      else if (Number(c[1]) < Number(c[2])) { roundsWithFailure.add(round); evidence1.push(`round ${round}: ${c[1]} of ${c[2]} fixes hold; not held ${c[3]}`); }
    }
    if (/claims[ -]check/i.test(l)) {
      roundsWithClaimsCheck.add(round);
      const k = claimsCheckCounts(l);
      if (k.missing > 0 || k.stale > 0) { roundsWithFailure.add(round); evidence1.push(`round ${round}: claims check, ${k.missing} missing, ${k.stale} stale`); }
    }
  }
  for (const r of [...roundsWithFixPass].sort((a, b) => a - b)) {
    if (!roundsWithClaimsCheck.has(r)) unparsed.push(`round ${r}: a fix pass and no claims-check line`);
  }
  const signal1 = roundsWithFailure.size >= 2;
  const fired = signal1 || signal2;
  const subject = unparsed.length ? 'unparsed' : fired;
  return {
    rounds: rows.length,
    roundsSeen: roundsSeen.size,
    unparsed,
    signal1: { fired: signal1, roundsWithFailure: [...roundsWithFailure].sort((a, b) => a - b), evidence: evidence1 },
    signal2: { fired: signal2, recurring, earlierCounts: earlier },
    metaReviewLine: { notIndicated: notIndicated !== null, contradicted: notIndicated !== null && (subject === true || subject === 'unparsed') },
    subject,
  };
}

function main() {
  const args = process.argv.slice(2);
  const file = args.find((a) => !a.startsWith('--'));
  if (!file) { console.error('usage: signals.mjs <review-record.md> [--json]'); process.exit(2); }
  const r = readSignals(readFileSync(resolve(file), 'utf8'));
  if (args.includes('--json')) { process.stdout.write(JSON.stringify(r, null, 2)); return; }
  console.log(`rounds ${r.rounds} in the curve; ${r.roundsSeen} round headings`);
  if (r.unparsed.length) console.log(`unparsed (${r.unparsed.length}): ${r.unparsed.join(' | ')}`);
  console.log(`signal 1 (fixes not held or claims missing or stale, two or more rounds): ${r.signal1.fired ? 'FIRED' : 'no'}${r.signal1.evidence.length ? ' :: ' + r.signal1.evidence.join('; ') : ''}`);
  console.log(`signal 2 (a claim of the last count's Mismatches lines in two rounds of the text's counts): ${r.signal2.fired ? 'FIRED :: ' + r.signal2.recurring.join('; ') : 'no'}`);
  if (r.signal2.earlierCounts.length) console.log(`information, earlier counts' Mismatches claims not in the last count: ${r.signal2.earlierCounts.join('; ')}`);
  console.log('signal 2 (a declined finding raised again) and signal 4 (contradiction in a fix-touched passage): by reading, not read by the script');
  if (r.metaReviewLine.contradicted) console.log('Meta-review line: CONTRADICTED, the record says "not indicated" against the reading above');
  console.log(`meta-review subject: ${r.subject === 'unparsed' ? 'UNDECIDED, unparsed line; no "not indicated" may be written' : r.subject === true ? 'yes' : 'not by the script; check signals 2 and 4 by reading'}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
