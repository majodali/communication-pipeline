# Branch point

Status: active (v1, chunk 1). Thresholds are provisional until the
evaluation corpus tunes them (plan, chunk 3).

Type: Specification (methodology vocabulary). The pipeline's
dispatcher implements against it.

Reader: RD-4 (a fresh agent session) implementing or running the
pipeline; the human owner setting thresholds.

## Purpose

The branch point decides, for one IR, which of the pipeline's model
stages run. It protects proportional verification: a short report to
a reader who shares the conversation costs one lint pass, and a
document for a stranger costs the full pipeline.

## Inputs

All inputs come from the IR itself.

| Input | From |
|---|---|
| reader | the Reader header, a [catalog](readers.md) identifier |
| purpose | the Purpose header: `report` or `document` |
| claims | the count of `C` elements |
| proposed terms | the count of `T` elements with status `proposed` |
| dependent asks | the count of `A` elements with a `Depends:` field |
| longest claim | the word count of the longest `C` element |
| owner flag | `review` if the owner asked for a review of this output |

## Dispositions

| Disposition | What runs |
|---|---|
| D0 lint only | the schema checks CK-01 to CK-10 and the prose lints; the IR is delivered as it stands |
| D1 render | D0, then the paraphraser renders prose for the reader |
| D2 render and review | D1, then the reviewer reads the IR and the prose against the reader's readability test and the [style specification](style-spec.md) |

## Rules

Rules apply in order. The first rule whose condition holds decides.

| Rule | Condition | Disposition |
|---|---|---|
| BP-01 | always | the lints run, whatever disposition follows |
| BP-02 | owner flag is `review` | D2 |
| BP-03 | purpose is `document` | D2 |
| BP-04 | reader is RD-4 or RD-5 | D2 |
| BP-05 | proposed terms > 0 | D2 |
| BP-06 | reader is RD-2 | D1 |
| BP-07 | reader is RD-1 and (claims > 6 or dependent asks > 0 or longest claim > 30 words) | D1 |
| BP-08 | reader is RD-3 and (claims > 12 or dependent asks > 0) | D1 |
| BP-09 | reader is RD-1 or RD-3 | D0 |

## Why each rule

- BP-03 and BP-04: documentation is read by someone who was not in the
  conversation, and that reader is the one the pipeline exists for.
- BP-05: an unratified term needs the reviewer's undefined-term check
  before the owner is asked to ratify it.
- BP-06: the returning owner needs the state paragraph, which only the
  paraphraser writes.
- BP-07 and BP-08: a short IR with no dependencies reads well as it
  stands; past the thresholds, the owner reads prose faster than a
  claims list. The thresholds are guesses and are tuned in chunk 3.
- BP-09: the proportional-verification case. The owner or the
  delegating agent reads the short form.

## Record

The dispatcher records, for every IR it routes, the inputs, the rule
that fired and the disposition, in `eval/dispatch-log.md` (chunk 2
creates it). The log is the data chunk 3 tunes against.
