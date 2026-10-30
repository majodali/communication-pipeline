# Branch point

Status: under review (v1.10, 2026-10-30, the adopted changes of [evaluation case](vocabulary.md#def-evaluation-case) 012, round 8). v1.9 is active on main. The [Versions](#versions) section lists the versions.
Thresholds are provisional until the [evaluation corpus](../eval/README.md) tunes them. The rules are the Rendering conditions of the methodology's
[intermediate-representation specification](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md)
from 2026-10-26.

Type: Specification (methodology vocabulary). The pipeline's
[dispatcher](vocabulary.md#def-dispatcher) implements against this specification.

Reader: RD-4 (a fresh agent session) implementing or running the
pipeline; the human owner setting thresholds.

## Purpose

The [branch point](vocabulary.md#def-branch-point) decides, for one [intermediate representation](vocabulary.md#def-intermediate-representation) (IR), which of the pipeline's model
stages run. The branch point protects [proportional verification](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-proportional-verification). Under proportional verification, a short report to
a reader who shares the conversation costs one [lint](vocabulary.md#def-lint) pass. A document for a [stranger](vocabulary.md#def-stranger) costs the full pipeline.

## The texts that require an IR

The [reasoning role](vocabulary.md#def-reasoning-role) writes a document as an IR first. A term, a decision and a [register fact](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-register-fact) are each content a model
would hold (owner ruling, 2026-10-25). A report to RD-1 (the human owner, in conversation) or RD-3 (a delegating agent) may be written as prose directly, with the prose [lint](vocabulary.md#def-lint). A prose report holds no term, decision or register fact.

## Inputs

The inputs come from the IR.

| Input | From |
|---|---|
| reader | the Reader header, a [catalog](readers.md) identifier |
| purpose | the Purpose header: `report` or `document` |
| claims | the count of `C` [elements](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#element-kinds) (claims) |
| proposed terms | the count of `T` elements (terms) with [status](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#provenance) `proposed` |
| dependent asks | the count of `A` elements (asks) with a `Depends:` field, the field naming the claims or asks the ask rests on |
| longest claim | the word count of the longest `C` element |
| owner flag | the owner: `review` if the owner asked for a review of this output |

## Dispositions

| [Disposition](vocabulary.md#def-disposition) | What runs |
|---|---|
| D0 [lint](vocabulary.md#def-lint) only | the schema checks, CK-01 to CK-10 of the methodology's
[mechanical checks](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#mechanical-checks), and the prose lints; the IR is delivered as it stands |
| D1 render | D0, then the [paraphraser](vocabulary.md#def-paraphraser) renders prose for the reader. The paraphraser, or the [reasoning role](vocabulary.md#def-reasoning-role) when it renders, joins a rule to a reason the IR holds as its own claim by connective prose |
| D2 render and review | D1, then [reviewer](vocabulary.md#def-reviewer) rounds under the Rounds section below |
| D3 review, reasoning-role rendered | the reasoning role renders the prose itself. Then the reviewer rounds run as in D2 |

The reasoning role runs the lints for every IR, whatever disposition follows.

## Rounds

The rounds of D2 and D3 follow the methodology specification's [Stranger rounds](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#stranger-rounds) rule. A [count](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-count) of [rounds](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-round) runs until a round returns [readable](#the-verdict-and-the-status-lines), or to the [limit](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-limit) of ten. At a count's start, the reasoning role records in the [review record](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-review-record) the [branch point](vocabulary.md#def-branch-point) version and commit the count runs under. A change the owner adopts during a count applies from the next count. This project's procedure for one round, in order:

1. Before round 1, the reasoning role resolves every [SP-02](style-spec.md#rule-table) lint warning, a sentence over 25 words, in the text under review, whatever its age. Before round 1, the reasoning role records in the review record the number of sentences over 25 words.
2. The round's stranger is a fresh instance. The stranger brief is
   the instruction the reasoning role gives a round's stranger
   instance. A restatement is the stranger's account, in at most 200 words of its own, of the text's
   problem, terms and decisions. A restatement mismatch is a disagreement between the stranger's restatement and the IR. A claim or a qualifier the restatement leaves out is an [omission](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-omission), not a restatement mismatch. A restatement that says a rule has no qualifier the IR holds has a mismatch. The stranger reads the prose, writes its restatement, and only then reads the IR. In step 2, the stranger reads no file other than its brief, the prose and the IR. A declined finding is one the reasoning role declines with a reason at step 3. At steps 4 and 7, the round's instance also reads the findings table, the fixed passages and the declined findings with their reasons. In the stranger brief, the reasoning role lists each passage [awaiting restatement](vocabulary.md#def-awaiting-restatement). After the restatement and before reading the IR, the stranger restates each listed passage in one sentence. The reasoning role checks each listed passage's [step-6 fix](vocabulary.md#def-step-6-fix) against that sentence. The reasoning role names each round's stranger model in the review record. The reasoning role writes the mismatch claims on one `Mismatches:` line per round, or `none`. Each entry on a `Mismatches:` line names the claim the restatement contradicts. After "relied on", the entry names the claim of the sentence the stranger quoted. The reasoning role names each claim in an entry by its [claim identifier](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#element-kinds) in the IR. An entry on a `Mismatches:` line reads, for example, `C41 (relied on C35)`. For each mismatch, the brief asks the stranger to quote the prose sentence it relied on. For each mismatch, the reasoning role quotes in the review record the prose sentence the stranger relied on.
3. The reasoning role fixes each finding it accepts in the IR and
   then in the prose. In a fix, the reasoning role rephrases or cuts words before it
   adds words. In a fix, the reasoning role adds words only for a missing definition or referent, a state header, or a rewording note. The reasoning role adds no rule in a fix beyond the changes the owner adopted for the count. When a finding needs a new rule, the reasoning role lists the finding for the owner with a proposed wording. Until the owner decides, the finding counts against the verdict like a mismatch, contradiction or undefined-term finding. When a fix rewords a decided claim, the reasoning role keeps the claim's source and notes the rewording as `reworded in count N, round M`. The owner ratifies the reworded claims as one list at the count's close. Present state is what is done now. Target state is what the text aims at. In a fix that separates present state from target state, the reasoning role moves the sentence under a header that names its state. In a fix, the reasoning role does not mark a single sentence with "Today". In a fix, the reasoning role keeps the connective prose that joins a rule to a reason the IR holds as its own claim. The reasoning role records a declined finding in the review record with its reason. The rules above govern every fix, including an edit outside a round to an IR whose Status is reviewed. In such an edit, the reasoning role cuts each claim the edit makes a duplicate. The reasoning role also amends each claim the edit makes stale.
4. A findings table lists the round's findings. After the fixes, the reasoning role sends the round's stranger
   instance its findings table, the fixed passages and the round's declined findings with their reasons. After each [fix pass](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-fix-pass), the reasoning role runs the [claims check](vocabulary.md#def-claims-check) against the previous round's prose. The script `scripts/claims-check.mjs` lists the changed claims and the best-matching sentence for each. The script reports a changed claim no sentence carries, as missing. The script reports a changed claim whose best-matching sentence did not change since the last round, as stale. The reasoning role records the claims check's result in the review record. The reasoning role fixes a claim reported missing or stale before the [confirmation](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-confirmation) read and before the next round opens. The fix commit is the commit that holds the round's fix pass. The reasoning role names the fix commit to the round's stranger instance. The instance reads the prose and the IR at the fix commit, in full, before answering. A step-6 fix is the [structural fix](vocabulary.md#def-structural-fix) made under step 6 for a mismatch that recurred. The round's stranger instance answers, per accepted finding other than a step-6 fix, whether the fix holds. When the instance says a fix does not hold, the reasoning role fixes again before the next round. At confirmation, the instance says whether it accepts each decline the reasoning role made. The instance also names each [new defect](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-new-defect) the fixes introduce. The reasoning role records the confirmation on one line, in this form:

   `Confirmation: H of A fixes hold. Not held: <finding numbers, or none>. Declines accepted: K of D. New defects: N.`

   A fix that holds in part is not held. When the instance withdraws a contradiction or undefined-term finding at confirmation, on a reason quoting the prose, the reasoning role marks the finding withdrawn. The next round opens after the reasoning role records the confirmation line and makes the fixes the confirmation calls for.
5. The reasoning role adds to the next round's stranger brief the
   declined findings of the earlier rounds with their reasons. In the next round's brief, the reasoning role also carries a finding declined in part, with the declined part and its reason.
6. The reasoning role treats a restatement mismatch on one passage in
   any two rounds of the text's counts as a prose finding.
   The reasoning role runs the signals script, `scripts/signals.mjs`, which reads the review record, after writing each round's `Mismatches:` line and before writing the verdict. The script's recurrence report is step 6's check. Before the next round, the reasoning role applies step 6 to each claim the script reports. A structural fix moves the sentence out of the structure that produces the mismatched reading: a list, a section or an adjacency. In a structural fix, the reasoning role may instead change the claim to the strangers' reading when that reading is true. A rewording alone is not a step-6 fix. The reasoning role lists a decided claim changed by a structural fix for the owner in the report that delivers the text to the owner. A fix awaiting restatement is a fix whose hold the next round's restatement has not yet tested. The reasoning role marks a step-6 fix `awaiting restatement` in the review record. The reasoning role states in the next round's entry whether that round's restatement matched on the step-6 passage.
7. Step 7 applies at a readable verdict and at the limit. At step 7, the reasoning role sends the round's stranger instance what step 4 sends. At a readable verdict, the round's stranger instance confirms each fix other than a step-6 fix. A step-6 fix made in that round's fix pass stays `awaiting restatement`. The reasoning role lists its passage in the next count's round 1 brief. At the limit, the final round's stranger instance confirms each fix other than a step-6 fix before the count closes. The reasoning role runs step 7's claims check as in step 4. At the limit, the reasoning role marks each finding of the final round confirmed, or unfixed when the instance did not confirm its fix. At the limit, a step-6 fix of the final round stays `awaiting restatement` and counts as unfixed. The reasoning role does not fix in the count a new defect the step-7 confirmation names. The reasoning role lists the defect for the owner. The reasoning role fixes the new defect in the next edit of the text.

<a id="the-verdict-and-the-status-lines"></a>
### The verdict, the status lines and the per-round record

The verdict is readable when the three conditions in the methodology specification's [verdict section](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#the-verdict) hold.

The reasoning role records in the review record, per round,
the prose word count, the IR claim count, the finding count and the
verdict. Growth of the prose across rounds is a measure in the review record,
not a bound. During rounds the prose status line reads `under review`
with the version and the round number. During rounds the IR's Status parenthesis holds the round number. At the start of each round, the reasoning role changes the prose
status line and the IR's Status parenthesis together.

## Stranger brief

The stranger brief sets what the stranger reads and reports. Each
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
passages cannot both be followed. SP-26, excess words, is a finding when a word, phrase or sentence can go without losing a claim, or a claim is stated twice. Three calibrations of 2026-10-29 ([case 009](../eval/cases/009-meta-review-vision-rounds-2026-10-29.md)) bind the brief. Under SP-01 a duty with its actor and its trigger is one claim. Under SP-18 a sentence that states a target, or names roadmap work and assigns it to no one, is not a duty. Under SP-26 words that name a referent SP-03 requires are not excess. The [style specification's rule table](style-spec.md#rule-table) carries the three calibrations in its SP-01, SP-18 and SP-26 rows. The brief lists the forms that are not defects:

- a dated status line;
- an under-review status line with a version and round number;
- a table cell with semicolons;
- a parenthesis naming a rule or section;
- a sentence stating a count;
- a colon-introduced list with semicolons;
- a document's Reader, Type or Status line;
- a rule joined by "because", "so" or "therefore" to a reason the IR holds as its own claim.

Before each round, the reasoning role adds to the stranger brief any
form the text under review needs. Before each round, the reasoning role quotes each added form in the review record and names the finding or fix it bears on. The stranger's report has five parts in order: Restatement, Listed passages,
Findings, Readability, Counts.

## Rules

The rules table maps an IR's inputs to a disposition. The first row of the table whose condition holds decides the disposition.

| Rule | Condition | [Disposition](vocabulary.md#def-disposition) |
|---|---|---|
| BP-00 | the owner designated the document [IR-only](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-ir-only-document) and the IR header does not carry `Normative: yes` | D0; the IR is the deliverable, its Status reads `delivered IR-only`, and no later disposition row applies |
| BP-02a | purpose is `document` and the IR header carries `Normative: yes` | D3 |
| BP-02 | owner flag is `review` (the owner asked for a review) | D2 |
| BP-03 | purpose is `document` | D2 |
| BP-04 | reader is RD-4 (fresh agent session) or RD-5 (external reader), from the [reader catalog](readers.md) | D2 |
| BP-05a | proposed terms > 0 | D1, with the ratification ask |
| BP-06 | reader is RD-2 (human owner, returning) | D1 |
| BP-07 | reader is RD-1 (human owner, in conversation) and (claims > 6 or dependent asks > 0 or longest claim > 30 words) | D1 |
| BP-08 | reader is RD-3 (delegating agent) and (claims > 12 or dependent asks > 0) | D1 |
| BP-09 | reader is RD-1 or RD-3 | D0 |

## Why each rule

- BP-02, the owner's review request: the owner asked for a review of this output, so the reviewer rounds run. BP-02a stands before it, so a normative document takes D3 whatever the owner flag.
- BP-03 and BP-04: documentation is read by someone who was not in the
  conversation.
- BP-02a: a paraphrase of normative text could change its force, so
  the [reasoning role](vocabulary.md#def-reasoning-role) renders the normative text and only the review runs.
- BP-05a: an unratified term in a document gets the reviewer's check under BP-03. In a report the owner's ratification ask replaces the reviewer's check. The reason: the [stranger](vocabulary.md#def-stranger) review on reports to RD-1 or RD-3 runs only on request (owner ruling, 2026-10-25).
- BP-06: the returning owner needs the state paragraph, the paragraph
  stating where the project stands, which only the
  [paraphraser](vocabulary.md#def-paraphraser) writes.
- BP-07 and BP-08: a short IR with no dependencies reads well as it
  stands. Past the thresholds, the owner reads prose faster than a
  claims list.
- BP-09: the proportional-verification case. The owner or the delegating agent reads the short IR as it stands.

## Meta-review: the trigger, the signals, the signals script, the line, the history and the case decisions



A text is a subject for [meta-review](vocabulary.md#def-meta-review)
when its count reaches the limit or its review record shows a
[meta-review signal](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#meta-review)
(owner decision, 2026-10-27). The methodology specification's [Meta-review](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#meta-review) section defines the signals. At the end
of a count, the reasoning role checks the signals against the
review record. A claims-check line is the review-record line that records a [claims check](vocabulary.md#def-claims-check)'s result. The signals script, `scripts/signals.mjs`, reports the first signal from the confirmation and claims-check lines. The reasoning role checks the second signal's declined findings raised again and the fourth signal by reading. The owner may dispatch a
meta-review of any text, signal or none. The limit of ten stays as
the one count-based trigger.

The reasoning role writes `Meta-review: pending` when
the text is a meta-review subject. A round with a [fix pass](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-fix-pass) and no claims-check line counts as an [unparsed line](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-unparsed-line). While a line is unparsed, the reasoning role writes `Meta-review: unparsed`, naming the line, in place of `pending` or `not indicated`. When the unparsed line parses, the reasoning role writes `pending` again if the text is a meta-review subject. When the text is no meta-review subject and no line is unparsed, the reasoning role writes `Meta-review: not indicated`. At the end of a count, the reasoning role names the signals it checked on the `Meta-review:` line. Under the methodology specification's [rule](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#meta-review), a `Meta-review: pending` or `Meta-review: unparsed` line in an accepted deliverable's record is a finding of the next [form audit](https://github.com/majodali/methodology/blob/main/docs/constitution.md#article-9--audits).

The script `scripts/signals.mjs` reads the confirmation lines in their fixed form. The script reads the `Mismatches:` lines of every count for signal 2. The script reports the second signal's recurring mismatch, a claim on the last count's `Mismatches:` lines named in two rounds of the text's counts. The script counts a recurrence on either claim of an entry. The script lists as information the claims on earlier counts' `Mismatches:` lines that the last count's lines do not name. The script reads the [per-round record](#the-verdict-and-the-status-lines), the confirmation lines and the claims-check lines from a record's last count only. The script reports a confirmation line it cannot parse as unparsed. The script reports a `Meta-review: not indicated` line that its own reading contradicts.

The trigger of three rounds predated the five counts recorded by 2026-10-27. The five counts: the rounds on methodology PR #51, the subject of [case 005](../eval/cases/005-meta-review-stranger-rounds-2026-10-26.md); the methodology's IR specification counts 1 and 2 ([review record](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.review.md)); branch point v1.4 ([review record](records/branch-point-v1.4.review.md)); branch point v1.5 ([review record](records/branch-point-v1.5.review.md)). The three-round trigger fired on two counts that converged without any step failing: branch point v1.5 and the IR specification's count 2. The owner dispatched no meta-review for those two counts. Every meta-review so far was foreshadowed by a signal in its review record: growth with an abandoned IR, a drift the check passed, rejected fixes. When the owner dispatches a meta-review, the meta-review session reads the review record and the text. The session reports, as an [evaluation case](vocabulary.md#def-evaluation-case), whether the process needs a change. [Case 007](../eval/cases/007-meta-review-full-ir-rounds-2026-10-27.md) reviewed methodology PR #52's rounds. [Case 008](../eval/cases/008-meta-review-branch-point-rounds-2026-10-27.md) reviewed branch point v1.4's rounds and [case 009](../eval/cases/009-meta-review-vision-rounds-2026-10-29.md) the methodology's vision document rounds. The owner adopted case 008's five changes on 2026-10-27. The owner adopted case 009's nineteen changes on 2026-10-29. Three of the nineteen confirm three rules as written: the readable verdict without a finding-rate threshold, the 200-word restatement limit, and the limit of ten. [Case 010](../eval/cases/010-meta-review-ir-spec-count-4-2026-10-30.md) reviewed count 4 of the methodology's intermediate-representation specification. [Case 011](../eval/cases/011-meta-review-vision-count-2-2026-10-30.md) reviewed count 2 of the methodology's vision document. The owner adopted case 010's thirteen recommended changes and case 011's nine on 2026-10-30. Seven of the twenty-two amend the methodology's intermediate-representation specification as its count 5. A process change is an adopted change to how the rounds or the meta-review run. Four of the seven are also among the nineteen process changes of v1.9. Case 010's change 15 confirms four rules as written. The four rules: the withdrawal at confirmation, the fourth signal, the final round's fixes at the limit, and the limit of ten. Case 011's change 4 confirms that the second signal counts [own mismatches](vocabulary.md#def-own-mismatch). Cases 010 and 011 each declined one change of its own, an SP-01 calibration, and the declines stand. Case 008
proposed no change to the D1 row's rule on joining a rule to a reason by connective prose. [Case 012](../eval/cases/012-meta-review-branch-point-v1.9-and-ir-spec-count-5-2026-10-30.md) reviewed branch point v1.9 and the methodology specification's count 5 in one task. The owner adopted case 012's fifteen changes on 2026-10-30. Thirteen of the fifteen are the process changes of v1.10: changes 1, 2 and 4 to 14. Change 3 keeps the 200-word restatement limit as written. Change 15 amends the [evaluation corpus](../eval/README.md)'s Meta-review records section. Eleven of the fifteen amend the methodology specification as its count 6: changes 1, 2, 4 to 9, 11, 13 and 14. The meta-reviews so far are cases 005 and 007 to 012.

### The owner's decisions of 2026-10-27 on case 005's held changes

Case 005's change 1, a verdict by a finding-rate threshold, is struck, because
the verdict rule reached zero contradictions without a threshold.
Case 005's change 3, a stop at a flat finding count, is struck because contradictions ran to round 9 while the rate was flat. Case 005's change 4 was replaced by the third signal on 2026-10-27, because words per IR claim measure prose drift from the IR. Change 11 of case 012 struck the third signal. Change 11 keeps the per-round word and claim counts as measures in the review record. The first, second and fourth signals keep their numbers.
Case 005's change 2, SP-18 calibrated, is adopted in the narrow
form: a duty names its actor and its trigger. The split of the methodology's IR specification into form and process is closed as not needed, because that specification reached readable at 2,808 words. Reviewing only the amended passages after round 1
stays not recommended. Fixing only new-passage findings stays not
recommended.

## Versions

| Version | Date | Content |
|---|---|---|
| v1.10 | 2026-10-30 | the thirteen process changes of evaluation case 012; under review |
| v1.9 | 2026-10-30 | the nineteen process changes of evaluation cases 010 and 011 and the terms [own mismatch](vocabulary.md#def-own-mismatch) and [re-fix](vocabulary.md#def-re-fix); readable at round 8; accepted by the owner on 2026-10-30 |
| v1.8 | 2026-10-30 | the row BP-00 for IR-only documents; delivered IR-only |
| v1.7 | 2026-10-29 | the sixteen process changes of evaluation case 009 and the term structural fix; readable at round 3 |
| v1.6 | 2026-10-27 | the signal-based meta-review trigger |
| v1.5 | 2026-10-27 | the five process changes of evaluation case 008 |
| v1.4 | 2026-10-27 | the style rules [SP-05, SP-18, SP-25 and SP-26](style-spec.md#rule-table); the terms restatement, locus and fix kind; the six process changes of evaluation case 007; the owner's decisions on [case 005](../eval/cases/005-meta-review-stranger-rounds-2026-10-26.md)'s held changes; accepted by the owner |

## The dispatch log

The [dispatcher](vocabulary.md#def-dispatcher) records, for every IR it routes, the inputs, the rule
that fired and the [disposition](vocabulary.md#def-disposition), in `eval/dispatch-log.md`. Chunk 2 of the
[pilot plan](plans/pipeline-pilot.md) created `eval/dispatch-log.md`. The log is
the data the thresholds are tuned against.

<!-- v1.4 map (IR: docs/records/branch-point-v1.4.ir.md): C37→¶Status C47→¶Status C38→¶Status C39→¶D2 C48→¶D1 C1→¶Rounds C2→¶Rounds-1 C36→¶Rounds-1 C3→¶Rounds-1 C41→¶Rounds-1 C4→¶Rounds-1 C5→¶Rounds-2 C6→¶Rounds-3 C7→¶Rounds-3 C35→¶Rounds-3 C8→¶Rounds-3 C9→¶Rounds-4 C50→¶Rounds-4 C10→¶Rounds-4 C11→¶Rounds-5 C12→¶Rounds-6 C13→¶Rounds-verdict C14→¶Rounds-verdict C15→¶Rounds-verdict C16→¶D1 C17→¶Rounds-2 C46→¶Brief C19→¶Brief C20→¶Brief C21→¶Brief C22→¶Brief C23→¶Brief C24→¶Brief C25→¶Brief C26→¶Brief C43→¶Brief C44→¶Brief C27→¶Brief C28→¶Meta-2 C29→¶Meta-2 C30→¶Meta-2 C51→¶Meta-2 C31→¶Meta-2 C32→¶Meta-2 C42→¶Meta-2 C33→¶Meta-1 C40→¶Meta-1 C49→¶D3 C34→¶Meta-1 -->

<!-- v1.5 map (IR: docs/records/branch-point-v1.5.ir.md): C1→¶Rounds-1 C2→¶Rounds-1 C14→¶Rounds-1 C4→¶Rounds-5 C3→¶Rounds-6 C8→¶Rounds-7 C9→¶Rounds-7 C10→¶Rounds-7 C5→¶Rounds-verdict C6→¶Rounds-verdict C16→¶Rounds-verdict C7→¶Brief-forms C12→¶Meta-1 C13→¶Meta-1 C17→¶Status C15→¶Status C11→¶Meta-1 C18→¶Meta-1 -->

<!-- v1.6 map (IR: docs/records/branch-point-v1.6.ir.md): C1→¶Meta-1 C2→¶Meta-1 C3→¶Meta-1 C4→¶Meta-1 C5→¶Meta-1 C6→¶Meta-1 C7→¶Meta-1 C8→¶Meta-1 C9→¶Meta-1 C10→¶Meta-1 C13→¶Meta-1 C11→¶Meta-1 C12→¶Meta-1 C14→¶Status C15→¶Meta-1 C16→¶Meta-1 C17→¶Brief C18→¶Required C19→¶Required C21→¶Required C20→¶Why -->

<!-- v1.7 map (IR: docs/records/branch-point-v1.7.ir.md): C1→¶Status C2→¶Status C3→¶Rounds-1 C4→¶Rounds-1 C5→¶Rounds-2 C6→¶Rounds-2 C42→¶Rounds-2 C7→¶Rounds-2 C8→¶Rounds-3 C9→¶Rounds-3 C10→¶Rounds-3 C11→¶Rounds-3 C12→¶Rounds-4 C13→¶Rounds-4 C14→¶Rounds-4 C43→¶Rounds-4 C15→¶Rounds-4 C16→¶Rounds-6 C17→¶Rounds-6 C44→¶Rounds-6 C18→¶Rounds-6 C19→¶Rounds-6 C20→¶Rounds-6 C21→¶Rounds-6 C22→¶Rounds-6 C23→¶Rounds-7 C24→¶Rounds-7 C48→¶Rounds-7 C25→¶Rounds-7 C26→¶Brief C27→¶Brief C28→¶Brief C29→¶Brief-forms C41→¶Brief C30→¶Meta-1 C31→¶Meta-1 C32→¶Meta-1 C33→¶Meta-1 C34→¶Meta-1 C47→¶Meta-1 C35→¶Meta-1 C36→¶Meta-1 C37→¶Meta-1 C45→¶Meta-1 C46→¶Meta-2 C38→¶Meta-1 C39→¶Meta-1 C40→¶Meta-1 -->

<!-- render map: C1→¶Status C2→¶Status C3→¶Status C4→¶Rounds-1 C5→¶Rounds-1 C6→¶Rounds-2 C7→¶Rounds-2 C8→¶Rounds-2 C9→¶Rounds-2 C10→¶Rounds-2 C11→¶Rounds-2 C12→¶Rounds-2 C13→¶Rounds-2 C73→¶Rounds-2 C14→¶Rounds-2 C15→¶Rounds-2 C16→¶Rounds-2 C74→¶Rounds-3 C71→¶Rounds-3 C17→¶Rounds-3 C18→¶Rounds-3 C19→¶Rounds-3 C20→¶Rounds-3 C82→¶Rounds-3 C83→¶Rounds-3 C75→¶Rounds-3 C76→¶Rounds-3 C77→¶Rounds-3 C21→¶Rounds-3 C67→¶Rounds-4 C22→¶Rounds-4 C23→¶Rounds-4 C24→¶Rounds-4 C25→¶Rounds-4 C26→¶Rounds-4 C27→¶Rounds-4 C28→¶Rounds-4 C52→¶Rounds-4 C29→¶Rounds-4 C30→¶Rounds-4 C31→¶Rounds-4 C32→¶Rounds-6 C33→¶Rounds-6 C66→¶Rounds-6 C64→¶Rounds-6 C55→¶Rounds-7 C58→¶Rounds-7 C63→¶Rounds-7 C68→¶Rounds-7 C59→¶Rounds-7 C60→¶Rounds-7 C34→¶Rounds-7 C35→¶Rounds-7 C51→¶Rounds-7 C53→¶Rounds-2 C65→¶Rounds-2 C79→¶Rounds-2 C57→¶Brief C54→¶Meta-history C69→¶Why C72→¶Why C88→¶Why C70→¶Meta-script C84→¶Meta-script C36→¶Rounds-verdict C37→¶Meta-1 C38→¶Meta-1 C39→¶Meta-1 C61→¶Meta-1 C40→¶Meta-1 C41→¶Meta-line C80→¶Meta-line C89→¶Meta-line C43→¶Meta-1 C44→¶Meta-history C45→¶Meta-history C46→¶Meta-history C62→¶Meta-history C47→¶Meta-history C48→¶Meta-history C49→¶Meta-history C90→¶Meta-decisions C91→¶Meta-decisions C86→¶Meta-decisions C92→¶Meta-decisions C81→¶Meta-decisions C85→¶Meta-decisions C87→¶Meta-decisions C50→¶Meta-history (IR: docs/records/branch-point-v1.10.ir.md) -->

<!-- v1.9 map: C1→¶Status C72→¶Purpose C73→¶Purpose C2→¶Rounds C3→¶Rounds C4→¶Rounds-1 C5→¶Rounds-1 C48→¶Rounds-2 C6→¶Rounds-2 C7→¶Rounds-2 C8→¶Rounds-2 C102→¶Rounds-2 C60→¶Rounds-2 C9→¶Rounds-2 C10→¶Rounds-2 C11→¶Rounds-3 C12→¶Rounds-3 C49→¶Rounds-3 C13→¶Rounds-4 C14→¶Rounds-4 C85→¶Rounds-4 C88→¶Rounds-4 C95→¶Rounds-4 C99→¶Rounds-4 C89→¶Rounds-5 C74→¶Rounds-4 C59→¶Rounds-4 C61→¶Rounds-4 C15→¶Rounds-4 C16→¶Rounds-4 C50→¶Rounds-4 C17→¶Rounds-6 C18→¶Rounds-6 C19→¶Rounds-6 C20→¶Rounds-6 C62→¶Rounds-6 C21→¶Rounds-7 C91→¶Rounds-7 C92→¶Rounds-7 C103→¶Rounds-7 C93→¶Rounds-7 C94→¶Rounds-7 C22→¶Rounds-verdict C23→¶Rounds-verdict C53→¶Rounds-verdict C24→¶Rounds-verdict C63→¶Rounds-verdict C25→¶Rounds-verdict C26→¶Rounds-verdict C90→¶Rounds-verdict C75→¶Rounds-verdict C76→¶Rounds-verdict C83→¶Rounds-verdict C77→¶Rounds-verdict C84→¶Rounds-verdict C27→¶Brief C101→¶Brief C54→¶Dispositions C55→¶Rules C87→¶Rules C58→¶Rules C68→¶Rules C69→¶Why C28→¶Meta-signals C98→¶Meta-signals C100→¶Meta-signals C29→¶Meta-signals C30→¶Meta-script C31→¶Meta-script C32→¶Meta-script C33→¶Meta-script C34→¶Meta-script C35→¶Meta-script C36→¶Meta-script C37→¶Meta-script C67→¶Meta-line C86→¶Meta-line C78→¶Meta-line C97→¶Meta-line C96→¶Meta-line C70→¶Meta-line C81→¶Meta-line C82→¶Meta-line C79→¶Meta-line C38→¶Meta-script C57→¶Meta-history C56→¶Meta-history C66→¶Meta-history C71→¶Meta-history C39→¶Meta-history C40→¶Meta-history C41→¶Meta-history C42→¶Meta-history C43→¶Status C44→¶Meta-history C80→¶Meta-history C45→¶Meta-history C65→¶Meta-history C46→¶Meta-history C47→¶Meta-history (IR: docs/records/branch-point-v1.9.ir.md) -->
