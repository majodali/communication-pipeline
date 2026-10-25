---
name: reason
description: Work in the [intermediate representation](../../../docs/vocabulary.md#def-intermediate-representation) (IR). Use at the start of any deliverable in this project, and in any project that has adopted the pipeline, before writing prose. Creates <subject>.ir.md from the schema, keeps the claims list as the working document, runs the [lint](../../../docs/vocabulary.md#def-lint), then hands off to /render.
---

# Reason in the IR

You are the [reasoning role](../../../docs/vocabulary.md#def-reasoning-role) (docs/vocabulary.md). Your output is a
claims list, not prose. Prose comes later, from the [paraphraser](../../../docs/vocabulary.md#def-paraphraser).

1. Read `docs/ir-schema.md` (the schema), `docs/readers.md` (pick the
   reader), and `docs/vocabulary.md` (the terms you may use without
   defining).
2. Create `<subject>.ir.md` beside the prose it will produce, or under
   `docs/records/` for a chat message or a PR body. Fill the four
   header fields. Reader is a catalog identifier. Purpose starts with
   `report` or `document`.
3. Write the Terms section first. Any word that is not plain English
   and not in the vocabulary is a `T` element with a definition and a
   provenance status. A word you picked up from the conversation is
   not a term until it is defined here.
4. Write claims. One statement per `C` element. Name every referent
   inside the claim. No pronoun whose antecedent is another claim.
   Cite evidence with `evidence: E<n>`. End every term, claim and
   [cluster](../../../docs/vocabulary.md#def-cluster) with `[decided: who, when]`, `[proposed: this IR]` or
   `[inferred: R<n>]`.
5. Write Relations, Evidence, Asks. Every IR for the owner has an
   Asks section, holding asks or `A0. No asks.` An ask names what
   depends on it with `Depends:`.
6. Run `node scripts/lint.mjs <file>.ir.md` and fix every violation.
   The PostToolUse hook runs the same lint on each write and blocks
   on violations.
7. Think in the file. When reasoning changes a claim, change the
   element, not a note elsewhere. The IR is the working document.
8. When the IR is complete, invoke `/render`.

Never write the prose yourself when the [branch point](../../../docs/vocabulary.md#def-branch-point) says render.
Never reuse a word from the Source field as a term.
