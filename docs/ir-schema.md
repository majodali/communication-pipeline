# Intermediate representation: schema

Status: draft (v0, bootstrap). Version 1 is chunk 1 of the
[pilot plan](plans/pipeline-pilot.md).

Reader: an agent in the reasoning role writing an IR document; an agent
in the reviewer role checking one; the human owner reading one instead
of the prose it produced.

## Purpose

An intermediate representation (IR) is the structured form a reasoning
role writes before any prose exists. It holds the terms, claims,
relations, evidence and asks of a piece of communication, each with an
identifier and a provenance status. Prose is rendered from it by the
paraphraser role, or the IR is delivered as is when the branch point
says no paraphrase is needed.

The IR exists to remove three failure modes of prose written directly:
compression of several claims into one sentence, referents left
unnamed, and terms used before they are defined.

## Document form

An IR document is a markdown file named `<subject>.ir.md`. It opens
with four header fields, then holds sections of elements.

| Header field | Value |
|---|---|
| Reader | one entry from the reader catalog (chunk 1), or `human owner, in conversation` until the catalog exists |
| Purpose | one sentence: what the communication is for |
| Status | `draft` · `reviewed` · `rendered` · `delivered` |
| Source | the conversation, document or event that occasioned it |

## Element kinds

Every element has an identifier, a kind, a body, and a provenance
status. Identifiers are a kind letter and a number, unique within the
document: `T` term, `C` claim, `R` relation, `E` evidence, `A` ask.

| Kind | Body | Rule |
|---|---|---|
| Term `T` | a word or phrase, its definition, and who introduced it where | A term is defined once per document. A term used in any claim appears here or links to its definition site elsewhere. |
| Claim `C` | one statement, with every referent named | A claim contains no pronoun or deictic ("this", "that", "the other", "the above") whose antecedent is outside the claim. A claim makes one statement. |
| Relation `R` | `<C-id> <verb> <C-id>` with a reason | Verbs: `supports`, `depends-on`, `contradicts`, `refines`. The reason is a claim identifier or a sentence. |
| Evidence `E` | a pointer (file, line, commit, message date) and what it shows | Evidence is cited by a claim's `evidence:` field, never free-standing. |
| Ask `A` | a decision or action requested of the reader, and what depends on it | Every IR addressed to the human owner lists its asks, or states `A0. No asks`. |

## Provenance status

Every element carries one status in square brackets at the end of its
body:

- `[decided]` — ratified by the human owner, with the date or source.
- `[proposed]` — put forward in this IR; awaits ratification.
- `[inferred]` — derived by the reasoning role from decided or proposed
  elements; the relation that derives it is cited.

A term with status `[proposed]` is an unratified term. The count of
unratified terms per IR is a measurement the pilot records (owner
indicator: unratified vocabulary).

## Mechanical checks (v0)

A reviewer or lint reports each of these as a finding:

1. A claim containing `this`, `that`, `these`, `those`, `it`, `the
   other`, `the above`, `the former`, `the latter` without a named
   antecedent in the same claim.
2. A claim longer than 40 words.
3. A claim containing two independent clauses joined by `and`, `but`,
   `so`, `;` or an em-dash where each clause could stand as a claim.
4. A term used in a claim and not defined in the Terms section or
   linked to a definition site.
5. An element without a provenance status.
6. A relation whose identifiers do not resolve.
7. An IR addressed to the human owner with no `A` element.

## Rendering rule (v0)

The paraphraser renders one claim as one sentence, or a declared
cluster of claims as one paragraph. A cluster is declared in the IR as
`cluster: C3, C4, C5`. The paraphraser introduces no claim, drops no
claim, and names every term on first use as the Terms section defines
it. The round-trip check (chunk 3) re-extracts claims from the prose and
diffs them against the IR.

## Lifecycle

An IR is a record of one communication. Its `[proposed]` terms and
claims are candidates for the project's vocabulary and conceptual
model. The rule that moves them there is chunk 3 of the plan. Until
then, an IR is kept where its prose is kept, or under `docs/records/`
when the prose is a chat message.
