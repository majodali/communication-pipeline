#!/usr/bin/env node
// Links the first use of each vocabulary term in a document to its anchor
// (docs/term-lifecycle.md, SP-23). The unit is the document, or each H2
// section when the document's first twenty lines name reader RD-4 or RD-5.
// Works on paragraph blocks so a term wrapped across two lines is found.
// Skips headings, code fences and spans, existing links, IR header lines,
// IR elements, HTML comments, the W-008 block, and bold definition sites.
// A term already linked in the unit counts as used; a later duplicate link
// to the same anchor is unlinked.
// Usage: node scripts/link-terms.mjs [--write] [files...]   (default: dry run, tracked .md)

import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { resolve, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { vocabularyEntries } from './lint.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const VOCAB = resolve(ROOT, 'docs/vocabulary.md');
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function blocks(text) {
  // Returns [{kind: 'skip'|'prose', text}] in order; prose blocks are paragraphs or list items.
  const out = [];
  const lines = text.split('\n');
  let fence = false, comment = false, cached = false, buf = [];
  const flush = () => { if (buf.length) { out.push({ kind: 'prose', text: buf.join('\n') }); buf = []; } };
  for (const line of lines) {
    const skip = (why) => { flush(); out.push({ kind: 'skip', text: line, why }); };
    if (/^\s*```/.test(line)) { fence = !fence; skip('fence'); continue; }
    if (fence) { skip('fence'); continue; }
    if (/<!--/.test(line)) comment = true;
    if (comment) { if (/-->/.test(line)) comment = false; skip('comment'); continue; }
    if (/^#{1,6}\s/.test(line)) { cached = /cached from W-008/.test(line); skip(/^##\s/.test(line) ? 'h2' : 'heading'); continue; }
    if (cached) { skip('cached'); continue; }
    if (/^(Reader|Purpose|Status|Source|Normative):/.test(line) || /^[TCGREA]\d+\.\s/.test(line)) { skip('ir'); continue; }
    if (/^\s*$/.test(line)) { flush(); out.push({ kind: 'skip', text: line, why: 'blank' }); continue; }
    if (/^\s*(?:[-*]|\d+\.)\s+/.test(line) || /^\s*\|/.test(line)) flush();
    buf.push(line);
  }
  flush();
  return out;
}

export function linkTerms(text, { vocab, vocabPath }) {
  const perSection = /^Reader:.*\bRD-[45]\b/m.test(text.split('\n').slice(0, 20).join('\n'));
  const terms = [...vocab.values()].filter((v) => v.anchor && v.term.length > 3).sort((a, b) => b.term.length - a.term.length);
  const bs = blocks(text);
  let changes = 0;
  // units: split at h2 when perSection
  const units = [];
  let cur = [];
  for (const b of bs) { if (perSection && b.kind === 'skip' && b.why === 'h2') { units.push(cur); cur = []; } cur.push(b); }
  units.push(cur);
  for (const unit of units) {
    const seen = new Set();
    const joined = unit.map((b) => b.text).join('\n');
    for (const v of terms) if (new RegExp(`\\]\\([^)]*#${esc(v.anchor)}\\)`).test(joined)) seen.add(v.term.toLowerCase());
    // dedupe: keep the first link to each anchor in the unit, unlink the rest
    const kept = new Set();
    for (const b of unit) {
      if (b.kind !== 'prose') continue;
      b.text = b.text.replace(/\[([^\]]+)\]\(([^)]*#def-[\w-]+)\)/g, (m0, label, target) => {
        const a = target.slice(target.indexOf('#') + 1);
        if (kept.has(a)) { changes++; return label; }
        kept.add(a); return m0;
      });
    }
    for (const b of unit) {
      if (b.kind !== 'prose') continue;
      const ranges = (s) => [...s.matchAll(/`[^`]*`|\[[^\]]*\]\([^)]*\)|<a id="[^"]*"><\/a>[^|\n]*/g)].map((m) => [m.index, m.index + m[0].length]);
      for (const v of terms) {
        const key = v.term.toLowerCase();
        if (seen.has(key)) continue;
        const re = new RegExp(`(?<![\\w-])${esc(v.term).replace(/\s+/g, '\\s+')}(?![\\w-])`, 'gi');
        const prot = ranges(b.text);
        let m, hit = null;
        while ((m = re.exec(b.text))) { const i = m.index, j = i + m[0].length; if (!prot.some(([x, y]) => i < y && j > x)) { hit = m; break; } }
        if (!hit) continue;
        seen.add(key);
        const i = hit.index, j = i + hit[0].length;
        const before = b.text.slice(0, i);
        if (/\*\*$/.test(before)) continue; // bold definition site
        b.text = before + `[${hit[0]}](${vocabPath}#${v.anchor})` + b.text.slice(j);
        changes++;
      }
    }
  }
  return { text: bs.map((b) => b.text).join('\n'), changes };
}

function main() {
  const args = process.argv.slice(2);
  const write = args.includes('--write');
  let files = args.filter((a) => !a.startsWith('--')).map((f) => resolve(f));
  if (!files.length) files = execSync('git ls-files -- "*.md"; git ls-files --others --exclude-standard -- "*.md"', { cwd: ROOT, encoding: 'utf8' }).split('\n').filter(Boolean).map((p) => resolve(ROOT, p));
  const vocab = vocabularyEntries();
  let total = 0;
  for (const f of files) {
    if (resolve(f) === VOCAB || f.endsWith('.ir.md')) continue;
    const text = readFileSync(f, 'utf8');
    const vocabPath = relative(dirname(f), VOCAB).split('\\').join('/');
    const r = linkTerms(text, { vocab, vocabPath });
    if (r.changes) { total += r.changes; console.log(`${relative(ROOT, f)}: ${r.changes} change(s)${write ? ' written' : ''}`); if (write) writeFileSync(f, r.text); }
  }
  console.log(`${total} change(s) ${write ? 'written' : 'would be written (use --write)'}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
