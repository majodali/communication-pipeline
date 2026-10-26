# Case 001: review of two Allegro proposals, 2026-10-23

Instance of the [Evaluation case](../README.md) type.

| Field | Value |
|---|---|
| Case | 001 |
| Source text date | 2026-10-23 |
| Reader addressed | human owner, in conversation |
| Origin | a methodology session's chat response reviewing the owner's "[Convergence](../../docs/vocabulary.md#def-convergence) and Divergence" writeup and Allegro's two methodology proposals |
| Through the pipeline | no; written directly as prose with the W-008 (reports map their deliverables) block cached in the Agent bootstrap |
| Graded by | the same session, on the owner's challenge, 2026-10-23; two of the nine findings are the owner's |

## Source text

```markdown
Both proposals read, plus the census they cite. State check first: Allegro is on 1.5.0 with D-1 retired, but methodology's own migration (PR #42) and the other eight have sat open since September 2. That matters below.

## Asks

1. Agree the **invariants are the adjudication criterion** for Allegro's proposals, so we adopt by invariant rather than as a block.
2. Rule on the **vocabulary collision**: Allegro's "promotion" (report → documentation) collides with the methodology's existing *Promotion* (C-tier raise). The transition needs a different name.
3. Decide whether the **methodology pilots the conceptual model on itself** first, with Article 4 as the first formalized concept.

## What is already covered

Orchestrator-first, M5 as the plan model, incremental formalization as the Allegro feedback channel. Nothing below reopens those.

## The review

**The three documents are one argument at three levels, and your framework should adjudicate the other two.** Your writeup gives the invariants. Allegro's two proposals are practices. Your own test is "each practice is justified by the invariant it protects," so that is how to read them:

| Invariant | Allegro's practices that protect it | Corpus today |
|---|---|---|
| Provenance | vocabulary type; P-008 define-once; levelled conceptual model with traceability; document-type declaration; the record type; report/documentation designation | strong for rules and decisions (Article 6, M-004, K-010/011); **absent for concepts and vocabulary** |
| Sound abstraction | problem-before-solution; principles with names and tests; boundary contracts; reading order; the conceptual model's levels and delta | partial (Article 4 applicability, K-002 pointer rule) |
| Proportional verification | lints on the diff; unowned delta blocks only touched entries; two-pass so the human pass runs once per promotion | strong (`--staged`, delta scope, audit fingerprints) |

The mapping says where the corpus is weakest: provenance of concepts. That is exactly the surface your cause 2, concept accretion, exploits. Most of Allegro's package lands there, which is why it reads as right even though it is large.

**The most important finding in the package is not a rule.** P-004 and P-006 exist and hold in 10 of 50 documents. Allegro's own conclusion: a rule without a check does not survive the session that writes the document. Adding P-007 through P-011 as further unchecked rules reproduces that result. We already learned this once: the W-008 bootstrap cache exists because report conformance decayed. The generalization is a meta-rule, and it is the cheapest, highest-value thing here: **every P-rule ships with its mechanical check in `mtool`, or declares in its body that it has none and why.** Allegro's §5 lints are that check for four rules.

**Scale is the problem, and your own worry names it.** Together the proposals add about as many rules, types and content shapes as the corpus currently has in play. That is the monolith. Three things keep it from becoming one:

- *Adopt by invariant, smallest set first.* Provenance of vocabulary is the invariant breaking now. So: vocabulary as a standard document type, P-008, and the unratified-vocabulary lint. That is three things and it directly instruments your second leading indicator.
- *Standard types need a second project.* Vocabulary, record, and conceptual model have instances in Allegro and the methodology repo itself (`vocabulary.md` is a vocabulary document; `practices.md` is a record; the Constitution plus rules is a conceptual model of the methodology). They go standard. Study, boundary contract, structural change log, and the book collection stay as Allegro's Article 7 custom definitions until a second project needs them. *Standardization* (custom → standard) is already a process term; use it.
- *Fold rules into type contracts where they are content, not form.* P-009, P-010, P-011 are required content of the design-note type, not free-standing rules. That dissolves Allegro's open question 1 and keeps the rule count flat.

**Add one header field, not a reorganization.** Your writeup proposes a methodology defined as invariants with practices removed when they protect none. The cheap implementation: every rule gains `Protects:` next to `Motivated-by:`, citing an invariant. Article 6's anti-languish audit then has a second test. A rule protecting no invariant is a removal candidate. No restructuring of the corpus.

**The report/documentation distinction is a lifecycle diagnosis in our own terms.** `style.md`'s information lifecycle runs *encoded → summarized*. Allegro observed the reverse in practice: reports become documents by merge, without documentation's duties. That is the mechanism. The fix fits what we just shipped: W-008 governs prose whose reader shared the conversation; the P- rules plus Allegro's reader duties govern prose whose reader did not; a Designation marks the transition. Allegro's open question 2 is yes. Its name is the collision in ask 2.

**Two of your three causes are not documentation problems, and the package does not reach them.** Concept accretion is cause 2. Causes 1 and 3 need something else, and your indicators point at it:

- *Unclear intent → prediction surprise.* Before a chunk, the owner or agent states the expected footprint: which documents and components should change. The landing summary reports actual against expected. W-008's "what changed" part becomes comparable to a prediction instead of a free report. Cheap, per chunk, and it is the indicator measured directly.
- *Course changes without comprehension → the delta row, with an ordering rule.* Allegro's conceptual model says write *As implemented* from the code first, so the model says what is true. For a course change the order inverts: change the model entry first, then the code, then close the delta. Implementation-first for recording, model-first for changing. Both protect the same invariant, that model and code never diverge silently.

Allegro's weakness #3 in your writeup, "safely ignored needs a criterion," has an answer in the package: detail below a boundary may be ignored when its delta is zero or owned. That is the conceptual model's delta row doing the work your invariant 2 needs.

**The stranger test has a natural reader.** Allegro asks who the second reader is on a one-person project. Your writeup already says it: agents have no tacit layer and rebuild the theory from the artifacts every session. That is the divergence liability, and it is also the ideal stranger. A fresh session with no conversation history, in the Auditor role, is the comprehension-pass reader. The delegation vocabulary from v1.5.0 names it.

**The methodology should pass its own test.** Nine migration PRs have waited seven weeks. That is weakness #2 from your writeup, owner attention as the limit, observed in our own process. Proportional verification says nine identical diffs should cost one decision, not nine. W-001's sequence mode fits: a migration round whose diffs are pin plus block only, with clean audits, is a pre-ratifiable sequence. Review round 2 should ask the convergence question of the methodology itself: did owner-hours per governed change fall?

## What goes in the vision

Convergence is not a third fold. It is the criterion the two folds serve. The collaborative environment exists to keep projects convergent. The formal model is how convergence becomes checkable rather than felt. The three invariants are the vision's non-negotiables, and Allegro's eventual role is to make invariant 2 literally true: "safely ignored because checked" becomes "safely ignored because proven." Your draft's "explanation cost" indicator gets a proxy for free from the reading-order DAG: depth to a document is a number.

One caution for the vision text. Your writeup's reframing of the methodology's job, "raise how much project each hour of owner attention can govern," is the single clearest statement of purpose in any of the three documents. It belongs in Article 1, not only in the vision.
```

## Findings

| # | Quoted text | Defect | Rule broken | Stage that should catch it |
|---|---|---|---|---|
| 1 | "The three documents are one argument at three levels, and your framework should adjudicate the other two." | Three claims in one sentence. Four referents unnamed: the argument, the levels, "the other two", what adjudication means. | Style guide, *Sentences* (one idea per sentence) | IR check 1 and 3 (referents; compound claims) |
| 2 | "Convergence is not a third fold ... the two folds" | "Fold" never defined. Taken from the owner's phrase "two-fold" (2026-10-22) and converted from adjective to noun term. | Proposed P-008 (terms defined once); style guide, *Citations carry names* | IR check 4 (undefined term); [reviewer](../../docs/vocabulary.md#def-reviewer) |
| 3 | "That is the monolith." / "That is the mechanism." | Aphoristic fragments. "That" refers to the previous paragraph. | Style guide, *Sentences* (rhetorical devices) | [lint](../../docs/vocabulary.md#def-lint) (fragment pattern); IR check 1 |
| 4 | "The most important finding in the package is not a rule." | Suspense: states what the finding is not before what it is. | Style guide, *Sentences* | reviewer |
| 5 | "the surface your cause 2, concept accretion, exploits" | Metaphor in a technical review. | Style guide, *Sentences* | reviewer |
| 6 | "Implementation-first for recording, model-first for changing." | A slogan standing for a principle, in a review of a proposal that forbids slogans. | Allegro's proposed P-009 (principles carry their standard names and a test) | reviewer |
| 7 | "P-004 and P-006 exist and hold in 10 of 50 documents" | Both identifiers, P-004 (citations carry names) and P-006 (registers hold uniform rows), bare on first use in the response. | P-004 | lint (bare identifier) |
| 8 | Bold whole-sentence openers on every paragraph of "The review" | Bold used as emphasis. Source: harness writing guidance conflicting with the methodology. | P-003 (bold marks structure only) | lint (bold not a field label); [style specification](../../docs/vocabulary.md#def-style-specification) override |
| 9 | "Allegro's weakness #3 in your writeup" | Wrong attribution. The weaknesses are the owner's, not Allegro's. Produced by compressing "Allegro's open question" and "your weakness" into one phrase. | Correctness; K-010 (superseded content is never silently readable), the converse for false content | IR check 1 and 3; [round-trip check](../../docs/vocabulary.md#def-round-trip-check) |

Causes recorded at grading:

- sentences optimized for density;
- register matched to the documents just read;
- a harness rule followed over a methodology rule;
- failures concentrated in the hardest reasoning of the session, while routine PR bodies in that session conformed.

## Measures

| Measure | Value |
|---|---|
| Words in source text | 1249 |
| Findings | 9 |
| Findings per thousand words | 7.2 |
| Unratified terms used | 1 ("fold") |
| Findings a deterministic lint would catch | 4 (rows 3, 7, 8, and the fragment in 3) |
| Findings only a reviewer or the IR would catch | 5 |

## Outcome

Baseline for the pilot. Motivated: the IR schema's referent rule (check 1), the compound-claim rule (check 3), the undefined-term rule (check 4), the style specification's harness override, and the round-trip check.
