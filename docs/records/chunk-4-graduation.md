Chunk 4 opened the [graduation](../vocabulary.md#def-graduation) of the pilot's artifacts to three destination projects, and the gate asks you to adjudicate the pull requests and to decide the exit.

## Asks

1. Merge communication-pipeline PR [#4](https://github.com/majodali/communication-pipeline/pull/4) (the chunk 3 gate report), then review this PR.
2. Adjudicate methodology PRs [#47](https://github.com/majodali/methodology/pull/47), [#48](https://github.com/majodali/methodology/pull/48) and [#49](https://github.com/majodali/methodology/pull/49) in that order.
3. Review and merge methodology-tools PR [#17](https://github.com/majodali/methodology-tools/pull/17).
4. Adjudicate project-orchestrator PR [#6](https://github.com/majodali/project-orchestrator/pull/6).
5. Ratify or strike the term listed under Terms introduced, and confirm that the header it names is optional in docs/ir-schema.md.
6. Decide whether normative text gets a second [stranger](../vocabulary.md#def-stranger) round by default.
7. Name a destination for the evaluation corpus, or confirm that the evaluation corpus archives with the repository.
8. Confirm chunk 5 as the close-out chunk and the last.
9. Rule on the three open asks of PR #4 if the drafted answers are not the ruling.

## What is already covered

This part uses the term footprint, which this report proposes. **Footprint** means the files or directories an [IR](../vocabulary.md#def-intermediate-representation) declares its work is expected to touch, compared after the work with the files the branch changed.

### The methodology destination

- Three stacked methodology PRs carry the graduation amendments: [#47](https://github.com/majodali/methodology/pull/47), [#48](https://github.com/majodali/methodology/pull/48) and [#49](https://github.com/majodali/methodology/pull/49).
- PR #47 adds the Protects: field to Article 5 and defines the three invariants.
- PR #48 adds P-007 (documents state their reader) and P-008 (terms are defined once and linked at first use), with the [reader catalog](../vocabulary.md#def-reader-catalog), the term handling and the mechanical checks in the style guide.
- PR #49 adds W-009 (the methodology corpus writes its deliverables IR first) and the intermediate-representation specification.
- Each amendment was written IR first and its rule text reviewed by the stranger under [disposition](../vocabulary.md#def-disposition) D3.
- The three invariant definitions in #47 are wordings proposed from the owner's writeup, which is not in the corpus.
- The adopted specification was rewritten in the methodology's own terms after its review found nine undefined borrowed terms and eleven unresolved referents in the mechanical transform.
- The ratified terms migration round and terms introduced gain vocabulary rows in #48.

### The tools destination

- methodology-tools PR [#17](https://github.com/majodali/methodology-tools/pull/17) ports the [lints](../vocabulary.md#def-lint): `mtool style`, `mtool ir check`, and the W-008 (reports map their deliverables) block comparison in `mtool audit form`.
- On the pilot's 27 files, `mtool style` reports 99 warnings and 0 violations, equal to the counts of scripts/lint.mjs line for line.
- A delegated agent wrote the port from a brief, with the pipeline's scripts and specifications as the only sources.

### The orchestrator destination

- project-orchestrator PR [#6](https://github.com/majodali/project-orchestrator/pull/6) carries the proposal: a [paraphraser](../vocabulary.md#def-paraphraser) role on the standard tier, a stranger [reviewer](../vocabulary.md#def-reviewer) role on the frugal tier, an IR line in the task result, and a routing rule driven by the IR.
- The routing rule is the [branch point](../vocabulary.md#def-branch-point) v1.1 with dispositions renamed to dispatches.

### Measurement

- [Evaluation case](../vocabulary.md#def-evaluation-case) 004 records the four stranger reviews of normative text: 130 findings over 5,878 words, 22.1 per thousand, none readable before fixes.
- On the new text alone, the three chunk 4 reviews found 21.0 findings per thousand words.
- No second round was run on any normative text, so readability after fixes is not measured.
- The schema is at v1.3: an optional Footprint header, scripts/footprint.mjs, and CK-12 (identifier uniqueness).
- The five terms ratified at the chunk 3 gate carry status decided in the [vocabulary](../vocabulary.md).

### The exit

- The repository archives when the schema and specifications are adopted upstream, the lints have moved to methodology-tools, and the roles have moved to project-orchestrator.
- Acceptance of #49 meets the first condition, merge of methodology-tools #17 the second, and acceptance of project-orchestrator #6 the third.

### Open from chunk 3

- Pipeline PR #4, the chunk 3 gate report, was still open when chunk 4 began, so this branch stacks on it.
- The asks 3, 4 and 6 of PR #4 (optional part field, disposition D3, direct-prose PR bodies) received no explicit ruling in the owner's message.
- Chunk 4 proceeded on the drafted answers to those three asks.
- The W-008 amendment merged as PR #46 changes the required bootstrap block.
- Every project with an Agent bootstrap owes one copy action of that block at the next methodology release.

## What changed

### The methodology destination

- The PRs are stacked so each can be adjudicated on its own, and the merge order is #47, #48, #49. Points at: methodology PRs #47, #48 and #49.
- W-009 applies to the methodology-corpus type only, with adoption by declaration for other projects. Points at: methodology PR #49.

### Measurement

- The Footprint header and scripts/footprint.mjs are the mechanical reading of the owner's prediction-surprise indicator. Points at: scripts/footprint.mjs.
- This IR (docs/records/chunk-4-graduation.ir.md) is the first with a Footprint header, and scripts/footprint.mjs reports its surprises and misses at the PR. Points at: docs/ir-schema.md (Changes, v1.3), scripts/footprint.mjs and scripts/test.mjs.
- The lint-versus-linker divergence of chunk 3 is left as recorded: the lint counts a first use inside a table cell or an agent file's front matter where the linker does not write.

### The exit

- After all three conditions of the exit are met, the pilot's remaining artifacts are its evaluation corpus, its dispatch log, its records and its eval cases.
- The evaluation corpus has no destination named in the pilot plan.
- Chunk 5, close-out, would archive the repository after the evaluation corpus is placed, and would be the last chunk.

## Terms introduced

- Footprint (status: proposed, this IR): the files or directories an IR declares its work is expected to touch, compared after the work with the files the branch changed. It is defined at its first use under What is already covered, and ask 5 requests its ratification or striking.

<!-- render map: T1→lead sentence; T2→What is already covered lead-in, Terms introduced; C1→covered/methodology destination; C29→covered/methodology destination; C30→covered/methodology destination; C31→covered/methodology destination; C2→changed/methodology destination; C3→covered/methodology destination; C4→covered/methodology destination; C5→changed/methodology destination; C6→covered/methodology destination; C7→covered/methodology destination; C8→covered/tools destination; C9→covered/tools destination; C10→covered/tools destination; C11→covered/orchestrator destination; C12→covered/orchestrator destination; C13→covered/measurement; C14→covered/measurement; C15→covered/measurement; C16→covered/measurement; C17→changed/measurement; C18→changed/measurement; C19→covered/measurement; C20→changed/measurement; C21→covered/exit; C22→covered/exit; C23→changed/exit; C24→changed/exit; C25→changed/exit; C26→covered/open from chunk 3; C27→covered/open from chunk 3; C32→covered/open from chunk 3; C28→covered/open from chunk 3; C33→covered/open from chunk 3; A1→Asks 1; A2→Asks 2; A3→Asks 3; A4→Asks 4; A5→Asks 5; A6→Asks 6; A7→Asks 7; A8→Asks 8; A9→Asks 9 -->
