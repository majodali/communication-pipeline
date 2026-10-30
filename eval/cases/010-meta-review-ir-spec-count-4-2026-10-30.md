# Case 010: meta-review of the IR specification's count 4

Instance of the [Evaluation case](../README.md) type, a [meta-review](../../docs/vocabulary.md#def-meta-review) record. Performed 2026-10-30 by a fresh communication-pipeline session with no part in the rounds, dispatched by the owner on the same day.

| Field | Value |
|---|---|
| Case | 010 |
| Source text date | 2026-10-29 |
| Reader addressed | RD-4 |
| Origin | the methodology's intermediate-representation specification, amended by case 009's changes 2, 14, 15 and 18; disposition D3 (Normative: yes); four stranger rounds; fixes IR first |
| Through the pipeline | yes: IR first, rendering by the reasoning role, rounds until readable |
| Graded by | a fresh communication-pipeline session with no part in the rounds |

## Source text

Three files, not quoted: `docs/intermediate-representation.md`, `docs/intermediate-representation.ir.md` and `docs/intermediate-representation.review.md` in the methodology repository at commit 387dd80, the record's section *Count 4*. The round states were read from commits 4b255f1 to 387dd80. `scripts/signals.mjs` was run on the record.

## Findings

Per round, what the round found that earlier rounds and their fixes had not caught. The style rules are SP-01 (one claim per sentence), SP-02 (sentence length), SP-04 (terms defined), SP-10 and SP-11 (headers and order), SP-18 (a duty names its actor and trigger) and SP-26 (excess words).

| Round | New | Why |
|---|---|---|
| 1 | Three undefined phrases: "unratified-vocabulary indicator" (C50), "prediction-surprise indicator" (C127), "Methodology-level specification" (C179); actors on C81 and C82; a trigger on C152; a clause header; C155 split; mismatches on C44 and C104, both attributed by the stranger to itself. | All nine sit on text older than the count. The three phrases stood in count 3's text, which one stranger passed as readable at round 1. |
| 2 | Five sentences over 25 words (C93, C110, C131, C140, C4); actors on C202, C94, C76, C77 and C79; "footprint" unlinked; two SP-01 splits (C188, C191); one SP-26 finding on C135, declined; four mismatches, all self-attributed. | Before round 1 the reasoning role left seven SP-02 lint warnings "for the editorial pass the backlog holds". Five of the seven drew this round's SP-02 findings. |
| 3 | "Restatement mismatch" undefined; C81 with three actors and no trigger; the Footprint section opening with its exemption; C138 split. | C195, this count's own claim (case 009 change 2), used "restatement mismatch" without a definition. Rounds 1 and 2 passed it. Round 1's fix gave C81 its three actors. |
| 4 | The P-008 unit sentence (C173) at 26 words; three History sentences split (C147, C148, C200); the Rendering conditions section opening with its inputs; "here" in C212; a mismatch on C41, self-attributed. | C173 was the sixth lint-warned sentence found. C200 is this count's claim. C41 had stood on round 2's `Mismatches:` line. |

Observations against the record.

1. The counts reconcile. 37 findings are 29 accepted, 1 declined and 7 restatement mismatches recorded as no prose defect. All seven mismatches were self-attributed. The curve still reads "restatement matched" in rounds 1, 2 and 4.
2. Round 2's line reads "Mismatches: C93 (own), C41 (own), C73 (own), C74 (own), C135 (own)": five claims for "four mismatches".
3. The verdict names the C41 passage as "the Relation row's sentence 'A reference from one claim to another is a relation, never a pronoun inside the claim'". That sentence is C35. C41 is the referent rule's sentence that makes a pronoun legal with an antecedent in the claim. The `Mismatches:` lines name the claim the restatement contradicted, not the sentence the stranger relied on. The record does not keep the quoted sentences.
4. The first close, commit e8d0f16, wrote "Meta-review: not indicated". It read signal 1 as "no fix not held in two rounds (round 1's one and round 2's two were fixed again and confirmed)" and signal 2 as "no claim on two rounds' Mismatches lines". The script, unchanged since commit ebf76d3, reports both signals fired. Commits 60cd58d and 387dd80 corrected the line within 70 seconds.
5. The verdict reads "Thirty-six of the thirty-seven findings fell on text older than this count." At least three fell on text the count wrote: round 3 findings 1 (C195) and 2 (C81 after round 1's fix), and round 4 finding 6 (C200).
6. Round 4's entry says the prose fixes landed "three commits after the IR's" and, two sentences later, "one commit after the IR's". The note on the discarded confirmation reads appears twice. Git shows the prose fixes in b73d7aa, two commits after the IR's 99e208c.

Earlier meta-reviews' changes in this count. The record states the count ran "under the branch point v1.6 brief with the calibrations of case 009". Branch point v1.7 was in its own rounds from 06:28 to 06:51 UTC; count 4 ran from 06:21 to 07:03 UTC on 2026-10-29.

1. Withdrawal at confirmation (case 009 change 2). Not exercised: no contradiction was found, and every undefined-term finding was fixed. Its own sentence, C195, carried the undefined term that was round 3's only blocker. It cost one round.
2. The fourth signal "in round 3 or later" (change 14). Not exercised: no contradiction in four rounds.
3. The third signal by words per claim (change 15). The script reads 16.09 to 15.58, minus 3 percent. The first close wrote 15.4 from the delivered text. "At the count's end" was read two ways, both far below the threshold.
4. The final round's fixes confirmed at the limit (change 18). Not reached. Step 7 at the readable verdict ran: 7 of 7 fixes held, after two confirmation reads of unfixed prose were discarded.
5. SP-02 before round 1 (change 17). Applied to the count's two new long sentences only. Six of the seven older sentences left later drew seven findings. Two of the three fixes not held (F12, F13) and both new defects at round 2's confirmation (N1, N2, from F9's split of C93) sit on them.
6. `Mismatches:` lines, the named stranger model and the confirmation line's form (changes 5, 6 and 16). Applied every round. All four confirmation lines parse. The lines let the script find C41 and read signal 1 correctly. The record names one model in all four rounds.
7. Structural fix and "awaiting restatement" (changes 3 and 4). Owed for C41 at round 4 and not applied: the hand check missed the recurrence.
8. Actor added to a decided claim makes it inferred (change 10). Not applied. Fixes in rounds 1 to 3 added actors or a trigger to C76, C77, C79, C81, C82, C94, C152 and C202. All eight remain decided, with no relation naming a basis.

My judgement.

a. Signal 1. Three fixes did not hold at first confirmation. Round 1's F6 replaced one undefined phrase with another, "(prediction surprise)". Round 2's F12 joined the growth figures by an absolute clause; F13 rephrased C4 and left it over 25 words. Two of the three trace to the seven sentences left before round 1. Without that deferral, signal 1 rests on round 1 alone and does not fire. The signal pointed at a real lapse: change 17 was scoped to the amendment while the strangers read the whole text.

In rounds 2 and 4 an edit script also stopped on an anchor, and the prose fixes landed late. Round 4's instance read the unfixed prose twice. Count 1's round 6 lost fixes the same way. The specification's first signal counts this ("a fix did not reach the prose"); the branch point's does not ("rejected at confirmation or the claims check reported a missing or stale claim"). The claims check runs only before a round, so it cannot catch a fix that misses the prose before a confirmation.

b. Signal 2. C41 recurred in rounds 2 and 4, both times self-attributed. The recurrence came from the prose. C35 reads "never a pronoun inside the claim" in the Element kinds table. C41, in The referent rule, permits a pronoun with an antecedent. The record says the passage was "read twice as barring every pronoun". Both can be followed, so it is no contradiction; they sit two sections apart. A move of C35 next to C41 is the structural fix step 6 asks for. The brief carried no declined finding on the passage. The reviewer's part was the self-attribution, which case 009 already found unreliable. The hand check failed because step 6 has no mechanical check before the verdict; the script runs at the count's end.

C44 is a second recurrence the script cannot see. It was on count 1's mismatches in rounds 6, 7 and 8, reworded in round 8, and on count 4's in round 1. The script reads the last count only.

c. Convergence and the verdict. The blocking findings fell: undefined terms 3, 1, 1, 0; contradictions 0 throughout. The other findings did not: 9, 16, 4, 8. Later rounds found new defects, not old ones, apart from C41 and C81. Most were on old text. Count 3 passed this text readable at round 1 with 3 findings; count 4 found 37 on nearly the same text. A stranger samples; it does not exhaust.

The readable verdict at round 4 was lenient. The specification's first condition is that the restatement "matches the IR". C211 defines a restatement mismatch as "a disagreement between the stranger's restatement and the IR", with no exception for one the stranger attributes to itself. The vision count read it so: its round 6 was not readable on two self-attributed mismatches alone (case 009, judgement a). Count 4's round 4 was readable with one. Under step 6 that one was also a prose finding, as the record concedes. The verdict was earned on contradictions and undefined terms only. A round 5 with C35 moved would have tested the fix.

d. The specification's own text. The count exposed five defects in it. The verdict condition does not say whether a self-attributed mismatch counts. The first signal's wording differs from the branch point's. "At the count's end" does not say judged text or delivered text. C35 misleads as above. "The renderer", a word rounds 1 and 2 introduced in fixes, is used in C76, C77 and C79 before C81 defines it by an appositive. Round 3's stranger read that appositive, "the renderer, the paraphraser or the reasoning role,", as three actors.

e. Case 009's changes. Changes 14, 15 and 18 neither helped nor hurt; change 2 cost a round through its wording. Changes 5, 6 and 16 made the count checkable. The calibrations decided no finding. The costliest failures, change 17's scope cut and the missed step 6, were hand steps no script checks.

Readability. The delivered text is readable for RD-4. From it I can state what an IR is, its checks, the rendering rule, the rounds, the verdict, the signals and the lifecycle. Remaining defects: C35's sentence; "the renderer" before its definition; the assumed-knowledge line at 26 words, the seventh lint-warned sentence; the History's eighteen sentences in two forms, "on 2026-10-29, by owner decision" and "on 2026-10-29 by the owner decision".

## Measures

| Measure | Value |
|---|---|
| Rounds | 4 in one count; readable at round 4 as recorded |
| Findings | 37: 9, 16, 4, 8 |
| Findings per thousand words | 2.9, 5.1, 1.3, 2.5 |
| Restatement mismatches by round | 2, 4, 0, 1 (7, all self-attributed) |
| Undefined terms by round | 3, 1, 1, 0 |
| Contradictions by round | 0, 0, 0, 0 |
| Other kinds by round | SP-18 2, 3, 1, 0; SP-01 1, 2, 1, 4; SP-02 0, 5, 0, 1; SP-10 and SP-11 1, 0, 1, 1; SP-26 0, 1, 0, 1 |
| Accepted, declined, no prose defect | 29, 1, 7 |
| Fixes held at first confirmation | 6 of 7, 9 of 11, 4 of 4, 7 of 7 (26 of 29); 29 of 29 after refixing |
| New defects at confirmation | 0, 2, 0, 0 |
| Prose fixes late to the prose | rounds 2 and 4; two confirmation reads discarded in round 4 |
| Claims-check runs | 3; 0 missing; 0 stale |
| SP-02 warnings left before round 1 | 7; 6 later found by strangers, in 7 findings |
| Findings on text the count wrote or touched | at least 3 (record: 1) |
| Recurring mismatches | C41 (rounds 2, 4; noted after close); C44 (count 1 rounds 6 to 8, count 4 round 1; unnoted) |
| Prose words | 3,089 at round 1; 3,163 at round 4; 3,181 delivered (3.0 percent) |
| IR claims | 192; 203; 207 (7.8 percent) |
| Words per claim | 16.1; 15.6; 15.4 |
| Signals | 1 fired (rounds 1, 2); 2 fired (C41, rounds 2, 4); 3 not fired (minus 3 percent); 4 not fired |
| Unratified terms | 0 |
| Verdict | readable at round 4 as recorded; not readable under the specification's first condition |

## Outcome

Proposed process changes. "Step" means a step of the branch point's Rounds section; "the script" is `scripts/signals.mjs`.

1. The specification's first condition (C203) and the branch point's verdict sentence read: "the stranger's restatement of the problem, terms and decisions has no mismatch with the IR, whatever the stranger attributes a mismatch to." Evidence: judgement c; the vision count and count 4 read the rule two ways. Recommended.
2. The reasoning role runs the script after writing each round's `Mismatches:` line and before writing the verdict. The script's recurrence report is step 6's check. Evidence: C41 missed by hand at round 4. Recommended.
3. Each entry on a `Mismatches:` line names the claim the restatement contradicts and, after "relied on", the claim of the sentence the stranger quoted: `C41 (own; relied on C35)`. The script counts a recurrence on either claim. Evidence: observations 2 and 3. Recommended.
4. The script also lists claims on `Mismatches:` lines of a record's earlier counts, as information; the second signal still reads the last count. Evidence: C44 across counts 1 and 4. Recommended.
5. The specification's first signal reads as the branch point's: "in two or more rounds, a fix was not held at confirmation or the claims check reported a missing or stale claim." Evidence: judgement a. Recommended.
6. Steps 4 and 7 add: the claims check runs on the fixed prose before the instance confirms. A changed claim reported missing or stale is fixed before the confirmation read. Evidence: count 4's rounds 2 and 4 and count 1's round 6, fixes stopped by an edit script. Recommended.
7. The script reports a `Meta-review: not indicated` line that its own reading contradicts. Its wording search skips the `Meta-review:` line. Evidence: observation 4; the script's "declined raised again, CHECK" matched the line's own words. Recommended.
8. Step 1's SP-02 sentence reads "every SP-02 lint warning in the text under review, whatever its age". Evidence: earlier change 5. Recommended.
9. The third signal reads "in the count's last round" for "at the count's end", in the specification and the branch point. The value is the curve's last row, as the script reads it. Evidence: 15.4 and 15.6 in the record. Recommended.
10. The review record names the branch point version and commit a count runs under. A change the owner adopts during a count applies from the next count. Evidence: count 4 applied part of v1.7 while v1.7 was in rounds, and not case 009's change 10. Recommended.
11. The IR specification's next edit moves C35 into The referent rule, after C41, as the structural fix for the C41 recurrence. The next count's entry states whether its restatement matched on the passage. Evidence: judgement b. Recommended.
12. The IR specification defines the renderer in a sentence of its own before C76: "The renderer is the paraphraser or, for normative text, the reasoning role." C81 drops its appositive. Evidence: judgement d; round 3 finding 2. Recommended.
13. At the same edit the reasoning role checks the sources of C76, C77, C79, C81, C82, C94, C152 and C202. A claim whose source names no actor becomes inferred, with a relation naming its basis. Evidence: earlier change 8. Recommended.
14. An SP-01 calibration for dated History sentences. Evidence: the readability note; the brief already allows a colon-introduced list. Declined: no new rule.
15. Case 009's changes 2, 14 and 18 and the limit of ten stay as written. Evidence: none was exercised. No change.

Owner's decision on the outcome, 2026-10-30: the thirteen recommended changes adopted ("For cases 010 and 011 - go with all recommendations, all terms ratified"); change 14 stays declined; change 15 confirmed. Carried into branch point v1.9 (changes 1 to 10) and, for changes 1, 5, 9, 11, 12 and 13, into the methodology's intermediate-representation specification as its count 5; the project-orchestrator's Reviewer (stranger) role follows.
