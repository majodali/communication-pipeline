# Term lifecycle

Status: active (v1, chunk 3).

> Superseded by methodology PR #48 (P-008, terms are defined once and
> linked at first use) on 2026-10-26; the rule's normative home is
> [P-008](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md#p-008--terms-are-defined-once-and-linked-at-first-use).
> This file stays as the pilot's record and the linker's reference.

Type: Specification (methodology vocabulary). The [paraphraser](vocabulary.md#def-paraphraser), the
[reviewer](vocabulary.md#def-reviewer) and the [lint](vocabulary.md#def-lint) implement against it. The specification is the
lifecycle rule the pilot plan's chunk 3 promised: how a term moves
from first use to a [definition site](vocabulary.md#def-definition-site), and how documents refer to it
after.

Reader: RD-4 (a fresh agent session) writing or rendering a document;
the human owner ratifying a term.

## The rule in one table

Handling follows where the term's [definition site](vocabulary.md#def-definition-site) is. Frequency of use
needs no separate rule: a term used often is one that reached a
vocabulary early.

| Where the term is defined | On first use | After first use | Under *Terms introduced* |
|---|---|---|---|
| the methodology vocabulary | link to its anchor | bare | not listed |
| the project vocabulary | link to its anchor | bare | not listed |
| nowhere yet (status proposed) | one defining sentence | bare | listed, with status proposed |

For RD-5 (the external reader), a link is replaced by an inline gloss,
because that reader may have no repository access.

## The first-use unit

| Text | Unit | Why |
|---|---|---|
| a report (reader RD-1, RD-2 or RD-3) | the document | read once, linearly |
| a reference document (reader RD-4 or RD-5) | the section | read by lookup; P-001 (documents are structured for reference) says each section stands without the text above it |

## Definition sites and anchors

A [definition site](vocabulary.md#def-definition-site) is one row of a vocabulary, or the heading of a
document that defines the term. The site carries a stable anchor of
the form `<a id="def-<slug>"></a>`. The slug is the term in lower case
with hyphens. A link to a term is a link to that anchor. The anchor
form is Allegro's, from its documentation-standards proposal, section
6.5, so the two projects' lints agree.

The pilot's vocabulary carries its anchors from this chunk. The
methodology vocabulary gains them by an editorial change in its own
PR, since adding an anchor changes no obligation.

## Ratification

1. A term first appears in an IR as a `T` element with status
   proposed and no `defined-at:`.
2. The rendering defines it inline at first use and lists it under
   *Terms introduced*. The report's asks include its ratification.
3. The owner ratifies or strikes it at the gate.
4. Ratification adds a row to the project vocabulary with an anchor
   and the status `decided`, who and when. The row is the [definition
   site](vocabulary.md#def-definition-site) from then on.
5. Later IRs cite it with `defined-at:`, and later renderings link to
   it.
6. A struck term is removed from the rendering, or replaced by the
   words the owner gives, and the IR records the ruling.

A term that converges with another project's term is a
standardization candidate under methodology Article 7, which the
methodology vocabulary takes up by amendment.

## In the IR

Nothing changes. A `T` element with `defined-at:` is rendered as a
link. A `T` element without one is rendered as an inline definition.
The [lint](vocabulary.md#def-lint) counts `T` elements with status proposed and no decided
vocabulary row. That count is the unratified-vocabulary indicator from the owner's "[Convergence](vocabulary.md#def-convergence) and
Divergence" (2026-10-22).

## What the lint checks

| Check | Finding when |
|---|---|
| CK-11 | a `T` element with `defined-at:` points at a target that does not resolve |
| SP-23 | a term present in either vocabulary appears in prose and its first use in the unit is not linked |
| SP-24 | a link to a `#def-` anchor does not resolve |

## From terms to the model

Ratified terms are the first entries of a project's conceptual model
in the sense of Allegro's conceptual-model proposal: each has a
definition, a status, a source, and a site. Claims with status decided
are the next candidates. Moving them is chunk 4's [graduation](vocabulary.md#def-graduation) work and,
in the longer run, the formal model the methodology's Backlog records
as its horizon.
