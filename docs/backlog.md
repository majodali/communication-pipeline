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
  Agent bootstrap with the W-008 block; README stating the question;
  [IR schema v0](ir-schema.md); the [plan](plans/pipeline-pilot.md)
  as draft, written IR first
  ([source](plans/pipeline-pilot.ir.md)); evaluation
  [case 001](../eval/cases/001-review-response-2026-10-23.md)
  seeded. Form audit clean; links resolve.

## Upcoming

- [ ] **Chunk 1 — specifications** — IR schema v1, reader catalog,
  style specification as data, branch-point criteria. Gate: owner
  reads the schema and rules on each reader entry.
  [Plan](plans/pipeline-pilot.md#chunk-1--specifications).
- [ ] **Chunk 2 — roles in Claude Code** — reasoning, paraphraser and
  reviewer skills; lint hooks; one live run on a methodology
  deliverable. Gate: owner reviews one IR and its rendering side by
  side. [Plan](plans/pipeline-pilot.md#chunk-2--roles-in-claude-code).
- [ ] **Chunk 3 — measurement and ratification** — evaluation corpus,
  round-trip check, term ratification as a W-008 fourth part
  (amendment draft), IR lifecycle rule. Gate: owner adjudicates the
  drafts.
  [Plan](plans/pipeline-pilot.md#chunk-3--measurement-and-ratification).
- [ ] **Chunk 4 — graduation** — amendments, methodology-tools PR,
  project-orchestrator proposal, exit decision. Gate: the three
  destinations accept or decline.
  [Plan](plans/pipeline-pilot.md#chunk-4--graduation).
