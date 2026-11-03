# IR: Branch point v1.11, the whole text

Reader: RD-4
Purpose: document. The branch point as a whole: which checks a text gets before it reaches its reader, and how its review rounds run, after the adopted changes of evaluation case 015.
Status: rendered (v1.11, round 8 fix pass; rendered by the reasoning role, D3)
Source: the owner's decision of 2026-11-02 on evaluation case 015 (changes 1 to 30 adopted, changes 31 to 35 declined); the adopted changes of cases 013 (1, 2, 3 and 5) and 014 (1 to 8), whose landing joined case 015; branch point v1.10 as the owner accepted it on 2026-11-01; the IRs of v1.4 to v1.10 under docs/records/.
Normative: yes
Footprint: docs/branch-point.md; docs/records/branch-point-history.md; docs/style-spec.md; docs/vocabulary.md; docs/backlog.md; .claude/agents/; .claude/skills/; scripts/; package.json

## Terms

T1. Branch point. defined-at: vocabulary.md#def-branch-point [decided: owner, 2026-10-24]

T2. Intermediate representation (IR). defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-intermediate-representation [decided: owner, 2026-10-24]

T3. Proportional verification. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-proportional-verification [decided: methodology vocabulary]

T4. Lint. defined-at: vocabulary.md#def-lint [decided: owner, 2026-10-26]

T5. Stranger. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-stranger [decided: owner, 2026-10-23]

T6. Dispatcher. defined-at: vocabulary.md#def-dispatcher [decided: owner, 2026-10-26]

T7. Disposition. defined-at: vocabulary.md#def-disposition [decided: owner, 2026-10-25]

T8. Paraphraser. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-paraphraser [decided: owner, 2026-10-24]

T9. Reasoning role. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-reasoning-role [decided: owner, 2026-10-24]

T10. Connective prose. defined-at: vocabulary.md#def-connective-prose [decided: owner, 2026-10-26]

T11. Round. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-round [decided: owner, 2026-10-27]

T12. Count. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-count [decided: owner, 2026-10-27]

T13. Limit. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-limit [decided: owner, 2026-10-27]

T14. Review record. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-review-record [decided: owner, 2026-10-27]

T15. Claims check. defined-at: vocabulary.md#def-claims-check [decided: owner, 2026-10-30]

T16. Round-trip check. defined-at: vocabulary.md#def-round-trip-check [decided: owner, 2026-10-24]

T17. Render map. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-render-map [decided: owner, 2026-10-27]

T18. Passage. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-passage [decided: owner, 2026-10-30]

T19. Awaiting restatement. defined-at: vocabulary.md#def-awaiting-restatement [decided: owner, 2026-10-30]

T20. Restatement. defined-at: vocabulary.md#def-restatement [decided: owner, 2026-10-27]

T21. Structural fix. defined-at: vocabulary.md#def-structural-fix [decided: owner, 2026-10-29]

T22. Fix commit. defined-at: vocabulary.md#def-fix-commit [decided: owner, 2026-11-01]

T23. Confirmation. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-confirmation [decided: owner, 2026-10-30]

T24. New defect. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-new-defect [decided: owner, 2026-10-30]

T25. Locus. defined-at: vocabulary.md#def-locus [decided: owner, 2026-10-27]

T26. Fix kind. defined-at: vocabulary.md#def-fix-kind [decided: owner, 2026-10-27]

T27. Style specification. defined-at: vocabulary.md#def-style-specification [decided: owner, 2026-10-24]

T28. Evaluation case. defined-at: vocabulary.md#def-evaluation-case [decided: owner, 2026-10-24]

T29. Evaluation corpus. defined-at: ../eval/README.md [decided: owner, 2026-10-24]

T30. IR-only document. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-ir-only-document [decided: owner, 2026-10-30]

T31. Normative text. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-normative-text [decided: owner, 2026-10-27]

T32. Meta-review. defined-at: vocabulary.md#def-meta-review [decided: owner, 2026-10-27]

T33. Meta-review signal. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-meta-review-signal [decided: owner, 2026-10-27]

T34. Term the text introduces: a term the text defines or links to a vocabulary entry. [proposed: this IR]

T35. Recurring claim: a claim named on the `Mismatches:` lines of two rounds of the text's counts. [proposed: this IR]

T36. Verdict. defined-at: https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#the-verdict [decided: methodology specification, The verdict]

T37. Rendering. defined-at: https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-rendering [decided: methodology vocabulary]

## Claims

### Plain purpose

C1. This document decides how much checking a text gets before it reaches its reader. [inferred: R1]

C2. The agents that route and review texts read the document, and the human owner reads it to set the numbers its rules use. [inferred: R2]

### Status, type and reader

C3. Version 1.11 carries the adopted changes of evaluation case 015, a ruleset review, that bear on the branch point, this document's rules. evidence: E1. [decided: owner, 2026-11-02, case 015 change 29]

C4. Version 1.10, the latest version the owner accepted, is active on main while version 1.11 is under review. [decided: owner, 2026-11-01]

C6. The thresholds, the numbers in the rules' conditions, are provisional until the evaluation corpus tunes them. [decided: branch point v1.4 IR, C37; reworded in count 1, round 1]

C7. The rules are the Rendering conditions of the methodology's intermediate-representation specification. [decided: branch point v1.4 IR, C38]

C8. The branch point is a Specification, the methodology's document type. [decided: owner, 2026-11-01, branch point v1.10]

C9. The dispatcher, the script that applies these rules to one IR, implements against this document. [decided: owner, 2026-11-01, branch point v1.10; reworded in count 1, round 2]

C10. The reader is RD-4, a fresh agent session implementing or running these rules. [decided: owner, 2026-11-01, branch point v1.10; reworded in count 1, round 1]

C142. The human owner, setting the thresholds, reads the branch point with no more context than RD-4. [decided: owner, 2026-11-01, branch point v1.10; reworded after round 1 confirmation]

### Purpose

C11. The branch point gives each IR a disposition: which of the lint (the project's deterministic checker), the rendering and the stranger rounds run. [decided: owner, 2026-11-01, branch point v1.10; reworded in count 1, round 6]

C12. The branch point is how the project applies proportional verification. [decided: branch point v1.9 IR, C72; reworded in count 1, round 8]

C14. Under BP-03 and BP-04, a document gets the lint, the rendering and the stranger rounds. [decided: owner, 2026-11-01, branch point v1.10; reworded in count 1, round 3]

C15. The methodology specification's section "Texts that require an IR" says which texts start as an IR. evidence: E1. [decided: owner, 2026-11-02, case 015 change 9]

### Inputs

C16. The inputs come from the IR. [decided: owner, 2026-11-01, branch point v1.10]

C17. The input reader comes from the Reader header, an identifier of the methodology's reader catalog. evidence: E1. [decided: owner, 2026-11-02, case 015 change 9]

C18. The input purpose comes from the Purpose header: `report` or `document`. [decided: owner, 2026-11-01, branch point v1.10]

C19. The input claims is the count of `C` elements. [decided: owner, 2026-11-01, branch point v1.10]

C20. The input proposed terms is the count of `T` elements, terms, with status `proposed`: terms that wait for the owner's ratification. [decided: owner, 2026-11-01, branch point v1.10; reworded in count 1, round 1]

C21. The input dependent asks counts the `A` elements, asks (requests to the reader), whose `Depends:` field names the claims or asks they rest on. [decided: owner, 2026-11-01, branch point v1.10; reworded after round 1 confirmation]

C22. The input longest claim is the word count of the longest `C` element. [decided: owner, 2026-11-01, branch point v1.10]

C23. The input owner flag is `review` if the owner asked for a review of this output. [decided: owner, 2026-11-02, case 015 change 25; reworded in count 1, round 1]

C158. The input normative comes from the Normative header: `yes` when the prose is normative text. [decided: owner, 2026-10-25, the Normative header; added in count 1, round 3]

C143. The input owner flag is `ir-only` if the owner designated the document IR-only: delivered as its IR alone, with no prose. evidence: E1. [decided: owner, 2026-11-02, case 015 change 25; added in count 1, round 1]

### Dispositions

C25. Disposition D0, lint only, runs the schema checks CK-01 (referent rule) to CK-10 (section order) and the lint's prose checks. [decided: owner, 2026-11-01, branch point v1.10; reworded in count 1, round 2]

C144. Under D0 the IR is delivered as it stands. [decided: owner, 2026-11-01, branch point v1.10]

C26. Disposition D1, render, runs D0, then the paraphraser renders prose for the reader. [decided: branch point v1.4 IR, C48]

C27. The paraphraser, or the reasoning role when it renders, joins a rule to a reason the IR holds as its own claim by connective prose. [decided: branch point v1.4 IR, C16; reworded in count 1, round 1]

C145. Connective prose is words that join claims and assert nothing of their own. [decided: owner, 2026-10-26, the vocabulary row connective prose]

C28. Disposition D2, render and review, runs D1, then the stranger rounds under the Rounds section. [decided: branch point v1.4 IR, C39]

C29. Disposition D3, review with the reasoning role rendering, has the reasoning role render the prose itself, then the stranger rounds run as in D2. [decided: branch point v1.4 IR, C49]

C30. The reasoning role runs the lints for every IR, whatever disposition follows. [decided: branch point v1.9 IR, C54]

### Rounds

C31. A round is one fresh stranger's reading of the text, the fixes that follow, and that stranger's check of the fixes step 6 names. evidence: E1. [decided: owner, 2026-11-02, case 015 change 7; reworded in count 1, round 8]

C32. The methodology specification's Stranger rounds section holds the rules every round follows: the verdict, the fix rules, confirmation, the limit and the signals. evidence: E1. [decided: owner, 2026-11-02, case 015 change 7]

C33. The Rounds section holds this project's steps, the scripts the reasoning role runs and the lines it writes in the review record. evidence: E1. [decided: owner, 2026-11-02, case 015 change 7; reworded in count 1, round 3; reworded in count 1, round 7]

C34. At a count's start, the reasoning role writes the branch point version and commit into the review record. [decided: branch point v1.9 IR, C2]

C35. A change the owner adopts during a count applies from the next count. [decided: branch point v1.9 IR, C3]

### Step 1, check the text

C36. In step 1, the reasoning role runs `npm run check` on the text under review. evidence: E1. [decided: owner, 2026-11-02, case 015 change 24]

C37. The check runs the lint, the round-trip check and the claims check. evidence: E1. [decided: owner, 2026-11-02, case 015 change 24]

C38. The round-trip check finds each claim the render map omits. [decided: owner, 2026-10-24]

C39. The claims check looks for a prose sentence that carries each claim changed since the check's base, the commit the check compares against. [decided: owner, 2026-10-30; reworded in count 1, round 8]

C40. Before round 1, the claims check compares the text with the version the owner last accepted. [inferred: R3]

C41. The reasoning role shortens each sentence over 25 words that the check lists, outside the forms the Stranger brief section permits. [decided: owner, 2026-11-02, case 015 change 1; reworded in count 1, round 1]

C42. The reasoning role fixes each claim the check lists as unmapped, missing or stale. evidence: E1. [decided: owner, 2026-11-02, case 015 change 24]

C43. The reasoning role writes the `Checks:` line. evidence: E1. [decided: owner, 2026-11-02, case 015 change 24]

### Step 2, brief the stranger

C44. In step 2, the reasoning role starts a fresh stranger instance from the agent file `.claude/agents/reviewer.md`, with the brief below. evidence: E1. [decided: owner, 2026-11-02, case 015 change 23]

C45. In the brief, the reasoning role names the commit to read and the human reader the text names for its reader. [decided: owner, 2026-11-02, case 015 changes 26 and 29; reworded in count 1, round 2; reworded in count 1, round 7]

C167. This text names the human owner as its human reader, in the Reader line's second sentence. [inferred: R7]

C46. In the brief, the reasoning role names each finding the reasoning role declined so far, in whole or in part, with its reason. [decided: owner, 2026-11-02, case 015 change 7; reworded in count 1, round 4]

C47. In the brief, the reasoning role lists each passage awaiting restatement: a passage moved by an earlier fix that no later restatement has yet tested. [decided: branch point v1.10 IR, C32; reworded in count 1, round 2]

### Step 3, read and report

C48. In step 3, the stranger reads the prose and writes its restatement, its own account of the text in at most 200 words. [decided: owner, 2026-10-27]

C49. The stranger writes the restatement for the human reader the brief names, without any term the text introduces. evidence: E1. [decided: owner, 2026-11-02, case 015 change 26]

C157. A term the text introduces is one the text defines or links to a vocabulary entry. [proposed: this IR]

C50. Then the stranger restates each listed passage in one sentence. [decided: branch point v1.10 IR, C10]

C51. Then the stranger reads the IR and writes its report. [decided: branch point v1.4 IR, C5]

C52. In step 3, the stranger reads the brief, the prose and the IR, and no other file. evidence: E1. [decided: owner, 2026-11-02, case 015 change 7]

### Step 4, record the round

C53. In step 4, the reasoning role writes the round's entry: the stranger model, the restatement as written, and each finding with its decision. evidence: E1. [decided: owner, 2026-11-02, case 015 changes 7 and 26]

C162. A decision on a finding is fixed, or declined with a reason. [decided: methodology intermediate-representation specification, C261; added in count 1, round 4]

C54. The reasoning role runs `node scripts/lint.mjs --restatement` on the entry. evidence: E1. [decided: owner, 2026-11-02, case 015 change 27]

C55. The reasoning role records each introduced term or repeated sentence the restatement check lists as a finding under the verdict's fourth condition. [inferred: R4]

C152. The fourth condition, the paraphrase test, asks for the restatement step 3 describes, in the stranger's own words. [decided: owner, 2026-11-02, case 015 change 26; reworded in count 1, round 3]

C56. The reasoning role writes the `Mismatches:` line. [decided: branch point v1.7 IR, C42]

C57. Then the reasoning role runs `node scripts/signals.mjs` on the record and writes the verdict. [decided: branch point v1.9 IR, C18]

### Step 5, fix

C58. In step 5, the reasoning role fixes each finding not declined under the specification's fix rules, the IR first. evidence: E1, E3. [decided: owner, 2026-11-02, case 015 changes 5 and 7; reworded after round 4 confirmation]

C163. A recurring claim is a claim named on the `Mismatches:` lines of two rounds of the text's counts. [proposed: this IR]

C59. For each claim the signals script reports as recurring, the reasoning role makes the owed structural fix: a move of the sentence, not a rewording. evidence: E1, E2. [decided: owner, 2026-11-02, case 015 changes 3 and 15]

C60. The reasoning role marks that structural fix `awaiting restatement` in the review record. [decided: branch point v1.10 IR, C33]

C61. The reasoning role runs `npm run check` again on the fixed text, with the commit the round read as its base. [decided: owner, 2026-11-02, case 015 changes 1 and 24; reworded in count 1, round 3]

C165. The reasoning role writes the `Checks:` line again. [decided: owner, 2026-11-02, case 015 change 24; added in count 1, round 6]

C153. The reasoning role fixes what that run lists. [decided: owner, 2026-11-02, case 015 changes 1 and 24; reworded after round 2 confirmation]

C62. The fix commit is the commit that holds step 5's fixes and every fix step 5's check calls for. evidence: E1, E2. [decided: owner, 2026-11-02, case 015 change 4; reworded after round 5 confirmation]

### Step 6, confirm

C63. In step 6, the reasoning role sends the round's stranger instance the findings, the declines with their reasons, and the fix commit. [decided: branch point v1.9 IR, C99]

C64. The instance reads the prose and the IR at the fix commit, in full. [decided: branch point v1.10 IR, C29]

C65. The instance says whether each fix not awaiting restatement holds. [decided: branch point v1.7 IR, C20]

C66. The instance says whether the instance accepts each decline. [decided: branch point v1.9 IR, C85]

C67. The instance names each new defect a fix introduced. [decided: branch point v1.10 IR, C30]

C68. The reasoning role writes the `Confirmation:` line. [decided: branch point v1.10 IR, C31; reworded in count 1, round 2]

C154. The reasoning role fixes again each fix the instance says does not hold. [decided: branch point v1.10 IR, C31; reworded in count 1, round 6]

C164. The reasoning role fixes each new defect the instance names. [decided: branch point v1.10 IR, C31; split in count 1, round 6]

C160. The reasoning role runs `npm run check` on those fixes, with the fix commit as its base. [decided: owner, 2026-11-02, case 015 change 24; added after round 3 confirmation]

C161. The reasoning role then opens the next round at the commit that holds those fixes. [decided: branch point v1.10 IR, C31; reworded in count 1, round 4]

### Step 7, close the count

C70. In step 7, at a readable verdict or at the limit, the reasoning role applies the specification's rules for the final round. evidence: E1. [decided: owner, 2026-11-02, case 015 change 7; reworded in count 1, round 8]

C71. The reasoning role writes the `Meta-review:` line. [decided: branch point v1.6 IR, C7]

C72. The reasoning role lists for the owner what the specification sends to the owner. evidence: E1. [decided: owner, 2026-11-02, case 015 change 7]

### The review record's lines and the status lines

C73. The `Checks:` line reads `Checks: L sentences over 25 words; M of N claims mapped; C claims changed, X missing, Y stale.` and is written at steps 1 and 5. evidence: E1. [decided: owner, 2026-11-02, case 015 change 24]

C74. The restatement stands at step 4 as a `Restatement:` line, then the restatement as written in a quoted block. evidence: E1. [decided: owner, 2026-11-02, case 015 change 26]

C75. The `Mismatches:` line, at step 4, holds one entry per mismatch, or `none`. [decided: branch point v1.10 IR, C14; reworded in count 1, round 1]

C146. Each entry names the contradicted claim and, after "relied on", the claim of the quoted sentence, as `C41 (relied on C35)`. [decided: branch point v1.10 IR, C14; reworded after round 1 confirmation]

C76. The `Confirmation:` line, at step 6, reads `Confirmation: H of A fixes hold. Not held: <finding numbers, or none>. Declines accepted: K of D. New defects: N.` [decided: branch point v1.9 IR, C95]

C77. The per-round row, at step 4, holds the round, the prose words, the IR claims, the findings and the verdict. [decided: branch point v1.4 IR, C14]

C78. The `Meta-review:` line, at step 7, takes the form the specification's Meta-review section gives. evidence: E1. [decided: owner, 2026-11-02, case 015 change 10]

C166. The capital letters in each form stand for the counts the line reports. [inferred: R6]

C79. During the rounds the prose status line reads `under review` with the version and the round number. [decided: branch point v1.5 IR, C5]

C80. During the rounds the IR's Status parenthesis holds the round number. [decided: branch point v1.5 IR, C6]

C81. The reasoning role changes the prose status line and the IR's Status parenthesis together at the start of each round. [decided: branch point v1.5 IR, C16]

### Stranger brief

C82. The stranger brief is the instruction the reasoning role gives each round's stranger instance. [decided: branch point v1.4 IR, C17]

C83. Each finding carries a locus (the prose, the IR, or both) and a fix kind (cut, rephrase, or add). [decided: branch point v1.4 IR, C21]

C84. After reading the IR, the stranger reports each disagreement between its restatement and the IR as a finding. [decided: branch point v1.4 IR, C19]

C85. The stranger reports as a finding each passage the stranger cannot restate without a term the text introduces. evidence: E1. [decided: owner, 2026-11-02, case 015 change 26]

C169. A calibration is a dated refinement of a style rule's scope, recorded in the rule's row. [inferred: R8]

C86. The stranger reports findings against the style specification's rows SP-01 to SP-05, SP-08 to SP-11, SP-18, SP-25 and SP-26, with the calibrations the rows carry. evidence: E1. [decided: owner, 2026-11-02, case 015 change 11]

C87. For each mismatch, the brief asks the stranger to quote the prose sentence the stranger relied on. [decided: branch point v1.10 IR, C15]

C150. The 25-word limit of SP-02 binds the sentences of the prose. [decided: owner, 2026-11-02, case 015 change 1; added after round 1 confirmation; reworded after round 7 confirmation]

C151. An IR claim's limit is 40 words, the specification's check CK-02 (claim length). [decided: methodology intermediate-representation specification, C54; added after round 1 confirmation]

C88. The brief lists the forms that are not defects. [decided: branch point v1.4 IR, C26]

C89. A form that is not a defect: a dated status line. [decided: branch point v1.7 IR, C29]

C90. A form that is not a defect: an under-review status line with a version and round number. [decided: branch point v1.7 IR, C29]

C91. A form that is not a defect: a table cell with semicolons. [decided: branch point v1.7 IR, C29]

C92. A form that is not a defect: a parenthesis naming a rule or section. [decided: branch point v1.7 IR, C29]

C93. A form that is not a defect: a sentence stating a count. [decided: branch point v1.7 IR, C29]

C94. A form that is not a defect: a colon-introduced list with semicolons. [decided: branch point v1.7 IR, C29]

C95. A form that is not a defect: a document's Reader, Type or Status line. [decided: branch point v1.7 IR, C29]

C96. A form that is not a defect: a rule joined by "because", "so" or "therefore" to a reason the IR holds as its own claim. [decided: branch point v1.7 IR, C29]

C97. Before each round, the reasoning role adds to the brief any form the text under review needs. [decided: branch point v1.4 IR, C44]

C98. Before each round, the reasoning role quotes each added form in the review record and names the finding or fix the form bears on. [decided: branch point v1.9 IR, C27]

C99. The stranger's report has five parts in order: Restatement, Listed passages, Findings, Readability, Counts. [decided: branch point v1.10 IR, C57]

### Rules

C100. The rules table maps an IR's inputs to a disposition. [decided: branch point v1.9 IR, C87]

C101. The first row of the rules table whose condition holds decides the disposition. [decided: branch point v1.9 IR, C55]

C102. Row BP-00: when the owner designated the document IR-only and the IR header does not carry `Normative: yes`, the disposition is D0. [decided: owner, 2026-10-30, branch point v1.8; reworded in count 1, round 1]

C147. Under BP-00 the IR is the deliverable, its Status reads `delivered IR-only`, and no later row applies. [decided: owner, 2026-10-30, branch point v1.8]

C159. A document the owner designates IR-only, with no `Normative: yes`, gets the lint alone. [decided: owner, 2026-10-30, branch point v1.8; added after round 3 confirmation; reworded in count 1, round 7]

C168. Rows BP-03 and BP-04 never apply to such a document. [decided: owner, 2026-10-30, branch point v1.8; split from C159 in count 1, round 7]

C103. Row BP-02a: when the purpose is `document` and the IR header carries `Normative: yes`, the disposition is D3. [decided: owner, 2026-10-26, branch point v1.2]

C104. Row BP-02: when the owner flag is `review`, the disposition is D2. [decided: branch point v1.1, 2026-10-25]

C105. Row BP-03: when the purpose is `document`, the disposition is D2. [decided: branch point v1.1, 2026-10-25]

C106. Row BP-04: when the reader is RD-4 (a fresh agent session) or RD-5 (an external reader), the disposition is D2. evidence: E1. [decided: owner, 2026-11-02, case 015 change 9]

C107. Row BP-05a: when proposed terms exceed zero, the disposition is D1, with an ask to ratify the proposed terms. evidence: E1. [decided: owner, 2026-11-02, case 015 change 12]

C108. Row BP-06: when the reader is RD-2 (the human owner, returning), the disposition is D1. [decided: branch point v1.1, 2026-10-25]

C109. BP-07 gives D1 for RD-1 (the owner, in conversation) when the IR has over six claims, a dependent ask or a claim over 30 words. [decided: branch point v1.1, 2026-10-25; reworded after round 1 confirmation]

C110. Row BP-08: when the reader is RD-3 (a delegating agent) and the IR has more than twelve claims or a dependent ask, the disposition is D1. [decided: branch point v1.1, 2026-10-25]

C111. Row BP-09: when the reader is RD-1 or RD-3, the disposition is D0. [decided: branch point v1.1, 2026-10-25]

C156. A short report is one under its reader's threshold: row BP-07's for RD-1 (the owner, in conversation), row BP-08's for RD-3 (a delegating agent). [inferred: R5]

### Why each rule

C112. BP-02 is the owner's review request: the owner asked for a review of this output, so the stranger rounds run. [decided: branch point v1.9 IR, C69]

C113. BP-02a stands before BP-02, so an IR with purpose `document` and `Normative: yes` takes D3 whatever the owner flag. [decided: branch point v1.9 IR, C68; reworded in count 1, round 2; reworded in count 1, round 8]

C114. Documentation is read by someone who was not in the conversation. [decided: branch point v1.1, 2026-10-25; reworded in count 1, round 1]

C115. Under BP-02a the reasoning role renders the normative text in place of the paraphraser. [decided: branch point v1.10 IR, C69; reworded in count 1, round 3]

C148. A paraphrase of normative text could change its force. [decided: branch point v1.10 IR, C69]

C116. Under BP-05a, an unratified term in a document gets the stranger's check under BP-03. [decided: owner, 2026-11-01, branch point v1.10]

C117. Under BP-05a, in a report the owner's ratification of the proposed terms replaces the stranger's check. evidence: E1, E4. [decided: owner, 2026-11-02, case 015 change 12]

C118. The reason: the stranger review on reports to RD-1 or RD-3 runs only on request (owner ruling, 2026-10-25). evidence: E4. [decided: branch point v1.10 IR, C88]

C119. The returning owner needs the state paragraph, the paragraph stating where the project stands, which only a rendering of prose writes. [decided: branch point v1.6 IR, C20; reworded in count 1, round 2]

C120. An IR under the thresholds, with no dependent ask, reads well as it stands. [decided: branch point v1.1, 2026-10-25; reworded after round 3 confirmation]

C121. Past the thresholds, the reader reads prose faster than a claims list. [decided: branch point v1.1, 2026-10-25; reworded in count 1, round 3]

C122. BP-09 is the proportional-verification case. [decided: branch point v1.1, 2026-10-25; reworded in count 1, round 6]

C13. Under BP-09, a short report to a reader who shares the conversation costs one pass of the lint. [decided: branch point v1.9 IR, C73; reworded in count 1, round 6]

### Meta-review signals

C123. At the end of a count the reasoning role runs `node scripts/signals.mjs` on the review record. evidence: E1. [decided: owner, 2026-11-02, case 015 change 10]

C124. The methodology specification's Meta-review section defines the trigger, the signals and the `Meta-review:` line. evidence: E1. [decided: owner, 2026-11-02, case 015 change 10]

C125. The script reads the first signal, a fix not held in two or more rounds, from the `Confirmation:` lines. [decided: owner, 2026-11-02, case 015 change 2; reworded in count 1, round 1]

C126. The script reads part of the second signal, one claim named by mismatches in two rounds, from the `Mismatches:` lines of every count. [decided: branch point v1.9 IR, C30; reworded in count 1, round 1]

C127. The reasoning role reads the rest of the second signal, a finding raised again after a decline, from the record. [decided: branch point v1.10 IR, C43; reworded in count 1, round 1]

C149. The reasoning role also reads the fourth signal from the record: a contradiction, in round 3 or later, in a passage a fix touched. evidence: E1. [decided: owner, 2026-11-02, case 015 change 10; added in count 1, round 1]

C155. The specification struck the third signal, a measure of the prose's growth per IR claim. [decided: methodology intermediate-representation specification, C284; reworded in count 1, round 3]

C128. The script stops with an error on a line the script cannot read. evidence: E1. [decided: owner, 2026-11-02, case 015 change 17]

C129. The reasoning role corrects the unreadable line before the reasoning role writes the `Meta-review:` line. evidence: E1. [decided: owner, 2026-11-02, case 015 change 17]

C130. The branch point's history, a record outside the reviewed text, holds the past meta-reviews and the owner's decisions on them. evidence: E1, E2. [decided: owner, 2026-11-02, case 015 change 8]

### Versions

C131. Version 1.11, of 2026-11-02, carries the branch point's share of evaluation case 015's adopted changes and an IR of the whole text. [decided: owner, 2026-11-02, case 015 changes 13 and 29; reworded in count 1, round 1]

C132. Version 1.10, of 2026-10-30: thirteen adopted changes of evaluation case 012 and six terms; readable at round 9; accepted by the owner on 2026-11-01. [decided: branch point v1.10 IR, C1]

C133. Version 1.9, of 2026-10-30: nineteen adopted changes of evaluation cases 010 and 011 and two terms; readable at round 8; accepted by the owner on 2026-10-30. [decided: branch point v1.9 IR, C1]

C134. Version 1.8, of 2026-10-30, carried the row BP-00 for IR-only documents and was delivered IR-only. [decided: owner, 2026-10-30, branch point v1.8]

C135. Version 1.7, of 2026-10-29: sixteen adopted changes of evaluation case 009 and the term structural fix; readable at round 3. [decided: branch point v1.7 IR, C1]

C136. Version 1.6, of 2026-10-27, carried the signal-based meta-review trigger. [decided: branch point v1.6 IR, C1]

C137. Version 1.5, of 2026-10-27, carried five adopted changes of evaluation case 008. [decided: branch point v1.5 IR, C17]

C138. Version 1.4, of 2026-10-27: the style rows SP-05, SP-18, SP-25 and SP-26; three terms; six adopted changes of evaluation case 007; the owner's decisions on case 005; accepted by the owner. [decided: branch point v1.4 IR, C47]

### The dispatch log

C139. The dispatcher records, for every IR the dispatcher routes, the inputs, the rule that fired and the disposition, in `eval/dispatch-log.md`. [decided: owner, 2026-10-25, chunk 2]

C140. Chunk 2 of the pilot plan created `eval/dispatch-log.md`. [decided: owner, 2026-10-25, chunk 2]

C141. The dispatch log is the data the evaluation corpus tunes against. [decided: owner, 2026-10-25, chunk 2; reworded in count 1, round 2; reworded in count 1, round 7]

G1. cluster: C36, C37, C38, C39, C40, C41, C42, C43 [decided: owner, 2026-11-02, case 015 change 13]

G2. cluster: C44, C45, C167, C46, C47 [decided: owner, 2026-11-02, case 015 change 13]

G3. cluster: C48, C49, C50, C51, C52 [decided: owner, 2026-11-02, case 015 change 13]

G4. cluster: C53, C54, C55, C56, C57 [decided: owner, 2026-11-02, case 015 change 13]

G5. cluster: C58, C163, C59, C60, C61, C62 [decided: owner, 2026-11-02, case 015 change 13]

G6. cluster: C63, C64, C65, C66, C67, C68, C154, C164, C160, C161 [decided: owner, 2026-11-02, case 015 change 13]

G7. cluster: C70, C71, C72 [decided: owner, 2026-11-02, case 015 change 13]

## Relations

R1. C1 refines C11 because the plain purpose states the Purpose section's decision without its terms, as case 015 change 28 asks of every document under docs/.

R2. C2 refines C10 because the readers the Reader line names are the agents that route and review texts and the owner who sets the thresholds.

R3. C40 depends-on C37 because the claims check needs a base, the version the owner last accepted; v1.10, that version, holds no IR beside its prose, so this count's first check read an empty base (case 015 change 13).

R4. C55 depends-on C49 because a term the restatement check finds in the restatement is a term the stranger did not restate without, which the specification's fourth condition counts (case 015 changes 26 and 27).

R5. C156 refines C13 because rows BP-07 and BP-08 give D1 to a report past their thresholds, so a report under them that reaches BP-09 takes D0, one pass of the lint.

R6. C166 refines C73 because each letter in the `Checks:` and `Confirmation:` forms marks a number the reasoning role writes in its place.

R7. C167 refines C45 because C142 says the human owner reads the branch point with no more context than RD-4.

R8. C169 refines C86 because the style specification's rows record each calibration with its date and case, as the rows of SP-01 and SP-18 do.

## Evidence

E1. eval/cases/015-ruleset-simplification-review-2026-11-02.md, Outcome, changes 1 to 30, adopted by the owner on 2026-11-02 (changes 31 to 35 declined), the case's decision line.

E2. eval/cases/014-meta-review-branch-point-v1.10-and-ir-spec-count-6-2026-11-01.md, Outcome, changes 1 to 8, adopted by the owner on 2026-11-02, their landing deferred to case 015.

E3. eval/cases/013-meta-review-k003-proposal-count-1-2026-10-30.md, Outcome, changes 1, 2, 3 and 5, adopted by the owner on 2026-11-02, their landing joining case 015.

E4. docs/backlog.md, chunk 3's row: "Scope narrowed per the owner: reports to RD-1 or RD-3 need an IR only for a term, a decision or a register fact; review on request."

## Asks

A1. Accept or reject branch point v1.11. Under case 015 change 19, acceptance ratifies the wording of each decided claim this IR rewords from its source, unless the owner names a claim to exclude. Depends: C1 to C169.

A2. Ratify or strike the term "a term the text introduces" (T34) and its definition, C157, which the paraphrase test rests on; the specification's count 7 asks the same. Depends: C157.

A3. Ratify or strike the term "recurring claim" (T35) and its definition, C163, which step 5's structural fix rests on. Depends: C163.
