# Case 007: meta-review of the full-IR rewrite rounds

Instance of the [Evaluation case](../README.md) type, a [meta-review](../../docs/vocabulary.md#def-meta-review) record. Performed 2026-10-27 by a fresh communication-pipeline session with no part in the rounds, dispatched by the owner on the same day.

| Field | Value |
|---|---|
| Case | 007 |
| Source text date | 2026-10-27 |
| Reader addressed | RD-4 |
| Origin | methodology PR #52: the IR specification rewritten from its IR, ten stranger rounds under a revised brief, fixes IR first |
| Through the pipeline | yes: IR first, lint, rendering by the reasoning role, rounds until readable |
| Graded by | a fresh communication-pipeline session with no part in the rounds |

## Source text

Four files, not quoted: `docs/intermediate-representation.md`, `docs/intermediate-representation.ir.md` and `docs/intermediate-representation.review.md` in the methodology repository as merged on 2026-10-27, and [case 006](006-full-ir-rewrite-rounds-2026-10-27.md), the reasoning role's own record of the experiment.

## Findings

Per round, what the round found that earlier rounds and their fixes had not caught.

| Round | New | Why |
|---|---|---|
| 1a | Twelve edge cases, ten declined or cut. | The old brief's SP-18 rewards elaboration. |
| 1b | Ten compound claims, four header sentences without a claim, three excess-word findings. | SP-12, SP-13 and the IR read against the prose are new checks. |
| 2 | Purpose repeating later sections; the next-edit rule against a frozen IR. | The contradiction came from round 1's split of C97. |
| 3 | Eight IR-side findings: compounds the lint passed, nine terms decided without a definition site, an ask omitting proposed claims. | Ordered reads made the IR a second independent read. |
| 4 | Three cross-section contradictions; "the unit", a rule the rewrite dropped. | Surface noise was gone; one contradiction came from round 1's fix to C94. |
| 5 | "The limit" before its definition; RD-n unnamed; "meta-review subject" read as mandatory. | Round 1 named the limit without defining it; round 4 cut the reader names. |
| 6 | Two contradictions and two term-order defects in the Stranger rounds paragraph. | Round 5's limit definition reordered that paragraph. |
| 7 | Four findings on sentences fixed in the IR but not the prose. | An edit script aborted; the round trip reads only the map. |
| 8 | The status exception in a second sentence, located in the prose at its fifth recurrence; "unit" before its definition. | Round 4 added C173 after C76. |
| 9 | T1 to T7 restating meanings against C23; "inline gloss". | A matching restatement left the stranger free to test the IR against its own rules; the defect dated from round 1. |
| 10 | "reworked" before Rework's definition; C136 compound; the RD-5 rule's scope. | Round 6 cut "or to rework" from T14 and left C100 before C101. |

Case 006's observations against the record.

1. Supported by the round 1 tables.
2. Supported; the prose grew in rounds 5 and 6 only.
3. Partly. I count 23 distinct compounds, plus one drift repeat and one under the old brief. The rendered CK-03 names no word threshold, and most flagged compounds join a rule to its reason without `and`, `but` or `so`.
4. Supported by round 7.
5. Supported; round 4's own entry does not name C44 and C45.
6. Supported for seven findings; six strangers raised them, round 8 twice.
7. Partly. The rate held level from round 5 except round 6. The restatement alone blocked the verdict only in round 8; in rounds 3 to 7 contradictions or undefined terms blocked it anyway.
8. Partly. The record names two aborted scripts; the third miss is not identified.

My judgement.

Brief or discipline. Round 1a shows the discipline without the brief: the same role declined or cut ten of twelve edge cases. PR #51's round 10 returned twelve findings and not readable; this round 10 returned six and readable. The discipline held the word count; the brief supplied a verdict that could stop. No arm ran the old brief IR-first for ten rounds, so the curve does not separate them further.

Stopping rule. The three conditions are right. Each contradiction fixed in rounds 2 to 9 was a real defect. The restatement decided one round alone, round 8, and rightly. The weakness is a stranger misattributing a text defect to itself, as four did on the status rule.

Recurring restatement error. Yes, a text defect. Five strangers compressed the status rule the same way; the round 8 fix ended it.

RD-n naming. Rightly declined: P-004 allows a link and C151 assumes the Readers table known. The brief should say "name or link". Six consecutive strangers asking is a reader signal the record should keep.

Drift. The procedure first: a fix counts as applied when each changed claim's sentence is found in the prose, as round 9's grep did. The round trip's text half is the record of that check.

CK-03. Keep the threshold; no threshold catches a rule joined to its reason. The lint's threshold should appear in the specification or leave the lint.

IR growth. The point. One cost: the reason splits C176, C177 and C178 render as free-standing sentences, because relations are not rendered; the prose loses the "because".

The limit. Keep ten. Rounds 6 and 7 went to fix-induced defects and drift; without them readable was likely at round 8 or 9. One sample sets no new limit.

Same-instance confirmation. Yes. Round 6's contradictions and round 7's drift sat in passages the previous round's fixes touched; a confirming read would have saved up to two rounds.

Readability. The round-10 text is readable for RD-4. I could run the procedure from it. Remaining defects: the C173 sentence ("The unit P-008 ... defines is") parses hard; the three orphan reasons; the six recorded findings.

## Measures

| Measure | Value |
|---|---|
| Rounds | 10 in one count, plus round 1a |
| Findings | 110 under the revised brief; 22 under the old |
| Declined | 9 of 110; 7 are one finding |
| Findings on passages the previous round's fixes touched, or repeats | about 21 of 110 (case 005: about 120 of 232) |
| Prose words | 2,884 to 2,804 |
| IR claims | 148 to 172 |
| Rounds blocked by the restatement alone | 1 of 9 not readable |
| Unratified terms | 12 |
| Verdict | readable at round 10 |

## Outcome

Proposed process changes.

1. The brief's SP-05 reads "name or link", as P-004 does. Evidence: seven findings declined on the rule. Recommended.
2. A restatement mismatch that recurs in two rounds is a prose finding. Evidence: the status rule, five rounds. Recommended.
3. Before launching a round the reasoning role finds each changed claim's sentence in the prose and records the pair in the review record. Evidence: rounds 7 and 9. Recommended.
4. The round's stranger instance confirms the fixes to its findings before the next fresh round. Evidence: rounds 6 and 7. Recommended.
5. The brief carries earlier rounds' declined findings with their reasons. Evidence: one finding in six rounds. Recommended.
6. A reason split from its rule renders with connective prose. Evidence: C176 to C178 in the round-10 prose. Recommended.
7. The lint's compound threshold is stated in the specification. Evidence: observation 3. Not recommended alone.

Case 005's recommended changes. 1, threshold verdict: weakened; zero contradictions was reached without a count threshold. 2, calibrate SP-18: confirmed; dropping it lost two rules of twelve. 3, stop when flat with limit five: weakened; the rate was flat from round 5 while contradictions ran to round 9. 4, bound growth: left open; IR-first made it unneeded here. 5, carry earlier findings: confirmed, change 5. 6, same-instance confirmation: confirmed, change 4.

Case 006's outcomes. 1, the revised brief: recommended, with change 2. 2, SP-05 wording: recommended. 3, the round trip's text half: recommended, as the record of change 3. 4, the fix discipline in the specification: recommended. 5, CK-03 unchanged: recommended, with change 7's caveat.

Owner's decision on the outcome, 2026-10-27: changes 1 to 6 accepted; change 7 not adopted alone. On case 005's changes: 1 struck; 2 adopted in the narrow form (actor or trigger); 3 struck; 4 adopted as a measure; 5 and 6 adopted through changes 5 and 4; 9 closed as not needed. Carried into branch point v1.4.
