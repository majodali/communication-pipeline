# IR: chunk 1, specifications

Reader: RD-1 (human owner, in conversation).
Purpose: report. The design decisions behind chunk 1's four specifications and the vocabulary, and the asks for the chunk 1 gate.
Status: delivered (PR body rendered from this IR, 2026-10-24).
Source: the pilot plan, chunk 1; owner go-ahead 2026-10-24.

## Terms

T1. Disposition: the branch point's output for one IR: lint only, render, or render and review. [proposed: this IR]
T2. Cluster: a declared ordered list of claim identifiers that the paraphraser renders as one paragraph. [proposed: this IR]
T3. Definition site: the one place a term is defined; every other use links to it. [proposed: this IR; from Allegro's proposed P-008]
T4. Readability test: the question a reviewer answers to judge a text readable for one catalog reader. [proposed: this IR]
T5. Reader catalog, Style specification, Round-trip check, Evaluation case, Graduation: as the plan's Terms table defines them. [decided: owner, 2026-10-24, ratified at the bootstrap merge]

## Decisions

### The reader catalog

C1. The catalog holds five readers: the human owner in conversation (RD-1); the human owner returning after a gap (RD-2); a delegating agent (RD-3); a fresh agent session with no conversation history (RD-4); an external reader outside the project and the methodology (RD-5). [proposed]
C2. Each entry states who the reader is, what the reader is assumed to know with a pointer to where it is defined, what the reader is not assumed to know, what the reader needs from the text, the required shape, the identifier rule, and a readability test. [proposed]
C3. RD-2 is separate from RD-1 because the owner reading after a gap lacks the conversation and needs the current state re-established. evidence: E1. [proposed]
C4. RD-4 is the stranger of the plan's Terms table and is the reader for all documentation; it includes an agent in the Auditor or reviewer role. evidence: E2, E3. [proposed]
C5. RD-5 exists in the portfolio today. evidence: E4. [decided: in-real-life Backlog, 2026-08-21]
C6. Each reader's readability test makes "readable for the defined reader" a question with an answer, which Allegro's proposed P-007 gives as the reason a document states its reader. [inferred: R1]

### The style specification

C7. The style specification is a table of rules with identifiers SP-nn, each carrying the rule, its check, the readers it binds, and its source. [proposed]
C8. Every SP rule derives from one of: the methodology style guide, the P- rules, W-008 and its bootstrap block, the owner's feedback of 2026-10-23, or an Allegro proposal not yet in the methodology. The source column names which. [proposed]
C9. Rules sourced from Allegro's proposals bind only RD-4 and RD-5 documentation and are marked pilot-only, so the pilot produces evidence for or against them before the methodology adjudicates them. [proposed]
C10. The specification states that it overrides harness writing guidance where the two conflict, and lists the conflicts it knows: bold on a paragraph's first words; headers in short texts. evidence: E5. [proposed]

### The branch point

C11. The branch point reads the IR header and four counts (claims, proposed terms, asks with a dependency, longest claim) and returns one disposition. [proposed]
C12. Deterministic lints run on every output regardless of disposition. [proposed]
C13. Documentation, meaning any text that will live under docs/ or be merged into a governed document, always gets render and review. [proposed]
C14. Any proposed term forces render and review, because an unratified term needs the reviewer's undefined-term check before the owner sees it. [proposed]
C15. A short report to RD-1 or RD-3 with no proposed terms and no dependent asks is delivered as IR, which is the proportional-verification case: the owner reads the short form. [proposed]
C16. The thresholds (six claims for RD-1, twelve for RD-3) are provisional and are tuned by the evaluation corpus in chunk 3. [proposed]

### Schema v1

C17. The referent rule is stated precisely: a claim names every referent inside itself; a pronoun is legal only when its antecedent is a noun phrase earlier in the same claim; cross-claim references are relations, not pronouns. [proposed]
C18. Provenance takes one of three forms with required fields: decided with who and when or source; proposed with the IR identifier; inferred with the relation that derives it. [proposed]
C19. Clusters are declared as elements so the rendering rule has a unit larger than one claim. [proposed]
C20. Section order is fixed: header, Terms, Claims under any headings, Relations, Evidence, Asks. [proposed]
C21. An IR's mutability follows its prose's designation: the IR of an active document is edited with it; the IR of a delivered report is a record and is not edited. evidence: E6. [proposed]
C22. Terms carry a definition-site field linking to the project vocabulary or to the document that defines them. [proposed]

### The vocabulary

C23. The project gains docs/vocabulary.md in chunk 1, before the plan scheduled it, because schema v1's definition-site field needs a place to point. [proposed]
C24. The vocabulary is declared as a custom document type under Article 7, defined in its own header, convergent with Allegro's docs/book/architecture-vocabulary.md and therefore a standardization candidate under Article 7's convergence clause. [proposed]
C25. The thirteen terms of the plan and the four new terms of this IR are its first entries, each with status and definition site. [proposed]

### Process

C26. The chunk 1 gate reviewer is the owner, by default, since ask A1 of the plan was not answered by name. [inferred: the owner's go-ahead of 2026-10-24 named no reviewer]
C27. The plan moves from draft to active, and its five proposed terms become decided, on the owner's ratification at the bootstrap merge. [decided: owner, 2026-10-24]
C28. The owner's commit d1bc203 to the plan IR added one blank line between elements and no content; the spacing is kept as the owner's formatting choice. [decided: git show d1bc203]

## Relations

R1. C6 depends-on C2 because the readability test is one of the fields C2 requires.
R2. C15 supports C12 because lints make the delivered IR safe without a model stage.
R3. C23 depends-on C22 because the definition-site field has no target without a vocabulary.

## Evidence

E1. This session: a gap from 2026-09-02 to 2026-10-22; the owner's search for "fold" that missed "two-fold" (message of 2026-10-24).
E2. The owner's "Convergence and Divergence" (2026-10-22): agents have no tacit layer and rebuild the theory from the artifacts every session.
E3. Allegro, docs/plans/documentation-standards-delta.md, proposed P-007 and section 4's reviewer test.
E4. in-real-life Backlog, "Register readability pass": the founder found hosted register entries terse and jargon-dense for readers outside the project, 2026-08-21.
E5. eval/cases/001-review-response-2026-10-23.md, finding 8: bold openers from harness guidance against P-003.
E6. docs/plans/pipeline-pilot.md's header comment: a disagreement between the plan and its IR is a defect; an active plan's IR must therefore change with it.

## Asks

A1. The gate: read docs/ir-schema.md v1 and strike or accept each of the five entries in docs/readers.md. Depends: C1 to C6.
A2. Ratify or strike the four terms T1 to T4.
A3. Confirm the vocabulary's early arrival (C23) and its custom-type declaration (C24).
A4. Confirm that you are the chunk 1 gate reviewer (C26), or name a stranger agent.
