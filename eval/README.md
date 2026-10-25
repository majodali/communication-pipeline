# Evaluation corpus

The register of evaluation cases. A case is a text graded against the
pipeline's reader and pattern rules. The corpus exists so that changes
to the IR schema, the style specification and the role instructions
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
| Outcome | what the case changed: a schema rule, a lint, an instruction, or nothing yet |

A case is never edited after grading except to fill its Outcome. A
regrade is a new case citing the old one.

## Cases

| Case | Source | Reader | Findings / kwords | Outcome |
|---|---|---|---|---|
| [001](cases/001-review-response-2026-10-23.md) | methodology session review of two Allegro proposals, 2026-10-23 | human owner, in conversation | 9 / 1.25k = 7.2 | baseline; motivated the pilot |
| [002](cases/002-lint-on-own-documents-2026-10-25.md) | the pilot's fifteen documents at the end of chunk 1, linted by the chunk 2 lint | RD-4 and RD-1 | 43 violations, 130 warnings before; 0 and 30 after | schema v1.1; six lint refinements |
