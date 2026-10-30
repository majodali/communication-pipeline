# Review record: branch point v1.9

Reader of the reviewed text: RD-4 (a fresh agent session). Reviewer: a stranger, a fresh instance per round, model named per round, under the v1.9 brief the text itself defines: the prose read first, a restatement, then the IR; SP-01 to SP-05, SP-08 to SP-11, SP-18, SP-25, SP-26 with the three calibrations of case 009; locus and fix kind per finding; verdict by the three conditions, an own mismatch not counting when the stranger quotes a prose sentence that carries the IR's claim, and a step-6 mismatch always counting. Disposition D3 (a specification, Normative: yes). Text reviewed: `docs/branch-point.md` whole; the IR `docs/records/branch-point-v1.9.ir.md` covers the passages v1.9 changed (the status line, the Rounds introduction, Rounds steps 1, 2, 3, 4, 6 and 7, the verdict paragraph, the Stranger brief's last paragraph, the Meta-review paragraph). The v1.9 procedure applies to these rounds. Branch point version and commit the count runs under: v1.9, the commit that opens round 1.

## Curve

| Round | Prose words | IR claims | Findings | Per 1,000 words | Verdict |
|---|---|---|---|---|---|
| 1 | 3,393 | 47 | 21 | 6.2 | not readable (restatement matched, no mismatch; contradictions 2; undefined terms 4) |

## Round 1, 2026-10-30

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier. Prose 3,393 words (whitespace-separated words, comments stripped, by `wordCount` in `scripts/ir.mjs`); IR 47 claims; 21 findings, 6.2 per thousand words. Restatement: matched the IR, no mismatch. Contradictions 2 (F16, F18), undefined terms 4 (F4, F6, F7, F19); verdict: not readable for RD-4. Accepted 19, declined 2.

Mismatches: none

| # | Finding (shortened) | Kind | Disposition |
|---|---|---|---|
| F1 | the v1.9 history in the Status line and the Versions sentence | SP-26 | declined: the Status line is an exempt form, and the Versions sentence is the history every version carries |
| F2 | "delivered IR-only under that same option" names nothing | SP-03 | rephrase the Status line: "under row BP-00"; no claim changed |
| F3 | "Thresholds are provisional until the evaluation corpus tunes them" names no actor | SP-18 | declined: under the SP-18 calibration, a sentence that names future work and assigns it to no one is not a duty |
| F4 | "restatement mismatch" used in step 2 before a definition | SP-04 | add C48, step 2: "A restatement mismatch is a disagreement between the stranger's restatement and the IR." |
| F5 | step 2's "relied on" sentence at 29 words with its example | SP-02 | rephrase: the example in a sentence of its own |
| F6 | "inferred" and "relation" in step 3 unlinked | SP-04 | add the links to the methodology specification's Provenance and Element kinds |
| F7 | "The fix rules" names no rules | SP-04 | rephrase C11: "The rules of this step" |
| F8 | the reviewed-IR edit sentence holds two claims | SP-01 | split C12; C49 |
| F9 | "The record marks the second fix" has no actor and no trigger | SP-18 | rephrase C15: "When the instance says a fix does not hold, the reasoning role marks ..."; C15 inferred by R7 |
| F10 | "The next round's entry states" has no actor | SP-18 | rephrase C16: "In the next round's entry, the reasoning role states ..."; C16 inferred by R8 |
| F11 | "is marked withdrawn" has no actor | SP-18 | rephrase v1.7's C14 as C50: "the reasoning role marks the finding withdrawn"; C50 inferred by R9 |
| F12 | step 6's first sentence at 28 words | SP-02 | split C17; C51 "A step-6 finding stands whatever the strangers attributed the mismatch to." |
| F13 | the script run stated twice in step 6 | SP-26 | cut: one run, after the `Mismatches:` line; C20 "Before the next round, the reasoning role applies step 6 to each claim the script reports."; C20 inferred by R10 |
| F14 | "which step 4's answer excludes" | SP-03 | rephrase v1.7's C20 as C52: "as step 4 states" |
| F15 | step 7 restates step 4's claims-check sentence | SP-26 | cut C21: "Step 7's claims check runs as in step 4." |
| F16 | the first condition counts every mismatch; the next sentence exempts a quoted own mismatch | SP-25 | rephrase C23, add C53, rephrase C25 and C26: the first condition with its one exception and one override, as one rule |
| F17 | "The texts that require an IR" opens with the exception | SP-11 | reorder: the requirement first; no claim changed |
| F18 | "The first rule whose condition holds decides" against BP-01 "always" | SP-25 | add C54, C55: rule BP-01 applies to every IR; among the rules after BP-01, the first whose condition holds decides the disposition; C55 inferred by R11 |
| F19 | "the curve" undefined | SP-04 | rephrase C34: "the per-round table" |
| F20 | "the five recorded counts" names no counts | SP-03 | add C57, C56: the counts on methodology PR #51, the IR specification's counts 1 and 2, branch point v1.4 and v1.5; C56 inferred by R12 from the release register's round counts |
| F21 | header "Record" for the dispatch log | SP-08 | rephrase: "The dispatch log"; no link pointed at the old anchor |

Signals script after the `Mismatches:` line (step 6, case 010 change 2): no recurring mismatch; no line unparsed.

Claims after fixes: 57. Prose after fixes: 3,490 words. Claims check after the fixes (base: round 1 prose): 21 changed claims, 0 missing, 0 stale.

Decided claims the fixes changed, for the owner: C15, C16 and C50 (v1.7's C14) gain the reasoning role as actor and become inferred; C20 folds case 011 change 5's run into case 010 change 2's and becomes inferred; C23, C25 and C26, with the new C53, join case 010 change 1's and case 011 change 1's texts into one rule; C55 states that the first-match rule applies after BP-01 and is inferred.
