# Vocabulary

Status: active. Register of this project's terms.

Type: **Vocabulary** (Document), a custom document type under
methodology Article 7, declared in
[docs/classification.md](classification.md) and defined here. A
vocabulary is the register of a project's terms. Each term has one
definition site, a meaning, a status and an origin. The type is
convergent with Allegro's `docs/book/architecture-vocabulary.md` and
with the *Vocabulary* type Allegro proposed to the methodology
(documentation-standards proposal, section 6.2). Under Article 7's
convergence clause it is a standardization candidate.

Reader: RD-4 (a fresh agent session) checking a term, or the human
owner ratifying one.

Row shape: anchor and term · meaning · status (`decided` with who and
when, `proposed` with where) · definition site when it is not this
file. Every row carries a stable anchor `def-<slug>`. A document links
the term's first use to it ([term lifecycle](term-lifecycle.md)).

| Term | Meaning | Status | Definition site |
|---|---|---|---|
| <a id="def-intermediate-representation"></a>Intermediate representation (IR) | the structured form a reasoning role writes before prose | decided, owner 2026-10-24 | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-intermediate-representation) (graduated 2026-10-26; was: [ir-schema.md](ir-schema.md)) |
| <a id="def-reasoning-role"></a>Reasoning role | the agent role that does the thinking and writes its output as an IR | decided, owner 2026-10-24 | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-reasoning-role) (graduated 2026-10-26; was: this file) |
| <a id="def-paraphraser"></a>Paraphraser | the agent role that renders an IR into prose for a defined reader | decided, owner 2026-10-24 | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-paraphraser) (graduated 2026-10-26; was: this file) |
| <a id="def-reviewer"></a>Reviewer | the agent role that reads an IR or prose and reports a defined set of unwanted patterns and readability for the defined reader | decided, owner 2026-10-24 | this file |
| <a id="def-stranger"></a>Stranger | a reviewer with no access to the conversation that produced the text and no content contributions to the project | decided, owner 2026-10-23 | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-stranger) (graduated 2026-10-26; was: this file) |
| <a id="def-branch-point"></a>Branch point | the step that decides, from an IR's purpose and complexity, which model stages run | decided, owner 2026-10-24 | [branch-point.md](branch-point.md) |
| <a id="def-term-ratification"></a>Term ratification | the process by which the human owner accepts or strikes each term a deliverable introduces | decided, owner 2026-10-24 | this file; process in plan chunk 3 |
| <a id="def-reader-catalog"></a>Reader catalog | the set of defined readers the paraphraser and reviewer consume | decided, owner 2026-10-24 | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-reader-catalog) (graduated 2026-10-26; was: [readers.md](readers.md)) |
| <a id="def-style-specification"></a>Style specification | the methodology's prose rules in a form the paraphraser applies rule by rule | decided, owner 2026-10-24 | [style-spec.md](style-spec.md) |
| <a id="def-round-trip-check"></a>Round-trip check | re-extracting claims from rendered prose and diffing them against the source IR | decided, owner 2026-10-24 | plan chunk 3 |
| <a id="def-evaluation-case"></a>Evaluation case | one graded pair of text and findings against a stated reader | decided, owner 2026-10-24 | [../eval/README.md](../eval/README.md) |
| <a id="def-graduation"></a>Graduation | the move of a pilot artifact to its destination project | decided, owner 2026-10-24 | this file |
| <a id="def-convergence"></a>Convergence | a project is convergent while the cost for its owners to understand, change and verify it grows more slowly than the project | decided, owner, "Convergence and Divergence", 2026-10-22 | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-convergence) (graduated 2026-10-26; was: the owner's writeup) |
| <a id="def-disposition"></a>Disposition | the branch point's output for one IR: lint only, render, or render and review | decided, owner 2026-10-25 (chunk 1 gate) | [branch-point.md](branch-point.md) |
| <a id="def-cluster"></a>Cluster | a declared ordered list of claim identifiers the paraphraser renders as one paragraph | decided, owner 2026-10-25 (chunk 1 gate) | [ir-schema.md](ir-schema.md) |
| <a id="def-definition-site"></a>Definition site | the one place a term is defined; every other use links to it | decided, owner 2026-10-25 (chunk 1 gate) | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-definition-site) (graduated 2026-10-26; was: this file) |
| <a id="def-readability-test"></a>Readability test | the question a reviewer answers to judge a text readable for one catalog reader | decided, owner 2026-10-25 (chunk 1 gate) | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-reader-catalog) (within reader catalog) (graduated 2026-10-26; was: [readers.md](readers.md)) |
| <a id="def-lint"></a>Lint | the deterministic checker in scripts/lint.mjs that runs the IR checks and the style specification's lint column | decided, owner 2026-10-26 (chunk 3 gate) | [ir-schema.md](ir-schema.md), Mechanical checks |
| <a id="def-dispatcher"></a>Dispatcher | the script scripts/dispatch.mjs that applies the branch point's rules to one IR and logs the disposition | decided, owner 2026-10-26 (chunk 3 gate) | [branch-point.md](branch-point.md) |
| <a id="def-render-map"></a>Render map | the comment line the paraphraser appends to prose, listing where each claim landed | decided, owner 2026-10-26 (chunk 3 gate) | [ir-schema.md](ir-schema.md), Rendering rule |
| <a id="def-connective-prose"></a>Connective prose | a sentence in rendered text that asserts nothing a model would hold and exists to join claims for the reader | decided, owner 2026-10-26 (chunk 3 gate) | [ir-schema.md](ir-schema.md) |
| <a id="def-term-lifecycle"></a>Term lifecycle | the path a term takes from first use in an IR, through ratification, to a vocabulary row with an anchor that later documents link | decided, owner 2026-10-26 (chunk 3 gate) | [term-lifecycle.md](term-lifecycle.md) |
| <a id="def-footprint"></a>Footprint | the files or directories an IR declares its work is expected to touch, compared after the work with the files the branch changed | decided, owner 2026-10-26 (chunk 4 gate) | [ir-schema.md](ir-schema.md), Document form; the methodology specification from its close-out amendment |
| <a id="def-meta-review"></a>Meta-review | a review, by a session with no part in the rounds, of a text's review record and the text itself, reporting whether the process needs a change; due when a text's count reaches the limit or its review record shows a meta-review signal | decided, owner 2026-10-27 | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-meta-review) |
| <a id="def-restatement"></a>Restatement | the stranger's account, in at most 200 words of its own, of the text's problem, terms and decisions, written from the prose before the IR is read | decided, owner 2026-10-27 | [branch-point.md](branch-point.md), Rounds |
| <a id="def-locus"></a>Locus | the stranger's judgement of where a defect sits: the prose, the IR, or both | decided, owner 2026-10-27 | [branch-point.md](branch-point.md), Stranger brief |
| <a id="def-fix-kind"></a>Fix kind | the stranger's judgement of what a finding needs: cut, rephrase, or add | decided, owner 2026-10-27 | [branch-point.md](branch-point.md), Stranger brief |
| <a id="def-structural-fix"></a>Structural fix | a fix that moves a sentence out of the structure that produces a misreading, or changes the claim to the reading, rather than rewording it | decided, owner 2026-10-29 | [branch-point.md](branch-point.md), Rounds step 6 |
| <a id="def-own-mismatch"></a>Own mismatch | a restatement mismatch the stranger attributes to its own restatement | decided, owner 2026-10-30 | [branch-point.md](branch-point.md) v1.9, Rounds step 2; v1.10 strikes the `(own)` mark and the verdict's exception (case 012 change 1) |
| <a id="def-re-fix"></a>Re-fix | the second fix of a claim, made after the stranger instance reports at confirmation that the first fix did not hold | decided, owner 2026-10-30 | this file; the practice in [branch-point.md](branch-point.md), Rounds step 4 |
| <a id="def-claims-check"></a>Claims check | the check, after each fix pass, that a prose sentence carries each changed IR claim, run by `scripts/claims-check.mjs` against the previous round's prose; it reports a changed claim as missing or stale | decided, owner 2026-10-30 (case 012) | [branch-point.md](branch-point.md), Rounds step 4 |
| <a id="def-step-6-fix"></a>Step-6 fix | the structural fix made under Rounds step 6 for a restatement mismatch that recurred on one passage | decided, owner 2026-10-30 (case 012) | [branch-point.md](branch-point.md), Rounds step 4 |
| <a id="def-awaiting-restatement"></a>Awaiting restatement | the review-record mark on a step-6 fix whose hold no later restatement has yet tested | decided, owner 2026-10-30 (case 012) | [branch-point.md](branch-point.md), Rounds step 6 |
| <a id="def-omission"></a>Omission | a claim or a qualifier a stranger's restatement leaves out; an omission is not a restatement mismatch | decided, owner 2026-10-30 (case 012) | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-omission) |
| <a id="def-fix-pass"></a>Fix pass | the reasoning role's fixes of one round's findings, in the IR and then in the prose | decided, owner 2026-10-30 (case 012) | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-fix-pass) |
| <a id="def-new-defect"></a>New defect | a defect a fix introduces, which the round's stranger instance names at confirmation | decided, owner 2026-10-30 (case 012) | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-new-defect) |
| <a id="def-unparsed-line"></a>Unparsed line | a review-record line the signals script `scripts/signals.mjs` cannot read | decided, owner 2026-10-30 (case 012) | [methodology vocabulary](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-unparsed-line) |

Unratified terms at this revision: 1 (meta-review, proposed 2026-10-26).
