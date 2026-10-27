# IR: Branch point v1.4, the rounds procedure and the reviewer brief

Reader: RD-4
Purpose: document. The revision of the branch point that carries the six process changes of evaluation case 007, which reviewed the rounds case 006 records, and the owner's decisions on case 005's held changes.
Status: reviewed (unratified terms 3; surprises 0; misses 0; round 6 readable)
Source: the owner's decisions of 2026-10-27 ("They are all justified"; "Agreed on all four - go ahead with the branch-point revision"); evaluation cases 005, 006 and 007; the methodology specification docs/intermediate-representation.md as merged in PR #52 and #53.
Normative: yes
Footprint: docs/branch-point.md; docs/records/branch-point-v1.4.review.md; docs/style-spec.md; docs/records/branch-point-v1.4.ir.md; eval/cases/005-meta-review-stranger-rounds-2026-10-26.md; eval/cases/007-meta-review-full-ir-rounds-2026-10-27.md; eval/README.md; scripts/claims-check.mjs; scripts/test.mjs

## Terms

T1. Round. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-round [decided: owner, 2026-10-27]

T2. Count. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-count [decided: owner, 2026-10-27]

T3. Limit. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-limit [decided: owner, 2026-10-27]

T4. Review record. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-review-record [decided: owner, 2026-10-27]

T5. Restatement: the stranger's account, in at most 200 words of its own, of the text's problem, terms and decisions, written from the prose before the IR is read. [proposed: this IR]

T6. Fix kind: the stranger's judgement of what a finding needs: cut, rephrase, or add. [proposed: this IR]

T7. Locus: the stranger's judgement of where a defect sits: the prose, the IR, or both. [proposed: this IR]

## Claims

### The rounds procedure

C1. The rounds of dispositions D2 and D3 follow the methodology specification's Stranger rounds rule: until a round returns readable, or to the limit of ten in one count. [decided: owner, 2026-10-26]

C37. The thresholds are provisional until the evaluation corpus tunes them. [decided: branch point v1.1, 2026-10-25]

C47. Version 1.4, the style rules SP-05, SP-18, SP-25 and SP-26, and the terms restatement, locus and fix kind await the owner's acceptance. [proposed: this IR]

C38. The rules are the Rendering conditions of the methodology's intermediate-representation specification. [decided: methodology PR #49, 2026-10-26]

C39. Disposition D2 runs D1, then the reviewer rounds. [decided: branch point v1.1, 2026-10-25]

C48. Disposition D1 runs D0, then the paraphraser renders prose for the reader. [decided: branch point v1.1, 2026-10-25]

C2. Before each round, the reasoning role finds, for each claim changed since the last round, the prose sentence that carries it. [decided: owner, 2026-10-27]

C36. The reasoning role records each changed claim and its sentence in the review record. [decided: owner, 2026-10-27]

C3. The script `scripts/claims-check.mjs` lists the changed claims and the best-matching sentence for each. [proposed: this IR]

C41. The script reports a changed claim no sentence carries. [proposed: this IR]

C4. The reasoning role fixes, before the round starts, a changed claim that no sentence carries. [decided: owner, 2026-10-27]

C5. Each round's stranger is a fresh instance that reads the prose, writes its restatement, and only then reads the IR. [decided: owner, 2026-10-27]

C6. The reasoning role fixes each finding it accepts in the IR first and then in the prose. [decided: owner, 2026-10-27]

C7. A fix rephrases or cuts words before it adds words. [decided: owner, 2026-10-27]

C35. A fix adds words only for a missing definition, referent or rule. [decided: owner, 2026-10-27]

C8. The reasoning role records a declined finding in the review record with its reason. [decided: owner, 2026-10-27]

C9. After the fixes, the reasoning role sends the round's stranger instance its findings table and the fixed passages. [decided: owner, 2026-10-27]

C50. The instance answers, per accepted finding, whether the fix holds. [decided: owner, 2026-10-27]

C10. The reasoning role fixes again, before the next round, a fix the instance says does not hold. [decided: owner, 2026-10-27]

C11. The reasoning role adds to the next round's stranger brief the declined findings of the earlier rounds with their reasons. [decided: owner, 2026-10-27]

C12. A restatement mismatch repeated by two rounds in one form is a prose finding, whatever the strangers attributed it to. [decided: owner, 2026-10-27]

C13. The verdict is readable when the restatement matches the IR and the stranger finds no contradiction and no undefined term. [decided: owner, 2026-10-27]

C14. The reasoning role records in the review record, per round, the prose word count, the IR claim count, the finding count and the verdict. [decided: owner, 2026-10-27]

C15. Growth of the prose across rounds is a measure in the review record, not a bound. [decided: owner, 2026-10-27]

C16. The paraphraser, or under D3 the reasoning role, joins a reason the IR holds as its own claim to its rule by connective prose. [decided: owner, 2026-10-27]

### The reviewer brief

C17. The stranger brief is the instruction the reasoning role gives a round's stranger instance. [decided: owner, 2026-10-27]

C46. The stranger reads the prose, the IR, and at Rounds step 4 its own findings table with the fixed passages, and no other file. [decided: owner, 2026-10-27]

C19. After reading the IR, the stranger reports each disagreement between its restatement and the IR as a finding. [decided: owner, 2026-10-27]

C20. The stranger reports findings against SP-01 to SP-05, SP-08 to SP-11, SP-18, SP-25 and SP-26 of the style specification's rule table. [decided: owner, 2026-10-27]

C21. Each finding carries a locus and a fix kind. [decided: owner, 2026-10-27]

C22. The stranger brief's SP-05 reads as the methodology's P-004 (identifiers carry names) does: a name or a link at first use. [decided: owner, 2026-10-27]

C23. SP-18 is calibrated to a duty whose actor or trigger the text does not state. [decided: owner, 2026-10-27]

C24. SP-25, contradiction, is a finding when two passages cannot both be followed. [decided: owner, 2026-10-27]

C25. SP-26, excess words, is a finding when a word, phrase or sentence can go without losing a claim, or a claim is stated twice. [decided: owner, 2026-10-27]

C26. The brief lists the forms that are not defects. [decided: owner, 2026-10-27]

C43. The forms that are not defects: a dated status line; a table cell with semicolons; a parenthesis naming a rule or section; a sentence stating a count; a colon-introduced list with semicolons; a document's Reader, Type or Status line. [decided: owner, 2026-10-27]

C44. Before each round, the reasoning role adds to the stranger brief any form the text under review needs. [decided: owner, 2026-10-27]

C27. The stranger's report has four parts in order: Restatement, Findings, Readability, Counts. [decided: owner, 2026-10-27]

### Decisions on case 005

C28. Case 005's change 1, a verdict by a finding-rate threshold, is struck, because the verdict rule reached zero contradictions without a threshold. [decided: owner, 2026-10-27]

C29. Case 005's change 3, stopping when the finding count is flat with a limit of five, is struck, because the finding rate was flat from round 5 while contradictions ran to round 9. [decided: owner, 2026-10-27]

C30. Case 005's change 4, a bound on growth, is replaced by the measure of the Rounds section, because fixing in the IR first kept the prose from growing. [decided: owner, 2026-10-27]

C31. The split of the specification into IR form and review process is closed as not needed, because the IR specification reached readable at 2,808 words. [decided: owner, 2026-10-27]

C32. Reviewing only the amended passages after round 1 stays not recommended. [decided: owner, 2026-10-27]

C42. Fixing only new-passage findings stays not recommended. [decided: owner, 2026-10-27]

### Meta-review

C33. A text with three or more rounds in one count is a meta-review subject. [decided: owner, 2026-10-26]

C34. The meta-reviews so far are case 005, on methodology PR #51's rounds, and case 007, on methodology PR #52's rounds. [decided: cases 005 and 007]

C40. The meta-review reads the review record and the text, and reports, as an evaluation case, whether the process needs a change. [decided: owner, 2026-10-26]

C49. Disposition D3 is named review, reasoning-role rendered: the reasoning role renders the prose itself, then the reviewer rounds run as in D2. [decided: branch point v1.2, 2026-10-25]

## Relations

R1. C4 depends-on C2 because the check finds the claim the fix must reach.

R2. C9 depends-on C8 because the instance confirms accepted fixes, not declined findings.

R3. C12 refines C13 because a recurring mismatch is a text defect the verdict rule alone would charge to the stranger.

R4. C15 depends-on C14 because the measure is the recorded count.

R6. C28 supports C13 because the verdict rule replaces the threshold.

R7. C3 supports C2 because the script performs the check the rule requires.

R8. C41 supports C4 because the report names the claim the fix must reach.

## Evidence

E1. eval/cases/007-meta-review-full-ir-rounds-2026-10-27.md, Outcome: seven changes, six recommended; the owner accepted them on 2026-10-27.

E2. eval/cases/005-meta-review-stranger-rounds-2026-10-26.md, Outcome: nine changes; the owner's decisions of 2026-10-27 on changes 1 to 4 and 9.

E3. docs/intermediate-representation.review.md in the methodology repository: rounds 7 and 9 (drift), rounds 3 to 8 (the status rule), rounds 5 to 10 (the declined RD-n finding).

## Asks

A1. Accept branch point v1.4 and the style specification's SP-05, SP-18, SP-25 and SP-26. Depends: C1 to C27.

A2. Ratify or strike the terms restatement (T5), fix kind (T6) and locus (T7). Depends: A1.
