# Intermediate representation: schema

Status: active (v1.4, 2026-10-26: CK-13 and CK-14 from the methodology's rounds-until-readable amendment). v1.3 was chunk 4; v1.2 was chunk 3; v1.1 was chunk 2; v1 was chunk 1; v0 was the bootstrap draft of 2026-10-24. From chunk 4 the methodology's [intermediate-representation.md](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md) is proposed as the specification's home; this file is amended until that PR merges.

> Superseded by methodology PR #49 (W-009 and the
> [intermediate-representation specification](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md))
> on 2026-10-26 for everything normative. This file stays as the
> pilot's record, the schema's change history, and the lint's
> reference until methodology-tools runs every check.

Type: Specification (methodology vocabulary). Defines the custom
document type **Intermediate representation** declared in
[docs/classification.md](classification.md).

Reader: RD-4 (a fresh agent session, [catalog](readers.md#rd-4-fresh-agent-session))
in the reasoning or [reviewer](vocabulary.md#def-reviewer) role, or the human owner reading an IR
instead of the prose rendered from it.

## Purpose

An [intermediate representation](vocabulary.md#def-intermediate-representation) (IR) is the structured form the
[reasoning role](vocabulary.md#def-reasoning-role) writes before any prose exists. It holds the terms,
claims, relations, evidence and asks of one communication. Every
element carries an identifier and a provenance status. Prose is
rendered from the IR by the [paraphraser](vocabulary.md#def-paraphraser) role when the
[branch point](branch-point.md) says so. Otherwise the IR is delivered
as it stands.

The IR removes three failure modes of prose written directly:
several claims compressed into one sentence; referents left unnamed;
terms borrowed from context and used as if defined
([case 001](../eval/cases/001-review-response-2026-10-23.md)).

## Document form

An IR is a markdown file named `<subject>.ir.md`. It sits beside the
prose it produces, or under `docs/records/` when the prose is a chat
message or a PR body. It opens with four header fields and then holds
five sections in a fixed order: Terms, Claims, Relations, Evidence,
Asks. The Claims section may use any sub-headings.

| Header field | Value |
|---|---|
| Reader | one entry from the [reader catalog](readers.md), by identifier |
| Purpose | `report` or `document`, then one sentence saying what the communication is for |
| Status | `draft` · `reviewed` · `rendered` · `delivered` |
| Source | the conversation, document or event that occasioned it |
| Footprint | optional (v1.3): the files or directories the work is expected to touch, separated by semicolons; a directory ends in `/` |

A `report` is read by someone who shares the conversation: RD-1 (the
human owner in conversation), RD-2 (the human owner returning) or RD-3
(a delegating agent). A `document` is read by someone who does not,
RD-4 (a fresh agent session) or RD-5 (an external reader), or will live
under `docs/`.

## Element kinds

Every element has an identifier and a body. Terms, claims and clusters
also carry a provenance status. Relations, evidence and asks do not
(v1.1, below). Identifiers are a kind letter and a number, unique
within the document. A split claim takes a new number, never a suffix:
`C29`, not `C1a`.

| Kind | Letter | Body | Rule |
|---|---|---|---|
| Term | `T` | the word or phrase; its meaning in this communication; `defined-at:` a link to its [definition site](vocabulary.md#def-definition-site) when one exists | A term is defined once per IR. Every project-specific term used in a claim appears here. A term with a definition site links it and does not restate it; the rendering links that site at first use. A term without one is proposed, rendered as an inline definition, and listed for ratification ([term lifecycle](term-lifecycle.md)). |
| Claim | `C` | one statement | A claim makes one statement and names every referent inside itself (the referent rule below). A claim may carry `evidence: E<n>` and, for a report to a human-owner reader, `part: covered` or `part: changed`. Without a part, a decided claim renders under *What is already covered* and a proposed claim under *What changed*. |
| [Cluster](vocabulary.md#def-cluster) | `G` | `cluster: C<a>, C<b>, …` with an optional topic claim first | The [paraphraser](vocabulary.md#def-paraphraser) renders a cluster as one paragraph, in the order given. A claim belongs to at most one cluster. |
| Relation | `R` | `C<a> <verb> C<b> because <reason>` | Verbs: `supports`, `depends-on`, `contradicts`, `refines`. The reason is one sentence or a claim identifier. Cross-claim references are relations, never pronouns in a claim. |
| Evidence | `E` | a pointer (file and line, commit, message date, URL) and what it shows | Evidence is cited by a claim's `evidence:` field, never free-standing. |
| Ask | `A` | a decision or action requested of the reader; `Depends:` the claims or asks it rests on | Every IR for RD-1 (the human owner in conversation) or RD-2 (the human owner returning) has an Asks section, holding asks or the single line `A0. No asks.` |

### The referent rule

A referent is anything a claim refers to: a document, a project, a
rule, a person, a role, an earlier claim's subject. A claim names each
referent inside itself. A pronoun or determiner phrase (`it`, `this`,
`that`, `these`, `those`, `the other`, `the above`, `the former`, `the
latter`, `the same`) is legal only when its antecedent is a noun phrase
earlier in that claim. A claim that needs an earlier claim refers
to it by identifier inside a relation, or restates the referent by
name.

### Provenance

Each term, claim and cluster ends with one status in square brackets.
Relations, evidence and asks carry none: a relation is the reasoning
role's inference by definition, evidence is a pointer, and an ask is a
request.

| Status | Form | Meaning |
|---|---|---|
| decided | `[decided: <who>, <date>]` or `[decided: <source>]` | ratified by the human owner, or quoted from a governed document |
| proposed | `[proposed: <IR id or "this IR">]` | put forward here; awaits ratification |
| inferred | `[inferred: R<n>]` | derived by the [reasoning role](vocabulary.md#def-reasoning-role); the relation that derives it is cited |

A term with status `proposed` is an unratified term. The count of
unratified terms per IR is recorded (the owner's unratified-vocabulary
indicator, "[Convergence](vocabulary.md#def-convergence) and Divergence", 2026-10-22).

## Mechanical checks

A [lint](vocabulary.md#def-lint) or [reviewer](vocabulary.md#def-reviewer) reports each of these as a finding. Identifiers are
`CK-nn`.

| Check | Finding when |
|---|---|
| CK-01 | a claim contains a pronoun or determiner phrase from the referent rule with no noun-phrase antecedent earlier in that claim. "This specification restates" names its referent and passes; "This is fine" does not |
| CK-02 | a claim exceeds 40 words |
| CK-03 | a claim joins two clauses that could each stand as a claim, by `and`, `but`, `so`, a semicolon or an em-dash. A semicolon or a final `, and` that follows a colon separates list items and is not a join |
| CK-04 | a project-specific term appears in a claim and is neither a `T` element nor linked to a [definition site](vocabulary.md#def-definition-site) |
| CK-05 | a term, claim or [cluster](vocabulary.md#def-cluster) has no provenance status, or a status without its required fields |
| CK-06 | a relation, cluster, `evidence:` or `Depends:` names an identifier that does not resolve |
| CK-07 | the Reader header is not a catalog identifier, or the Purpose header lacks `report` or `document` |
| CK-08 | an IR for RD-1 or RD-2 (either human-owner reader) has no Asks section |
| CK-09 | a claim appears in two clusters |
| CK-10 | the five sections are absent or out of order |
| CK-11 | a term's `defined-at:` target does not resolve |
| CK-12 | two elements carry the same identifier (v1.3) |
| CK-13 | two `T` elements name one term (v1.4) |
| CK-14 | the Status records a review and no `<subject>.review.md` with a verdict sits beside the IR (v1.4) |

What counts as a project-specific term for CK-04: any bolded term, any
capitalized multi-word phrase that is not a proper name, and any word
in the project vocabulary.

## Rendering rule

The [paraphraser](vocabulary.md#def-paraphraser) renders one claim as one sentence, or one [cluster](vocabulary.md#def-cluster) as
one paragraph in the cluster's order. It introduces no new claim and
drops no claim. It may add [connective prose](vocabulary.md#def-connective-prose): sentences that assert
nothing a model would hold and exist to join claims for the reader.
Relations and evidence are not rendered as sentences. A term with a
[definition site](vocabulary.md#def-definition-site) is linked at its first use in the unit the [term
lifecycle](term-lifecycle.md) names, and bare after. A term the IR
introduces is defined in a sentence of its own before its first use
and listed under *Terms introduced*. For RD-5 a link becomes an inline
gloss. For the human-owner readers, a claim renders under the part its
`part:` field names. Without one, decided renders under *What is
already covered* and proposed under *What changed*. Normative text (a
rule, a specification) is rendered by the [reasoning role](vocabulary.md#def-reasoning-role), not the
paraphraser, and the [reviewer](vocabulary.md#def-reviewer) still reads it ([branch point](vocabulary.md#def-branch-point), D3). It follows the
[style specification](style-spec.md) for the IR's reader. It states an
empty Asks section as "No asks." The
[round-trip check](plans/pipeline-pilot.md#chunk-3--measurement-and-ratification)
(chunk 3) re-extracts claims from the prose and diffs them against
the IR.

## Lifecycle

An IR's mutability follows its prose's designation. The IR of an
active document (a plan, a specification) is edited whenever the
document is, and a disagreement between the two is a defect in the
prose. The IR of a delivered report (a chat message, a PR body) is a
record: its Status becomes `delivered` and it is not edited after.

Ratification of a `proposed` term adds a row with an anchor to the
project [vocabulary](vocabulary.md), which becomes the term's
[definition site](vocabulary.md#def-definition-site). The [term lifecycle](term-lifecycle.md) has the
steps. Moving ratified terms and decided claims into a project's
conceptual model is chunk 4's [graduation](vocabulary.md#def-graduation) work.

## Changes

v1.4 (2026-10-26): CK-13 (term uniqueness) and CK-14 (a reviewed IR
has its review record with a verdict), from the methodology's
rounds-until-readable amendment.

v1.3 (chunk 4, 2026-10-26):

- CK-12 checks identifier uniqueness, which v1 stated and no check
  tested (found by the stranger review of the methodology's adopted
  specification).
- An optional `Footprint` header declares the files the work is
  expected to touch. `scripts/footprint.mjs` compares the declaration
  with the branch's changed files and reports surprises (changed, not
  declared) and misses (declared, unchanged). The counts are the
  mechanical reading of the owner's prediction-surprise indicator.

v1.2 (chunk 3, 2026-10-25), from the owner's rulings after the live
run:

- The [paraphraser](vocabulary.md#def-paraphraser) may add [connective prose](vocabulary.md#def-connective-prose). It may not add a claim.
- A claim may name its part of W-008 (reports map their deliverables)
  with `part:`. The provenance mapping is the default.
- A term with a [definition site](vocabulary.md#def-definition-site) renders as a link at first use. The
  first-use unit and the RD-5 gloss are in the term lifecycle.
- CK-11 checks `defined-at:` targets.
- Normative text takes [disposition](vocabulary.md#def-disposition) D3: reviewed, not paraphrased.


v1.1 (chunk 2, 2026-10-25), found by running the [lint](vocabulary.md#def-lint) on the pilot's
own IRs and by the first [stranger](vocabulary.md#def-stranger) review:

- Relations and evidence are not rendered. The round 1 paraphraser
  rendered both relations as sentences.
- An introduced term is defined at first use as well as listed. The
  round 1 prose used "migration round" in its title and defined it in
  its last section.
- The decided-to-covered and proposed-to-changed mapping is written
  down, since the paraphraser had inferred it. Whether a claim should
  instead name its part is chunk 3's question.

- Provenance is required on terms, claims and clusters only. v1 said
  every element, and no IR written under v1 had put a status on a
  relation, an evidence pointer or an ask. The practice was right and
  the rule was wrong.
- A split claim takes a new number, never a suffix.
- CK-01 passes a sentence-initial determiner that names its noun.
- CK-03 treats a semicolon or a closing `, and` after a colon as a
  list, not a join.

v1 (chunk 1):

- The referent rule is stated with its antecedent condition. v0 listed
  pronouns only.
- Provenance has required fields per status.
- Clusters are an element kind (`G`). v0 mentioned them in the
  rendering rule only.
- Section order is fixed. The Purpose header takes `report` or
  `document`. The Reader header takes a catalog identifier.
- Terms carry `defined-at:`.
- Checks CK-07 to CK-10 are new. CK-01 to CK-06 are v0's checks 1 to 6
  restated.
- The lifecycle rule ties an IR's mutability to its prose.
