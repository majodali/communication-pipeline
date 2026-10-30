# Case 011: meta-review of the vision document, count 2

Instance of the [Evaluation case](../README.md) type, a [meta-review](../../docs/vocabulary.md#def-meta-review) record. Performed 2026-10-30 by a fresh communication-pipeline session with no part in the rounds, dispatched by the owner on the same day. [Case 009](009-meta-review-vision-rounds-2026-10-29.md) meta-reviewed count 1 of the same document.

| Field | Value |
|---|---|
| Case | 011 |
| Source text date | 2026-10-29 |
| Reader addressed | RD-4 |
| Origin | the methodology's vision document after the service review's corrections to its IR, re-rendered by the paraphraser for the changed claims; count 2, three stranger rounds under branch point v1.7, fixes IR first |
| Through the pipeline | yes: corrections IR first, re-rendering by the paraphraser under D2, three rounds to a readable verdict |
| Graded by | a fresh communication-pipeline session with no part in the rounds |

## Source text

Three files, not quoted: `docs/vision.md`, `docs/vision.ir.md` and `docs/vision.review.md` in the methodology repository at commit 9fbaff0, where count 2 closed. The round states were read from the commits 6f77d96 (the corrections) to 9fbaff0. `scripts/signals.mjs` was run on the record.

## Findings

The style rules named are SP-01 (one claim per sentence), SP-02 (sentence length), SP-03 (referent named), SP-04 (terms defined), SP-05 (identifier named or linked), SP-25 (contradiction) and SP-26 (excess words). "Step" means a step of branch point v1.7's Rounds section. An own mismatch is a restatement mismatch the stranger attributes to its own restatement.

| Round | New | Why |
|---|---|---|
| 1 | Four own mismatches (C6, C7, C13, C26); C80 (an agent changes the repository directly) against C102 (surfaces without a clone get tools that write nothing); C21 (the next step) and C69 (the write model) split under SP-01; C69's sentence at 27 words under SP-02; the P2-N002 plan unnamed; "the merged model" in C42 without a referent. | C21, C69 and C102 are service-review corrections. C21 packed three facts: the naming on 2026-10-28, the closure on 2026-09-16, the merge to main on 2026-10-29. C80 predates C102. |
| 2 | A prose-caused mismatch on C25 and C26 (the merge of the two approaches): "Allegro's approach" read as Allegro's modeling; C55 (chunk 1 closed) against C56 ("Once chunk 1 closes"); C58's "the review of the service" undated; C69's node unnamed. | "Allegro's approach" stood undefined from count 1's round-2 fixes. Nine strangers passed it. Round 1's fix 8 repeated it in C42. The correction to C55 left C56 stale. |
| 3 | Three own mismatches on five claims (C25; C57 and C84; C66 and C93); C31 (the service reads and validates plan state) and C34 (scope and budget) split under SP-01. | C31 is a correction written as a compound. C34 dates from count 1. Every claim on the `Mismatches:` line sits on a passage with an earlier mismatch (judgement b). |

Observations against the record.

1. The script reproduces the record's four signal readings. No line is unparsed.
2. No claims check is recorded in any round. Step 1 requires one before each round. The record gives the paraphraser's round trip, 100 of 100, instead. The script reads the absence as signal 1 clean.
3. The record reads "SP-02 warnings before round 1: none (mtool style, 0 violations)". The sentence carrying C69 had 27 words, over the 25-word warning. Round 1 returned its SP-02 finding. The tool's count is of violations, the 35-word flag.
4. The `(own)` suffix on the `Mismatches:` lines is the record's practice. Branch point v1.7 defines the line as claims or `none`. The record says round 3's stranger quoted each sentence it relied on. The record holds none of the quotes.
5. Round 3's entry reads "Round 2's re-fix of C25 drew no finding". C25 stands on round 3's `Mismatches:` line.
6. Step 6 was not invoked. C26 stood on the `Mismatches:` lines of rounds 1 and 2, so step 6 made it a prose finding whatever the attribution. Round 2 fixed it by adding a definition. The round-2 instance confirmed that fix, which step 4 excludes for a step-6 fix. The re-fix was a rewording.
7. The SP-01 calibration added before round 3 is cited as "branch point v1.7, brief calibrations". V1.7 holds none; the brief's last paragraph allows a per-text form. The calibration exempts the parenthesis of the C25 re-fix. The re-fix and the rule that exempts it went to round 3 together.
8. Round 1's table counts 9 findings and 4 mismatches. Its entry lists six prose findings, numbered 4 to 9. The counts reconcile only if the four mismatch claims were three findings.
9. C103 to C106 are splits made in rounds 1 and 3, not corrections.

Case 009's changes in this count, by case 009's numbers.

1. The `Mismatches:` line (change 5). Worked. The script found both recurrences without a hand check.
2. The fixed confirmation form (change 16). Worked. All three lines parse. "A fix that holds in part is not held" settled round 1's C21 split.
3. The stranger model named (change 6). Applied; no comparison yet.
4. The SP-02 check before round 1 (change 17). Applied at the wrong threshold (observation 3). Round 1's SP-02 finding is the one it should have prevented.
5. The structural fix and `awaiting restatement` (changes 3 and 4). Not applied to the step-6 recurrence (observation 6). The record used "awaits restatement" for the re-fixes after confirmation. That use is sound. The round-3 entry then misreported it (observation 5).
6. The calibrations (changes 8, 9 and 11). No SP-18 or SP-26 finding and no SP-01 oscillation. The count cannot show whether they removed noise. No stranger flagged three sentences stating node P2-N010 done (C59, C97, C55).
7. The present-state rule (change 12). Bypassed. The corrections were not round fixes, and they left the done-state claims C97, C98 and C55 under "First steps".
8. The connective form (change 13). No split dropped a "because". Did not matter visibly.
9. Changes 2 (withdrawal), 14 and 15 (signals 4 and 3) and 18 (step 7 at the limit). Not exercised.

My judgement.

a. Why the signals fired. Signal 1: round 1's fix 4 split C21 and left the naming and the closure in one sentence, because the correction had packed three facts. Round 2's fix 1 defined "Allegro's approach" by a comma list inside a list of merging items, so the definition read as a third item. Both fixes added words to a compound. Signal 2: both recurrences sit on one passage, the merge. C26 drew mismatches in count 1's rounds 1, 7 and 9. Count 1's round-9 structural fix settled the timing; the undefined phrase surfaced next. The round-2 stranger reported it as a mismatch, not as an undefined term.

b. Own mismatches and the verdict. Round 3 returned readable with three own mismatches on five claims. All five sit on passages with an earlier mismatch: C25 in round 2 of this count; C57 and C84, the pilot order, in count 1's rounds 3, 4 and 8; C66 and C93 in count 1's round 4. Case 009 found self-attribution unreliable. This count adds five of five. Step 6 made C25 a prose finding in round 3. No rule says an own mismatch leaves the restatement matched. Case 009 counted count 1's round 6 as blocked by own mismatches alone. The readable verdict at round 3 therefore rests on an unwritten reading, and step 6 contradicts it for C25.

Signal 2 should keep counting own mismatches. C25's own mismatch in round 3 followed its prose-caused one in round 2.

Against that, a restatement of 200 words covers 102 claims. If every mismatch blocks, a text this size may never read readable. Proposal 1 exempts an own mismatch whose quoted sentence carries the IR's claim, except under step 6. Under it, round 3 is not readable.

c. The corrections. The corrections changed C21, C31, C55, C59, C69, C97 and C98 and added C102, outside any round. Eight of the eleven accepted prose findings sit on a corrected claim or on a claim the corrections contradicted (C56, C80). A ninth, C58's undated review, became ambiguous once the review had taken place. One of the two fixes not held was on a correction. Three patterns produced them. C21, C31 and C69 were written as compounds, and rounds split them. C55 changed state and left C56 stale; C59 and C97 now state one fact, and C55 restates both. C102 was added beside C80 without a reading of C80. Step 3 would have refused each as a round fix: a fix cuts before it adds, and a changed-state sentence moves under a header that names its state. An edit to a reviewed IR is a fix without the fix rules. It should carry them (proposal 9).

d. Convergence. The count converged. Findings per thousand words ran 5.6, 2.4 and 3.0. No round found an undefined term. Round 3 found no contradiction. Count 1 ran 28.4, 14.3 and 9.8 in its first three rounds and ended at 2.0. The comparison does not isolate the procedure: count 2 started from count 1's tenth-round text plus the corrections. Its round 1 ran at 2.8 times count 1's last rate, and five of its six prose findings are on corrections. The v1.7 changes that measure or report worked. The changes that bind a fix were bypassed or not applied.

Readability. The round-3 text with its fixes is readable for RD-4. From it I can state the direction, the decisions of 2026-10-28 and 2026-10-29, what exists, the gaps and the first steps. Remaining defects: node P2-N010 done stated three times (C59, C97, C55); "First steps" opens with three done-state sentences; C103, a register fact of 2026-10-29, sits under "Decisions taken on 2026-10-28"; C102 and C104, owner decisions of 2026-10-29, sit under "Gaps the roadmap closes", not under "Decisions taken on 2026-10-29". None is a contradiction or an undefined term. All trace to the corrections.

## Measures

Count 2, per round.

| Round | Prose words | IR claims | Findings | Per thousand words | Mismatches (claims) | Contradictions | Undefined terms | Accepted | Fixes not held | New defects at confirmation |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 1,610 | 100 | 9 | 5.6 | 4 own (C6, C7, C13, C26) | 1 | 0 | 6 | 1 of 6 | 1 |
| 2 | 1,636 | 102 | 4 | 2.4 | 1 prose-caused (C25, C26) | 1 | 0 | 4 | 1 of 4 | 1 |
| 3 | 1,656 | 102 | 5 | 3.0 | 3 own (C25; C57, C84; C66, C93) | 0 | 0 | 2 | 0 of 2 | 0 |

The two counts.

| Measure | Count 1 (v1.6) | Count 2 (v1.7) |
|---|---|---|
| Rounds | 10; limit reached | 3; readable |
| Findings | 129 | 18 |
| Findings per thousand words, rounds 1 to 3 | 28.4, 14.3, 9.8 | 5.6, 2.4, 3.0 |
| Findings per thousand words, last round | 2.0 | 3.0 |
| Restatement mismatches | 24 (14 own) | 8 (7 own) |
| Contradictions | 6 | 2 |
| Undefined terms | 27 | 0 |
| Accepted, declined, without disposition | 107, 8, 14 | 12, 0, 6 |
| Fixes not held at confirmation | 3 of 107 | 2 of 12 |
| New defects at confirmation | 8 | 2 |
| Claims-check runs recorded | 9 | 0 |
| Recurring mismatches within the count | 3 passages | 1 passage (C25, C26) |
| Own-mismatch claims on a passage with an earlier mismatch | 1 of 1 named | 5 of 5 in round 3 |
| Prose words | 1,338 to 1,489 | 1,610 to 1,656 |
| IR claims | 69 to 96 | 100 to 104 |
| Words per claim | 19.4 to 15.5 | 16.1 to 16.2 (15.9 after round 3's fixes) |
| Signals | 1, 2, 3, 4; limit | 1, 2 |
| Verdict | not readable at round 10 | readable at round 3, on an unwritten reading (judgement b) |

Between the counts the prose grew from 1,489 to 1,610 words and the IR from 96 to 100 claims. No signal measures that growth.

## Outcome

Proposed process changes. "Branch point" means v1.7; "specification" means the methodology's intermediate-representation specification.

1. The branch point's verdict sentence and the specification's Stranger rounds gain: "An own mismatch does not count against the verdict when the stranger quotes a prose sentence that carries the IR's claim. A mismatch that step 6 makes a prose finding always counts." Rationale: round 3's readable verdict rested on an unwritten reading, and step 6 contradicted it for C25. Recommended. Under it, count 2 would have run a round 4.
2. Step 2's sentence "The reasoning role writes the mismatch claims on one `Mismatches:` line per round, or `none`." gains: "An own mismatch's claim carries `(own)`. The review record quotes the prose sentence the stranger relied on." Rationale: observation 4; an attribution without its quote cannot be checked. Recommended.
3. Step 6's "in any two rounds" reads "in any two rounds of the text's counts". The signals script reads the `Mismatches:` lines of every count for signal 2. Rationale: the merge passage drew mismatches in six of thirteen rounds over two counts; four round-3 own claims recurred from count 1. Recommended.
4. Signal 2 keeps counting own mismatches. Rationale: judgement b. No change.
5. Step 6 gains: "Before each round from round 2, the reasoning role runs `scripts/signals.mjs` and applies step 6 to each claim it reports." Rationale: the C26 recurrence was mechanical at round 2 and went unapplied (observation 6). Recommended.
6. Step 4's "The reasoning role fixes again, before the next round, a fix the instance says does not hold." gains: "The record marks the second fix `awaiting restatement`. The next round's entry states whether that round names the fixed claim on its `Mismatches:` line or in a finding." Rationale: the record's practice, which misreported C25 (observation 5). Recommended.
7. The branch point's script sentence "The script reports a confirmation line it cannot parse as unparsed." gains: "The script reports a round with no claims-check line as unparsed." Rationale: observation 2. Recommended.
8. Step 1's "the reasoning role records the lint result in the review record" reads "the reasoning role records the number of sentences over 25 words". Rationale: observation 3. Recommended.
9. Step 3 gains: "The fix rules bind an edit to an IR whose Status is reviewed, outside a round. Such an edit cuts each claim it makes a duplicate and amends each claim it makes stale." Rationale: eight of eleven accepted prose findings came from the corrections (judgement c). Recommended.
10. The brief's sentence "Before each round, the reasoning role adds to the stranger brief any form the text under review needs." gains: "The review record quotes the form and names the finding or fix it bears on." Rationale: observation 7. Recommended.
11. The parenthesis calibration of round 3 enters SP-01's row in the style specification. Rationale: one instance, added for a pending fix, with no oscillation shown. Declined.

Owner's decision on the outcome: pending.
