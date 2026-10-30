# IR: Branch point v1.9, the adopted changes of evaluation cases 010 and 011

Reader: RD-4
Purpose: document. The revision of the branch point that carries the adopted changes of evaluation cases 010 and 011, the meta-reviews of the methodology's intermediate-representation specification's count 4 and the vision document's count 2, adopted by the owner on 2026-10-30 with the terms own mismatch and re-fix.
Status: rendered (reasoning role, 2026-10-30; round 7)
Source: the owner's decision of 2026-10-30 ("For cases 010 and 011 - go with all recommendations, all terms ratified."); evaluation cases 010 and 011; the methodology specification's count-5 amendment.
Normative: yes
Footprint: docs/branch-point.md; docs/records/branch-point-v1.9.ir.md; docs/records/branch-point-v1.9.review.md; docs/vocabulary.md; docs/backlog.md; eval/README.md; eval/cases/010-meta-review-ir-spec-count-4-2026-10-30.md; eval/cases/011-meta-review-vision-count-2-2026-10-30.md; scripts/dispatch.mjs; scripts/signals.mjs; scripts/test.mjs

## Terms

T1. Own mismatch. defined-at: ../vocabulary.md#def-own-mismatch [decided: owner, 2026-10-30]

T2. Re-fix. defined-at: ../vocabulary.md#def-re-fix [decided: owner, 2026-10-30]

## Claims

### Status

C1. Version 1.9 carries the adopted changes of evaluation cases 010 and 011 and the terms own mismatch and re-fix. evidence: E3. [decided: owner, 2026-10-30]

### Purpose

C72. The branch point protects proportional verification. [decided: owner, 2026-10-24]

C73. Under proportional verification, a short report to a reader who shares the conversation costs one lint pass. [decided: owner, 2026-10-24; reworded in round 4]

### Rounds

C2. At a count's start, the reasoning role records in the review record the branch point version and commit the count runs under (case 010 change 10). evidence: E1. [inferred: R14]

C3. A change the owner adopts during a count applies from the next count (case 010 change 10). evidence: E1. [decided: owner, 2026-10-30]

### Rounds step 1

C4. Before round 1, the reasoning role resolves every SP-02 lint warning, a sentence over 25 words, in the text under review, whatever its age (case 010 change 8). evidence: E1. [decided: owner, 2026-10-30]

C5. Before round 1, the reasoning role records in the review record the number of sentences over 25 words (case 011 change 8). evidence: E2. [decided: owner, 2026-10-30]

### Rounds step 2

C48. A restatement mismatch is a disagreement between the stranger's restatement and the IR. [decided: methodology intermediate-representation specification, C211]

C6. An own mismatch is a restatement mismatch the stranger attributes to its own restatement (case 011, the term ratified). evidence: E2. [decided: owner, 2026-10-30]

C7. When writing the `Mismatches:` line, the reasoning role marks an own mismatch's claim `(own)` (case 011 change 2). evidence: E2. [inferred: R24]

C8. Each entry on a `Mismatches:` line names the claim the restatement contradicts and, after "relied on", the claim of the sentence the stranger quoted (case 010 change 3). evidence: E1. [decided: owner, 2026-10-30]

C60. Entries on a `Mismatches:` line name claims by their claim identifiers in the IR. [inferred: R15]

C9. For an own mismatch, the brief asks the stranger to quote the prose sentence the stranger relied on (v1.7's C7 with the term of case 011 change 2). evidence: E2. [decided: owner, 2026-10-30]

C10. For each own mismatch, the reasoning role quotes in the review record the prose sentence the stranger relied on (case 011 change 2). evidence: E2. [inferred: R25]

### Rounds step 3

C11. Step 3's fix rules govern every fix, including an edit outside a round to an IR whose Status is reviewed (case 011 change 9). evidence: E2. [decided: owner, 2026-10-30; reworded in rounds 3 and 4]

C12. In an edit to a reviewed IR outside a round, the reasoning role cuts each claim the edit makes a duplicate (case 011 change 9). evidence: E2. [inferred: R18]

C49. In an edit to a reviewed IR outside a round, the reasoning role amends each claim the edit makes stale (case 011 change 9). evidence: E2. [inferred: R19]

### Rounds step 4

C13. The claims check runs on the fixed prose before the round's stranger instance confirms (case 010 change 6). evidence: E1. [decided: owner, 2026-10-30]

C14. The reasoning role fixes a changed claim the claims check reports missing or stale before the confirmation read (case 010 change 6). evidence: E1. [inferred: R16]

C85. The instance also says whether it accepts each decline the reasoning role made, and names each new defect the fixes introduce. [inferred: R31]

C74. A step-6 fix is the structural fix made under step 6 for a mismatch that recurred. [inferred: R27]

C59. When the instance says a fix does not hold, the reasoning role fixes again before the next round (v1.7's step 4 sentence with the trigger first). [decided: owner, 2026-10-27]

C61. A fix awaiting restatement is a fix whose hold the next round's restatement has not yet tested. [inferred: R17]

C15. The reasoning role marks the re-fix of a claim `awaiting restatement` in the review record (case 011 change 6). evidence: E2. [inferred: R7]

C16. In the next round's entry, the reasoning role states whether that round names the re-fixed claim on its `Mismatches:` line or in a finding (case 011 change 6). evidence: E2. [inferred: R8]

C50. When the instance withdraws a contradiction or undefined-term finding at confirmation, on a reason quoting the prose, the reasoning role marks the finding withdrawn (v1.7's C14, case 009 change 2). [inferred: R9]

### Rounds step 6

C17. The reasoning role treats as a prose finding a restatement mismatch on one passage in any two rounds of the text's counts (case 011 change 3). evidence: E2. [decided: owner, 2026-10-30]

C18. The reasoning role runs the signals script, `scripts/signals.mjs`, which reads the review record, after writing each round's `Mismatches:` line and before writing the verdict (case 010 change 2). evidence: E1. [decided: owner, 2026-10-30]

C19. The script's recurrence report is step 6's check (case 010 change 2). evidence: E1. [decided: owner, 2026-10-30]

C20. Before the next round, the reasoning role applies step 6 to each claim the script reports (case 011 change 5, its run folded into case 010 change 2's). evidence: E2. [inferred: R10]

C62. The reasoning role lists a decided claim changed by a structural fix for the owner in the report that delivers the text to the owner (v1.7's C19 rephrased). [decided: owner, 2026-10-29]

### Rounds step 7

C21. Step 7's claims check runs as in step 4 (case 010 change 6). evidence: E1. [decided: owner, 2026-10-30]

### Verdict

C22. The verdict is readable when three conditions hold. [decided: owner, 2026-10-27]

C23. The verdict's first condition: the restatement of the problem, terms and decisions has no mismatch with the IR that counts (case 010 change 1). evidence: E1. [decided: owner, 2026-10-30; reworded in rounds 3 and 5]

C53. Under the first condition, a mismatch counts whatever the stranger attributes it to, except as the first condition's exception states. evidence: E1. [decided: owner, 2026-10-30; reworded in rounds 5 and 6]

C24. The verdict's second condition: the stranger finds no contradiction. [decided: owner, 2026-10-27]

C63. The verdict's third condition: the stranger finds no undefined term. [decided: owner, 2026-10-27]

C25. The first condition's exception: an own mismatch does not count when the stranger quotes a prose sentence that carries an IR claim (case 011 change 1). evidence: E2. [decided: owner, 2026-10-30; reworded in round 5, to the reading adopted on 2026-10-30]

C26. The first condition's override: a restatement mismatch on one passage in any two rounds of the text's counts always counts (case 011 change 1). evidence: E2. [decided: owner, 2026-10-30; reworded in rounds 5 and 6, in the specification's words]

C75. The round's stranger instance never withdraws a restatement mismatch at confirmation (v1.7's C15, in the verdict table). [inferred: R32]

C76. A contradiction finding withdrawn by the round's stranger instance at confirmation, on a reason quoting the prose, does not count against the verdict. [decided: owner, 2026-10-29; reworded in round 5]

C83. A contradiction finding withdrawn on a reason that does not quote the prose still counts. [inferred: R33]

C77. An undefined-term finding withdrawn by the round's stranger instance at confirmation, on a reason quoting the prose, does not count against the verdict. [decided: owner, 2026-10-29; reworded in round 5]

C84. An undefined-term finding withdrawn on a reason that does not quote the prose still counts. [inferred: R33]

### Stranger brief

C27. Before each round, the reasoning role quotes in the review record each form it adds to the brief and names the finding or fix the form bears on (case 011 change 10). evidence: E2. [inferred: R26]

### Rules

C55. The first row of the rules table whose condition holds decides the disposition. [inferred: R11]

C87. The rules table maps an IR's inputs to a disposition. [inferred: R34]

C54. The reasoning role runs the lints for every IR, whatever disposition follows. [decided: owner, 2026-10-25; reworded in rounds 1 to 6; the label BP-01 retired in round 6]

C68. Row BP-02a stands before row BP-02, so a normative document takes D3 whatever the owner flag. [inferred: R21]

C69. Rule BP-02 is the owner's review request: the owner asked for a review of this output, so the reviewer rounds run. [decided: owner, 2026-10-25]

C58. Under BP-00 the reasoning role still runs the lints, as D0, and no later disposition row applies. [inferred: R13]

### Meta-review

C28. The first signal: in two or more rounds, a fix was not held at confirmation or the claims check reported a missing or stale claim (case 010 change 5). evidence: E1. [decided: owner, 2026-10-30]

C29. The third signal: in the count's last round, words per IR claim exceed round 1's words per claim by more than one tenth (case 010 change 9). evidence: E1. [decided: owner, 2026-10-30]

C30. The script reads the `Mismatches:` lines of every count for signal 2 (case 011 change 3). evidence: E2. [decided: owner, 2026-10-30]

C31. The script's recurring mismatch is a claim on the last count's `Mismatches:` lines named in two rounds of the text's counts. [inferred: R1]

C32. The script counts a recurrence on either claim of a `Mismatches:` entry (case 010 change 3). evidence: E1. [decided: owner, 2026-10-30]

C33. The script lists as information the claims on earlier counts' `Mismatches:` lines that the last count's lines do not name (case 010 change 4). evidence: E1. [decided: owner, 2026-10-30]

C34. The script reads the per-round table, the confirmation lines and the claims-check lines of a review record that holds several counts from the record's last count only. [inferred: R2]

C35. The script reports a round with no claims-check line as unparsed (case 011 change 7). evidence: E2. [decided: owner, 2026-10-30]

C36. The script exempts round 1 from the claims-check-line rule, because the claims check's base is the previous round's prose. [inferred: R3]

C37. The script reports a `Meta-review: not indicated` line that the script's own reading contradicts (case 010 change 7). evidence: E1. [decided: owner, 2026-10-30]

C67. While a line is unparsed, the reasoning role writes `Meta-review: unparsed`, naming the line, in place of `pending` or `not indicated`. [inferred: R20]

C86. The reasoning role writes `Meta-review: pending` when the text is a meta-review subject. [decided: owner, 2026-10-27; reworded in round 6]

C78. An unparsed line is a review-record line the signals script cannot read, or a claims-check line a round after round 1 lacks. [inferred: R28]

C70. When the unparsed line parses, the reasoning role writes `pending` again for a text that is a meta-review subject. [inferred: R22]

C81. When the text is no meta-review subject and no line is unparsed, the reasoning role writes `Meta-review: not indicated`. [decided: owner, 2026-10-27; reworded in rounds 5 and 6]

C82. The `Meta-review:` line names the signals checked. [decided: owner, 2026-10-27]

C79. Under the methodology specification's rule, a `Meta-review: pending` or `Meta-review: unparsed` line in an accepted deliverable's record is a finding of the next form audit. [inferred: R29]

C38. The script's wording search skips the `Meta-review:` line (case 010 change 7). evidence: E1. [decided: owner, 2026-10-30]

C57. The trigger of three rounds predated the five counts recorded by 2026-10-27. [decided: owner, 2026-10-27]

C66. The three-round trigger fired on two counts that converged without any step failing: branch point v1.5 and the IR specification's count 2. [decided: owner, 2026-10-27; reworded in round 5]

C71. The owner dispatched no meta-review for branch point v1.5's count or the IR specification's count 2. evidence: E4. [inferred: R23]

C56. The five counts: the rounds on methodology PR #51, the subject of case 005; the methodology's IR specification counts 1 and 2, in its review record; branch point v1.4 and v1.5, in their review records. evidence: E4. [inferred: R12]

C39. The meta-reviews so far are cases 005 and 007 to 011. [decided: owner, 2026-10-30]

C40. Case 010 reviewed count 4 of the methodology's intermediate-representation specification. [decided: owner, 2026-10-30]

C41. Case 011 reviewed count 2 of the methodology's vision document. [decided: owner, 2026-10-30]

C42. The owner adopted case 010's thirteen recommended changes and case 011's nine on 2026-10-30. evidence: E3. [decided: owner, 2026-10-30]

C43. Nineteen of the twenty-two adopted changes are the process changes of v1.9: case 010's changes 1 to 10 and case 011's changes 1, 2, 3 and 5 to 10. evidence: E3. [decided: owner, 2026-10-30]

C44. Seven of the twenty-two adopted changes amend the methodology's intermediate-representation specification as its count 5: case 010's changes 1, 5, 9, 11, 12 and 13 and case 011's change 1. evidence: E3. [decided: owner, 2026-10-30]

C80. Four of the seven specification amendments are also among the nineteen process changes of v1.9. [inferred: R30]

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

R11. C55 refines C54 because the lints run for every IR and decide no disposition, so the rules table holds dispositions only.

R12. C56 refines C57 because the release register's v1.6.0 entry gives the five counts as 10, 10, 6, 3 and 4 rounds, the round counts of these five texts' review records; round 1 finding 20.

R18. C12 depends-on C59 because the reasoning role is the actor that fixes and edits the IR, and case 011 change 9, the claim's basis, names no actor.

R19. C49 depends-on C59 because the reasoning role is the actor that fixes and edits the IR, and case 011 change 9, the claim's basis, names no actor.

R20. C67 refines C35 because a round the script reports unparsed bars `Meta-review: not indicated` (case 010 change 7, case 011 change 7), and the record then needs a line of its own.

R21. C68 refines C55 because the first-match rule would otherwise give a normative document with the owner flag D2 and the paraphraser, against BP-02a's reason; the dispatcher checks BP-02a first.

R22. C70 refines C67 because `unparsed` stands in for `pending` only while the line stays unparsed.

R23. C71 refines C66 because cases 005, 007 and 008 reviewed the other three of the five counts.

R13. C58 refines C54 because D0 is lint only, so an IR-only document still gets the lints.

R14. C2 depends-on C5 because the reasoning role writes the review record, and case 010 change 10, the claim's basis, names no actor.

R15. C60 refines C8 because an entry names a claim, and the IR names each claim by its identifier.

R16. C14 depends-on C59 because the reasoning role is the actor that fixes, and case 010 change 6, the claim's basis, names no actor.

R17. C61 refines C15 because the next round's restatement is the test a step-6 fix or a re-fix waits for.

R24. C7 refines C8 because the `(own)` mark is part of an entry the reasoning role writes on the `Mismatches:` line; case 011 change 2 names no actor.

R25. C10 depends-on C5 because the reasoning role writes the review record; case 011 change 2 names no actor.

R26. C27 depends-on C5 because the reasoning role writes the review record and adds the forms; case 011 change 10 names no actor.

R27. C74 refines C17 because step 6 makes a recurring mismatch a prose finding, and its fix is the step-6 fix.

R28. C78 refines C35 because the script reports the lines it cannot read as unparsed.

R29. C79 refines C67 because the form-audit rule is the methodology's, Article 9, and the specification states it for both lines.

R30. C80 refines C44 because case 010's changes 1, 5 and 9 and case 011's change 1 are in both lists.

R31. C85 refines C12 because the confirmation line's declines-accepted and new-defects counts record what the instance answers, as every recorded round shows.

R32. C75 depends-on C50 because the round's stranger instance is the one that withdraws at confirmation; v1.7's C15 named no actor.

R33. C83 refines C76 because a withdrawal counts only on a reason quoting the prose, so a withdrawal on any other reason leaves the finding counting.

R34. C87 refines C55 because the table's rows map conditions on the inputs to dispositions.

## Evidence

E1. eval/cases/010-meta-review-ir-spec-count-4-2026-10-30.md, Outcome, changes 1 to 13 (recommended), 14 (declined) and 15 (no change).

E2. eval/cases/011-meta-review-vision-count-2-2026-10-30.md, Outcome, changes 1, 2, 3, 5 to 10 (recommended), 4 (no change) and 11 (declined); the terms own mismatch and re-fix.

E3. The owner's message of 2026-10-30: "For cases 010 and 011 - go with all recommendations, all terms ratified."

E4. methodology docs/releases.md, v1.6.0, The meta-review trigger is signal-based: "five recorded counts (10, 10, 6, 3 and 4 rounds)".

## Asks

A1. Accept branch point v1.9. Depends: C1 to C82.

A2. Ratify or strike the new wording of the decided claims v1.9's rounds reworded, split, moved or reordered: C2; C7; C10; C11; C12 and C49; C14; C15 and C59; C16; C20; C23; C24 and C63; C25; C26; C27; C45 and C65; C50; C53; C54 (row BP-01 left the rules table in round 5; the label BP-01 retired in round 6); C55; C62; C66; C68 (the row order); C73; C75 to C77; C81; C86; C58. New rules: the `Meta-review: unparsed` line (C67, C70, C78) and the pointer to the specification's form-audit rule (C79); a withdrawal without a quoted reason still counts (C83, C84); the instance's answer on declines and new defects (C85). Depends: C2, C7, C10, C11, C12, C14, C15, C16, C20, C23, C24, C25, C26, C27, C45, C50, C53, C54, C55, C62, C66, C67, C68, C73, C75, C79, C81, C83, C85, C86.
