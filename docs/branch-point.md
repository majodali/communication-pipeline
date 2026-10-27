# Branch point

Status: under review (v1.6, round 2). Until the owner accepts v1.6,
v1.5 is active on main. Versions: v1.6, 2026-10-27, the signal-based
meta-review trigger; v1.5, 2026-10-27, the five process changes of
evaluation case 008; v1.4, 2026-10-27, accepted by the
owner with the style rules
[SP-05, SP-18, SP-25 and SP-26](style-spec.md#rule-table) and the
terms restatement, locus and fix kind, the six process changes of
evaluation case 007 and the owner's decisions on case 005's held
changes.
Thresholds are provisional until the evaluation corpus tunes them. The rules are the Rendering conditions of the methodology's
[intermediate-representation specification](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md)
from 2026-10-26.

Type: Specification (methodology vocabulary). The pipeline's
[dispatcher](vocabulary.md#def-dispatcher) implements against this specification.

Reader: RD-4 (a fresh agent session) implementing or running the
pipeline; the human owner setting thresholds.

## Purpose

The [branch point](vocabulary.md#def-branch-point) decides, for one IR, which of the pipeline's model
stages run. The branch point protects proportional verification: a short report to
a reader who shares the conversation costs one [lint](vocabulary.md#def-lint) pass. A document for a [stranger](vocabulary.md#def-stranger) costs the full pipeline.

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
| D0 [lint](vocabulary.md#def-lint) only | the schema checks, CK-01 to CK-10 of the methodology's
[mechanical checks](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#mechanical-checks), and the prose lints; the IR is delivered as it stands |
| D1 render | D0, then the [paraphraser](vocabulary.md#def-paraphraser) renders prose for the reader. The paraphraser, or the reasoning role when it renders, joins a reason the IR holds as its own claim to its rule by connective prose |
| D2 render and review | D1, then [reviewer](vocabulary.md#def-reviewer) rounds under the Rounds section below |
| D3 review, reasoning-role rendered | the [reasoning role](vocabulary.md#def-reasoning-role) renders the prose itself. Then the reviewer rounds run as in D2 |

## Rounds

The rounds of D2 and D3 follow the methodology specification's
[Stranger rounds](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#stranger-rounds)
rule: a [count](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-count)
of [rounds](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-round)
runs until a round returns readable, or to the
[limit](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-limit)
of ten. This project's procedure for one round, in order:

1. Before the round, the reasoning role finds, for each claim changed
   since the last round, the prose sentence that carries it. The
   reasoning role records each changed claim and its sentence in the
   [review record](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-review-record).
   The script `scripts/claims-check.mjs` lists the changed claims and
   the best-matching sentence for each. The script reports a changed
   claim no sentence carries. The script reports a changed claim whose best-matching sentence did
   not change since the last round, as stale. The script takes the
   previous round's prose as its base. The reasoning role fixes the
   prose, before the round starts, for a changed claim that no
   sentence carries or is stale.
2. The round's stranger is a fresh instance. The stranger brief is
   the instruction the reasoning role gives a round's stranger
   instance. A restatement is the stranger's account, in at most 200 words of its own, of the text's
   problem, terms and decisions. The stranger reads the prose,
   writes its restatement, and only then reads the IR.
3. The reasoning role fixes each finding it accepts in the IR and
   then in the prose. A fix rephrases or cuts words before it
   adds words. A fix adds words only for a missing definition,
   referent or rule. The reasoning role records a declined finding
   in the review record with its reason.
4. After the fixes, the reasoning role sends the round's stranger
   instance its findings table and the fixed passages. The instance
   answers, per accepted finding, whether the fix holds. The reasoning role fixes again,
   before the next round, a fix the instance says does not hold.
5. The reasoning role adds to the next round's stranger brief the
   declined findings of the earlier rounds with their reasons. The reasoning role adds to the next round's stranger brief a finding
   declined in part, with the declined part and its reason.
6. The reasoning role treats a restatement mismatch on one passage in
   any two rounds as a prose finding, whatever the strangers
   attributed it to.
7. At a readable verdict, the reasoning role fixes the round's
   findings in the IR and then in the prose. The readable round's
   stranger instance confirms each fix before delivery. The reasoning role marks in the review record each finding of the
   readable round as confirmed, or as unfixed when the instance did
   not confirm its fix.

The verdict is readable when the restatement matches the IR and the
stranger finds no contradiction and no undefined term. The reasoning role records in the review record, per round,
the prose word count, the IR claim count, the finding count and the
verdict. Growth of the prose across rounds is a measure in the review record,
not a bound. During rounds the prose status line reads `under review`
with the version and the round number. During rounds the IR's Status parenthesis holds the round number. At the start of each round, the reasoning role changes the prose
status line and the IR's Status parenthesis together.

## Stranger brief

The stranger reads only the prose, the IR, and at Rounds steps 4 and
7 its own findings table with the fixed passages. Each
finding carries a locus (the prose, the IR, or both) and a fix kind
(cut, rephrase, or add). After reading the IR, the stranger reports
each disagreement between its restatement and the IR as a finding.
The stranger reports findings against
SP-01 to SP-05, SP-08 to SP-11, SP-18, SP-25 and SP-26
of the [style specification's rule table](style-spec.md#rule-table).
The stranger brief's SP-05 reads as the methodology's
[P-004](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-004--identifiers-carry-names)
(identifiers carry names) does: a name or a link at first use. SP-18 is calibrated to a duty whose actor or trigger the
text does not state. SP-25, contradiction, is a finding when two
passages cannot both be followed. SP-26, excess words, is a finding
when a word, phrase or sentence can go without losing a claim, or a
claim is stated twice. The brief lists the forms that are not defects:

- a dated status line;
- an under-review status line with a version and round number;
- a table cell with semicolons;
- a parenthesis naming a rule or section;
- a sentence stating a count;
- a colon-introduced list with semicolons;
- a document's Reader, Type or Status line.

Before each round, the reasoning role adds to the stranger brief any
form the text under review needs. The stranger's report has four parts in order: Restatement,
Findings, Readability, Counts.

## When an IR is required at all

A report to RD-1 (the human owner, in conversation) or RD-3 (a
delegating agent) may be written as prose directly, with the prose
[lint](vocabulary.md#def-lint). The condition: the report introduces no term, records no decision, and states no
[register fact](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-register-fact). A term, a decision, or a
register fact requires the IR, because each is content a model would
hold (owner ruling, 2026-10-25). The reasoning role writes a document as an IR first.

## Rules

The first rule whose condition holds decides.
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
  conversation.
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

## Meta-review and the decisions on case 005


A text is a subject for [meta-review](vocabulary.md#def-meta-review)
when its count reaches the limit or its review record shows a
[meta-review signal](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#meta-review)
(owner decision, 2026-10-27). The first signal: in two or more rounds
of the count, the round's stranger instance rejected a fix at
confirmation or the claims check reported a missing or stale claim. The second signal: a
finding declined and carried in the stranger brief was raised again,
or a restatement mismatch recurred on one passage. The third signal:
the prose grew across the count by more than one tenth of its round-1
word count. The fourth signal: after round 3, a stranger found a
contradiction in a passage an earlier round's fix touched. At the end
of a count, the reasoning role checks the four signals against the
review record. The reasoning role writes `Meta-review: pending` when
the text is a subject and `Meta-review: not indicated` otherwise,
naming the signals checked. The script `scripts/signals.mjs` reads a review record and reports
the first and third signals from its per-round word counts,
confirmation results and claims-check results. The script
reports wording that may show the second or fourth signal, for the
reasoning role to confirm by reading. The owner may dispatch a
meta-review of any text, signal or none. The limit of ten stays as
the one count-based trigger. The trigger of three rounds predated the
measurements and fired on counts that converged without any step
failing. Every meta-review so far was foreshadowed by a signal in its
review record: growth and an abandoned IR, a drift the mechanical
check passed, confirmations rejecting fixes. When the owner dispatches a meta-review, the meta-review session
reads the review record and the text, and reports, as an
[evaluation case](vocabulary.md#def-evaluation-case), whether the
process needs a change. The meta-reviews so far are
[case 005](../eval/cases/005-meta-review-stranger-rounds-2026-10-26.md),
on methodology PR #51's rounds, and
[case 007](../eval/cases/007-meta-review-full-ir-rounds-2026-10-27.md),
on methodology PR #52's rounds, and
[case 008](../eval/cases/008-meta-review-branch-point-rounds-2026-10-27.md),
on branch point v1.4's rounds. The owner adopted case 008's five changes on 2026-10-27. Case 008
proposed no change to the D1 row's rule on joining a reason to its
rule by connective prose, and none was made.

The owner's decisions of 2026-10-27 on case 005's held changes.
Case 005's change 1, a verdict by a finding-rate threshold, is struck, because
the verdict rule reached zero contradictions without a threshold.
Case 005's change 3, stopping when the finding count is flat with a limit of
five, is struck, because the finding rate was flat from round 5 while
contradictions ran to round 9. Case 005's change 4, a bound on growth, is
replaced by the measure of the Rounds section, because fixing in the
IR first kept the prose from growing.
Case 005's change 2, SP-18 calibrated, is adopted in the narrow
form: a duty names its actor and its trigger. The split of the
methodology's IR specification into IR form and review process is
closed as not needed, because that specification reached readable at
2,808 words. Reviewing only the amended passages after round 1
stays not recommended. Fixing only new-passage findings stays not
recommended.

## Record

The [dispatcher](vocabulary.md#def-dispatcher) records, for every IR it routes, the inputs, the rule
that fired and the [disposition](vocabulary.md#def-disposition), in `eval/dispatch-log.md`. Chunk 2 of the
[pilot plan](plans/pipeline-pilot.md) created `eval/dispatch-log.md`. The log is
the data the thresholds are tuned against.

<!-- v1.4 map (IR: docs/records/branch-point-v1.4.ir.md): C37→¶Status C47→¶Status C38→¶Status C39→¶D2 C48→¶D1 C1→¶Rounds C2→¶Rounds-1 C36→¶Rounds-1 C3→¶Rounds-1 C41→¶Rounds-1 C4→¶Rounds-1 C5→¶Rounds-2 C6→¶Rounds-3 C7→¶Rounds-3 C35→¶Rounds-3 C8→¶Rounds-3 C9→¶Rounds-4 C50→¶Rounds-4 C10→¶Rounds-4 C11→¶Rounds-5 C12→¶Rounds-6 C13→¶Rounds-verdict C14→¶Rounds-verdict C15→¶Rounds-verdict C16→¶D1 C17→¶Rounds-2 C46→¶Brief C19→¶Brief C20→¶Brief C21→¶Brief C22→¶Brief C23→¶Brief C24→¶Brief C25→¶Brief C26→¶Brief C43→¶Brief C44→¶Brief C27→¶Brief C28→¶Meta-2 C29→¶Meta-2 C30→¶Meta-2 C51→¶Meta-2 C31→¶Meta-2 C32→¶Meta-2 C42→¶Meta-2 C33→¶Meta-1 C40→¶Meta-1 C49→¶D3 C34→¶Meta-1 -->

<!-- v1.5 map (IR: docs/records/branch-point-v1.5.ir.md): C1→¶Rounds-1 C2→¶Rounds-1 C14→¶Rounds-1 C4→¶Rounds-5 C3→¶Rounds-6 C8→¶Rounds-7 C9→¶Rounds-7 C10→¶Rounds-7 C5→¶Rounds-verdict C6→¶Rounds-verdict C16→¶Rounds-verdict C7→¶Brief-forms C12→¶Meta-1 C13→¶Meta-1 C17→¶Status C15→¶Status C11→¶Meta-1 C18→¶Meta-1 -->

<!-- render map: C1→¶Meta-1 C2→¶Meta-1 C3→¶Meta-1 C4→¶Meta-1 C5→¶Meta-1 C6→¶Meta-1 C7→¶Meta-1 C8→¶Meta-1 C9→¶Meta-1 C10→¶Meta-1 C13→¶Meta-1 C11→¶Meta-1 C12→¶Meta-1 C14→¶Status C15→¶Meta-1 C16→¶Meta-1 C17→¶Brief C18→¶Required (IR: docs/records/branch-point-v1.6.ir.md) -->
