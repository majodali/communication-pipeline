# Case 003: the first live run, the Portfolio refresh, 2026-10-25

Instance of the [Evaluation case](../README.md) type.

| Field | Value |
|---|---|
| Case | 003 |
| Source text date | 2026-10-25 |
| Reader addressed | RD-1 (human owner, in conversation) |
| Origin | the methodology repository's Portfolio register refresh after the 1.5.0 migration round, the pipeline's first live run on a methodology deliverable |
| Through the pipeline | yes: IR by the reasoning role; paraphraser on the sonnet model, fresh context; reviewer on the haiku model, fresh context; three rounds |
| Graded by | the reviewer role, with dispositions by the reasoning role, in the methodology repository at docs/records/portfolio-1.5.0-refresh.review.md |

## Source text

The IR, its three renderings and the reviews live in the methodology repository on branch `portfolio-1.5.0-refresh`, under `docs/records/`: `portfolio-1.5.0-refresh.ir.md`, `portfolio-1.5.0-refresh.md` and `portfolio-1.5.0-refresh.review.md`. Each round's text is the commit before the next.

## Findings

| Round | Prose words | Findings (prose, IR) | Prose findings per thousand words | Accepted, disputed | Verdict | Reviewer seconds |
|---|---|---|---|---|---|---|
| 1 | 257 | 38 (21, 17) | 82.0 | 27, 11 | not readable | 147 |
| 2 | 284 | 22 (10, 12) | 35.2 | 19, 3 | not readable | 155 |
| 3 | | | | | | |

Defects a lint cannot see that the reviewer caught: a Source line claiming merges the evidence did not show; a sentence contradicting itself ("the nine rows read 1.5.0, except one"); a Purpose line contradicting an ask; a process statement filed as a settled fact; claims whose cited evidence showed a weaker fact than the claim stated.

Reviewer misreads that changed its instructions: the relation form; two-step asks; the lead sentence before the Asks heading; terms the reader's corpus defines but the prompt's vocabulary list omitted.

Paraphraser behaviours that changed the specifications: rendering relations as sentences; defining an introduced term in the lead sentence; sorting claims into W-008 parts by provenance status, then overriding that sort for two claims whose content was a register edit.

## Measures

| Measure | Value |
|---|---|
| Rounds | 3 |
| IR revisions | 3 |
| Paraphraser cost | about 50 thousand tokens and 20 to 45 seconds per rendering |
| Reviewer cost | about 85 thousand tokens and 150 seconds per round |
| Unratified terms used | 1 (migration round), listed and asked |

## Outcome

Filled when round 3 reports. Three specification changes and two reviewer-instruction changes landed in chunk 2 from rounds 1 and 2. One question for the owner: the bar of RD-1's second readability question.
