# Case 004: four stranger reviews of normative text, 2026-10-25 and 2026-10-26

Instance of the [Evaluation case](../README.md) type.

| Field | Value |
|---|---|
| Case | 004 |
| Source text date | 2026-10-25 to 2026-10-26 |
| Reader addressed | RD-4 (a fresh agent session) |
| Origin | four methodology amendments drafted IR first and rendered by the reasoning role under disposition D3: W-008 terms introduced (PR #46), the Protects: field (PR #47), P-007 and P-008 (PR #48), W-009 and the intermediate-representation specification (PR #49) |
| Through the pipeline | yes: IR by the reasoning role; no paraphraser (normative text); reviewer on the haiku model, fresh context, one round each |
| Graded by | the reviewer role, with dispositions by the reasoning role, recorded beside each IR in the methodology repository under docs/records/ as `<name>.review.md` |

## Source text

The four rule texts, their IRs and the review records are in the methodology repository under `docs/records/`: `w008-terms-introduced`, `protects-field`, `documents-name-reader`, `ir-first`, each with `.ir.md` and `.review.md`.

## Findings

| Review | Words | Findings | Per thousand words | Fixed | Pre-existing text | By design or artifact | Verdict before fixes |
|---|---|---|---|---|---|---|---|
| W-008 terms introduced | 1,386 | 36 | 26.0 | 10 | 23 | 3 | not readable |
| Protects: field | 430 | 20 | 46.5 | 14 | 3 | 3 | not readable |
| P-007 and P-008 | 1,700 | 25 | 14.7 | 21 | 0 | 1 + 3 excerpt artifacts | not readable |
| W-009 and the specification | 2,362 | 49 | 20.7 | 43 | 0 | 2 + 4 by design | not readable |

The W-008 review covered the whole rule, most of it text settled before the amendment, so its fixed count is low and its pre-existing count high. The three chunk 4 reviews covered new text only.

## Measures

| Measure | Value |
|---|---|
| Words reviewed | 5,878 |
| Findings | 130 |
| Findings per thousand words, all four | 22.1 |
| Findings per thousand words, new text only (three chunk 4 reviews) | 21.0 |
| Reviewer tokens per review | 83k to 121k |
| Reviewer seconds per review | 146 to 273 |
| Second rounds run | 0 |

What the reviews found that the lint cannot: a MUST whose scope omits a reader class (W-009); a block that drops a qualifier its Statement carries (W-008); a definition that could not decide a case (proportional verification); a term defined in two places (reader catalog); a check that contradicts its rule (the bold check against inline-defined terms); a stated property with no check (identifier uniqueness, now CK-12).

## Outcome

- The specification adopted into the methodology was rewritten in the methodology's own terms after its review: a mechanical transform of the pipeline's schema carried nine undefined borrowed terms and eleven unresolved referents.
- CK-12 (identifier uniqueness) entered the schema (v1.3) and the methodology specification.
- Readability after fixes was not re-measured for any of the four. A second round costs about 150 to 270 seconds and 100k tokens; the chunk 4 gate asks whether normative text gets a second round by default.
