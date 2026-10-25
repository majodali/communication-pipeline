# Backlog

<!-- The single source of progress truth (methodology K-003): one
     dependency-ordered register of completed and upcoming work. Rewrite
     checked entries to describe what actually shipped. Update in the
     same commit as the work (W-003). Row shape (P-006): what, when or
     status, pointer. Reasoning lives in the plan. -->

Declared exit: when the IR schema and specifications are adopted into
majodali/methodology, the lints have moved to methodology-tools, and the
roles have moved to project-orchestrator, this repository archives
([plan](plans/pipeline-pilot.md), settled decision 6).

## Completed

- [x] **Bootstrap** — 2026-10-24. Classification at C1 / S0 /
  exploration / none-local, pinned 1.5.0, `methodology` family member;
  Agent bootstrap with the block W-008 (reports map their deliverables) requires; README stating the question;
  [IR schema v0](ir-schema.md); the [plan](plans/pipeline-pilot.md)
  as draft, written IR first
  ([source](plans/pipeline-pilot.ir.md)); evaluation
  [case 001](../eval/cases/001-review-response-2026-10-23.md)
  seeded. Form audit clean; links resolve.

- [x] **Plan active; terms ratified** — 2026-10-24, at the bootstrap
  merge. The five proposed terms became decided; the owner reviews
  each chunk's gate. [Plan](plans/pipeline-pilot.md).

- [x] **Chunk 1 — specifications** — 2026-10-24. [IR schema
  v1](ir-schema.md): referent rule, provenance forms, clusters, fixed
  sections, ten checks from CK-01 (the referent rule) to CK-10 (section
  order), lifecycle. [Reader
  catalog](readers.md): five entries, RD-1 (human owner, in
  conversation) to RD-5 (external reader), each with a readability
  test. [Style specification](style-spec.md): 22 rules,
  SP-01 (one claim per sentence) to SP-22 (supersession markers), with
  checks, readers and sources; harness overrides
  stated. [Branch point](branch-point.md): three dispositions, nine rules from
  BP-01 (lints always run) to BP-09 (short reports deliver as IR),
  provisional thresholds. Added:
  [vocabulary](vocabulary.md) as a custom type, 17 terms, 4
  unratified. Source: [chunk 1 IR](records/chunk-1-specifications.ir.md).
  Gate passed 2026-10-25: all five readers accepted; four terms ratified; vocabulary confirmed; the owner is the reviewer.

- [x] **Chunk 2 — roles in Claude Code** — 2026-10-25. `scripts/lint.mjs`
  runs the ten IR checks and eleven style checks, on demand and as a
  PostToolUse hook that blocks IR violations; `scripts/dispatch.mjs`
  applies the branch point and logs to [eval/dispatch-log.md](../eval/dispatch-log.md);
  paraphraser and reviewer agents under `.claude/agents/`; reason,
  render and review skills under `.claude/skills/`; 20 tests. Turned on
  the pilot's own documents the lint found 43 violations and 130
  warnings ([case 002](../eval/cases/002-lint-on-own-documents-2026-10-25.md));
  after fixes, 0 and 30. Schema v1.1 followed. Live run: the methodology
  Portfolio refresh (methodology PR #44), rendered three times by the
  paraphraser and reviewed three times by the stranger, prose findings
  per thousand words 82.0, 35.2, 25.2, round 3 readable
  ([case 003](../eval/cases/003-live-run-portfolio-refresh-2026-10-25.md)).
  Source: [chunk 2 IR](records/chunk-2-roles.ir.md). Gate: open,
  awaiting the owner's side-by-side reading of the live run's IR and
  rendering.

## Upcoming

- [ ] **Chunk 3 — measurement and ratification** — evaluation corpus,
  round-trip check, term ratification as a W-008 fourth part
  (amendment draft), IR lifecycle rule. Gate: owner adjudicates the
  drafts.
  [Plan](plans/pipeline-pilot.md#chunk-3--measurement-and-ratification).
- [ ] **Chunk 4 — graduation** — amendments, methodology-tools PR,
  project-orchestrator proposal, exit decision. Gate: the three
  destinations accept or decline.
  [Plan](plans/pipeline-pilot.md#chunk-4--graduation).
