// Parser for intermediate-representation documents (docs/ir-schema.md v1).
// Zero dependencies. The schema document is authoritative; this file is
// a built artifact of it (methodology Article 3).

export const KINDS = { T: 'term', C: 'claim', G: 'cluster', R: 'relation', E: 'evidence', A: 'ask' };
export const PROVENANCE_KINDS = new Set(['T', 'C', 'G']);
const ELEMENT_RE = /^([TCGREA])(\d+)\.\s+(.*)$/;
const H2_RE = /^##\s+(.+?)\s*$/;
const PROV_RE = /\[(decided|proposed|inferred)(?::\s*([^\]]*))?\]\s*$/;

export function parseIR(text) {
  const lines = text.split(/\r?\n/);
  const ir = { header: {}, sections: [], elements: [], errors: [] };
  let section = null;
  let firstH2 = lines.findIndex((l) => H2_RE.test(l));
  const headLines = firstH2 === -1 ? lines : lines.slice(0, firstH2);
  for (const l of headLines) {
    const m = /^(Reader|Purpose|Status|Source|Normative):\s*(.*)$/.exec(l.trim());
    if (m) ir.header[m[1].toLowerCase()] = m[2].trim();
  }
  let current = null;
  const flush = () => { if (current) { ir.elements.push(current); current = null; } };
  lines.forEach((raw, i) => {
    const h = H2_RE.exec(raw);
    if (h) { flush(); section = { title: h[1], line: i + 1 }; ir.sections.push(section); return; }
    const m = ELEMENT_RE.exec(raw);
    if (m) {
      flush();
      current = { kind: m[1], n: Number(m[2]), id: `${m[1]}${m[2]}`, body: m[3], line: i + 1, section: section?.title ?? '(none)' };
      return;
    }
    if (current) {
      if (raw.trim() === '' || /^#/.test(raw)) { flush(); }
      else current.body += ' ' + raw.trim();
    }
  });
  flush();
  for (const e of ir.elements) {
    const p = PROV_RE.exec(e.body);
    e.provenance = p ? { status: p[1], detail: (p[2] ?? '').trim() } : null;
    e.text = p ? e.body.slice(0, p.index).trim() : e.body.trim();
  }
  return ir;
}

export function sectionKind(title) {
  const t = title.toLowerCase();
  if (/^terms?\b/.test(t)) return 'terms';
  if (/^relations?\b/.test(t)) return 'relations';
  if (/^evidence\b/.test(t)) return 'evidence';
  if (/^asks?\b/.test(t)) return 'asks';
  if (/^resolution\b/.test(t)) return 'resolution';
  return 'claims';
}

export function wordCount(s) {
  return s.split(/\s+/).filter(Boolean).length;
}

export function idsIn(s, letters = 'TCGREA') {
  const re = new RegExp(`\\b([${letters}])(\\d+)\\b`, 'g');
  const out = [];
  let m;
  while ((m = re.exec(s))) out.push(`${m[1]}${m[2]}`);
  return out;
}
