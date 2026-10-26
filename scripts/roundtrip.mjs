#!/usr/bin/env node
// The round-trip check, mechanical half (docs/ir-schema.md, Rendering rule;
// chunk 3 IR, C22 to C25). Reads an IR and the prose rendered from it,
// finds the render map the paraphraser appended, and reports: claims in
// the IR absent from the map; identifiers in the map absent from the IR;
// the ratio of prose sentences to claims. The semantic half is the
// reviewer's.
// Usage: node scripts/roundtrip.mjs <file.ir.md> <file.md> [--json]

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseIR } from './ir.mjs';

export function roundTrip(irText, proseText) {
  const ir = parseIR(irText);
  const claims = ir.elements.filter((e) => e.kind === 'C').map((e) => e.id);
  const ids = new Set(ir.elements.map((e) => e.id));
  const mapMatch = /<!--\s*render map:\s*([\s\S]*?)-->/.exec(proseText);
  const mapped = new Set();
  if (mapMatch) for (const m of mapMatch[1].matchAll(/\b([TCGREA]\d+)\b(?=\s*(?:\u2192|->))/g)) mapped.add(m[1]);
  const missing = claims.filter((c) => !mapped.has(c));
  const unknown = [...mapped].filter((id) => !ids.has(id));
  const body = proseText.replace(/<!--[\s\S]*?-->/g, '').replace(/```[\s\S]*?```/g, '');
  const sentences = body.split('\n').filter((l) => l.trim() && !/^#/.test(l) && !/^\|/.test(l))
    .flatMap((l) => l.replace(/^\s*(?:[-*]|\d+\.)\s+/, '').split(/(?<=[.!?])\s+(?=[A-Z"(\[])/)).filter((s) => s.trim().length > 1);
  return {
    hasMap: Boolean(mapMatch),
    claims: claims.length,
    mapped: claims.length - missing.length,
    missing, unknown,
    sentences: sentences.length,
    sentencesPerClaim: claims.length ? Number((sentences.length / claims.length).toFixed(2)) : null,
  };
}

function main() {
  const [irFile, proseFile] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
  if (!irFile || !proseFile) { console.error('usage: roundtrip.mjs <file.ir.md> <file.md> [--json]'); process.exit(2); }
  const r = roundTrip(readFileSync(resolve(irFile), 'utf8'), readFileSync(resolve(proseFile), 'utf8'));
  if (process.argv.includes('--json')) console.log(JSON.stringify(r));
  else {
    console.log(`render map: ${r.hasMap ? 'present' : 'ABSENT'}; claims ${r.claims}, mapped ${r.mapped}, missing ${r.missing.length}${r.missing.length ? ' (' + r.missing.join(', ') + ')' : ''}, unknown ids ${r.unknown.length}${r.unknown.length ? ' (' + r.unknown.join(', ') + ')' : ''}`);
    console.log(`prose sentences ${r.sentences}; sentences per claim ${r.sentencesPerClaim}`);
  }
  process.exitCode = !r.hasMap || r.missing.length || r.unknown.length ? 1 : 0;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
