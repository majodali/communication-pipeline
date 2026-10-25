import test from 'node:test';
import assert from 'node:assert/strict';
import { linkTerms } from './link-terms.mjs';

const vocab = new Map([
  ['paraphraser', { term: 'Paraphraser', anchor: 'def-paraphraser', status: 'decided' }],
  ['branch point', { term: 'Branch point', anchor: 'def-branch-point', status: 'decided' }],
]);

test('links the first use only, keeps later uses bare, skips headings, code and links', () => {
  const text = '# The paraphraser\n\nThe paraphraser renders. The paraphraser is `paraphraser`-driven. See the [paraphraser](x.md) and the branch point.\n';
  const r = linkTerms(text, { vocab, vocabPath: 'docs/vocabulary.md' });
  assert.equal(r.changes, 2);
  assert.match(r.text, /^# The paraphraser$/m);
  assert.match(r.text, /The \[paraphraser\]\(docs\/vocabulary\.md#def-paraphraser\) renders\. The paraphraser is/);
  assert.match(r.text, /the \[branch point\]\(docs\/vocabulary\.md#def-branch-point\)\./);
});

test('resets per section for RD-4 documents and never touches a bold definition site', () => {
  const text = 'Reader: RD-4 (a fresh agent session).\n\n## One\n\nThe paraphraser renders.\n\n## Two\n\nThe paraphraser renders again. **Branch point**: defined here.\n';
  const r = linkTerms(text, { vocab, vocabPath: 'vocabulary.md' });
  assert.equal(r.changes, 2);
  assert.match(r.text, /\*\*Branch point\*\*: defined here/);
});

test('finds a term wrapped across two lines and unlinks a duplicate link', () => {
  const text = 'A reasoning\nrole writes. The [paraphraser](v.md#def-paraphraser) renders. The [paraphraser](v.md#def-paraphraser) again.\n';
  const vocab2 = new Map([...vocab, ['reasoning role', { term: 'Reasoning role', anchor: 'def-reasoning-role', status: 'decided' }]]);
  const r = linkTerms(text, { vocab: vocab2, vocabPath: 'v.md' });
  assert.match(r.text, /\[reasoning\nrole\]\(v\.md#def-reasoning-role\) writes/);
  assert.equal((r.text.match(/#def-paraphraser/g) ?? []).length, 1);
});
