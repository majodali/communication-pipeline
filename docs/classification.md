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

Declared exit: this project archives when its three graduation
destinations have each accepted or declined their part (the plan's
settled decision 6). Adopted 2026-10-24 at C1 on the owner's ruling
that a pilot about documentation discipline should not run at the one
tier that carries no documentation duties.

## Deviation register

<!-- Each entry cites the rule it overrides and the rationale
     (Constitution Article 4 stage 2.1). Silent divergence is
     non-compliance. -->

No deviations recorded.

## Custom definitions

<!-- Per-project custom document/content/artifact types (Constitution
     Article 7); every instance of a custom type links its definition
     here. -->

Two custom document types (Article 7), each defined in one place and
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
