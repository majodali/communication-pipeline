# Style specification

This document lists the writing rules this project's texts follow, and names the check that enforces each rule. The agents that write and review texts read it, and so does the human owner who rules on the project's own trial rules.

Status: active (v2, 2026-11-02). Version 2 applies changes 1, 21 and 28 of [evaluation case](vocabulary.md#def-evaluation-case) 015, the review of this project's rules. Twenty rows point to their methodology rule, which became the authority with methodology PR #48 (the prose rules adopted) on 2026-10-26. Seven rows are this project's own.

Type: Specification (methodology vocabulary). The [paraphraser](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-paraphraser) applies it rule by rule. The [stranger](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-stranger) and the [lint](vocabulary.md#def-lint), the project's deterministic checker, check against it.

Reader: RD-4 (a fresh agent session) in the paraphraser role or as the stranger.

## Precedence

The methodology's [style guide](https://github.com/majodali/methodology/blob/main/docs/style.md), its [P- rules](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md) and [W-008](https://github.com/majodali/methodology/blob/main/docs/rules/working-agreement.md#w-008--reports-map-their-deliverables) (reports map their deliverables) are the authority for the twenty pointer rows. A disagreement between a pointer row and its methodology rule is a defect here.

Where a rule here conflicts with writing guidance from the agent harness, this specification wins. Known conflicts:

| Harness guidance | This specification | Why |
|---|---|---|
| bold the first few words of a bullet or paragraph | SP-07 (bold marks structure) | P-003 (bold marks structure, never emphasis) forbids bold as emphasis; the harness pattern produced finding 8 of [case 001](../eval/cases/001-review-response-2026-10-23.md) |
| no headers in a message under about 500 words | SP-10 (headers state their contents): a header is permitted whenever a reader scanning headers would find a fact faster | P-001 (documents are structured for reference) |

## Rule table

The Check column names `lint` where `scripts/lint.mjs` runs the check, `mtool style` where only methodology-tools runs it, and `judgment` where a reader decides.

### Rows that point to a methodology rule

| Id | Methodology rule | Check |
|---|---|---|
| SP-01 | [P-002](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-002--one-idea-per-sentence) (one idea per sentence): one claim per sentence; calibrated 2026-10-29 ([case 009](../eval/cases/009-meta-review-vision-rounds-2026-10-29.md)): a duty with its actor and its trigger is one claim | judgment; `mtool style` |
| SP-02 | P-002: a sentence over 25 words | lint: warn over 25 |
| SP-03 | P-002: every referent is named | lint |
| SP-04 | [P-008](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-008--terms-are-defined-once-and-linked-at-first-use) (terms are defined once and linked at first use): a term not plain English and in neither vocabulary is defined in the text | judgment; `mtool style` |
| SP-05 | [P-004](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-004--citations-carry-names) (citations carry names): a name or a link at first use (calibrated 2026-10-27, case 007) | lint |
| SP-06 | P-004 (citations carry names), for RD-5 (an external reader): every occurrence | `mtool style` |
| SP-07 | [P-003](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-003--bold-marks-structure-never-emphasis) (bold marks structure, never emphasis) | lint |
| SP-08 | P-002: no rhetorical devices | lint; judgment |
| SP-09 | P-002: no sentence chained by em-dashes or semicolons | lint |
| SP-10 | [P-005](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-005--headers-state-their-contents) (headers state their contents) | lint; judgment |
| SP-11 | [P-001](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-001--documents-are-structured-for-reference) (documents are structured for reference): each section answers its own header | judgment |
| SP-12 | [P-006](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-006--registers-hold-uniform-rows) (registers hold uniform rows) | `mtool style` |
| SP-13 | W-008 (reports map their deliverables): a report to RD-1 (the owner, in conversation) or RD-2 (the owner, returning) carries its four parts in order | lint |
| SP-14 | W-008: a report to RD-3 (a delegating agent) carries status, a map and asks | `mtool style` |
| SP-15 | the methodology's [reader catalog](https://github.com/majodali/methodology/blob/main/docs/style.md#readers), RD-2: a report to the returning owner opens with the current state | judgment |
| SP-16 | [P-007](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-007--documents-state-their-reader) (documents state their reader) | `mtool style` |
| SP-20 | P-001: numbers go in a table or on their own line | lint |
| SP-22 | [K-010](https://github.com/majodali/methodology/blob/main/docs/rules/knowledge.md#k-010--superseded-content-is-never-silently-readable) (superseded content is never silently readable) and K-011 (found contradictions are marked, not routed around) | `mtool style` |
| SP-23 | P-008: a vocabulary term is linked at its first use in the unit | lint |
| SP-24 | P-008: a link to a `#def-` anchor resolves | lint |

### This project's own rows

| Id | Rule | Check | Readers | Source |
|---|---|---|---|---|
| SP-17 | A design document or plan states its problem before its mechanism: requirement, challenge, approach with displaced alternatives. | judgment | RD-4 | Allegro's proposed P-011 (pilot-only) |
| SP-18 | A duty names its actor and its trigger. Calibrated 2026-10-27 (cases 005 and 007) from the wider form, a norm names a test that would show it violated, which drew twelve edge-case findings of which two were rules. Calibrated 2026-10-29 (case 009): a sentence that states a target, or names roadmap work and assigns it to no one, is not a duty. | judgment | RD-4, RD-5 | Allegro's proposed P-009 (pilot-only); case 007 |
| SP-19 | A measurement is preceded by the question it answers and what each outcome would mean. | judgment | RD-4 | Allegro's proposed P-010 (pilot-only) |
| SP-21 | Quoted text from another document is byte-exact and marked as a quotation; it is not restyled. | judgment | all | project-orchestrator proposals, 2026-09-02 |
| SP-25 | Two passages of one text cannot both be followed. | judgment | all | case 007, change 2; the methodology specification's verdict rule |
| SP-26 | A word, phrase or sentence can go without losing a claim, or a claim is stated twice. The finding quotes the words that can go. Calibrated 2026-10-29 (case 009): words that name a referent SP-03 requires are not excess. | judgment | all | case 006, the owner's rule of 2026-10-26 that fixes rephrase or cut before they add |
| SP-27 | <a id="def-plain-purpose-sentence"></a>A document under `docs/`, outside `docs/records/`, and an [evaluation case](vocabulary.md#def-evaluation-case) open with a plain-purpose sentence: at most two sentences, before any other line, saying what the text is for and who reads it, with no identifier, code or link. Each name this project coined carries a short gloss at its first use in the text. A methodology term keeps its link. | lint | all | case 015 change 28 (pilot-only) |

Rules marked pilot-only bind documentation produced by this pipeline, so the pilot yields evidence for or against them. They do not bind any other project.

## What the paraphraser does with this table

For the IR's reader, the [paraphraser](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-paraphraser) applies the rows whose rule binds that reader while rendering. After rendering, the paraphraser runs the [lint](vocabulary.md#def-lint) and fixes what it can before the [stranger](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-stranger) reads the text.
