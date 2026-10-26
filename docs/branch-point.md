# Branch point

Status: active (v1.2, chunk 5: D3 runs two reviewer rounds). Thresholds
are provisional until the evaluation corpus tunes them. The rules are
also the Rendering conditions of the methodology's
[intermediate-representation specification](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md)
from 2026-10-26.

Type: Specification (methodology vocabulary). The pipeline's
[dispatcher](vocabulary.md#def-dispatcher) implements against it.

Reader: RD-4 (a fresh agent session) implementing or running the
pipeline; the human owner setting thresholds.

## Purpose

The [branch point](vocabulary.md#def-branch-point) decides, for one IR, which of the pipeline's model
stages run. It protects proportional verification: a short report to
a reader who shares the conversation costs one [lint](vocabulary.md#def-lint) pass, and a
document for a [stranger](vocabulary.md#def-stranger) costs the full pipeline.

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

| [Disposition](vocabulary.md#def-disposition) | What runs |
|---|---|
| D0 [lint](vocabulary.md#def-lint) only | the schema checks, CK-01 (the referent rule) to CK-10 (section order), and the prose lints; the IR is delivered as it stands |
| D1 render | D0, then the [paraphraser](vocabulary.md#def-paraphraser) renders prose for the reader |
| D2 render and review | D1, then the [reviewer](vocabulary.md#def-reviewer) reads the IR and the prose against the reader's [readability test](vocabulary.md#def-readability-test) and the [style specification](style-spec.md) |
| D3 review without render | the [reasoning role](vocabulary.md#def-reasoning-role) renders the prose itself, because the text is normative (a rule, a specification) and a paraphrase could change its force; the reviewer then reads IR and prose as in D2; the reasoning role fixes the findings, and a reviewer reads the fixed text again (owner ruling, 2026-10-26, from [case 004](../eval/cases/004-normative-text-reviews-2026-10-26.md)) |

## When an IR is required at all

A report to RD-1 (the human owner, in conversation) or RD-3 (a
delegating agent) may be written as prose directly, with the prose
[lint](vocabulary.md#def-lint), when it introduces no term, records no decision, and makes
no claim about the state of a register. Any of those three requires
the IR, because each is content a model would hold: a term, a
decision, or a register fact (owner ruling, 2026-10-25). Documents
always start as an IR.

## Rules

Rules apply in order. The first rule whose condition holds decides.
Readers are the [catalog](readers.md)'s: RD-1 (human owner, in
conversation), RD-2 (human owner, returning), RD-3 (delegating agent),
RD-4 (fresh agent session), RD-5 (external reader).

| Rule | Condition | [Disposition](vocabulary.md#def-disposition) |
|---|---|---|
| BP-01 | always | the lints run, whatever disposition follows |
| BP-02 | owner flag is `review` | D2 |
| BP-02a | purpose is `document` and the IR header carries `Normative: yes` | D3 |
| BP-03 | purpose is `document` | D2 |
| BP-04 | reader is RD-4 or RD-5 | D2 |
| BP-05 | proposed terms > 0 and purpose is `document` | D2 |
| BP-05a | proposed terms > 0 | D1, with the ratification ask |
| BP-06 | reader is RD-2 | D1 |
| BP-07 | reader is RD-1 and (claims > 6 or dependent asks > 0 or longest claim > 30 words) | D1 |
| BP-08 | reader is RD-3 and (claims > 12 or dependent asks > 0) | D1 |
| BP-09 | reader is RD-1 or RD-3 | D0 |

## Why each rule

- BP-03 and BP-04: documentation is read by someone who was not in the
  conversation, and that reader is the one the pipeline exists for.
- BP-02a: a paraphrase of normative text could change its force, so
  the [reasoning role](vocabulary.md#def-reasoning-role) renders it and only the review runs.
- BP-05 and BP-05a: an unratified term in a document gets the
  [reviewer](vocabulary.md#def-reviewer)'s check. In a report the owner's ratification ask is the
  check, because the [stranger](vocabulary.md#def-stranger) review on reports runs only on request
  (owner ruling, 2026-10-25).
- BP-06: the returning owner needs the state paragraph, which only the
  [paraphraser](vocabulary.md#def-paraphraser) writes.
- BP-07 and BP-08: a short IR with no dependencies reads well as it
  stands; past the thresholds, the owner reads prose faster than a
  claims list. The thresholds are guesses and are tuned in chunk 3.
- BP-09: the proportional-verification case. The owner or the
  delegating agent reads the short form.

## Record

The [dispatcher](vocabulary.md#def-dispatcher) records, for every IR it routes, the inputs, the rule
that fired and the [disposition](vocabulary.md#def-disposition), in `eval/dispatch-log.md` (chunk 2
creates it). The log is the data chunk 3 tunes against.
