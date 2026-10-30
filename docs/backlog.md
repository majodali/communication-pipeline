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
- [x] **Stranger rounds until readable; the first meta-review** —
  2026-10-26, after chunk 5. Owner rulings: rounds until clean, limit
  ten, on every stranger-reviewed text; meta-review here past two
  rounds; the orchestrator roles accepted (project-orchestrator PR
  #7). [Branch point](branch-point.md) v1.3; schema v1.4 (CK-13 to
  CK-16); methodology PR #51 drafted IR first and reviewed in ten
  rounds, the limit reached without a readable verdict; methodology-
  tools PR #19. [Case 005](../eval/cases/005-meta-review-stranger-rounds-2026-10-26.md):
  the meta-review, six process changes recommended. Source:
  [IR](records/stranger-rounds.ir.md). Gate: the owner rules on PR #51
  and on the six changes.

- [x] **Branch point v1.9 from cases 010 and 011** — 2026-10-30.
  The owner adopted case 010's thirteen recommended changes and case
  011's nine, and ratified the terms own mismatch and re-fix.
  In [branch point](branch-point.md) v1.9, an own mismatch counts
  against the verdict unless its quoted sentence carries the claim.
  Step 6 reads the text's counts, and `scripts/signals.mjs` checks it
  each round. The claims check runs before confirmation. The fix rules
  bind edits to reviewed IRs. `scripts/signals.mjs` reads "relied on"
  claims and every count's `Mismatches:` lines, reports a round with no
  claims-check line as unparsed, and checks the `Meta-review:` line; 41
  tests pass. Seven of the changes amend the methodology's
  intermediate-representation specification as its count 5. Source:
  [IR](records/branch-point-v1.9.ir.md). Gate: the stranger rounds,
  then the owner accepts v1.9. Closed 2026-10-30: readable at round
  8; accepted by the owner (PR #22 merged) with A2 ratified; the
  meta-review dispatched.
- [x] **Branch point v1.9's stranger rounds** — 2026-10-30. Eight
  rounds under the v1.9 procedure, readable at round 8, recorded in
  the [review record](records/branch-point-v1.9.review.md). The owner
  ruled C54's unmatched passage not blocking and left residue N1 to
  the ruleset review.
- [x] **Branch point v1.10 from case 012** — 2026-10-30. The owner
  adopted case 012's fifteen changes. In
  [branch point](branch-point.md) v1.10, every restatement mismatch
  counts, and an omission is not a mismatch. The brief lists the
  passages awaiting restatement for a one-sentence restatement each.
  The claims check runs once per fix pass. The next round waits for
  the confirmation and its fixes, and the instance reads both files in
  full at the fix commit. A fix adds no rule the adopted changes do not
  hold. The verdict table and the signal definitions link the
  methodology specification. `scripts/signals.mjs` reads entries
  without `(own)`, drops signal 3 and the wording searches, and reports
  a round with a fix pass and no claims-check line as unparsed; 46
  tests pass. Eleven of the changes amend the methodology's
  intermediate-representation specification as its count 6. Source:
  [IR](records/branch-point-v1.10.ir.md). Gate: the stranger rounds,
  then the owner accepts v1.10.

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
  three destinations accept or decline; exit decision asked. Closed
  2026-10-26: all three accepted; footprint ratified; second reviewer
  round for normative text ruled; evaluation corpus stays; archive
  on hold.
- [x] **Chunk 5 — close-out** — 2026-10-26. Exit conditions recorded
  as met in the [plan](plans/pipeline-pilot.md#chunk-5--close-out),
  README and Classification; readers, style specification, term
  lifecycle and schema marked superseded by their methodology homes
  (K-010); vocabulary definition sites pointed upstream; branch point
  v1.2 (D3 runs two reviewer rounds); methodology close-out amendment
  (second round, Footprint header) and methodology-tools PR #18
  (CK-12). Source: [chunk 5 IR](records/chunk-5-close-out.ir.md).
  Gate: the owner confirms the record. The repository stays open on
  the owner's hold.
- [ ] **Branch point v1.10's stranger rounds** — open. The rounds run
  under the v1.10 procedure and are recorded in the
  [review record](records/branch-point-v1.10.review.md).
- [ ] **Review of the pipeline's ruleset for simplification** — open,
  scheduled after branch point v1.10 lands (owner, 2026-10-30). Asked
  by the owner on 2026-10-30: the ruleset grows a lot and may hold
  opportunities to simplify. Starting point: case 012's changes 1, 5,
  10, 11 and 12, which strike about 450 words from the branch point.
  Candidate scope: the branch point's Rounds steps, the
  meta-review signals, the stranger brief's calibrations, the style
  specification's rules, and branch point v1.9's residue N1 (RD-1 and
  RD-3 named twice; the catalog link twice), which the owner left to
  this review on 2026-10-30. Also in scope: the methodology
  specification's Provenance opening and meta-review subject passage
  drew restatement mismatches in its counts 4, 5 and 6, with structural
  fixes between the counts (count 6, round 1). A meta-review session with no part in the
  rounds performs the review and reports as an
  [evaluation case](../eval/README.md).
- [ ] **Dispatcher: row BP-00** — open. `scripts/dispatch.mjs` does not
  implement BP-00, branch point v1.8's IR-only row, and its header
  comment notes this. Pointer: [the script](../scripts/dispatch.mjs);
  noted in the round 7 fix pass of branch point v1.9.
