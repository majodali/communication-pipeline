# IR: the communication-pipeline pilot plan

Reader: RD-1 (human owner, in conversation).

Purpose: document. The plan for the pilot, as the pipeline's first input.

Status: rendered (prose at pipeline-pilot.md; plan active since the owner's ratification, 2026-10-24).

Source: the methodology conversation of 2026-10-22 to 2026-10-24.

## Terms

T1. Intermediate representation (IR): the structured form a reasoning role writes before prose; defined in docs/ir-schema.md. [decided: owner, 2026-10-24]

T2. Reasoning role: the agent role that does the thinking and writes its output as an IR. [decided: owner, 2026-10-24]

T3. Paraphraser: the agent role that renders an IR into prose for a defined reader. [decided: owner, 2026-10-24]

T4. Reviewer: the agent role that reads an IR or prose and reports a defined set of unwanted patterns and readability for the defined reader. [decided: owner, 2026-10-24]

T5. Stranger: a reviewer with no access to the conversation that produced the text and no content contributions to the project. [decided: owner, 2026-10-23]

T6. Branch point: the step that decides whether an IR is paraphrased, from its purpose and complexity. [decided: owner, 2026-10-24]

T7. Term ratification: the process by which the human owner accepts or strikes each term a deliverable introduces. [decided: owner, 2026-10-24]

T8. Reader catalog: a small set of defined readers that the paraphraser and reviewer consume. [decided: owner, 2026-10-24, ratified at the bootstrap merge]

T9. Style specification: the methodology's prose rules in a form the paraphraser applies rule by rule. [decided: owner, 2026-10-24, ratified at the bootstrap merge]

T10. Round-trip check: re-extracting claims from rendered prose and diffing them against the source IR. [decided: owner, 2026-10-24, ratified at the bootstrap merge]

T11. Evaluation case: one graded pair of text and findings, kept under eval/; defined in eval/README.md. [decided: owner, 2026-10-24, ratified at the bootstrap merge]

T12. Graduation: the move of a pilot artifact to its destination project: the methodology corpus, methodology-tools, or project-orchestrator. [decided: owner, 2026-10-24, ratified at the bootstrap merge]

T13. Convergence: a project is convergent while the cost for its owners to understand, change and verify it grows more slowly than the project. [decided: owner, "Convergence and Divergence", 2026-10-22]

## Problem

C1. Agent-written prose loses cohesion and fidelity over a long session. evidence: E1, E2. [decided: owner, 2026-10-22]

C2. The loss has three mechanisms: compression of several claims into one sentence; referents left unnamed; terms borrowed from context and used as if defined. evidence: E1. [decided: owner, 2026-10-23]

C3. The loss concentrates where reasoning effort is highest, not only where the guidance is far back in the session. evidence: E1. [inferred: R1]

C4. Cached guidance in the Agent bootstrap counters distance from the guidance and does not counter reasoning effort. [inferred: R1]

C5. Rules without checks hold in about ten of fifty documents in one project. evidence: E3. [decided: Allegro census, 2026-10-16]

C6. The requirement: agent communication stays convergent (T13) for its reader at a cost the owner will pay. [decided: owner, 2026-10-24]

C7. The challenge: the agent that reasons is the agent contaminated by the project's vocabulary and register. [decided: owner, 2026-10-23]

C36. A contaminated agent cannot judge its own output as a stranger would. [inferred: R5]

C8. The approach: separate reasoning from rendering and from review; make the reasoning output a checked IR; render by a role that reads only the IR, the style specification and the reader; review by a stranger. [decided: owner, 2026-10-24]

C9. Alternatives displaced: more guidance in the bootstrap (does not counter C3); lints alone (catch about half the defects in E1 and none of the borrowed terms); a single agent instructed to self-review (fails C7). [inferred: R6]

## Settled decisions

C10. The pilot runs in its own repository, majodali/communication-pipeline, at C1. [decided: owner, 2026-10-24]

C11. The methodology repository is the first subject: its deliverables go through the pipeline from this plan onward. [decided: owner, 2026-10-24]

C12. The pilot is built in Claude Code first, with fresh-context subagents as paraphraser and reviewer and hooks as lints. [decided: owner, 2026-10-24]

C37. The pilot moves to project-orchestrator when the roles are stable. [decided: owner, 2026-10-24]

C13. The paraphraser and reviewer run only when the branch point says so, and may run on cheaper models. [decided: owner, 2026-10-24]

C14. Each pipeline stage cites the invariant it protects: IR and term ratification protect provenance; reader catalog and paraphraser protect sound abstraction; branch point, lints, and the owner reviewing the IR protect proportional verification. [decided: owner, 2026-10-24]

C15. The repository has a declared exit: when the schema and specifications are adopted upstream, the lints have moved to methodology-tools, and the roles have moved to project-orchestrator, the repository archives. [decided: owner, 2026-10-24]

C16. Bounds are expressed in chunks and gates, never calendar time. [decided: owner, 2026-08-30]

## Out of scope

C17. Restyling existing documents in any project. The style guide's migration rule covers that. [decided: owner, via Allegro proposal section 7]

C18. Changing W-008's three parts is out of scope. [decided: owner, 2026-10-24]

C38. The pipeline produces W-008's three parts and does not replace them. [decided: owner, 2026-10-24]

C19. A formal (Allegro) model of the IR. The schema is written so a later model can lift it. [decided: owner, 2026-10-24]

## Chunks

C20. Chunk 1, specifications, delivers: IR schema v1 with the referent rule and provenance fields; the reader catalog; the style specification as data, stating that it overrides harness writing guidance; the branch-point criteria. [proposed: this IR]

C31. Chunk 1's gate: the owner reads the schema and strikes or accepts each reader entry. [proposed: this IR]

C21. Chunk 2, roles in Claude Code, delivers three skills: a reasoning skill that works in the IR; a paraphraser skill run as a fresh-context subagent; a reviewer skill run as a fresh-context subagent that reads both IR and prose. [proposed: this IR]

C39. Chunk 2 also delivers lint hooks for the mechanical checks. [proposed: this IR]

C32. Chunk 2 also delivers one live run on a methodology deliverable. [proposed: this IR]

C33. Chunk 2's gate: the owner reviews one IR and its rendering side by side. [proposed: this IR]

C22. Chunk 3, measurement and ratification, delivers: the evaluation corpus, with case 001 seeded at bootstrap; the round-trip check; term ratification as a fourth part of W-008 reports, drafted as an amendment. [proposed: this IR]

C40. Chunk 3 also delivers the lifecycle rule that moves ratified terms and claims into a project's vocabulary and conceptual model. [proposed: this IR]

C34. Chunk 3's gate: the owner adjudicates the amendment drafts. [proposed: this IR]

C23. Chunk 4, graduation, delivers: amendments for the schema, the reader catalog, the style specification and the Protects: header field; a methodology-tools PR for the lints; a project-orchestrator proposal for the role contracts; the exit decision under C15. [proposed: this IR]

C35. Chunk 4's gate: the three destinations accept or decline. [proposed: this IR]

C24. Chunks run under the per-chunk gate, not a pre-ratified sequence, because the shape of chunks 2 to 4 depends on what chunk 1 finds. [proposed: this IR]

## Verification

C25. The pilot succeeds when three measures move across the evaluation corpus: the reviewer's finding count per thousand words falls from case 001's baseline; the unratified-term count per deliverable reaches zero; the owner reports review time per deliverable falling. [proposed: this IR]

C26. The third measure is self-reported and is the weakest. [inferred: R4]

C27. Each chunk's gate is its verification: the owner reviews the named artifact. [proposed: this IR]

## Documents to update

C28. docs/backlog.md in this repository at every chunk (W-003). [decided: methodology W-003]

C29. The methodology repository's Backlog and Portfolio register at bootstrap, to register this project (M-001). [decided: methodology M-001]

C30. docs/ir-schema.md from v0 to v1 at chunk 1. [proposed: this IR]

## Relations

R1. C3 depends-on C1 because the nine defects in E1 occurred in the hardest reasoning of the session while routine PR bodies in that session conformed.

R2. C8 supports C6 because separating the roles removes the contamination in C7.

R3. C24 depends-on C20 because chunk 1's findings set the shape of chunks 2 to 4.

R4. C26 refines C25 because a self-reported measure cannot be checked by anyone but the reporter.

R5. C36 depends-on C7 because contamination is what removes the stranger's distance.

R6. C9 depends-on C3 because more bootstrap guidance does not counter effort; C9 depends-on C36 because a single self-reviewing agent is contaminated; C9 depends-on C4 because lints alone catch no borrowed terms.

## Evidence

E1. eval/cases/001-review-response-2026-10-23.md: a methodology-session response with nine graded defects, each cited to the rule it breaks.

E2. Allegro, docs/plans/documentation-standards-delta.md section 2: seven defects in one plan reviewed by its own maintainer.

E3. Allegro, docs/documentation-census.md section 3: four existing rules hold in about ten of fifty documents.

## Asks

A1. Resolved 2026-10-24: the plan is active; the owner reviews the chunk 1 gate (no stranger named; see chunk 1 IR, C26).
A2. Resolved 2026-10-24: T8 to T12 ratified at the bootstrap merge.
A0. No open asks in this IR; chunk asks live in each chunk's IR under docs/records/.
