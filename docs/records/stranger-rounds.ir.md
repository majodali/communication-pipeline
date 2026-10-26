# IR: Stranger rounds until readable, and the first meta-review

Reader: RD-1 (human owner, in conversation).
Purpose: report. The work after the close-out on the owner's rulings of 2026-10-26: rounds until readable, the meta-review, the accepted orchestrator roles; the ten rounds on the methodology amendment; the first meta-review and its proposals; the asks.
Status: draft
Source: the owner's messages of 2026-10-26 after merging PR #50 and after round 3 ("Keep going to ten and report the curve"); the review record of methodology PR #51; evaluation case 005.
Footprint: docs/records/; docs/branch-point.md; docs/vocabulary.md; docs/ir-schema.md; docs/backlog.md; docs/plans/pipeline-pilot.review.md; eval/; scripts/; .claude/agents/

## Terms

T1. Meta-review: a review by this project of a text's review record and of the text itself, reporting to the owner whether the process needs a change. [proposed: this IR]

## Claims

### The rulings carried out

C1. The branch point is at v1.3: every reviewer review runs in rounds until a round returns readable, with a limit of ten, and a text over two rounds is a meta-review subject. [decided: owner, 2026-10-26]

C2. Methodology PR #51 writes the rounds rule, the limit and the meta-review trigger into the intermediate-representation specification. evidence: E1. [decided: this work]

C3. project-orchestrator PR #7 implements the accepted roles in roles.md and dispatch.md, with the review step as rounds until readable. evidence: E2. [decided: owner, 2026-10-26]

C4. The schema is at v1.4: CK-13 (term uniqueness), CK-14 (review record), CK-15 (round trip named) and CK-16 (element form), with a resolution line form; methodology-tools PR #19 ports CK-13, CK-14 and CK-16. evidence: E3. [decided: this work]

C5. The schema's rendering rule now puts an inferred claim under what changed, because an inference is the reasoning role's and not a settled decision, which round 3 of PR #51 found. evidence: E1. [decided: review, 2026-10-26]

### The ten rounds

C6. The amendment's text was reviewed in ten rounds, each by a fresh haiku-model instance, and every round's findings were fixed before the next. evidence: E1. [decided: review record, 2026-10-26]

C7. No round returned readable, so the limit was reached and the text is not delivered by the reasoning role. evidence: E1. [decided: review record, 2026-10-26]

C8. The findings per round were 28, 25, 27, 21, 21, 23, 22, 21, 23, 21. evidence: E1. [decided: review record, 2026-10-26]

C9. The findings per thousand words fell from 10.9 to 4.8, mostly because the text grew from 2,572 to 4,516 words. evidence: E1. [decided: review record, 2026-10-26]

C10. Round 7 found two contradictions that earlier fixes had introduced. evidence: E1. [decided: review record, 2026-10-26]

C11. Each methodology PR of the day was reviewed by the reasoning role dispatching a fresh instance, with the ten rounds costing between 118 and 151 thousand tokens and between 260 and 380 seconds each. evidence: E1. [decided: session log, 2026-10-26]

### The meta-review

C12. A fresh session of this project, with no part in the rounds, performed the first meta-review and delivered it as evaluation case 005. evidence: E4. [decided: this work]

C13. The meta-review classifies the 232 findings: about 42 duties with no actor, time or test; 36 referents; 34 unclassified cases; 31 sentence-form findings; 29 terms used before definition; 27 contradictions between passages; 11 misplaced provenance; 22 other. evidence: E4. [decided: case 005, 2026-10-26]

C14. The meta-review attributes about 120 of the 232 findings to earlier rounds' fixes, because every fix enlarged the passages a fresh reviewer read. evidence: E4. [decided: case 005, 2026-10-26]

C15. The meta-review judges the final text readable for RD-4. evidence: E4. [decided: case 005, 2026-10-26]

C22. The meta-review attributes the ten not-readable verdicts to a readability test with no threshold: the verdict followed a finding count that tracked the reviewer's output budget. evidence: E4. [decided: case 005, 2026-10-26]

C16. The meta-review recommends six process changes. evidence: E4. [decided: case 005, 2026-10-26]

C23. The first three recommended changes: a readability threshold instead of zero findings; SP-18 calibrated to the corpus; stopping when the count is flat over three rounds, with a limit of five. evidence: E4. [decided: case 005, 2026-10-26]

C24. The other three recommended changes: growth bounded to ten percent of the words per round; earlier rounds' findings carried in the reviewer prompt; the round's instance confirming each fix before the next fresh round. evidence: E4. [decided: case 005, 2026-10-26]

C17. The meta-review does not recommend reviewing only the amended passages after round 1, nor fixing only new-passage findings, and defers splitting the specification. evidence: E4. [decided: case 005, 2026-10-26]

C18. The six recommended changes would amend the rule PR #51 proposes before it has been applied to a second text. [inferred: R1]

### Measurement against the pilot's test

C19. The pilot's verification names three measures: the reviewer's finding rate against case 001's baseline, unratified terms per deliverable, and the owner's review time. [decided: plan, 2026-10-24]

C20. Case 001's baseline was 7.2 findings per thousand words on prose written directly, and the ten rounds ended at 4.8 on normative text. evidence: E4. [decided: cases 001 and 005]

C21. Unratified terms per delivered IR are zero in this project, and one in PR #51 (meta-review). evidence: E3. [decided: lint, 2026-10-26]

## Relations

R1. C18 depends-on C23 because each recommended change alters the rounds rule, the limit or the reviewer's inputs that PR #51 fixes.

## Evidence

E1. methodology docs/records/stranger-rounds-until-readable.review.md on branch stranger-rounds-until-readable, rounds 1 to 10 and the curve; https://github.com/majodali/methodology/pull/51.

E2. https://github.com/majodali/project-orchestrator/pull/7.

E3. docs/ir-schema.md v1.4, scripts/lint.mjs, scripts/ir.mjs at this commit; https://github.com/majodali/methodology-tools/pull/19; the lint's unratified-term count at this commit.

E4. eval/cases/005-meta-review-stranger-rounds-2026-10-26.md.

## Asks

A1. Decide on methodology PR #51: deliver the specification text as it stands after the limit, rework it, or withdraw it. Depends: C7, C15.

A2. Rule on the six process changes the meta-review recommends, each to accept, amend or reject. Depends: C16, C18.

A3. Merge project-orchestrator PR #7 and methodology-tools PR #19. Depends: C3, C4.

A4. Ratify or strike the term meta-review (T1).

A5. Review and merge this PR.
