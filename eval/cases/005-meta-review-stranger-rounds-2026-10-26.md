# Case 005: meta-review of the stranger rounds on the IR specification

Instance of the [Evaluation case](../README.md) type, a [meta-review](../../docs/vocabulary.md#def-meta-review) record. Performed 2026-10-26 by a fresh session of this project with no part in the ten rounds, on the owner's ruling of the same day.

| Field | Value |
|---|---|
| Case | 005 |
| Source text date | 2026-10-26 |
| Reader addressed | RD-4 |
| Origin | the methodology amendment "stranger rounds until readable" to docs/intermediate-representation.md, with its review record |
| Through the pipeline | yes: disposition D3, ten stranger rounds, limit reached |
| Graded by | a fresh communication-pipeline session with no part in the rounds |

## Source text

Two files, not quoted, in the methodology repository on branch `stranger-rounds-until-readable` (PR #51): the review record `docs/records/stranger-rounds-until-readable.review.md`, and the text after round 10 and the post-limit fixes, `docs/intermediate-representation.md`.

## Findings

Per round, what the round found that earlier rounds and their fixes had not caught.

| Round | New in this round | Why |
|---|---|---|
| 1 | Unlinked roles, history outside History, duties with no check (5, 19), no default at the limit (20, 21). | First reading of unreviewed text. |
| 2 | Meta-review used before defined (11-13), CK-14 cannot tell when a review was owed (14), nothing sets Status to reviewed (25). | Round 1 fixes added CK-14, Status values and the meta-review without their rules. |
| 3 | Status transitions incomplete (1, 6), no actor for post-verdict fixes (10), the round-trip check unnamed (7, 8). | Each round 2 fix named a mechanism without its edge cases. |
| 4 | CK-14 fires during rounds (11), the meta-review duty unbounded (19), no test for a new claim in prose (21). | Round 3 changed sequence and scope without touching the checks affected. |
| 5 | "claim-evidence finding" undefined (5), render map used before defined (4), Status at the limit (10). | Round 4 fixes referred to things defined later or nowhere. |
| 6 | Status parenthesis cannot hold a verdict (1), docs/ sentence versus CK-07 (7), round trip covers claims only (8). | Round 5 additions did not touch the adjacent passages they contradicted. |
| 7 | Two contradictions the record attributes to earlier fixes (6, 17), `part: changed` has no test (2, 15), accepted-finding loop (7). | Round 6 fixes were local; the first round the record names fix-induced defects. |
| 8 | "document" in two senses (1), empty Asks passes CK-08 (6), unused term fails CK-15 (7). | Checks added in rounds 1 to 3 met cases no earlier reviewer had tried. |
| 9 | "count" undefined though used since round 3 (13), CK-16 (22), withdrawn text and amendment at the limit (17, 18). | Each fresh reviewer explores a new corner of the rounds rule. |
| 10 | Withdrawal and rework undefined (6, 7), which session meta-reviews (8), no record of the instance (10); two findings rejected (4, 17). | Round 9 introduced "rework" and "withdrawn" without definitions. |

Classification of the 232 findings, approximate.

| Kind | Count |
|---|---|
| duty with no actor, time or test | 42 |
| referents | 36 |
| cases the text does not classify | 34 |
| sentence form: two claims, semicolons, length | 31 |
| terms undefined or used before definition | 29 |
| contradictions between passages | 27 |
| another project's history, provenance placement | 11 |
| placement of a sentence or heading | 8 |
| other | 14 |

Caused by earlier rounds' fixes: about 120 of 232. Rounds 1 and 2 (53 findings) were mostly on the original text. From round 3, findings in pre-existing text fell to six, then one or two, then zero in round 10. The new-passage share rose from 16 of 28 to 21 of 21 because every fix enlarged the marked passages. Three chains show the mechanism: the accepted-finding rule drew findings in seven rounds (2.6, 3.10, 5.9, 6.13, 7.7, 8.11, 9.10), the footprint in eight, the meta-review in nine.

Readability. In my judgement the final text is readable for RD-4. Every role, duty and term has an actor and a definition. A fresh session can run the procedure from it. Its remaining defects are repetition (the round-trip check stated in CK-15 and again under Rendering rule; the `part:` defaults stated three times) and one long paragraph under Rendering rule. The ten reviewers said otherwise because the readability test has no threshold. A reviewer told to report every violation of SP-01 to SP-18 in 4,000 words of normative text returns twenty-odd findings, and the verdict follows the count. The count settled at 21 to 23 from round 4 while the rate per thousand words halved. The count tracks the reviewer's output budget, not the text.

## Measures

| Measure | Value |
|---|---|
| Words | 2,572 before round 1; 4,516 after round 10 |
| Findings | 232 over ten rounds; 21 to 28 per round |
| Findings per thousand words | 10.9 in round 1; 4.8 in round 10 |
| Readable verdicts | 0 of 10 |
| Unratified terms used | ten defined in the text and absent from the vocabulary: accepted finding, count, rework, withdrawal, delivering report, review flag, prose file, render map, register fact, formal project model |

## Outcome

Proposed process changes. Each: the change, then the evidence.

1. Define readable by a threshold, such as under 5 findings per thousand words and no contradiction, not by zero findings. Evidence: the rate fell from 10.9 to 4.8 and the verdict never moved. Recommended.
2. Calibrate SP-18 to the corpus: a norm names its test only where a lint or audit must detect its breach. Evidence: 42 findings asked for an actor, time or test; W-008 and P-008, which the text assumes known, name no test for most duties. Recommended.
3. Stop when findings are flat: end the rounds when the count changes by two or fewer over three rounds, limit five. Evidence: rounds 4 to 10 changed the count by at most two. Recommended, replacing the limit of ten.
4. Bound growth: a round's fixes may add at most ten percent of the words; a fix that would exceed that is a cut or a deferral. Evidence: 76 percent growth; the record says the rate fell "mostly because the text grew". Recommended.
5. Carry the earlier rounds' findings and dispositions in the reviewer prompt. Evidence: the footprint drew findings in eight rounds under new wording; "formal project model" was found in rounds 3, 9 and 10. Recommended.
6. The round's instance confirms each fix before the next fresh round. Evidence: round 7 records two contradictions introduced by earlier fixes; round 4 finding 9 removed what round 3 finding 4 added. Recommended.
7. Review the whole document in round 1 and only the amended passages after. Evidence: pre-existing findings fell to two or fewer from round 4. Not recommended alone, because rounds 6 and 7 found contradictions between new and old passages.
8. Fix only new-passage findings during rounds; record pre-existing ones as accepted. Evidence: pre-existing findings were few after round 3 and cheap to fix. Not recommended.
9. Split the specification into IR form and review process. Evidence: from round 4 the findings cluster under Stranger rounds, Meta-review and The footprint. Deferred until changes 1 to 6 are measured.

Owner's decision on the outcome, 2026-10-27, after case 007 re-weighed the changes: 1 struck; 2 adopted in the narrow form, a duty names its actor and its trigger; 3 struck, the limit stays ten; 4 adopted as a measure, not a bound; 5 and 6 adopted (case 007, changes 5 and 4); 7 and 8 stay not recommended; 9 closed as not needed. Carried into branch point v1.4.
