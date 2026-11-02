# Review record: branch point

This record logs the review rounds of the branch point from version 1.11 on, one count per version. The reasoning role writes it during the rounds, and the human owner reads it to accept a version.

Reader of the reviewed text: RD-4 (a fresh agent session) implementing or running the pipeline, and the human owner setting thresholds. Each brief names the owner as the human reader of the paraphrase test. Reviewer: a stranger, a fresh instance per round started from `.claude/agents/reviewer.md`, model named per round. Disposition D3 (a specification, Normative: yes). Text reviewed: `docs/branch-point.md` whole; its IR, `docs/branch-point.ir.md`, holds every claim of the text. The records of v1.4 to v1.10 stay under `docs/records/`.

## Count 1, 2026-11-02: branch point v1.11

Inputs: the owner's decision of 2026-11-02 on [evaluation case 015](../eval/cases/015-ruleset-simplification-review-2026-11-02.md): changes 1 to 30 adopted, 31 to 35 declined. Under change 29's table, v1.11 carries changes 1, 3, 4, 7 to 13, 24, 26 and 28. It links the specification for the others. The specification's count 7 runs in parallel under these rules.

Branch point version and commit the count runs under: v1.11 at commit 12ff480 on branch `branch-point-v1.11-case-015`, the text with its scripts and style specification. The rounds run under v1.11's seven steps, as v1.9's and v1.10's counts ran under the version they reviewed.

Choices recorded for the owner, where the case left a choice open (the smaller text taken):

1. The IR sits beside the prose as `docs/branch-point.ir.md` (change 13), and this record beside it, so the lint's review-record check finds it. One record holds every later count.
2. The first claims check runs against an empty base: no accepted IR of the whole text exists (change 13).
3. The history record holds v1.10's two history sections unedited, the six old render maps, and one paragraph on cases 013 to 015 (change 8).
4. The restatement stands in the round's entry as a `Restatement:` line and a quoted block, the form `scripts/lint.mjs --restatement` reads (changes 26 and 27). The repeated-sentence check flags a restatement sentence of five content words or more when 70 percent of them stand in one prose sentence.
5. SP-27 binds documents under `docs/` outside `docs/records/`, and evaluation cases. A review record, an IR and a file opening with a supersession marker are exempt. Its gloss check counts a vocabulary row as a coined name when the row's definition site is not the methodology's.
6. Steps 2 and 4 drop two v1.10 sentences that the case's draft also leaves out. The first is the record's quote of each relied-on sentence. The brief still asks the stranger to quote that sentence. The second sentence states, in the next round's entry, whether a listed passage matched.

Step 1, before round 1, by `npm run check -- docs/branch-point.md --empty-base`:
Checks: 0 sentences over 25 words; 141 of 141 claims mapped; 141 claims changed, 0 missing, 0 stale.

Declines carried in the round 1 brief: v1.9 round 1's F3 (SP-18), "Thresholds are provisional until the evaluation corpus tunes them." Its text stands unchanged.

Not carried, because the text under them is gone or rewritten:

- v1.9 round 2's 10, step 7's marking sentence;
- v1.9 round 4's 11, the decisions record, now in the history record;
- v1.9 round 5's N1, the record's quote duty, cut;
- v1.9 round 6's 6, the brief's opening, reworded;
- v1.10 round 4's 9, the history sentence, moved;
- v1.10 round 9's 2, the term step-6 fix, dropped.

Passages awaiting restatement: none. v1.10's count closed with no open mark.

Forms added to the brief, carried from the v1.10 and count 6 briefs:

- an HTML comment in a fixed form, such as the render map;
- a numbered step that opens with its short name, such as "Check the text."

Neither bears on a finding yet.

Signals script before the round: no round recorded yet; nothing to read.

### Curve, count 1

| Round | Prose words | IR claims | Findings | Per 1,000 words | Verdict |
|---|---|---|---|---|---|
| 1 | 2,396 | 141 | | | pending |

### Round 1, count 1, 2026-11-02

The round reads the text at its opening commit, named in the brief. Prose 2,396 words, by `wordCount` in `scripts/ir.mjs` with comments stripped. IR 141 claims. Unratified terms 0. Human reader for the paraphrase test: the human owner. Stranger: pending.
