# IR: Branch point v1.7, the process changes of evaluation case 009

Reader: RD-4
Purpose: document. The revision of the branch point that carries the sixteen process changes of evaluation case 009, the meta-review of the methodology's vision document rounds, adopted by the owner on 2026-10-29 with the term structural fix.
Status: rendered (reasoning role, 2026-10-29; round 2)
Source: the owner's decision of 2026-10-29 ("All merged and the term ratified - adopt all nineteen as proposed"); evaluation case 009; the methodology specification's count-4 amendment.
Normative: yes
Footprint: docs/branch-point.md; docs/records/branch-point-v1.7.ir.md; docs/records/branch-point-v1.7.review.md; docs/style-spec.md; docs/vocabulary.md; eval/README.md; eval/cases/009-meta-review-vision-rounds-2026-10-29.md; scripts/signals.mjs; scripts/test.mjs

## Terms

T1. Structural fix. defined-at: ../vocabulary.md#def-structural-fix [decided: owner, 2026-10-29]

T2. Meta-review signal. defined-at: https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#meta-review [decided: owner, 2026-10-27]

## Claims

### Status

C1. Version 1.7 carries the sixteen process changes of evaluation case 009 and the term structural fix. evidence: E1. [decided: owner, 2026-10-29]

C2. Until the owner accepts v1.7, v1.6 is active on main. [decided: owner, 2026-10-29]

### Rounds step 1

C3. Before round 1, the reasoning role resolves every SP-02 lint warning in the prose, a sentence over 25 words. evidence: E1. [decided: owner, 2026-10-29]

C4. Before round 1, the reasoning role records the lint result in the review record. evidence: E1. [decided: owner, 2026-10-29]

### Rounds step 2

C5. The review record names each round's stranger model. evidence: E1. [decided: owner, 2026-10-29]

C6. The review record names, for every restatement mismatch, the claim the mismatch concerns. evidence: E1. [decided: owner, 2026-10-29]

C42. The review record carries the mismatch claims on one `Mismatches:` line per round, or `none`. evidence: E1. [decided: owner, 2026-10-29]

C7. For a mismatch the stranger attributes to its own restatement, the brief asks the stranger to quote the prose sentence it relied on. evidence: E1. [decided: owner, 2026-10-29]

### Rounds step 3

C8. An actor or trigger added for SP-18 to a decided claim whose source names none makes the claim inferred, with a relation naming its basis. evidence: E1. [decided: owner, 2026-10-29]

C9. A fix that separates present state from target state moves the sentence under a header that names its state. evidence: E1. [decided: owner, 2026-10-29]

C10. A fix does not mark a single sentence with "Today". evidence: E1. [decided: owner, 2026-10-29]

C11. A fix keeps the connective prose that joins a rule to a reason the IR holds as its own claim. evidence: E1. [decided: owner, 2026-10-29]

### Rounds step 4

C12. The reasoning role records the confirmation on one line: `Confirmation: H of A fixes hold. Not held: <finding numbers, or none>. Declines accepted: K of D. New defects: N.` evidence: E1. [decided: owner, 2026-10-29]

C13. A fix that holds in part is not held. evidence: E1. [decided: owner, 2026-10-29]

C14. A contradiction or undefined-term finding the instance withdraws at confirmation, on a reason quoting the prose, is marked withdrawn. evidence: E1. [decided: owner, 2026-10-29]

C43. A withdrawn finding does not count against the verdict. evidence: E1. [decided: owner, 2026-10-29]

C15. A restatement mismatch is never withdrawn at confirmation. evidence: E1. [decided: owner, 2026-10-29]

### Rounds step 6

C16. The fix for a step-6 finding is a structural fix. evidence: E1. [decided: owner, 2026-10-29]

C17. A structural fix moves the sentence out of the structure that produces the reading: a list, a section or an adjacency. evidence: E1. [decided: owner, 2026-10-29]

C44. A structural fix may instead change the claim to the strangers' reading when that reading is true. evidence: E1. [decided: owner, 2026-10-29]

C18. A rewording alone is not a step-6 fix. evidence: E1. [decided: owner, 2026-10-29]

C19. The reasoning role lists a decided claim changed by a structural fix for the owner in the delivering report. evidence: E1. [decided: owner, 2026-10-29]

C20. The round's instance does not confirm a step-6 fix, which step 4's answer excludes. evidence: E1. [decided: owner, 2026-10-29]

C21. The review record marks a step-6 fix `awaiting restatement`. evidence: E1. [decided: owner, 2026-10-29]

C22. The next round's entry states whether that round's restatement matched on the passage with the mismatch. evidence: E1. [decided: owner, 2026-10-29]

### Rounds step 7

C23. At the limit, the reasoning role fixes the final round's findings in the IR and then in the prose. evidence: E1. [decided: owner, 2026-10-29]

C24. The final round's instance confirms each fix. evidence: E1. [decided: owner, 2026-10-29]

C25. The record marks each finding of the final round confirmed or unfixed. evidence: E1. [decided: owner, 2026-10-29]

### Stranger brief

C26. Under SP-01 a duty with its actor and its trigger is one claim. evidence: E1. [decided: owner, 2026-10-29]

C27. Under SP-18 a sentence that states a target, or names roadmap work and assigns it to no one, is not a duty. evidence: E1. [decided: owner, 2026-10-29]

C28. Under SP-26 words that name a referent SP-03 requires are not excess. evidence: E1. [decided: owner, 2026-10-29]

C29. A rule joined by "because", "so" or "therefore" to a reason the IR holds as its own claim is not a defect. evidence: E1. [decided: owner, 2026-10-29]

C41. The style specification's rule table carries the three calibrations in its SP-01, SP-18 and SP-26 rows. [decided: owner, 2026-10-29]

### Meta-review

C30. The third signal: at the count's end, words per IR claim exceed round 1's words per claim by more than one tenth. evidence: E1. [decided: owner, 2026-10-29]

C31. The fourth signal: in round 3 or later, a stranger found a contradiction in a passage an earlier round's fix touched. evidence: E1. [decided: owner, 2026-10-29]

C32. The script reports the first signal from the confirmation lines in their fixed form and the claims-check lines. evidence: E1. [decided: owner, 2026-10-29]

C33. The script reports the second signal's recurring mismatch from the `Mismatches:` lines, a claim named in two rounds. evidence: E1. [decided: owner, 2026-10-29]

C34. The script reads the third signal from the review record's per-round table of prose words and IR claims. evidence: E1. [decided: owner, 2026-10-29]

C47. The script reads a review record that holds several counts from its last count only. [inferred: R7]

C35. The script reports a confirmation line it cannot parse as unparsed. evidence: E1. [decided: owner, 2026-10-29]

C36. The reasoning role writes no `Meta-review: not indicated` while a line is unparsed. evidence: E1. [decided: owner, 2026-10-29]

C37. The script reports wording that may show a declined finding raised again or the fourth signal. [decided: owner, 2026-10-27]

C45. The reasoning role confirms the script's reported wording by reading at the end of the count. [decided: owner, 2026-10-27]

C46. Case 005's change 4, a growth bound, is replaced by the third signal, because words per IR claim measure prose drift from the IR. evidence: E1. [decided: owner, 2026-10-29]

C38. Case 009 is the meta-review of the methodology's vision document rounds. [decided: owner, 2026-10-29]

C39. The owner adopted case 009's nineteen changes on 2026-10-29. evidence: E2. [decided: owner, 2026-10-29]

C40. Three of the nineteen confirm three rules as written: the readable verdict without a finding-rate threshold, the 200-word restatement limit, and the limit of ten. evidence: E1. [decided: owner, 2026-10-29]

## Relations

R1. C16 depends-on C17 because step 6 names the fix kind the term defines.

R2. C20 depends-on C15 because the confirming instance has read the IR and cannot restate as a stranger.

R3. C22 depends-on C20 because the next round's restatement is the confirmation the same instance cannot give.

R4. C36 depends-on C35 because an unparsed line hides a signal the script would otherwise read.

R5. C30 refines C1 because the signal's wording is one of the sixteen changes.

R6. C14 supports C1 because the withdrawal rule is case 009's change 2.

R7. C47 depends-on C35 because confirmation lines written before the fixed form would otherwise read as unparsed in every later count.

## Evidence

E1. eval/cases/009-meta-review-vision-rounds-2026-10-29.md, Outcome, changes 2 to 6, 8 to 18 (recommended) and 1, 7, 19 (no change).

E2. The owner's message of 2026-10-29: "All merged and the term ratified - adopt all nineteen as proposed".

## Asks

A1. Accept branch point v1.7. Depends: C1 to C47.
