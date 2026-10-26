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
  conversation) to RD-5 (external reader), each with a [readability
  test](vocabulary.md#def-readability-test). [Style specification](style-spec.md): 22 rules,
  SP-01 (one claim per sentence) to SP-22 (supersession markers), with
  checks, readers and sources; harness overrides
  stated. [Branch point](branch-point.md): three dispositions, nine rules from
  BP-01 (lints always run) to BP-09 (short reports deliver as IR),
  provisional thresholds. Added:
  [vocabulary](vocabulary.md) as a custom type, 17 terms, 4
  unratified. Source: [chunk 1 IR](records/chunk-1-specifications.ir.md).
  Gate passed 2026-10-25: all five readers accepted; four terms ratified; vocabulary confirmed; the owner is the [reviewer](vocabulary.md#def-reviewer).

- [x] **Chunk 2 — roles in Claude Code** — 2026-10-25. `scripts/lint.mjs`
  runs the ten IR checks and eleven style checks, on demand and as a
  PostToolUse hook that blocks IR violations; `scripts/dispatch.mjs`
  applies the [branch point](vocabulary.md#def-branch-point) and logs to [eval/dispatch-log.md](../eval/dispatch-log.md);
  [paraphraser](vocabulary.md#def-paraphraser) and reviewer agents under `.claude/agents/`; reason,
  render and review skills under `.claude/skills/`; 20 tests. Turned on
  the pilot's own documents the [lint](vocabulary.md#def-lint) found 43 violations and 130
  warnings ([case 002](../eval/cases/002-lint-on-own-documents-2026-10-25.md));
  after fixes, 0 and 30. Schema v1.1 followed. Live run: the methodology
  Portfolio refresh (methodology PR #44), rendered three times by the
  paraphraser and reviewed three times by the [stranger](vocabulary.md#def-stranger), prose findings
  per thousand words 82.0, 35.2, 25.2, round 3 readable
  ([case 003](../eval/cases/003-live-run-portfolio-refresh-2026-10-25.md)).
  Source: [chunk 2 IR](records/chunk-2-roles.ir.md). Gate: open,
  awaiting the owner's side-by-side reading of the live run's IR and
  rendering.

- [x] **Chunk 3 — measurement and ratification** — 2026-10-25.
  [Term lifecycle](term-lifecycle.md): handling by definition site;
  first-use unit per reader; RD-5 glosses; anchors `def-<slug>` on
  every vocabulary row. `scripts/link-terms.mjs` wrote 146 first-use
  links across the pilot; warnings fell from 226 to 83. Lint gained
  CK-11, SP-23, SP-24 and the unratified-term count.
  `scripts/roundtrip.mjs`: the mechanical half of the round-trip check;
  on the live run it found one claim unrendered. Schema v1.2:
  connective prose, optional `part:`, D3 for normative text. Scope
  narrowed per the owner: reports to RD-1 or RD-3 need an IR only for
  a term, a decision or a register fact; review on request. Reviewer
  bar: terms absent from both vocabularies; claims separately
  decidable. methodology-tools PR #16: explicit anchors resolve. W-008
  amendment drafted IR first as methodology PR #46 (stranger review:
  36 findings, 10 fixed) and vocabulary anchors as methodology PR #45;
  methodology PR #44 revised and re-rendered after the migration round
  closed. Source: [chunk 3 IR](records/chunk-3-measurement.ir.md).
  Gate: open, the owner adjudicates the two methodology PRs.

## Upcoming

- [x] **Chunk 4 — [graduation](vocabulary.md#def-graduation)** — 2026-10-26. Three stacked
  methodology PRs (#47 Protects: field; #48 P-007, P-008, reader
  catalog, mechanical checks; #49 W-009 and the IR specification),
  each IR first with a stranger review of the rule text;
  methodology-tools PR #17 (`mtool style`, `mtool ir check`, W-008
  block comparison; line-for-line parity with scripts/lint.mjs);
  project-orchestrator PR #6 (two roles, an IR line in the task
  result, the routing rule). Schema v1.3: Footprint header, CK-12.
  [Case 004](../eval/cases/004-normative-text-reviews-2026-10-26.md):
  22.1 findings per thousand words on normative text. Source:
  [chunk 4 IR](records/chunk-4-graduation.ir.md). Gate: open, the
  three destinations accept or decline; exit decision asked.
