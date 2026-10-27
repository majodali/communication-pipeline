# Case 006: the IR specification rewritten from a full IR, ten stranger rounds

Instance of the [Evaluation case](../README.md) type. The experiment the owner approved on 2026-10-26 after case 005 and the per-finding analysis of PR #51's rounds ([pr51-findings.md](../analysis/pr51-findings.md)): write the methodology's IR specification as a complete IR, render short prose from it, review it in stranger rounds with every fix made in the IR first, and compare the curve with PR #51's.

| Field | Value |
|---|---|
| Case | 006 |
| Source text date | 2026-10-26 to 2026-10-27 |
| Reader addressed | RD-4 |
| Origin | methodology branch `ir-spec-experiment` (PR #52): `docs/intermediate-representation.ir.md`, `docs/intermediate-representation.md`, `docs/intermediate-representation.review.md` |
| Through the pipeline | yes: IR first, lint CK-01 to CK-16, rendering by the reasoning role, rounds until readable |
| Graded by | the reasoning role (this session), from the ten strangers' reports |

## Source text

Three files, not quoted, in the methodology repository on branch `ir-spec-experiment`: the IR (172 claims, 19 terms, 31 relations, 2 evidence elements, 3 asks at round 10), the prose rendered from it (2,804 words at round 10), and the review record holding every round's findings and dispositions.

## Design

| Element | Setting |
|---|---|
| IR | every rule of the specification as one claim, with provenance; the rules of main plus the owner's ruling of 2026-10-26 (rounds until readable, limit ten, meta-review); a default clause: a case the specification does not name is decided by the owner at acceptance |
| Rendering | by the reasoning role, one claim per sentence, tables where the claims are tabular; a render map appended |
| Fix discipline | every fix in the IR first, then the prose re-rendered or edited to match; rephrase or cut before adding; add only a missing definition, referent or rule |
| Round 1 | run twice on one text: 1a with the brief of PR #51's rounds unchanged; 1b with the revised brief |
| Revised brief | the stranger reads the prose first and writes a restatement of at most 200 words (problem, terms, decisions), then reads the IR and reports every disagreement; SP-18 (a norm names its test) and the "unclassified case" prompt dropped; SP-12 contradiction and SP-13 excess words added; each finding carries a locus (prose, IR, both) and a fix kind (cut, rephrase, add); the verdict is readable when the restatement matches the IR and the stranger finds no contradiction and no undefined term, whatever the finding count |
| Rounds 2 to 10 | revised brief; from round 3 the brief orders the reads so the restatement is written before the IR is opened |
| Stranger | a fresh haiku instance per round, reading only the files named |

## Curve

| Round | Brief | Prose words | IR claims | Findings | Per 1,000 words | Restatement matched | Contradictions | Undefined terms | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| 1a | old | 2,884 | 148 | 22 | 7.6 | — | — | — | not readable |
| 1b | revised | 2,884 | 148 | 26 | 9.0 | in substance (4 header sentences without claims) | 1 | 1 | not readable |
| 2 | revised | 2,864 | 161 | 13 | 4.5 | in substance (1 header sentence) | 1 | 0 | not readable |
| 3 | revised | 2,842 | 162 | 17 | 6.0 | 4 mismatches, the stranger's own | 1 (IR) | 1 | not readable |
| 4 | revised | 2,829 | 165 | 8 | 2.8 | 6 mismatches, the stranger's own | 3 | 2 | not readable |
| 5 | revised | 2,824 | 168 | 7 | 2.5 | 2 mismatches (overstatement) | 0 | 1 | not readable |
| 6 | revised | 2,830 | 170 | 12 | 4.2 | 3 own, 1 IR gap | 2 | 1 | not readable |
| 7 | revised | 2,839 | 173 | 7 | 2.5 | 1 mismatch, own | 2 (prose drift) | 0 | not readable |
| 8 | revised | 2,823 | 173 | 7 | 2.5 | 1 mismatch (status rule) | 0 | 0 | not readable |
| 9 | revised | 2,814 | 173 | 7 | 2.5 | yes | 1 | 1 | not readable |
| 10 | revised | 2,804 | 172 | 6 | 2.1 | yes | 0 | 0 | readable |

For comparison, PR #51's text under the old brief: 2,572 to 4,516 words over ten rounds; 28, 36, 26, 27, 24, 22, 22, 19, 16, 12 findings; 10.9 to 2.7 per thousand words; never readable ([case 005](005-meta-review-stranger-rounds-2026-10-26.md)).

## Findings

What each round found, by kind, and what the fixes did. Kinds: compound (a sentence or claim holding two claims), referent, term (undefined or used before its definition), contradiction, excess (words that lose no claim), IR gap (a prose sentence with no claim, or a claim the IR lacks), IR form (a header, evidence or relation against the specification), edge (a case the text does not name), identifier (RD-n without a name).

| Round | compound | referent | term | contradiction | excess | IR gap | IR form | edge | identifier | other | Declined | Prose words after fixes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1a | 1 | 3 | 3 | 2 | 0 | 0 | 0 | 12 | 0 | 1 history ×3 | 4 | (fixed with 1b) |
| 1b | 10 | 2 | 4 | 1 | 3 | 4 | 1 | 0 | 0 | 1 | 0 | 2,864 |
| 2 | 2 | 4 | 0 | 1 | 4 | 1 | 0 | 0 | 0 | 1 link | 0 | 2,842 |
| 3 | 4 | 3 | 1 | 1 | 3 | 1 | 4 | 0 | 0 | 0 | 0 | 2,829 |
| 4 | 1 | 0 | 2 | 3 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2,824 |
| 5 | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 header, 1 restatement | 2 | 2,830 |
| 6 | 3 | 1 | 3 | 2 | 1 | 1 | 0 | 0 | 1 | 0 | 1 | 2,839 |
| 7 | 1 | 0 | 1 | 2 | 0 | 0 | 0 | 0 | 1 | 1 length, 1 IR term | 2 | 2,823 |
| 8 | 0 | 0 | 1 | 0 | 2 | 1 | 0 | 0 | 2 | 1 restatement | 2 | 2,814 |
| 9 | 1 | 2 | 1 | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 1 | 2,804 |
| 10 | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 0 | 1 | 1 link | 1 (5 accepted, unfixed) | 2,804 |

Fix kinds as the strangers judged them, rounds 1b to 10: cut 25, rephrase 38, add 48. Of the 48 "add", 31 are claim splits whose added words are a repeated subject (two to four words each), 9 are a missing definition or referent, 5 are IR-side additions with no prose words (a claim behind a header sentence), 3 were declined. Words the strangers estimated cuttable: 18, 45, 21, 20, 4, 40, 15, 25, 11, 7.

Observations, in the order the rounds produced them.

1. **The two briefs on one text (round 1).** The old brief returned 22 findings, 12 of them SP-18 edge-case elaborations, of which 2 became rules and 10 were declined or resolved by cutting. The revised brief returned 26 findings, none of them edge cases: ten compound sentences the old brief passed, four header sentences with no claim behind them, and three excess-word findings the old brief has no rule for. Both found the same four defects (a count that disagreed with its list, an undefined term, a term used before its definition, the limit's scope).
2. **The IR grew by splitting, the prose did not grow.** IR claims 148 to 172; prose 2,884 to 2,804 words. Every claim split added a subject to a sentence and every cut or rephrase took words out; the two balanced at a net loss of 80 words. PR #51's prose-only fixes added 1,944 words for the same rule set.
3. **The lint's CK-03 misses compounds under 25 words.** The strangers flagged 25 compound claims the lint passed, all under the length threshold. The threshold is a lint approximation; the reader test is stricter.
4. **The IR drifted from the prose once (round 6 to 7).** An edit script aborted and three IR fixes never reached the prose. The mechanical round trip passed, because it reads only the render map. Round 7's stranger found all three. The rendering rule's statement that the round trip has a semantic half is confirmed; the mechanical half alone does not detect a prose that no longer matches its claims.
5. **The restatement test failed on the stranger more than on the text.** In rounds 3, 4, 6, 7 and 8 the strangers reported mismatches they themselves attributed to their restatements (compressions such as "each element carries a status"). One compression recurred five times, on the status rule whose exception sat in a second sentence; the round 8 fix put the exception into the same sentence and the compression stopped. A restatement error that recurs across strangers is a text defect the rule list does not name.
6. **One finding was declined seven times.** Seven strangers asked for RD-1, RD-2, RD-3 and RD-5 to be named at first use. The methodology's P-004 accepts a link; the brief's SP-05 says "name and link". The reasoning role declined each time, citing the rule. This is a brief-versus-rule disagreement for the meta-review, not a text defect.
7. **The verdict rule produced seven rounds of "not readable" with a matching restatement in substance.** Under the two-round rule of PR #50 the text would have stopped at round 2 with a verdict of not readable on one contradiction. Under rounds until readable, rounds 3 to 9 removed eight contradictions and nine undefined or out-of-order terms, each real. The finding rate flattened at 2.5 per thousand words from round 5; the contradictions and undefined terms reached zero only at round 10.
8. **Three misses by the reasoning role.** Two edit scripts aborted on wrapped anchors and left the prose behind the IR; one was caught by the next stranger, one by a grep before the launch. The round-trip check needs a text comparison of each changed claim against the prose, not only a map check.

## Measures

| Measure | Value |
|---|---|
| Rounds | 10 in one count, plus the parallel round 1a |
| Findings (revised brief, rounds 1b to 10) | 110 |
| Findings (old brief, round 1a) | 22 |
| Prose words, round 1 to round 10 | 2,884 to 2,804 |
| IR claims, round 1 to round 10 | 148 to 172 |
| Words per claim at round 10 | 16.3 (PR #51's text: about 36 per amendment claim and 4,516 words for the same rules) |
| Findings per thousand words, first and last round | 9.0 and 2.1 (PR #51: 10.9 and 2.7) |
| Unratified terms | 12, all defined by the specification and absent from the methodology vocabulary |
| Footprint | declared 3, changed 3, surprises 0, misses 0 |
| Verdict | readable at round 10 |

## Outcome

Pending the owner's adjudication of methodology PR #52 and the meta-review of the text (ten rounds in one count). Proposed for the meta-review to weigh, with the recommendations of case 005 the owner put on hold:

1. The revised brief replaces the old brief for stranger rounds: restatement first, locus and fix kind per finding, contradiction and excess-word rules, verdict by restatement and the two zero counts.
2. The SP-05 wording in the brief aligns with P-004: a name or a link at first use.
3. The round-trip check gains a text half: for each claim changed since the last round, the prose sentence mapped to it is quoted beside it in the review record.
4. The fix discipline enters the specification (it is in the IR as C86, C87, C143, C169, proposed): IR first; rephrase or cut before adding; add only a definition, referent or rule.
5. CK-03 keeps its threshold; the stranger's SP-01 is the check for compounds under it.
