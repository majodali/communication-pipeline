# Case 014: meta-review of branch point v1.10 and the IR specification's count 6

Instance of the [Evaluation case](../README.md) type, a [meta-review](../../docs/vocabulary.md#def-meta-review) record. Performed 2026-11-01 by a fresh communication-pipeline session with no part in the rounds, dispatched by the owner on 2026-11-01. The case covers two subjects in one task, under the Meta-review records rule of the [evaluation corpus README](../README.md). The two counts ran in parallel on rules the two texts share. "The Orchestrator" below is the session the records name as directing the rounds. Both counts ran under the fifteen changes of [case 012](012-meta-review-branch-point-v1.9-and-ir-spec-count-5-2026-10-30.md) that the owner adopted on 2026-10-30.

| Field | Value |
|---|---|
| Case | 014 |
| Source text date | 2026-10-30 |
| Reader addressed | RD-4 (a fresh agent session) |
| Origin | First subject: the [branch point](../../docs/branch-point.md) v1.10, case 012's adopted changes; [disposition](../../docs/vocabulary.md#def-disposition) D3 (review, reasoning-role rendered; Normative: yes); nine [stranger](../../docs/vocabulary.md#def-stranger) rounds; readable at round 9; signals 1 and 4. Second subject: the methodology's intermediate-representation specification, count 6, amended by eleven of the same changes; disposition D3; four rounds; readable at round 4; signals 1 and 2. The dispatch brief reports that the owner accepted both texts on 2026-11-01. |
| Through the pipeline | yes: IR first, rendering by the [reasoning role](../../docs/vocabulary.md#def-reasoning-role), rounds under branch point v1.10 at commit 387dc43 |
| Graded by | a fresh communication-pipeline session with no part in the rounds |

## Source text

Six files, not quoted.

- The branch point: `docs/branch-point.md`, `docs/records/branch-point-v1.10.ir.md` and `docs/records/branch-point-v1.10.review.md` in this repository at commit 88d237d, the merge of pull request #25 (branch `branch-point-v1.10-case-012`). The merge changed none of the three files after the close, commit 999d777. The round states were read from that pull request's commits, 387dc43 (the adopted changes) to 999d777 (the close).
- The specification: `docs/intermediate-representation.md`, `docs/intermediate-representation.ir.md` and `docs/intermediate-representation.review.md` in the methodology repository at `origin/main`, commit be5f993. The three files last changed at commit e84619b, the close of count 6. The record's section is *Count 6*. The round states were read from commits 68b3d96 (round 1 opens) to e84619b.

`scripts/signals.mjs` was run on both records at this repository's commit 74db7bc. The methodology record was run from a copy in the session's scratch directory.

Every number below comes from a review record, a commit or a script, and names its source. "My count" marks a number I counted, with the method stated. "Estimate" marks a number I did not count. Three methods recur:

- My word count is `wordCount` in `scripts/ir.mjs` on the prose at a commit, HTML comments stripped. It reproduces every curve figure in both records.
- My claim count is the number of `C` elements `parseIR` in `scripts/ir.mjs` finds at a commit. It reproduces every curve figure in both records.
- My sentence-length check is `node scripts/lint.mjs --verbose` on the prose at each commit of the two pull requests, read for its SP-02 (sentence length) lines.

## Findings

The style rules named:

- SP-01 (one claim per sentence) and SP-02 (sentence length);
- SP-03 (referent named), SP-04 (terms defined) and SP-05 (identifier named or linked);
- SP-08 (no rhetorical devices) to SP-11 (a section answers its header);
- SP-18 (a duty names its actor and trigger), SP-25 (contradiction) and SP-26 (excess words).

A [restatement](../../docs/vocabulary.md#def-restatement) is the stranger's account of the text in at most 200 words. An [omission](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-omission) is a claim or qualifier the restatement leaves out. A [new defect](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-new-defect) is a defect a fix introduces, named at [confirmation](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-confirmation). "Step" means a step of branch point v1.10's Rounds section. "The script" is `scripts/signals.mjs`. Claim identifiers collide between the two IRs, so this case writes "the branch point's C65" and "the specification's C104".

Four terms of this case's own:

- A blocker is a finding that counts against the verdict: a restatement mismatch, a contradiction, an undefined term, or a finding waiting for the owner.
- Round-1 text is the text as its round 1 read it.
- A fix-written finding is a finding on words that a fix, a confirmation's [re-fix](../../docs/vocabulary.md#def-re-fix) or an owner decision wrote earlier in that count. The classification is my reading of each round entry against the earlier entries and commits.
- The history parts are the branch point's Meta-review history paragraph and its subsection on the owner's decisions, and the specification's History section.

### The branch point v1.10

| Round | New | Why |
|---|---|---|
| 1 | 9 findings. No mismatch. A rule gap (F5): step 6's `awaiting restatement` mark against step 7's confirmation at a readable verdict, listed for the owner as ask A2. "Fix commit" undefined (F3). | All nine sit on round-1 text. F5 is the first use of case 012 change 9: a finding that needs a new rule goes to the owner. The listed passage, v1.9's C54 (the lints sentence), matched. |
| 2 | 3 findings. No mismatch. A contradiction: step 7's "fixes the round's findings" against step 3's declined findings (F3). Round 1's F5 still pending. | F2, "the inputs step 4 lists", sits on words round 1's fixes wrote (C53, C55). The owner adopted A2 after the round. |
| 3 | 9 findings. A mismatch on C39 (the signals check), relying on a script sentence the v1.10 IR does not carry. A contradiction: the brief's "reads only the prose and the IR" against steps 4 and 7 (F6). "Process change" undefined (F9). Two SP-02 sentences of 26 words (F3, F7). | Both SP-02 sentences were written by earlier fixes: C20 by round 1's fix 1, C53 by round 2's confirmation re-fix N1. F6 began the read-scope sentence's six wordings (C65). |
| 4 | 9 findings. Two contradictions: step 7's marking against the owner's A2 sentences (F3), and C65's second wording against the reads at steps 4 and 7 (F5). | Both blockers sit on fix-written words. This is the one round of the two counts whose verdict rested on fix-written words alone. |
| 5 | 7 findings. A mismatch and a contradiction on C65's third wording (F1, F2). A contradiction: the reason of row BP-05a (proposed terms) against row BP-04 (readers RD-4 and RD-5) (F6). | F6 sits on round-1 text. The fix of F6 added "to RD-1 or RD-3" (the owner in conversation, a delegating agent) and took the sentence from 24 to 28 words (my sentence-length check at commits c3fbbdf and 7657b6a). The confirmation's re-fix moved the read scope into step 2, a [structural fix](../../docs/vocabulary.md#def-structural-fix) the Orchestrator directed. |
| 6 | 4 findings. A contradiction: step 3's "adds words only for a missing definition or referent" against the state-header move and the rewording note (F1). | F1 sits on a sentence round 4's re-fix shortened. The contradiction itself stood in round-1 text. The step 2 passage matched. |
| 7 | 8 findings. Three undefined terms: "present state", "target state" (both in v1.7's text) and "per-round table". A contradiction: the 2026-10-27 record "Case 005's change 4 ... is replaced by the third signal" against case 012 change 11 (F8). | The adopted edit struck the third signal and left that record unchanged. Round 6's re-fix N2 put C81 beside it. Four of the eight findings sit in the history parts. |
| 8 | 6 findings. One undefined term: "[own mismatch](../../docs/vocabulary.md#def-own-mismatch)" unlinked in the history paragraph (F3). Two SP-02 sentences, of 28 and 26 words (F1, F5). | F3 was the round's only blocker, in the history parts. The record says F1 and F5 are sentences "step 1 should have resolved before round 1". My sentence-length check finds them written by round 5's fix 6 and round 7's fix 8 (observation 1). |
| 9 | 4 findings. No blocker. Readable. | Fix 4, the decisions subsection's heading, did not hold at step 7 and stays residue for the owner. |

### The specification, count 6

| Round | New | Why |
|---|---|---|
| 1 | 8 findings. Mismatches on C260 (elements with a provenance status) relying on C259, and on C104 (the meta-review subject) relying on C106. | C104 drew mismatches in counts 4, 5 and 6 (the script). C260 sits in the Provenance opening, whose C44 drew mismatches in counts 4 and 5. Two structural fixes; both matched in round 2's one-sentence restatements. |
| 2 | 10 findings. Mismatches on C250 relying on C194, and on C251 relying on C235: the verdict table's counts cells dropped who withdraws and on what reason. Two undefined terms: "confirmation read" and the History's qualifiers. | C194 drew mismatches in count 5's rounds 3, 4, 5 and 7 (the script). The verdict table took a structural fix and matched in round 3. |
| 3 | 5 findings. A mismatch: the stranger restated "ten mechanical checks" against CK-01 to CK-16, the sixteen mechanical checks. The History's "exception" and "override" undefined (F4). | The record calls the mismatch the stranger's slip. It counted under case 012 change 1, and its fix added C303. F4 is round 2's F10 again: the fix held at confirmation and failed with the next stranger. The SP-02 finding (F2) sits on C281 as round 2's fix 4 worded it. |
| 4 | 8 findings. No blocker. Readable. | Four of the eight findings are IR-only. The step-7 confirmation named two IR new defects, left for the owner under case 012 change 8. |

Observations against the records.

1. Five SP-02 findings arose in the two counts: the branch point's round 3 F3 and F7, round 8 F1 and F5, and the specification's round 3 F2. All five sat on sentences an earlier fix had taken over 25 words (my sentence-length check, commit by commit). At each round 1, the [lint](../../docs/vocabulary.md#def-lint) listed no sentence of 26 words or more outside the forms the brief permits. Neither record runs the prose lint after a [fix pass](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-fix-pass). Each round records an "IR check" only. `scripts/lint.mjs` warns under SP-02 above 35 words. It lists 26 to 35 words only with `--verbose`, as information. The [style specification](../../docs/vocabulary.md#def-style-specification)'s SP-02 row reads "lint: warn over 25, flag over 35". The methodology's `mtool style` reported a 26-word sentence before the specification's round 1, so it reports from 26 words.
2. The specification's signal 1 fired on two stale reports from the [claims check](../../docs/vocabulary.md#def-claims-check). Round 2's report names C300. Its change was the `evidence:` field, E5 to E8 (the IR at commits b2c469b and b718cc4). `scripts/claims-check.mjs` compares a claim's whole text. The `evidence:` field sits inside that text. Round 4's report names C5 and C151, which took names the prose already carried. No fix failed to hold in the count. In 25 claims-check runs over the two counts, no run reported a missing claim. The three stale reports were IR-only edits (my count of the claims-check lines: 17 on the branch point, 8 on the specification). Case 012 observation 13 counted 35 runs with no missing claim. Its two stale reports both named C13, an IR brought to prose that already carried it.
3. The script reads signal 1 on the branch point in rounds 3, 8 and 9. The record's verdict names rounds 3 and 8. Round 9's line is step 7's confirmation, "2 of 3 fixes hold". Case 012 observation 1 found that difference too.
4. The branch point's step 7 marks each final-round finding confirmed or unfixed "At the limit" only. Round 4's fix of F3 scoped it so. The specification's *Rounds, the limit and rework* also marks the findings of a readable round, "in the delivered text". The branch point's round 9 recorded final-round marks at a readable verdict, as the specification reads. The two texts now state the marking differently.
5. The two IRs give one set of adopted changes two provenances. The branch point's IR marks case 012's changes decided, "owner, 2026-10-30". The specification's IR marks each claim that renders a change proposed, under its ask A8.
6. The branch point's IR covers only the passages v1.10 changed. Every round's brief said so. Strangers reported omissions against claims the IR does not hold. The round entries count about 50 in round 3, about 40 in round 7 and about 28 in round 8. Round 3's mismatch relied on a script sentence the v1.10 IR does not carry. Round 8's F4 and F6 found reasons that were not IR claims. Round 8's fix 6 then missed a second such reason. The specification's IR covers its whole text. Its rounds reported 9, about 6, about 12 and 2 omission topics.
7. Round 5's confirmation re-fix moved C65 into step 2 as a structural fix. The record states "though step 6's trigger is a mismatch". The finding was a new defect, a contradiction. Step 3 does not forbid a move, so no rule was broken.
8. The specification's three signal-2 claims each sat on a passage that took a structural fix in count 5. Each such fix matched in count 5's late rounds. C104 and C194 then drew mismatches in count 6's rounds 1 and 2, on fresh full restatements. A listed passage's one-sentence match did not predict the next count's restatement.
9. The branch point's owner list is numbered 1 to 5, then 7, then 6.
10. Pull request #25 merged on 2026-10-31 at 19:07 UTC. Methodology pull request #72 merged on 2026-11-01 at 00:08 UTC. At both merges, the Status lines read "awaiting the owner's acceptance". The branch point's Status line also reads "v1.9 is active on main". Neither repository records the acceptance the dispatch brief reports.
11. Every round of both counts opened in a commit that records the previous confirmation and its re-fixes (the commit messages). From fix commit to the next round's opening commit took 1 minute 36 seconds to 5 minutes 17 seconds over eleven intervals (the commit times). The branch point's count ran from 21:45:19 to 23:14:18 UTC, 89 minutes. The specification's ran from 21:45:59 to 22:32:44 UTC, 47 minutes (commits 5fc7271, 999d777, 68b3d96 and e84619b).
12. Fixes crossed between the texts five times by the records. The owner's A2 rule entered both texts in round 2. Its semicolon split entered the specification in round 3 and the branch point in round 3 too, "at the Orchestrator's direction". The branch point's C19 and C81 took the specification's wording. The specification's C278 took the branch point's.

Case 012's changes in these counts, by their numbers.

1. Every mismatch counts. Applied in both counts. No Orchestrator ruling on a qualifier was needed. The specification's round 3 slip counted and drew a fix that added a claim, C303. That round had an undefined term as well, so no verdict depended on it.
2. An omission is not a mismatch. Applied in every round. Every round of both counts noted omissions. Both readable verdicts rest on this change: the branch point's round 9 noted four omissions, the specification's round 4 two.
3. The 200-word limit stays. No record reports a restatement over the limit.
4. The brief lists passages [awaiting restatement](../../docs/vocabulary.md#def-awaiting-restatement). Five listed passages were tested, and all five matched. The branch point listed v1.9's C54 in round 1 and the step 2 read scope in round 6. The specification listed the Provenance column and the meta-review subject in round 2, and the verdict table in round 3. C54's mark, open since v1.9, cleared in round 1.
5. The re-fix mark struck. No mark appears.
6. The next round waits for the confirmation's fixes. Applied in every round (observation 11). No round read text a confirmation had already found defective.
7. The instance reads both files in full at the fix commit. Applied. Twelve of thirteen confirmation entries say "in full". The branch point's round 3 entry says "read both files". No confirmation answer was disputed as a partial read. Case 012 had five such answers.
8. A step-7 new defect goes to the owner. Applied. The specification listed two. The branch point's step 7 named none. Its one fix not held went to the owner as residue.
9. A fix adds no rule. Applied. The branch point's round 1 F5 went to the owner and returned adopted before round 3. The round 7 confirmation used the rule to flag C85. Prose grew 5.2 and 4.2 percent, against 15 and 16 percent in case 012's counts (judgement d).
10. The verdict table and signals become links. Applied in the branch point. Its verdict subsection fell from 321 words at v1.9's acceptance to 108 at round 1 (my word count by section at commits d1c5b55 and 5fc7271). No branch-point finding fell on the verdict.
11. Signal 3 struck. The adopted edit left the 2026-10-27 decision record stating the third signal as current. That record drew round 6's new defect N2, round 7's F6 to F8 and round 8's F4 to F6. Round 7's F8 was a blocker.
12. No wording search. Both records read the second signal's declines and the fourth signal by reading.
13. The claims check once per fix pass. Applied: 25 runs (observation 2). It fired the specification's signal 1 on IR-only edits.
14. A reworded decided claim keeps its source. Applied. The branch point's owner list names 31 reworded claims and 7 added decided claims. The specification's names 21 (my count of the lists). Two new defects at the specification's round 3 confirmation, N7 and N8, were missing rewording notes.
15. Multi-text meta-reviews. Applied by this case.

## My judgement

a. Why each signal fired.

Signal 1 on the branch point: three fixes did not hold. Round 3's fix 9 defined "process change" after its first use. Round 8's fix 6 added one missing reason and missed a second. Round 9's fix 4 renamed a heading that still named case 005 only. All three sit in the history parts: round 3's definition, C62, is a history claim. The signal reflects 3 fixes of 56, about 5 percent (my arithmetic).

Signal 1 on the specification: no fix failed. The signal fired on stale reports from IR-only edits (observation 2). The claims check has now run about 60 times across case 012's counts and these. It reported no missing claim and five stale reports, none a prose drift. In these counts, its share of signal 1 measured nothing about the prose.

Signal 2 on the specification: C104, C106 and C194. Each passage drew mismatches across counts 4, 5 and 6. Each took a structural fix in count 6 and matched in the next round. Observation 8 shows that a match after a fix does not settle such a passage. The signal names passages that fresh readers keep misreading. That information is real.

Signal 4 on the branch point: rounds 3 to 7 by the record. By my reading, rounds 3, 4 and 5 hold contradictions on words a fix wrote. Rounds 6 and 7 hold contradictions that stood in round-1 text, beside words a fix touched. "Touched" is wide enough to fire on latent defects next to a fix.

b. Fix-written defects and the confirmation step's yield.

The strangers found 90 findings (59 and 31). By my reading, 23 were fix-written: 19 on the branch point, 4 on the specification. The confirmations named 30 new defects (17 and 13, the confirmation lines), all fix-written by definition. Of 120 defects found, 53 lay in words the counts' own fixes wrote, 44 percent (my arithmetic).

At confirmation, 80 of 83 fixes held. The strangers found three times as many defects as the confirmations (90 against 30). Fixes that answered a new defect go unconfirmed. By my reading, the branch point's 19 fix-written findings split by origin. Six sat on confirmation re-fixes and five on fix-pass fixes. Seven had mixed origins, and one sat on the owner's A2 rule.

Rounds lost to fix-written defects were few. Eleven rounds returned not readable. Ten of them had a blocker in round-1 text. Only the branch point's round 4 rested on fix-written blockers alone:

| Text, round | Blockers in round-1 text | Fix-written blockers |
|---|---|---|
| Branch point, 1 | F3 "fix commit"; F5 the rule gap | none |
| Branch point, 2 | F3 step 7 against step 3; round 1's F5 pending | none |
| Branch point, 3 | C39 mismatch; F9 "process change" | F6 the read scope |
| Branch point, 4 | none | F3 step 7 against A2; F5 C65 |
| Branch point, 5 | F6 BP-05a against BP-04 | F1, F2 on C65 |
| Branch point, 6 | F1 step 3's word list | none |
| Branch point, 7 | "present state", "target state", "per-round table"; F8 the third-signal record | none |
| Branch point, 8 | F3 "own mismatch" unlinked | none |
| Specification, 1 | C260 and C104 mismatches | none |
| Specification, 2 | C250 and C251 mismatches; two terms | none |
| Specification, 3 | the "ten checks" mismatch; F4 the History's qualifiers | none |

The counts ran long because fresh strangers kept finding latent defects in round-1 text. The branch point's rounds 7 and 8 found terms unchanged since v1.7 and v1.9. Findings per thousand words stayed between 0.8 and 2.4 on the branch point, and between 1.2 and 2.4 on the specification (the curves). The curves did not fall. A readable verdict came when one stranger found no blocker. The fix-written defects added findings and edits more than rounds.

The confirmation step earns its place. It caught three fixes not held and 30 new defects before the next stranger read. From fix commit to the next round took 1 to 5 minutes (observation 11). Its weak point is the re-fix it calls for, which nothing confirms. A second confirmation would add a round trip for six findings over nine rounds. I do not propose one.

c. Where effort went without converging.

The read-scope sentence, C65, took six wordings in rounds 3 to 6 (the record's owner list). Two were confirmation re-fixes. The sentence stated a global rule: the stranger reads only the prose and the IR. Steps 4 and 7 send the instance more. Each rewording tried to scope the rule by a phrase: "In its round read", "When it reads for a round", "For its restatement at step 2", "For its review". Each phrase drew a new contradiction or an undefined referent. The fix that settled it was a move. The scope went into step 2, beside the read-order sentence, as "In step 2, ...". The move came at round 5's confirmation, five wordings after round 3. Under step 6 the move had no trigger, because the defects were contradictions. Nothing forbade it earlier (observation 7). A rule forcing it earlier would have saved about three findings and no round (estimate): round 5 still had F6.

The history parts took the most late effort. On the branch point, 12 of 59 findings sat in the history parts (my count from the round tables). So did 3 of 17 new defects and all 3 fixes not held. Round 8's only blocker sat there. Round 7's F8 sat there. The residue the owner holds, round 9's fix 4, sits there. On the specification, round 2's F10, round 3's F4 and round 4's F4 sat in the History, and round 3's F4 was a blocker. The history parts hold 620 of the branch point's 3,950 words (my word count by section at commit 999d777). They hold about 350 of the specification's 4,303 (at commit e84619b). They state no rule a reader of the round procedure needs.

Duplicated rules took cross-text effort. Both texts state the rules on fix passes, the claims check, new defects, the readable verdict and the limit. Fixes crossed five times (observation 12). The marking rule still diverged (observation 4).

d. Growth of the texts.

| Measure | Branch point v1.10 | Specification, count 6 |
|---|---|---|
| Prose words, round 1 to close | 3,755 to 3,950, 5.2 percent | 4,129 to 4,303, 4.2 percent |
| IR claims, round 1 to close | 51 to 89, 75 percent | 265 to 278, 4.9 percent |
| Decided, inferred and proposed claims, round 1 to close | 50, 1, 0 to 80, 9, 0 | 225, 12, 28 to 232, 14, 32 |
| IR terms, round 1 to close | 7 to 10 | 35 to 36 |
| Words per IR claim, round 1 to close | 73.6 to 44.4 | 15.6 to 15.5 |
| Prose words added by the adopted edit | 3,921 to 3,755, minus 166 | 3,885 to 4,129, plus 244 |

Sources: my word and claim counts at commits d1c5b55, 387dc43, 5fc7271 and 999d777, and e41a8f0, 68b3d96 and e84619b; the curves and verdicts. Percentages and ratios are my arithmetic.

Prose growth fell to about a third of case 012's counts (judgement f of case 012: 15 and 16 percent). Case 012 change 9 is the likely cause. No fix added a rule beyond the owner's A2. The branch point's claim growth is mostly scope: fixes brought unchanged sentences into a partial IR, and splits and recorded reasons became claims. Its prose grew 195 words, of which 169 went into the Rounds section (my word count by section). Steps 2, 3 and 7 grew from 248, 228 and 141 words to 304, 281 and 180. Step 2 now holds 21 sentences in one list item (my count).

Over versions, the branch point grew from 2,124 words at v1.6 (case 012) to 3,950. The adopted changes of case 012 cut 166 words. Case 012 estimated a net cut of about 250. The specification took the rules the branch point now links. Its adopted edit added 244 words. The two texts hold 8,253 words between them at close (my arithmetic).

e. Should a text whose round 1 finds no mismatch run the whole procedure?

The branch point's round 1 had no mismatch. Seven of its nine rounds had none. The count still ran nine rounds. Forty of its 59 findings sat on round-1 text. Seven of its eight failed rounds had a round-1 blocker (judgement b). Among them were real contradictions: the A2 rule gap, BP-05a against BP-04 and the stale third-signal record. A clean round 1 did not predict a short count. A shorter procedure after a clean round 1 would have delivered the text with those defects in it. Case 005's decision against reviewing only amended passages after round 1 still holds on this evidence. The cheaper path is a smaller text under review: the history parts out, duplicated rules linked.

f. The one-task form over two texts.

The form fit again. One Orchestrator ran both counts from 21:45 UTC. Fixes crossed five times (observation 12). The marking divergence (observation 4) shows only when both texts are read together. The cost is length and colliding identifiers, met by naming the text with each claim. No change.

g. A starting list for the ruleset simplification review.

The owner scheduled the review after v1.10 landed (the backlog's entry). In order of evidence:

1. Link, do not restate. The branch point's Rounds section restates the specification's rules on ten topics. They cover the restatement mismatch, the omission, the listed passages and the fix rules. They also cover the fix pass, the claims check, the fix commit, new defects, and the readable verdict and the limit. The branch point keeps what is the pipeline's own: the review-record line forms, the scripts, the step order and the stranger brief. Evidence: judgement c; observations 4 and 12. Change 7.
2. Take the history parts out of the reviewed texts. Evidence: judgement c. Change 6.
3. Give the branch point a whole-text IR. Evidence: observation 6. Change 8.
4. Take the claims check out of signal 1, and drop the unparsed-line rule for a round with no claims-check line. Evidence: observation 2; judgement a. Changes 2 and 3.
5. Key step 6 and signal 2 on claims, as the script does. Evidence: the record's notes in rounds 2 and 9. Change 4.
6. Lint each fix pass at 25 words. Evidence: observation 1. Change 1. Case 013's pending change 4 (step 1 with `--verbose`) becomes unneeded under it.
7. State the step-4 read order. Evidence: the record's round 3 note. Change 5.
8. The owner's list of reworded decided claims (case 012 change 14). The two records' owner lists name 38 and 21 claims (case 012 change 14, above). Ask whether the owner's acceptance of a text should ratify them as one block.
9. Step 2's length: 21 sentences, 304 words, one list item. Once item 1 is done, step 2 can hold the stranger's reads and the `Mismatches:` line only.
10. Non-verdict findings. Of the branch point's 59 findings, 42 were none of the three verdict kinds. Of the specification's 31, 23 were none (my count from the curves). Their fixes produce new defects like any fix. Ask whether a count fixes them in the round or batches them for the close.
11. The global-rule pattern: a sentence that says "only" with exceptions in other steps (judgement c). Ask the review to scope each such rule by its place.
12. Items the backlog already names: branch point v1.9's residue N1, the stranger brief's calibrations and the style specification's rules. No round of either count added a form to the brief (the round entries).

Readability.

The branch point as accepted is readable for RD-4 in my reading. From it I can state the dispositions, the rules, the seven steps, the verdict by link, the three signals and the scripts. Remaining defects:

- round 9's fix 4, the decisions subsection's heading, unfixed (owner item 5);
- the Status line still awaiting the owner's acceptance (observation 10);
- step 7's marking at the limit only, against the specification (observation 4);
- step 2 at 304 words in one list item (my count);
- "ratification ask" undefined (the round 9 note).

The specification at close is readable for RD-4 in my reading. Remaining defects: the two IR new defects of the step-7 confirmation (open item 5); the marking "in the delivered text" (observation 4); the Status line (observation 10).

## Measures

The branch point v1.10, per round. Sources: the curve, the round entries and the confirmation lines; the last column is my reading.

| Round | Prose words | IR claims | Findings | Per thousand words | Mismatches | Contradictions | Undefined terms | Declined | Fixes held | New defects | Fix-written findings |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 3,755 | 51 | 9 | 2.4 | 0 | 1, owner-pending | 1 | 0 | 8 of 8 | 2 | 0 |
| 2 | 3,790 | 55 | 3 | 0.8 | 0 | 1, and round 1's pending | 0 | 0 | 3 of 3 | 3 | 1 |
| 3 | 3,821 | 59 | 9 | 2.4 | 1 (C39) | 1 | 1 | 0 | 8 of 9 | 2 | 3 |
| 4 | 3,852 | 63 | 9 | 2.3 | 0 | 2 | 0 | 1 | 8 of 8 | 2 | 4 |
| 5 | 3,865 | 69 | 7 | 1.8 | 1 (C65) | 2 | 0 | 0 | 7 of 7 | 1 | 3 |
| 6 | 3,888 | 75 | 4 | 1.0 | 0 | 1 | 0 | 0 | 4 of 4 | 4 | 1 |
| 7 | 3,939 | 79 | 8 | 2.0 | 0 | 1 | 3 | 0 | 8 of 8 | 2 | 3 |
| 8 | 3,944 | 84 | 6 | 1.5 | 0 | 0 | 1 | 0 | 5 of 6 | 1 | 2 |
| 9 | 3,953 | 89 | 4 | 1.0 | 0 | 0 | 0 | 1 | 2 of 3 | 0 | 2 |

The specification, count 6, per round. Sources as above.

| Round | Prose words | IR claims | Findings | Per thousand words | Mismatches | Contradictions | Undefined terms | Declined | Fixes held | New defects | Fix-written findings |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 4,129 | 265 | 8 | 1.9 | 2 (C260, C104) | 0 | 0 | 0 | 6 of 6 | 3 | 0 |
| 2 | 4,208 | 272 | 10 | 2.4 | 2 (C250, C251) | 0 | 2 | 0 | 8 of 8 | 5 | 1 |
| 3 | 4,273 | 276 | 5 | 1.2 | 1 (C53) | 0 | 1 | 0 | 5 of 5 | 3 | 3 |
| 4 | 4,291 | 277 | 8 | 1.9 | 0 | 0 | 0 | 0 | 8 of 8 | 2 | 0 |

The specification's round 3 counts F2, F3 and F5 as fix-written. Its F4 sits on round-1 text that round 2's fix did not settle.

The two counts.

| Measure | Branch point v1.10 | Specification, count 6 |
|---|---|---|
| Rounds | 9; readable | 4; readable |
| Wall time, round 1 opened to close | 21:45:19 to 23:14:18 UTC, 89 minutes | 21:45:59 to 22:32:44 UTC, 47 minutes |
| Findings | 59 | 31 |
| Findings per thousand words, first and last round | 2.4, 1.0 | 1.9, 1.9 |
| Restatement mismatches | 2 | 5 |
| Contradictions | 9 | 0 |
| Undefined terms | 6 | 3 |
| Findings of the three verdict kinds | 17 | 8 |
| SP-02 findings; written by fixes | 4; 4 | 1; 1 |
| Findings declined | 2, both accepted | 0 |
| Fixes held at first confirmation | 53 of 56 | 27 of 27 |
| New defects at confirmation | 17 | 13 |
| Fix-written findings | 19 | 4 |
| Rounds with only fix-written blockers | 1 (round 4) | 0 |
| Listed passages tested; matched | 2; 2 | 3; 3 |
| Claims-check runs; missing; stale | 17; 0; 0 | 8; 0; 3, all IR-only |
| Findings in the history parts | 12 | 3 |
| Prose words, round 1 to close | 3,755 to 3,950 | 4,129 to 4,303 |
| IR claims, round 1 to close | 51 to 89 | 265 to 278 |
| Signals | 1, 4 | 1, 2 |
| Verdict | readable at round 9; round 9's fix 4 unfixed | readable at round 4; two IR new defects for the owner |

Sources for the table: the curves, entries, confirmation lines and verdicts; the commit times; the script; my counts for the verdict kinds, the fix-written findings, the claims-check runs, the history parts and the SP-02 origins.

## Outcome

Proposed process changes. "Branch point" means v1.10. "Specification" means the methodology's intermediate-representation specification. A change marked "both texts" amends the branch point and the specification's next count.

1. `scripts/lint.mjs` warns under SP-02 over 25 words and flags over 35, as the style specification's SP-02 row states. Step 4 gains: "After each fix pass, the reasoning role runs the prose lint and resolves each SP-02 warning on a sentence the fix pass wrote." Evidence: observation 1; five SP-02 findings, all written by fixes. The lint then warns on 276 sentences of 26 to 35 words across the repository, most in records and cases. The figure is my count with `--verbose` at commit 74db7bc. Case 013's pending change 4 is not needed under this change. Recommended.
2. Both texts: the first signal reads "in two or more rounds, a fix was not held at confirmation". The claims-check clause is struck from the signal and from the script's signal 1. The unparsed-line rule for a round with a fix pass and no claims-check line is struck, with its `Meta-review: unparsed` naming of the round. The claims check still runs after each fix pass, and step 4 still fixes what it reports. Evidence: observation 2; judgement a. Recommended.
3. `scripts/claims-check.mjs` compares a claim's text without its `evidence:` field. Evidence: observation 2; C300's stale report. Recommended.
4. Both texts: step 6 and the second signal key a recurrence on a claim. The step-6 sentence reads: "The reasoning role treats a restatement mismatch whose entry names one claim, in either place, in two rounds of the text's counts as a prose finding." Evidence: the record's notes in rounds 2 and 9; step 6 already names the script's report as its check. Under this change the specification's round 1 mismatch on C260 would not have triggered step 6. That round still took a fix, so the cost is at most one round there (estimate). Recommended.
5. Both texts: step 4's fix commit holds the fix pass and the fixes the claims check calls for. The sentence reads: "The fix commit is the commit that holds the round's fix pass and the fixes the claims check calls for." Evidence: the record's round 3 note. In 25 runs no claims check called for a prose fix, so no round's answer changes. Recommended.
6. The history parts leave the reviewed texts. The branch point's Meta-review history paragraph and its subsection on the owner's decisions move to a history file outside the rounds, with one linking sentence. The Versions table stays. The methodology decides where the specification's History goes. Evidence: judgement c; the branch point's round 8 blocker and round 9 residue; the specification's round 3 blocker. About 620 words leave the branch point (my word count). Under this change the branch point's round 8 reads readable, one round early (estimate). Recommended.
7. The ruleset review rewrites the branch point's Rounds section to hold the pipeline's own procedure only. The review-record line forms, the scripts, the step order and the stranger brief stay. Each rule the specification states, the branch point links. Evidence: judgement c; observations 4 and 12. By my count, steps 2, 3, 4 and 7 hold 1,082 words. The review sets the cut; I did not estimate it. Recommended.
8. The branch point's next version carries a whole-text IR, consolidated from the IRs of v1.4 to v1.10. Evidence: observation 6. Recommended.
9. Step 6 gains: "When a fix would reword a sentence that two earlier fixes of the count reworded, the reasoning role makes a structural fix instead." Evidence: judgement c; C65's six wordings. Not recommended: step 3 already permits the move, round 5's confirmation made it, and the rule would have saved no round (estimate).
10. A count whose round 1 has no mismatch reviews only fixed passages after round 1. Not recommended: judgement e; 40 of the branch point's 59 findings sat on round-1 text.
11. The one-task form over two texts stays. Evidence: judgement f. No change.

Changes 6 and 7 bear on 1,702 of the branch point's 3,950 words (my word count). The 1,702 are the history parts and steps 2, 3, 4 and 7. The ruleset review can start from changes 1 to 8 and the list in judgement g.

Owner's decision on the outcome: pending.
