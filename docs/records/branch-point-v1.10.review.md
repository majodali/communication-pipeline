# Review record: branch point v1.10

Reader of the reviewed text: RD-4 (a fresh agent session). Reviewer: a stranger, a fresh instance per round, model named per round, under the v1.10 brief the text itself defines: the prose read first, a restatement, a one-sentence restatement of each passage awaiting restatement, then the IR; SP-01 to SP-05, SP-08 to SP-11, SP-18, SP-25, SP-26 with the three calibrations of case 009; locus and fix kind per finding; verdict by the three conditions of the methodology specification, every restatement mismatch counting and an omission not counting. Disposition D3 (a specification, Normative: yes). Text reviewed: `docs/branch-point.md` whole; the IR `docs/records/branch-point-v1.10.ir.md` covers the passages v1.10 changed (the Status line, Rounds steps 1, 2, 3, 4, 6 and 7, the verdict paragraph, the Meta-review trigger, line and script paragraphs, the Meta-review history and the Versions section). The v1.10 procedure applies to these rounds.

## Curve

| Round | Prose words | IR claims | Findings | Per 1,000 words | Verdict |
|---|---|---|---|---|---|
| 1 | 3,755 | 51 | 9 | 2.4 | not readable (mismatches 0; contradiction 1, a rule gap listed for the owner; undefined term 1) |

## Round 1

Branch point version and commit the count runs under: v1.10 at commit 387dc43 on branch `branch-point-v1.10-case-012`. Prose 3,755 words (whitespace-separated words, comments stripped, by `wordCount` in `scripts/ir.mjs`); IR 51 claims.

Sentences over 25 words before round 1 (step 1): 2 in the v1.9 text, by `scripts/lint.mjs`: the Status line (66 words) and the Versions sentence (91 words). Both are resolved: the version list moved to the Versions table, and each sentence of the Status line is under 25 words. At round 1: 0.

Claims check: none before round 1; under case 012 change 13 the check runs after each fix pass.

Passage awaiting restatement (step 2, case 012 change 4): the lints sentence in the Dispositions section, v1.9's C54, a step-6 fix that closed `awaiting restatement` in v1.9's count. The owner ruled on 2026-10-30 that it does not block. The brief lists it; this round's entry states whether the stranger's one-sentence restatement matched it.

Declined findings carried in the brief from v1.9's count, where the text under them stands: round 1's F3, round 2's 10, round 4's 11, round 5's N1 and round 6's 6, each with its reason. Not carried: round 1's F1, because the Status line it concerned is rewritten; round 2's 9, because its reason rested on the override, which v1.10 strikes.

Forms added to the brief (step on the Stranger brief): none.

Signals script before the round: no round recorded yet; nothing to read.

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier (a6182cb868caefdad). Prose 3,755 words by `wordCount` (whitespace-separated, comments stripped; the stranger's estimate: about 5,300, by hand); IR 51 claims; 9 findings, 2.4 per thousand words. Restatement: no mismatch. Contradiction 1 (finding 5), undefined term 1 (finding 3) and one term defined only after its first use (finding 2); verdict: not readable for RD-4.
Mismatches: none

The listed passage, v1.9's C54, restated as "The reasoning role runs lints on every IR, whatever disposition the IR then takes." The sentence matches the prose and v1.9's C54. The `awaiting restatement` mark from v1.9's count clears.

Omissions the stranger noted, not counted: the v1.10 IR carries no claim for step 2's stranger-model and `Mismatches:`-line duties, step 4's send and answer duties, step 6's signals-script order and step 7's marking of each finding. v1.10 did not change those sentences. Their claims stand in the earlier IRs (v1.9's C18, C93 and C99; v1.7's for the stranger model, the `Mismatches:` line and the answer duty). The v1.10 IR lists the claims v1.10 changed only. The round 2 brief says so.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | step 3's reworded-claim sentence names no actor | SP-18 | rephrase C20: "When a fix rewords a decided claim, the reasoning role keeps the claim's decided source and notes the rewording, ..." |
| 2 | "confirmation read" used before confirmation is defined | SP-04 | link "confirmation" at first use to the methodology vocabulary's row |
| 3 | "fix commit" never defined | SP-04 | add C52 at first use: "The fix commit is the commit that holds the round's fix pass." (inferred, R2) |
| 4 | "the fixes it calls for" | SP-03 | rephrase: "the fixes the confirmation calls for", as C31 reads |
| 5 | step 6's `awaiting restatement` mark against step 7's confirmation of each fix at a readable verdict | SP-25 | a gap in the rules: under case 012 change 9 no fix adds the rule. Listed for the owner as ask A2, with the proposed wording "At a readable verdict, a step-6 fix made in that round's fix pass stays `awaiting restatement`, as at the limit; the next count's round 1 brief lists its passage." The finding counts against the verdict until the owner decides; the round 2 brief carries it as owner-pending, not as a decline |
| 6 | "The next edit of the text fixes the new defect" names no actor | SP-18 | rephrase C51: "The reasoning role fixes the new defect in the next edit of the text." |
| 7 | step 4's inputs stated again in the Stranger brief | SP-26 | the Stranger brief points to step 4: "At Rounds steps 4 and 7 the round's instance also reads the inputs step 4 lists." (C53) |
| 8 | the Meta-review heading omits the line rules | SP-08 | add "the line" to the heading |
| 9 | "joining a reason to its rule" | SP-03 | rephrase: "joining a rule to a reason" (C54) |

Claims after fixes: 54. Prose after fixes: 3,774 words. Claims check after the fix pass (base: round 1 prose): 5 changed claims, 0 missing, 0 stale. Round trip: 54 of 54. IR check: 0 violations, 0 warnings.

Decided claims the fixes reworded, for the owner's list at the count's close: C20, C51, C53 (v1.9's C101), C54.
