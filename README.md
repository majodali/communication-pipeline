# communication-pipeline

A pilot of a claims-first pipeline for agent-written prose. A reasoning
role writes a checked intermediate representation. A paraphraser
renders it for a defined reader. A stranger reviewer reports unwanted
patterns. The human owner ratifies the terms each deliverable
introduces.

## The question

Does a claims-first pipeline with a paraphraser and a stranger reviewer
keep agent prose convergent for its reader, at a cost the owner will
pay?

Convergent means: the cost for the owner to understand, change and
verify the work grows more slowly than the work itself (the owner's
definition, 2026-10-22). The failure this pilot addresses is agent prose
that loses cohesion and fidelity over a long session: several claims
compressed into one sentence, referents left unnamed, and terms borrowed
from context and used as if defined.

## What is here

- [`docs/plans/pipeline-pilot.md`](docs/plans/pipeline-pilot.md) — the
  plan, in four chunks, and its source
  [`pipeline-pilot.ir.md`](docs/plans/pipeline-pilot.ir.md).
- [`docs/ir-schema.md`](docs/ir-schema.md) — the intermediate
  representation's schema.
- [`docs/readers.md`](docs/readers.md),
  [`docs/style-spec.md`](docs/style-spec.md),
  [`docs/branch-point.md`](docs/branch-point.md) — the three
  specifications the roles implement against: who the reader is, how
  prose is written for them, and which stages run.
- [`docs/vocabulary.md`](docs/vocabulary.md) — the project's terms and
  their status.
- [`eval/`](eval/README.md) — the evaluation corpus. Case 001 is the
  response that motivated the pilot, with nine graded defects.
- [`docs/backlog.md`](docs/backlog.md) — what is done and what is next.

## Exit

This repository is a staging area with three destinations. The schema
and specifications become methodology amendments. The lints move to
methodology-tools. The roles move to project-orchestrator. When all
three have happened, the repository archives.

Governed by [majodali/methodology](https://github.com/majodali/methodology)
as declared in [docs/classification.md](docs/classification.md).
