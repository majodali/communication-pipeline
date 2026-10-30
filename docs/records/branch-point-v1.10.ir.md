# IR: Branch point v1.10, the adopted changes of evaluation case 012

Reader: RD-4
Purpose: document. The revision of the branch point that carries the process changes of evaluation case 012, the meta-review of branch point v1.9 and the methodology's intermediate-representation specification's count 5, adopted by the owner on 2026-10-30.
Status: rendered (round 6, rendered by the reasoning role 2026-10-30; unratified terms 1)
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

T8. Fix commit: the commit that holds the round's fix pass. [proposed: this IR]

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

C9. In the stranger brief, the reasoning role lists each passage awaiting restatement (case 012 change 4). evidence: E1, E2. [decided: owner, 2026-10-30; reworded in v1.10's count, round 3]

C10. After the restatement and before reading the IR, the stranger restates each listed passage in one sentence (case 012 change 4). evidence: E1, E2. [decided: owner, 2026-10-30]

C11. The reasoning role checks each listed passage's step-6 fix against the stranger's one-sentence restatement of the passage (case 012 change 4). evidence: E1, E2. [decided: owner, 2026-10-30]

C12. Each entry on a `Mismatches:` line names the claim the restatement contradicts. [decided: owner, 2026-10-30]

C13. After "relied on", the entry names the claim of the sentence the stranger quoted. [decided: owner, 2026-10-30]

C73. The reasoning role names each claim in an entry by its claim identifier in the IR. [decided: owner, 2026-10-30; reworded in v1.10's count, round 5, the actor named]

C65. In step 2, the stranger reads no file other than its brief, the prose and the IR. [decided: owner, 2026-10-30; reworded in v1.10's count, rounds 3 to 6, and after rounds 3 and 5's confirmations: six wordings; moved from the Stranger brief into step 2 as a structural fix]

C79. A declined finding is one the reasoning role declines with a reason at step 3. [inferred: R7]

C53. At steps 4 and 7, the round's instance also reads the findings table, the fixed passages and the declined findings with their reasons. [decided: owner, 2026-10-30; reworded in v1.10's count, rounds 1, 2, 3 and 6; moved into step 2 after round 5's confirmation]

C14. An entry on a `Mismatches:` line reads, for example, `C41 (relied on C35)` (case 012 change 1). evidence: E1, E2. [decided: owner, 2026-10-30]

C15. For each mismatch, the brief asks the stranger to quote the prose sentence the stranger relied on (case 012 change 1). evidence: E1, E2. [decided: owner, 2026-10-30]

C16. For each mismatch, the reasoning role quotes in the review record the prose sentence the stranger relied on (case 012 change 1). evidence: E1, E2. [decided: owner, 2026-10-30]

### Rounds step 3

C74. In a fix, the reasoning role rephrases or cuts words before it adds words. [decided: owner, 2026-10-27; reworded in v1.10's count, round 5]

C71. In a fix, the reasoning role adds words only for a missing definition or referent, a state header, or a rewording note. [decided: owner, 2026-10-30; reworded in v1.10's count after round 4's confirmation, "or rule" cut, and in rounds 5 and 6]

C17. The reasoning role adds no rule in a fix beyond the changes the owner adopted for the count (case 012 change 9). evidence: E1, E2. [decided: owner, 2026-10-30; reworded in v1.10's count, round 4]

C18. When a finding needs a new rule, the reasoning role lists the finding for the owner with a proposed wording (case 012 change 9). evidence: E1, E2. [decided: owner, 2026-10-30]

C19. Until the owner decides, a finding that needs a new rule counts against the verdict like a mismatch, contradiction or undefined-term finding (case 012 change 9). evidence: E1, E2. [decided: owner, 2026-10-30; reworded in v1.10's count, round 5]

C20. When a fix rewords a decided claim, the reasoning role keeps the claim's source and notes the rewording as `reworded in count N, round M` (case 012 change 14). evidence: E1, E2. [decided: owner, 2026-10-30; reworded in v1.10's count, rounds 1 and 3]

C75. In a fix that separates present state from target state, the reasoning role moves the sentence under a header that names its state. [decided: owner, 2026-10-29; reworded in v1.10's count, round 5]

C76. In a fix, the reasoning role does not mark a single sentence with "Today". [decided: owner, 2026-10-29; reworded in v1.10's count, round 5]

C77. In a fix, the reasoning role keeps the connective prose that joins a rule to a reason the IR holds as its own claim. [decided: owner, 2026-10-29; reworded in v1.10's count, round 5]

C21. The owner ratifies the reworded claims as one list at the count's close (case 012 change 14). evidence: E1, E2. [decided: owner, 2026-10-30]

### Rounds step 4

C67. A findings table lists the round's findings. [inferred: R6]

C22. After each fix pass, the reasoning role runs the claims check against the previous round's prose (case 012 change 13). evidence: E1, E2. [decided: owner, 2026-10-30]

C23. The script `scripts/claims-check.mjs` lists the changed claims and the best-matching sentence for each. [decided: owner, 2026-10-30]

C24. The claims-check script reports a changed claim no sentence carries, as missing. [decided: owner, 2026-10-30]

C25. The claims-check script reports a changed claim whose best-matching sentence did not change since the last round, as stale. [decided: owner, 2026-10-30]

C26. The reasoning role records the claims check's result in the review record. [decided: owner, 2026-10-30]

C27. The reasoning role fixes a claim reported missing or stale before the confirmation read and before the next round opens (case 012 change 13). evidence: E1, E2. [decided: owner, 2026-10-30]

C28. The reasoning role names the fix commit to the round's stranger instance (case 012 change 7). evidence: E1, E2. [decided: owner, 2026-10-30]

C52. The fix commit is the commit that holds the round's fix pass. [inferred: R2]

C29. The round's stranger instance reads the prose and the IR at the fix commit, in full, before answering (case 012 change 7). evidence: E1, E2. [decided: owner, 2026-10-30]

C30. The instance also names each new defect the fixes introduce. [decided: owner, 2026-10-30]

C31. The next round opens after the reasoning role records the confirmation line and makes the fixes the confirmation calls for (case 012 change 6). evidence: E1, E2. [decided: owner, 2026-10-30]

### Rounds step 6

C32. A fix awaiting restatement is a fix whose hold the next round's restatement has not yet tested. [decided: owner, 2026-10-30]

C33. The reasoning role marks a step-6 fix `awaiting restatement` in the review record (case 012 change 5 keeps the mark for a step-6 fix only). evidence: E1, E2. [decided: owner, 2026-10-30]

C66. In a structural fix, the reasoning role may instead change the claim to the strangers' reading when that reading is true. [decided: owner, 2026-10-29; reworded in v1.10's count, round 4]

C64. A structural fix moves the sentence out of the structure that produces the mismatched reading: a list, a section or an adjacency. [decided: owner, 2026-10-29; reworded in v1.10's count, round 3]

### Rounds step 7

C55. At step 7, the reasoning role sends the round's stranger instance its findings table, the fixed passages and the round's declined findings. [inferred: R3]

C58. At a readable verdict, the round's stranger instance confirms each fix other than a step-6 fix (case 012 context, ask A2 as the owner adopted it on 2026-10-30). evidence: E3. [decided: owner, 2026-10-30]

C63. The reasoning role runs step 7's claims check as in step 4. [decided: owner, 2026-10-30; reworded in v1.10's count, round 3, the actor named]

C68. At the limit, the reasoning role marks each finding of the final round confirmed, or unfixed when the instance did not confirm its fix. [decided: owner, 2026-10-30; reworded in v1.10's count, round 4, scoped to the limit as case 009 change 18 placed it]

C59. A step-6 fix made in a readable round's fix pass stays `awaiting restatement` (ask A2). evidence: E3. [decided: owner, 2026-10-30]

C60. The reasoning role lists the passage of a step-6 fix left `awaiting restatement` at a readable verdict in the next count's round 1 brief (ask A2). evidence: E3. [decided: owner, 2026-10-30]

C34. The reasoning role does not fix in the count a new defect the step-7 confirmation names (case 012 change 8). evidence: E1, E2. [decided: owner, 2026-10-30]

C35. The reasoning role lists a new defect the step-7 confirmation names for the owner (case 012 change 8). evidence: E1, E2. [decided: owner, 2026-10-30]

C51. The reasoning role fixes the new defect in the next edit of the text (case 012 change 8). evidence: E1, E2. [decided: owner, 2026-10-30; reworded in v1.10's count, round 1]

C57. The stranger's report has five parts in order: Restatement, Listed passages, Findings, Readability, Counts (case 012 change 4). evidence: E1, E2. [decided: owner, 2026-10-30; reworded in v1.10's count, round 2 and after its confirmation]

C54. Case 008 proposed no change to the D1 row's rule on joining a rule to a reason by connective prose. [decided: owner, 2026-10-27; reworded in v1.10's count, round 1]

C69. BP-02a: a paraphrase of normative text could change its force, so the reasoning role renders the normative text and only the review runs. [decided: owner, 2026-10-25; reworded in v1.10's count, round 4]

C72. BP-05a: in a report the owner's ratification ask replaces the reviewer's check, because the stranger review on reports to RD-1 or RD-3 runs only on request (owner ruling, 2026-10-25). evidence: E4. [decided: owner, 2026-10-25; reworded in v1.10's count, round 5, scoped as the ruling's record reads]

C70. The script `scripts/signals.mjs` reads the confirmation lines in their fixed form. [decided: owner, 2026-10-29; reworded in v1.10's count, round 4, the first-signal clause cut as a repeat of C61]

### Verdict

C36. The verdict is readable when the three conditions in the methodology specification's verdict section hold (case 012 change 10). evidence: E1, E2. [decided: owner, 2026-10-30]

### Meta-review

C37. A text is a subject for meta-review when its count reaches the limit or its review record shows a meta-review signal. [decided: owner, 2026-10-27]

C38. The methodology specification's Meta-review section defines the signals (case 012 change 10). evidence: E1, E2. [decided: owner, 2026-10-30]

C39. At the end of a count, the reasoning role checks the signals against the review record. [decided: owner, 2026-10-27]

C61. The signals script, `scripts/signals.mjs`, reports the first signal from the confirmation and claims-check lines. [inferred: R4]

C40. A claims-check line is the review-record line that records a claims check's result (case 012 change 13). evidence: E1, E2. [decided: owner, 2026-10-30; reworded in v1.10's count, round 6]

C41. A round with a fix pass and no claims-check line counts as an unparsed line (case 012 change 13). evidence: E1, E2. [decided: owner, 2026-10-30; C42, the script's report of the same rule, merged into it in v1.10's count, round 3]

C80. When the unparsed line parses, the reasoning role writes `pending` again. [decided: owner, 2026-10-30; reworded in v1.10's count, round 6, "for a text that is a meta-review subject" cut as a repeat]

C43. The reasoning role checks the second signal's declined findings raised again and the fourth signal by reading (case 012 change 12). evidence: E1, E2. [decided: owner, 2026-10-30]

### Meta-review history

C44. The meta-reviews so far are cases 005 and 007 to 012. [decided: owner, 2026-10-30]

C45. Case 012 reviewed branch point v1.9 and the methodology specification's count 5 in one task. evidence: E1. [decided: owner, 2026-10-30]

C46. The owner adopted case 012's fifteen changes on 2026-10-30. evidence: E2. [decided: owner, 2026-10-30]

C62. A process change is an adopted change to how the rounds or the meta-review run. [inferred: R5]

C47. Thirteen of case 012's fifteen changes are the process changes of v1.10: changes 1, 2 and 4 to 14. evidence: E1, E2. [decided: owner, 2026-10-30]

C48. Case 012's change 3 keeps the 200-word restatement limit as written. evidence: E1. [decided: owner, 2026-10-30]

C49. Case 012's change 15 amends the evaluation corpus's Meta-review records section. evidence: E1. [decided: owner, 2026-10-30]

C78. Case 012's change 11 struck the third signal from the methodology specification's signals. evidence: E1, E2. [decided: owner, 2026-10-30]

C50. Eleven of case 012's fifteen changes amend the methodology specification as its count 6: changes 1, 2, 4 to 9, 11, 13 and 14. evidence: E1, E2. [decided: owner, 2026-10-30]

## Relations

R1. C3 depends-on C4 because the version list on the Status line ran to 91 words, and step 1 resolves every sentence over 25 words before round 1.

R2. C52 refines C28 because case 012 change 7 names the commit the instance reads, and that commit holds the round's fix pass.

R3. C55 depends-on C53 because step 7's instance reads the findings table the reasoning role sends, the fixed passages and the round's declined findings, and step 4 names the reasoning role as the one that sends them.

R4. C61 refines C39 because the script reads the confirmation, claims-check and `Mismatches:` lines, and the reasoning role reads the rest (C43).

R5. C62 refines C47 because the thirteen changes v1.10 carries change how the rounds or the meta-review run, while change 3 keeps a rule and change 15 amends the README.

R6. C67 depends-on C53 because step 4 sends the findings table to the round's instance, and the Stranger brief has each finding carry its locus and fix kind.

R7. C79 depends-on C17 because step 3 records a declined finding with its reason, and the reasoning role is the one that fixes or declines each finding.

## Evidence

E1. eval/cases/012-meta-review-branch-point-v1.9-and-ir-spec-count-5-2026-10-30.md, Outcome, changes 1 to 15.

E2. The owner's decision of 2026-10-30 on case 012, relayed by the Orchestrator: all fifteen changes adopted as recommended; terms by the default.

E3. The owner's adoption of 2026-10-30 of ask A2's revised proposed wording, relayed by the Orchestrator.

E4. docs/backlog.md, chunk 3's row: "Scope narrowed per the owner: reports to RD-1 or RD-3 need an IR only for a term, a decision or a register fact; review on request."

## Asks

A1. Accept branch point v1.10. Depends: C1 to C80.

A2. Decide the mark of a step-6 fix made in a readable round's fix pass, a gap round 1 found (finding 5). Proposed wording, revised after the round 1 confirmation: "At a readable verdict, the round's stranger instance confirms each fix other than a step-6 fix. A step-6 fix made in that round's fix pass stays `awaiting restatement`; the reasoning role lists its passage in the next count's round 1 brief." The finding counts against the verdict as a contradiction until the owner decides (case 012 change 9). Depends: C33.

A2 resolved: the owner adopted the proposed wording on 2026-10-30; C58 to C60 carry it, and round 1's finding 5 is closed as fixed by the owner's decision.
