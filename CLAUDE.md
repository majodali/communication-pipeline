# CLAUDE.md

## Methodology — binding

This project follows majodali/methodology v1.5.0 as declared in
docs/classification.md. That file strictly defines this project's
document lifecycles and workflows. Read it before any work; nothing
in this file or under .claude/ overrides it.

Classification: C1 / S0 / exploration / none-local
Deviations: none

## Reporting and writing — cached from W-008; do not edit here

Reports to the human owner carry three parts, in this order:

1. **Asks** — the decisions and actions requested of the reader.
2. **What is already covered** — the parts of the deliverable that
   encode decisions the conversation already settled.
3. **What changed** — the parts that are new, each with a named
   pointer into the deliverable and what to review there.

State an empty part; never drop it: "No asks", "We already covered
everything in the document", "The content is all new".

Lead with the outcome or the decision needed, never with the process
that produced it. Write short, direct sentences, one idea each. Cut
clauses that add tone but not content: dramatic accumulation,
aphorism, suspense. Name every identifier you cite.

Authority: majodali/methodology W-008 (reports map their
deliverables), the P- rules, and its style guide. This block is a
cache — amend it upstream, never here.

## What this project is

A pilot of a claims-first pipeline for agent prose: reasoning role,
paraphraser, stranger reviewer, term ratification. The methodology
repository is its first subject. See README.md for the question.

## Conventions

- Every deliverable here is written IR first. The IR file sits beside
  the prose as `<name>.ir.md` and is the source; see docs/ir-schema.md.
- Terms a deliverable introduces are listed with provenance status and
  await the owner's ratification. Do not reuse a term from context
  without checking it is defined.
- Chunks run under the per-chunk gate (methodology W-001). Summarize,
  stop, wait.

## Pointers

- docs/classification.md — the binding declaration
- docs/backlog.md — what is done and what is next
- docs/plans/pipeline-pilot.md — the plan; pipeline-pilot.ir.md is its source
- docs/ir-schema.md — the IR schema
- eval/README.md — the evaluation corpus and its case format
