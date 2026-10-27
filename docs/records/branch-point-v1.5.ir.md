# IR: Branch point v1.5, case 008's five changes

Reader: RD-4
Purpose: document. The revision of the branch point that carries the five process changes of evaluation case 008, adopted by the owner on 2026-10-27.
Status: reviewed (round 3 readable; fixes confirmed; surprises 0; misses 0; unratified terms 0)
Source: the owner's decision of 2026-10-27 ("go ahead with case 008's five changes"); evaluation case 008; branch point v1.4 and its review record.
Normative: yes
Footprint: docs/branch-point.md; docs/records/branch-point-v1.5.ir.md; docs/records/branch-point-v1.5.review.md; eval/cases/008-meta-review-branch-point-rounds-2026-10-27.md; eval/README.md; scripts/claims-check.mjs; scripts/test.mjs

## Terms

T1. Restatement. defined-at: ../vocabulary.md#def-restatement [decided: owner, 2026-10-27]

T2. Review record. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-review-record [decided: owner, 2026-10-27]

## Claims

### The five changes

C1. The claims check also reports a changed claim whose best-matching sentence did not change since the last round. [decided: owner, 2026-10-27]

C2. The script `scripts/claims-check.mjs` takes the previous round's prose and reports such a claim as stale. [decided: owner, 2026-10-27]

C14. The reasoning role fixes the prose, before the round starts, for a changed claim that no sentence carries or that is stale. [decided: owner, 2026-10-27]

C3. The reasoning role treats a restatement mismatch on one passage in any two rounds as a prose finding, whatever the strangers attributed it to. [decided: owner, 2026-10-27]

C4. The reasoning role adds to the next round's stranger brief a finding declined in part, with the declined part and its reason. [decided: owner, 2026-10-27]

C5. During rounds the prose status line reads `under review` with the version and the round number. [decided: owner, 2026-10-27]

C6. During rounds the IR's Status parenthesis holds the round number. [decided: owner, 2026-10-27]

C16. At the start of each round, the reasoning role changes the prose status line and the IR's Status parenthesis together. [decided: owner, 2026-10-27]

C7. The stranger brief lists the under-review status line among the forms that are not defects. [decided: owner, 2026-10-27]

C8. At a readable verdict, the reasoning role fixes the round's findings in the IR and then in the prose. [decided: owner, 2026-10-27]

C9. The readable round's stranger instance confirms each fix before delivery. [decided: owner, 2026-10-27]

C10. The reasoning role marks in the review record each finding of the readable round as confirmed, or as unfixed when the instance did not confirm its fix. [decided: owner, 2026-10-27]

C11. The D1 row's rule on joining a reason to its rule by connective prose stays as written. [decided: owner, 2026-10-27]

C18. The limit of ten stays as written. [decided: owner, 2026-10-27]

### Meta-review

C12. The meta-reviews so far are case 005, on methodology PR #51's rounds, case 007, on methodology PR #52's rounds, and case 008, on branch point v1.4's rounds. [decided: case 008]

C13. The owner adopted case 008's five changes on 2026-10-27. [decided: owner, 2026-10-27]

C17. Branch point v1.5 carries the five changes pending the owner's acceptance. [decided: owner, 2026-10-27]

C15. Until the owner accepts v1.5, v1.4 is the active version on main. [decided: owner, 2026-10-27]

## Relations

R1. C2 supports C1 because the script performs the check the rule requires.

R5. C14 depends-on C1 because the fix answers what the check reports.

R2. C16 depends-on C5 because the two statuses carry one state.

R3. C10 depends-on C9 because the mark records the confirmation's answer.

R4. C8 refines C9 because the fixes precede the confirmation.

## Evidence

E1. eval/cases/008-meta-review-branch-point-rounds-2026-10-27.md, Outcome: five changes recommended; adopted by the owner on 2026-10-27.

E2. docs/records/branch-point-v1.4.review.md: round 5's three fixes passed the claims check and failed the confirmation; the status line in rounds 2, 4 and 6; round 2's partial decline recurring in rounds 4 and 6.

## Asks

A1. Accept branch point v1.5. Depends: C1 to C18.
