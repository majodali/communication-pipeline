# IR: Branch point v1.9, the adopted changes of evaluation cases 010 and 011

Reader: RD-4
Purpose: document. The revision of the branch point that carries the adopted changes of evaluation cases 010 and 011, the meta-reviews of the methodology's intermediate-representation specification's count 4 and the vision document's count 2, adopted by the owner on 2026-10-30 with the terms own mismatch and re-fix.
Status: rendered (reasoning role, 2026-10-30; round 3)
Source: the owner's decision of 2026-10-30 ("For cases 010 and 011 - go with all recommendations, all terms ratified."); evaluation cases 010 and 011; the methodology specification's count-5 amendment.
Normative: yes
Footprint: docs/branch-point.md; docs/records/branch-point-v1.9.ir.md; docs/records/branch-point-v1.9.review.md; docs/vocabulary.md; docs/backlog.md; eval/README.md; eval/cases/010-meta-review-ir-spec-count-4-2026-10-30.md; eval/cases/011-meta-review-vision-count-2-2026-10-30.md; scripts/signals.mjs; scripts/test.mjs

## Terms

T1. Own mismatch. defined-at: ../vocabulary.md#def-own-mismatch [decided: owner, 2026-10-30]

T2. Re-fix. defined-at: ../vocabulary.md#def-re-fix [decided: owner, 2026-10-30]

## Claims

### Status

C1. Version 1.9 carries the adopted changes of evaluation cases 010 and 011 and the terms own mismatch and re-fix. evidence: E3. [decided: owner, 2026-10-30]

### Rounds

C2. At a count's start, the reasoning role records in the review record the branch point version and commit the count runs under (case 010 change 10). evidence: E1. [inferred: R14]

C3. A change the owner adopts during a count applies from the next count (case 010 change 10). evidence: E1. [decided: owner, 2026-10-30]

### Rounds step 1

C4. Before round 1, the reasoning role resolves every SP-02 lint warning, a sentence over 25 words, in the text under review, whatever its age (case 010 change 8). evidence: E1. [decided: owner, 2026-10-30]

C5. Before round 1, the reasoning role records in the review record the number of sentences over 25 words (case 011 change 8). evidence: E2. [decided: owner, 2026-10-30]

### Rounds step 2

C48. A restatement mismatch is a disagreement between the stranger's restatement and the IR. [decided: methodology intermediate-representation specification, C211]

C6. An own mismatch is a restatement mismatch the stranger attributes to its own restatement (case 011, the term ratified). evidence: E2. [decided: owner, 2026-10-30]

C7. An own mismatch's claim carries `(own)` (case 011 change 2). evidence: E2. [decided: owner, 2026-10-30]

C8. Each entry on a `Mismatches:` line names the claim the restatement contradicts and, after "relied on", the claim of the sentence the stranger quoted (case 010 change 3). evidence: E1. [decided: owner, 2026-10-30]

C60. Entries on a `Mismatches:` line name claims by their claim identifiers in the IR. [inferred: R15]

C9. For an own mismatch, the brief asks the stranger to quote the prose sentence the stranger relied on (v1.7's C7 with the term of case 011 change 2). evidence: E2. [decided: owner, 2026-10-30]

C10. The review record quotes the prose sentence the stranger relied on (case 011 change 2). evidence: E2. [decided: owner, 2026-10-30]

### Rounds step 3

C11. Step 3's rules on how a fix is made bind an edit to an IR whose Status is reviewed, outside a round (case 011 change 9). evidence: E2. [decided: owner, 2026-10-30; reworded in round 3 to name the rules]

C12. In an edit to a reviewed IR outside a round, the reasoning role cuts each claim the edit makes a duplicate (case 011 change 9). evidence: E2. [inferred: R18]

C49. In an edit to a reviewed IR outside a round, the reasoning role amends each claim the edit makes stale (case 011 change 9). evidence: E2. [inferred: R19]

### Rounds step 4

C13. The claims check runs on the fixed prose before the round's stranger instance confirms (case 010 change 6). evidence: E1. [decided: owner, 2026-10-30]

C14. The reasoning role fixes a changed claim the claims check reports missing or stale before the confirmation read (case 010 change 6). evidence: E1. [inferred: R16]

C59. When the instance says a fix does not hold, the reasoning role fixes again before the next round (v1.7's step 4 sentence with the trigger first). [decided: owner, 2026-10-27]

C15. The reasoning role marks the re-fix of a claim `awaiting restatement` in the review record (case 011 change 6). evidence: E2. [inferred: R7]

C61. A fix awaiting restatement is a fix whose hold the next round's restatement has not yet tested. [inferred: R17]

C16. In the next round's entry, the reasoning role states whether that round names the re-fixed claim on its `Mismatches:` line or in a finding (case 011 change 6). evidence: E2. [inferred: R8]

C50. When the instance withdraws a contradiction or undefined-term finding at confirmation, on a reason quoting the prose, the reasoning role marks the finding withdrawn (v1.7's C14, case 009 change 2). [inferred: R9]

### Rounds step 6

C17. The reasoning role treats as a prose finding a restatement mismatch on one passage in any two rounds of the text's counts (case 011 change 3). evidence: E2. [decided: owner, 2026-10-30]

C51. A step-6 finding stands whatever the strangers attributed the mismatch to. [decided: owner, 2026-10-27]

C18. The reasoning role runs the script `scripts/signals.mjs` after writing each round's `Mismatches:` line and before writing the verdict (case 010 change 2). evidence: E1. [decided: owner, 2026-10-30]

C19. The script's recurrence report is step 6's check (case 010 change 2). evidence: E1. [decided: owner, 2026-10-30]

C20. Before the next round, the reasoning role applies step 6 to each claim the script reports (case 011 change 5, its run folded into case 010 change 2's). evidence: E2. [inferred: R10]

C62. The reasoning role lists a decided claim changed by a structural fix for the owner in the report that delivers the text to the owner (v1.7's C19 rephrased). [decided: owner, 2026-10-29]

C52. The round's instance does not confirm a step-6 fix, as step 4 states (v1.7's C20 rephrased). [decided: owner, 2026-10-29]

### Rounds step 7

C21. Step 7's claims check runs as in step 4 (case 010 change 6). evidence: E1. [decided: owner, 2026-10-30]

### Verdict

C22. The verdict is readable when three conditions hold. [decided: owner, 2026-10-27]

C23. The verdict's first condition: the restatement of the problem, terms and decisions has no mismatch with the IR that counts under the exception and override below (case 010 change 1). evidence: E1. [decided: owner, 2026-10-30; reworded in round 3 to point at its exception and override]

C53. Under the first condition, a mismatch counts whatever the stranger attributes it to, with one exception and one override (case 010 change 1 joined to case 011 change 1). evidence: E1. [decided: owner, 2026-10-30]

C24. The verdict's second condition: the stranger finds no contradiction. [decided: owner, 2026-10-27]

C63. The verdict's third condition: the stranger finds no undefined term. [decided: owner, 2026-10-27]

C25. The first condition's exception: an own mismatch does not count when the stranger quotes a prose sentence that carries the IR's claim (case 011 change 1). evidence: E2. [decided: owner, 2026-10-30]

C26. The first condition's override: a mismatch that step 6 makes a prose finding always counts (case 011 change 1). evidence: E2. [decided: owner, 2026-10-30]

### Stranger brief

C27. The review record quotes the form the reasoning role adds to the brief and names the finding or fix the form bears on (case 011 change 10). evidence: E2. [decided: owner, 2026-10-30]

### Rules

C55. Among the rows other than rule BP-01 (the lints run), the first row whose condition holds decides the disposition. [inferred: R11]

C54. BP-01 applies to every IR. [decided: owner, 2026-10-25]

C58. Under BP-00 the lints still run, as D0, and no later disposition row applies. [inferred: R13]

### Meta-review

C28. The first signal: in two or more rounds, a fix was not held at confirmation or the claims check reported a missing or stale claim (case 010 change 5). evidence: E1. [decided: owner, 2026-10-30]

C29. The third signal: in the count's last round, words per IR claim exceed round 1's words per claim by more than one tenth (case 010 change 9). evidence: E1. [decided: owner, 2026-10-30]

C30. The script reads the `Mismatches:` lines of every count for signal 2 (case 011 change 3). evidence: E2. [decided: owner, 2026-10-30]

C31. The script's recurring mismatch is a claim on the last count's `Mismatches:` lines named in two rounds of the text's counts. [inferred: R1]

C32. The script counts a recurrence on either claim of a `Mismatches:` entry (case 010 change 3). evidence: E1. [decided: owner, 2026-10-30]

C33. The script lists as information the claims on earlier counts' `Mismatches:` lines that the last count's lines do not name (case 010 change 4). evidence: E1. [decided: owner, 2026-10-30]

C34. The script reads the per-round table, the confirmation lines and the claims-check lines of a review record that holds several counts from the record's last count only. [inferred: R2]

C35. The script reports a round with no claims-check line as unparsed (case 011 change 7). evidence: E2. [decided: owner, 2026-10-30]

C36. The script exempts round 1 from the claims-check line, because the claims check's base is the previous round's prose. [inferred: R3]

C37. The script reports a `Meta-review: not indicated` line that the script's own reading contradicts (case 010 change 7). evidence: E1. [decided: owner, 2026-10-30]

C67. While a line is unparsed, the reasoning role writes `Meta-review: unparsed`, naming the line, in place of `Meta-review: not indicated`. [inferred: R20]

C38. The script's wording search skips the `Meta-review:` line (case 010 change 7). evidence: E1. [decided: owner, 2026-10-30]

C57. The trigger of three rounds predated the five counts recorded by 2026-10-27. [decided: owner, 2026-10-27]

C66. The three-round trigger fired on counts that converged without any step failing (v1.6's C11, the referent named). [decided: owner, 2026-10-27]

C56. The five counts: the rounds on methodology PR #51, the subject of case 005; the methodology's IR specification counts 1 and 2, in its review record; branch point v1.4 and v1.5, in their review records. evidence: E4. [inferred: R12]

C39. The meta-reviews so far are cases 005 and 007 to 011. [decided: owner, 2026-10-30]

C40. Case 010 reviewed count 4 of the methodology's intermediate-representation specification. [decided: owner, 2026-10-30]

C41. Case 011 reviewed count 2 of the methodology's vision document. [decided: owner, 2026-10-30]

C42. The owner adopted case 010's thirteen recommended changes and case 011's nine on 2026-10-30. evidence: E3. [decided: owner, 2026-10-30]

C43. Nineteen of the twenty-two adopted changes are the process changes of v1.9: case 010's changes 1 to 10 and case 011's changes 1, 2, 3 and 5 to 10. evidence: E3. [decided: owner, 2026-10-30]

C44. Seven of the twenty-two adopted changes amend the methodology's intermediate-representation specification as its count 5: case 010's changes 1, 5, 9, 11, 12 and 13 and case 011's change 1. evidence: E3. [decided: owner, 2026-10-30]

C45. Case 010's change 15 confirms four rules as written. evidence: E1. [decided: owner, 2026-10-30]

C65. The four rules case 010's change 15 confirms: the withdrawal at confirmation, the fourth signal, the final round's fixes at the limit, and the limit of ten. evidence: E1. [decided: owner, 2026-10-30]

C46. Case 011's change 4 confirms that the second signal counts own mismatches. evidence: E2. [decided: owner, 2026-10-30]

C47. Case 010's change 14 and case 011's change 11, each an SP-01 calibration, stay declined. evidence: E3. [decided: owner, 2026-10-30]

## Relations

R1. C31 depends-on C30 because a recurrence wholly inside an earlier count would fire signal 2 in every later count, and case 010 change 4 lists earlier counts' claims as information only.

R2. C34 depends-on C30 because only the `Mismatches:` lines read every count, and confirmation lines written before v1.7's fixed form would otherwise read as unparsed in every later count.

R3. C36 refines C35 because step 1's claims check takes the previous round's prose as its base, which round 1 lacks.

R4. C25 refines C23 because the quoted sentence shows the prose carries the claim, so the mismatch lies in the restatement alone.

R5. C26 refines C25 because a passage with a mismatch in two rounds is a prose finding whatever the attribution.

R6. C28 refines C1 because case 010 change 5 aligns the specification's first signal with this sentence, and v1.9 takes the same words.

R7. C15 depends-on C5 because the reasoning role writes the review record, and case 011 change 6 names no actor; round 1 finding 9 asked for the actor and trigger.

R8. C16 depends-on C5 because the reasoning role writes each round's entry, and case 011 change 6 names no actor; round 1 finding 10.

R9. C50 depends-on C5 because the reasoning role writes the review record, and case 009 change 2 ("is marked withdrawn") names no actor; round 1 finding 11.

R10. C20 refines C18 because the run after each round's `Mismatches:` line already reports every recurrence before the next round, so case 011 change 5's second run is the same check; round 1 finding 13.

R11. C55 refines C54 because BP-01's condition always holds and BP-01 decides no disposition; round 1 finding 18.

R12. C56 refines C57 because the release register's v1.6.0 entry gives the five counts as 10, 10, 6, 3 and 4 rounds, the round counts of these five texts' review records; round 1 finding 20.

R18. C12 depends-on C59 because the reasoning role is the actor that fixes and edits the IR, and case 011 change 9, the claim's basis, names no actor.

R19. C49 depends-on C59 because the reasoning role is the actor that fixes and edits the IR, and case 011 change 9, the claim's basis, names no actor.

R20. C67 refines C35 because a round the script reports unparsed bars `Meta-review: not indicated` (case 010 change 7, case 011 change 7), and the record then needs a line of its own.

R13. C58 refines C54 because D0 is lint only, so an IR-only document still gets the lints BP-01 names; round 1 new defect 1.

R14. C2 depends-on C5 because the reasoning role writes the review record, and case 010 change 10, the claim's basis, names no actor.

R15. C60 refines C8 because an entry names a claim, and the IR names each claim by its identifier.

R16. C14 depends-on C59 because the reasoning role is the actor that fixes, and case 010 change 6, the claim's basis, names no actor.

R17. C61 refines C15 because the next round's restatement is the test a step-6 fix or a re-fix waits for.

## Evidence

E1. eval/cases/010-meta-review-ir-spec-count-4-2026-10-30.md, Outcome, changes 1 to 13 (recommended), 14 (declined) and 15 (no change).

E2. eval/cases/011-meta-review-vision-count-2-2026-10-30.md, Outcome, changes 1, 2, 3, 5 to 10 (recommended), 4 (no change) and 11 (declined); the terms own mismatch and re-fix.

E3. The owner's message of 2026-10-30: "For cases 010 and 011 - go with all recommendations, all terms ratified."

E4. methodology docs/releases.md, v1.6.0, The meta-review trigger is signal-based: "five recorded counts (10, 10, 6, 3 and 4 rounds)".

## Asks

A1. Accept branch point v1.9. Depends: C1 to C67.
