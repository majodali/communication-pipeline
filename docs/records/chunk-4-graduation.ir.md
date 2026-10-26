# IR: Chunk 4, graduation

Reader: RD-1 (human owner, in conversation).
Purpose: report. The graduation of the pilot's artifacts to their three destinations, the measurements of chunk 4, and the asks for the chunk 4 gate, including the exit decision.
Status: rendered (paraphraser, 2026-10-26, disposition D1; round-trip check clean)
Source: the pilot plan's chunk 4 and settled decision 6; the owner's message of 2026-10-26 ("All merged and terms ratified - go ahead with chunk 4"); seven pull requests opened on 2026-10-26; four stranger reviews.
Footprint: docs/records/; docs/vocabulary.md; docs/ir-schema.md; docs/backlog.md; docs/plans/pipeline-pilot.md; eval/; scripts/footprint.mjs; scripts/lint.mjs; scripts/ir.mjs; scripts/test.mjs; CLAUDE.md

## Terms

T1. Graduation: the move of a pilot artifact to its destination project. defined-at: ../vocabulary.md#def-graduation [decided: owner, 2026-10-24]

T2. Footprint: the files or directories an IR declares its work is expected to touch, compared after the work with the files the branch changed. [proposed: this IR]

## Claims

### The methodology destination

C1. Three stacked methodology PRs carry the graduation amendments: #47, #48 and #49. evidence: E1. [decided: GitHub, 2026-10-26]

C29. PR #47 adds the Protects: field to Article 5 and defines the three invariants. evidence: E1. [decided: GitHub, 2026-10-26]

C30. PR #48 adds P-007 and P-008, with the reader catalog, the term handling and the mechanical checks in the style guide. evidence: E1. [decided: GitHub, 2026-10-26]

C31. PR #49 adds W-009 and the intermediate-representation specification. evidence: E1. [decided: GitHub, 2026-10-26]

C2. The PRs are stacked so each can be adjudicated on its own, and the merge order is #47, #48, #49. [proposed: this IR]

C3. Each amendment was written IR first and its rule text reviewed by the stranger under disposition D3. evidence: E2. [decided: the records, 2026-10-26]

C4. The three invariant definitions in #47 are wordings proposed from the owner's writeup, which is not in the corpus. [decided: owner, 2026-10-22]

C5. W-009 applies to the methodology-corpus type only, with adoption by declaration for other projects. [proposed: this IR]

C6. The adopted specification was rewritten in the methodology's own terms after its review found nine undefined borrowed terms and eleven unresolved referents in the mechanical transform. evidence: E2. [decided: review, 2026-10-26]

C7. The ratified terms migration round and terms introduced gain vocabulary rows in #48. [decided: owner, 2026-10-26]

### The tools destination

C8. methodology-tools PR #17 ports the lints: `mtool style`, `mtool ir check`, and the W-008 block comparison in `mtool audit form`. evidence: E3. [decided: GitHub, 2026-10-26]

C9. On the pilot's 27 files, `mtool style` reports 99 warnings and 0 violations, equal to the counts of scripts/lint.mjs line for line. evidence: E3. [decided: parity run, 2026-10-26]

C10. The port was written by a delegated agent from a brief, with the pipeline's scripts and specifications as the only sources. [decided: this chunk]

### The orchestrator destination

C11. project-orchestrator PR #6 carries the proposal: a paraphraser role on the standard tier, a stranger reviewer role on the frugal tier, an IR line in the task result, and a routing rule driven by the IR. evidence: E4. [decided: GitHub, 2026-10-26]

C12. The routing rule is the branch point v1.1 with dispositions renamed to dispatches. [decided: this chunk]

### Measurement

C13. Evaluation case 004 records the four stranger reviews of normative text: 130 findings over 5,878 words, 22.1 per thousand, none readable before fixes. evidence: E5. [decided: case 004, 2026-10-26]

C14. On the new text alone, the three chunk 4 reviews found 21.0 findings per thousand words. evidence: E5. [decided: case 004, 2026-10-26]

C15. No second round was run on any normative text, so readability after fixes is not measured. evidence: E5. [decided: case 004, 2026-10-26]

C16. The schema is at v1.3: an optional Footprint header, scripts/footprint.mjs, and CK-12 (identifier uniqueness). evidence: E6. [decided: this chunk]

C17. The Footprint header and script are the mechanical reading of the owner's prediction-surprise indicator. [proposed: this IR]

C18. This IR is the first with a Footprint header, and the script reports its surprises and misses at the PR. evidence: E6. [proposed: this IR]

C19. The five terms ratified at the chunk 3 gate carry status decided in the vocabulary. [decided: owner, 2026-10-26]

C20. The lint-versus-linker divergence of chunk 3 is left as recorded: the lint counts a first use inside a table cell or an agent file's front matter where the linker does not write. [proposed: this IR]

### The exit

C21. The repository archives when the schema and specifications are adopted upstream, the lints have moved to methodology-tools, and the roles have moved to project-orchestrator. [decided: owner, 2026-10-24]

C22. Acceptance of #49 meets the first condition, merge of methodology-tools #17 the second, and acceptance of project-orchestrator #6 the third. [inferred: R1]

C23. After all three, the pilot's remaining artifacts are its evaluation corpus, its dispatch log, its records and its eval cases. [proposed: this IR]

C24. The evaluation corpus has no destination named in the plan. [proposed: this IR]

C25. Chunk 5, close-out, would archive the repository after the evaluation corpus is placed, and would be the last chunk. [proposed: this IR]

### Open from chunk 3

C26. Pipeline PR #4, the chunk 3 gate report, was still open when chunk 4 began, so this branch stacks on it. evidence: E7. [decided: GitHub, 2026-10-26]

C27. The asks 3, 4 and 6 of PR #4 (optional part field, disposition D3, direct-prose PR bodies) received no explicit ruling in the owner's message. [decided: owner message, 2026-10-26]

C32. Chunk 4 proceeded on the drafted answers to those three asks. [decided: this chunk]

C28. The W-008 amendment merged as PR #46 changes the required bootstrap block. [decided: methodology PR #46, 2026-10-26]

C33. Every project with an Agent bootstrap owes one copy action of that block at the next methodology release. [inferred: R3]

## Relations

R1. C22 depends-on C21 because the three conditions name the three PRs' subjects.

R2. C25 depends-on C24 because the corpus needs a destination before the repository archives.

R3. C33 depends-on C28 because W-008 declares the block a cache every Agent bootstrap carries verbatim.

## Evidence

E1. https://github.com/majodali/methodology/pull/47, /pull/48, /pull/49, opened 2026-10-26, stacked.

E2. methodology docs/records/protects-field.review.md, documents-name-reader.review.md, ir-first.review.md on branch ir-first.

E3. https://github.com/majodali/methodology-tools/pull/17; its body's parity figures.

E4. https://github.com/majodali/project-orchestrator/pull/6.

E5. eval/cases/004-normative-text-reviews-2026-10-26.md.

E6. docs/ir-schema.md, Changes, v1.3; scripts/footprint.mjs; scripts/test.mjs.

E7. https://github.com/majodali/communication-pipeline/pull/4, state open on 2026-10-26.

## Asks

A1. Merge pipeline PR #4, then review this PR. Depends: C26.

A2. Adjudicate methodology PRs #47, #48 and #49 in that order. Depends: C1, C2.

A3. Review and merge methodology-tools PR #17. Depends: C8.

A4. Adjudicate project-orchestrator PR #6. Depends: C11.

A5. Ratify or strike the term footprint, and confirm the Footprint header as optional. Depends: C16, C17.

A6. Decide whether normative text gets a second stranger round by default. Depends: C15.

A7. Name a destination for the evaluation corpus, or confirm that it archives with the repository. Depends: C24.

A8. Confirm chunk 5 as the close-out chunk and the last. Depends: C25.

A9. Rule on the three open asks of PR #4 if the drafted answers are not the ruling. Depends: C27.
