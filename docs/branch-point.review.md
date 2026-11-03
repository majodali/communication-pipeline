# Review record: branch point

This record logs the review rounds of the branch point from version 1.11 on, one count per version. The reasoning role writes it during the rounds, and the human owner reads it to accept a version.

Reader of the reviewed text: RD-4 (a fresh agent session) implementing or running the pipeline, and the human owner setting thresholds. Each brief names the owner as the human reader of the paraphrase test. Reviewer: a stranger, a fresh instance per round started from `.claude/agents/reviewer.md`, model named per round. Disposition D3 (a specification, Normative: yes). Text reviewed: `docs/branch-point.md` whole; its IR, `docs/branch-point.ir.md`, holds every claim of the text. The records of v1.4 to v1.10 stay under `docs/records/`.

## Count 1, 2026-11-02: branch point v1.11

Inputs: the owner's decision of 2026-11-02 on [evaluation case 015](../eval/cases/015-ruleset-simplification-review-2026-11-02.md): changes 1 to 30 adopted, 31 to 35 declined. Under change 29's table, v1.11 carries changes 1, 3, 4, 7 to 13, 24, 26 and 28. It links the specification for the others. The specification's count 7 runs in parallel under these rules.

Branch point version and commit the count runs under: v1.11 at commit 12ff480 on branch `branch-point-v1.11-case-015`, the text with its scripts and style specification. The rounds run under v1.11's seven steps, as v1.9's and v1.10's counts ran under the version they reviewed.

Choices recorded for the owner, where the case left a choice open (the smaller text taken):

1. The IR sits beside the prose as `docs/branch-point.ir.md` (change 13), and this record beside it, so the lint's review-record check finds it. One record holds every later count.
2. The first claims check runs against an empty base: no accepted IR of the whole text exists (change 13).
3. The history record holds v1.10's two history sections unedited, the six old render maps, and one paragraph on cases 013 to 015 (change 8).
4. The restatement stands in the round's entry as a `Restatement:` line and a quoted block, the form `scripts/lint.mjs --restatement` reads (changes 26 and 27). The repeated-sentence check flags a restatement sentence of five content words or more when 70 percent of them stand in one prose sentence.
5. SP-27 binds documents under `docs/` outside `docs/records/`, and evaluation cases. A review record, an IR and a file opening with a supersession marker are exempt. Its gloss check counts a vocabulary row as a coined name when the row's definition site is not the methodology's.
6. Steps 2 and 4 drop two v1.10 sentences that the case's draft also leaves out. The first is the record's quote of each relied-on sentence. The brief still asks the stranger to quote that sentence. The second sentence states, in the next round's entry, whether a listed passage matched.

Landing departures from the dispatch brief, ruled by the Orchestrator on 2026-11-02 as the case's adopted text:

7. The IR and this record sit beside the prose, not under `docs/records/` (change 13).
8. Claims that render an adopted change are decided in both IRs, naming the owner, the date, the case and the change, not proposed (change 13). Acceptance ratifies the reworded claims (change 19).
9. `docs/readers.md`, `docs/ir-schema.md` and `docs/term-lifecycle.md` stay unedited as records; the skills and agents read the methodology's homes (change 22).
10. The specification's count 7 carries the branch point v1.10 rule that a fix still awaiting restatement counts as unfixed at the limit (its C198 and C326). Change 15 does not list the rule, and v1.11 links the specification for the final round.
11. The count runs under v1.11 at commit 12ff480. The strangers read the opening commit 8e3ceb8, which adds this record, the IR's round 1 status and one lint scope fix: SP-27 exempts review records.

Step 1, before round 1, by `npm run check -- docs/branch-point.md --empty-base`:
Checks: 0 sentences over 25 words; 141 of 141 claims mapped; 141 claims changed, 0 missing, 0 stale.

Declines carried in the round 1 brief: v1.9 round 1's F3 (SP-18), "Thresholds are provisional until the evaluation corpus tunes them." Its text stands unchanged.

Not carried, because the text under them is gone or rewritten:

- v1.9 round 2's 10, step 7's marking sentence;
- v1.9 round 4's 11, the decisions record, now in the history record;
- v1.9 round 5's N1, the record's quote duty, cut;
- v1.9 round 6's 6, the brief's opening, reworded;
- v1.10 round 4's 9, the history sentence, moved;
- v1.10 round 9's 2, the term step-6 fix, dropped.

Passages awaiting restatement: none. v1.10's count closed with no open mark.

Forms added to the brief, carried from the v1.10 and count 6 briefs:

- an HTML comment in a fixed form, such as the render map;
- a numbered step that opens with its short name, such as "Check the text."

Neither bears on a finding yet.

Signals script before the round: no round recorded yet; nothing to read.

### Curve, count 1

| Round | Prose words | IR claims | Findings | Per 1,000 words | Verdict |
|---|---|---|---|---|---|
| 1 | 2,396 | 141 | 24 | 10.0 | not readable (mismatch 1; contradictions 2; undefined terms 4; paraphrase-test findings 6) |
| 2 | 2,491 | 151 | 12 | 4.8 | not readable (mismatches 2; contradictions 2; undefined term 1; paraphrase-test findings 3) |
| 3 | 2,549 | 154 | 15 | 5.9 | not readable (mismatch 1; contradictions 4; undefined terms 3; paraphrase-test findings 2) |
| 4 | 2,660 | 160 | 11 | 4.1 | not readable (mismatch 1; contradictions 0; undefined term 1; paraphrase-test findings 2) |
| 5 | 2,676 | 160 | 5 | 1.9 | not readable (mismatches 0; contradiction 1; undefined term 1; paraphrase-test findings 1) |
| 6 | 2,707 | 161 | 12 | 4.4 | not readable (mismatches 0; contradiction 1; undefined term 1; paraphrase-test findings 2) |
| 7 | 2,718 | 164 | 12 | 4.4 | not readable (mismatches 0; contradiction 1; undefined terms 0; paraphrase-test findings 3) |
| 8 | 2,740 | 165 | 12 | 4.4 | not readable (mismatches 2; contradiction 1; undefined terms 3; paraphrase-test findings 2) |
| 9 | 2,781 | 166 | 7 | 2.5 | not readable (mismatches 0; contradictions 0; undefined terms 2; paraphrase-test findings 2) |

### Round 1, count 1, 2026-11-02

The round reads the text at its opening commit, named in the brief. Prose 2,396 words, by `wordCount` in `scripts/ir.mjs` with comments stripped. IR 141 claims. Unratified terms 0. Human reader for the paraphrase test: the human owner.

Stranger model: claude-haiku-5-5, a fresh instance started from `.claude/agents/reviewer.md`, reading at commit 8e3ceb8.

Restatement:

> The problem: a text given to a reader needs checking, and checking every text fully costs too much. This document decides how much checking each text gets before the reader sees it, and how the review of a text runs when it gets the full check. For each text, the pipeline reads a set of counts taken from the text's header and content: who the reader is, whether the text is a short report or a longer document, how many claims it makes, how many terms are new, how many asks rest on other claims, the length of the longest claim, and whether the owner asked for a review or marked the text as machine-only. A table of ordered rules maps these inputs to one of four levels of work: a deterministic check only; a check plus a rendering of the prose; a rendering plus a review by fresh reader instances; or the same review with the rendering done by the reasoning agent itself. The review runs in rounds: a fresh reader writes its own restatement and report, the text is fixed, and a new reader checks the fixes. Thresholds are provisional. The owner sets them.

Prose 2,396 words by `wordCount` (the stranger's estimate: about 2,900, by eye); IR 141 claims; 20 findings from the stranger and 4 from the restatement check, 24 in all, 10.0 per thousand words. Restatement: one mismatch. Listed passages: none. Contradictions 2 (findings 5 and 10), undefined terms 4 (findings 2, 4, 7 and 9), paraphrase-test findings 2 (findings 6 and 12); verdict: not readable for RD-4. Omissions noticed, not counted: 4 (the threshold values, the dispatch log, A1's ratification clause, the list of forms).

The mismatch: the restatement read the owner flag `ir-only` as "machine-only". The stranger relied on the Inputs row "`ir-only` if the owner designated the document IR-only", which carries C23 itself, with no gloss and the link only at row BP-00. First occurrence; no structural fix is owed.
Mismatches: C23

Restatement check, `node scripts/lint.mjs --restatement docs/branch-point.review.md`: 4 items, recorded as findings P1 to P4 under the verdict's fourth condition.

Signals script after the `Mismatches:` line: no signal.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | `ir-only` read as machine-only (C23) | restatement | fixed: the owner flag row glosses and links IR-only, "delivered as its IR alone, with no prose" (C23 split, C143 added) |
| 2 | "the pipeline" undefined | SP-04 | fixed by cutting: the text no longer uses the word (C2, C9, C10, C11, C14 reworded) |
| 3 | the purpose's second sentence repeats the Reader line | SP-26 | declined: SP-27 (case 015 change 28) asks the plain purpose to say who reads the document, with no identifier; the Reader line names the reader by catalog identifier for the lint and the brief. Each form carries what the other cannot |
| 4 | "thresholds" undefined | SP-04 | fixed: "The thresholds, the numbers in the rules' conditions, are provisional ..." (C6); the purpose says "the numbers its rules use" (C2) |
| 5 | the Reader line names two readers, the IR header one | SP-25 | fixed: the Reader line names RD-4, then "The human owner, setting the thresholds, reads the branch point as RD-4 does." (C10 reworded, C142 added), the specification's form; the IR header stays RD-4 |
| 6 | the proposed-terms and dependent-asks rows | paraphrase test | fixed: the rows say "terms that wait for the owner's ratification" and "requests to the reader" (C20, C21) |
| 7 | IR-only used before its gloss or link | SP-04 | fixed with finding 1 |
| 8 | the D1 row's sentence at 35 words | SP-02 | fixed: the gloss of connective prose is its own sentence (C27 split, C145 added) |
| 9 | "the brief" used before the Stranger brief section | SP-04 | fixed: step 1 links "the [Stranger brief](#stranger-brief) section" (C41) |
| 10 | step 1's base against R3's empty base | SP-25 | fixed in the IR: the base is the version the owner last accepted; v1.10 holds no IR beside its prose, so the first check read an empty base. R3 now says so; the prose stands. Against v1.10 on main the IR file is absent, so the check reads an empty base there too |
| 11 | "so" and "because" joining a rule to a reason the IR does not hold | SP-01 | fixed in the IR: each reason is its own claim (C114, C115 with C148, C119, C120), so the prose sentences take the brief's permitted form |
| 12 | the signals unnamed | paraphrase test | fixed: the Meta-review paragraph says what each signal the script or the reasoning role reads is (C125 to C127, C149 added) |
| 13 | IR C25 at 31 words | SP-02 | fixed: split (C25, C144) |
| 14 | IR C73 quotes the `Checks:` form | SP-02 | declined: the words over 25 are the fixed record form, quoted as code; without the form the claim holds 12 words. CK-02 caps an IR claim at 40 |
| 15 | IR C75 at 36 words | SP-02 | fixed: split (C75, C146) |
| 16 | IR C76 quotes the `Confirmation:` form | SP-02 | declined: as finding 14; the claim holds 9 words besides the form |
| 17 | IR C102 at 37 words | SP-02 | fixed: split (C102, C147) |
| 18 | IR C109 at 31 words | SP-02 | fixed: 24 words (C109) |
| 19 | IR C131 at 28 words | SP-02 | fixed: 22 words (C131) |
| 20 | A1's "names one" | SP-03 | fixed: "names a claim to exclude" |
| P1 | the restatement uses "rounds" (T11) | paraphrase test | declined: the restatement says in the same sentence what a round is ("a fresh reader writes its own restatement and report, the text is fixed, and a new reader checks the fixes"); the passage was restated in plain words |
| P2 | the restatement uses "counts" (T12) | paraphrase test | declined: the restatement uses "counts" in its plain sense, numbers taken from the header, not the text's term for a run of rounds |
| P3 | the restatement uses "restatement" (T20) | paraphrase test | declined: the text glosses the word at its first use, "its own account of the text in at most 200 words", and the restatement uses it in that plain sense |
| P4 | the restatement's second sentence repeats the plain purpose (77 percent) | paraphrase test | declined: the repeated sentence is the plain purpose, written without any term the text introduces under SP-27; repeating it leans on no term |

Step 5, `npm run check -- docs/branch-point.md --base 8e3ceb8`, after the fixes:
Checks: 0 sentences over 25 words; 149 of 149 claims mapped; 31 claims changed, 0 missing, 6 stale.

The six stale claims are IR-only edits whose sentences already carry them: C114, C115, C119 and C120 split a reason from its rule in Why each rule, C102 splits row BP-00 and C109 rephrases row BP-07. No prose fix is owed. The lint's SP-27 gloss check does not see the gloss of connective prose, which follows in the next sentence without an article; the gloss stands.

Claims after fixes: 149. Prose after fixes: 2,468 words. Structural fixes: none; no claim recurred. Decided claims the fixes reworded, for the owner at acceptance (case 015 change 19): C6, C9, C10, C11, C14, C20, C21, C23, C25, C27, C41, C75, C102, C109, C114, C115, C119, C120, C125, C126, C127, C131. The carried decline's sentence, C6, now holds the gloss of thresholds; its reason still holds.

Confirmation: 15 of 17 fixes hold. Not held: 15, 18. Declines accepted: 3 of 7. New defects: 3.

The instance read both files in full at fix commit 66f9852. The fix pass's count for C109 was wrong: by `wordCount` it held 26 words, not 24. C146, split from C75, also held 26. The confirmation's fixes, IR first, before round 2 opens:

- Fix 15 did not hold, with N2 (SP-02, C146 at 26 words). Re-fixed: "Each entry names the contradicted claim and, after "relied on", the claim of the quoted sentence, as `C41 (relied on C35)`." (21 words); the prose row follows.
- Fix 18 did not hold (C109 at 26 words). Re-fixed: "BP-07 gives D1 for RD-1 (the owner, in conversation) ..." (25 words). The prose row already carries the claim.
- Declines 14 and 16 not accepted: the 40-word limit the declines cite stood in neither file the stranger read. Settled in the text: the Stranger brief section now says "SP-02's limit of 25 words binds the sentences of the prose. An IR claim's limit is 40 words, the specification's check CK-02 (claim length)." (C150, C151). C73 (30 words) and C76 (27 words) fall under the 40-word limit, so both declines stand, now on a rule the text states.
- P3 and P4, declines not accepted: the instance holds that the check's term part and repeat part each record a finding whatever the text. The declines stand. The verdict's fourth condition, in the specification, counts a passage the stranger cannot restate without a term the text introduces. The check lists candidates for that condition; a reused glossed word and a copied plain sentence show no such passage.
- N1 (SP-04, "ask" undefined after fix 6): the dependent-asks row reads "the count of `A` elements, asks (requests to the reader), whose `Depends:` field names the claims or asks they rest on" (C21).
- N3 (SP-03, "as RD-4 does"): the Reader line reads "The human owner, setting the thresholds, reads the branch point with no more context than RD-4." (C142).
- Declines 3, P1 and P2 accepted.

Step 5 after the confirmation's fixes, `npm run check -- docs/branch-point.md --base 66f9852`:
Checks: 0 sentences over 25 words; 151 of 151 claims mapped; 6 claims changed, 0 missing, 1 stale.

The stale claim, C109, is an IR-only edit; the prose row carries it. Prose after the confirmation's fixes: 2,491 words; IR 151 claims. Decided claims reworded after confirmation, for the owner at acceptance: C21, C109, C142, C146; added: C150, C151.

Signals script after the confirmation line: no signal. Signal 1 needs fixes not held in two or more rounds; round 1 is the first.

### Round 2, count 1, 2026-11-02

The round reads the text at its opening commit, named in the brief, under v1.11 at commit 12ff480. Prose 2,491 words; IR 151 claims; unratified terms 0. Human reader for the paraphrase test: the human owner. Stranger: pending, a fresh instance.

Declines carried in the round 2 brief: v1.9 round 1's F3, on the sentence C6 now glosses; round 1's 3, 14 and 16, each with its reason. Not carried: P1 to P4, which concerned round 1's restatement and not the text. The brief names the passages round 1 and its confirmation changed, for the whole-text read. Passages awaiting restatement: none. The changed-passages section is a departure from the brief form of branch point v1.11 step 2, made at the Orchestrator's direction and kept for this count; it is noted for the next ruleset review.

A void reading, recorded as an edge of round 2 and not as its report: the first stranger dispatched on the round 2 brief, a fresh claude-haiku-5-5 instance reading at d174d5a, opened the IR before it wrote its restatement. The stranger said so in its report. That order breaks step 3 of v1.11, the stranger's read order, so its restatement cannot serve the verdict's first condition. The Orchestrator voided the reading and dispatched a fresh stranger on the same brief, with the read order made binding in its instructions. The void reading's 14 findings, on SP-01, SP-03, SP-04, SP-05, SP-18, SP-26 and the paraphrase test, are advisory. They count in neither the round's findings nor its verdict. The reasoning role may fold any of them into round 2's fix pass as its own fixes, marked as such. The report is held outside the record, at the Orchestrator's scratchpad as `bp111-r2-void-report.md`.

Stranger model: claude-haiku-5-5, a fresh instance redispatched on the round 2 brief, reading at commit d174d5a. It wrote its restatement before it opened the IR.

Restatement:

> This text addresses how much checking a written output gets before its reader sees it. Short outputs for a reader who was in the conversation need only one mechanical check. Outputs for a reader who was not there also get a rewrite into readable prose and reviews by fresh readers who have not seen the work before. The text decides, for each output, which of these treatments applies. It reads a few counts from the output's structured form: how many separate statements the output makes, how many terms still await the owner's approval, how many requests depend on other items, and how many words the longest statement has. It also reads the reader and the purpose. It takes the first rule in its table whose condition holds. The text also sets out the steps of the fresh-reader reviews: the commands to run, the reviewer's instructions, and the lines each step writes into a log. The thresholds in the table are provisional until a test corpus tunes them, and the human owner sets those numbers.

Prose 2,491 words by `wordCount` (the stranger's estimate: about 3,000); IR 151 claims; 10 findings from the stranger and 2 from the restatement check, 12 in all, 4.8 per thousand words. Restatement: two mismatches. Listed passages: none. Contradictions 2 (findings 3 and 6), undefined term 1 (finding 4), paraphrase-test findings 3 (finding 8 and the check's two items); verdict: not readable for RD-4. Omissions noticed, not counted: 4 (the owner flag, the Normative header, IR-only documents, the thresholds of BP-07 and BP-08).

Side-effect call: after its reading, the stranger called one tool its brief bars, the environment documentation index, with no topic. It reported the call itself and says no finding depends on it. The call changed no file. Recorded as an edge, as the K-003 count's round 4 recorded its stranger's call outside the brief.

The mismatches, each counting under the first condition though the stranger put both down to its own wording. First, the restatement gave every output for an in-conversation reader one mechanical check; row BP-03 gives a document D2 whatever its reader (C105). The stranger relied on that row. Second, the restatement gave every output for an absent reader a rendering and stranger reviews; row BP-06 and the reason for BP-05a give the returning owner a rendering and no review (C108). The stranger relied on the BP-05a reason (C118). First occurrence of each claim on a `Mismatches:` line; no structural fix is owed.
Mismatches: C105, C108 (relied on C118)

Restatement check, `node scripts/lint.mjs --restatement docs/branch-point.review.md --round 2`: 2 items, recorded as Q1 and Q2.

Signals script after the `Mismatches:` line: no signal; no claim recurs.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | short outputs for an in-conversation reader read as one check (C105) | restatement | declined: the prose did not invite the reading. The Rules table states "BP-03 \| purpose is `document` \| D2", and the Purpose section says "a short report". The mismatch counts in this round |
| 2 | outputs for an absent reader read as rendered and reviewed (C108) | restatement | declined: the prose did not invite the reading. The table gives "BP-06 \| reader is RD-2 (the human owner, returning) \| D1". The mismatch counts in this round |
| 3 | two tuning sources, the corpus and the log | SP-25 | fixed: "The log is the data the evaluation corpus tunes the thresholds against." (C141) |
| 4 | "stage" undefined | SP-04 | fixed: the Purpose says "a disposition: which of the lint, the rendering of prose and the stranger rounds run", and a document for a stranger "gets the lint, the rendering and the stranger rounds" (C11, C14) |
| 5 | C11 and C24 state one claim | SP-26 | fixed: C24 cut; the Purpose carries the definition, and the Dispositions table's header links it |
| 6 | D1 lets the reasoning role render; BP-06 says only the paraphraser writes the state paragraph | SP-25 | fixed: BP-06's reason reads "which only a rendering of prose writes" (C119) |
| 7 | the brief named as actor in step 2 | SP-18 | fixed: "In the brief, the reasoning role names ..." (C45 to C47) |
| 8 | the fourth condition unexplained in step 4 | paraphrase test | fixed: "The fourth condition, the paraphrase test, asks for a restatement that uses no term the text introduces." (C152 added) |
| 9 | "BP-02a stands before it" | SP-03 | fixed: "before BP-02" (C113's prose) |
| 10 | the fourth signal with no third | SP-03 | fixed: "The specification struck the third signal." (C155 added) |
| Q1 | the restatement uses "counts" (T12) | paraphrase test | declined: "a few counts from the output's structured form" is the plain sense, the numbers the Inputs table reads, as round 1's P2 was accepted |
| Q2 | "It takes the first rule in its table whose condition holds." repeats C102's prose sentence (71 percent) | paraphrase test | declined: the sentence restates the rule in the stranger's own syntax, and the shared words hold no term the text introduces |
| V3 | own fix, from the void reading's 3: "this specification" in the Type line | SP-03 | fixed: "implements against this document" (C9) |
| V5 | own fix, from the void reading's 5: "prose lints" undefined | SP-04 | fixed: "the lint's prose checks" (C25) |
| V8 | own fix, from the void reading's 8: step 5's sentence carried two duties | SP-01 | fixed: split (C61, C153 added) |
| V10 | own fix, from the void reading's 10: step 6's sentence carried two duties | SP-01 | fixed: split (C68, C154 added) |

The void reading's 4, 7 and 14 coincide with this round's findings 4, 8 and 10. Its other findings take no fix: 1 (the purpose holds at most two sentences under SP-27), 2 (the Versions pointer serves a reader arriving mid-document), 6 (step 1 names the base before round 1, and step 5 names it after), 9 (step 5 fixes the second check's list, step 1 the first's), 11 (the linked style specification rows define their calibrations), 12 (the ask belongs to the report the reasoning role writes) and 13 (the reason's backlog evidence sits in the IR).

Step 5, `npm run check -- docs/branch-point.md --base d174d5a`:
Checks: 0 sentences over 25 words; 154 of 154 claims mapped; 15 claims changed, 0 missing, 0 stale.

Claims after fixes: 154 (C24 cut; C152 to C155 added). Prose after fixes: 2,539 words. Structural fixes: none. Decided claims the fixes reworded, for the owner at acceptance: C9, C11, C14, C25, C45, C46, C47, C61, C68, C113, C119, C141.

Confirmation: 7 of 8 fixes hold. Not held: 8. Declines accepted: 4 of 4. New defects: 2.

The line above is derived from the instance's answers, finding by finding. The instance left the form's placeholders in its own line, "H of A fixes hold"; recorded as an edge. The Orchestrator derived the figures, and the reasoning role checked them against the answers. The instance read both files in full at fix commit 9acc504. The confirmation's fixes, IR first, before round 3 opens:

- Fix 8 did not hold: the gloss called the fourth condition a test of terms, while the same sentence put a repeated sentence under it. Re-fixed: "The fourth condition, the paraphrase test, asks for a restatement in the stranger's own words that uses no term the text introduces." (C152)
- N1 (SP-03, "the second check" in step 5 among step 1's three checks): "The reasoning role fixes what that run lists." (C153)
- N2 (SP-25, C14 against C102: an IR-only document for a stranger gets the lint alone): "A document for a stranger gets the lint, the rendering and the stranger rounds, unless the owner designates it IR-only." (C14)
- Declines 1, 2, Q1 and Q2 accepted.

Step 5 after the confirmation's fixes, `npm run check -- docs/branch-point.md --base 9acc504`:
Checks: 0 sentences over 25 words; 154 of 154 claims mapped; 3 claims changed, 0 missing, 0 stale.

Prose after the confirmation's fixes: 2,549 words; IR 154 claims. Decided claims reworded after confirmation, for the owner at acceptance: C14, C152, C153.

Signals script after the confirmation line: signal 1 fires, on fixes not held in rounds 1 and 2. The text is a meta-review subject; at the count's close the `Meta-review:` line reads pending, and the reasoning role reports the signal to the owner.

### Round 3, count 1, 2026-11-02

The round reads the text at its opening commit, named in the brief, under v1.11 at commit 12ff480. Prose 2,549 words; IR 154 claims; unratified terms 0. Human reader for the paraphrase test: the human owner. Stranger: pending, a fresh instance.

Declines carried in the round 3 brief: v1.9 round 1's F3; round 1's 3, 14 and 16; round 2's 1 and 2, each with its reason. Not carried: round 2's Q1 and Q2, which concerned round 2's restatement. The brief names the passages round 2 and its confirmation changed, for the whole-text read, the departure kept for this count. Passages awaiting restatement: none.

Stranger model: claude-haiku-5-5, a fresh instance, reading at commit 97e4266. It wrote its restatement before it opened the IR and made no call outside its brief.

Restatement:

> This document decides how much checking a written text gets before a reader sees it, and how that checking runs. A text is first reduced to a numbered list of its statements. A fixed set of conditions reads that list and picks one of four levels: an automatic check only; that check plus a plain-prose rendering for the reader; that plus repeated reviews by a fresh reader; or a rendering written by the working agent plus those reviews. The first condition that holds decides the level. The conditions use the reader type, whether the text is a short report or a document, the number of statements, the number of new words awaiting the owner's approval, the number of requests that depend on other items, the length of the longest statement, and any review or list-only flag the owner set. The owner reads the document to set the numbers in those conditions, which stay provisional until a test corpus tunes them. The document also gives the steps of each review: run the check, brief a fresh reviewer, collect its findings, fix them, have the reviewer confirm the fixes, and close the review, with a record written at each step.

Prose 2,549 words by `wordCount` (the stranger counted 1,709 words of body text, outside tables and headings); IR 154 claims; 13 findings from the stranger and 2 from the restatement check, 15 in all, 5.9 per thousand words. Restatement: one mismatch. Listed passages: none. Contradictions 4 (findings 2, 5, 8 and 10), undefined terms 3 (findings 3, 4 and 6; finding 13 is a missing input), paraphrase-test findings 2 (the check's items; the stranger found none); verdict: not readable for RD-4. Omissions noticed, not counted: 4.

The mismatch: the restatement had a record line written at every step. The stranger relied on the Rounds introduction, "This section holds this project's steps, the script each step runs and the line each step writes in the review record." (C33); steps 2 and 3 write no line (C73 to C78). The prose invited the reading. First occurrence; no structural fix is owed.
Mismatches: C73 (relied on C33)

Restatement check, `node scripts/lint.mjs --restatement docs/branch-point.review.md --round 3`: 2 items, R1 and R2, both repeated sentences.

Signals script after the `Mismatches:` line: signal 1 stands from rounds 1 and 2; no claim recurs. By reading, the fourth signal fires: findings 2 and 10 are contradictions in round 3 on passages earlier fixes touched, the Purpose's stranger sentence (C14, fixed in rounds 1 and 2) and BP-02a's reason (C115, split in round 1).

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | a record line at every step (C73, relying on C33) | restatement | fixed with 5: "the scripts they run and the lines they write" (C33) |
| 2 | the Purpose's IR-only clause against BP-00's normative exclusion (C14, C102) | SP-25 | fixed by a structural move, by judgement: the third round on this sentence, so no further qualifier. C14 leaves the Purpose for its rows' reason in Why each rule: "BP-03 and BP-04: someone not in the conversation reads documentation, so a document gets the lint, the rendering and the stranger rounds." Scoped to its two rows, the claim needs no exception. Not owed to a recurring mismatch, so not marked `awaiting restatement` |
| 3 | "short" undefined | SP-04 | fixed: "A short report is one under the thresholds of rows BP-07 and BP-08." (C156, inferred by R5) |
| 4 | "the lint's prose checks" undefined | SP-04 | fixed: the D0 row links the prose checks to the style specification's rule table |
| 5 | "each step" runs a script and writes a line | SP-25 | fixed: C33, as finding 1 |
| 6 | "a term the text introduces" undefined | SP-04 | fixed: "A term the text introduces is one the text defines or links to a vocabulary entry." (C157), at step 3 |
| 7 | step 4 repeats step 3's clause | SP-26 | fixed: "The fourth condition, the paraphrase test, asks for the restatement step 3 describes, in the stranger's own words." (C152) |
| 8 | step 5's second run targets the pre-fix commit | SP-25 | fixed: "The reasoning role runs `npm run check` again on the fixed text, with the commit the round read as its base." (C61). A wording fix of the case's adopted step 5, which says "runs `npm run check` again": the fix pass's wording "against the commit the round read" named the base as if it were the target. No new rule |
| 9 | "the fixes the confirmation calls for" names no fixes | SP-03 | fixed: "The reasoning role fixes again each fix the instance says does not hold, and fixes each new defect the instance names." (C154) |
| 10 | BP-02a's "only the review runs" against the lint under every disposition | SP-25 | fixed: "so the reasoning role renders the normative text in place of the paraphraser" (C115) |
| 11 | "the owner" in BP-07 and BP-08's reason, while BP-08's reader is RD-3 | SP-03 | fixed: "the reader reads prose faster" (C121) |
| 12 | the struck third signal unnamed | SP-05 | fixed: "The specification struck the third signal, a measure of the prose's growth per IR claim." (C155) |
| 13 | the Inputs table lacks the Normative header two rules read | SP-04 | fixed: a normative row (C158) |
| R1 | the restatement's first sentence repeats the plain purpose (82 percent) | paraphrase test | declined: the purpose holds no term the text introduces; repeating it shows no passage that can only be repeated |
| R2 | "The first condition that holds decides the level." repeats C94 (80 percent) | paraphrase test | declined: the stranger's sentence swaps the text's terms, row and disposition, for plain words; it restates the rule |

Step 5, `npm run check -- docs/branch-point.md --base 97e4266`, on the fixed text:
Checks: 0 sentences over 25 words; 157 of 157 claims mapped; 11 claims changed, 0 missing, 0 stale.

Claims after fixes: 157 (C156 to C158 added). Prose after fixes: 2,601 words. Structural fixes owed to a recurring mismatch: none. Decided claims the fixes reworded, for the owner at acceptance: C14, C33, C61, C115, C121, C152, C154, C155.

Confirmation: 11 of 13 fixes hold. Not held: 2, 3. Declines accepted: 2 of 2. New defects: 2.

The instance read both files in full at fix commit 1d89430. The confirmation's fixes, IR first, before round 4 opens:

- Fix 2 did not hold, with N1 (SP-25): the move dropped the IR-only exception, so C14 read against BP-00. This is the fourth round on that rule, so the exception becomes a claim of its own beside BP-00, not a qualifier on C14: "A document the owner designates IR-only, with no `Normative: yes`, gets the lint alone, and rows BP-03 and BP-04 never apply to it." (C159, after the Rules table). C14 stays in Why each rule, scoped to its two rows.
- Fix 3 did not hold: "a short IR" stayed undefined in the reasons for BP-07, BP-08 and BP-09. Re-fixed: "An IR under the thresholds, with no dependent ask, reads well as it stands." (C120) and "reads an IR under the thresholds as it stands" (C122).
- N2 (SP-25): the fix commit sent at step 6 cannot hold the fixes step 6 then makes. Settled as v1.10 and the specification's C275 and C298 have it: the confirmation's fixes come after the confirmation and before the next round. Step 6 now says "The reasoning role runs `npm run check` on those fixes, with the fix commit as its base. The commit that holds those fixes opens the next round, whose stranger reads them." (C160, C161). A wording fix of the case's adopted step 6, stating the practice every round of this count followed; no new rule.
- Declines R1 and R2 accepted.
- Also in this pass, after the specification's round 3 confirmation named the same defect there: C157, the definition of "a term the text introduces", is the reasoning role's wording, not the owner's. It now reads `[proposed: this IR]`, with the term as T34 and ask A2 for the owner. Unratified terms: 1. Its sentence now stands before the term's first use in step 3, the same defect the specification's confirmation named as N2.

Step 6's check, `npm run check -- docs/branch-point.md --base 1d89430`:
Checks: 0 sentences over 25 words; 160 of 160 claims mapped; 5 claims changed, 0 missing, 0 stale.

Prose after the confirmation's fixes: 2,660 words; IR 160 claims. Decided claims reworded after confirmation, for the owner at acceptance: C120, C122; added: C159 to C161.

Signals script after the confirmation line: signal 1 stands from rounds 1 and 2, and round 3 adds fixes not held. Signal 4 stands by reading.

### Round 4, count 1, 2026-11-02

The round reads the text at its opening commit, named in the brief, under v1.11 at commit 12ff480. Prose 2,660 words; IR 160 claims; unratified terms 1 (T34). Human reader for the paraphrase test: the human owner. Stranger: pending, a fresh instance.

Declines carried in the round 4 brief: v1.9 round 1's F3; round 1's 3, 14 and 16; round 2's 1 and 2; round 3's 1 is fixed, so none from round 3. Not carried: the restatement-check items. The brief names the passages round 3 and its confirmation changed, the departure kept for this count. Passages awaiting restatement: none.

Stranger model: claude-haiku-5-5, a fresh instance, reading at commit 31c5133. It wrote its restatement before it opened the IR and made no call outside its brief.

Restatement:

> The problem is how much checking a written text gets before a reader sees it. Checks cost time, and a short report to someone in the same conversation needs few. This document decides which checks each text gets. It starts from facts about the text: who reads it, whether it is a report or a document, how many statements it makes, how many new word meanings it proposes, how many requests it makes, how long its longest statement runs, whether its prose is binding, and whether the owner asked for a review. Rules, read top to bottom, stop at the first one that fits and pick one of four check levels. The lowest level runs only automatic checks for structure and style. Higher levels add a model that rewrites the text for the reader, and then repeated review passes in which a fresh reader restates the text and reports problems. The document also sets the steps, the record of each review, and the rules for when reviews stop. The numeric limits in the rules are provisional, and the owner sets them once a test corpus tunes them.

Prose 2,660 words by `wordCount` (the stranger's estimate: about 3,300); IR 160 claims; 9 findings from the stranger and 2 from the restatement check, 11 in all, 4.1 per thousand words. Restatement: one mismatch. Listed passages: none. Contradictions 0, undefined term 1 (finding 6), paraphrase-test findings 2 (the check's items; the stranger found none); verdict: not readable for RD-4. Omissions noticed, not counted: 6.

The mismatch: the restatement gave the stranger rounds to every level above the first; the D1 row renders only, and the rounds begin at D2 (C28). The stranger relied on the D2 row, "D1, then the stranger rounds under the Rounds section", and put the error down to its own restatement; the prose did not invite it. First occurrence; no structural fix is owed.
Mismatches: C28

Restatement check, `node scripts/lint.mjs --restatement docs/branch-point.review.md --round 4`: 2 items, U1 ("limits") and U2 (a repeated sentence).

Signals script after the `Mismatches:` line: signal 1 stands from rounds 1 to 3; no claim recurs. Signal 4 stands by reading from round 3; this round found no contradiction.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | stranger rounds at every level above the first (C28) | restatement | declined: the prose did not invite it; the D1 row renders only, and the D2 row reads "D1, then the stranger rounds". The mismatch counts |
| 2 | the plain purpose's second sentence holds two claims (C2) | SP-01 | declined: SP-27 holds the plain purpose to two sentences, and the sentence states one fact, who reads the document; round 1's decline 3 stands on the same sentence |
| 3 | the Status sentence with "while" (C4) | SP-01 | declined: a document's Status line is a form that is not a defect |
| 4 | BP-07 and BP-08 unnamed at first use (C156) | SP-05 | fixed: each links the Rules section |
| 5 | which threshold applies to which reader (C156) | SP-03 | fixed: "A short report is one under its reader's threshold: row BP-07's for RD-1, row BP-08's for RD-3." |
| 6 | decline, accepted and decision undefined | SP-04 | fixed: step 2 says "each finding the reasoning role declined so far" (C46); step 4 links the decision and adds "A decision on a finding is fixed, or declined with a reason." (C162); "accepts" in step 6 is the instance's plain answer |
| 7 | the next round opened by a commit (C161) | SP-18 | fixed: "The reasoning role then opens the next round at the commit that holds those fixes." |
| 8 | "Then the next round opens." repeats (C69) | SP-26 | fixed: C69 cut; C161 carries the opening |
| 9 | the IR-only sentence repeats BP-00's result (C159) | SP-26 | declined: the sentence is round 3's answer to a contradiction four rounds held. BP-00's cell says no later row applies, but a reader applied BP-03 and BP-04's reason to every document. The sentence names those two rows, so the exclusion cannot be missed |
| U1 | "The numeric limits in the rules are provisional" (T13) | paraphrase test | declined: the plain word for the thresholds' numbers, not the text's term for the round limit |
| U2 | "This document decides which checks each text gets." repeats the plain purpose (80 percent) | paraphrase test | declined: the purpose holds no term the text introduces; repeating it shows no passage that can only be repeated |

Step 5, `npm run check -- docs/branch-point.md --base 31c5133`, on the fixed text:
Checks: 0 sentences over 25 words; 160 of 160 claims mapped; 4 claims changed, 0 missing, 0 stale.

Claims after fixes: 160 (C69 cut; C162 added). Prose after fixes: 2,675 words. Structural fixes owed: none. Decided claims the fixes reworded, for the owner at acceptance: C46, C161; C156 is inferred.

Confirmation: 4 of 5 fixes hold. Not held: 6. Declines accepted: 6 of 6. New defects: 0.

The instance read both files in full at fix commit c82f9f9 and accepted all six declines, C159's included. The confirmation's fix, IR first, before round 5 opens:

- Fix 6 did not hold: step 5 still fixed "each accepted finding", while step 4's new sentence allows a decision of fixed or declined only. Re-fixed: "The reasoning role fixes each finding not declined under the specification's fix rules, the IR first." (C58)

Step 6's check, `npm run check -- docs/branch-point.md --base c82f9f9`:
Checks: 0 sentences over 25 words; 160 of 160 claims mapped; 1 claims changed, 0 missing, 0 stale.

Prose after the confirmation's fix: 2,676 words; IR 160 claims. Decided claim reworded after confirmation, for the owner at acceptance: C58.

Signals script after the confirmation line: signal 1 stands, now with fixes not held in rounds 1 to 4. Signal 4 stands by reading.

### Round 5, count 1, 2026-11-02

The round reads the text at its opening commit, named in the brief, under v1.11 at commit 12ff480. Prose 2,676 words; IR 160 claims; unratified terms 1 (T34). Human reader for the paraphrase test: the human owner. Stranger: pending, a fresh instance.

Declines carried in the round 5 brief: v1.9 round 1's F3; round 1's 3, 14 and 16; round 2's 1 and 2; round 4's 1, 2, 3 and 9, each with its reason. Not carried: the restatement-check items. The brief names the passages round 4 and its confirmation changed, the departure kept for this count. Passages awaiting restatement: none.

Stranger model: claude-haiku-5-5, a fresh instance, reading at commit da5136d. It wrote its restatement before it opened the IR and made no call outside its brief.

Restatement:

> The problem is how much checking a written text needs before its reader gets it. Too little checking lets errors and unclear claims through. Too much costs time on short texts that carry little risk. The text sorts each document into one of several check levels. The lowest level runs only an automatic checker. Higher levels also rewrite the prose for the reader, then send fresh reviewers to read the text and report what they understood. The choice depends on who reads the text, what kind of text it is, how many claims it makes, whether it uses terms the owner has not approved, and whether the owner asked for a review. An ordered list of rules picks the first match. The text also sets the steps of a review, the records each step writes, and when a review stops. The human owner sets the numeric limits, which stay provisional until a test set tunes them.

Prose 2,676 words by `wordCount` (the stranger's estimate: about 2,770); IR 160 claims; 4 findings from the stranger and 1 from the restatement check, 5 in all, 1.9 per thousand words. Restatement: no mismatch. Listed passages: none. Contradiction 1 (finding 3), undefined term 1 (finding 2), paraphrase-test findings 1 (the check's item; the stranger found none, and calls its own use of "claims" and "terms" its lapse); verdict: not readable for RD-4. Omissions noticed, not counted: 7.
Mismatches: none

Restatement check, `node scripts/lint.mjs --restatement docs/branch-point.review.md --round 5`: 1 item, W1 ("limits").

Signals script after the `Mismatches:` line: signal 1 stands from rounds 1 to 4; no claim recurs. By reading, signal 4 stands: finding 3 is a contradiction in step 5 and step 6, the passage rounds 3 and 4 touched.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | "stranger" first used in the Purpose without a link | SP-04 | fixed: linked there |
| 2 | "recurring" undefined (C59) | SP-04 | fixed: "A recurring claim is one that mismatches named in two rounds of the text's counts, the part of the second signal the script reads." (C163) |
| 3 | the fix commit holds "every fix the checks call for", yet step 6 fixes later on the fix commit as base (C62, C160) | SP-25 | fixed, settling the passage: the fix commit holds "every fix step 5's check calls for" (C62). Step 6's fixes are checked against the fix commit (C160) and held in the commit that opens the next round (C161), so the two commits are named apart |
| 4 | the 2026-10-25 owner ruling cited by date only | SP-05 | fixed: "recorded in the backlog's chunk 3 row", linked |
| W1 | "The human owner sets the numeric limits" (T13) | paraphrase test | declined: the plain word for the thresholds' numbers, not the text's term for the round limit, as round 4's U1 |

Step 5, `npm run check -- docs/branch-point.md --base da5136d`, on the fixed text:
Checks: 0 sentences over 25 words; 161 of 161 claims mapped; 2 claims changed, 0 missing, 0 stale.

Claims after fixes: 161 (C163 added). Prose after fixes: 2,708 words. Structural fixes owed: none. Decided claim the fixes reworded, for the owner at acceptance: C62.

Confirmation: 3 of 4 fixes hold. Not held: 3. Declines accepted: 0 of 1. New defects: 2.

The instance read both files in full at fix commit 85776c8. The confirmation's fixes, IR first, before round 6 opens:

- Fix 3 did not hold: the round's definition, "the fixes that follow", still reached step 6's fixes, while the fix commit held only step 5's. The fix commit is now scoped by its step: "The fix commit is the commit that holds step 5's fixes and every fix step 5's check calls for." (C62). Step 6's fixes stay in the commit that opens the next round (C161).
- N1 (SP-04, C163 did not parse): "A recurring claim is a claim named on the `Mismatches:` lines of two rounds of the text's counts, as the second signal counts."
- N2: "recurring claim" is the reasoning role's term, not owner wording. C163 now reads `[proposed: this IR]`, with T35 and ask A3 for the owner, beside T34. Unratified terms: 2.
- W1, decline not accepted: the instance holds that "numeric limits" used a linked term, whatever sense was meant. The decline stands: the fourth condition counts a passage the stranger cannot restate without a term the text introduces, and the instance's own word for the numbers, "thresholds", shows it could. Recorded for the owner with the instance's reason.

Step 6's check, `npm run check -- docs/branch-point.md --base 85776c8`:
Checks: 0 sentences over 25 words; 161 of 161 claims mapped; 2 claims changed, 0 missing, 0 stale.

Prose after the confirmation's fixes: 2,707 words; IR 161 claims. Decided claim reworded after confirmation, for the owner at acceptance: C62.

Signals script after the confirmation line: signal 1 stands, now with fixes not held in rounds 1 to 5. Signal 4 stands by reading.

### Round 6, count 1, 2026-11-02

The round reads the text at its opening commit, named in the brief, under v1.11 at commit 12ff480. Prose 2,707 words; IR 161 claims; unratified terms 2 (T34, T35). Human reader for the paraphrase test: the human owner. Stranger: pending, a fresh instance.

Declines carried in the round 6 brief: v1.9 round 1's F3; round 1's 3, 14 and 16; round 2's 1 and 2; round 4's 1, 2, 3 and 9, each with its reason. Not carried: the restatement-check items. The brief names the passages round 5 and its confirmation changed, the departure kept for this count. Passages awaiting restatement: none.

Stranger model: claude-haiku-5-5, a fresh instance, reading at commit 475ad72. It wrote its restatement before it opened the IR and made no call outside its brief.

Restatement:

> The problem: texts that reach a reader get different amounts of checking, and the document must decide how much each one gets. A text's kind, its reader, its length and whether the owner asked for a review set the amount. The document sets three levels: mechanical checks of structure and wording only; mechanical checks plus a rewording of the prose for the reader; and both of those plus repeated fresh-reader reviews. A rule table takes the text's properties and returns one level, using the first row whose condition holds. The document also sets the steps of a review, the lines the review writes, and the instructions given to each fresh reader. The owner sets the numbers in the rules' conditions, such as word counts and claim counts. Those numbers are provisional until a test corpus tunes them.

Prose 2,707 words by `wordCount` (the stranger's estimate: about 2,640); IR 161 claims; 10 findings from the stranger and 2 from the restatement check, 12 in all, 4.4 per thousand words. Restatement: no mismatch. Listed passages: none. Contradiction 1 (finding 4), undefined term 1 (finding 7), paraphrase-test findings 2 (the check's items); verdict: not readable for RD-4. Omissions noticed, not counted: 4.
Mismatches: none

Restatement check, `node scripts/lint.mjs --restatement docs/branch-point.review.md --round 6`: 2 items, V1 (term) and V2 (repeat).

The stranger also names two phrases of its own restatement as terms the text introduces: "mechanical checks" and "rule table". Neither is a finding. Each is a plain description. The restatement states each one's content in its own words: "checks of structure and wording only" and "takes the text's properties and returns one level". No passage resisted restatement.

Signals script after the `Mismatches:` line: signal 1 stands from rounds 1 to 5; no claim recurs. By reading, signal 4 stands: finding 4 is a contradiction in the Purpose's cost sentence, a passage round 5's confirmation fixes touched.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | RD-1 and RD-3 bare in C156 | SP-05 | fixed: "RD-1 (the owner, in conversation)" and "RD-3 (a delegating agent)" (C156) |
| 2 | "rounds" relied on in the Purpose before the Rounds section | SP-04 | fixed: linked to the Rounds section there |
| 3 | "short report" used one sentence before its definition (C13, C156) | SP-04 | fixed: C156 now precedes C13. Both moved to the BP-09 bullet under "Why each rule", with finding 4's fix |
| 4 | a short report costs one pass of the lint, yet BP-02 and BP-05a give it D2 or D1 (C13) | SP-25 | fixed, by rephrasing, not adding: "Under BP-09, a short report to a reader who shares the conversation costs one pass of the lint." (C13). The first matching row applies, so BP-09 holds only where BP-02 and BP-05a do not. The lint's gloss moved to C11 |
| 5 | "the second signal" relied on in step 5 before its section | SP-04 | fixed: linked to "Meta-review signals" |
| 6 | step 6's sentence gives two duties (C154) | SP-01 | fixed: split into C154 and C164 |
| 7 | "readable verdict" undefined in step 7 (C70) | SP-04 | fixed: linked to the verdict's definition |
| 8 | the table writes the `Checks:` line at step 5, but step 5 names no duty | SP-18 | fixed: "The reasoning role writes the `Checks:` line again." (C165) |
| 9 | status lines under a heading about the review record's lines | SP-11 | fixed: the subsection is retitled "The review record's lines and the status lines" |
| 10 | BP-07, BP-08 and BP-09 bullets repeat "an IR under the thresholds as it stands" (C120, C122) | SP-26 | fixed: cut from the BP-09 bullet. "BP-09 is the proportional-verification case." (C122) |
| V1 | "word counts and claim counts" uses "Count" (T12) | paraphrase test | declined: the plain sense of counting, not the text's term for a sequence of rounds |
| V2 | "Those numbers are provisional until a test corpus tunes them." repeats C6's prose sentence (75 percent) | paraphrase test | declined: the sentence holds no term the text introduces, and it replaces the linked "evaluation corpus" with the stranger's own words |

Two notes from the report, neither a finding:

- The brief lists two forms that the prose's list of non-defect forms does not. The text provides for this. The reasoning role adds to the brief any form the text under review needs, and quotes it in the review record (C97, C98). The count's header quotes both. No change.
- The letters in the `Checks:` and `Confirmation:` forms were not defined. Fixed by C166: "The capital letters in each form stand for the counts the line reports."

Step 5, `npm run check -- docs/branch-point.md --base 475ad72`, on the fixed text:
Checks: 0 sentences over 25 words; 164 of 164 claims mapped; 8 claims changed, 0 missing, 1 stale.

The stale claim is C122. Its IR claim lost its second half. Its prose sentence already read "BP-09: the proportional-verification case." The prose sentence for the cut half is gone. No defect.

The lint's new warning on step 5 (SP-23, "Meta-review" first used without a link) reads the anchor `#meta-review-signals` inside a link's target. The warning is a false positive. Recorded, not fixed.

Claims after fixes: 164 (C164, C165 and C166 added). Prose after fixes: 2,723 words. Structural fixes owed: none. Decided claims the fixes reworded, for the owner at acceptance: C11, C13, C122 and C154. Decided claims the fixes added: C164 (split from C154) and C165.

Confirmation: 6 of 10 fixes hold. Not held: 4, 5, 7, 9. Declines accepted: 2 of 2. New defects: 1.

The instance read both files in full at fix commit 7c4afd0. The four fixes not held were each made in the prose and not in the IR. Recorded as an edge: round 6's fix pass fixed the prose ahead of the IR on findings 4, 5, 7 and 9, the IR-first rule inverted. The confirmation's fixes, IR first, before round 7 opens:

- Fix 4 did not hold: relation R5 still said a report under the thresholds takes D0. R5 now reads "so a report under them that reaches BP-09 takes D0, one pass of the lint."
- Fix 5 did not hold: C163 still used "the second signal", which the IR's Terms list does not hold. Cut: C163 reads "A recurring claim is a claim named on the `Mismatches:` lines of two rounds of the text's counts." The prose link goes with it, and so does the lint's false positive on step 5.
- Fix 7 did not hold: "readable verdict" in C70 had no Terms entry. Added T36, "Verdict", defined at the specification's section "The verdict", as the prose already links it. Decided by that source; no ask.
- Fix 9 did not hold: the IR heading still read "The review record's lines". It now matches the prose: "The review record's lines and the status lines".
- N1 (SP-11): C156, the short report's definition, sat in "Why each rule", a section of reasons. C156 moves to the Rules section, after the table, where rows BP-07 and BP-08 stand. It still precedes C13 in the BP-09 bullet. The stranger suggested the Purpose or the Inputs; the Rules section holds the two rows the definition names.
- Declines V1 and V2 accepted.

Step 6's check, `npm run check -- docs/branch-point.md --base 7c4afd0`:
Checks: 0 sentences over 25 words; 164 of 164 claims mapped; 1 claims changed, 0 missing, 0 stale.

Prose after the confirmation's fixes: 2,718 words; IR 164 claims; unratified terms 2 (T34, T35). No decided claim reworded after confirmation.

Signals script after the confirmation line: signal 1 stands, now with fixes not held in rounds 1 to 6. Signal 4 stands by reading.

### Round 7, count 1, 2026-11-02

The round reads the text at its opening commit, named in the brief, under v1.11 at commit 12ff480. Prose 2,718 words; IR 164 claims; unratified terms 2 (T34, T35). Human reader for the paraphrase test: the human owner. Stranger: pending, a fresh instance.

Declines carried in the round 7 brief: v1.9 round 1's F3; round 1's 3, 14 and 16; round 2's 1 and 2; round 4's 1, 2, 3 and 9, each with its reason. Not carried: the restatement-check items. The brief names the passages round 6 and its confirmation changed, the departure kept for this count. Passages awaiting restatement: none.

Stranger model: claude-haiku-5-5, a fresh instance, reading at commit 87fac4c. It wrote its restatement before it opened the IR and made no call outside its brief.

Restatement:

> The problem: a text reaches its reader only after some checking, and this text decides how much checking each one gets. Each text is first turned into a structured list of its statements, requests and words the owner has not yet approved. Ordered rules, the first match winning, then pick one of four checking levels: a mechanical check alone; that check plus a plain-prose rewrite for the reader; that plus fresh-reader reviews, each retelling the text in its own words and reporting mismatches; or those reviews with the rewrite done by the working agent. The rules test who the reader is, whether the owner asked for a review, whether the text sets binding rules, and whether the counts pass set limits. The text also sets the review steps: check, brief a fresh reviewer, record its report, fix, confirm the fixes, and close with stopping signals. The owner sets the limits, which stay provisional until a test corpus tunes them.

Prose 2,718 words by `wordCount` (the stranger's estimate: about 2,800); IR 164 claims; 9 findings from the stranger and 3 from the restatement check, 12 in all, 4.4 per thousand words. Restatement: no mismatch. Listed passages: none. Contradiction 1 (finding 5), undefined terms 0, paraphrase-test findings 3 (the check's items; the stranger found none, and owns its everyday use of "counts"); verdict: not readable for RD-4. Omissions noticed, not counted: 4.
Mismatches: none

Restatement check, `node scripts/lint.mjs --restatement docs/branch-point.review.md --round 7`: 3 items, Z1 ("counts"), Z2 ("limits") and Z3 (a repeat of the plain purpose).

Signals script after the `Mismatches:` line: signal 1 stands from rounds 1 to 6; no claim recurs. By reading, signal 4 stands: finding 5 is a contradiction in step 2, a passage round 2's fix touched (C45).

Finding 5 settled. The Reader line names RD-4, and its second sentence names the human owner (C142). Steps 2 and 3 asked for the human reader "the text's Reader line names", and the stranger took the Reader line to be its first sentence. C45 now asks for "the human reader the text names for its reader", within case 015 change 26. A new sentence points to this text's answer: "This text names the human owner for its reader, in the Reader line's second sentence." (C167, inferred by R7 from C142). No rule is added. A text that names no human reader stays the change 26 gap, listed for the owner with its proposed wording.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | the plain purpose states two decisions (C1) | SP-01 | fixed: the review clause cut; "This document decides how much checking a text gets before it reaches its reader." The Rounds section states the review |
| 2 | "The Versions section lists the versions." (C5) | SP-26 | fixed: cut. Round 2's void reading raised it too, as advisory |
| 3 | "rendering" used in the Purpose before its meaning (C11) | SP-04 | fixed: linked to the methodology vocabulary's entry; T37 added to the IR's Terms, decided by that source |
| 4 | "they" in the Rounds introduction (C33) | SP-03 | fixed: "the scripts the reasoning role runs and the lines it writes"; the reasoning role's link moves to this first use |
| 5 | the steps ask for a human reader the Reader line does not name (C45, C49) | SP-25 | fixed: C45 reworded and C167 added, as above |
| 6 | SP-02 to SP-04 named only inside a range; SP-02 bare at its first use (C150) | SP-05 | fixed: "The 25-word limit of SP-02 (sentence length) binds the sentences of the prose." The range names and links its two ends, and the linked rule table names each row between |
| 7 | the IR-only sentence holds two claims (C159) | SP-01 | fixed: split into C159 and C168, "Rows BP-03 and BP-04 never apply to such a document." Round 4's 9 declined an SP-26 finding, not this one |
| 8 | five case numbers unlinked in Versions | SP-05 | fixed: cases 012, 010, 011, 009, 008 and 007 linked to their files |
| 9 | C141 repeats C6's tuning of the thresholds | SP-26 | fixed: "The dispatch log is the data the evaluation corpus tunes against." |
| Z1 | "whether the counts pass set limits" uses "Count" (T12) | paraphrase test | declined: the plain noun for the numbers the rules test, not the text's term for one review's rounds, as round 6's V1 |
| Z2 | "set limits" and "the limits" use "Limit" (T13) | paraphrase test | declined: the plain word for the thresholds' numbers, as round 5's W1; the restatement says what they are, "provisional until a test corpus tunes them" |
| Z3 | the first sentence repeats the plain purpose (73 percent) | paraphrase test | declined: the plain purpose holds no term the text introduces, as round 1's P4 and round 3's R1 |

Step 5, `npm run check -- docs/branch-point.md --base 87fac4c`, on the fixed text:
Checks: 0 sentences over 25 words; 165 of 165 claims mapped; 8 claims changed, 0 missing, 0 stale.

The lint warns once more on the Versions row of v1.10: SP-23 reads "meta-review" inside the file name of the case 012 link. The warning is a false positive, as in round 6. Recorded, not fixed.

Recorded as an edge: the commit that opened round 7, 87fac4c, left both status lines at round 6. The prose now reads `under review (v1.11, round 7)`, and the IR's Status parenthesis reads round 7's fix pass.

Claims after fixes: 165 (C5 cut; C167 and C168 added). Prose after fixes: 2,723 words. Structural fixes owed: none. Decided claims the fixes reworded, for the owner at acceptance: C33, C45, C141, C150 and C159. Decided claims cut: C5. Decided claim added: C168 (split from C159).

Confirmation: 8 of 9 fixes hold. Not held: 6. Declines accepted: 2 of 3. New defects: 2.

The instance read both files in full at fix commit 0107d94. The confirmation's fixes, IR first, before round 8 opens:

- Fix 6 did not hold: the range "SP-01 (one claim per sentence) to SP-05 (identifiers named)" was SP-02's first use, and SP-03 and SP-04 stayed bare. The bullet now names each row: SP-01 (one claim per sentence), SP-02 (sentence length), SP-03 (referents named), SP-04 (terms defined) and SP-05 (identifiers named). The next bullet's range gets the same treatment, naming SP-09 (no chained clauses) and SP-10 (headers state their contents). C150 drops the name it had added: "The 25-word limit of SP-02 binds the sentences of the prose." C86, in the IR, keeps its ranges of the style specification's rows; it names them as rows of that table.
- N1 (term order): T37 sat before T36 in the IR's Terms. The terms are now in order.
- N2 (SP-03, "for its reader" could name RD-4 or the owner, C167): C167 reads "This text names the human owner as its human reader, in the Reader line's second sentence."
- Z3, decline not accepted: the instance holds that C55 counts a repeated sentence under the fourth condition. The decline stands on round 1's P3 and P4 reason. C55 records the check's item as a finding, and the reasoning role decides each finding. The fourth condition counts a passage the stranger cannot restate without a term the text introduces; a repeated plain sentence shows no such passage. Recorded for the owner with the instance's reason.
- Declines Z1 and Z2 accepted.

Step 6's check, `npm run check -- docs/branch-point.md --base 0107d94`:
Checks: 0 sentences over 25 words; 165 of 165 claims mapped; 2 claims changed, 0 missing, 0 stale.

Prose after the confirmation's fixes: 2,740 words; IR 165 claims; unratified terms 2 (T34, T35). Decided claim reworded after confirmation, for the owner at acceptance: C150.

Signals script after the confirmation line: signal 1 stands, now with fixes not held in rounds 1 to 7. Signal 4 stands by reading.

### Round 8, count 1, 2026-11-02

The round reads the text at its opening commit, named in the brief, under v1.11 at commit 12ff480. Prose 2,740 words; IR 165 claims; unratified terms 2 (T34, T35). Human reader for the paraphrase test: the human owner. Stranger: pending, a fresh instance.

Declines carried in the round 8 brief: v1.9 round 1's F3; round 1's 3, 14 and 16; round 2's 1 and 2; round 4's 1, 2, 3 and 9, each with its reason. Round 4's 9 now sits on two sentences, after round 7 split C159; its ground, that the sentences repeat BP-00 to answer an old contradiction, stands, so it carries with its description updated. Not carried: the restatement-check items. The brief names the passages round 7 and its confirmation changed, the departure kept for this count. Passages awaiting restatement: none.

Stranger model: claude-haiku-5-5, a fresh instance, reading at commit 76c05f5. It wrote its restatement before it opened the IR.

Side-effect call: after its reading, the stranger called one tool its brief bars, the environment documentation index. It reported the call itself and says no finding depends on it. The call changed no file. Recorded as an edge, as round 2's call was.

Restatement:

> This text decides how much checking a piece of writing gets before its reader sees it. A script reads six facts about each piece: who reads it, whether it is a report or a document, how many separate statements it makes, whether it asks the reader for decisions, whether its wording states binding rules, and whether the owner asked for a review. From these facts it picks one of four levels. The lightest runs a mechanical check and delivers the structured form as it stands. The next adds a plain-language rewrite for the reader. The two heaviest add review passes by a fresh reader. In one of them, the agent running the process does the rewrite itself, because a rewrite could change binding wording. In each review pass, a fresh reader restates the text, reports where the restatement disagrees with the statements and where the wording breaks the style rules, and the fixes are then checked by that reader. The text also sets the record of each pass, when the process stops, and the style rules reviewers check. The rule conditions' numbers are provisional until the test corpus tunes them; you set them.

Prose 2,740 words by `wordCount` (the stranger's estimate: about 2,800); IR 165 claims; 10 findings from the stranger and 2 from the restatement check, 12 in all, 4.4 per thousand words. Restatement: two mismatches. Listed passages: none. Contradiction 1 (finding 6), undefined terms 3 (findings 7, 9 and 10), paraphrase-test findings 2 (the check's items; the stranger found none, and owns its use of "restatement"); verdict: not readable for RD-4. Omissions noticed, not counted: 9.

The mismatches, each counting under the first condition though the stranger put both down to its own restatement. First, the restatement had the round's stranger check every fix; step 6 checks each fix not awaiting restatement (C65). The stranger relied on the round's definition (C31), which said "those fixes", so the prose invited the reading; finding 6 fixes it. Second, the restatement gave the dispatcher six inputs; the Inputs table holds nine, among them proposed terms (C20), longest claim (C22) and the `ir-only` owner flag (C143). The stranger relied on the longest-claim row; the prose did not invite the reading.
Mismatches: C65 (relied on C31), C20 (relied on C22)

Restatement check, `node scripts/lint.mjs --restatement docs/branch-point.review.md --round 8`: 2 items, AA1 ("restatement") and AA2 (a repeat of the plain purpose).

Two of this round's undefined terms, "changed claim" and "calibrations", were in round 2's void reading (its 6 and 11). Round 2's entry gave both no fix, on reasons that did not hold: the base was named for round 1 and step 5 only, and the style specification's rows date their calibrations without defining the word. Both are taken up now. The void reading's findings were advisory, not decided, so the second signal's declined-finding part does not read them; noted for the owner.

Signals script after the `Mismatches:` line: signal 1 stands from rounds 1 to 7; no claim recurs. By reading, no new fourth-signal instance: finding 6's contradiction sits in C31 and C65, which no fix touched. Signal 4 stands from earlier rounds.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | the round's stranger checks every fix (C65, relying on C31) | restatement | fixed with finding 6: the prose invited it |
| 2 | six inputs, against the table's nine (C20, relying on C22) | restatement | declined: the prose did not invite it; the Inputs table has nine rows. The mismatch counts |
| 3 | Rendering conditions linked to the file, not the section (C7) | SP-05 | fixed: linked to the section |
| 4 | IR used in the Type line before its expansion | SP-04 | fixed: expanded and linked in the Type line; the Purpose keeps the link on IR |
| 5 | "protects proportional verification" (C12) | SP-08 | fixed: "The branch point is how the project applies proportional verification." |
| 6 | the round's definition checks "those fixes", against step 6 (C31, C65) | SP-25 | fixed: "A round is one fresh stranger's reading of the text, the fixes that follow, and that stranger's check of the fixes step 6 names." (C31) |
| 7 | "changed claim" undefined after round 1 (C39) | SP-04 | fixed: "The claims check looks for a prose sentence that carries each claim changed since the check's base, the commit the check compares against." Step 1 names the base before round 1 (C40); step 5 names it after (C61) |
| 8 | step 7's final-round rules apply with no actor (C70) | SP-18 | fixed: "the reasoning role applies the specification's rules for the final round" |
| 9 | "calibrations" undefined (C86) | SP-04 | fixed: "A calibration is a dated refinement of a style rule's scope, recorded in the rule's row." (C169, inferred by R8), before the brief's list of rows |
| 10 | "normative document" drops BP-02a's purpose condition (C113) | SP-04 | fixed: "so an IR with purpose `document` and `Normative: yes` takes D3 whatever the owner flag" |
| AA1 | the restatement uses "restatement" (T20) | paraphrase test | declined: "a fresh reader restates the text" says what it is in plain words, and the stranger owns the slip; no passage resisted, as the specification's round 6 Y3 |
| AA2 | the first sentence repeats the plain purpose (70 percent) | paraphrase test | declined: the plain purpose holds no term the text introduces, as round 1's P4, round 3's R1 and round 7's Z3 |

Step 5, `npm run check -- docs/branch-point.md --base 76c05f5`, on the fixed text:
Checks: 0 sentences over 25 words; 166 of 166 claims mapped; 6 claims changed, 0 missing, 0 stale.

The lint's warning on the v1.10 Versions row, "meta-review" in a case file name, is the false positive recorded in round 7.

Claims after fixes: 166 (C169 added). Prose after fixes: 2,781 words. Structural fixes owed: none. Decided claims the fixes reworded, for the owner at acceptance: C12, C31, C39, C70 and C113.

Confirmation: 9 of 9 fixes hold. Not held: none. Declines accepted: 2 of 3. New defects: 1.

The instance read both files in full at fix commit c058dee. The confirmation's fix, IR first, before round 9 opens:

- N1 (a term the text defines without a Terms entry or an ask): "calibration" is defined in the text, so it is a term the text introduces. T38 is added, "Calibration: a dated refinement of a style rule's scope, recorded in the rule's row.", proposed by this IR. C169 is now `[proposed: this IR]`. Ask A4 asks the owner to ratify or strike it, as A2 and A3 do for T34 and T35. Unratified terms: 3. This replaces the round 8 entry's note that the word would be ratified with A1.
- AA2, decline not accepted: the instance holds that the fourth condition also counts repeated sentences. The decline stands on round 1's P3 and P4 reason, as for round 7's Z3. Recorded for the owner with the instance's reason.
- Declines 2 and AA1 accepted.

Step 6's check, `npm run check -- docs/branch-point.md --base c058dee`:
Checks: 0 sentences over 25 words; 166 of 166 claims mapped; 0 claims changed, 0 missing, 0 stale.

Prose after the confirmation's fix: 2,781 words; IR 166 claims; unratified terms 3 (T34, T35, T38).

Signals script after the confirmation line: round 8 held every fix, so signal 1 does not widen; it stands from rounds 1 to 7. Signal 4 stands by reading.

### Round 9, count 1, 2026-11-02

The round reads the text at its opening commit, named in the brief, under v1.11 at commit 12ff480. Prose 2,781 words; IR 166 claims; unratified terms 3 (T34, T35, T38). Human reader for the paraphrase test: the human owner. Stranger: pending, a fresh instance. Round 9 is the second to last before the limit.

Declines carried in the round 9 brief: v1.9 round 1's F3; round 1's 3, 14 and 16; round 2's 1 and 2; round 4's 1, 2, 3 and 9; round 8's 2, each with its reason. Not carried: the restatement-check items. The brief names the passages round 8 and its confirmation changed, the departure kept for this count. Passages awaiting restatement: none.

Stranger model: claude-haiku-5-5, a fresh instance, reading at commit 3644405. It wrote its restatement before it opened the IR and made no call outside its brief.

Restatement:

> This text decides how much checking a document receives before a reader sees it. Each document arrives with facts: who will read it, whether it is a report or a document, how many statements and new terms it holds, how many requests it makes, how long its longest statement runs, whether it is binding, and whether the owner asked for review. A table of rules matches those facts, top row first, to one of several check packages. The packages differ by how much checking runs: a mechanical check alone; that check plus a rewrite of the text into prose for the reader; or that plus repeated reviews by a fresh reader. Each review round has a fixed sequence: check the text, have a fresh reader restate it and list mismatches with the text, fix the findings, then have that reader confirm the fixes. The text also fixes how each round is recorded and when a review closes. The numeric thresholds in the rules are provisional until a test corpus tunes them, and the owner sets them.

Prose 2,781 words by `wordCount` (the stranger's estimate: about 3,200); IR 166 claims; 5 findings from the stranger and 2 from the restatement check, 7 in all, 2.5 per thousand words. Restatement: no mismatch. Listed passages: none. Contradictions 0, undefined terms 2 (findings 3 and 4), paraphrase-test findings 2 (the check's items; the stranger found no passage that resisted, and owns its use of "round"); verdict: not readable for RD-4. Omissions noticed, not counted: 4.
Mismatches: none

Restatement check, `node scripts/lint.mjs --restatement docs/branch-point.review.md --round 9`: 2 items, BB1 ("round") and BB2 (a repeat of the plain purpose).

Signals script after the `Mismatches:` line: signal 1 stands from rounds 1 to 7; no claim recurs. No contradiction this round, so no new fourth-signal instance; signal 4 stands from earlier rounds.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | "a prose sentence that carries each claim" reads as one sentence for all (C39) | SP-03 | fixed: "The claims check looks, for each claim changed since the check's base commit, for a prose sentence that carries the claim." |
| 2 | "the human reader the text names for its reader" (C45) | SP-03 | fixed: C45 returns to case 015 change 26's own words, "the human reader the text's Reader line names". C167 points to this text's answer: "This text's Reader line names the human owner as that human reader, in its second sentence." The Orchestrator suggested adding "or the one the text names in its place"; that would cover a text whose Reader line names no human, the change 26 gap the owner holds, so the smaller text is kept |
| 3 | "listed passage" never tied to "passage awaiting restatement" (C50) | SP-04 | fixed: "Then the stranger restates each passage awaiting restatement in one sentence." |
| 4 | "mismatch" undefined (C75, C87) | SP-04 | fixed: "restatement mismatch" in full, linked to the specification's verdict section, in the record-lines table and the Stranger brief. T39 added to the IR's Terms, decided by that source |
| 5 | BP-05a credited with BP-03's stranger check (C116) | SP-03 | fixed: "a document with an unratified term already gets the stranger's check under BP-03, which fires before BP-05a" |
| BB1 | the restatement uses "round" (T11) | paraphrase test | declined: "Each review round has a fixed sequence" and the steps that follow say what a round is in plain words; the stranger owns the slip; no passage resisted, as the specification's round 5 X1 |
| BB2 | the first sentence repeats the plain purpose (78 percent) | paraphrase test | declined: the plain purpose holds no term the text introduces, as round 1's P4, round 3's R1, round 7's Z3 and round 8's AA2 |

Step 5, `npm run check -- docs/branch-point.md --base 3644405`, on the fixed text:
Checks: 0 sentences over 25 words; 166 of 166 claims mapped; 7 claims changed, 0 missing, 0 stale.

Claims after fixes: 166. Prose after fixes: 2,786 words. Structural fixes owed: none. Decided claims the fixes reworded, for the owner at acceptance: C39, C45, C50, C75, C87 and C116.

The confirmation is pending.
