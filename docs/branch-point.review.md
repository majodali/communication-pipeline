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
| 3 | 2,549 | 154 | | | pending |

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

