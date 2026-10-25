The chunk 3 gate needs six decisions from the owner.

## Asks

1. Adjudicate methodology PR #46, the amendment to W-008 (reports map their deliverables), and methodology PR #45, the vocabulary anchors. The decision depends on the fourth W-008 part and the anchor form, both listed under What is already covered.
2. Ratify or strike the two terms listed under Terms introduced.
3. Confirm the `part:` field as optional rather than mandatory. The field is described under What changed, The paraphraser and the model.
4. Confirm the [disposition](../vocabulary.md#def-disposition) D3 (review without render) for normative text, such as a rule or a specification.
5. Ratify or strike the three terms from chunk 2 that are still proposed: [lint](../vocabulary.md#def-lint), [dispatcher](../vocabulary.md#def-dispatcher), and [render map](../vocabulary.md#def-render-map).
6. Rule on whether a PR body for the owner may be direct prose when its deliverable carries the [IR](../vocabulary.md#def-intermediate-representation), or must itself be rendered from one. The case in point is recorded under What is already covered, The W-008 amendment.

## What is already covered

### The term lifecycle

A term is handled by where its [definition site](../vocabulary.md#def-definition-site) is, not by how often it appears. A term with a definition site in the methodology vocabulary or the project vocabulary is linked at its first use and left bare after. A term with no definition site is defined inline once at first use and listed under Terms introduced with status proposed. Ratification by the owner creates the definition site: a vocabulary row with a stable anchor. The first-use unit is the document for a report and the section for a reference document, because reports are read linearly and reference documents by lookup. RD-5, the external reader, gets an inline gloss instead of a link, because that reader may have no repository access. Both vocabularies gain a stable anchor per term in the form `<a id="def-<slug>"></a>`, the form Allegro's documentation-standards proposal uses. In the IR nothing changes for linking: a T element with defined-at renders as a link, and a T element without one renders as an inline definition.

### The narrowed scope

A report to RD-1 (the human owner) or RD-3 may be written as prose directly, with the prose lint, when it meets three conditions: it introduces no term; it records no decision; it makes no claim about register state. Claims and evidence about register state are written in the IR, because they belong to the project register's domain model. The [stranger](../vocabulary.md#def-stranger) review runs on a report to RD-1 or RD-3 only when the owner asks for it.

### The reviewer's bar

A term is a finding only when it is absent from both vocabularies and is not plain English. A sentence is a finding under the one-claim rule only when it carries two claims the reader could decide or dispute separately.

### The paraphraser and the model

**Connective prose** is a sentence in rendered text that asserts nothing a model would hold and exists to join claims for the reader. The [paraphraser](../vocabulary.md#def-paraphraser) may add connective prose and may not add a claim. The `part:` field and the default mapping are introduced under What changed. The `part:` field is optional because the default mapping held for eleven of thirteen claims in the live run. For the two claims the mapping did not hold for, the paraphraser overrode it correctly.

### The round-trip check

The [round-trip check](../vocabulary.md#def-round-trip-check) and its ratio are described under What changed. A sentence-to-claim ratio well above one signals connective prose or dropped claims, and the [reviewer](../vocabulary.md#def-reviewer) decides which.

### Measurement

The evaluation corpus holds three cases and the dispatch log holds every routed IR.

### The linker and the lint

scripts/link-terms.mjs, the linker, links the first use of each vocabulary term in a document to its anchor. The linker works on paragraph blocks, so a term wrapped across two lines is found. The linker unlinks a later duplicate link to an anchor already linked in the unit. The linker never edits the W-008 block in an Agent bootstrap, headings, code, existing links, IR elements, or a bold definition site. Run over the pilot's 26 markdown files, the linker wrote 146 links in its first pass and the lint's warnings fell from 226 to 83. Three first-use warnings remain where the lint and the linker divide the text differently. The lint gained three checks: CK-11, a term's definition-site target resolves; SP-23, a vocabulary term is linked at first use in the unit; SP-24, a `#def-` link resolves. The lint now counts unratified terms as proposed terms with no decided vocabulary row. The link checker of methodology-tools knew only heading slugs and reported 152 missing anchors on the pilot after linking. methodology-tools PR #16 (the link-checker change) makes explicit `id` anchors resolve. With PR #16, the pilot's 242 relative links resolve and its form audit is clean. The round-trip check on the live run found one claim, C14 of the third IR, absent from the render map, because it was added after the third rendering.

### The W-008 amendment

W-008 gains a fourth part for principal reports: terms introduced, stated when empty. The required bootstrap block changes with the Statement, so the amendment carries a migration note of one copy action per project with an Agent bootstrap. The stranger review of the amended W-008 text returned 36 findings, of which 10 were fixed and the rest were pre-existing wording or by design. The vocabulary anchors are an editorial change in methodology PR #45. The bodies of methodology PR #45 and PR #46 were written as direct prose in W-008 form, not rendered from an IR.

## What changed

### The term lifecycle

- The pilot's vocabulary gains its anchors in this chunk.
- The methodology vocabulary gains its anchors by an editorial change in its own PR.

### The narrowed scope

- Normative text, such as a rule or a specification, is rendered by the [reasoning role](../vocabulary.md#def-reasoning-role), not the paraphraser, and the reviewer still reads it.
- The [branch point](../vocabulary.md#def-branch-point) gains a disposition D3, review without render, for normative text.

### The reviewer's bar

- The [readability test](../vocabulary.md#def-readability-test) of RD-1 to RD-3 now asks whether a sentence carries two claims the reader could decide or dispute separately.

### The paraphraser and the model

- A claim may carry an optional `part:` field naming its W-008 part, covered or changed.
- Without a `part:` field, a decided claim renders under what is already covered and a proposed claim under what changed.

### The round-trip check

- The round-trip check has a mechanical half and a semantic half.
- The mechanical half, scripts/roundtrip.mjs, reads the render map and reports: claims in the IR absent from the map; identifiers in the map absent from the IR; the ratio of prose sentences to claims.
- The semantic half is the reviewer's claim-evidence and compound-claim findings, which the mechanical half cannot make.

### Measurement

- Of the three indicators from the owner's essay, unratified vocabulary now has a mechanical reading: the count of proposed terms in an IR that have no decided vocabulary row.
- Prediction surprise waits on the expected-footprint field, which is chunk 4 work.
- Explanation cost waits on a declared reading order, which no project in the pilot has yet.

### The linker and the lint

- The divergence between the lint and the linker is recorded for chunk 4.

### The W-008 amendment

- The amendment is drafted in the methodology repository as its own PR, IR first, with the rule text rendered by the reasoning role under the rendering rule for normative text listed above, and reviewed by the stranger.

## Terms introduced

- Connective prose, status proposed: a sentence in rendered text that asserts nothing a model would hold and exists to join claims for the reader.
- [Term lifecycle](../vocabulary.md#def-term-lifecycle), status proposed: the path a term takes from first use in an IR, through ratification, to a vocabulary row with an anchor that later documents link.

<!-- render map: T1→What is already covered, The term lifecycle, sentence 1 (linked); T2→What is already covered, The paraphraser and the model, sentence 1 (inline definition), and Terms introduced bullet 1; T3→Terms introduced bullet 2; C1→What is already covered, The term lifecycle, sentence 1; C2→covered, The term lifecycle, sentence 2; C3→covered, The term lifecycle, sentence 3; C4→covered, The term lifecycle, sentence 4; C5→covered, The term lifecycle, sentence 5; C6→covered, The term lifecycle, sentence 6; C7→covered, The term lifecycle, sentence 7; C8→What changed, The term lifecycle, bullet 1; C33→What changed, The term lifecycle, bullet 2; C9→covered, The term lifecycle, sentence 8; C10→covered, The narrowed scope, sentence 1; C11→covered, The narrowed scope, sentence 2; C12→covered, The narrowed scope, sentence 3; C13→What changed, The narrowed scope, bullet 1; C14→What changed, The narrowed scope, bullet 2; C15→covered, The reviewer's bar, sentence 1; C16→covered, The reviewer's bar, sentence 2; C17→What changed, The reviewer's bar, bullet 1; C18→covered, The paraphraser and the model, sentence 2; C19→What changed, The paraphraser and the model, bullet 1; C20→What changed, The paraphraser and the model, bullet 2; C21→covered, The paraphraser and the model, sentence 4; C34→covered, The paraphraser and the model, sentence 5; C22→What changed, The round-trip check, bullet 1; C23→What changed, The round-trip check, bullet 2; C24→What changed, The round-trip check, bullet 3; C25→covered, The round-trip check, sentence 2; C26→covered, Measurement, sentence 1; C27→What changed, Measurement, bullet 1; C31→What changed, Measurement, bullet 2; C32→What changed, Measurement, bullet 3; C35→covered, The linker and the lint, sentence 1; C43→covered, The linker and the lint, sentence 2; C46→covered, The linker and the lint, sentence 3; C36→covered, The linker and the lint, sentence 4; C37→covered, The linker and the lint, sentence 5; C38→covered, The linker and the lint, sentence 6; C47→What changed, The linker and the lint, bullet 1; C39→covered, The linker and the lint, sentence 7; C44→covered, The linker and the lint, sentence 8; C40→covered, The linker and the lint, sentence 9; C41→covered, The linker and the lint, sentence 10; C45→covered, The linker and the lint, sentence 11; C42→covered, The linker and the lint, sentence 12; C28→covered, The W-008 amendment, sentence 1; C29→covered, The W-008 amendment, sentence 2; C30→What changed, The W-008 amendment, bullet 1; C48→covered, The W-008 amendment, sentence 3; C49→covered, The W-008 amendment, sentence 4; C50→covered, The W-008 amendment, sentence 5; A1→Asks 1; A2→Asks 2; A3→Asks 3; A4→Asks 4; A5→Asks 5; A6→Asks 6 -->
