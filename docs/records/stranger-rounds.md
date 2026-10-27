Ten [reviewer](../vocabulary.md#def-reviewer) rounds on [methodology PR #51](https://github.com/majodali/methodology/pull/51) (stranger-rounds-until-readable) ended with no readable verdict, and this report asks for five decisions or actions.

## Asks

1. Decide on methodology PR #51: deliver the specification text as it stands after the limit of ten rounds, rework it, or withdraw it.
2. Rule on the six process changes recommended in [evaluation case](../vocabulary.md#def-evaluation-case) [005](../../eval/cases/005-meta-review-stranger-rounds-2026-10-26.md), each to accept, amend or reject.
3. Merge [project-orchestrator PR #7](https://github.com/majodali/project-orchestrator/pull/7) (the accepted roles) and [methodology-tools PR #19](https://github.com/majodali/methodology-tools/pull/19) (port of CK-13 term uniqueness, CK-14 review record and CK-16 element form).
4. Ratify or strike the one term listed under Terms introduced.
5. Review and merge the PR that carries this report.

## What is already covered

This part lists the claims marked decided. A **[meta-review](../vocabulary.md#def-meta-review)** is a review by this project of a text's review record and of the text itself, reporting to the owner whether the process needs a change.

### The rulings carried out

At [branch point](../vocabulary.md#def-branch-point) v1.3: every reviewer review runs in rounds until a round returns readable, with a limit of ten; a text over two rounds is a meta-review subject.

Methodology PR #51 writes the rounds rule, the limit and the meta-review trigger into the [intermediate-representation (IR)](../vocabulary.md#def-intermediate-representation) specification.

Project-orchestrator PR #7 implements the accepted roles in roles.md and dispatch.md, with the review step as rounds until readable.

The schema in [ir-schema.md](../ir-schema.md) is at v1.4, with CK-13 (term uniqueness), CK-14 (review record), CK-15 (round trip named) and CK-16 (element form) and a resolution line form.

Methodology-tools PR #19 ports CK-13, CK-14 and CK-16.

The schema's rendering rule now puts an inferred claim under what changed.

The rule changed because an inference is the [reasoning role](../vocabulary.md#def-reasoning-role)'s and not a settled decision, as round 3 of PR #51 found.

### The ten rounds

The text of PR #51 was reviewed in ten rounds, each by a fresh haiku-model instance.

Every round's findings were fixed before the next round.

No round returned readable, so the limit of ten was reached.

The text is not delivered by the reasoning role.

The findings per round are in the table.

| Round | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Findings | 28 | 25 | 27 | 21 | 21 | 23 | 22 | 21 | 23 | 21 |

The findings per thousand words fell from 10.9 to 4.8, mostly because the text grew from 2,572 to 4,516 words.

Round 7 found two contradictions that earlier fixes had introduced.

The reasoning role reviewed each methodology PR of the day by dispatching a fresh instance.

Each of the ten rounds cost between 118 and 151 thousand tokens and took between 260 and 380 seconds.

### The meta-review

A fresh session of this project, with no part in the rounds, performed the first meta-review and delivered it as evaluation case 005.

The meta-review classifies the 232 findings into the categories in the table.

| Category | Findings |
|---|---|
| Duties with no actor, time or test | about 42 |
| Referents | 36 |
| Unclassified cases | 34 |
| Sentence-form findings | 31 |
| Terms used before definition | 29 |
| Contradictions between passages | 27 |
| Misplaced provenance | 11 |
| Other | 22 |

The meta-review attributes about 120 of the 232 findings to earlier rounds' fixes, because every fix enlarged the passages a fresh reviewer read.

The meta-review judges the final text readable for RD-4 (a fresh agent session).

The meta-review attributes the ten not-readable verdicts to a [readability test](../vocabulary.md#def-readability-test) with no threshold.

Each verdict followed a finding count that tracked the reviewer's output budget.

The meta-review recommends six process changes.

The first three recommended changes are a readability threshold instead of zero findings; the style-specification row SP-18 calibrated to the corpus; stopping when the count is flat over three rounds, with a limit of five.

The last three recommended changes are growth bounded to ten percent of the words per round; earlier rounds' findings carried in the reviewer prompt; the round's instance confirming each fix before the next fresh round.

The meta-review does not recommend reviewing only the amended passages after round 1 or fixing only new-passage findings, and defers splitting the specification.

### Measurement against the pilot's test

The pilot's verification names three measures: the reviewer's finding rate against case 001's baseline; unratified terms per deliverable; the owner's review time.

Case 001's baseline was 7.2 findings per thousand words on prose written directly.

The ten rounds ended at 4.8 findings per thousand words on normative text.

Unratified terms per delivered IR are zero in this project and one in PR #51, namely meta-review.

## What changed

One claim in this report is an inference and not a settled decision. Review it together with Ask 2 and the recommended changes under The meta-review.

- The six recommended changes would amend the rule that PR #51 proposes, before that rule has been applied to a second text.

## Terms introduced

- Meta-review, status proposed: a review by this project of a text's review record and of the text itself, reporting to the owner whether the process needs a change. Ask 4 requests its ratification or striking.

<!-- render map: T1→Terms introduced (defined first in What is already covered, intro sentence) C1→Covered/The rulings carried out s1 C2→Covered/The rulings carried out s2 C3→Covered/The rulings carried out s3 C4→Covered/The rulings carried out s4-s5 C5→Covered/The rulings carried out s6-s7 C6→Covered/The ten rounds s1-s2 C7→Covered/The ten rounds s3-s4 C8→Covered/The ten rounds table 1 C9→Covered/The ten rounds s6 C10→Covered/The ten rounds s7 C11→Covered/The ten rounds s8-s9 C12→Covered/The meta-review s1 C13→Covered/The meta-review s2 and table 2 C14→Covered/The meta-review s3 C15→Covered/The meta-review s4 C22→Covered/The meta-review s5-s6 C16→Covered/The meta-review s7 C23→Covered/The meta-review s8 C24→Covered/The meta-review s9 C17→Covered/The meta-review s10 C18→What changed bullet 1 C19→Covered/Measurement s1 C20→Covered/Measurement s2-s3 C21→Covered/Measurement s4 A1→Asks 1 A2→Asks 2 A3→Asks 3 A4→Asks 4 A5→Asks 5 -->
