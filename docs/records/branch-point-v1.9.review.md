# Review record: branch point v1.9

Reader of the reviewed text: RD-4 (a fresh agent session). Reviewer: a stranger, a fresh instance per round, model named per round, under the v1.9 brief the text itself defines: the prose read first, a restatement, then the IR; SP-01 to SP-05, SP-08 to SP-11, SP-18, SP-25, SP-26 with the three calibrations of case 009; locus and fix kind per finding; verdict by the three conditions, an own mismatch not counting when the stranger quotes a prose sentence that carries the IR's claim, and a step-6 mismatch always counting. Disposition D3 (a specification, Normative: yes). Text reviewed: `docs/branch-point.md` whole; the IR `docs/records/branch-point-v1.9.ir.md` covers the passages v1.9 changed (the status line, the Rounds introduction, Rounds steps 1, 2, 3, 4, 6 and 7, the verdict paragraph, the Stranger brief's last paragraph, the Meta-review paragraph). The v1.9 procedure applies to these rounds. Branch point version and commit the count runs under: v1.9, the commit that opens round 1.

## Curve

| Round | Prose words | IR claims | Findings | Per 1,000 words | Verdict |
|---|---|---|---|---|---|
| 1 | 3,393 | 47 | 21 | 6.2 | not readable (restatement matched, no mismatch; contradictions 2; undefined terms 4) |
| 2 | 3,499 | 59 | 15 | 4.3 | not readable (one own mismatch, quoted, not counting; contradictions 0; undefined terms 3) |
| 3 | 3,577 | 65 | 10 | 2.8 | not readable (one own mismatch, not counting under the reading of 2026-10-30; contradiction 1; undefined term 1) |
| 4 | 3,610 | 66 | 11 | 3.0 | not readable (restatement matched, no mismatch; contradictions 3; undefined terms 0) |
| 5 | 3,656 | 70 | 11 | 3.0 | not readable (one own mismatch, a step-6 passage that counts under the override; contradictions 0; undefined terms 0) |
| 6 | 3,785 | 79 | 9 | 2.4 | not readable (one own mismatch on a step-6 passage, counting under the override; contradictions 0; undefined terms 2) |

## Round 1, 2026-10-30

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier. Prose 3,393 words (whitespace-separated words, comments stripped, by `wordCount` in `scripts/ir.mjs`); IR 47 claims; 21 findings, 6.2 per thousand words. Restatement: matched the IR, no mismatch. Contradictions 2 (F16, F18), undefined terms 4 (F4, F6, F7, F19); verdict: not readable for RD-4. Accepted 19, declined 2.

Mismatches: none

| # | Finding (shortened) | Kind | Disposition |
|---|---|---|---|
| F1 | the v1.9 history in the Status line and the Versions sentence | SP-26 | declined: the Status line is an exempt form, and the Versions sentence is the history every version carries |
| F2 | "delivered IR-only under that same option" names nothing | SP-03 | rephrase the Status line: "under row BP-00"; no claim changed |
| F3 | "Thresholds are provisional until the evaluation corpus tunes them" names no actor | SP-18 | declined: under the SP-18 calibration, a sentence that names future work and assigns it to no one is not a duty |
| F4 | "restatement mismatch" used in step 2 before a definition | SP-04 | add C48, step 2: "A restatement mismatch is a disagreement between the stranger's restatement and the IR." |
| F5 | step 2's "relied on" sentence at 29 words with its example | SP-02 | rephrase: the example in a sentence of its own |
| F6 | "inferred" and "relation" in step 3 unlinked | SP-04 | add the links to the methodology specification's Provenance and Element kinds |
| F7 | "The fix rules" names no rules | SP-04 | rephrase C11: "The rules of this step" |
| F8 | the reviewed-IR edit sentence holds two claims | SP-01 | split C12; C49 |
| F9 | "The record marks the second fix" has no actor and no trigger | SP-18 | rephrase C15: "When the instance says a fix does not hold, the reasoning role marks ..."; C15 inferred by R7 |
| F10 | "The next round's entry states" has no actor | SP-18 | rephrase C16: "In the next round's entry, the reasoning role states ..."; C16 inferred by R8 |
| F11 | "is marked withdrawn" has no actor | SP-18 | rephrase v1.7's C14 as C50: "the reasoning role marks the finding withdrawn"; C50 inferred by R9 |
| F12 | step 6's first sentence at 28 words | SP-02 | split C17; C51 "A step-6 finding stands whatever the strangers attributed the mismatch to." |
| F13 | the script run stated twice in step 6 | SP-26 | cut: one run, after the `Mismatches:` line; C20 "Before the next round, the reasoning role applies step 6 to each claim the script reports."; C20 inferred by R10 |
| F14 | "which step 4's answer excludes" | SP-03 | rephrase v1.7's C20 as C52: "as step 4 states" |
| F15 | step 7 restates step 4's claims-check sentence | SP-26 | cut C21: "Step 7's claims check runs as in step 4." |
| F16 | the first condition counts every mismatch; the next sentence exempts a quoted own mismatch | SP-25 | rephrase C23, add C53, rephrase C25 and C26: the first condition with its one exception and one override, as one rule |
| F17 | "The texts that require an IR" opens with the exception | SP-11 | reorder: the requirement first; no claim changed |
| F18 | "The first rule whose condition holds decides" against BP-01 "always" | SP-25 | add C54, C55: rule BP-01 applies to every IR; among the rules after BP-01, the first whose condition holds decides the disposition; C55 inferred by R11 |
| F19 | "the curve" undefined | SP-04 | rephrase C34: "the per-round table" |
| F20 | "the five recorded counts" names no counts | SP-03 | add C57, C56: the counts on methodology PR #51, the IR specification's counts 1 and 2, branch point v1.4 and v1.5; C56 inferred by R12 from the release register's round counts |
| F21 | header "Record" for the dispatch log | SP-08 | rephrase: "The dispatch log"; no link pointed at the old anchor |

Signals script after the `Mismatches:` line (step 6, case 010 change 2): no recurring mismatch; no line unparsed.

Claims after fixes: 57. Prose after fixes: 3,490 words. Claims check after the fixes (base: round 1 prose): 21 changed claims, 0 missing, 0 stale.

Confirmation: 19 of 19 fixes hold. Not held: none. Declines accepted: 1 of 2. New defects: 3.

F3's decline was accepted. F1's decline was not accepted by the instance; the decline stands on its reason (the Status line is an exempt form, and the Versions sentence is the history every version carries). F1 and F3 go into round 2's brief with their reasons.

Re-fixed before round 2, the three new defects:

| # | New defect (shortened) | Kind | Re-fix |
|---|---|---|---|
| N1 | "Rule BP-01 (the lints run) applies to every IR" against BP-00's "no later row applies" | SP-25 | BP-00 row: "D0, so the lints still run; …, and no later disposition row applies" (C58, inferred by R13); C55: "Among the rows other than BP-01, the first whose condition holds decides the disposition." |
| N2 | the five counts named with no case or record | SP-05 | C56: methodology PR #51 with a link to case 005; the IR specification's counts 1 and 2 and branch point v1.4 and v1.5 with links to their review records; C56 stays inferred by R12 |
| N3 | step 4 states the not-held trigger twice | SP-26 | C59 and C15: "When the instance says a fix does not hold, the reasoning role fixes again before the next round. The reasoning role marks the second fix `awaiting restatement` in the review record." |

Claims after the re-fixes: 59. Claims check against the round 1 base after the re-fixes: 23 changed claims, 0 missing, 0 stale.

Decided claims the fixes changed, for the owner: C15, C16 and C50 (v1.7's C14) gain the reasoning role as actor and become inferred; C20 folds case 011 change 5's run into case 010 change 2's and becomes inferred; C23, C25 and C26, with the new C53, join case 010 change 1's and case 011 change 1's texts into one rule; C55 states that the first-match rule applies to the rows other than BP-01 and is inferred; C58 restates v1.8's row BP-00 (the lints still run under D0), inferred; C59 restates v1.7's re-fix sentence with its trigger first.

## Round 2, 2026-10-30

Branch point version and commit the round runs under: v1.9 at this round's opening commit. Prose 3,499 words; IR 59 claims.

Claims check before the round: 23 changed claims, 0 missing, 0 stale (base: round 1 prose).

Declined findings carried in the brief: F1 (SP-26, the v1.9 history in the Status line and the Versions sentence; the Status line is an exempt form, and the Versions sentence is the history every version carries; the round 1 instance did not accept the decline) and F3 (SP-18, the thresholds sentence; under the SP-18 calibration a sentence that names future work and assigns it to no one is not a duty).
Signals script before the round: no signal fired; no line unparsed.

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier. Prose 3,499 words by `wordCount`; IR 59 claims; 15 findings, 4.3 per thousand words. Restatement: one mismatch, attributed by the stranger to its own restatement, with the quoted sentence "Among the rows other than BP-01, the first whose condition holds decides the disposition.", which carries C55. Contradictions 0, undefined terms 3 (findings 2, 7, 8); verdict: not readable for RD-4. Accepted 12, declined 2.

Mismatches: C55 (own; relied on C55)


Signals script after the `Mismatches:` line: no recurring mismatch; C55 stood on no earlier line; no line unparsed. C55 is not a step-6 finding and does not count, under the exception.

Awaiting restatement from round 1: none; round 1 made no step-6 fix and no fix was re-fixed.

| # | Finding (shortened) | Kind | Disposition |
|---|---|---|---|
| 1 | own mismatch on C55 | restatement | no prose defect, under the exception |
| 2 | the Inputs table's `C`, `T` and `A` elements and the `Depends:` field undefined | SP-04 | rephrase: links to the IR specification's Element kinds and Provenance; each element kind named; the `Depends:` field glossed |
| 3 | "The review record names the branch point version and commit" names no actor | SP-18 | rephrase C2: "At a count's start, the reasoning role records in the review record …"; C2 inferred by R14 |
| 4 | the example entry's claim numbers unnamed | SP-05 | add C60: "Entries name claims by their claim identifiers in the IR.", linked; inferred by R15 |
| 5 | "A changed claim reported missing or stale is fixed before the confirmation read." names no actor | SP-18 | rephrase C14: "The reasoning role fixes …"; C14 inferred by R16 |
| 6 | "the second fix" | SP-03 | rephrase C15: "the re-fix", linked to the vocabulary row |
| 7 | `awaiting restatement` undefined | SP-04 | add C61 at first use: "A fix awaiting restatement is a fix whose hold the next round's restatement has not yet tested."; inferred by R17 |
| 8 | "the delivering report" | SP-04 | rephrase v1.7's C19 as C62: "the report that delivers the text to the owner" |
| 9 | step 7's "each fix" does not exclude a step-6 fix | SP-03 | declined: at a readable verdict no step-6 fix exists, because the override makes a step-6 mismatch count against the verdict; "each fix" is exact, and a clause for a case that cannot arise adds words |
| 10 | "The reasoning role marks each finding of the final round confirmed or unfixed." repeats | SP-26 | declined: the two sentences before it state the confirmation and the step-6 case, not the marking; the marking is a distinct recorded duty (case 008 change 5) |
| 11 | "The second and third conditions: …" holds two claims | SP-01 | split C24; C63 the third condition |
| 12 | the Stranger brief opens with its inputs | SP-10 | add a first sentence: "The stranger brief sets what the stranger reads and reports.", connective prose |
| 13 | case 010 change 15's sentence at 28 words | SP-02 | split C45; C65 the list of four rules |
| 14 | "The trigger fired on counts …" | SP-03 | rephrase v1.6's sentence as C66: "The three-round trigger fired …" |
| 15 | the Meta-review heading names the trigger only | SP-08 | rephrase: "Meta-review: the signals, the signals script and the case decisions"; no link pointed at the old anchor |

Claims after fixes: 65. Prose after fixes: 3,575 words. Claims check after the fixes (base: round 2 prose): 11 changed claims, 0 missing, 0 stale. Round trip: 65 of 65.

Confirmation: 14 of 14 fixes hold. Not held: none. Declines accepted: 2 of 2. New defects: 3.

Re-fixed before round 3:

| # | New defect (shortened) | Kind | Re-fix |
|---|---|---|---|
| N1 | the Meta-review heading dropped the trigger the section opens with | SP-08 | heading: "Meta-review: the trigger, the signals, the signals script and the case decisions" |
| N2 | C16 says "the second fix's claim" while the prose says "the fixed claim" | IR | C16 and the prose: "whether that round names the re-fixed claim on its `Mismatches:` line or in a finding" |
| N3 | the IR's Relations list R14 to R17 before R12 and R13 | IR | reordered R12 to R17; no content changed |

Decided claims the fixes changed, for the owner: C2 and C14 gain the reasoning role as actor and become inferred (bases case 010 changes 10 and 6); C24 and C45 split (C63, C65); v1.7's C19 and v1.6's three-round-trigger sentence rephrased (C62, C66).

Declined findings for round 3's brief: F1 and F3 of round 1, 9 and 10 of round 2, each with its reason.

## Round 3, 2026-10-30

Branch point version and commit the round runs under: v1.9 at this round's opening commit. Prose 3,577 words; IR 65 claims.

Claims check before the round: 12 changed claims, 0 missing, 0 stale (base: round 2 prose).

Awaiting restatement: none; rounds 1 and 2 made no step-6 fix, and no fix was re-fixed.

Declined findings carried in the brief: round 1's F1 (the instance did not accept the decline) and F3; round 2's 9 and 10; each with its reason.

Signals script before the round: no signal fired; no line unparsed.

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier. Prose 3,577 words by `wordCount`; IR 65 claims; 10 findings, 2.8 per thousand words. Restatement: one mismatch, attributed by the stranger to its own restatement, quoting "The first condition: the stranger's restatement of the problem, terms and decisions has no mismatch with the IR." That sentence carries C23, not C25. The mismatch is recorded. Under the reading of the exception the Orchestrator adopted on 2026-10-30 (a quoted sentence that carries an IR claim faithfully, whichever claim), it does not count; the round's verdict, not readable, is unchanged. Contradiction 1 (finding 10), undefined term 1; verdict: not readable for RD-4.

Mismatches: C25 (own; relied on C23)


Signals script after the `Mismatches:` line: no recurring mismatch; C25 and C23 stood on no earlier line; no line unparsed. Not a step-6 case on this text. The methodology specification's count 5 had an own mismatch on the same rule (C223) in its round 1, so the passage is one to watch in both texts.

Awaiting restatement: none.

| # | Finding (shortened) | Kind | Disposition |
|---|---|---|---|
| 1 | own mismatch on C25: the reader of the first-condition sentence drops the exception that follows | restatement | rephrase C23: "The first condition: the restatement of the problem, terms and decisions has no mismatch with the IR that counts under the exception and override below." |
| 2 | "evaluation corpus" undefined in the opening block | SP-04 | add the link to `eval/README.md` |
| 3 | Inputs opens with the exception "All inputs but the owner flag come from the IR." | SP-11 | rephrase: "The inputs come from the IR."; the owner-flag row: "the owner: `review` if …" |
| 4 | "reasoning role" first used in row D1 without a link | SP-04 | add the link at D1; the D3 row's link removed |
| 5 | "The rules of this step" with unclear scope | SP-03 | rephrase C11: "The rules above on how a fix is made bind …" |
| 6 | the reviewed-IR edit sentences name no actor | SP-18 | rephrase C12 and C49: "In such an edit, the reasoning role cuts …", "… amends …"; both inferred (R18, R19) |
| 7 | the verdict and status-line rules under a header naming only rounds | SP-08 | add the sub-header "The verdict and the status lines"; no link pointed at an anchor that moved |
| 8 | Rules opens with BP-01 before the first-match rule | SP-11 | reorder C55 and C54: "Among the rows other than rule BP-01 (the lints run), the first whose condition holds decides the disposition. BP-01 applies to every IR." |
| 9 | row BP-02 carries no name | SP-05 | rephrase the row: "owner flag is `review` (the owner asked for a review)" |
| 10 | "writes `Meta-review: not indicated` otherwise" against "writes no `Meta-review: not indicated` while a line is unparsed" | SP-25 | add C67: "While a line is unparsed, the reasoning role writes `Meta-review: unparsed`, naming the line."; inferred by R20; "Otherwise the reasoning role writes `Meta-review: not indicated`" follows it |

Claims after fixes: 66. Prose after fixes: 3,610 words. Claims check after the fixes (base: round 3 prose): 7 changed claims, 0 missing, 0 stale. Round trip: 66 of 66.

Confirmation: 9 of 10 fixes hold. Not held: 9. Declines accepted: 0 of 0. New defects: 3.

Finding 9 did not hold: the gloss named the condition, not rule BP-02. Finding 9 and the three new defects are fixed in round 4's fix pass: N1 (SP-25, which value the one `Meta-review:` line takes for a subject text with an unparsed line), N2 (SP-03, "The rules above on how a fix is made" read as limiting the fix rules to outside-round edits) and N3 (SP-26, the repeated lead-in "In such an edit", accepted as a varied lead-in, not a merge, because round 1's finding 8 split the two duties under SP-01).

Decided claims the fixes changed, for the owner: C23 points at its exception and override (case 010 change 1's text, reworded); C11 names the rules it binds (reworded); C12 and C49 gain the reasoning role as actor and become inferred (basis case 011 change 9); C67 is a new rule the rounds added: the `Meta-review: unparsed` line (basis case 010 change 7 and case 011 change 7).

Declined findings for round 4's brief: round 1's F1 and F3; round 2's 9 and 10; each with its reason.

## Round 4, 2026-10-30

Branch point version and commit the round runs under: v1.9 at this round's opening commit. Prose 3,610 words; IR 66 claims. Round 3's confirmation was not yet back when round 4 opened; its line is recorded in round 3's entry when it arrives.

Claims check before the round: 7 changed claims, 0 missing, 0 stale (base: round 3 prose).

Awaiting restatement: none.

Declined findings carried in the brief: round 1's F1 (the instance did not accept the decline) and F3; round 2's 9 and 10; each with its reason.

Signals script before the round: no signal fired; no line unparsed. Signal 4 by reading: round 3's contradiction (finding 10) sat on two sentences no earlier round's fix touched; not fired.

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier. Prose 3,610 words by `wordCount`; IR 66 claims; 11 findings, 3.0 per thousand words. Restatement: matched the IR, no mismatch. Contradictions 3 (findings 8, 9, 10), undefined terms 0; verdict: not readable for RD-4.

Mismatches: none


Signals script after the `Mismatches:` line: no recurring mismatch; no line unparsed. Signal 4, by reading: fired. Round 4's contradiction 9 (pending against unparsed) sits on the `Meta-review: unparsed` sentence, which round 3's fix of finding 10 wrote. Contradictions 8 (row BP-02 against BP-02a) and 10 (the counts with no meta-review) sit on passages round 3's fix of finding 9 and round 1's fix of F20 touched. The text is a meta-review subject at the count's end unless the owner rules otherwise.

| # | Finding (shortened) | Kind | Disposition |
|---|---|---|---|
| 1 | Purpose's sentence joins the protection and its cost | SP-01 | split: C72 "The branch point protects proportional verification."; C73 "Under proportional verification, a short report … costs one lint pass." |
| 2 | "readable" used before the verdict section defines it | SP-04 | add the link at first use to "The verdict and the status lines" |
| 3 | step 6's "A step-6 finding stands whatever the strangers attributed the mismatch to" repeats the override | SP-26 | cut C51; the verdict's override carries the rule |
| 4 | `scripts/signals.mjs` named by path only at first use | SP-05 | rephrase C18: "the signals script, `scripts/signals.mjs`, which reads the review record" |
| 5 | "as step 4 states" repeats step 4's exclusion | SP-26 | cut C52 |
| 6 | "case 009" unlinked at first use in the Stranger brief | SP-05 | add the link |
| 7 | Rules opens with the BP-01 exception | SP-11 | rephrase C55 and C54: "The first row whose condition holds decides the disposition. Rule BP-01 (the lints run) stands outside that order and applies to every IR." |
| 8 | row BP-02 before BP-02a gives a normative document with the owner flag D2 | SP-25 | reorder: BP-02a before BP-02 (C68, inferred by R21); `scripts/dispatch.mjs` checks BP-02a first; one test added |
| 9 | `pending` against `unparsed` | SP-25 | fixed with round 3's N1: C67 "… in place of `pending` or `not indicated`", C70 "When the line parses, the reasoning role writes `pending` again for a subject text." |
| 10 | "The owner dispatched no meta-review for those counts" against cases 005 and 008 | SP-25 | rephrase as C71: "The owner dispatched no meta-review for the two counts that converged: branch point v1.5 and the IR specification's count 2." |
| 11 | "stays not recommended" twice names no actor | SP-18 | declined: the sentences record the owner's decisions on case recommendations, not duties |

Round 3's carried items applied in the same pass: finding 9 re-fixed (C69, BP-02 named under "Why each rule" as the owner's review request); N1 as finding 9 above; N2 (C11: "The rules above govern every fix, including an edit outside a round to an IR whose Status is reviewed."); N3 (C49's prose: "The reasoning role also amends each claim the edit makes stale."). A2 asks the owner to ratify or strike the new wording of every decided claim v1.9's rounds reworded, split or reordered.

Claims after fixes: 70. Prose after fixes: 3,656 words. Claims check after the fixes (base: round 4 prose): 11 changed claims, 0 missing, 0 stale; C51 and C52 removed. Round trip: 70 of 70. npm test: 42 of 42.

Confirmation: 10 of 10 fixes hold. Not held: none. Declines accepted: 1 of 1. New defects: 2.

The two new defects are fixed in round 5's fix pass: A (SP-03, "When the line parses" does not name the unparsed line) and B (SP-25, "The three-round trigger fired on counts that converged" against "the two counts that converged").

Decided claims the fixes changed, for the owner: all are listed in A2; the row order BP-02a before BP-02 (C68) is new, and the dispatcher follows it.

Declined findings for round 5's brief: round 1's F1 and F3; round 2's 9 and 10; round 4's 11; each with its reason.

## Round 5, 2026-10-30

Branch point version and commit the round runs under: v1.9 at this round's opening commit. Prose 3,656 words; IR 70 claims. Round 4's confirmation was not yet back when round 5 opened; its line is recorded in round 4's entry when it arrives.

Claims check before the round: 11 changed claims, 0 missing, 0 stale (base: round 4 prose).

Awaiting restatement: none.

Declined findings carried in the brief: round 1's F1 (the instance did not accept the decline) and F3; round 2's 9 and 10; round 4's 11; each with its reason.

Signals script before the round: signals 1, 2 and 3 not fired; no line unparsed. Signal 4 fired by reading in round 4 (see round 4's entry); the script's CHECK points at that round.

Stranger brief: before round 5 the Orchestrator brought the brief's Readability verdict sentence to the current rule: three conditions, the first with the own-mismatch exception and the recurrence override, the second and third plain. In rounds 1 to 4 that sentence had quoted the round 1 rule. Later rounds' briefs start from the updated round 5 brief.

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier, under the brief with the current verdict sentence. Prose 3,656 words by `wordCount`; IR 70 claims; 11 findings, 3.0 per thousand words. Restatement: one mismatch, attributed by the stranger to its own restatement, quoting the Rules opening, which carries C54. Contradictions 0, undefined terms 0. The stranger's verdict was readable; under the override it is not readable for RD-4, because round 2's own mismatch on C55 sat on the same passage, the Rules opening.

Mismatches: C54 (own; relied on C54)


Signals script after the `Mismatches:` line: no recurrence by claim. By passage, by reading: the Rules opening drew own mismatches in round 2 (C55) and round 5 (C54), so signal 2 fires and step 6 makes the passage a prose finding owed a structural fix.

| # | Finding (shortened) | Kind | Disposition |
|---|---|---|---|
| 1 | own mismatch on C54: the Rules opening restated without BP-01's exemption | restatement, step 6 | structural fix: rule BP-01 leaves the rules table and stands as a sentence of its own before it, "Rule BP-01: the lints run for every IR, whatever disposition follows."; the first-row sentence then has no exception: "The first row of the table below whose condition holds decides the disposition."; `awaiting restatement` |
| 2 | "IR" unexpanded at its first use in Purpose | SP-04 | add: "intermediate representation (IR)", linked |
| 3 | "The review record quotes the prose sentence the stranger relied on" names no actor | SP-18 | rephrase C10: "For each own mismatch, the reasoning role quotes in the review record …"; inferred by R25 |
| 4 | "An own mismatch's claim carries `(own)`" names no actor | SP-18 | rephrase C7: "When writing the `Mismatches:` line, the reasoning role marks an own mismatch's claim `(own)`."; inferred by R24 |
| 5 | step 2 names the mismatch claim twice | SP-26 | cut v1.7's sentence "The reasoning role names in the review record, for every restatement mismatch, the claim the mismatch concerns."; the `Mismatches:` line sentence carries the duty |
| 6 | "step-6 fix" used in step 4 before step 6 | SP-04 | add C74 at first use: "A step-6 fix is a fix made under step 6 for a mismatch that recurred."; inferred by R27 |
| 7 | "carries the IR's claim" names no claim | SP-03 | rephrase C25 to the reading adopted on 2026-10-30: "carries an IR claim"; the same in the specification's C223 |
| 8 | "The review record quotes the form …" names no actor | SP-18 | rephrase C27: "Before each round, the reasoning role quotes each added form in the review record …"; inferred by R26 |
| 9 | "unparsed" used before its definition | SP-04 | add C78: "An unparsed line is a review-record line the signals script cannot read."; inferred by R28 |
| 10 | "The script exempts round 1" has no object | SP-03 | rephrase C36: "… exempts round 1 from the claims-check-line rule …" |
| 11 | the Meta-review paragraph mixes trigger, signals, line, script and history | SP-09 | split into four paragraphs by subject; no claim changed; the render map names them |

The verdict becomes the specification's table, so the two verdict texts stay identical after the specification's second structural fix: one row per condition, the exception and override in the first row (C23, C53, C25, C26, C75), each withdrawal in its own row (C76, C77). Step 4 keeps the withdrawal marking (C50) and loses the two sentences the table now carries.

Queued items applied in the same pass: round 4's A (C70: "When the unparsed line parses, …"); round 4's B (C66: "The three-round trigger fired on two counts that converged without any step failing: branch point v1.5 and the IR specification's count 2."; C71: "The owner dispatched no meta-review for those two counts."); the specification's N1 (C81: "When the text is no subject and no line is unparsed, the reasoning role writes `Meta-review: not indicated`."; C82); N2 (C79: the specification's rule on `Meta-review: pending` and `Meta-review: unparsed` lines in an accepted deliverable's review record applies, linked). The stranger's two small adds: "Four of the seven are also among the nineteen." (C80); the case 008 sentence, v1.7's text, left as it is.

Claims after fixes: 79. Prose after fixes: 3,785 words. Claims check after the fixes (base: round 5 prose): 21 changed claims, 0 missing, 0 stale. Round trip: 79 of 79.

Confirmation: 7 of 10 fixes hold. Not held: 6, 7, 11. Declines accepted: 0 of 0. New defects: 5.

Finding 6 did not hold: the definition of a step-6 fix (C74) read as any fix, against "A rewording alone is not a step-6 fix"; re-fixed with N2 in round 6's pass. Finding 7 did not hold on the instance's reading of the exception ("the claim the mismatch concerns"); the wording "carries an IR claim" is the reading adopted on 2026-10-30, it stands, and the owner's decision on the exception's reading is pending. Finding 11 did not hold: two trigger sentences sit outside the trigger paragraph, and the case 005 decisions paragraph has no place among the subjects; re-fixed in round 6's pass. Of the new defects, N1 (the brief's quoting ask beside the record's quoting duty) is declined: the two sentences have different actors and objects, both from case 011 change 2. N2 to N5 are fixed in round 6's pass.

Decided claims the fixes changed, for the owner: all are listed in A2, including rule BP-01's move out of the rules table.

Declined findings for round 6's brief: round 1's F1 and F3; round 2's 9 and 10; round 4's 11; each with its reason. Passage awaiting restatement in round 6: the Rules opening with rule BP-01 (C54, C55); the verdict table, new in this round (C23, C53, C25, C26, C75 to C77).

## Round 6, 2026-10-30

Branch point version and commit the round runs under: v1.9 at this round's opening commit. Prose 3,785 words; IR 79 claims. Round 5's confirmation was not yet back when round 6 opened; its line is recorded in round 5's entry when it arrives.

Claims check before the round: 21 changed claims, 0 missing, 0 stale (base: round 5 prose).

Awaiting restatement: round 5's step-6 fix on the Rules opening (C54, C55); the verdict table, new in round 5 (C23, C53, C25, C26, C75 to C77). This round's entry states whether the restatement matched on each.

Declined findings carried in the brief: round 1's F1 (the instance did not accept the decline) and F3; round 2's 9 and 10; round 4's 11; each with its reason.

Signals script before the round: signals 1 and 3 not fired; signal 2 fired by reading on the Rules opening (rounds 2 and 5); signal 4 fired by reading in round 4; no line unparsed.

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier. Prose 3,785 words by `wordCount`; IR 79 claims; 9 findings, 2.4 per thousand words. Restatement: one mismatch, attributed by the stranger to its own restatement, on the Rules opening: the restatement called BP-01 a table row. Contradictions 0, undefined terms 2 (findings 3 and 4 with 5); verdict: not readable for RD-4, on the override and the undefined terms.

Mismatches: C54 (own; relied on C55)


Signals script after the `Mismatches:` line: signal 2 fired by claim for the first time on this text: C55 in rounds 2 and 6, C54 in rounds 5 and 6. The Rules opening has drawn a mismatch in rounds 2, 5 and 6; the override counts it, and round 5's structural fix did not hold on restatement. The verdict table, awaiting restatement from round 5, matched.

| # | Finding (shortened) | Kind | Disposition |
|---|---|---|---|
| 1 | own mismatch on C54: BP-01 restated as a table row | restatement, step 6 | third structural fix: the lints leave the BP series; the Dispositions section states "The reasoning role runs the lints for every IR, whatever disposition follows." with no identifier (C54); the label BP-01 is retired, with this note and C54's provenance; `scripts/dispatch.mjs` names the change; the Rules section opens with the table's subject (C87) and the first-row sentence (C55); `awaiting restatement`, third fix |
| 2 | the confirmation-line sentence at 29 words with its template | SP-02 | rephrase: "The reasoning role records the confirmation on one line, in this form:" with the template on its own line |
| 3 | "awaiting restatement" used one sentence before its definition | SP-04 | reorder C61 before C15 |
| 4, 5 | "Declines accepted" and "New defects" with no step that produces them | SP-04 | add C85 before the line: "The instance also says whether it accepts each decline the reasoning role made, and names each new defect the fixes introduce."; inferred by R31 |
| 6 | "The stranger brief sets what the stranger reads and reports." | SP-26 | declined: round 2's instance asked for the section to open with its subject and confirmed that sentence |
| 7 | the lints "run" with no actor | SP-18 | folded into finding 1: the reasoning role runs the lints; the BP-00 cell reads "D0, under which the reasoning role still runs the lints" (C58) |
| 8 | the readers sentence before the table | SP-10 | move: the readers sentence below the rules table |
| 9 | "The texts that require an IR" after the Stranger brief | SP-11 | move: the section before Inputs; its anchor is unchanged |

Round 5's carried items applied in the same pass: finding 6 and N2 (C74: "A step-6 fix is the structural fix made under step 6 for a mismatch that recurred."); finding 11 (the dispatch and limit sentences moved into the trigger paragraph; the case 005 decisions under their own sub-header); N3 (C78, the unparsed line covers a round after round 1 with no claims-check line); N4 (C26, "in any two rounds of the text's counts"); N5 (C79, the pointer states the rule's effect). The specification's shared items: the first row's Counts qualifier (C53); the withdrawal without a quoted reason (C83, C84); the stranger instance as actor on the no-withdrawal cell (C75); "meta-review subject" in full (C86, C70, C81). The verdict table stays identical to the specification's. Step 7 does not state the delivered text, so the specification's C248 and C249 have no counterpart here.

Claims after fixes: 84. Prose after fixes: 3,892 words. Claims check after the fixes (base: round 6 prose): 16 changed claims, 0 missing, 0 stale. Round trip: 84 of 84. npm test: 42 of 42.

Decided claims the fixes changed, for the owner: all are listed in A2, including the retired label BP-01.

Declined findings for round 7's brief: round 1's F1 and F3; round 2's 9 and 10; round 4's 11; round 5's N1; round 6's 6; each with its reason. Passage awaiting restatement in round 7: the Rules opening and the lints sentence (C87, C55, C54), third fix.
