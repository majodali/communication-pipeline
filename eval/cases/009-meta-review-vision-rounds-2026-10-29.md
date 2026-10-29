# Case 009: meta-review of the vision document rounds

Instance of the [Evaluation case](../README.md) type, a [meta-review](../../docs/vocabulary.md#def-meta-review) record. Performed 2026-10-29 by a fresh communication-pipeline session with no part in the rounds, dispatched by the owner on the same day.

| Field | Value |
|---|---|
| Case | 009 |
| Source text date | 2026-10-28 |
| Reader addressed | RD-4 |
| Origin | the methodology's vision document, drafted IR first from the owner's vision, rendered by the paraphraser under disposition D2, ten stranger rounds under branch point v1.6, fixes IR first |
| Through the pipeline | yes: IR first, rendering by the paraphraser under D2 (render and review), ten rounds to the limit |
| Graded by | a fresh communication-pipeline session with no part in the rounds |

## Source text

Three files, not quoted: `docs/vision.md`, `docs/vision.ir.md` and `docs/vision.review.md` in the methodology repository as they stood on 2026-10-28, when count 1 closed at the limit. The paraphraser's rendering as delivered before round 1 was read for comparison.

## Findings

Per round, what the round found that earlier rounds and their fixes had not caught. Claims are named at first use. The style rules are SP-01 (one claim per sentence), SP-02 (sentence length), SP-03 (referent named), SP-04 (terms defined), SP-05 (identifier named or linked), SP-08 (no rhetorical devices), SP-18 (a duty names its actor and trigger), SP-25 (contradiction) and SP-26 (excess words).

| Round | New | Why |
|---|---|---|
| 1 | 38 findings on the paraphraser's rendering: eight sentences over 25 words; nine names without link or definition; six duties without actor (C22, C23, C46, C57, C58, C68); six compounds; C4 (an agent is enlisted from any Claude surface) against C67 (a surface without a clone cannot commit); mismatches on C26 (the merge decision after the pilot) and the Asks section. | First read. The rendering kept the owner's list as compounds and passives. The eight long sentences are exactly the round-1 sentences over the lint's 25-word warning, by my count. |
| 2 | Mismatches on C8 (the planning/execution model as the primary source of progress truth); first-use links for project-orchestrator, its service and Allegro; seven compounds; one contradiction; fix 13 opened C40 (K-003, the Backlog rule, makes the Backlog the source of truth) with "Today". | Round 1's stranger flagged nine other names and passed these. Round 1's fix 3 marked C67 alone as present state, so unmarked present sentences read as target. |
| 3 | The pilot-order mismatch (finding 2); two contradictions on C82 (adversarial review has low efficiency) and C47 (the convergence machinery applies to prose only); duties on C69 (Standing constraint 1 needs a decision) and C56 (the task-pull loop before topics); "one model" against "the merged model". | Round 2 split C57 (the owner names the first adopter) into C57 and C84 (the first adopter's plan is the pilot), and its confirmation added "before the pilot starts": two pilot sentences now closed the Sequence list. The record ties both contradictions to "the same tense framing that the "Today" marker from round 1 introduced". |
| 4 | Pilot order again (finding 4, attributed by the stranger to itself; step 6); C66 (a surface without a clone cannot reach the service) read flat; C64 (the conceptual-model proposal as the closest document type) given its referent back; C50 (the plan model records where verification evidence lands) as a passive duty. | Round 3 added C85 (the roadmap document places the pilot) and left the pilot sentences in the list. Round 2's SP-26 cut of C64 had removed a referent. |
| 5 | C50 split into a duty and its ordering, C91; "implementation links"; founding ruling 1 unlinked; an appositive on chunk 1. | Round 4's confirmation fix gave C50 an actor. The stranger split the trigger from the duty under SP-01. |
| 6 | C50 and C91 rejoined, trigger first (finding 9); C29 (the plan model's tree) against C87 (the planning DSL's graph of outcomes), declined, then withdrawn at confirmation; three compounds (C65, C90, C47). | Round 5's split had parted a duty from its trigger. Round 3's split of C37 left C87 a free-standing sentence in the section that holds C29. |
| 7 | Merge timing on C26 again (finding 1; step 6); four term findings, one declined (Claude Duet); a trigger on C73 (the owner approves a stream). | Round 6's fix 7 had reworded C26. Every rewording since round 1 kept a claim narrower than the strangers' reading. |
| 8 | Pilot order a third time (step 6; the pilot sentences moved to the decisions section); C3 (an agent queries the service and claims a task) split again; Standing constraint 1 unlinked; actors on C18 (the owner amends a rule) and C89 (nothing constructed ahead of need). | Round 4's step-6 fix was a disclaimer and a rename: "both left the pilot sentences inside the list, where a reader takes list position as order". "Standing constraint 1" had stood unlinked since the round-1 rendering. |
| 9 | Merge timing on C26 a third time (step 6; the claim changed to "how and when"); C55 (chunk 1 closes) split into its nodes; "the service review" undefined; C68 (the literate style as roadmap work) recast without a duty; C64's phrase challenged under SP-26 again, declined. | Round 7's step-6 fix added actor, trigger and object and kept the narrower claim. "the service review" had stood since the round-1 rendering. |
| 10 | C8's "taking over from the Backlog" as a compound and a mismatch; C43 (the dispatch loop's stops) against C62 (no stop signal inside a stream); a trigger on C77 (the reasoning role drafts the IR). | All three sentences date from the round-1 rendering or round 1's split of C28. C8 had drawn round 2's mismatches; the record does not note round 10's as a recurrence. |

Observations against the record.

1. The counts reconcile. 129 findings are 107 accepted, 8 declined and 14 "not prose defects". The 14 are all restatement mismatches the strangers attributed to their own restatement.
2. The record's signal dates hold: signal 2 after round 4, signal 1 after round 4's confirmation, signal 4 after round 6, signal 3 after round 9's fixes.
3. The record misses one recurrence. Round 2's mismatches were "on C8", and round 10's mismatch was on C8 too. Step 6 (a mismatch on one passage in two rounds is a prose finding) applied and was not noted.
4. Round 3's confirmation line names two problems and counts one: "10 of 11 prose fixes hold in full; fix 4 held for C82 only, ... and fix 12 left C69 at 27 words."
5. Same-instance confirmation passed both step-6 rewordings that later recurred. Round 4's reads "the step-6 fix holds (the section no longer reads as a complete order)". Round 7's reads "6 of 6 fixes hold".
6. The IR's Status reads "rendered (paraphraser, 2026-10-28, ...". The specification's Stranger rounds reads "At the end of a count, the reasoning role sets the IR's Status to `reviewed`." The rule was not applied.
7. The record counted the withdrawn round-6 contradiction both for the verdict and for signal 4. The two uses are consistent.

Earlier meta-reviews' changes in this count.

1. Claims check with stale detection (case 008 change 1). Nine runs; 0 missing and 0 stale each time. The three fixes not held were incomplete fixes, not fixes absent from the prose. It caught nothing, and nothing it tests went wrong. Keep.
2. Same-instance confirmation (case 007 change 4). Ten runs; 3 fixes not held; 8 new defects noted; one decline reversed (round 1 finding 22); one finding withdrawn. It caught the most again. Its limit is observation 5.
3. Declined findings carried (case 007 change 5, case 008 change 3). None of the eight declines was raised again. Keep.
4. Step 6 without "in one form" (case 008 change 2). It fired four times, in rounds 4, 7, 8 and 9. The trigger worked. The fixes it prompted were the weak part, and the hand check missed C8.
5. The readable round's fixes confirmed (case 008 change 5). Not reached. The reasoning role applied it to round 10 at the limit by choice.
6. One status during rounds (case 008 change 4). The prose line reads "under review (v1, count 1 ended at round 10, limit reached; meta-review pending)". The form held in the prose. The IR Status did not follow (observation 6).
7. Connective prose for split reasons (case 007 change 6). Not applied to fixes. The round-1 rendering read "combines the two plan models, because Allegro's planning DSL demo may not match the project-orchestrator's model". Round 1 split it into C42 (the merged model combines the two plan models) and C72 (Allegro's demo may not match). "R23 added so C72's link to C42 is held in the IR." The prose lost the "because". Round 6's split of C47 kept "therefore".

My judgement.

a. Stopping rule. The three conditions are right. Leaving aside the mismatches strangers attributed to themselves, eleven findings blocked the verdict in rounds 7 to 10. Ten were accepted and fixed. The eleventh, Claude Duet, was declined as a product name. Four of the six blockers in rounds 8 to 10 sat on wording present since the round-1 rendering, which nine strangers had passed. A stranger samples the text; it does not exhaust it. At 96 claims each fresh stranger found about one residual defect, and each was real. The owner struck a finding-rate threshold on case 005, and this count gives no reason to revive it. The levers are the recurrences: rounds 8 and 9 repeated passages that a structural fix, one that moves the sentence or changes the claim rather than rewording it, would have closed. Rounds 8 and 9 also each carried an undefined term. No change I propose would have produced a readable round in this count.

Withdrawal. SP-25 tests whether two passages can both be followed. Round 6's decline reason cites the prose: the two models are "each named in its sentence". A contradiction its finder withdraws on the prose's own words is no longer found. A restatement mismatch differs: the confirming instance has read the IR and cannot restate as a stranger. A withdrawal should count for contradictions and undefined terms only. It would not have changed round 6, which still had two mismatches the stranger attributed to itself.

b. Recurring mismatches. Four step-6 fixes were tried. Two were rewordings: round 4's disclaimer and section rename, round 7's actor, trigger and object. Both recurred. Two were structural: round 8 moved the pilot sentences out of the list, and round 9 changed C26 to the reading every stranger made. Neither recurred. Two rounds and one round remained to show it, so the evidence is thin. The record names the mechanism: "a reader takes list position as order". The record names the other: "Every stranger reads the merge as following the pilot, which is true". A structural fix at the first recurrence would have saved rounds 8 and 9 their mismatch. The same instance cannot confirm such a fix, because it has read the IR.

c. Rule tensions. SP-01's own text says "one fact with two attributes is not two claims". A duty with its actor and trigger is one claim. SP-18 should prevail over SP-01 there, and the brief should say so.

C68 was not a duty. The owner stated the literate style as roadmap work. The strangers asked for actors in round 1 and a trigger in round 9. Round 9's fix removed the duty, "the SP-18 oscillation noted for the meta-review". SP-18 should bind a sentence that assigns work. A second defect sits under it. The IR tags C68 "decided: owner, 2026-10-28" at count close. The record shows no tag change when round 1 added actors or when round 9 removed them. Both versions cannot be the owner's decision. Round 4 handled C50 the right way: the added actor is "inferred by R16" (C50 depends on C10, the web view's drill-down).

SP-03 should prevail over SP-26, as round 4 ruled: "the referent rule outranking the excess-words rule". Round 9 declined under "the brief's exemption for a repeated noun phrase that names a referent". The exemption did not stop the round-9 stranger. It belongs in SP-26's calibration sentence, where a stranger applies the rule.

The "Today" marker is a fix device, not a rule. A marker on some sentences makes the unmarked ones read as the other state. Round 3's two contradictions came from it. Round 3's confirmation fix moved C16 and C82 into the present-state section, with "Today" "dropped as redundant there". That fix held. The count-close text still marks C40 with "Today" in that same section. The record does not tie round 10's contradiction to the marker; its fix cites R9 (C62 depends on C43: every stop is at a stream's boundary). The marker belongs in the fix discipline, not the brief.

d. The restatement. Strangers attributed 14 of 24 mismatches to themselves, in rounds 3 to 7. The record names a claim for one of the 14. That one, round 4 finding 4, was the pilot-order recurrence: a prose defect by step 6 and by round 8. Self-attribution is therefore not a reliable filter. The 200-word limit leaves about two words for each of 96 claims. Round 2's declined finding 1 was "the instance's own grouping error". Case 007 records the restatement blocking alone in one round of nine at 148 to 172 claims; it does not state that count's word limit. The record does not name the strangers' model; the dispatch calls them haiku instances. The model may explain the difference, and the record cannot show it. I propose no change to the limit. I propose two record changes that let the next meta-review separate the stranger from the prose.

e. Signal 4. "After round 3" means round 4 and later in plain English. The reasoning role read it literally and rightly. The wording still needed a note in the record. Round 3's contradictions came from round 1's fix, two rounds earlier. A fix-induced contradiction that survives a full round is what the signal looks for. "In round 3 or later" says so without a second reading. The reading changed nothing here: signal 4 fired at round 6.

f. Growth. The prose grew from 1,338 to 1,489 words, 11.3 percent. The IR grew from 69 to 96 claims, 39 percent. Words per claim fell from 19.4 to 15.5. The prose grew more slowly than its IR, and the one-tenth test still fired. The signal looks for prose drifting from its IR, as in case 005. Words per claim measures that drift directly. The branch point gives the reason for replacing case 005's change 4 as "because fixing in the IR first kept the prose from growing". That reason is false for this count.

g. Script. The round-3 line adds "prose" and "in full" to the parsed form. The same line names two problems and counts one. A fixed form settles both. The script failed open: an unparsed line read as signal 1 not fired. It should fail closed.

h. Other. The round-1 rendering went to round 1 with eight sentences over the lint's 25-word warning, and round 1 returned eight SP-02 findings. The lint's flag starts at 35 words, so nothing stopped the round. Case 007's change 6 binds the paraphraser's rendering, and the reasoning role's fixes undid it on C42. Case 008's change 5 has no clause for the limit; the reasoning role filled the gap well.

Readability. The round-10 text is readable for RD-4. From it I can state the direction, the decisions of 2026-10-28, what exists, the gaps and the first steps. Remaining defects: "Plans and specifications therefore have no stranger." is followed by "The stranger extends to plans and specifications." with nothing marking the second as target state; "Today" on C40 in the present-state section; "The merged model combines the two plan models." without the "because" that tied it to C72.

## Measures

| Measure | Value |
|---|---|
| Rounds | 10 in one count; limit reached |
| Findings | 129 |
| Findings per thousand words | 28.4, 14.3, 9.8, 9.7, 4.8, 7.5, 7.5, 4.1, 3.4, 2.0 |
| Restatement mismatches by round | 2, 2, 3, 5, 2, 2, 5, 1, 1, 1 (24; 14 attributed by the stranger to itself) |
| Contradictions by round | 1, 1, 2, 0, 0, 1, 0, 0, 0, 1 |
| Undefined terms by round | 9, 5, 2, 3, 2, 0, 4, 1, 1, 0 |
| Accepted, declined, not prose defects | 107, 8, 14 |
| Fixes not held at confirmation | 3 of 107 (round 3: 1; round 4: 2) |
| New defects noted at confirmation | 8 |
| Recurring mismatches | 3 passages: pilot order (rounds 3, 4, 8); C26 (rounds 1, 7, 9); C8 (rounds 2, 10, unnoted) |
| Step-6 fixes that recurred | 2 of 4, both rewordings |
| Claims-check runs | 9; 0 missing; 0 stale |
| Findings on passages an earlier fix touched, or reversing one | at least 13 of 91 after round 1 |
| Blockers in rounds 8 to 10 on wording from the round-1 rendering | 4 of 6 |
| Rounds blocked by the restatement alone | 0 of 10 as returned; round 6 after the withdrawal |
| Prose words | 1,338 to 1,489 (11.3 percent) |
| IR claims | 69 to 96 (39 percent) |
| Words per claim | 19.4 to 15.5 |
| Unratified terms | 1 (structural fix) |
| Verdict | not readable at round 10; limit reached |

## Outcome

Proposed process changes. "Brief" means the branch point's Stranger brief; "step" means a step of its Rounds section.

1. The verdict keeps its three conditions and gains no finding-rate threshold. Evidence: ten of the eleven blockers of rounds 7 to 10 outside self-attributed mismatches were accepted and fixed; four of the six in rounds 8 to 10 sat on round-1 wording. No change.
2. A contradiction or undefined-term finding that the round's instance withdraws at confirmation, on a decline reason that quotes the prose, is marked withdrawn and does not count against the verdict. The reasoning role then reads the verdict on the remaining conditions. A restatement mismatch is never withdrawn at confirmation. Evidence: round 6 finding 3; no effect on this count. Recommended.
3. Step 6 prescribes a structural fix. At the first recurrence the reasoning role moves the sentence out of the structure that produces the reading (a list, a section, an adjacency), or changes the claim to the strangers' reading when that reading is true. A rewording alone is not a step-6 fix. A decided claim changed this way is listed for the owner in the delivering report. Evidence: the rewordings of rounds 4 and 7 recurred in rounds 8 and 9; the structural fixes of rounds 8 and 9 did not recur. Recommended.
4. The round's instance does not confirm a step-6 fix. The record marks it "awaiting restatement", and the next round's entry states whether that round's restatement matched on the passage. Evidence: observation 5. Recommended.
5. The record names, for every restatement mismatch, the claim it concerns. For a mismatch the stranger attributes to its own restatement, the brief asks it to quote the prose sentence it relied on. The signals script reports a claim named in mismatches of two rounds. Evidence: 13 of 14 self-attributed mismatches carry no claim; the one that does was a recurrence; C8 recurred unnoted. Recommended.
6. The record names each round's stranger model. Evidence: judgement d. Recommended.
7. The restatement limit of 200 words stays. Evidence: judgement d; no count has yet recorded the model and the mismatch claims together. No change.
8. The brief's SP-01 calibration adds: "A duty with its actor and its trigger is one claim." Evidence: C50 split in round 5 and rejoined in round 6. Recommended.
9. The brief's SP-18 calibration adds: "A sentence that states a target, or names roadmap work and assigns it to no one, is not a duty." Evidence: C68 in rounds 1 and 9. Recommended.
10. An actor or trigger added to a decided claim for SP-18, where the source names none, makes the claim inferred, with a relation naming its basis. Evidence: C68 tagged decided with and without actors; C50 inferred by R16 in round 4. Recommended.
11. The brief's SP-26 calibration adds: "Words that name a referent SP-03 requires are not excess." Evidence: C64's phrase cut in round 2, restored in round 4, challenged in round 9 despite the per-text exemption. Recommended.
12. Step 3 adds: a fix that separates present from target state moves the sentence under a header that names its state. It does not mark a single sentence with "Today". Evidence: round 1's marker preceded round 3's two contradictions; round 3's move into the present-state section held. Recommended.
13. The D1 row's connective-prose rule binds the reasoning role's fixes. The brief's forms that are not defects add: a rule joined by "because", "so" or "therefore" to a reason the IR holds as its own claim. Evidence: round 1's split of C42 dropped "because"; round 6's split of C47 kept "therefore". Recommended.
14. The fourth signal reads "in round 3 or later", in the specification's Meta-review section and in the branch point. Evidence: judgement e. Recommended.
15. The third signal fires when the prose's words per IR claim at the end of the count exceed round 1's by more than one tenth. The branch point's reason for replacing case 005's change 4 names words per claim. Evidence: judgement f. Recommended.
16. The confirmation line has one form: "Confirmation: H of A fixes hold. Not held: <finding numbers, or none>. Declines accepted: K of D. New defects: N." A fix that holds in part is not held. The signals script reports a line it cannot parse as unparsed. The reasoning role writes no "Meta-review: not indicated" while a line is unparsed. Evidence: judgement g. Recommended.
17. Before round 1 the reasoning role resolves every SP-02 lint warning (over 25 words), and the record states the lint result. Evidence: eight SP-02 findings of 38 in round 1, one per warned sentence. Recommended.
18. Step 7 applies at the limit: the final round's findings are fixed, confirmed by its instance, and marked confirmed or unfixed. Evidence: round 10 did so by choice. Recommended.
19. The claims check, same-instance confirmation outside step 6, the carried declines and the limit of ten stay as written. Evidence: earlier changes 1 to 3; judgement a. No change.

Owner's decision on the outcome, 2026-10-29: all nineteen adopted as proposed ("adopt all nineteen as proposed"); the term structural fix ratified. Carried into branch point v1.7 and, for changes 2, 14, 15 and 18, into the methodology's intermediate-representation specification; the project-orchestrator's Reviewer (stranger) role follows.
