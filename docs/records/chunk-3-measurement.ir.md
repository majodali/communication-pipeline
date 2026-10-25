# IR: chunk 3, measurement and ratification

Reader: RD-1 (human owner, in conversation).
Purpose: report. The design decisions behind chunk 3's term lifecycle, the narrowed pipeline scope, the round-trip check, the W-008 amendment, and the asks for the chunk 3 gate.
Status: draft
Source: the pilot plan, chunk 3; the owner's rulings of 2026-10-25 on scope, the reviewer's bar, and term linking.

## Terms

T1. Definition site: the one place a term is defined; every other use links to it. defined-at: ../vocabulary.md#def-definition-site [decided: owner, 2026-10-25]

T2. Connective prose: a sentence in rendered text that asserts nothing a model would hold and exists to join claims for the reader. [proposed: this IR]

T3. Term lifecycle: the path a term takes from first use in an IR, through ratification, to a vocabulary row with an anchor that later documents link. defined-at: ../vocabulary.md#def-term-lifecycle [proposed: this IR]

## The term lifecycle

C1. A term is handled by where its definition site is, not by how often it appears. [decided: owner, 2026-10-25]

C2. A term with a definition site in the methodology vocabulary or the project vocabulary is linked at its first use and left bare after. [decided: owner, 2026-10-25]

C3. A term with no definition site is defined inline once at first use and listed under Terms introduced with status proposed. [decided: owner, 2026-10-25]

C4. Ratification by the owner creates the definition site: a vocabulary row with a stable anchor. [decided: owner, 2026-10-25]

C5. The first-use unit is the document for a report and the section for a reference document, because reports are read linearly and reference documents by lookup. [decided: owner, 2026-10-25]

C6. RD-5, the external reader, gets an inline gloss instead of a link, because that reader may have no repository access. [decided: owner, 2026-10-25]

C7. Both vocabularies gain a stable anchor per term in the form `<a id="def-<slug>"></a>`, the form Allegro's documentation-standards proposal uses. [decided: owner, 2026-10-25]

C8. The pilot's vocabulary gains its anchors in this chunk. [proposed: this IR]

C33. The methodology vocabulary gains its anchors by an editorial change in its own PR. [proposed: this IR]

C9. In the IR nothing changes for linking: a T element with defined-at renders as a link, and a T element without one renders as an inline definition. [decided: owner, 2026-10-25]

## The narrowed scope

C10. A report to RD-1 or RD-3 may be written as prose directly, with the prose lint, when it meets three conditions: it introduces no term; it records no decision; it makes no claim about register state. [decided: owner, 2026-10-25]

C11. Claims and evidence about register state are written in the IR, because they belong to the project register's domain model. [decided: owner, 2026-10-25]

C12. The stranger review runs on a report to RD-1 or RD-3 only when the owner asks for it. [decided: owner, 2026-10-25]

C13. Normative text, such as a rule or a specification, is rendered by the reasoning role, not the paraphraser, and the reviewer still reads it. [proposed: this IR]

C14. The branch point gains a disposition D3, review without render, for C13. [proposed: this IR]

## The reviewer's bar

C15. A term is a finding only when it is absent from both vocabularies and is not plain English. [decided: owner, 2026-10-25]

C16. A sentence is a finding under the one-claim rule only when it carries two claims the reader could decide or dispute separately. [decided: owner, 2026-10-25]

C17. The readability test of RD-1 to RD-3 now asks the question in C16. [proposed: this IR]

## The paraphraser and the model

C18. The paraphraser may add connective prose and may not add a claim. [decided: owner, 2026-10-25]

C19. A claim may carry an optional `part:` field naming its W-008 part, covered or changed. [proposed: this IR]

C20. Without a part field, a decided claim renders under what is already covered and a proposed claim under what changed. [proposed: this IR]

C21. The part field is optional because the default mapping held for eleven of thirteen claims in the live run. evidence: E1. [inferred: R1]

C34. For the two claims the mapping did not hold for, the paraphraser overrode it correctly. evidence: E1. [decided: paraphraser output, 2026-10-25]

## The round-trip check

C22. The round-trip check has a mechanical half and a semantic half. [proposed: this IR]

C23. The mechanical half, scripts/roundtrip.mjs, reads the render map and reports: claims in the IR absent from the map; identifiers in the map absent from the IR; the ratio of prose sentences to claims. [proposed: this IR]

C24. The semantic half is the reviewer's claim-evidence and compound-claim findings, which the mechanical half cannot make. [proposed: this IR]

C25. A sentence-to-claim ratio well above one signals connective prose or dropped claims, and the reviewer decides which. [inferred: R2]

## Measurement

C26. The evaluation corpus holds three cases and the dispatch log holds every routed IR. evidence: E2. [decided: this chunk]

C27. Of the three indicators from the owner's essay, unratified vocabulary now has a mechanical reading: the count of proposed terms in an IR that have no decided vocabulary row. [proposed: this IR]

C31. Prediction surprise waits on the expected-footprint field, which is chunk 4 work. [proposed: this IR]

C32. Explanation cost waits on a declared reading order, which no project in the pilot has yet. [proposed: this IR]

## The linker and the lint

C35. scripts/link-terms.mjs links the first use of each vocabulary term in a document to its anchor. [decided: this chunk]

C43. The linker works on paragraph blocks, so a term wrapped across two lines is found. [decided: this chunk]

C46. The linker unlinks a later duplicate link to an anchor already linked in the unit. [decided: this chunk]

C36. The linker never edits the W-008 block in an Agent bootstrap, headings, code, existing links, IR elements, or a bold definition site. [decided: this chunk]

C37. Run over the pilot's 26 markdown files, the linker wrote 146 links in its first pass and the lint's warnings fell from 226 to 83. evidence: E3. [decided: lint runs, 2026-10-25]

C38. Three first-use warnings remain where the lint and the linker divide the text differently. evidence: E3. [decided: lint run, 2026-10-25]

C47. The divergence between the lint and the linker is recorded for chunk 4. [proposed: this IR]

C39. The lint gained three checks: CK-11, a term's definition-site target resolves; SP-23, a vocabulary term is linked at first use in the unit; SP-24, a `#def-` link resolves. [decided: this chunk]

C44. The lint now counts unratified terms as proposed terms with no decided vocabulary row. [decided: this chunk]

C40. methodology-tools' link checker knew only heading slugs and reported 152 missing anchors on the pilot after linking. evidence: E4. [decided: mtool run, 2026-10-25]

C41. methodology-tools PR #16 makes explicit `id` anchors resolve. evidence: E4. [decided: this chunk]

C45. With PR #16, the pilot's 242 relative links resolve and its form audit is clean. evidence: E4. [decided: mtool run, 2026-10-25]

C42. The round-trip check on the live run found one claim, C14 of the third IR, absent from the render map, because it was added after the third rendering. evidence: E5. [decided: roundtrip run, 2026-10-25]

## The W-008 amendment

C28. W-008 (reports map their deliverables) gains a fourth part for principal reports: terms introduced, stated when empty. [decided: owner, 2026-10-24]

C29. The required bootstrap block changes with the Statement, so the amendment carries a migration note of one copy action per project with an Agent bootstrap. [inferred: R3]

C30. The amendment is drafted in the methodology repository as its own PR, IR first, with the rule text rendered by the reasoning role under C13 and reviewed by the stranger. [proposed: this IR]

## Relations

R1. C21 depends-on C20 because the default is only safe if it usually holds.

R2. C25 depends-on C23 because the ratio is one of the mechanical half's outputs.

R3. C29 depends-on C28 because W-008 declares the block a cache of its own text.

## Evidence

E1. ../methodology/docs/records/portfolio-1.5.0-refresh.md, the render map, and the round 2 review's finding 20.

E2. eval/README.md and eval/dispatch-log.md at this commit.

E3. The lint census files in the session scratchpad, before and after linking: 26 files, 226 then 83 warnings, 0 violations after fixes.

E4. methodology-tools PR #16 and its test; the mtool links check output before (152 missing-anchor) and after (all resolve).

E5. scripts/roundtrip.mjs on the live run's third IR and rendering: claims 14, mapped 13, missing C14, sentences per claim 1.93.

## Asks

A1. The gate: adjudicate the W-008 amendment draft (methodology PR, see C30) and the vocabulary anchors PR. Depends: C28, C7.

A2. Ratify or strike the terms connective prose and term lifecycle.

A3. Confirm the optional part field (C19, C20) rather than a mandatory one.

A4. Confirm disposition D3 for normative text (C13, C14).
