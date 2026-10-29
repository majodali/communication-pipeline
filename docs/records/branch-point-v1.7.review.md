# Review record: branch point v1.7

Reader of the reviewed text: RD-4 (a fresh agent session). Reviewer: a stranger, a fresh instance per round, model named per round, under the v1.7 brief the text itself defines: the prose read first, a restatement, then the IR; SP-01 to SP-05, SP-08 to SP-11, SP-18, SP-25, SP-26 with the three calibrations of case 009; locus and fix kind per finding; verdict by restatement match and zero contradictions and zero undefined terms, a withdrawn contradiction or undefined-term finding not counting. Disposition D3 (a specification, Normative: yes). Text reviewed: `docs/branch-point.md` whole; the IR `docs/records/branch-point-v1.7.ir.md` covers the passages v1.7 changed (the status line, Rounds steps 1, 2, 3, 4, 6 and 7, the Stranger brief, the Meta-review paragraph). The v1.7 procedure applies to these rounds.

## Curve

| Round | Prose words | IR claims | Findings | Per 1,000 words | Verdict |
|---|---|---|---|---|---|
| 1 | 2,318 | 46 | 12 | 5.2 | not readable (restatement matched; contradictions 2; undefined terms 1) |
| 2 | 2,330 | 47 | 9 | 3.9 | not readable (restatement matched; contradiction 1; undefined term 1) |
| 3 | 2,338 | 48 | 5 | 2.1 | readable (restatement matched; contradictions 0; undefined terms 0) |

## Round 1, 2026-10-29

Stranger model: claude-haiku. Prose 2,318 words; 12 findings; 5.2 per thousand words. Restatement: matched the IR, no mismatch. Contradictions 2 (step 4's answer on every accepted fix against step 6's unconfirmed step-6 fix; the three-round trigger firing on converged counts against every meta-review being foreshadowed by a signal), undefined terms 1 ("curve table"); verdict: not readable for RD-4. By fix kind as the stranger judged: rephrase 9, add 2, cut 1; by locus: both 6, prose 6; six findings on v1.7 claims, six on older text.

Mismatches: none

| # | Finding (shortened) | Kind | Disposition |
|---|---|---|---|
| 1 | the lint-result duty has no trigger | SP-18 | rephrase C4: "Before round 1, ..." |
| 2 | "The record" | SP-03 | rephrase C42: the review record |
| 3 | "The instance answers" (step 4, v1.4) | SP-03 | rephrase: the round's stranger instance |
| 4 | step 4's answer on every fix against step 6's unconfirmed fix | SP-25 | rephrase step 4: "per accepted finding other than a step-6 fix"; C20 says step 4's answer excludes it |
| 5 | "on the passage" | SP-03 | rephrase C22: the passage with the mismatch |
| 6 | header "When an IR is required at all" (v1.4) | SP-10 | rephrase: "The texts that require an IR" |
| 7 | the Meta-review header omits case 009 | SP-10 | rephrase: "the trigger and the case decisions" |
| 8 | "curve table" undefined | SP-04 | rephrase C34: the review record's per-round table of prose words and IR claims |
| 9 | "that wording" | SP-03 | rephrase C45: the script's reported wording |
| 10 | the three-round trigger sentence carries two claims (v1.6 C11) | SP-01 | split, editorial on the v1.6 claim |
| 11 | the trigger firing on converged counts against every meta-review foreshadowed by a signal | SP-25 | add: "The owner dispatched no meta-review for those counts." |
| 12 | "the verdict's three conditions" | SP-03 | rephrase C40: three rules as written, named |

Claims after fixes: 46. Prose after fixes: 2,739 words.

Confirmation: 12 of 12 fixes hold. Not held: none. Declines accepted: 0 of 0. New defects: 0.

Added before round 2: C47, the script reads a multi-count record from its last count only, so the methodology's record, whose counts 1 to 3 hold confirmation lines in the older form, is not read as unparsed in count 4.

## Round 2, 2026-10-29

Claims check before the round: 8 changed claims, 0 missing, 0 stale (base: round 1 prose). Stranger model: claude-haiku. Prose 2,330 words; 9 findings; 3.9 per thousand words. Restatement: matched the IR; one own slip on no claim. Contradiction 1 (step 7's confirmation of each fix against step 6's unconfirmed step-6 fix, at the limit), undefined term 1 ("proportional verification", unlinked since v1.1); verdict: not readable for RD-4. By fix kind as the stranger judged: rephrase 6, add 1, cut 2; four findings on v1.7 claims, five on older text.

Mismatches: none

| # | Finding (shortened) | Kind | Disposition |
|---|---|---|---|
| 2 | step 7 at the limit confirms a step-6 fix step 6 leaves unconfirmed | SP-25 | rephrase C24: other than a step-6 fix; C48: a final-round step-6 fix stays awaiting restatement and counts as unfixed |
| 3 | "The review record names" has no actor | SP-18 | rephrase C5, C6, C42, C21: the reasoning role names, writes, marks |
| 4 | "proportional verification" unlinked (v1.1) | SP-04 | add the link to the methodology vocabulary |
| 5 | "to its rule" in the D1 row (v1.4) | SP-03 | rephrase: joins a rule to a reason |
| 6 | "The direct form" (round 1's split) | SP-03 | rephrase: A prose report |
| 7 | "is the check" (v1.1) | SP-03 | rephrase: replaces the reviewer's check |
| 8 | "the short form" (v1.1) | SP-03 | rephrase: the short IR as it stands |
| 9 | step 5's repeated destination (v1.5) | SP-26 | cut: "The brief also carries a finding declined in part ..." |
| 10 | BP-05 never fires, BP-03 precedes it (v1.1) | SP-26 | cut the row; the BP-05a reason names BP-03 |

Claims after fixes: 48. Prose after fixes: 2,769 words. The prose fixes landed one commit after the IR's, an edit script having stopped on one anchor.

Confirmation: 9 of 9 fixes hold. Not held: none. Declines accepted: 0 of 0. New defects: 0.

## Round 3, 2026-10-29

Claims check before the round: 6 changed claims, 0 missing, 0 stale (base: round 2 prose). Stranger model: claude-haiku. Prose 2,338 words; 5 findings; 2.1 per thousand words. Restatement: matched the IR, no mismatch. Contradictions 0, undefined terms 0; verdict: readable for RD-4. The count ends at round 3. Under step 7, the findings are fixed and the round's instance confirms each before delivery. By fix kind as the stranger judged: rephrase 5; by locus: both 3, prose 2.

Mismatches: none

| # | Finding (shortened) | Kind | Fix | Confirmation |
|---|---|---|---|---|
| 1 | "the claims" on the Mismatches line | SP-03 | rephrase: the mismatch claims (C42's wording) | pending |
| 2 | "such a finding" | SP-03 | rephrase: a step-6 finding (C16's wording) | pending |
| 3, 4 | C22's entry sentence names no actor and points at the previous sentence | SP-03, SP-18 | rephrase C22: the reasoning role states in the next round's entry ... on the step-6 passage; C22 becomes inferred by R3 under step 3's rule | pending |
| 5 | "The record marks" | SP-18 | rephrase C25: the reasoning role marks; C25 becomes inferred by R9 | pending |

Claims after fixes: 48. Prose after fixes: 2,773 words.
