This report is the close-out of the pilot, and it requests five decisions at the close-out gate.

## Asks

1. Confirm the close-out record: the met conditions, the hold, and the markers.
2. Adjudicate methodology [PR #50](https://github.com/majodali/methodology/pull/50), the second round and the [Footprint](../vocabulary.md#def-footprint) header, and decide whether a third [stranger](../vocabulary.md#def-stranger) round runs on its text.
3. Merge methodology-tools [PR #18](https://github.com/majodali/methodology-tools/pull/18).
4. Adjudicate the roles proposal in project-orchestrator, whose merge recorded receipt only.
5. Decide whether to cut the next methodology release now. The release carries five amendments and the bootstrap-block migration round. Also decide whether review round 2 is held at that cut.

## What is already covered

### The exit

- All seven pull requests of chunk 4 are merged: methodology [#47](https://github.com/majodali/methodology/pull/47), [#48](https://github.com/majodali/methodology/pull/48) and [#49](https://github.com/majodali/methodology/pull/49); methodology-tools [#17](https://github.com/majodali/methodology-tools/pull/17); project-orchestrator [#6](https://github.com/majodali/project-orchestrator/pull/6); communication-pipeline [#4](https://github.com/majodali/communication-pipeline/pull/4) and [#5](https://github.com/majodali/communication-pipeline/pull/5).
- The three exit conditions of settled decision 6 are met.
- The communication-pipeline repository is kept, with its evaluation corpus, until the owner is satisfied that the process works well in all projects.
- project-orchestrator [PR #6](https://github.com/majodali/project-orchestrator/pull/6) recorded receipt of the roles proposal, and the adjudication of the proposal is the backlog item the merge added there.

### What the close-out marks

- The [vocabulary](../vocabulary.md) has no unratified term: footprint, ratified at the chunk 4 gate, was the last.

### The second round

- The [branch point](../vocabulary.md#def-branch-point) is at v1.2: [disposition](../vocabulary.md#def-disposition) D3 runs two [reviewer](../vocabulary.md#def-reviewer) rounds.
- Round 1 of the review of the rule text in methodology [PR #50](https://github.com/majodali/methodology/pull/50) returned 28 findings, 21 in the new passages, 12.5 per thousand words, verdict not readable.
- Round 2, on the fixed text, returned 29 findings, 18 in the new passages, 10.0 per thousand words, verdict not readable.
- The round 2 findings are fixed, and the fixed text is unmeasured, so the owner decides at adjudication whether a third round runs.
- The second round found 18 defects in passages the first round had already reviewed and the [reasoning role](../vocabulary.md#def-reasoning-role) had fixed.
- One stranger round under-measures normative text.

### Tools

- methodology-tools [PR #18](https://github.com/majodali/methodology-tools/pull/18) adds CK-12 and the Footprint header to `mtool ir check`.
- Two parser defects were found during the close-out and fixed in both the pipeline's [lint](../vocabulary.md#def-lint) and the tools port.
- The first defect is that a term whose name begins with "Term" was read as the vocabulary's header row and dropped.
- The second defect is that a link into another repository's vocabulary was reported as unresolved, because the check cannot read that repository offline.
- The first defect kept the unratified-term count at one after every term was ratified.

### Releases

- The methodology's Unreleased section holds five amendments: [#46](https://github.com/majodali/methodology/pull/46), [#47](https://github.com/majodali/methodology/pull/47), [#48](https://github.com/majodali/methodology/pull/48), [#49](https://github.com/majodali/methodology/pull/49) and [#50](https://github.com/majodali/methodology/pull/50).
- Every project with an Agent bootstrap owes one copy action of the W-008 (reports map their deliverables) block at the next release.
- The parked semantic-audit calibration item is due for adjudication within three minor releases of 2026-08-30.
- v1.4.0 and v1.5.0 are the two minor releases since 2026-08-30.
- The next minor release is the third, so the parked item is due for adjudication at that release.

## What changed

### The exit

- The plan, the README and the Classification record the met conditions and the owner's hold.

### What the close-out marks

- The [reader catalog](../vocabulary.md#def-reader-catalog), the [style specification](../vocabulary.md#def-style-specification), the [term lifecycle](../vocabulary.md#def-term-lifecycle) and the schema carry a supersession marker naming their methodology home.
- The four marked documents stay as the [paraphraser](../vocabulary.md#def-paraphraser)'s and reviewer's inputs until the roles run in project-orchestrator.
- Eight vocabulary rows now name the methodology vocabulary as their [definition site](../vocabulary.md#def-definition-site): [intermediate representation](../vocabulary.md#def-intermediate-representation), reasoning role, paraphraser, stranger, reader catalog, definition site, [readability test](../vocabulary.md#def-readability-test), [convergence](../vocabulary.md#def-convergence).

### The second round

- The methodology specification gains the second round and the Footprint header by the amendment in methodology [PR #50](https://github.com/majodali/methodology/pull/50), written IR first.
- The amendment's rule text is the first normative text reviewed under the rule it introduces.

## Terms introduced

No terms introduced.

<!-- render map: T1→not used in any rendered claim; C1→What is already covered/The exit; C2→What is already covered/The exit; C3→What is already covered/The exit; C4→What changed/The exit; C5→What is already covered/The exit; C6→What changed/What the close-out marks; C7→What changed/What the close-out marks; C8→What changed/What the close-out marks; C9→What is already covered/What the close-out marks; C10→What is already covered/The second round; C11→What changed/The second round; C12→What changed/The second round; C13→What is already covered/The second round; C14→What is already covered/Tools; C15→What is already covered/Tools; C16→What is already covered/Tools; C17→What is already covered/Releases; C18→What is already covered/Releases; C19→What is already covered/Releases; C20→What is already covered/Releases; C21→What is already covered/Tools; C22→What is already covered/Tools; C23→What is already covered/Releases; C24→What is already covered/The second round; C25→What is already covered/The second round; C26→What is already covered/The second round; C27→What is already covered/The second round; A1→Asks 1; A2→Asks 2; A3→Asks 3; A4→Asks 4; A5→Asks 5 -->
