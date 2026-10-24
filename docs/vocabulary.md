# Vocabulary

Status: active. Register of this project's terms.

Type: **Vocabulary** (Document), a custom document type under
methodology Article 7, declared in
[docs/classification.md](classification.md) and defined here: the
register of a project's terms, one definition site per term, each with
its meaning, its status and where it was introduced. Convergent with
Allegro's `docs/book/architecture-vocabulary.md` and with the
*Vocabulary* type Allegro proposed to the methodology (its
documentation-standards proposal, section 6.2), so it is a
standardization candidate under Article 7's convergence clause.

Reader: RD-4 (a fresh agent session) checking a term; the human owner
ratifying one.

Row shape: term · meaning · status (`decided` with who and when,
`proposed` with where) · definition site when it is not this file.

| Term | Meaning | Status | Definition site |
|---|---|---|---|
| Intermediate representation (IR) | the structured form a reasoning role writes before prose | decided, owner 2026-10-24 | [ir-schema.md](ir-schema.md) |
| Reasoning role | the agent role that does the thinking and writes its output as an IR | decided, owner 2026-10-24 | this file |
| Paraphraser | the agent role that renders an IR into prose for a defined reader | decided, owner 2026-10-24 | this file |
| Reviewer | the agent role that reads an IR or prose and reports a defined set of unwanted patterns and readability for the defined reader | decided, owner 2026-10-24 | this file |
| Stranger | a reviewer with no access to the conversation that produced the text and no content contributions to the project | decided, owner 2026-10-23 | this file |
| Branch point | the step that decides, from an IR's purpose and complexity, which model stages run | decided, owner 2026-10-24 | [branch-point.md](branch-point.md) |
| Term ratification | the process by which the human owner accepts or strikes each term a deliverable introduces | decided, owner 2026-10-24 | this file; process in plan chunk 3 |
| Reader catalog | the set of defined readers the paraphraser and reviewer consume | decided, owner 2026-10-24 | [readers.md](readers.md) |
| Style specification | the methodology's prose rules in a form the paraphraser applies rule by rule | decided, owner 2026-10-24 | [style-spec.md](style-spec.md) |
| Round-trip check | re-extracting claims from rendered prose and diffing them against the source IR | decided, owner 2026-10-24 | plan chunk 3 |
| Evaluation case | one graded pair of text and findings against a stated reader | decided, owner 2026-10-24 | [../eval/README.md](../eval/README.md) |
| Graduation | the move of a pilot artifact to its destination project | decided, owner 2026-10-24 | this file |
| Convergence | a project is convergent while the cost for its owners to understand, change and verify it grows more slowly than the project | decided, owner, "Convergence and Divergence", 2026-10-22 | the owner's writeup |
| Disposition | the branch point's output for one IR: lint only, render, or render and review | proposed, chunk 1 IR | [branch-point.md](branch-point.md) |
| Cluster | a declared ordered list of claim identifiers the paraphraser renders as one paragraph | proposed, chunk 1 IR | [ir-schema.md](ir-schema.md) |
| Definition site | the one place a term is defined; every other use links to it | proposed, chunk 1 IR | this file |
| Readability test | the question a reviewer answers to judge a text readable for one catalog reader | proposed, chunk 1 IR | [readers.md](readers.md) |

Unratified terms at this revision: 4 (the four rows marked proposed).
