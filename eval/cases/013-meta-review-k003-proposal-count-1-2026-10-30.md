# Case 013: meta-review of the K-003 proposal's count 1

Instance of the [Evaluation case](../README.md) type, a [meta-review](../../docs/vocabulary.md#def-meta-review) record. Performed 2026-10-30 by a fresh communication-pipeline session with no part in the rounds, dispatched by the owner on 2026-10-30. The subject is count 1 of the project-orchestrator proposal to amend K-003 (the Backlog is the single source of progress truth), titled "A declared planning/execution model is the source of progress truth". The count ran under the methodology's intermediate-representation specification, in its section on [stranger](../../docs/vocabulary.md#def-stranger) rounds, and under [branch point](../../docs/branch-point.md) v1.8. "The Orchestrator" below is the project-orchestrator session that accepted task T078 and acted as the [reasoning role](../../docs/vocabulary.md#def-reasoning-role) for the rounds, as the review record names it.

| Field | Value |
|---|---|
| Case | 013 |
| Source text date | 2026-10-30 |
| Reader addressed | RD-4 (a fresh agent session), and the maintainers of majodali/methodology who adjudicate the amendment, as the proposal's Reader line states |
| Origin | project-orchestrator node P3-N007, task T078: the proposal and its IR. [Disposition](../../docs/vocabulary.md#def-disposition) D3 (review, reasoning-role rendered; Normative: yes). Ten stranger rounds, tasks T081 to T091. The limit reached, round 10 not readable, the final round's fixes confirmed. The dispatch brief reports that the owner accepted the text at node P3-N007's gate on 2026-10-30. |
| Through the pipeline | yes: the IR first (commit aadcfb9, before the prose at 94d148d), rendering by the reasoning role, rounds under branch point v1.8 |
| Graded by | a fresh communication-pipeline session with no part in the rounds |

## Source text

Three files, not quoted: `docs/proposals/planning-execution-model-is-progress-truth.md`, its `.ir.md` and its `.review.md` in the project-orchestrator repository, read at `origin/main`, commit 063f36a. The round states were read from the commits that touch the three files, aadcfb9 (the IR) to 4d11d83 (the close). Each round's state is the commit that opened it: 549f016, 0a64c16, df19abc, ec3613b, 577d6a6, b4c1f73, 00dd645, 5f439fa, 4ccf348 and 3531d3e.

The rules in force were read from this repository's `docs/branch-point.md` at commit 1c6d1f0, the merge of pull request #20 (v1.8). The dispatch brief names `docs/records/branch-point-v1.8.ir.md`. No branch holds that file. v1.8 changed v1.7 by one row, BP-00 (commit d9947bb). Its other rules are v1.7's, whose IR is `docs/records/branch-point-v1.7.ir.md`. v1.8 was on `main` from 15:42 to 20:12 UTC on 2026-10-30, so through the whole count (commit times of 1c6d1f0 and 5ef1f76). The methodology's specification was read at its `main`, commit e049bc6.

`scripts/signals.mjs` was run on a copy of the review record at commit 063f36a, in two versions: this repository's commit d1c5b55 (v1.9's script) and commit 1c6d1f0 (v1.8's script). The two versions give the same reading of the four signals. v1.8's script reports 10 unparsed lines. v1.9's reports 11, adding round 10's missing claims-check line.

Every number below comes from the review record, a commit or a script, and names its source. "My count" marks a number I counted, with the method stated. "Estimate" marks a number I did not count. Two counting methods recur:

- My word count is `wc -w` of the prose file at the round's opening commit, the [render map](../../docs/vocabulary.md#def-render-map) included. It reproduces the record's round 1 figure, 2,170, and each "Before round N" figure from round 4 on, except round 5's: the record gives 2,494 and my count 2,496.
- My claim-edit count compares each IR element's text at each round's opening commit with the next round's. An added element, a cut element and a changed text or status each count as one edit.

## Findings

The style rules named: SP-02 (sentence length), SP-03 (referent named), SP-04 (terms defined), SP-18 (a duty names its actor and its trigger), SP-25 (contradiction) and SP-26 (excess words). A [restatement](../../docs/vocabulary.md#def-restatement) is the stranger's account of the text in at most 200 words. An [own mismatch](../../docs/vocabulary.md#def-own-mismatch) is a restatement mismatch the stranger attributes to its own restatement. "Step" means a step of branch point v1.8's Rounds section. "The rule text" means the replacement K-003 block in the proposal's section *The change*: K-003's statement with the appended sentence, claim C9. "The referent passage" means the sentences of *The change* on how the appended sentence reads against K-003's kept clauses and title: claims C12, C77, C83, C84, C85 and C87.

| Round | New | Why |
|---|---|---|
| 1 | 23 findings. One mismatch, attributed to the prose: ask A3 gave the [term ratification](../../docs/vocabulary.md#def-term-ratification) to the owner, the prose to "the reader". Eight SP-02 findings. Five undefined terms: referent, slice, carrier, specification links, risk links. One contradiction: the migration note against K-003's kept duty to rewrite checked entries (23). | The record's line before round 1 reports no sentence of the proposal's own text over 25 words. The [lint](../../docs/vocabulary.md#def-lint) run with `--verbose` lists 15 (observation 1). Four of the five undefined terms are words of project-orchestrator or of the model's lines. |
| 2 | 19 findings. Two contradictions on the list of what is next: its definition against "nodes only" (1), and one item per open node against the slice's empty lists (2). Six undefined terms: full instance, implicit-C0, tier, IR, pilot, status truth. Seven SP-02 findings. | The list of what is next is one of the IR's two proposed terms, T5. Round 1's fixes added T15 (referent) and T16 (slice). |
| 3 | 16 findings. An own mismatch on the evidence (C41): the stranger read the evidence as "one slice". Three undefined terms, each used before its link: node, Project model, stage. One contradiction: the Change line named one sentence while the body also changed the Motivated-by line. Five SP-26 findings. | The Change line was round 1's text. C15, the Motivated-by sentence, changed in round 1's fix (my claim-edit count). The record declines finding 14 on the reason that declined round 1's finding 4. |
| 4 | 14 findings. Two mismatches on the evidence passage: C41 (IR) and C31 (own; relied on C41). Step 6 applied: C78 added. One contradiction: K-003's referent sentence against the appended "instead" (7). "Whole-model list" undefined. | The first finding on the rule text. Decision 10 of the P3-N002 specification limits the amendment to one appended clause, so the rule text could not change. The fix added C77, a sentence saying the appended sentence is an exception. "Whole-model list" came with round 2's [re-fix](../../docs/vocabulary.md#def-re-fix) A. |
| 5 | 10 findings. An own mismatch on C6: the condition "under K-003 as released" dropped. One contradiction: "switches its Backlog to a rendering" (C80) against open entries staying the Backlog's own content (F10). Undefined: verification evidence, the model's two components, Project model. | C80 was split from C70 in round 4's fix. Its wording was round 1's. The step-6 passage went unrestated. Round 5's fixes and re-fixes added C83 to C86. The confirmation named seven new defects, among them "the plan model" undefined (N3). |
| 6 | 6 findings. No mismatch. Two contradictions: the yielding sentence named one referent clause while "no other document may claim that role" stood (1), and the kept title against the amended statement (2). | Both sit on the rule text. The Orchestrator met both in the referent passage (C83 reworded, C87 added) and carried the question to the owner's gate. The confirmation instance recorded the residual: the quoted rule keeps "no other document may claim that role" unconditioned. The step-6 passage matched. |
| 7 | 15 findings as the stranger numbered them. Five are omissions the record does not count. One prose gap: the owner's gate of ask A1 stood only in the HTML comment (6). Four undefined: definition-by-citation form, Custom definitions section, "holds", upcoming section. A possible contradiction on C85's referent (15). SP-02 on the appended sentence declined (7). | "Holds" came with round 3's fix to C35. Fix 15 did not hold. The stranger showed the decline's second reason wrong, so the decline stood on decision 10 alone. The appended sentence's length went to the owner. |
| 8 | 6 findings. Own mismatches on C78 and C31. "Upcoming section" undefined. Three tensions noted without a finding, one on the referent's extent. | C78 is the step-6 passage's own claim (observation 5). "Upcoming section" came with round 2's fix to C27. A re-fix added C92. |
| 9 | 6 findings. An own mismatch on C25: "claims no authority" restated as "not authoritative". "Taken in" undefined. | "Takes it in" had stood in C29's sentence since round 1's fix. The fix added C93, which defines it. |
| 10 | 4 findings and an own mismatch on C8 (the citation dropped). Undefined: project-orchestrator, stages and edges. Two contradictions: C92 against C29 (1), and the full instance's rendering stated in the present tense. | C92 came with round 8's re-fix. The present-tense sentence came with round 6's re-fix. "Stages and edges" came with round 5's re-fix of N3. All four findings were fixed and confirmed under step 7. |

Observations against the record.

1. Step 1 asks the reasoning role to resolve every SP-02 lint warning, a sentence over 25 words, before round 1. The record ran `mtool style`, which reported no own sentence over 25 words. This repository's lint also reports none by default, because `scripts/lint.mjs` warns only over 35 words. It lists sentences of 26 to 35 words only with `--verbose`, as information. With `--verbose` it lists 15 such sentences in the round 1 prose, outside the quote. The [style specification](../../docs/vocabulary.md#def-style-specification)'s SP-02 row says "lint: warn over 25". Rounds 1 and 2 then found 15 SP-02 findings, and the Orchestrator accepted all 15.
2. v1.9's script reads 11 unparsed lines. All ten confirmation lines carry detail inside the fixed form, and each is wrapped over several lines. The record places each claims check under a "Before round N" heading, which the script reads as part of round N minus 1. So the script reports round 10 with no claims-check line. The record has no per-round table, so the script cannot read signal 3. The record says so: "the signals script reads the pipeline's record form, not this one".
3. The record gives two word counts. Its "Before round N" lines match my word count. Its round entries from round 7 on give lower figures, 2,556 to 2,585. The verdict's "19 percent" takes round 1 from the first series and round 10 from the second. On one series the prose grew from 2,170 to 2,686 words at round 10's opening, 24 percent (my arithmetic).
4. Round 8's line reads "5 of 5 fixes hold, 4 in part". Step 4 says a fix that holds in part is not held. Read by step 4, round 8 holds 4 of 5. Round 9's line reads "4 of 4 fixes hold (F5 with a placement defect)".
5. Round 8's `Mismatches:` line names C78. C78 is the claim round 4's step-6 fix added. The quoted sentence, "The other three are the owner's decisions of 2026-10-28, the term-by-term cross-check and the count of open Backlog entries.", is in the step-6 passage. Round 8's step-6 line reads "matched on restatement". By step 6, the evidence passage drew mismatches in rounds 3, 4 and 8. No second [structural fix](../../docs/vocabulary.md#def-structural-fix) followed.
6. The script reports signal 2 on two claims: C41 in rounds 3 and 4, and C31 in rounds 4 and 8. The record's verdict names the slice passage only. C31's two entries sit on different passages: round 4's relied on C41's sentence, round 8's on the count sentence.
7. The record reads signal 4 in rounds 6 and 10, on passages earlier fixes "wrote". The signal's wording is "touched". Read so, rounds 3 and 5 also qualify: round 3's contradiction involves C15, which round 1's fix changed, and round 5's sits on C80, which round 4's fix split.
8. The IR's Terms list held 17 entries from round 3's opening to the close (my count of `T` elements at each opening commit). Fixes brought in "whole-model list", "holds", "upcoming section", "taken in" and "plan model". None became a Terms entry. T5's definition absorbed "upcoming section" in round 8. C93, a claim, defines "takes in".
9. Step 2 asks the record to name each round's stranger model. The record names "a fresh instance at the frugal tier", a tier and not a model.
10. Round 9's restatement ran 205 words, over step 2's limit of 200. The stranger left it untrimmed rather than edit it after reading the IR.
11. Round 7 did not count five omissions as mismatches. v1.8 holds no such rule. The verdict did not depend on it: round 7 had blockers 6, 11, 12 and 15.
12. Every round from round 2 opened in a commit that records the previous round's confirmation and its re-fixes (the commit messages). The count ran from 16:06:58 to 17:39:50 UTC, 93 minutes (commit times of 549f016 and 4d11d83). It overlapped the two counts of [case 012](012-meta-review-branch-point-v1.9-and-ir-spec-count-5-2026-10-30.md), 16:19 to 18:33 UTC. The commits of all three counts carry one `Claude-Session` trailer, which this case's commit also carries. The trailer names the hosting session, so it does not show whether one agent ran the three counts.
13. The Plan register's line for P3-N007 (`docs/plan-register.md` at 063f36a) gates the node on "ten terms". The proposal's IR proposes two, T5 and T6. The records I read do not say which text holds the remaining eight. By my count, 10 of the IR's 17 terms are defined outside the methodology's v1.6.0 vocabulary and K-003. Two are proposed here (T5, T6). Seven are defined in project-orchestrator: T7 node, T8 Plan register, T9 Project model, T10 edge, T13 part, T16 slice and T17 full instance. One, T1 planning/execution model, is an entry on the methodology's unreleased `main`.
14. The project-orchestrator records at 063f36a still show P3-N007 `verifying`, gated on the owner. The acceptance the dispatch brief reports is not yet recorded there.

Earlier meta-reviews' changes in this count, by their numbers. Case 009's changes were in force through v1.7. Cases 010 and 011's changes were adopted on 2026-10-30 for v1.9, which reached `main` after the count closed.

Case 009:

2. Withdrawal at confirmation. Not exercised. No finding was withdrawn.
3. The structural fix. Applied once, in round 4, to the evidence passage. It matched in rounds 6, 9 and 10. Round 8 mismatched on C78 (observation 5).
4. `awaiting restatement`. Applied. Round 5 did not restate the passage. Round 6 matched it, and round 7 did not restate it.
5. Mismatch claims named and the relied-on sentence quoted. Applied in every round with a mismatch.
6. The stranger model named. Named by tier only (observation 9).
10. An SP-18 actor makes a decided claim inferred. C49 gained node P3-N008 as its actor in round 5 and stayed decided. G6's text in the P3-N002 specification names no node. The record does not name the source for the actor.
12. A present-state and target-state split moves the sentence under a header. Round 10's fix 4 marked one sentence "When built" instead.
13. Connective "so" kept. Applied in round 1's re-fix N4.
14. Signal 4 from round 3. Applied (observation 7).
15. Signal 3 on words per claim. Read by hand, with mixed word counts (observation 3). My counts give 29.73 to 28.88 words per claim, a fall of 3 percent. The signal does not fire on either reading.
16. The confirmation line's fixed form. Not followed (observations 2 and 4).
17. SP-02 warnings resolved before round 1. Followed against a tool that does not warn at 26 to 35 words (observation 1). Case 009's evidence for this change was eight SP-02 findings in its round 1, the pattern of rounds 1 and 2 here.
18. Step 7 at the limit. Applied. Round 10's four fixes held. Round 10's instance confirmed the re-fixes of its two new defects.

Cases 010 and 011, not in force: the record used case 010 change 3's "relied on" form and case 011 change 2's `(own)` mark from round 3. The record did not apply the exception of case 010 change 1 and case 011 change 1. Round 8's entry says so: "under branch point v1.8, which this count runs under, an own mismatch still counts".

Case 012's fifteen changes, adopted by the owner on 2026-10-30 for v1.10 (commit 387dc43 on branch `branch-point-v1.10-case-012`), read against this count:

1. Every mismatch counts. The count already ran so. No verdict changes.
2. An omission is not a mismatch. Round 7 already read so. Rounds 5 (C6) and 10 (C8) would read as omissions. Both rounds had other blockers, so no verdict changes.
3. The 200-word limit stays. Round 9 ran over it (observation 10).
4. The brief lists passages awaiting restatement. Rounds 5 and 7 would have tested the evidence passage. No verdict changes.
5. The re-fix mark struck. The count used no re-fix mark.
6. The next round waits for the confirmation's fixes. The count already did (observation 12).
7. The instance reads both files in full at the fix commit. The record does not say what the instances read.
8. A step-7 new defect goes to the owner. Round 10's N1 and N2 would have gone to the owner unfixed.
9. A fix adds no rule the adopted changes do not hold. C77, C83, C85, C87, C92 and C93 would have gone to the owner as findings with proposed wording (my reading of which claims are rules). The contradictions would have counted until the owner decided. No verdict changes. The 14 edits on the referent passage would mostly not have happened (estimate).
10. The verdict table and signals become links. No effect on this count.
11. Signal 3 struck. No effect: it did not fire.
12. The script's wording search struck. No effect: the script did not parse the record.
13. The claims check once per fix pass. The record's checks before rounds 5, 7 and 9 would have run after the fix pass and before confirmation.
14. A reworded decided claim keeps its source. The record already lists 15 such claims for the owner.
15. Multi-text meta-reviews. Not applicable.

## My judgement

a. Why the count reached the limit.

The third condition of the verdict failed in every round. The curve's undefined-term counts are 5, 6, 3, 1, 4, 1, 4, 1, 1 and 3. No round had zero. So no round could read readable under v1.8, under v1.9's exception or under v1.10's omission rule (my reading of the curve). Rounds 7, 8 and 9 had no contradiction. Their blockers were undefined terms, and in rounds 8 and 9 also own mismatches.

The undefined terms came from the text's vocabulary load. Ten of its 17 terms sit outside the methodology's released vocabulary (observation 13). The rule links or defines a term at its first use in each section. By my reading of the round entries, 16 of the 29 undefined-term reports name a word of project-orchestrator or of the planning/execution model. Six terms drew a term finding in two rounds each:

| Term | Rounds |
|---|---|
| slice | 1, 4 |
| node | 3, 4 |
| Project model | 3, 5 |
| stage | 3, 10 |
| verification evidence | 5, 6 |
| upcoming section | 7, 8 |

Fixes fed the condition. By my reading, 7 of the 15 undefined-term reports of rounds 4 to 10 name words an earlier fix wrote: "whole-model list", "holds", "upcoming section" twice, "taken in", and "stages" and "edges". None of those words entered the Terms list (observation 8).

The ten contradictions fall in three groups, by my reading. Three sat on the rule text against K-003's kept clauses and title: round 4's finding 7 and round 6's findings 1 and 2. Four sat on the list of what is next and the open entries: round 2's findings 1 and 2, round 5's F10 and round 10's finding 1. Three sat elsewhere: round 1's migration note, round 3's Change line and round 10's present tense.

b. Where effort went without the passages settling.

My claim-edit count finds 82 edits on 52 of the IR's 110 elements. Five passages took 55 of them:

| Passage | Elements | Edits | Rounds |
|---|---|---|---|
| The list of what is next and the open entries | T5, C22, C27, C28, C29, C45, C92, C93 | 16 | 1 to 10 |
| The referent passage | C12, C77, C83, C84, C85, C87 | 14 | 4 to 8 |
| The evidence passage | C41, C48, C49, C75, C78, C88 | 10 | 1 to 6 |
| The count of open entries | C32, C34, C35, C86, C89 | 9 | 1 to 7 |
| The migration note | C69, C76 | 6 | 1 to 5 |

The referent passage is where the rounds found the normative defect. Decision 10 fixed the amendment's form: one appended clause, K-003's title kept. In rounds 4 and 6 the strangers found that the kept clause "no other document may claim that role" and the kept title read against the appended sentence. The Orchestrator could not change the rule text. It wrote claims about how the rule reads instead: C77 in round 4, C83 and C85 in round 5, C87 in round 6. Rounds 7 and 8 then found the referent's extent in those claims: round 7's finding 15, not held, and round 8's tension (a) and new defects 2 and 3. The rule text never changed. The question went to the owner's gate as an open point.

The list of what is next is a proposed term, T5, built on decided claims. The owner's decisions 4 to 6 of the P3-N007 plan fixed where open entries live (C27 to C29). Each fix to the relation between the Backlog's upcoming section, the rendered list and an entry a node's plan takes in drew a new finding. The chain ran from round 2's two contradictions to round 10's C92 against C29. C92 (round 8) and C93 (round 9) are rules the fixes wrote.

c. Whether the rules or the practice kept the count from closing readable.

The rules in force decided the outcome, by my reading. Three rules combined. The third condition requires no undefined term, with a link at the first use in each section, and fresh strangers sample different words each round. Step 3 lets a fix add words "for a missing definition, referent or rule", which made room for six rule-like claims: C77, C83, C85, C87, C92 and C93. No rule of v1.8 provides for a question to the owner during a count, and a contradiction the reasoning role may not fix counts until it is fixed. Under these rules the count could not close readable before the owner's gate.

The practice added findings without deciding verdicts. Step 1's count missed 15 long sentences, which rounds 1 and 2 then found. Fixes brought in words without Terms entries, and 7 late undefined-term reports followed. The record's line forms kept the script from reading it. The practice also helped. Every round waited for confirmation and re-fixes. Every own mismatch quoted its sentence. The Orchestrator listed the 15 reworded decided claims and carried three open points to the owner.

d. Reviewing a proposal of this kind.

The normative change is one sentence of 29 words (the record's note for the owner) and one citation. The text around it ran from 2,170 to 2,694 words (my word count) and from 73 to 93 claims (the record). The rounds reviewed the problem, the authorities, the open entries, the known limit, the evidence, the dependency, the declaration, the Release-register entry and the asks with equal weight. By my reading, six of the 119 findings bear on the rule text and its reading. They are round 4's finding 7, round 6's findings 1 and 2, round 7's findings 7 and 15, and round 8's tension (a). The six are the findings the maintainers most need. Each needed an owner decision, not a fix.

The growth was claims, not drift. Words per claim fell 3 percent (my counts). Decided claims rose from 37 to 44, proposed claims from 33 to 43 and inferred claims from 3 to 6 (my count of status brackets at 549f016 and 4d11d83). The new decided claims are splits of decided claims or come from a cited source. The new proposed claims include the six rule-like claims of judgement c.

On terms, the IR proposes two. The ten terms the Plan register names at the gate are not the IR's proposed terms (observation 13). Ten outside terms in one text is the load that judgement a describes.

The owner's acceptance at the limit is, by the IR's asks, ask A1: approval for carrying at node P3-N007's gate. Ask A2, the maintainers' adjudication under Article 8 (amendments, versions, and migration), remains. The methodology specification's section *The count* says that, for an amendment, the owner's decision at the limit is the amendment's adjudication. For a proposal from another project, the gate and the adjudication are two decisions on one text by one person. The proposal keeps them apart. The verdict's three open points, the rule text's residual among them, reach the owner at both.

e. Whether the Orchestrator should run proposal counts differently.

Yes, in five ways, each a proposed change below. Put a fix that needs a decided claim changed to the owner during the count (change 1). Render a terms section when the text borrows terms (change 2). Add each term a fix brings in to the IR (change 3). Count long sentences with `--verbose` before round 1 (change 4). Write the record in the pipeline's line forms (change 5). Under these, rounds 1 and 2 would lose about 15 SP-02 findings, and the referent passage's 14 edits would wait on one owner answer (estimate). Whether the count would then read readable within ten rounds, the record cannot show.

Readability.

The proposal at the close is readable for RD-4 in my reading. From it I can state the problem, the change and its scope, the model's authorities, the open entries, the known limit, the evidence, the dependency, the declaration, the impact and the asks. Remaining defects:

- the rule text keeps "no other document may claim that role" unconditioned before "that model is the referent instead" (the record's open point);
- the appended sentence at 29 words (the record's open point);
- two SP-03 lint warnings, on "The other three are the owner's decisions" (C78's sentence, round 8's mismatch) and on "These are the part's description" (beside C25's sentence, round 9's mismatch);
- "definition-by-citation form", carried only by a link to Article 7.

The lint's SP-24 (a link resolves) violation on the replacement block's relative link is by design. The link resolves in the methodology repository. My reading supports carrying the text once the owner decides the open points.

## Measures

Per round. Sources: my word count; the round entries for claims; the curve for findings, contradictions and undefined terms; the `Mismatches:` lines; the confirmation lines.

| Round | Prose words | IR claims | Findings | Per thousand words | Mismatches | Contradictions | Undefined terms | Declined | Fixes held | New defects |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2,170 | 73 | 23 | 10.6 | A3 (prose) | 1 | 5 | 3 | 15 of 20 | 6 |
| 2 | 2,262 | 76 | 19 | 8.4 | none | 2 | 6 | 1 | 17 of 18 | 6 |
| 3 | 2,411 | 76 | 16 | 6.6 | C41 (own) | 1 | 3 | 1 | 14 of 15 | 4 |
| 4 | 2,395 | 76 | 14 | 5.8 | C41 (IR), C31 (own) | 1 | 1 | 1 | 12 of 13 | 4 |
| 5 | 2,496 | 82 | 10 | 4.0 | C6 (own) | 1 | 4 | 0 | 9 of 9 | 7 |
| 6 | 2,543 | 86 | 6 | 2.4 | none | 2 | 1 | 0 | 5 of 6 | 3 |
| 7 | 2,587 | 88 | 15 | 5.8 | none; five omissions | 0 | 4 | 1 | 11 of 12 | 3 |
| 8 | 2,657 | 91 | 6 | 2.3 | C78 (own), C31 (own) | 0 | 1 | 1 | 5 of 5, 4 in part | 3 |
| 9 | 2,674 | 92 | 6 | 2.2 | C25 (own) | 0 | 1 | 1 | 4 of 4 | 2 |
| 10 | 2,686 | 93 | 4 | 1.5 | C8 (own) | 2 | 3 | 0 | 4 of 4 | 2 |

The count.

| Measure | Value | Source |
|---|---|---|
| Rounds | 10; the limit; not readable | the verdict |
| Wall time | 16:06:58 to 17:39:50 UTC, 93 minutes | commit times of 549f016 and 4d11d83 |
| Findings | 119; 114 without round 7's omissions | the curve |
| Findings per thousand words, first and last round | 10.6, 1.5 | the curve and my word count |
| Restatement mismatches | 9: 7 own, 1 prose, 1 IR | the `Mismatches:` lines |
| Contradictions | 10 | the curve |
| Undefined terms | 29; no round with none | the curve |
| SP-02 findings, rounds 1 and 2 | 15, all accepted | the round entries |
| Findings declined; declines accepted at confirmation | 9; 5 of 9 | the round entries; the confirmation lines |
| Fixes held at first confirmation | 96 of 106; 95 with round 8's fix in part not held | the confirmation lines |
| New defects at confirmation | 40 | the confirmation lines |
| Prose words, round 1 to the close | 2,170 to 2,694, 24 percent | my word count |
| IR claims, round 1 to the close | 73 to 93, 27 percent | the record |
| IR terms, round 1 to the close; proposed | 14 to 17; 2 | my count of `T` elements |
| Decided, proposed and inferred claims, round 1 to the close | 37 to 44, 33 to 43, 3 to 6 | my count of status brackets |
| IR element edits | 82 on 52 of 110 elements | my claim-edit count |
| Words per IR claim, round 1 and round 10 | 29.73, 28.88 | my word count and the record's claims |
| Step-6 fixes | 1 (round 4, C78) | the round 4 entry |
| Signals | record: 1, 2 and 4; script: 2 only, with 11 lines unparsed | the verdict; the script |
| Points carried to the owner | 3: the appended sentence's length, the referent clauses and title, the two terms | the verdict |

## Outcome

Proposed process changes. "Branch point" means the branch point as v1.10 leaves it: its seven steps keep v1.8's numbers. "Specification" means the methodology's intermediate-representation specification.

1. The branch point's step 3 gains three sentences. The specification's section *The count* gains them in its next count. The sentences read: "When the fix a finding needs would change a decided claim, the reasoning role does not write a claim around the finding. The reasoning role puts the finding to the owner with a proposed wording before the next round. The next round opens after the owner answers." Evidence: judgements b and c. The rule-text points of rounds 4 and 6 waited for the gate while rounds 5 to 10 ran and the referent passage took 14 edits. The owner's gate came on 2026-10-30, the day the count closed. Recommended.
2. The specification's section *Rendering and review* gains three sentences, and the branch point's step 3 cites them. The sentences read: "When an IR's Terms list holds a term defined outside the methodology vocabulary and the reader's project vocabulary, the renderer renders the Terms list as a section before the body. Each entry gives the term, its IR definition and its link. A term that draws an undefined-term finding in two rounds joins that section." Evidence: judgement a. Ten of 17 terms were outside terms. Sixteen of 29 undefined-term reports named such words. Six terms drew a term finding twice. Recommended.
3. The branch point's step 3 gains one sentence. It reads: "A fix that brings in a term no vocabulary and no IR element defines adds the term to the IR's Terms list, as proposed, in that fix." Evidence: observation 8 and judgement a. Seven of the 15 undefined-term reports of rounds 4 to 10 named words fixes wrote. Recommended.
4. The branch point's step 1 is reworded. It reads: "Before round 1, the reasoning role resolves every sentence over 25 words that `node scripts/lint.mjs --verbose` lists in the text under review, whatever its age. The reasoning role records the number in the review record." Evidence: observation 1. Rounds 1 and 2 found 15 SP-02 findings, the number of sentences the verbose run lists. The methodology's `mtool style` showed this gap too. The methodology owns that tool's fix. Recommended.
5. For the owner to carry into project-orchestrator's [reviewer](../../docs/vocabulary.md#def-reviewer) contract: a project-orchestrator review record uses the pipeline's line forms. The confirmation line takes the fixed form on one line, with its detail on the lines after it. The record holds a per-round table of prose words and IR claims. The claims-check line stands in the entry of the round whose fixes it checks. The record names the stranger model. Evidence: observations 2, 3, 4 and 9. The script read none of the record's confirmation lines, and the record's growth figure mixed two counts. Recommended.
6. At a step-6 fix, the reasoning role lists the passage's claims on a `Step-6 passage:` line, and the script counts a later mismatch on any listed claim as the passage's recurrence. Evidence: observation 5. Not recommended: a reading of the record finds it, and the backlog's review of the pipeline's ruleset aims to cut machinery.
7. The specification's sentence "For an amendment, the owner's decision is the amendment's adjudication under Article 8" gains "when the amendment is reviewed in the methodology repository". Evidence: judgement d. Not recommended: asks A1 and A2 already keep the gate and the adjudication apart, and the record shows no harm.
8. The limit of ten stays for proposal counts. Evidence: rounds 7 to 10 found the owner's gate missing from the prose (round 7, finding 6), the referent's extent (round 8) and a contradiction a fix wrote (round 10). No change.

Owner's decision on the outcome: pending.
