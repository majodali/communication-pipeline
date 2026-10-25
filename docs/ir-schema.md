# Intermediate representation: schema

Status: active (v1.1, chunk 2). v1 was chunk 1; v0 was the bootstrap draft of 2026-10-24.

Type: Specification (methodology vocabulary). Defines the custom
document type **Intermediate representation** declared in
[docs/classification.md](classification.md).

Reader: RD-4 (a fresh agent session, [catalog](readers.md#rd-4-fresh-agent-session))
in the reasoning or reviewer role, or the human owner reading an IR
instead of the prose rendered from it.

## Purpose

An intermediate representation (IR) is the structured form the
reasoning role writes before any prose exists. It holds the terms,
claims, relations, evidence and asks of one communication. Every
element carries an identifier and a provenance status. Prose is
rendered from the IR by the paraphraser role when the
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
| Term | `T` | the word or phrase; its meaning in this communication; `defined-at:` a link to its definition site when that is elsewhere | A term is defined once per IR. Every project-specific term used in a claim appears here. A term whose definition site is elsewhere links it and does not restate it. |
| Claim | `C` | one statement | A claim makes one statement and names every referent inside itself (the referent rule below). A claim may carry `evidence: E<n>`. |
| Cluster | `G` | `cluster: C<a>, C<b>, …` with an optional topic claim first | The paraphraser renders a cluster as one paragraph, in the order given. A claim belongs to at most one cluster. |
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
| inferred | `[inferred: R<n>]` | derived by the reasoning role; the relation that derives it is cited |

A term with status `proposed` is an unratified term. The count of
unratified terms per IR is recorded (the owner's unratified-vocabulary
indicator, "Convergence and Divergence", 2026-10-22).

## Mechanical checks

A lint or reviewer reports each of these as a finding. Identifiers are
`CK-nn`.

| Check | Finding when |
|---|---|
| CK-01 | a claim contains a pronoun or determiner phrase from the referent rule with no noun-phrase antecedent earlier in that claim. "This specification restates" names its referent and passes; "This is fine" does not |
| CK-02 | a claim exceeds 40 words |
| CK-03 | a claim joins two clauses that could each stand as a claim, by `and`, `but`, `so`, a semicolon or an em-dash. A semicolon or a final `, and` that follows a colon separates list items and is not a join |
| CK-04 | a project-specific term appears in a claim and is neither a `T` element nor linked to a definition site |
| CK-05 | a term, claim or cluster has no provenance status, or a status without its required fields |
| CK-06 | a relation, cluster, `evidence:` or `Depends:` names an identifier that does not resolve |
| CK-07 | the Reader header is not a catalog identifier, or the Purpose header lacks `report` or `document` |
| CK-08 | an IR for RD-1 or RD-2 (either human-owner reader) has no Asks section |
| CK-09 | a claim appears in two clusters |
| CK-10 | the five sections are absent or out of order |

What counts as a project-specific term for CK-04: any bolded term, any
capitalized multi-word phrase that is not a proper name, and any word
in the project vocabulary.

## Rendering rule

The paraphraser renders one claim as one sentence, or one cluster as
one paragraph in the cluster's order. It introduces no claim and drops
no claim. It names every term on first use as the Terms section or the
definition site defines it. It follows the
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

Ratification of a `proposed` term is recorded in the project
[vocabulary](vocabulary.md), and in any active document that lists the
term. The rule that moves ratified terms and claims into a project's
conceptual model is chunk 3 of the plan.

## Changes

v1.1 (chunk 2, 2026-10-25), found by running the lint on the pilot's
own IRs:

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
