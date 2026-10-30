# Case 012: meta-review of branch point v1.9 and the IR specification's count 5

Instance of the [Evaluation case](../README.md) type, a [meta-review](../../docs/vocabulary.md#def-meta-review) record. Performed 2026-10-30 by a fresh communication-pipeline session with no part in the rounds, dispatched by the owner on 2026-10-30. The case covers two subjects in one task. The two counts ran in parallel, on rules the two texts share, under one Orchestrator: the project-orchestrator session that ran both counts and made the rulings the records name. Both counts tested the adopted changes of [case 010](010-meta-review-ir-spec-count-4-2026-10-30.md) and [case 011](011-meta-review-vision-count-2-2026-10-30.md).

| Field | Value |
|---|---|
| Case | 012 |
| Source text date | 2026-10-30 |
| Reader addressed | RD-4 (a fresh agent session) |
| Origin | First subject: the [branch point](../../docs/branch-point.md) v1.9, the changes of cases 010 and 011 the owner adopted; [disposition](../../docs/vocabulary.md#def-disposition) D3 (review, reasoning-role rendered; Normative: yes); eight [stranger](../../docs/vocabulary.md#def-stranger) rounds; readable at round 8. Second subject: the methodology's intermediate-representation specification, count 5, amended by seven of the same changes; disposition D3; ten rounds; the limit reached, not readable; the final round's fixes confirmed |
| Through the pipeline | yes: IR first, rendering by the [reasoning role](../../docs/vocabulary.md#def-reasoning-role), rounds under branch point v1.9 |
| Graded by | a fresh communication-pipeline session with no part in the rounds |

## Source text

Six files, not quoted.

- The branch point: `docs/branch-point.md`, `docs/records/branch-point-v1.9.ir.md` and `docs/records/branch-point-v1.9.review.md` in this repository at commit 5ef1f76, the merge of pull request #22 (branch `branch-point-v1.9-cases-010-011`). The round states were read from that pull request's commits, 8019eee (the adopted changes) to a0f30be (the close).
- The specification: `docs/intermediate-representation.md`, `docs/intermediate-representation.ir.md` and `docs/intermediate-representation.review.md` in the methodology repository at commit bf6fcac, the merge of methodology pull request #69. The record's section is *Count 5*. The round states were read from the commits of methodology pull requests #68 and #69, 9abc3b5 to dec26c0.

`scripts/signals.mjs` was run on both records at commit 5ef1f76.

Every number below comes from a review record, a commit or the script, and names its source. "My count" marks a number I counted from a record, with the method stated. "Estimate" marks a number I did not count.

## Findings

The style rules named:

- SP-01 (one claim per sentence) and SP-02 (sentence length);
- SP-03 (referent named), SP-04 (terms defined) and SP-05 (identifier named or linked);
- SP-08 (no rhetorical devices) to SP-11 (a section answers its header), the rules on rhetoric, chained clauses and headers;
- SP-18 (a duty names its actor and trigger), SP-25 (contradiction) and SP-26 (excess words).

A [restatement](../../docs/vocabulary.md#def-restatement) is the stranger's account of the text in at most 200 words. An [own mismatch](../../docs/vocabulary.md#def-own-mismatch) is a restatement mismatch the stranger attributes to its own restatement. "Step" means a step of branch point v1.9's Rounds section. "The exception" and "the override" are the two qualifiers of the first condition in the verdict table both texts carry. "The script" is `scripts/signals.mjs`. Claim identifiers collide between the two IRs, so this case writes "the branch point's C54" and "the specification's C44".

### The branch point v1.9

| Round | New | Why |
|---|---|---|
| 1 | 21 findings. Two contradictions: the first condition against the exception (F16); "the first rule decides" against the "always" of rule BP-01 (the lints run) (F18). Four undefined terms, among them "restatement mismatch" and "the curve". Two SP-02 sentences; three SP-18 actors. | The adopted texts of case 010 change 1 and case 011 change 1 were rendered as two rules, not one. No count of sentences over 25 words was recorded before the round. |
| 2 | 15 findings. The Inputs table's element kinds undefined; `awaiting restatement` undefined; two SP-18 actors; an own mismatch on the Rules opening (C55, the first-row rule). | Round 1's fixes wrote C55. The `awaiting restatement` mark came with case 011 change 6. |
| 3 | 10 findings. "writes `Meta-review: not indicated` otherwise" against the unparsed-line rule; an own mismatch on C25 (the exception) relying on C23 (the first condition). | The unparsed-line rule is v1.9's own text. |
| 4 | 11 findings. Three contradictions: row BP-02 (owner review flag) before row BP-02a (normative text); `pending` against `unparsed`; the counts said to have had no meta-review. | Each sat on a passage an earlier fix touched, so signal 4 fired. Contradiction 9 is round 3's new defect N1, found again because round 4 opened before round 3's confirmation and its fixes. |
| 5 | 11 findings. An own mismatch on the Rules opening (C54, the lints rule), counted under the override; two SP-18 actors; "step-6 fix" used before step 6. | The Rules opening drew its second mismatch. The stranger returned readable. The override made the round not readable. |
| 6 | 9 findings. The Rules opening again: the restatement called rule BP-01 a table row. Two undefined terms: `awaiting restatement` used one sentence before its definition, and the confirmation line's "Declines accepted" and "New defects" with no step that produces them. | Round 5's [structural fix](../../docs/vocabulary.md#def-structural-fix) moved BP-01 out of the table and kept its label. |
| 7 | 8 findings. The override against the exception with no stated precedence (F6); "form audit" undefined. | F6 sat on round 1's joined rule. "Form audit" came with round 5's pointer sentence, C79. |
| 8 | 6 findings: an SP-01 split, two SP-05 names, one SP-03 referent, one SP-04 link, one SP-26 cut. Readable. | No blocker. No stranger restated C54 in rounds 7 or 8. |

### The specification, count 5

| Round | New | Why |
|---|---|---|
| 1 | 20 findings. Four own mismatches (C223, C195, C104, C84). Two contradictions: the first condition against the exception (F12); C13 (the Status values) against C218 (F20). Four undefined terms. | F12 is the branch point's F16 in the other text. F20 came from the IR-only edit of 2026-10-30, made outside a round. C104 (the meta-review subject) recurred from count 4's round 1. |
| 2 | 6 findings. Own mismatches on C41 (the referent rule) and C217; the input list against the two owner inputs. | Case 010 change 11's move of C35 matched in round 1. Round 2's stranger dropped the rule's determiner-phrase half. The owner inputs came from the IR-only edit. |
| 3 | 9 findings. Own mismatches on C227 (relying on C203) and C194 (relying on C221); three undefined terms: "project-specific term", "confirmation", "dependent ask". | Both mismatches quoted a neighbouring sentence of the verdict rule, not the sentence with the qualifier. |
| 4 | 8 findings. Three own mismatches on the verdict and withdrawal rules, both now recurring; C1 (the IR first) against C131 (the exception for reports to RD-1 (the human owner, in conversation) and RD-3 (a delegating agent)); three term findings. | The verdict passage drew its third mismatch. |
| 5 | 5 findings. Three own mismatches on the two step-6 passages. Not readable on the override alone. | Round 4's numbered list did not hold. The restatement dropped the exception and the override, and applied withdrawal to all three conditions. |
| 6 | 8 findings. An own mismatch on C1; a contradiction between the delivered text "with the round's fixes applied" and findings marked unfixed. | The marking rule, C202, had moved in round 4's fix, so signal 4 fired. The verdict table matched. |
| 7 | 14 findings. Five own mismatches (C50, C1, C44, C203, C194); one undefined term. | The verdict passage drew its fifth mismatch one round after it matched. C1 and C44 recurred. The Orchestrator ruled after the round that both count. |
| 8 | 8 findings. Own mismatches on C44, C104 with C106, and C123; two contradictions, on a [cluster](../../docs/vocabulary.md#def-cluster)'s parts and on an IR-only document's asks. | C44 drew a mismatch for the third time across counts 4 and 5. Both contradictions were gaps in older rules. Their fixes added C256 and C257 as proposed rules. |
| 9 | 4 findings. An own mismatch on C132; C258 (the withdrawal sentence) against C195 (no withdrawal of a mismatch); "governed document" undefined. | C258 was added in round 8's fix, so signal 4 fired. Every passage awaiting restatement matched. |
| 10 | 2 findings. C174 (one paragraph per cluster) against C256 (one paragraph per part); one SP-26 finding, declined. | C256 was added in round 8 and reworded in round 9, so signal 4 fired. The limit. |

Observations against the records.

1. The script reproduces both records' readings of signals 1 and 2. The branch point's verdict names fixes not held "in rounds 3, 5 and 7". The script also counts round 8, from the second confirmation's line "Confirmation: 1 of 2 fixes hold. Not held: N1."
2. Rounds opened before the previous round's confirmation returned: the branch point's rounds 4 to 8, the specification's rounds 4 to 10. Each entry says so. Step 4 says the reasoning role fixes again "before the next round". In these twelve rounds, the re-fixes and the new defects went into the next round's fix pass, after the next stranger had read the unfixed text. Each confirmation came back between 2 minutes 46 seconds and 6 minutes 9 seconds after its fix commit. The source is my count from the commit times of the two pull requests, for the branch point's rounds 3 to 7 and the specification's rounds 3 to 9.
3. Confirmation reads were partial or stale. The specification's round 8 instance read the IR's lines 1 to 140 and quoted three claims from an earlier read. Its new defects 4 to 6 were declined as stale reads in round 9. The round 8 entry also called the instance's row-2 report a stale read, and round 9 found the instance right. The specification's round 3 instance reported fix 8 not held against an IR that the fix commit 2b7627d already carried. The line counts fix 8 as not held. The branch point's round 7 instance re-read the fixed passages only. The branch point's round 8 instance read the prose only, and its new defect N3 was withdrawn after it read the IR.
4. Case 011 change 6 marks a [re-fix](../../docs/vocabulary.md#def-re-fix) `awaiting restatement`. The records apply the mark once, to the specification's C208 in round 1. Nine other re-fixes carry no mark (my count). On the branch point: round 3 fix 9, round 5 fixes 6 and 11, round 7 fix 8. On the specification: round 3 fixes 3, 5 and 8, round 7 fix 9, round 8 fix 4.
5. Step 1 asks for the number of sentences over 25 words before round 1. The branch point's record holds no such line. Round 1 then found two SP-02 sentences (F5, F12). The specification recorded two and changed neither, calling both header forms.
6. Case 010 change 10 asks for the branch point version and commit a count runs under. The branch point's record reads "the commit that opens round 1", with no hash. The specification's record gives hashes for rounds 1 (8019eee), 2 (cafe4d1) and 10 (a0f30be). Rounds 3 to 9 read "this round's opening commit". The specification ran under a procedure the branch point's own rounds were changing.
7. Before round 5, the Orchestrator brought the brief's verdict sentence to the current rule in both counts. Rounds 1 to 4 had run under the round-1 wording.
8. The exception's reading changed during the counts. The specification's round 3 read two neighbour-quoted mismatches as not counting, and records that the branch point's round 3 had read C25 relying on C23, a mismatch of that form, as counting. The Orchestrator then adopted one reading on 2026-10-30: any IR claim the quoted sentence carries faithfully. That reading entered both texts as a fix. The branch point's round 5 finding 7 changed "the IR's claim" to "an IR claim" in the branch point's C25 and the specification's C223. The round 5 instance did not hold that fix. An adopted rule's wording changed in a round fix and awaits the owner.
9. The branch point's C54 (the lints sentence) closed `awaiting restatement`. Step 7 says what happens to a step-6 fix awaiting restatement at the limit. Step 7 says nothing for a readable verdict. The branch point's owner item 3 asks the owner.
10. The script's wording searches hit four lines in the two records. Three of the four state that the signal did not fire. The branch point's round 4 line reads "no earlier round's fix touched; not fired". The specification's round 5 line reads "no earlier fix touched". The branch point's round 8 line reads "no declined finding raised again". The fourth is the branch point's verdict paragraph. No hit is a round entry that records signal 4 firing: the branch point's round 4 and the specification's rounds 7 and 10.
11. The branch point's IR covers the passages v1.9 changed. The prose count is the whole text. The script reads words per claim falling from 72.19 to 40.35, because fixes brought more passages under the IR. Signal 3 cannot fire on such an IR.
12. The specification's claims check reported C13 stale after round 1's fixes and before round 2. The fix had brought the IR to prose that already carried the claim. The script counts both reports. By the specification's round 2 entry, signal 1 reads round 2 by that report only.
13. The claims check before a round repeated the check after the previous fix pass. In 14 of the 16 round openings the numbers are equal (my count). The two differences follow re-fixes. In 35 runs no check found a missing claim (my count: 16 on the branch point, 19 on the specification). The only stale report was C13.

Earlier meta-reviews' changes in these counts, by their numbers.

Case 010:

1. The first condition counts a mismatch whatever its attribution (with case 011 change 1, the exception). Rendered first as two rules in both texts. Both round 1s found the contradiction (the branch point's F16, the specification's F12). The branch point's round 7 found no precedence between the exception and the override (F6). Both texts then gained "The override governs the exception." Judgement b weighs the result.
2. The script after each `Mismatches:` line (with case 011 change 5, before each round). Applied in every round of both counts. The script found the specification's C104, C41, C223, C194, C195, C227, C203, C1 and C44 and the branch point's C55 and C54. In the specification's round 7 it found C1 and C44, which the Orchestrator's reading had not counted. The script reads claims, not passages. The branch point's round-5 recurrence on the Rules opening (C55, then C54) was found by reading.
3. "Relied on" entries. Applied in both counts. The branch point's C55 recurred in round 6 through "relied on C55" only.
4. Earlier counts listed (with case 011 change 3, every count read). The specification's C104, C41 and C44 recurred across counts 4 and 5. The branch point's record holds one count. Its earlier versions' records number claims afresh, so no recurrence across branch point versions can show.
5. The specification's first signal in the branch point's words. Applied as C187. It fired on the specification's rounds 1, 3, 7 and 8 by fixes not held.
6. The claims check before confirmation. Applied in every round. It found no missing claim (observation 13).
7. A contradicted `not indicated` line reported. Not exercised.
8. SP-02 warnings resolved before round 1, whatever their age (with case 011 change 8, the count recorded). Not applied on the branch point (observation 5).
9. The third signal "in the count's last round". Applied. The script reads 15.59 to 15.84 words per claim on the specification, 2 percent.
10. The version and commit recorded. Applied in part (observation 6).
11. C35 moved after C41. Matched in round 1. Round 2's mismatch on C41 took a second structural fix. The referent passage matched in every round from 3 to 10.
12. The renderer defined. C220 written. Round 1's own mismatch on C84 relied on C220, and C84 was cut as a repeat. No later finding on the renderer.
13. Eight claims' sources checked. Seven became inferred; C81 stayed decided. No later finding on them.
15. Four rules confirmed as written. No contradiction or undefined-term finding was withdrawn at confirmation. The fourth signal fired in both counts. The final round's fixes at the limit were confirmed, 1 of 1. The specification reached the limit of ten.

Case 011:

2. The `(own)` mark and the quoted sentence. Applied in the specification from round 1. The branch point's record quotes the relied-on sentence in rounds 2 and 3. It describes rounds 5, 6 and 7 without the quoted words.
4. Signal 2 counts own mismatches. All 29 mismatches in the two counts were own mismatches (the records' curves). Signal 2 fired on them in both.
6. The re-fix marked `awaiting restatement`. Applied once in ten re-fixes (observation 4).
7. A round with no claims-check line is unparsed. Neither record has an unparsed line.
9. The fix rules bind an edit outside a round. Not exercised. The IR-only edit of 2026-10-30 predates the rule. That edit caused the specification's round 1 F20, round 2 finding 5 and the gap behind round 8's C257.
10. A form added to the brief is quoted. No form was added. The brief's verdict sentence changed before round 5 (observation 7). The rule does not cover a changed sentence.

## My judgement

a. Why the signals fired.

Signal 1. Eleven fixes did not hold at first confirmation (the confirmation lines). Three rest on a disputed or stale read: the specification's round 3 fixes 5 and 8 and the branch point's round 5 fix 7. Five were too narrow: the branch point's round 3 fix 9 and round 5 fix 11, and the specification's round 1 fix 13, round 3 fix 3 and round 7 fix 9. One cut too much: the branch point's round 7 fix 8. One definition read wider than meant: the branch point's round 5 fix 6. One added a rule that split a cluster: the specification's round 8 fix 4. The second confirmation added the branch point's N1. Without the disputed reads, signal 1 still fires on both texts.

Signal 2. The branch point's recurrences sit on one passage, the Rules opening. The specification's sit on six passages: the verdict rule, the withdrawal rule, the meta-review subject (C104), the referent rule (C41), the IR-first sentence (C1) and the Provenance opening (C44). The verdict passage is the counts' own amendment: case 010 change 1 and case 011 change 1. That amendment is one rule with an exception, an override and a precedence. C44 also drew mismatches in count 1's rounds 6 to 8 and count 4's round 1 (case 010, judgement b). C44's structural fix in round 8 then matched in rounds 9 and 10.

Signal 4. The branch point's round 4 and the specification's rounds 6, 9 and 10. Three of the four rounds have a contradiction on a rule a fix had added: the branch point's C67 (the unparsed line), the specification's C258 (the withdrawal sentence) and C256 (one paragraph per part).

The limit. From round 6 the specification had five contradictions (the curve). Three sat on passages the count's fixes had moved or added. The remaining two contradictions were gaps in older rules. One gap's fix, C256, drew round 10's contradiction.

b. The exception and the override as applied.

I re-read all eighteen rounds under "every restatement mismatch counts". Every verdict is unchanged. Each round where a mismatch did not count had an undefined term or a contradiction as well. The two rounds where the override decided the verdict (the branch point's round 5 and the specification's round 5) are not readable under either rule.

The adopted reading makes the exception exempt almost every own mismatch. Every `Mismatches:` entry in both counts but one names a relied-on sentence (the specification's round 7 C50). So the exception tests whether the stranger quoted a sentence, not whether the prose misled. The narrower reading requires the quoted sentence to carry the contradicted claim. Nine entries relied on another claim's sentence (the `Mismatches:` lines). Each sat in a round that was not readable on other grounds.

The qualifiers cost work. They drew contradictions in both texts' round 1 (F16, F12) and in the branch point's round 7 (F6). They added one claim to each text (C90, C255). They drew three Orchestrator rulings: the reading of 2026-10-30, C1 and C44 counting, and C132 not counting. They drew a change to an adopted rule's wording in a fix (observation 8).

The useful work on recurring passages was step 6's: a recurring passage gets a structural fix. Step 6 does not need the override. Step 6 found the passages of C44, C104 and C1 and the verdict passage, and their structural fixes later matched.

Case 011 feared that a text this size never reads readable if every mismatch counts. In these counts, rounds with no mismatch were 3 of 8 on the branch point (rounds 1, 4 and 8) and 1 of 10 on the specification (round 10), by the curves. Change 2 takes omissions out of the mismatch count.

c. The 200-word restatement limit.

The texts ran from 3,368 to 3,912 words (the curves and the branch point's verdict). 200 words is about 5 percent of 3,900. The specification's verdict passage drew a mismatch in rounds 1, 3, 4, 5 and 7 (the record's round 7 note and its verdict item 8).

The records describe what the restatement said for 17 of the 29 mismatches. By my reading, 9 of the 17 left a qualifier or a scope out. The remaining 8 asserted something the IR contradicts. The records treat an omission two ways. The specification's round 2 restated C104 without its limit trigger, and the entry called it "matched in part". The branch point's C54 went unrestated, "an omission, not a disagreement". The verdict passage's dropped qualifiers counted as mismatches.

A longer restatement states more claims, and each stated claim can disagree. The records give no evidence that a longer restatement would cut mismatches. The limit should stay (change 3). What the rule lacks is a line between an omission and a mismatch (change 2), and a test aimed at a step-6 passage (change 4).

Under changes 1 and 2 together, the branch point's round 5 reads readable: its one mismatch was an omission, with no contradiction and no undefined term. Rounds 6 to 8 then found 23 more findings (the curve), among them two undefined terms in round 6 and the precedence contradiction in round 7. That contradiction exists only because of the exception and the override. The specification's verdicts do not change: round 5 also had two disagreements.

d. Step 6 and "awaiting restatement" in practice.

The specification made ten step-6 fixes on six passages (my count from the round tables). The branch point made two, on one passage. A free 200-word restatement tests a step-6 fix only when it happens to cover the passage. The specification's round 8 brief "listed no earlier-round passages". From round 9 the brief listed them, and every listed passage matched in rounds 9 and 10. The verdict passage matched in round 6 and mismatched again in round 7: one match is a sample. The branch point's C54 was not restated in rounds 7 or 8, so its mark could not clear.

On the branch point's owner item 3, my reading is that C54 does not block delivery. C54 is one plain sentence in the Dispositions section. Round 8's stranger read it, as its finding 4 shows. No restatement disagreed with it after round 6.

The re-fix mark (case 011 change 6) was applied once in ten re-fixes. Six of the ten re-fixes changed a name, a link, a term element, an order or a split (my reading). No restatement tests such a change. The mark adds a duty with nothing to test.

e. The confirmation step's yield.

At first confirmation 145 fixes were put to the instance and 134 held: 79 of 84 on the branch point and 55 of 61 on the specification (the confirmation lines). The instances named 59 new defects: 24 and 35. The records decline or withdraw six of them: the branch point's round 5 N1 and round 8 N3, and the specification's round 7 N4 and round 8 new defects 4 to 6. The strangers' findings were 175 (91 and 84). So the confirmation instance found about a third as many defects as the strangers (my arithmetic).

The step finds real defects. Its weak points are timing and reads. A new defect's fix is not confirmed: it goes into the next fix pass, which the next confirmation does not cover. In twelve rounds the next stranger read the text before those fixes landed (observation 2). Five answers rest on a partial or stale read: the specification's round 8 new defects 4 to 6 and round 3 fix 8, and the branch point's round 8 N3 (observation 3). The one second confirmation, the branch point's round 8, held 1 of 2 fixes and left N1 unfixed. After its last confirmation the specification applied two edits to its asks, unconfirmed.

f. Growth of the texts and the rulesets.

| Measure | Branch point v1.9 | Specification, count 5 |
|---|---|---|
| Prose words, round 1 to delivery or close | 3,393 to 3,912 (15 percent) | 3,368 to 3,891 (16 percent) |
| IR claims, round 1 to close | 47 to 100 | 216 to 245 |
| Inferred claims, round 1 to close | 3 to 40 | 8 to 35 |
| New rules the rounds wrote, as the record lists them | 13 claims, with C54 moved and C68 reordered (owner item 2) | 14 claims (items 3 to 6) |
| Decided claims reworded, for the owner | listed in ask A2 | 41 claims (item 2) |
| SP-18 fixes accepted | 11 | 7 |

Sources: the curves and verdicts; my count of each claim's last status bracket at commits bb53c99, 5ef1f76, a34a924 and bf6fcac; my count of the claims named in the records' owner lists and round tables. Percentages are mine.

The branch point grew from 2,124 words at v1.6's acceptance (commit b004d98) to 3,912 (my count, the record's method). Its Rounds section grew from 533 to 1,491 words, counting the verdict sub-section. Its Meta-review section grew from 526 to 1,050. The adopted changes of v1.9 added 564 words (2,831 at commit 1c6d1f0 to 3,395 at 8019eee). The rounds added 519.

The rounds worked as a drafting process for new rules. A stranger reported a gap. The fix wrote a rule. The next rounds reviewed the rule, and three of the four signal-4 rounds sat on such rules (judgement a). The step-3 actor rule turned each SP-18 fix into an inferred claim with a relation, and into an item on the owner's ratification list.

g. Where the rounds spent effort without converging.

The branch point's Rules opening took seven edits: round 1 twice (F18 and N1), rounds 3, 4, 5 and 6, and round 8 (finding 4). Rule BP-01 (the lints run), a rule since chunk 1, left the table and lost its label. Its sentence, C54, was then never restated.

The verdict passage took edits in rounds 1, 4, 5, 6, 7 and 9 of the specification, and the shared fixes in the branch point's rounds 1, 5, 6 and 7. The verdict passage drew mismatches in both texts (the branch point's round 3, the specification's five rounds). Keeping the two tables identical became a reason to decline: the specification's round 7 new defect 4 and round 10 finding 2.

The specification's Provenance opening was written as two sentences in round 8, merged in round 9 and split again in round 10.

h. The one-task form over two subjects.

The form fit these two counts. One Orchestrator ran both in parallel, and fixes crossed between the texts in rounds 4 to 7 of each. Two separate cases would each have seen half of the shared passages. The cost is length and colliding claim identifiers, which this case meets by naming the text with each claim.

Readability.

The branch point as delivered is readable for RD-4. From it I can state the dispositions, the rules, the seven steps, the verdict, the signals and the script. Remaining defects:

- N1: RD-1 and RD-3 named twice, and the [reader catalog](../../docs/vocabulary.md#def-reader-catalog) linked twice;
- the Status sentence "Until the owner accepts v1.7, v1.6 is active on main" (owner item 6);
- step 2, one paragraph of 15 sentences and 207 words on the restatement and the `Mismatches:` line (my count);
- the Meta-review history paragraph, 355 words with an SP-20 (numbers in a table) warning (my count; the [lint](../../docs/vocabulary.md#def-lint)).

The specification at close is readable for RD-4 in my reading. Round 10's one contradiction was fixed and confirmed. Remaining defects: C195 stated in the table and limited again by C258 (round 10 finding 2, declined); "a finding's disposition" (C261) beside the pipeline's [disposition](../../docs/vocabulary.md#def-disposition) (item 6); the first condition's cell, four sentences of qualifiers. My reading supports delivery. The owner decides delivery, rework or withdrawal.

## Measures

The branch point v1.9, per round. Sources: the curve, the round entries and the confirmation lines.

| Round | Prose words | IR claims | Findings | Per thousand words | Mismatches | Contradictions | Undefined terms | Declined | Fixes held | New defects |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 3,393 | 47 | 21 | 6.2 | 0 | 2 | 4 | 2 | 19 of 19 | 3 |
| 2 | 3,499 | 59 | 15 | 4.3 | 1 (C55) | 0 | 3 | 2 | 14 of 14 | 3 |
| 3 | 3,577 | 65 | 10 | 2.8 | 1 (C25) | 1 | 1 | 0 | 9 of 10 | 3 |
| 4 | 3,610 | 66 | 11 | 3.0 | 0 | 3 | 0 | 1 | 10 of 10 | 2 |
| 5 | 3,656 | 70 | 11 | 3.0 | 1 (C54), counting | 0 | 0 | 0 | 7 of 10 | 5 |
| 6 | 3,785 | 79 | 9 | 2.4 | 1 (C54), counting | 0 | 2 | 1 | 8 of 8 | 3 |
| 7 | 3,892 | 84 | 8 | 2.1 | 1 (C73) | 1 | 1 | 0 | 6 of 7 | 2 |
| 8 | 3,874 | 96 | 6 | 1.5 | 0 | 0 | 0 | 0 | 6 of 6; second 1 of 2 | 3; second 0 |

The specification, count 5, per round. Sources as above.

| Round | Prose words | IR claims | Findings | Per thousand words | Mismatches | Contradictions | Undefined terms | Declined | Fixes held | New defects |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 3,368 | 216 | 20 | 5.9 | 4, C104 counting | 2 | 4 | 3 | 16 of 17 | 4 |
| 2 | 3,413 | 220 | 6 | 1.8 | 2, C41 counting | 1 | 0 | 1 | 5 of 5 | 1 |
| 3 | 3,443 | 222 | 9 | 2.6 | 2 | 0 | 3 | 1 | 4 of 7 | 2 |
| 4 | 3,471 | 223 | 8 | 2.3 | 3, two passages counting | 1 | 3 | 0 | 5 of 5 | 3 |
| 5 | 3,568 | 230 | 5 | 1.4 | 3, all counting | 0 | 0 | 0 | 2 of 2 | 3 |
| 6 | 3,640 | 232 | 8 | 2.2 | 1 | 1 | 0 | 0 | 7 of 7 | 3 |
| 7 | 3,727 | 236 | 14 | 3.8 | 5, three counting | 0 | 1 | 0 | 8 of 9 | 8 |
| 8 | 3,752 | 238 | 8 | 2.1 | 3, two counting | 2 | 0 | 1 | 4 of 5 | 7 |
| 9 | 3,836 | 244 | 4 | 1.0 | 1 | 1 | 1 | 0 | 3 of 3 | 3 |
| 10 | 3,864 | 244 | 2 | 0.5 | 0 | 1 | 0 | 1 | 1 of 1 | 1 |

The two counts.

| Measure | Branch point v1.9 | Specification, count 5 |
|---|---|---|
| Rounds | 8; readable | 10; the limit, not readable |
| Wall time, first round opened to close | 16:19 to 18:13 UTC | 16:19 to 18:33 UTC |
| Findings | 91 | 84 |
| Findings per thousand words, first and last round | 6.2, 1.5 | 5.9, 0.5 |
| Restatement mismatches | 5, all own | 24, all own |
| Verdicts that differ under "every mismatch counts" | 0 | 0 |
| Contradictions | 7 | 9 |
| Undefined terms | 11 | 12 |
| Findings declined | 6 | 7 |
| Fixes held at first confirmation | 79 of 84 | 55 of 61 |
| New defects at confirmation | 24 | 35 |
| Rounds opened before the previous confirmation | 5 (rounds 4 to 8) | 7 (rounds 4 to 10) |
| Step-6 fixes; passages | 2; 1 | 10; 6 |
| Claims-check runs; missing; stale | 16; 0; 0 | 19; 0; 2 (C13) |
| Words per IR claim, script | 72.19 to 40.35 | 15.59 to 15.84 |
| Signals | 1, 2, 4 | 1, 2, 4; the limit |
| Verdict | readable at round 8; C54 awaiting restatement; N1 unfixed | not readable at round 10; the final round's fix confirmed |

Sources for the table: the curves, entries and verdicts; the commit times for wall time; the script for words per claim; my counts for step-6 fixes, claims-check runs and the row on "every mismatch counts".

## Outcome

Proposed process changes. "Branch point" means v1.9. "Specification" means the methodology's intermediate-representation specification. A change marked "both texts" amends the branch point and the specification's next count.

1. In both texts, the first condition reads: "The restatement has no restatement mismatch with the IR." The exception, the override and "The override governs the exception." are struck in both texts. The branch point's `(own)` mark is struck. The quoted sentence and `relied on` stay for every mismatch. Step 6 stays: a mismatch on one passage in two rounds of the text's counts is a prose finding owed a structural fix. Evidence: judgement b; no verdict in eighteen rounds depended on the qualifiers. Recommended.
2. In both texts, the definition of a restatement mismatch gains: "A claim or a qualifier the restatement leaves out is an omission, not a restatement mismatch. A restatement that says a rule has no qualifier the IR holds has a mismatch." Evidence: judgement c; 9 of 17 described mismatches were omissions, treated two ways. Under changes 1 and 2, the branch point's round 5 would have read readable. Recommended.
3. The 200-word restatement limit stays. Evidence: judgement c; no evidence that a longer restatement cuts mismatches. No change.
4. Step 2 gains: "The stranger brief lists each passage awaiting restatement. After the restatement and before reading the IR, the stranger restates each listed passage in one sentence. The reasoning role checks the step-6 fix against that sentence." Evidence: judgement d; listed passages matched in rounds 9 and 10; C54 was never restated. Recommended.
5. Step 4's two sentences on the re-fix's mark are struck: "The reasoning role marks the re-fix `awaiting restatement` in the review record. In the next round's entry, the reasoning role states whether that round names the re-fixed claim on its `Mismatches:` line or in a finding." The mark stays for a step-6 fix. Evidence: observation 4; judgement d. Recommended.
6. Step 4 gains: "The next round opens after the reasoning role records the confirmation line and makes the fixes it calls for." Evidence: observation 2; the branch point's round 4 contradiction 9. Each wait is about 3 to 6 minutes by the commit times. Recommended.
7. Step 4 gains: "The reasoning role names the fix commit to the round's stranger instance. The instance reads the prose and the IR at that commit, in full, before it answers." Evidence: observation 3. Recommended.
8. Step 7 gains: "The reasoning role does not fix in the count a new defect the step-7 confirmation names. The reasoning role lists the defect for the owner, and the next edit fixes it." Evidence: judgement e; the branch point's second confirmation left N1 unfixed. Recommended.
9. Step 3 gains: "A fix does not add a rule the adopted changes do not hold. When a finding needs a new rule, the reasoning role lists the finding for the owner with a proposed wording. The finding counts against the verdict as its kind does until the owner decides." Evidence: judgement a and f; 27 rule claims written in the two counts; three of four signal-4 rounds on such rules. Recommended.
10. The branch point's verdict table and its four signal definitions are replaced by links to the specification's *The verdict* and *Meta-review* sections. The branch point keeps the seven steps, the review-record lines and the script. Evidence: judgement g; the branch point's Rounds section already states that its rounds follow the specification's rule. By my count the table and the signal sentences hold 332 words. Recommended.
11. Signal 3 is struck in both texts. The per-round prose words and IR claims stay as measures in the review record. Evidence: observation 11. Signal 3 has not fired in the four counts since case 009 adopted it: the specification's count 4, the vision document's count 2 and these two. The claims check and the round trip test drift every round. Recommended.
12. The script stops searching wording for the second and fourth signals. Three sentences of the branch point's script paragraph are struck: the wording report, the skip of the `Meta-review:` line and the confirmation of the wording by reading. The reasoning role checks both signals by reading, as the records already did. Evidence: observation 10. Recommended.
13. The claims check runs once per fix pass. Step 1's check before the round is struck. Step 4's sentence reads: "After each fix pass, the reasoning role runs the claims check against the previous round's prose. The reasoning role fixes a claim reported missing or stale before the confirmation read and before the next round opens." The script's unparsed rule reads "a round with a fix pass and no claims-check line". Evidence: observation 13. Recommended.
14. Step 3 strikes its sentence that makes a decided claim inferred when a fix adds an SP-18 actor or trigger. Step 3 gains: "A decided claim a fix rewords keeps its decided source and notes the rewording, as `reworded in count N, round M`. The owner ratifies the reworded claims as one list at the count's close." Evidence: judgement f; the specification's practice for C205 and C229; the owner lists A2 and A6 already ask for that ratification. Recommended.
15. The README's Meta-review records section gains: "A meta-review may cover the counts of two or more texts that ran in parallel on shared rules. The meta-review names the text with each claim identifier it cites." Evidence: judgement h. Recommended.

By my count of the sentences they strike, changes 1, 5, 10, 11 and 12 remove about 450 words from the branch point. Changes 2, 4, 6 to 9, 13 and 14 add about 200 words, an estimate. The backlog's review of the pipeline's ruleset for simplification can start from these changes.

Owner's decision on the outcome: pending.
