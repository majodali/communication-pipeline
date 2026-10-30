# IR: Branch point v1.10, the adopted changes of evaluation case 012

Reader: RD-4
Purpose: document. The revision of the branch point that carries the process changes of evaluation case 012, the meta-review of branch point v1.9 and the methodology's intermediate-representation specification's count 5, adopted by the owner on 2026-10-30.
Status: rendered (round 1, rendered by the reasoning role 2026-10-30; unratified terms 0)
Source: the owner's decision of 2026-10-30 on evaluation case 012 (all fifteen changes adopted as recommended; terms by the default); evaluation case 012's Outcome.
Normative: yes
Footprint: docs/branch-point.md; docs/records/branch-point-v1.10.ir.md; docs/records/branch-point-v1.10.review.md; docs/vocabulary.md; docs/backlog.md; eval/README.md; eval/cases/012-meta-review-branch-point-v1.9-and-ir-spec-count-5-2026-10-30.md; scripts/signals.mjs; scripts/test.mjs

## Terms

T1. Omission. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-omission [decided: owner, 2026-10-30]

T2. Fix pass. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-fix-pass [decided: owner, 2026-10-30]

T3. New defect. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-new-defect [decided: owner, 2026-10-30]

T4. Unparsed line. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-unparsed-line [decided: owner, 2026-10-30]

T5. Claims check. defined-at: ../vocabulary.md#def-claims-check [decided: owner, 2026-10-30]

T6. Step-6 fix. defined-at: ../vocabulary.md#def-step-6-fix [decided: owner, 2026-10-30]

T7. Awaiting restatement. defined-at: ../vocabulary.md#def-awaiting-restatement [decided: owner, 2026-10-30]

## Claims

### Status

C1. Version 1.10 carries the adopted changes of evaluation case 012. evidence: E1, E2. [decided: owner, 2026-10-30]

C2. Version 1.9 is active on main while version 1.10 is under review. [decided: owner, 2026-10-30]

C3. The branch point's Versions section lists the versions. [inferred: R1]

### Rounds step 1

C4. Before round 1, the reasoning role resolves every SP-02 lint warning, a sentence over 25 words, in the text under review, whatever its age. [decided: owner, 2026-10-30]

C5. Before round 1, the reasoning role records in the review record the number of sentences over 25 words. [decided: owner, 2026-10-30]

### Rounds step 2

C6. A restatement mismatch is a disagreement between the stranger's restatement and the IR. [decided: methodology intermediate-representation specification, C211]

C7. A claim or a qualifier the restatement leaves out is an omission, not a restatement mismatch (case 012 change 2). evidence: E1, E2. [decided: owner, 2026-10-30]

C8. A restatement that says a rule has no qualifier the IR holds has a mismatch (case 012 change 2). evidence: E1, E2. [decided: owner, 2026-10-30]

C9. The stranger brief lists each passage awaiting restatement (case 012 change 4). evidence: E1, E2. [decided: owner, 2026-10-30]

C10. After the restatement and before reading the IR, the stranger restates each listed passage in one sentence (case 012 change 4). evidence: E1, E2. [decided: owner, 2026-10-30]

C11. The reasoning role checks each listed passage's step-6 fix against the stranger's one-sentence restatement of the passage (case 012 change 4). evidence: E1, E2. [decided: owner, 2026-10-30]

C12. Each entry on a `Mismatches:` line names the claim the restatement contradicts. [decided: owner, 2026-10-30]

C13. After "relied on", the entry names the claim of the sentence the stranger quoted. [decided: owner, 2026-10-30]

C14. An entry on a `Mismatches:` line reads, for example, `C41 (relied on C35)` (case 012 change 1). evidence: E1, E2. [decided: owner, 2026-10-30]

C15. For each mismatch, the brief asks the stranger to quote the prose sentence the stranger relied on (case 012 change 1). evidence: E1, E2. [decided: owner, 2026-10-30]

C16. For each mismatch, the reasoning role quotes in the review record the prose sentence the stranger relied on (case 012 change 1). evidence: E1, E2. [decided: owner, 2026-10-30]

### Rounds step 3

C17. A fix does not add a rule the adopted changes do not hold (case 012 change 9). evidence: E1, E2. [decided: owner, 2026-10-30]

C18. When a finding needs a new rule, the reasoning role lists the finding for the owner with a proposed wording (case 012 change 9). evidence: E1, E2. [decided: owner, 2026-10-30]

C19. A finding that needs a new rule counts against the verdict as its kind does until the owner decides (case 012 change 9). evidence: E1, E2. [decided: owner, 2026-10-30]

C20. A decided claim a fix rewords keeps its decided source and notes the rewording, as `reworded in count N, round M` (case 012 change 14). evidence: E1, E2. [decided: owner, 2026-10-30]

C21. The owner ratifies the reworded claims as one list at the count's close (case 012 change 14). evidence: E1, E2. [decided: owner, 2026-10-30]

### Rounds step 4

C22. After each fix pass, the reasoning role runs the claims check against the previous round's prose (case 012 change 13). evidence: E1, E2. [decided: owner, 2026-10-30]

C23. The script `scripts/claims-check.mjs` lists the changed claims and the best-matching sentence for each. [decided: owner, 2026-10-30]

C24. The claims-check script reports a changed claim no sentence carries, as missing. [decided: owner, 2026-10-30]

C25. The claims-check script reports a changed claim whose best-matching sentence did not change since the last round, as stale. [decided: owner, 2026-10-30]

C26. The reasoning role records the claims check's result in the review record. [decided: owner, 2026-10-30]

C27. The reasoning role fixes a claim reported missing or stale before the confirmation read and before the next round opens (case 012 change 13). evidence: E1, E2. [decided: owner, 2026-10-30]

C28. The reasoning role names the fix commit to the round's stranger instance (case 012 change 7). evidence: E1, E2. [decided: owner, 2026-10-30]

C29. The round's stranger instance reads the prose and the IR at the fix commit, in full, before answering (case 012 change 7). evidence: E1, E2. [decided: owner, 2026-10-30]

C30. The instance also names each new defect the fixes introduce. [decided: owner, 2026-10-30]

C31. The next round opens after the reasoning role records the confirmation line and makes the fixes the confirmation calls for (case 012 change 6). evidence: E1, E2. [decided: owner, 2026-10-30]

### Rounds step 6

C32. A fix awaiting restatement is a fix whose hold the next round's restatement has not yet tested. [decided: owner, 2026-10-30]

C33. The reasoning role marks a step-6 fix `awaiting restatement` in the review record (case 012 change 5 keeps the mark for a step-6 fix only). evidence: E1, E2. [decided: owner, 2026-10-30]

### Rounds step 7

C34. The reasoning role does not fix in the count a new defect the step-7 confirmation names (case 012 change 8). evidence: E1, E2. [decided: owner, 2026-10-30]

C35. The reasoning role lists a new defect the step-7 confirmation names for the owner (case 012 change 8). evidence: E1, E2. [decided: owner, 2026-10-30]

C51. The next edit of the text fixes the new defect (case 012 change 8). evidence: E1, E2. [decided: owner, 2026-10-30]

### Verdict

C36. The verdict is readable when the three conditions in the methodology specification's verdict section hold (case 012 change 10). evidence: E1, E2. [decided: owner, 2026-10-30]

### Meta-review

C37. A text is a subject for meta-review when its count reaches the limit or its review record shows a meta-review signal. [decided: owner, 2026-10-27]

C38. The methodology specification's Meta-review section defines the signals (case 012 change 10). evidence: E1, E2. [decided: owner, 2026-10-30]

C39. At the end of a count, the reasoning role checks the signals against the review record. [decided: owner, 2026-10-27]

C40. A claims-check line is the review-record line in which the reasoning role records the claims check's result after a fix pass (case 012 change 13). evidence: E1, E2. [decided: owner, 2026-10-30]

C41. A round with a fix pass and no claims-check line counts as an unparsed line (case 012 change 13). evidence: E1, E2. [decided: owner, 2026-10-30]

C42. The script reports a round with a fix pass and no claims-check line as unparsed (case 012 change 13). evidence: E1, E2. [decided: owner, 2026-10-30]

C43. The reasoning role checks the second signal's declined findings raised again and the fourth signal by reading (case 012 change 12). evidence: E1, E2. [decided: owner, 2026-10-30]

### Meta-review history

C44. The meta-reviews so far are cases 005 and 007 to 012. [decided: owner, 2026-10-30]

C45. Case 012 reviewed branch point v1.9 and the methodology specification's count 5 in one task. evidence: E1. [decided: owner, 2026-10-30]

C46. The owner adopted case 012's fifteen changes on 2026-10-30. evidence: E2. [decided: owner, 2026-10-30]

C47. Thirteen of case 012's fifteen changes are the process changes of v1.10: changes 1, 2 and 4 to 14. evidence: E1, E2. [decided: owner, 2026-10-30]

C48. Case 012's change 3 keeps the 200-word restatement limit as written. evidence: E1. [decided: owner, 2026-10-30]

C49. Case 012's change 15 amends the evaluation corpus's Meta-review records section. evidence: E1. [decided: owner, 2026-10-30]

C50. Eleven of case 012's fifteen changes amend the methodology specification as its count 6: changes 1, 2, 4 to 9, 11, 13 and 14. evidence: E1, E2. [decided: owner, 2026-10-30]

## Relations

R1. C3 depends-on C4 because the version list on the Status line ran to 91 words, and step 1 resolves every sentence over 25 words before round 1.

## Evidence

E1. eval/cases/012-meta-review-branch-point-v1.9-and-ir-spec-count-5-2026-10-30.md, Outcome, changes 1 to 15.

E2. The owner's decision of 2026-10-30 on case 012, relayed by the Orchestrator: all fifteen changes adopted as recommended; terms by the default.

## Asks

A1. Accept branch point v1.10. Depends: C1 to C51.
