# IR: Chunk 5, close-out

Reader: RD-1 (human owner, in conversation).
Purpose: report. The close-out of the pilot: the exit conditions recorded as met, the owner's hold on the archive, the specifications marked superseded by their methodology homes, and the asks for the close-out gate.
Status: draft
Source: the owner's message of 2026-10-26 at the chunk 4 gate; the merged state of seven pull requests, read on GitHub the same day; the pipeline plan's chunk 5.
Footprint: docs/records/; docs/readers.md; docs/style-spec.md; docs/term-lifecycle.md; docs/ir-schema.md; docs/branch-point.md; docs/vocabulary.md; docs/plans/pipeline-pilot.md; docs/backlog.md; docs/classification.md; README.md; scripts/dispatch.mjs; scripts/lint.mjs; eval/dispatch-log.md

## Terms

T1. Graduation: the move of a pilot artifact to its destination project. defined-at: ../vocabulary.md#def-graduation [decided: owner, 2026-10-24]

## Claims

### The exit

C1. All seven pull requests of chunk 4 are merged: methodology #47, #48 and #49; methodology-tools #17; project-orchestrator #6; communication-pipeline #4 and #5. evidence: E1. [decided: GitHub, 2026-10-26]

C2. The three exit conditions of settled decision 6 are met. [inferred: R1]

C3. The repository is kept, with its evaluation corpus, until the owner is satisfied that the process works well in all projects. [decided: owner, 2026-10-26]

C4. The plan, the README and the Classification record the met conditions and the owner's hold. [proposed: this IR]

C5. project-orchestrator PR #6 recorded receipt of the roles proposal, and its adjudication is the backlog item the merge added there. [decided: the PR body, 2026-10-26]

### What the close-out marks

C6. The reader catalog, the style specification, the term lifecycle and the schema carry a supersession marker naming their methodology home. [proposed: this IR]

C7. The four marked documents stay as the paraphraser's and reviewer's inputs until the roles run in project-orchestrator. [proposed: this IR]

C8. Eight vocabulary rows now name the methodology vocabulary as their definition site: intermediate representation, reasoning role, paraphraser, stranger, reader catalog, definition site, readability test, convergence. [proposed: this IR]

C9. The vocabulary has no unratified term: footprint, ratified at the chunk 4 gate, was the last. [decided: owner, 2026-10-26]

### The second round

C10. The branch point is at v1.2: disposition D3 runs two reviewer rounds. [decided: owner, 2026-10-26]

C11. The methodology specification gains the second round and the Footprint header by the amendment in methodology PR #50, written IR first. evidence: E2. [proposed: this IR]

C12. The amendment's rule text is the first normative text reviewed under the rule it introduces. [proposed: this IR]

C13. Round 1 of that review returned 28 findings, 21 in the new passages, 12.5 per thousand words, verdict not readable. evidence: E2. [decided: review, 2026-10-26]

C24. Round 2, on the fixed text, returned 29 findings, 18 in the new passages, 10.0 per thousand words, verdict not readable. evidence: E2. [decided: review, 2026-10-26]

C25. The round 2 findings are fixed, and the fixed text is unmeasured, so the owner decides at adjudication whether a third round runs. [decided: the rule, methodology PR #50]

C26. The second round found 18 defects in passages the first round had already reviewed and the reasoning role had fixed. evidence: E2. [decided: review, 2026-10-26]

C27. One stranger round under-measures normative text. [inferred: R3]

### Tools

C14. methodology-tools PR #18 adds CK-12 and the Footprint header to `mtool ir check`. evidence: E3. [decided: GitHub, 2026-10-26]

C15. Two parser defects were found during the close-out and fixed in both the pipeline's lint and the tools port. evidence: E3. [decided: this chunk]

C21. The first defect: a term whose name begins with "Term" was read as the vocabulary's header row and dropped. evidence: E3. [decided: this chunk]

C22. The second defect: a link into another repository's vocabulary was reported as unresolved, because the check cannot read that repository offline. evidence: E3. [decided: this chunk]

C16. The first defect kept the unratified-term count at one after every term was ratified. evidence: E3. [decided: this chunk]

### Releases

C17. The methodology's Unreleased section holds five amendments: #46, #47, #48, #49 and #50. evidence: E4. [decided: docs/releases.md, 2026-10-26]

C18. Every project with an Agent bootstrap owes one copy action of the W-008 block at the next release. [decided: methodology PR #46, 2026-10-26]

C19. The parked semantic-audit calibration item is due for adjudication within three minor releases of 2026-08-30. evidence: E4. [decided: docs/backlog.md]

C23. v1.4.0 and v1.5.0 are the two minor releases since 2026-08-30. evidence: E4. [decided: docs/releases.md]

C20. The next minor release is the third, so the parked item is due for adjudication at that release. [inferred: R2]

## Relations

R1. C2 depends-on C1 because the three conditions name the subjects of #49, #17 and #6.

R2. C20 depends-on C23 because the floor counts minor releases from the parking date.

R3. C27 depends-on C26 because the second round's count on the fixed passages is the measure of what the first round and its fixes left.

## Evidence

E1. The seven pull requests, each read on GitHub on 2026-10-26 with state closed and merged true.

E2. methodology docs/records/normative-second-round.ir.md and .review.md on branch normative-second-round; https://github.com/majodali/methodology/pull/50.

E3. https://github.com/majodali/methodology-tools/pull/18; scripts/lint.mjs at this commit, vocabularyEntries and the SP-24 check.

E4. methodology docs/releases.md, Unreleased, at branch normative-second-round; docs/backlog.md, the semantic-audit auto-trigger calibration item.

## Asks

A1. Confirm the close-out record: the met conditions, the hold, and the markers. Depends: C2, C3, C6.

A2. Adjudicate methodology PR #50, the second round and the Footprint header, and decide whether a third stranger round runs on its text. Depends: C11, C25.

A3. Merge methodology-tools PR #18. Depends: C14.

A4. Adjudicate the roles proposal in project-orchestrator, whose merge recorded receipt only. Depends: C5.

A5. Decide whether to cut the next methodology release now, which carries five amendments and the bootstrap-block migration round, and whether review round 2 is held at that cut. Depends: C17, C18, C20.
