# The communication-pipeline pilot

Status: active

<!-- K-007 plan. Status transitions: draft → active → (superseded by X,
     because Y | closed → Backlog entry). Anything unmarked here is a
     live claim of current intent. Rendered from pipeline-pilot.ir.md;
     the IR is the source, and a disagreement between the two is a
     defect in this file. -->

Outcome under development: a pipeline that keeps agent-written prose
convergent for its reader, proven on the methodology repository's own
deliverables.

## Reader

The human owner, in conversation. A reader outside the conversation
should start with the [IR schema](../ir-schema.md) and the
[README](../../README.md).

## Terms

| Term | Meaning here | Status |
|---|---|---|
| Intermediate representation (IR) | the structured form a reasoning role writes before prose; [schema](../ir-schema.md) | decided, owner 2026-10-24 |
| Reasoning role | the agent role that does the thinking and writes its output as an IR | decided, owner 2026-10-24 |
| Paraphraser | the agent role that renders an IR into prose for a defined reader | decided, owner 2026-10-24 |
| Reviewer | the agent role that reads an IR or prose and reports a defined set of unwanted patterns and readability for the defined reader | decided, owner 2026-10-24 |
| Stranger | a reviewer with no access to the conversation that produced the text and no content contributions to the project | decided, owner 2026-10-23 |
| Branch point | the step that decides whether an IR is paraphrased, from its purpose and complexity | decided, owner 2026-10-24 |
| Term ratification | the process by which the human owner accepts or strikes each term a deliverable introduces | decided, owner 2026-10-24 |
| Reader catalog | a small set of defined readers that the paraphraser and reviewer consume | decided, owner 2026-10-24 |
| Style specification | the methodology's prose rules in a form the paraphraser applies rule by rule | decided, owner 2026-10-24 |
| Round-trip check | re-extracting claims from rendered prose and diffing them against the source IR | decided, owner 2026-10-24 |
| Evaluation case | one graded pair of text and findings, kept under `eval/`; [definition](../../eval/README.md) | decided, owner 2026-10-24 |
| Graduation | the move of a pilot artifact to its destination project: the methodology corpus, methodology-tools, or project-orchestrator | decided, owner 2026-10-24 |
| Convergence | a project is convergent while the cost for its owners to understand, change and verify it grows more slowly than the project | decided, owner, "Convergence and Divergence", 2026-10-22 |

All thirteen terms are ratified. The project [vocabulary](../vocabulary.md) is their register from chunk 1.

## Problem

Requirement. Agent communication stays convergent for its reader at a
cost the owner will pay.

Challenge. Agent-written prose loses cohesion and fidelity over a long
session. The loss has three mechanisms: several claims compressed into
one sentence; referents left unnamed; terms borrowed from context and
used as if defined. The loss concentrates where reasoning effort is
highest, not only where the guidance sits far back in the session
(evidence: [case 001](../../eval/cases/001-review-response-2026-10-23.md),
nine defects in the hardest reasoning of a session whose routine PR
bodies conformed). Cached guidance in the Agent bootstrap counters
distance and does not counter effort. Rules without checks hold in
about ten of fifty documents in one project (Allegro's documentation
census, 2026-10-16). The agent that reasons is the agent contaminated
by the project's vocabulary and register, so it cannot judge its own
output as a stranger would.

Approach. Separate reasoning from rendering and from review. The
reasoning output is a checked IR. A paraphraser that reads only the IR,
the style specification and the reader renders it. A stranger reviews
it. Alternatives displaced: more guidance in the bootstrap, which does
not counter effort; lints alone, which catch about half the defects in
case 001 and none of the borrowed terms; a single agent instructed to
self-review, which fails the challenge.

## Settled decisions

1. The pilot runs in this repository at C1 (owner, 2026-10-24).
2. The methodology repository is the first subject. Its deliverables go
   through the pipeline from this plan onward (owner, 2026-10-24).
3. The pilot is built in Claude Code first. Fresh-context subagents are
   the paraphraser and reviewer; hooks are the lints. It moves to
   project-orchestrator when the roles are stable (owner, 2026-10-24).
4. The paraphraser and reviewer run only when the branch point says so,
   and may run on cheaper models (owner, 2026-10-24).
5. Each pipeline stage cites the invariant it protects. The IR and term
   ratification protect provenance. The reader catalog and the
   paraphraser protect sound abstraction. The branch point, the lints,
   and the owner reviewing the IR protect proportional verification
   (owner, 2026-10-24).
6. The repository has a declared exit. When the schema and
   specifications are adopted upstream, the lints have moved to
   methodology-tools, and the roles have moved to project-orchestrator,
   the repository archives (owner, 2026-10-24).
7. Bounds are expressed in chunks and gates, never calendar time
   (owner, 2026-08-30).

## Out of scope

- Restyling existing documents in any project. The style guide's
  migration rule covers that.
- Changing W-008's three parts. The pipeline produces them; it does not
  replace them.
- A formal (Allegro) model of the IR. The schema is written so a later
  model can lift it.

## Chunks

Chunks run under the per-chunk gate, not a pre-ratified sequence,
because the shape of chunks 2 to 4 depends on what chunk 1 finds.

### Chunk 1 — Specifications

IR schema v1 with the referent rule and provenance fields. The reader
catalog. The style specification as data, stating that it overrides
harness writing guidance. The branch-point criteria. Added in the
chunk: the project vocabulary, because the schema's definition-site
field needs a target ([chunk 1 IR](../records/chunk-1-specifications.ir.md),
C23).
Gate: the owner reads the schema and strikes or accepts each reader
entry.

### Chunk 2 — Roles in Claude Code

A reasoning skill that works in the IR. A paraphraser skill run as a
fresh-context subagent. A reviewer skill run as a fresh-context
subagent that reads both IR and prose. Lint hooks for the mechanical
checks. One live run on a methodology deliverable.
Gate: the owner reviews one IR and its rendering side by side.

### Chunk 3 — Measurement and ratification

The evaluation corpus, with case 001 seeded at bootstrap. The
round-trip check. Term ratification as a fourth part of W-008 reports,
drafted as an amendment. The lifecycle rule that moves ratified terms
and claims into a project's vocabulary and conceptual model.
Gate: the owner adjudicates the amendment drafts.

### Chunk 4 — Graduation

Amendments for the schema, the reader catalog, the style specification
and the `Protects:` header field. A methodology-tools PR for the lints.
A project-orchestrator proposal for the role contracts. The exit
decision under settled decision 6.
Gate: the three destinations accept or decline.

## Verification

The pilot succeeds if, across the evaluation corpus, the reviewer's
finding count per thousand words falls from case 001's baseline, the
unratified-term count per deliverable reaches zero, and the owner
reports review time per deliverable falling. The third measure is
self-reported and is the weakest. Each chunk's gate is its own
verification: the owner reviews the named artifact.

## Documents to update

- `docs/backlog.md` in this repository at every chunk (W-003).
- The methodology repository's Backlog and Portfolio register at
  bootstrap, to register this project (M-001).
- `docs/ir-schema.md` from v0 to v1 at chunk 1.

## Asks

No open asks in this plan. The plan went active and its terms were
ratified on 2026-10-24. The owner reviews each chunk's gate. Each
chunk's asks live in its IR under `docs/records/`.
