# Evaluation corpus

The register of evaluation cases. A case is a text graded against the
pipeline's reader and pattern rules. The corpus exists so that changes
to the IR schema, the [style specification](../docs/vocabulary.md#def-style-specification) and the role instructions
are tested against known defects rather than against memory.

The file defines the **Evaluation case** custom document type under
methodology Article 7, declared in
[docs/classification.md](../docs/classification.md). Every case under
`eval/cases/` is an instance and links here.

## Case format

A case is one markdown file named `NNN-<subject>-<date>.md` with these
sections in this order:

| Section | Content |
|---|---|
| Header | case number; date of the source text; the reader the text addressed; where the text came from; whether it went through the pipeline |
| Source text | the text verbatim, in a fenced block, unedited |
| Findings | a table: quoted text · defect · rule broken (named) · which pipeline stage should have caught it |
| Measures | word count; finding count; findings per thousand words; unratified terms used |
| Outcome | what the case changed: a schema rule, a [lint](../docs/vocabulary.md#def-lint), an instruction, or nothing yet |

A case is never edited after grading except to fill its Outcome. A
regrade is a new case citing the old one.

## Meta-review records

A [meta-review](../docs/vocabulary.md#def-meta-review) is an evaluation case whose source text is a
review record of more than two rounds, with the text it reviewed. Its
Findings section lists, per round, what the round found that the
earlier rounds and their fixes had not caught, and why. Its Outcome
names the process change proposed, or none. A meta-review may cover the counts of two or more texts that ran in parallel on shared rules. The meta-review names the text with each claim identifier it cites ([case 012](cases/012-meta-review-branch-point-v1.9-and-ir-spec-count-5-2026-10-30.md), change 15).

## Cases

| Case | Source | Reader | Findings / kwords | Outcome |
|---|---|---|---|---|
| [001](cases/001-review-response-2026-10-23.md) | methodology session review of two Allegro proposals, 2026-10-23 | human owner, in conversation | 9 / 1.25k = 7.2 | baseline; motivated the pilot |
| [002](cases/002-lint-on-own-documents-2026-10-25.md) | the pilot's fifteen documents at the end of chunk 1, linted by the chunk 2 lint | RD-4 and RD-1 | 43 violations, 130 warnings before; 0 and 30 after | schema v1.1; six lint refinements |
| [003](cases/003-live-run-portfolio-refresh-2026-10-25.md) | the Portfolio refresh in the methodology repository, the first live run | RD-1 | 82.0, 35.2, 25.2 over three rounds; round 3 readable | three specification changes; two reviewer-instruction changes |
| [004](cases/004-normative-text-reviews-2026-10-26.md) | four methodology amendments under disposition D3, one stranger round each | RD-4 | 22.1 over 5,878 words; 21.0 on new text; none readable before fixes | the adopted specification rewritten; CK-12; the second-round question |
| [005](cases/005-meta-review-stranger-rounds-2026-10-26.md) | meta-review: ten stranger rounds on the methodology's IR specification (PR #51), limit reached | RD-4 | 232 findings; 10.9 to 4.8 per thousand words; 0 of 10 readable | nine process changes proposed, six recommended |
| [006](cases/006-full-ir-rewrite-rounds-2026-10-27.md) | the IR specification rewritten from a full IR (172 claims), ten stranger rounds with a revised brief, fixes IR first (methodology PR #52); case 005 is the meta-review of PR #51's rounds, on PR #7 | RD-4 | 110 findings; 9.0 to 2.1 per thousand words; prose 2,884 to 2,804 words; readable at round 10 | branch point v1.4: the revised brief, the claims check, the fix discipline |
| [007](cases/007-meta-review-full-ir-rounds-2026-10-27.md) | meta-review: the ten rounds of case 006, by a fresh session | RD-4 | 110 findings; about 21 fix-touched or repeats (case 005: about 120 of 232); readable at round 10 | six changes adopted (branch point v1.4); case 005's changes decided |
| [008](cases/008-meta-review-branch-point-rounds-2026-10-27.md) | meta-review: the six rounds on branch point v1.4, the procedure applied to the text that defines it | RD-4 | 75 findings; 15.1 to 6.2 per thousand words; 6 of 63 fixes rejected at confirmation; readable at round 6 | five changes adopted by the owner on 2026-10-27: branch point v1.5; change 5 also in the methodology's intermediate-representation specification |
| [009](cases/009-meta-review-vision-rounds-2026-10-29.md) | meta-review: the ten rounds on the methodology's vision document (methodology PR #62), rendered by the paraphraser under D2, limit reached | RD-4 | 129 findings; 28.4 to 2.0 per thousand words; 3 of 107 fixes not held at confirmation; two mismatches recurring three times each; not readable at round 10 | nineteen changes adopted by the owner on 2026-10-29: branch point v1.7; changes 2, 14, 15 and 18 also in the methodology's intermediate-representation specification; term structural fix ratified |
| [010](cases/010-meta-review-ir-spec-count-4-2026-10-30.md) | meta-review: count 4 of the methodology's intermediate-representation specification (2026-10-29), four rounds under branch point v1.7, readable at round 4 | RD-4 | signals 1 and 2 fired; the round-4 verdict passed a second mismatch on one claim; fifteen changes proposed, thirteen to adopt | thirteen changes adopted by the owner on 2026-10-30: branch point v1.9; changes 1, 5, 9, 11, 12 and 13 also in the methodology's intermediate-representation specification, count 5; change 15 confirmed, change 14 declined |
| [011](cases/011-meta-review-vision-count-2-2026-10-30.md) | meta-review: count 2 of the methodology's vision document (2026-10-29), three rounds under branch point v1.7 after the service-review corrections, readable at round 3 | RD-4 | signals 1 and 2 fired; most findings traced to the corrections made outside a round; eleven changes proposed, nine to adopt; two terms | nine changes adopted by the owner on 2026-10-30: branch point v1.9; change 1 also in the methodology's intermediate-representation specification, count 5; change 4 confirmed, change 11 declined; terms [own mismatch](../docs/vocabulary.md#def-own-mismatch) and [re-fix](../docs/vocabulary.md#def-re-fix) ratified |
| [012](cases/012-meta-review-branch-point-v1.9-and-ir-spec-count-5-2026-10-30.md) | meta-review, one task over two counts that closed on 2026-10-30 and ran in parallel on shared rules: branch point v1.9 (eight rounds, readable at round 8) and count 5 of the methodology's intermediate-representation specification (ten rounds, limit reached, not readable, final round's fixes confirmed) | RD-4 | 91 and 84 findings; 6.2 to 1.5 and 5.9 to 0.5 per thousand words; signals 1, 2 and 4 fired on both; the own-mismatch exception and the override decided no verdict in eighteen rounds; 59 new defects at confirmation; fifteen changes proposed, fourteen to adopt | fifteen changes adopted by the owner on 2026-10-30: branch point v1.10 (changes 1, 2, 4 to 14); the methodology's intermediate-representation specification, count 6 (changes 1, 2, 4 to 9, 11, 13, 14); the signals script (changes 1, 11, 12, 13); this README (change 15); change 3 confirms the 200-word limit; seven terms with vocabulary rows |
| [013](cases/013-meta-review-k003-proposal-count-1-2026-10-30.md) | meta-review: count 1 of the project-orchestrator proposal to amend K-003 (a declared planning/execution model is the source of progress truth), normative text under D3, ten rounds under branch point v1.8, limit reached, not readable, final round's fixes confirmed; accepted by the owner at node P3-N007's gate | RD-4 | 119 findings; 10.6 to 1.5 per thousand words; an undefined term in every round; three contradictions on the rule text left to the owner; 7 of 15 late undefined terms written by fixes; eight changes proposed, five to adopt | pending the owner's decision |
