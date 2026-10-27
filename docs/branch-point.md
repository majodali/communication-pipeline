# Branch point

Status: active (v1.4, 2026-10-27: the rounds procedure and the
reviewer brief, from evaluation cases 006 and 007; v1.3, 2026-10-26:
every review runs in rounds until readable, limit ten; three or more
rounds trigger a meta-review).
Thresholds are provisional until the evaluation corpus tunes them. The rules are
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

All inputs but the owner flag come from the IR.

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
| D2 render and review | D1, then [reviewer](vocabulary.md#def-reviewer) rounds under the Rounds section below |
| D3 review without render | the [reasoning role](vocabulary.md#def-reasoning-role) renders the prose itself, because the text is normative (a rule, a specification) and a paraphrase could change its force; then reviewer rounds as in D2 |

## Rounds

The rounds of D2 and D3 follow the methodology specification's
[Stranger rounds](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#stranger-rounds)
rule: a [count](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-count)
of [rounds](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-round)
runs until a round returns readable, or to the
[limit](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-limit)
of ten. This project's procedure for one round, in order (owner
decisions of 2026-10-27 on cases 006 and 007):

1. Before the round, the reasoning role finds, for each claim changed
   since the last round, the prose sentence that carries it. The
   reasoning role records each changed claim and its sentence in the
   [review record](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-review-record).
   The script `scripts/claims-check.mjs` lists the changed claims and
   the best-matching sentence for each. The script reports a changed
   claim no sentence carries. The reasoning role fixes, before the
   round starts, a changed claim that no sentence carries.
2. The round's stranger is a fresh instance. A restatement is the
   stranger's account, in at most 200 words of its own, of the text's
   problem, terms and decisions. The stranger reads the prose first,
   writes its restatement, and only then reads the IR.
3. The reasoning role fixes each finding it accepts in the IR first
   and then in the prose. A fix rephrases or cuts words before it
   adds words. A fix adds words only for a missing definition,
   referent or rule. The reasoning role records a declined finding
   in the review record with its reason.
4. After the fixes, the round's stranger instance receives its
   findings table and the fixed passages. The instance answers, per
   finding, whether the fix holds. The reasoning role fixes again,
   before the next round, a fix the instance says does not hold.
5. The next round's brief carries the declined findings of the
   earlier rounds with their reasons.
6. A restatement mismatch repeated by two rounds in one form is a
   prose finding, whatever the strangers attributed it to.

The verdict is readable when the restatement matches the IR and the
stranger finds no contradiction and no undefined term. The review record holds, per round, the prose word count, the
IR claim count, the finding count and the verdict. Growth of the
prose across rounds is a measure in the review record, not a bound.
A reason split from its rule into a claim of its own renders joined
to the rule by connective prose.

## Reviewer brief

During the review the stranger reads the prose and the IR and no
other file. After reading the IR, the stranger reports each
disagreement between its restatement and the IR as a finding, with
the side that caused it. The stranger reports findings against
SP-01 to SP-05, SP-08 to SP-11, SP-18 as calibrated, SP-25 and SP-26
of the [style specification](style-spec.md). Each finding carries a
locus (the prose, the IR, or both) and a fix kind (cut, rephrase, or
add). The brief's SP-05 reads as the methodology's
[P-004](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-004--identifiers-carry-names)
(identifiers carry names) does: a name or a link at first use. SP-18 is calibrated to a duty whose actor or trigger the
text does not state. SP-25, contradiction, is a finding when two
passages cannot both be followed. SP-26, excess words, is a finding
when a word, phrase or sentence can go without losing a claim, or a
claim is stated twice. The brief lists, for the text under review, the forms that are not
defects. The stranger's report has four parts in order: Restatement,
Findings, Readability, Counts.

## When an IR is required at all

A report to RD-1 (the human owner, in conversation) or RD-3 (a
delegating agent) may be written as prose directly, with the prose
[lint](vocabulary.md#def-lint). The condition: it introduces no term,
records no decision, and states no register fact. Any of those three requires
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
  stands. Past the thresholds, the owner reads prose faster than a
  claims list.
- BP-09: the proportional-verification case. The owner or the
  delegating agent reads the short form.

## Meta-review

A text with three or more rounds in one count is a subject for
[meta-review](vocabulary.md#def-meta-review) (owner ruling,
2026-10-26). This project reads the review record and the text, and
reports, as an [evaluation case](vocabulary.md#def-evaluation-case),
whether the process needs a change. The meta-reviews so far are
[case 005](../eval/cases/005-meta-review-stranger-rounds-2026-10-26.md),
on the rounds of methodology PR #51, and
[case 007](../eval/cases/007-meta-review-full-ir-rounds-2026-10-27.md),
on the rounds of methodology PR #52.

The owner's decisions of 2026-10-27 on case 005's held changes: the
threshold verdict is struck, because the verdict rule reached zero
contradictions without a count threshold. The flat-stop rule with a
limit of five is struck, because the finding rate was flat from round
5 while contradictions ran to round 9. Growth is a measure, not a
bound, because fixing in the IR first kept the prose from growing.
The split of the specification into IR form and review process is
closed as not needed, because the IR specification reached readable
at 2,808 words. Reviewing only the amended passages after round 1
stays not recommended. Fixing only new-passage findings stays not
recommended.

## Record

The [dispatcher](vocabulary.md#def-dispatcher) records, for every IR it routes, the inputs, the rule
that fired and the [disposition](vocabulary.md#def-disposition), in `eval/dispatch-log.md` (chunk 2
creates it). The log is the data chunk 3 tunes against.

<!-- render map: C37→¶Status C38→¶Status C39→¶D2 C1→¶Rounds C2→¶Rounds-1 C36→¶Rounds-1 C3→¶Rounds-1 C41→¶Rounds-1 C4→¶Rounds-1 C5→¶Rounds-2 C6→¶Rounds-3 C7→¶Rounds-3 C35→¶Rounds-3 C8→¶Rounds-3 C9→¶Rounds-4 C10→¶Rounds-4 C11→¶Rounds-5 C12→¶Rounds-6 C13→¶Rounds-verdict C14→¶Rounds-verdict C15→¶Rounds-verdict C16→¶Rounds-verdict C17→¶Brief C19→¶Brief C20→¶Brief C21→¶Brief C22→¶Brief C23→¶Brief C24→¶Brief C25→¶Brief C26→¶Brief C27→¶Brief C28→¶Meta-2 C29→¶Meta-2 C30→¶Meta-2 C31→¶Meta-2 C32→¶Meta-2 C42→¶Meta-2 C33→¶Meta-1 C40→¶Meta-1 C34→¶Meta-1 (IR: docs/records/branch-point-v1.4.ir.md) -->
