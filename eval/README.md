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
names the process change proposed, or none.

## Cases

| Case | Source | Reader | Findings / kwords | Outcome |
|---|---|---|---|---|
| [001](cases/001-review-response-2026-10-23.md) | methodology session review of two Allegro proposals, 2026-10-23 | human owner, in conversation | 9 / 1.25k = 7.2 | baseline; motivated the pilot |
| [002](cases/002-lint-on-own-documents-2026-10-25.md) | the pilot's fifteen documents at the end of chunk 1, linted by the chunk 2 lint | RD-4 and RD-1 | 43 violations, 130 warnings before; 0 and 30 after | schema v1.1; six lint refinements |
| [003](cases/003-live-run-portfolio-refresh-2026-10-25.md) | the Portfolio refresh in the methodology repository, the first live run | RD-1 | 82.0, 35.2, 25.2 over three rounds; round 3 readable | three specification changes; two reviewer-instruction changes |
| [004](cases/004-normative-text-reviews-2026-10-26.md) | four methodology amendments under disposition D3, one stranger round each | RD-4 | 22.1 over 5,878 words; 21.0 on new text; none readable before fixes | the adopted specification rewritten; CK-12; the second-round question |
| [005](cases/005-meta-review-stranger-rounds-2026-10-26.md) | meta-review: ten stranger rounds on the methodology's IR specification (PR #51), limit reached | RD-4 | 232 findings; 10.9 to 4.8 per thousand words; 0 of 10 readable | nine process changes proposed, six recommended |
| [006](cases/006-full-ir-rewrite-rounds-2026-10-27.md) | the IR specification rewritten from a full IR (172 claims), ten stranger rounds with a revised brief, fixes IR first (methodology PR #52); case 005 is the meta-review of PR #51's rounds, on PR #7 | RD-4 | 110 findings; 9.0 to 2.1 per thousand words; prose 2,884 to 2,804 words; readable at round 10 | pending: the revised brief, a text half for the round trip, the fix discipline |
