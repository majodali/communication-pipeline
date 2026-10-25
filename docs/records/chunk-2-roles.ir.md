# IR: chunk 2, roles in Claude Code

Reader: RD-1 (human owner, in conversation).
Purpose: report. What chunk 2 built, what the lint found when turned on the pilot's own documents, the schema correction that followed, and the asks for the chunk 2 gate.
Status: draft
Source: the pilot plan, chunk 2; owner go-ahead 2026-10-25.

## Terms

T1. Lint: the deterministic checker in scripts/lint.mjs that runs the IR checks CK-01 to CK-10 and the style specification's lint column. defined-at: scripts/lint.mjs [proposed: this IR]

T2. Dispatcher: the script scripts/dispatch.mjs that applies the branch point's rules to one IR and logs the disposition. defined-at: docs/branch-point.md [proposed: this IR]

T3. Render map: the comment line the paraphraser appends to prose, listing which paragraph each claim landed in. defined-at: docs/ir-schema.md, Rendering rule [proposed: this IR]

## What chunk 2 built

C1. The lint runs the ten IR checks and eleven style checks, on demand and as a PostToolUse hook on every Write or Edit of a markdown file. evidence: E1. [decided: this chunk]

C2. The hook blocks a write that leaves an IR with violations, and returns prose findings to the agent as context without blocking. evidence: E1. [decided: this chunk]

C3. The dispatcher applies rules BP-01 to BP-09 to an IR's header and four counts and appends a row to eval/dispatch-log.md. evidence: E2. [decided: this chunk]

C4. The paraphraser and the reviewer are defined as Claude Code agents under .claude/agents/, with fresh context, the paraphraser on the sonnet model and the reviewer on the haiku model. evidence: E3. [decided: this chunk]

C5. Three skills under .claude/skills/ carry the role procedures: reason, render, review. evidence: E3. [decided: this chunk]

C6. The test suite holds twenty tests covering every IR check, the dispatcher's rule order, and six lint false-positive classes found during the chunk. evidence: E4. [decided: this chunk]

## What the lint found on the pilot's own documents

C7. Turned on the fifteen markdown files the pilot had written before chunk 2, the lint reported 43 violations and 130 warnings. evidence: E5. [decided: lint run, 2026-10-25]

C8. Of the 43 violations, 35 were provenance statuses written as a bare [proposed] where the schema requires [proposed: this IR]. evidence: E5. [decided: lint run, 2026-10-25]

C9. Six violations were claims over forty words. evidence: E5. [decided: lint run, 2026-10-25]

C24. One violation was a relation pointing at evidence instead of a claim. evidence: E5. [decided: lint run, 2026-10-25]

C36. One violation was a deictic phrase from the referent rule's list inside a claim. evidence: E5. [decided: lint run, 2026-10-25]

C10. The session that wrote the schema on 2026-10-24 wrote both IRs on 2026-10-24. evidence: E5. [decided: git log]

C11. After fixing the IRs and refining the lint, the fifteen files report 0 violations and 30 warnings. evidence: E6. [decided: lint run, 2026-10-25]

C12. Nine of the 30 remaining warnings are inside the W-008 bootstrap block in CLAUDE.md, which the methodology forbids editing. evidence: E6. [decided: lint run, 2026-10-25]

C13. The W-008 block joins clauses with semicolons and heads its sections with em-dashes. [decided: lint run, 2026-10-25]

C25. The methodology's own required text fails the style rules the pilot derived from the methodology. [inferred: R1]

## Schema and lint corrections

C14. Schema v1 required a provenance status on every element. [decided: docs/ir-schema.md v1]

C26. No IR written under v1 had put a provenance status on a relation, an evidence pointer or an ask. evidence: E5. [decided: lint run, 2026-10-25]

C15. Schema v1.1 requires provenance on terms, claims and clusters only. [proposed: this IR]

C16. A split claim takes a new number, never a suffix, because the parser reads C1a as a continuation of C1. [proposed: this IR]

C17. Six lint refinements removed false-positive classes. [decided: this chunk]

C27. Three classes concern punctuation: a semicolon list after a colon; a sentence-initial determiner with its noun; fielded rows with one em-dash and a bold label. [decided: this chunk]

C35. Three classes concern structure: a table's first cell as a definition site; headings inside fenced code; identifiers, versions and dates counted as numerals. [decided: this chunk]

C18. Each refinement has a test that fails on the false positive and passes on the true positive. evidence: E4. [decided: this chunk]

## The live run

C19. The live run is the Portfolio register refresh that closes the 1.5.0 migration round, in the methodology repository. evidence: E7. [decided: this chunk]

C20. Eight of nine pinned projects now pin 1.5.0. evidence: E7. [decided: observed Classifications, 2026-10-25]

C28. serverless-web-app-template still pins 1.4.0, with its migration PR open since 2026-09-02. evidence: E7. [decided: observed Classification, 2026-10-25]

C21. The live run's IR lints clean and dispatches to D2 under BP-02, because the owner flagged it for review. evidence: E2. [decided: dispatch log, 2026-10-25]

C22. The paraphraser agent type is not available in a session whose working directory is another repository. [decided: observed, 2026-10-25]

C29. The live run inlined the paraphraser's contract into a general-purpose fresh-context subagent on the sonnet model. [decided: this chunk]

C23. Per-repository agent definitions do not reach a session started elsewhere, which is one of the reasons the roles move to project-orchestrator. [inferred: R2]

C30. The paraphraser sorted claims into "what is already covered" and "what changed" by provenance status: decided claims under covered, proposed claims under changed. evidence: E7. [decided: paraphraser output, 2026-10-25]

C31. The IR does not say which W-008 part a claim belongs to, so the paraphraser's provenance mapping is the only rule available to it. [inferred: R4]

C32. The provenance status decided conflates two things: a decision the owner ratified, and a fact quoted from an observed source. [proposed: this IR]

C33. The paraphraser rendered the two relations as sentences in the "what changed" part. evidence: E7. [decided: paraphraser output, 2026-10-25]

C34. The rendering rule does not say whether relations render, so the paraphraser rendered them. [inferred: R5]

## The stranger review, round 1

C37. The reviewer, on the haiku model with fresh context, returned 38 findings on the live run's prose and IR and the verdict not readable for RD-1. evidence: E8. [decided: review file, 2026-10-25]

C38. The reasoning role accepted 27 findings and disputed 11, each disputed row keeping its place with one sentence why. evidence: E8. [decided: review file, 2026-10-25]

C39. Three accepted findings were defects a lint cannot see. evidence: E8. [decided: review file, 2026-10-25]

C44. The three are: a Source line saying all nine PRs were merged while the evidence showed one open; a sentence saying the nine rows read 1.5.0 except one; a process statement filed under "what is already covered". evidence: E8. [decided: review file, 2026-10-25]

C40. Three accepted findings changed the specifications: an introduced term is defined at first use and listed; relations are not rendered; each item under "what changed" carries a named pointer. [decided: this chunk]

C41. Eight of the 11 disputed findings applied the one-claim rule to forms the schema defines otherwise: relations with their reason, asks with two steps, evidence pointers with semicolons. evidence: E8. [decided: review file, 2026-10-25]

C42. The reviewer's instructions now list the forms that are not defects. [decided: this chunk]

C48. The reviewer's instructions now say that a word the reader's own corpus defines is not a borrowed term for that reader. [decided: this chunk]

C43. The round 1 review cost 147 seconds and about 84 thousand tokens on the haiku model. evidence: E9. [decided: task notification, 2026-10-25]

C45. In the second rendering, the paraphraser placed C9 and C10 of the live-run IR under "what changed" although both carry the status decided. evidence: E10. [decided: paraphraser output, 2026-10-25]

C47. The paraphraser's render map gives its reason: C9 and C10 are register edits naming a file and a row. evidence: E10. [decided: paraphraser output, 2026-10-25]

C46. The paraphraser's override of the provenance mapping is a second instance for ask A5. [inferred: R7]

## The stranger review, round 2

C49. Round 2, on the second rendering and the amended IR, returned 22 findings and the verdict not readable for RD-1. evidence: E11. [decided: review file, 2026-10-25]

C50. Prose findings per thousand words fell from 82.0 in round 1 to 35.2 in round 2. evidence: E8, E11. [decided: review files, 2026-10-25]

C51. The reasoning role accepted 19 of the 22 and disputed 3. evidence: E11. [decided: review file, 2026-10-25]

C52. One accepted finding was an inconsistency no lint sees: the IR's Purpose said the refresh closes the round while ask A1 said the round closes when the template's PR merges. evidence: E11. [decided: review file, 2026-10-25]

C53. The reviewer independently judged that the two allegro-row claims should carry proposed, as the paraphraser had in round 2. evidence: E11. [decided: review file, 2026-10-25]

C54. Defining an introduced term at its first use collided with one claim per sentence when the first use was the lead sentence. evidence: E11. [decided: review file, 2026-10-25]

C55. The paraphraser's contract now keeps introduced terms out of the lead and defines each in a sentence of its own. [decided: this chunk]

C56. The reviewer's verdict in round 2 rested on the second question of RD-1's readability test, "does each sentence state one claim?", applied to sentences such as "opened on 2026-09-02 and still open on 2026-10-25". evidence: E11. [decided: review file, 2026-10-25]

C57. Two of the three disputed findings were terms the reader's corpus defines that the reviewer's vocabulary list omitted. evidence: E11. [decided: review file, 2026-10-25]

C58. The review skill now requires the reader's vocabulary, pasted or linked, in the reviewer's prompt. [decided: this chunk]

## Relations

R1. C25 depends-on C13 because the block is text the methodology requires verbatim.

R2. C23 depends-on C22 because the failure was observed, not reasoned.

R3. C15 refines C14 because the practice under v1 was right and the rule was wrong.

R4. C31 depends-on C30 because a renderer with no part attribute falls back to the attribute it has.

R5. C34 depends-on C33 because the output shows the gap.

R6. C42 depends-on C41 because the disputed rows name the forms the reviewer misread.

R7. C46 depends-on C45 because the paraphraser needed a rule the IR did not give it and chose by the claim's content.

R8. C55 depends-on C54 because the collision has one cause, the term in the lead.

R9. C58 depends-on C57 because the false findings had one cause, the missing list.

## Evidence

E8. ../methodology/docs/records/portfolio-1.5.0-refresh.review.md, round 1, with the disposition column.

E9. The subagent task notification for the round 1 review: 147,078 ms, 83,813 tokens.

E10. ../methodology/docs/records/portfolio-1.5.0-refresh.md, the render-map comment at its end.

E11. ../methodology/docs/records/portfolio-1.5.0-refresh.review.md, round 2, with the disposition column.

E12. eval/cases/003-live-run-portfolio-refresh-2026-10-25.md, the round table.

E1. scripts/lint.mjs; .claude/settings.json; the pipe-test of the hook on 2026-10-25, which returned a block decision for an IR with violations and additionalContext for prose.

E2. scripts/dispatch.mjs; eval/dispatch-log.md.

E3. .claude/agents/paraphraser.md; .claude/agents/reviewer.md; .claude/skills/reason/SKILL.md; .claude/skills/render/SKILL.md; .claude/skills/review/SKILL.md.

E4. scripts/test.mjs: 20 tests, all passing on 2026-10-25.

E5. eval/cases/002-lint-on-own-documents-2026-10-25.md: the per-check counts before fixes.

E6. eval/cases/002-lint-on-own-documents-2026-10-25.md: the per-check counts after fixes.

E7. ../methodology/docs/records/portfolio-1.5.0-refresh.ir.md and the rendered PR body.

## Asks

A1. The gate: read the live run's IR and its rendering side by side. Depends: C19, C21.

A2. Ratify or strike the three terms T1 to T3.

A3. Decide whether the W-008 block's own semicolons and em-dash headings are a finding to raise upstream, or an accepted exception recorded in the style specification. Depends: C13.

A4. Confirm schema v1.1 (C15, C16).

A5. Decide, for chunk 3's schema work, whether a claim names its W-008 part explicitly or the decided-versus-proposed mapping becomes the rule, and whether an observed status is added beside decided. Depends: C30, C31, C32.

A6. Confirm that relations do not render unless a claim cites them. Depends: C33, C34.

A7. Rule on the bar of RD-1's second readability question: whether "opened on 2026-09-02 and still open on 2026-10-25" is one claim or two for the owner's purposes. Depends: C56.
