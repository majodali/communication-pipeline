# IR: the communication-pipeline pilot plan

Reader: human owner, in conversation.
Purpose: the plan for the pilot, as the pipeline's first input.
Status: rendered (prose at pipeline-pilot.md, 2026-10-24).
Source: the methodology conversation of 2026-10-22 to 2026-10-24.

## Terms

T1. Intermediate representation (IR): the structured form a reasoning role writes before prose; defined in docs/ir-schema.md. [decided: owner, 2026-10-24]
T2. Reasoning role: the agent role that does the thinking and writes its output as an IR. [decided: owner, 2026-10-24]
T3. Paraphraser: the agent role that renders an IR into prose for a defined reader. [decided: owner, 2026-10-24]
T4. Reviewer: the agent role that reads an IR or prose and reports a defined set of unwanted patterns and readability for the defined reader. [decided: owner, 2026-10-24]
T5. Stranger: a reviewer with no access to the conversation that produced the text and no content contributions to the project. [decided: owner, 2026-10-23]
T6. Branch point: the step that decides whether an IR is paraphrased, from its purpose and complexity. [decided: owner, 2026-10-24]
T7. Term ratification: the process by which the human owner accepts or strikes each term a deliverable introduces. [decided: owner, 2026-10-24]
T8. Reader catalog: a small set of defined readers that the paraphraser and reviewer consume. [proposed: this plan]
T9. Style specification: the methodology's prose rules in a form the paraphraser applies rule by rule. [proposed: this plan]
T10. Round-trip check: re-extracting claims from rendered prose and diffing them against the source IR. [proposed: this plan]
T11. Evaluation case: one graded pair of text and findings, kept under eval/; defined in eval/README.md. [proposed: this plan]
T12. Graduation: the move of a pilot artifact to its destination project: the methodology corpus, methodology-tools, or project-orchestrator. [proposed: this plan]
T13. Convergence: a project is convergent while the cost for its owners to understand, change and verify it grows more slowly than the project. [decided: owner, "Convergence and Divergence", 2026-10-22]

## Problem

C1. Agent-written prose loses cohesion and fidelity over a long session. evidence: E1, E2. [decided: owner, 2026-10-22]
C2. The loss has three mechanisms: compression of several claims into one sentence; referents left unnamed; terms borrowed from context and used as if defined. evidence: E1. [decided: owner, 2026-10-23]
C3. The loss concentrates where reasoning effort is highest, not only where the guidance is far back in the session. evidence: E1. [inferred: R1]
C4. Cached guidance in the Agent bootstrap counters distance from the guidance and does not counter reasoning effort. [inferred: R1]
C5. Rules without checks hold in about ten of fifty documents in one project. evidence: E3. [decided: Allegro census, 2026-10-16]
C6. The requirement: agent communication stays convergent (T13) for its reader at a cost the owner will pay. [decided: owner, 2026-10-24]
C7. The challenge: the agent that reasons is the agent contaminated by the project's vocabulary and register, so it cannot judge its own output as a stranger would. [decided: owner, 2026-10-23]
C8. The approach: separate reasoning from rendering and from review; make the reasoning output a checked IR; render by a role that reads only the IR, the style specification and the reader; review by a stranger. [decided: owner, 2026-10-24]
C9. Alternatives displaced: more guidance in the bootstrap (does not counter C3); lints alone (catch about half the defects in E1 and none of the borrowed terms); a single agent instructed to self-review (fails C7). [inferred: C3, C4, C7]

## Settled decisions

C10. The pilot runs in its own repository, majodali/communication-pipeline, at C1. [decided: owner, 2026-10-24]
C11. The methodology repository is the first subject: its deliverables go through the pipeline from this plan onward. [decided: owner, 2026-10-24]
C12. The pilot is built in Claude Code first, with fresh-context subagents as paraphraser and reviewer and hooks as lints; it moves to project-orchestrator when the roles are stable. [decided: owner, 2026-10-24]
C13. The paraphraser and reviewer run only when the branch point says so, and may run on cheaper models. [decided: owner, 2026-10-24]
C14. Each pipeline stage cites the invariant it protects: IR and term ratification protect provenance; reader catalog and paraphraser protect sound abstraction; branch point, lints, and the owner reviewing the IR protect proportional verification. [decided: owner, 2026-10-24]
C15. The repository has a declared exit: when the schema and specifications are adopted upstream, the lints have moved to methodology-tools, and the roles have moved to project-orchestrator, the repository archives. [decided: owner, 2026-10-24]
C16. Bounds are expressed in chunks and gates, never calendar time. [decided: owner, 2026-08-30]

## Out of scope

C17. Restyling existing documents in any project. The style guide's migration rule covers that. [decided: owner, via Allegro proposal section 7]
C18. Changing W-008's three parts. The pipeline produces them; it does not replace them. [decided]
C19. A formal (Allegro) model of the IR. The schema is written so a later model can lift it. [decided: owner, 2026-10-24]

## Chunks

C20. Chunk 1, specifications: IR schema v1 with the referent rule and provenance fields; the reader catalog; the style specification as data stating that it overrides harness writing guidance; the branch-point criteria. Gate: the owner reads the schema and strikes or accepts each reader entry. [proposed]
C21. Chunk 2, roles in Claude Code: a reasoning skill that works in the IR; a paraphraser skill run as a fresh-context subagent; a reviewer skill run as a fresh-context subagent that reads both IR and prose; lint hooks for the mechanical checks; one live run on a methodology deliverable. Gate: the owner reviews one IR and its rendering side by side. [proposed]
C22. Chunk 3, measurement and ratification: the evaluation corpus with case 001 seeded at bootstrap; the round-trip check; term ratification as a fourth part of W-008 reports, drafted as an amendment; the lifecycle rule that moves ratified terms and claims into a project's vocabulary and conceptual model. Gate: the owner adjudicates the amendment drafts. [proposed]
C23. Chunk 4, graduation: amendments for the schema, the reader catalog, the style specification and the Protects: header field; a methodology-tools PR for the lints; a project-orchestrator proposal for the role contracts; the exit decision under C15. Gate: the three destinations accept or decline. [proposed]
C24. Chunks run under the per-chunk gate, not a pre-ratified sequence, because the shape of chunks 2 to 4 depends on what chunk 1 finds. [proposed]

## Verification

C25. The pilot succeeds if, across the evaluation corpus, the reviewer's finding count per thousand words falls from case 001's baseline, the unratified-term count per deliverable reaches zero, and the owner reports review time per deliverable falling. [proposed]
C26. The third measure is self-reported and is the weakest. [inferred: C25]
C27. Each chunk's gate is its verification: the owner reviews the named artifact. [proposed]

## Documents to update

C28. docs/backlog.md in this repository at every chunk (W-003). [decided: methodology W-003]
C29. The methodology repository's Backlog and Portfolio register at bootstrap, to register this project (M-001). [decided: methodology M-001]
C30. docs/ir-schema.md from v0 to v1 at chunk 1. [proposed]

## Relations

R1. C3 depends-on E1 because the nine defects in E1 occurred in the hardest reasoning of the session while routine PR bodies in the same session conformed.
R2. C8 supports C6 because separating the roles removes the contamination in C7.
R3. C24 depends-on C20 because chunk 1's findings set the shape of chunks 2 to 4.

## Evidence

E1. eval/cases/001-review-response-2026-10-23.md: a methodology-session response with nine graded defects, each cited to the rule it breaks.
E2. Allegro, docs/plans/documentation-standards-delta.md section 2: seven defects in one plan reviewed by its own maintainer.
E3. Allegro, docs/documentation-census.md section 3: four existing rules hold in about ten of fifty documents.

## Asks

A1. Approve the plan as draft and name the chunk 1 gate reviewer: you, or a stranger agent in the reviewer role. Depends: C20.
A2. Ratify or strike the proposed terms T8 to T12.
