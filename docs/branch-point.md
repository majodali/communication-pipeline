# Branch point

This document decides how much checking a text gets before it reaches its reader. The agents that route and review texts read the document, and the human owner reads it to set the numbers its rules use.

Status: under review (v1.11, round 9). Version 1.11 carries the adopted changes of [evaluation case](vocabulary.md#def-evaluation-case) 015, a ruleset review, that bear on the [branch point](vocabulary.md#def-branch-point), this document's rules. Version 1.10, the latest version the owner accepted, is active on main while version 1.11 is under review.
The thresholds, the numbers in the rules' conditions, are provisional until the [evaluation corpus](../eval/README.md) tunes them. The rules are the [Rendering conditions](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#rendering-conditions) of the methodology's [intermediate-representation specification](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md).

Type: Specification, the methodology's document type. The [dispatcher](vocabulary.md#def-dispatcher), the script that applies these rules to one [intermediate representation](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-intermediate-representation) (IR), implements against this document.

Reader: RD-4 (a fresh agent session) implementing or running these rules. The human owner, setting the thresholds, reads the branch point with no more context than RD-4.

## Purpose

The [branch point](vocabulary.md#def-branch-point) gives each [IR](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-intermediate-representation) a [disposition](vocabulary.md#def-disposition): which of the [lint](vocabulary.md#def-lint) (the project's deterministic checker), the [rendering](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-rendering) and the [stranger](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-stranger) [rounds](#rounds) run. The branch point is how the project applies [proportional verification](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-proportional-verification). The specification's section [Texts that require an IR](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#texts-that-require-an-ir) says which texts start as an IR.

## Inputs

The inputs come from the IR.

| Input | From |
|---|---|
| reader | the Reader header, an identifier of the methodology's [reader catalog](https://github.com/majodali/methodology/blob/main/docs/style.md#readers) |
| purpose | the Purpose header: `report` or `document` |
| claims | the count of `C` [elements](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#element-kinds) (claims) |
| proposed terms | the count of `T` elements, terms, with [status](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#provenance) `proposed`: terms that wait for the owner's ratification |
| dependent asks | the count of `A` elements, asks (requests to the reader), whose `Depends:` field names the claims or asks they rest on |
| longest claim | the word count of the longest `C` element |
| normative | the Normative header: `yes` when the prose is [normative text](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-normative-text) |
| owner flag | `review` if the owner asked for a review of this output. `ir-only` if the owner designated the document [IR-only](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-ir-only-document): delivered as its IR alone, with no prose |

## Dispositions

| [Disposition](vocabulary.md#def-disposition) | What runs |
|---|---|
| D0 [lint](vocabulary.md#def-lint) only | the schema checks, CK-01 (referent rule) to CK-10 (section order) of the methodology's [mechanical checks](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#mechanical-checks), and the lint's [prose checks](style-spec.md#rule-table). Under D0 the IR is delivered as it stands |
| D1 render | D0, then the [paraphraser](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-paraphraser) renders prose for the reader. The paraphraser, or the [reasoning role](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-reasoning-role) when it renders, joins a rule to a reason the IR holds as its own claim by [connective prose](vocabulary.md#def-connective-prose). Connective prose is words that join claims and assert nothing of their own |
| D2 render and review | D1, then the [stranger](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-stranger) rounds under the [Rounds](#rounds) section |
| D3 review, reasoning-role rendered | the reasoning role renders the prose itself. Then the stranger rounds run as in D2 |

The reasoning role runs the lints for every IR, whatever disposition follows.

## Rounds

A [round](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-round) is one fresh [stranger](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-stranger)'s reading of the text, the fixes that follow, and that stranger's check of the fixes step 6 names. The methodology specification's [Stranger rounds](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#stranger-rounds) section holds the rules every round follows: the verdict, the fix rules, [confirmation](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-confirmation), the limit and the signals. This section holds this project's steps, the scripts the [reasoning role](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-reasoning-role) runs and the lines it writes in the [review record](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-review-record).

At a [count](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-count)'s start, the reasoning role writes the [branch point](vocabulary.md#def-branch-point) version and commit into the review record. A change the owner adopts during a count applies from the next count.

1. Check the text. The reasoning role runs `npm run check` on the text under review. The check runs the [lint](vocabulary.md#def-lint), the [round-trip check](vocabulary.md#def-round-trip-check) and the [claims check](vocabulary.md#def-claims-check). The round-trip check finds each claim the [render map](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-render-map) omits. The claims check looks, for each claim changed since the check's base commit, for a prose sentence that carries the claim. Before round 1, the claims check compares the text with the version the owner last accepted. The reasoning role shortens each sentence over 25 words that the check lists, outside the forms the [Stranger brief](#stranger-brief) section permits. The reasoning role fixes each claim the check lists as unmapped, missing or stale. The reasoning role writes the `Checks:` line.
2. Brief the stranger. The reasoning role starts a fresh stranger instance from the agent file `.claude/agents/reviewer.md`, with the brief below. In the brief, the reasoning role names the commit to read and the human reader the text's Reader line names. This text's Reader line names the human owner as that human reader, in its second sentence. In the brief, the reasoning role names each finding the reasoning role declined so far, in whole or in part, with its reason. In the brief, the reasoning role lists each [passage](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-passage) [awaiting restatement](vocabulary.md#def-awaiting-restatement): a passage moved by an earlier fix that no later restatement has yet tested.
3. Read and report. The stranger reads the prose and writes its [restatement](vocabulary.md#def-restatement), its own account of the text in at most 200 words. A term the text introduces is one the text defines or links to a vocabulary entry. The stranger writes the restatement for the human reader the brief names, without any term the text introduces. Then the stranger restates each passage awaiting restatement in one sentence. Then the stranger reads the IR and writes its report. In this step, the stranger reads the brief, the prose and the IR, and no other file.
4. Record the round. The reasoning role writes the round's entry: the stranger model, the restatement as written, and each finding with its [decision](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-decision-on-a-finding). A decision on a finding is fixed, or declined with a reason. The reasoning role runs `node scripts/lint.mjs --restatement` on the entry. The reasoning role records each introduced term or repeated sentence that this restatement check lists as a finding under the [verdict](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#the-verdict)'s fourth condition. The fourth condition, the paraphrase test, asks for the restatement step 3 describes, in the stranger's own words. The reasoning role writes the `Mismatches:` line. Then the reasoning role runs `node scripts/signals.mjs` on the record and writes the verdict.
5. Fix. The reasoning role fixes each finding not declined under the specification's [fix rules](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#rendering-and-review), the IR first. A recurring claim is a claim named on the `Mismatches:` lines of two rounds of the text's counts. For each claim the signals script reports as recurring, the reasoning role makes the owed [structural fix](vocabulary.md#def-structural-fix): a move of the sentence, not a rewording. The reasoning role marks that structural fix `awaiting restatement` in the review record. The reasoning role runs `npm run check` again on the fixed text, with the commit the round read as its base. The reasoning role writes the `Checks:` line again. The reasoning role fixes what that run lists. The [fix commit](vocabulary.md#def-fix-commit) is the commit that holds step 5's fixes and every fix step 5's check calls for.
6. Confirm. The reasoning role sends the round's stranger instance the findings, the declines with their reasons, and the fix commit. The instance reads the prose and the IR at the fix commit, in full. The instance says whether each fix not awaiting restatement holds. The instance says whether it accepts each decline. The instance names each [new defect](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-new-defect) a fix introduced. The reasoning role writes the `Confirmation:` line. The reasoning role fixes again each fix the instance says does not hold. The reasoning role fixes each new defect the instance names. The reasoning role runs `npm run check` on those fixes, with the fix commit as its base. The reasoning role then opens the next round at the commit that holds those fixes.
7. Close the count. At a [readable verdict](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#the-verdict) or at the [limit](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-limit), the reasoning role applies the specification's rules for the final round. The reasoning role writes the `Meta-review:` line. The reasoning role lists for the owner what the specification sends to the owner.

### The review record's lines and the status lines

| Line | Form | Step |
|---|---|---|
| `Checks:` | `Checks: L sentences over 25 words; M of N claims mapped; C claims changed, X missing, Y stale.` | 1 and 5 |
| the restatement | a `Restatement:` line, then the restatement as written in a quoted block | 4 |
| `Mismatches:` | one entry per [restatement mismatch](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#the-verdict), or `none`. Each entry names the contradicted claim and, after "relied on", the claim of the quoted sentence, as `C41 (relied on C35)` | 4 |
| `Confirmation:` | `Confirmation: H of A fixes hold. Not held: <finding numbers, or none>. Declines accepted: K of D. New defects: N.` | 6 |
| per-round row | the round, the prose words, the IR claims, the findings and the verdict | 4 |
| `Meta-review:` | the form the specification's [Meta-review](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#meta-review) section gives | 7 |

The capital letters in each form stand for the counts the line reports.

During the rounds the prose status line reads `under review` with the version and the round number. During the rounds the IR's Status parenthesis holds the round number. The reasoning role changes the prose status line and the IR's Status parenthesis together at the start of each round.

## Stranger brief

The [stranger](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-stranger) brief is the instruction the [reasoning role](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-reasoning-role) gives each round's stranger instance. Each finding carries a [locus](vocabulary.md#def-locus) (the prose, the IR, or both) and a [fix kind](vocabulary.md#def-fix-kind) (cut, rephrase, or add). After reading the IR, the stranger reports each disagreement between its [restatement](vocabulary.md#def-restatement) and the IR as a finding. The stranger reports as a finding each passage it cannot restate without a term the text introduces. A calibration is a dated refinement of a style rule's scope, recorded in the rule's row. The stranger reports findings against these rows of the [style specification](vocabulary.md#def-style-specification), this project's table of writing rules, with the calibrations the rows carry:

- [SP-01](style-spec.md#rule-table) (one claim per sentence), SP-02 (sentence length), SP-03 (referents named), SP-04 (terms defined) and SP-05 (identifiers named);
- SP-08 (no rhetorical devices), SP-09 (no chained clauses), SP-10 (headers state their contents) and SP-11 (a section answers its header);
- SP-18 (a duty names its actor);
- SP-25 (contradiction) and SP-26 (excess words).

The 25-word limit of SP-02 binds the sentences of the prose. An IR claim's limit is 40 words, the specification's check [CK-02](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#mechanical-checks) (claim length).

For each [restatement mismatch](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#the-verdict), the brief asks the stranger to quote the prose sentence it relied on. The brief lists the forms that are not defects:

- a dated status line;
- an under-review status line with a version and round number;
- a table cell with semicolons;
- a parenthesis naming a rule or section;
- a sentence stating a count;
- a colon-introduced list with semicolons;
- a document's Reader, Type or Status line;
- a rule joined by "because", "so" or "therefore" to a reason the IR holds as its own claim.

Before each round, the reasoning role adds to the brief any form the text under review needs. Before each round, the reasoning role quotes each added form in the review record and names the finding or fix the form bears on. The stranger's report has five parts in order: Restatement, Listed passages, Findings, Readability, Counts.

## Rules

The rules table maps an IR's inputs to a [disposition](vocabulary.md#def-disposition). The first row of the table whose condition holds decides the disposition.

| Rule | Condition | Disposition |
|---|---|---|
| BP-00 | the owner designated the document [IR-only](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-ir-only-document) and the IR header does not carry `Normative: yes` | D0; the IR is the deliverable, its Status reads `delivered IR-only`, and no later row applies |
| BP-02a | purpose is `document` and the IR header carries `Normative: yes` | D3 |
| BP-02 | owner flag is `review` (the owner asked for a review) | D2 |
| BP-03 | purpose is `document` | D2 |
| BP-04 | reader is RD-4 (a fresh agent session) or RD-5 (an external reader) | D2 |
| BP-05a | proposed terms > 0 | D1, with an ask to ratify the proposed terms |
| BP-06 | reader is RD-2 (the human owner, returning) | D1 |
| BP-07 | reader is RD-1 (the human owner, in conversation) and (claims > 6 or dependent asks > 0 or longest claim > 30 words) | D1 |
| BP-08 | reader is RD-3 (a delegating agent) and (claims > 12 or dependent asks > 0) | D1 |
| BP-09 | reader is RD-1 or RD-3 | D0 |

A document the owner designates IR-only, with no `Normative: yes`, gets the lint alone. Rows BP-03 and BP-04 never apply to such a document. A short report is one under its reader's threshold: row BP-07's for RD-1 (the owner, in conversation), row BP-08's for RD-3 (a delegating agent).

## Why each rule

- BP-02, the owner's review request: the owner asked for a review of this output, so the [stranger](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-stranger) rounds run. BP-02a stands before BP-02, so an IR with purpose `document` and `Normative: yes` takes D3 whatever the owner flag.
- BP-03 and BP-04: someone not in the conversation reads documentation, so a document gets the lint, the rendering and the stranger rounds.
- BP-02a: a paraphrase of [normative text](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-normative-text) could change its force, so the [reasoning role](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-reasoning-role) renders the normative text in place of the paraphraser.
- BP-05a: a document with an unratified term already gets the stranger's check under BP-03, which fires before BP-05a. In a report, the owner's ratification of the proposed terms replaces the stranger's check. The reason: the stranger review on reports to RD-1 or RD-3 runs only on request (owner ruling, 2026-10-25, recorded in the [backlog](backlog.md)'s chunk 3 row).
- BP-06: the returning owner needs the state paragraph, the paragraph stating where the project stands, which only a rendering of prose writes.
- BP-07 and BP-08: an IR under the thresholds, with no dependent ask, reads well as it stands. Past the thresholds, the reader reads prose faster than a claims list.
- BP-09: the proportional-verification case. Under BP-09, a short report to a reader who shares the conversation costs one pass of the lint.

## Meta-review signals

At the end of a count the [reasoning role](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-reasoning-role) runs `node scripts/signals.mjs` on the review record. The specification's [Meta-review](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#meta-review) section defines the trigger, the [signals](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-meta-review-signal) and the `Meta-review:` line. The script reads the first signal, a fix not held in two or more rounds, from the `Confirmation:` lines. The script reads part of the second signal, one claim named by mismatches in two rounds, from the `Mismatches:` lines of every count. The reasoning role reads the rest of the second signal, a finding raised again after a decline, from the record. The reasoning role also reads the fourth signal from the record: a contradiction, in round 3 or later, in a passage a fix touched. The specification struck the third signal, a measure of the prose's growth per IR claim. The script stops with an error on a line it cannot read. The reasoning role corrects that line before it writes the `Meta-review:` line. The [branch point's history](records/branch-point-history.md), a record outside the reviewed text, holds the past [meta-reviews](vocabulary.md#def-meta-review) and the owner's decisions on them.

## Versions

| Version | Date | Content |
|---|---|---|
| v1.11 | 2026-11-02 | the [branch point](vocabulary.md#def-branch-point)'s share of [evaluation case](vocabulary.md#def-evaluation-case) 015's adopted changes, with an IR of the whole text beside the prose ([IR](branch-point.ir.md)); under review |
| v1.10 | 2026-10-30 | thirteen adopted changes of evaluation case [012](../eval/cases/012-meta-review-branch-point-v1.9-and-ir-spec-count-5-2026-10-30.md) and six terms; readable at round 9; accepted by the owner on 2026-11-01 |
| v1.9 | 2026-10-30 | nineteen adopted changes of evaluation cases [010](../eval/cases/010-meta-review-ir-spec-count-4-2026-10-30.md) and [011](../eval/cases/011-meta-review-vision-count-2-2026-10-30.md) and two terms; readable at round 8; accepted by the owner on 2026-10-30 |
| v1.8 | 2026-10-30 | the row BP-00 for IR-only documents; delivered IR-only |
| v1.7 | 2026-10-29 | sixteen adopted changes of evaluation case [009](../eval/cases/009-meta-review-vision-rounds-2026-10-29.md) and the term [structural fix](vocabulary.md#def-structural-fix); readable at round 3 |
| v1.6 | 2026-10-27 | the signal-based [meta-review](vocabulary.md#def-meta-review) trigger |
| v1.5 | 2026-10-27 | five adopted changes of evaluation case [008](../eval/cases/008-meta-review-branch-point-rounds-2026-10-27.md) |
| v1.4 | 2026-10-27 | the style rows SP-05, SP-18, SP-25 and SP-26; three terms; six adopted changes of evaluation case [007](../eval/cases/007-meta-review-full-ir-rounds-2026-10-27.md); the owner's decisions on [case 005](../eval/cases/005-meta-review-stranger-rounds-2026-10-26.md); accepted by the owner |

## The dispatch log

The [dispatcher](vocabulary.md#def-dispatcher) records, for every IR it routes, the inputs, the rule that fired and the [disposition](vocabulary.md#def-disposition), in `eval/dispatch-log.md`. Chunk 2 of the [pilot plan](plans/pipeline-pilot.md) created `eval/dispatch-log.md`. The log is the data the evaluation corpus tunes against.

<!-- render map: C1→¶Top C2→¶Top C3→¶Status C4→¶Status C6→¶Status C7→¶Status C8→¶Type C9→¶Type C10→¶Reader C11→¶Purpose C12→¶Purpose C13→¶Why C14→¶Why C15→¶Purpose C16→¶Inputs C17→¶Inputs C18→¶Inputs C19→¶Inputs C20→¶Inputs C21→¶Inputs C22→¶Inputs C23→¶Inputs C25→¶Dispositions C26→¶Dispositions C27→¶Dispositions C28→¶Dispositions C29→¶Dispositions C30→¶Dispositions-lints C31→¶Rounds C32→¶Rounds C33→¶Rounds C34→¶Rounds-count C35→¶Rounds-count C36→¶Step-1 C37→¶Step-1 C38→¶Step-1 C39→¶Step-1 C40→¶Step-1 C41→¶Step-1 C42→¶Step-1 C43→¶Step-1 C44→¶Step-2 C45→¶Step-2 C167→¶Step-2 C46→¶Step-2 C47→¶Step-2 C48→¶Step-3 C49→¶Step-3 C50→¶Step-3 C51→¶Step-3 C52→¶Step-3 C53→¶Step-4 C54→¶Step-4 C55→¶Step-4 C56→¶Step-4 C57→¶Step-4 C58→¶Step-5 C59→¶Step-5 C60→¶Step-5 C61→¶Step-5 C62→¶Step-5 C63→¶Step-6 C64→¶Step-6 C65→¶Step-6 C66→¶Step-6 C67→¶Step-6 C68→¶Step-6 C70→¶Step-7 C71→¶Step-7 C72→¶Step-7 C73→¶Lines C74→¶Lines C75→¶Lines C76→¶Lines C77→¶Lines C78→¶Lines C79→¶Lines-status C80→¶Lines-status C81→¶Lines-status C82→¶Brief C83→¶Brief C84→¶Brief C85→¶Brief C169→¶Brief C86→¶Brief C87→¶Brief C88→¶Brief C89→¶Brief-forms C90→¶Brief-forms C91→¶Brief-forms C92→¶Brief-forms C93→¶Brief-forms C94→¶Brief-forms C95→¶Brief-forms C96→¶Brief-forms C97→¶Brief-end C98→¶Brief-end C99→¶Brief-end C100→¶Rules C101→¶Rules C102→¶Rules C103→¶Rules C104→¶Rules C105→¶Rules C106→¶Rules C107→¶Rules C108→¶Rules C109→¶Rules C110→¶Rules C111→¶Rules C112→¶Why C113→¶Why C114→¶Why C115→¶Why C116→¶Why C117→¶Why C118→¶Why C119→¶Why C120→¶Why C121→¶Why C122→¶Why C123→¶Meta C124→¶Meta C125→¶Meta C126→¶Meta C127→¶Meta C128→¶Meta C129→¶Meta C130→¶Meta C131→¶Versions C132→¶Versions C133→¶Versions C134→¶Versions C135→¶Versions C136→¶Versions C137→¶Versions C138→¶Versions C139→¶Log C140→¶Log C141→¶Log C142→¶Reader C143→¶Inputs C144→¶Dispositions C145→¶Dispositions C146→¶Lines C147→¶Rules C148→¶Why C149→¶Meta C150→¶Brief-limits C151→¶Brief-limits C152→¶Step-4 C153→¶Step-5 C154→¶Step-6 C155→¶Meta C156→¶Rules-IR-only C157→¶Step-3 C158→¶Inputs C159→¶Rules-IR-only C168→¶Rules-IR-only C160→¶Step-6 C161→¶Step-6 C162→¶Step-4 C163→¶Step-5 C164→¶Step-6 C165→¶Step-5 C166→¶Lines-letters (IR: docs/branch-point.ir.md) -->
