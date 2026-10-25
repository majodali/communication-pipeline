# Case 002: the lint on the pilot's own documents, 2026-10-25

Instance of the [Evaluation case](../README.md) type.

| Field | Value |
|---|---|
| Case | 002 |
| Source text date | 2026-10-24 (chunk 1) |
| Reader addressed | RD-4 (fresh agent session) for the specifications; RD-1 (human owner, in conversation) for the two IRs |
| Origin | the fifteen markdown files the pilot had written by the end of chunk 1, linted by the chunk 2 [lint](../../docs/vocabulary.md#def-lint) on the day it was built |
| Through the pipeline | the two IRs were written claims-first; no lint, [paraphraser](../../docs/vocabulary.md#def-paraphraser) or [reviewer](../../docs/vocabulary.md#def-reviewer) existed yet |
| Graded by | scripts/lint.mjs, then the same session reading each finding |

## Source text

The fifteen files at commit 6dc8f4b of this repository. Not reproduced. The commit is the record.

## Findings

Before any fix, after the lint's first six false-positive refinements:

| Check | Count | True defect or false positive |
|---|---|---|
| CK-05 provenance form | 35 violations | true: `[proposed]` written bare where the schema requires `[proposed: this IR]` |
| CK-02 claim over 40 words | 6 violations | true: enumerations written as one claim |
| CK-06 unresolved identifier | 1 violation | true: a relation pointed at evidence, not a claim |
| CK-01 deictic phrase | 1 violation | true: "the same claim" inside the referent rule's own restatement |
| SP-05 bare identifier | 43 warnings | mixed: about half true; the rest were a table's first cell, which defines the identifier |
| SP-09 em-dash or semicolon join | 31 warnings | mixed: semicolon lists after a colon and register rows with one em-dash were false; the rest true |
| SP-20 numerals | 24 warnings | mostly false: identifiers such as CK-01 and versions such as 1.5.0 counted as numerals |
| SP-02 long sentence | 12 warnings | mixed: list items merged into one paragraph inflated some |
| CK-03 compound claim | 11 warnings | mixed: colon lists false; five true two-claim sentences |
| SP-10, SP-03, SP-07, SP-13 | 7 warnings | mixed |

After fixing the true defects and the lint:

| Check | Count |
|---|---|
| violations | 0 |
| SP-09 | 17, of which 9 inside the immutable block of W-008 (reports map their deliverables) in `CLAUDE.md` |
| SP-02 | 5 |
| SP-05 | 3, all inside quoted defective text in case 001 |
| SP-20 | 2 |
| SP-10 | 2, both headings of the W-008 block |
| SP-03 | 1 |

## Measures

| Measure | Value |
|---|---|
| Files | 15 |
| Violations before, after | 43, 0 |
| Warnings before, after | 130, 30 |
| True-defect violations | 43 of 43 |
| Lint false-positive classes found and fixed | 6 |
| Unratified terms used | 0 |

## Outcome

Schema v1.1: provenance required on terms, claims and clusters only; a split claim takes a new number. Six lint refinements with tests. One upstream question: the methodology's own W-008 block fails the semicolon and heading checks the pilot derived from the methodology (chunk 2 IR, ask A3). The author who wrote the schema violated it in 43 places on the day of writing, which is the case for a mechanical check over a remembered rule.
