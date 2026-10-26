# Classification

<!-- The binding declaration (methodology vocabulary: Classification).
     Mandatory fields: C-tier; at C1+ also the pinned methodology version.
     Optional fields default per the methodology vocabulary's omission
     defaults — the sole authoritative location for them: S-level S0,
     type exploration, target none/local, no Workflow (deployed = false),
     empty Deviation register and Custom definitions section. Omitting a
     field declares its default, subject to the declaration-accuracy MUST
     (Constitution Article 4). -->

- **C-tier**: C1
- **Pinned methodology version**: 1.5.0 (compliance target)
- **S-level**: S0
- **Type**: exploration
- **Target**: none/local
- **Workflow**: none declared (⇒ `deployed` is false)
- **Family**: methodology (member) — lead:
  [majodali/methodology](https://github.com/majodali/methodology)
  (owner ruling 2026-08-24: process projects join the `methodology`
  family by default; reciprocated in the lead's Portfolio Families
  section)

Declared exit: this project archives when its three [graduation](vocabulary.md#def-graduation)
conditions are met and the owner lifts the hold placed at the chunk 4
gate (2026-10-26): the conditions were met that day, and the
repository stays open, with its evaluation corpus, until the process
works well in all projects.

## Deviation register

<!-- Each entry cites the rule it overrides and the rationale
     (Constitution Article 4 stage 2.1). Silent divergence is
     non-compliance. -->

No deviations recorded.

## Custom definitions

<!-- Per-project custom document/content/artifact types (Constitution
     Article 7); every instance of a custom type links its definition
     here. -->

Three custom document types (Article 7), each defined in one place and
linked from every instance:

- **Intermediate representation** (Document) — a `<name>.ir.md` file
  holding the terms, claims, relations, evidence and asks of one
  communication, each with an identifier and a provenance status;
  defined in [docs/ir-schema.md](ir-schema.md). Instances:
  [docs/plans/pipeline-pilot.ir.md](plans/pipeline-pilot.ir.md).
- **Evaluation case** (Document) — one graded pair of a text and its
  findings against a stated reader; defined in
  [eval/README.md](../eval/README.md). Instances: the files under
  `eval/cases/`.
- **Vocabulary** (Document) — the register of a project's terms, one
  [definition site](vocabulary.md#def-definition-site) per term, with meaning, status and origin; defined in
  the header of [docs/vocabulary.md](vocabulary.md), its sole
  instance. Convergent with Allegro's
  `docs/book/architecture-vocabulary.md` and with the Vocabulary type
  Allegro proposed upstream, so a standardization candidate (Article
  7, convergent custom definitions).
