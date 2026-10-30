# Review record: branch point v1.10

Reader of the reviewed text: RD-4 (a fresh agent session). Reviewer: a stranger, a fresh instance per round, model named per round, under the v1.10 brief the text itself defines: the prose read first, a restatement, a one-sentence restatement of each passage awaiting restatement, then the IR; SP-01 to SP-05, SP-08 to SP-11, SP-18, SP-25, SP-26 with the three calibrations of case 009; locus and fix kind per finding; verdict by the three conditions of the methodology specification, every restatement mismatch counting and an omission not counting. Disposition D3 (a specification, Normative: yes). Text reviewed: `docs/branch-point.md` whole; the IR `docs/records/branch-point-v1.10.ir.md` covers the passages v1.10 changed (the Status line, Rounds steps 1, 2, 3, 4, 6 and 7, the verdict paragraph, the Meta-review trigger, line and script paragraphs, the Meta-review history and the Versions section). The v1.10 procedure applies to these rounds.

## Curve

| Round | Prose words | IR claims | Findings | Per 1,000 words | Verdict |
|---|---|---|---|---|---|
| 1 | 3,755 | 51 | 9 | 2.4 | not readable (mismatches 0; contradiction 1, a rule gap listed for the owner; undefined term 1) |
| 2 | 3,790 | 55 | 3 | 0.8 | not readable (mismatches 0; contradiction 1 new, with round 1's finding 5 pending; undefined terms 0) |
| 3 | 3,821 | 59 | 9 | 2.4 | not readable (mismatch 1, first occurrence; contradiction 1; undefined term 1) |
| 4 | 3,852 | 63 | 9 | 2.3 | not readable (mismatches 0; contradictions 2; undefined terms 0) |
| 5 | 3,865 | 69 | 7 | 1.8 | not readable (mismatch 1; contradictions 2; undefined terms 0) |

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

Confirmation: 8 of 8 fixes hold. Not held: none. Declines accepted: 0 of 0. New defects: 2.

The instance (a6182cb868caefdad) read both files in full at fix commit c6ff827. Row 5 stays owner-pending. The instance said the proposed wording settles the mark, but step 7's confirmation and marking must also exclude a step-6 fix, and the wording's last clause named no actor; ask A2's proposed wording is revised to cover both: "At a readable verdict, the round's stranger instance confirms each fix other than a step-6 fix. A step-6 fix made in that round's fix pass stays `awaiting restatement`; the reasoning role lists its passage in the next count's round 1 brief." No text change. The two new defects, fixed IR first before round 2 opens (case 012 change 6): N1, SP-04, the IR held "fix commit" only as inferred claim C52; T8 added, proposed, and the IR's unratified terms read 1. N2, SP-18, step 7 named no duty that supplies its instance's inputs; C55 added, "At step 7, the reasoning role sends the round's stranger instance the inputs step 4 lists." (inferred, R3).

Claims check after the confirmation's fixes (base: the round 1 fix pass's prose): 1 changed claim, 0 missing, 0 stale. Claims: 55. Prose: 3,790 words. Round trip: 55 of 55.

## Round 2

Branch point version and commit the count runs under: v1.10 at commit 387dc43; round 2 reads the text at this round's opening commit, named in the brief. Prose 3,790 words; IR 55 claims; unratified terms 1 (T8, fix commit).

Passages awaiting restatement: none; v1.9's C54 matched in round 1.

Owner-pending finding carried in the brief (case 012 change 9): round 1's finding 5, the mark of a step-6 fix at a readable verdict, with ask A2's revised wording. It counts against the verdict as a contradiction until the owner decides.

Declined findings carried in the brief from v1.9's count: round 1's F3, round 2's 10, round 4's 11, round 5's N1 and round 6's 6, each with its reason.

The brief also says that the v1.10 IR lists the claims v1.10 changed only, so a sentence v1.10 did not change has no claim in it.

Forms added to the brief: none.

Signals script before the round: no signal from round 1; no line unparsed.

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier (a215d5b4788a041e9). Prose 3,790 words by `wordCount` (the stranger's hand estimate: about 4,800); IR 55 claims; 3 findings, 0.8 per thousand words. Restatement: no mismatch. Listed passages: none. Contradiction 1 new (finding 3), and round 1's finding 5 counts as a contradiction while it waits for the owner (ask A2, now with the owner); undefined terms 0; verdict: not readable for RD-4.
Mismatches: none

Omissions the stranger noted, not counted: (a) step 7's confirmation at a readable verdict; (b) step 6's first sentence; (c) step 6's signals-script order; (d) step 4's confirmation-line form; (e) "The owner may dispatch a meta-review of any text, signal or none." v1.10 changed none of the five sentences; each stands as v1.9 wrote it or earlier. Their claims stand in earlier IRs: (a) v1.9's C92; (b) v1.9's C17; (c) v1.9's C18; (d) v1.9's C95; (e) v1.6's C10.

For the ruleset review: step 6 keys a recurrence on one passage, while the signals script and the `Mismatches:` lines key it on claims. The stranger observed it; no text change.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | "The meta-reviews so far are cases 005 and 007 to 012" before the cases are linked | SP-05 | the sentence moves to the end of the history paragraph, after the sentences that link each case |
| 2 | "the inputs step 4 lists" beside the Inputs section | SP-04 | name the three items in step 7 (C55) and in the Stranger brief (C53): "its findings table, the fixed passages and the round's declined findings" |
| 3 | step 7's "fixes the round's findings" against step 3's declined findings | SP-25 | rephrase, C56: "The reasoning role fixes each accepted finding of the round in the IR and then in the prose." |

The stranger's first observation, fixed under case 012 change 4: the Stranger brief's report "has four parts" while step 2 adds the listed-passage sentences. C57: "The stranger's report has five parts in order: Restatement, Listed passages (one sentence for each listed passage), Findings, Readability, Counts."

Claims after fixes: 57. Prose after fixes: 3,814 words. Claims check after the fix pass (base: round 2 prose): 4 changed claims, 0 missing, 0 stale. Round trip: 57 of 57. IR check: 0 violations, 0 warnings.

Decided claims the fixes reworded, for the owner's list at the count's close: C53 (again), C56 (step 7's fixing sentence), C57 (the report's parts).

Confirmation: 3 of 3 fixes hold. Not held: none. Declines accepted: 0 of 0. New defects: 3.

The instance (a215d5b4788a041e9) read both files in full at fix commit 4690286. The three new defects, fixed IR first before round 3 opens (case 012 change 6): N1 (SP-03), "its findings table" in the Stranger brief took the instance as referent; C53 and R3 read "the findings table the reasoning role sends". N2 (SP-26), step 7's fixing sentence repeated step 3; C56 cut, and step 7 relies on step 3's fix order. N3 (SP-26), the five-part sentence's parenthesis repeated step 2; cut (C57).

The owner adopted ask A2's revised wording on 2026-10-30. Step 7 now reads: "At a readable verdict, the round's stranger instance confirms each fix other than a step-6 fix. A step-6 fix made in that round's fix pass stays `awaiting restatement`; the reasoning role lists its passage in the next count's round 1 brief." C58 to C60 carry it, decided (owner, 2026-10-30), with evidence E3. The limit sentence stays as it was. A2 is resolved. Round 1's finding 5 is closed as fixed by the owner's decision and is no longer pending.

Claims check after the confirmation's fixes (base: the round 2 fix pass's prose): 5 changed claims, 0 missing, 0 stale; C56 removed. Claims: 59. Prose: 3,821 words. Round trip: 59 of 59.

## Round 3

Branch point version and commit the count runs under: v1.10 at commit 387dc43; round 3 reads the text at this round's opening commit, named in the brief. Prose 3,821 words; IR 59 claims; unratified terms 1 (T8, fix commit).

Passages awaiting restatement: none.

Owner-pending findings: none; round 1's finding 5 is closed by the owner's adoption of A2.

Declined findings carried in the brief from v1.9's count: round 1's F3, round 2's 10, round 4's 11, round 5's N1 and round 6's 6, each with its reason. The brief also says that the v1.10 IR lists the claims v1.10 changed only.

Forms added to the brief: none.

Signals script before the round: no signal; no line unparsed.

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier (ab602a031857ba609). Prose 3,821 words by `wordCount` (the stranger's hand estimate: about 4,200); IR 59 claims; 9 findings, 2.4 per thousand words. Restatement: one mismatch. Listed passages: none. Contradiction 1 (finding 6), undefined term 1 (finding 9); verdict: not readable for RD-4.

The mismatch: the restatement said the signals are "checked by a signals script". C39 gives the check to the reasoning role. The stranger relied on the script paragraph's first sentence, "The script `scripts/signals.mjs` reads a review record and reports the first signal from the confirmation lines in their fixed form and the claims-check lines.", which v1.10 did not change and the v1.10 IR does not carry. First occurrence on this passage: v1.9's count had no mismatch on the meta-review check or the script paragraph. Not a step-6 passage.
Mismatches: C39

Omissions noticed, not counted: about 50 across the changed passages, among them step 2's `Mismatches:` form, step 4's confirmation-line form and partial-hold rule, step 6's structural-fix definition and script timing, the verdict paragraph's per-round record and the history of cases 010 and 011. Most are sentences v1.10 did not change, whose claims stand in earlier IRs.

For the ruleset review: the stranger could not tell whether the round's instance reads the prose before or after the claims check's fixes in step 4. Both orders can be followed; no text change.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | mismatch on C39: the script read as checking the signals | restatement | the check and the report made adjacent and explicit: "At the end of a count, the reasoning role checks the signals against the review record. The signals script, `scripts/signals.mjs`, reports the signals it can read. The reasoning role checks the second signal's declined findings raised again and the fourth signal by reading." (C61 added, inferred by R4; C43 moved beside C39) |
| 2 | "The stranger brief lists each passage" names no actor | SP-18 | rephrase C9: "In the stranger brief, the reasoning role lists each passage awaiting restatement." |
| 3 | step 3's rewording sentence at 26 words | SP-02 | the stranger's version, 23 words (C20): "... keeps the claim's source and notes the rewording as ..." |
| 4 | step 6's "the reading" | SP-03 | "the mismatched reading" (C64) |
| 5 | "Step 7's claims check runs as in step 4" names no actor | SP-18 | "The reasoning role runs step 7's claims check as in step 4." (C63) |
| 6 | the Stranger brief's "reads only the prose and the IR" against steps 4 and 7 | SP-25 | "In its round read, the stranger reads only the prose and the IR." (C65) |
| 7 | the confirmation-inputs sentence at 26 words | SP-02 | "At Rounds steps 4 and 7 the round's instance also reads the findings table, the fixed passages and the declined findings." (C53); steps 4 and 7 state the sending |
| 8 | the unparsed rule stated at the line rules and in the script paragraph | SP-26 | the script sentence cut; C42 merged into C41 |
| 9 | "process change" undefined | SP-04 | add C62 at first use: "A process change is an adopted change to how the rounds or the meta-review run." (inferred, R5); case 012's change 12, on the script, is one; changes 3 and 15 are not |

Claims after fixes: 63. Prose after fixes: 3,837 words. Claims check after the fix pass (base: round 3 prose): 8 changed claims, 0 missing, 0 stale; C42 removed. Round trip: 63 of 63. IR check: 0 violations, 0 warnings.

Decided claims the fixes reworded or merged, for the owner's list at the count's close: C9, C20 (again), C53 (again), C41 (with C42), C63 (v1.9's C21), C64, C65.

Confirmation: 8 of 9 fixes hold. Not held: 9. Declines accepted: 0 of 0. New defects: 2.

The instance (ab602a031857ba609) read both files at fix commit 504c071. Fix 9 did not hold: the definition of a process change sat after its first use, "the nineteen process changes of v1.9", one sentence earlier. Re-fixed: the definition (C62) now precedes that sentence. The two new defects, fixed IR first before round 4 opens (case 012 change 6): N1 (SP-04), "round read" undefined; C65 reads "When it reads for a round, the stranger reads only the prose and the IR." N2 (SP-03), "the signals it can read" named no set; C61 reads "The signals script, `scripts/signals.mjs`, reports the first signal from the confirmation and claims-check lines and the second signal's recurrences from the `Mismatches:` lines."

The instance also pointed at a mention of the third signal. The whole file holds one: "Case 005's change 4, a growth bound, is replaced by the third signal ...", in the record of the owner's decisions of 2026-10-27. It is history and stays as written; case 012's change 11 struck the signal from the rule.

Also in this pass, at the Orchestrator's direction: step 7's owner-adopted sentence is split at its semicolon, as the specification's count 6 split it in round 3: "A step-6 fix made in that round's fix pass stays `awaiting restatement`. The reasoning role lists its passage in the next count's round 1 brief." The claims C59 and C60 were already separate. A form split of an owner-adopted text, listed for the close; the two texts stay identical on the rule.

Claims check after the confirmation's fixes (base: the round 3 fix pass's prose): 2 changed claims, 0 missing, 0 stale. Claims: 63. Prose: 3,852 words. Round trip: 63 of 63.

## Round 4

Branch point version and commit the count runs under: v1.10 at commit 387dc43; round 4 reads the text at this round's opening commit, named in the brief. Prose 3,852 words; IR 63 claims; unratified terms 1 (T8, fix commit).

Passages awaiting restatement: none.

Owner-pending findings: none.

Declined findings carried in the brief from v1.9's count: round 1's F3, round 2's 10, round 4's 11, round 5's N1 and round 6's 6, each with its reason. The brief also says that the v1.10 IR lists the claims v1.10 changed only.

Forms added to the brief: none.

Signals script before the round: signal 1 reads one round with a fix not held (round 3), so it does not fire; no line unparsed.

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier (a8d9b82e1b02704c6). Prose 3,852 words by `wordCount` (the stranger's hand estimate: about 4,900); IR 63 claims; 9 findings, 2.3 per thousand words. Restatement: no mismatch. Listed passages: none. Contradictions 2 (findings 3 and 5), undefined terms 0; verdict: not readable for RD-4.
Mismatches: none

Omissions the stranger noted on v1.10-changed passages, not counted: fifteen, (a) to (o). One of them changed in this pass: (j), step 7's marking, now scoped to the limit by finding 3 and carried as C68. The other fourteen are sentences v1.10 did not change; their claims stand in earlier IRs: (a), (b), (d), (f) and (o) in v1.7's; (c) v1.9's C50; (e) v1.9's C18; (g) v1.9's C62; (h) v1.9's C103; (i) v1.9's C94; (k) and (l) v1.6's (C10 for (l)); (m) v1.9's C67, C70, C81 and C86; (n) v1.9's C34.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1 | step 3's no-new-rule sentence and step 6's structural-fix alternative name no actor | SP-18 | rephrase C17: "The reasoning role adds no rule in a fix beyond the changes the owner adopted for the count."; C66: "In a structural fix, the reasoning role may instead change the claim to the strangers' reading when that reading is true." |
| 2 | "findings table" used in step 4 before its definition | SP-04 | define at first use, C67: "A findings table lists the round's findings with each finding's locus and fix kind." (inferred, R6) |
| 3 | step 7's marking of each finding against the owner's step-6 rule at a readable verdict | SP-25 | scope the marking to the limit, where case 009 change 18 put it, C68: "At the limit, the reasoning role marks each finding of the final round confirmed, or unfixed when the instance did not confirm its fix." Scoping, not a new rule |
| 4 | the header "The verdict and the status lines" holds the per-round record | SP-08 | rename "The verdict, the status lines and the per-round record"; the anchor kept |
| 5 | "When it reads for a round" against the reads at steps 4 and 7 | SP-25 | C65, its third rewording: "For its restatement at step 2, the stranger reads only the prose and the IR." |
| 6 | BP-02a's "renders it" | SP-03 | "renders the normative text" (C69) |
| 7 | "claims-check line" used in the trigger paragraph before its definition | SP-04 | the definition (C40) moves into the trigger paragraph, before its first use |
| 8 | the script paragraph repeats the first-signal clause of the trigger paragraph | SP-26 | the clause cut: "The script `scripts/signals.mjs` reads the confirmation lines in their fixed form." (C70); C61 stays the one claim |
| 9 | "The meta-reviews so far are cases 005 and 007 to 012" (low confidence) | SP-26 | declined: the sentence carries C44, a decided history claim; the paragraph names the cases in different roles, and no sentence of it states the set |

Claims after fixes: 68. Prose after fixes: 3,873 words. Claims check after the fix pass (base: round 4 prose): 7 changed claims, 0 missing, 0 stale. Round trip: 68 of 68. IR check: 0 violations, 0 warnings.

Decided claims the fixes reworded, for the owner's list at the count's close: C17, C65 (again), C66, C68 (v1.9's C93), C69, C70; C40 moved.

Confirmation: 8 of 8 fixes hold. Not held: none. Declines accepted: 1 of 1. New defects: 2.

The instance (a8d9b82e1b02704c6) read both files in full at fix commit f0b9baf and accepted the decline of finding 9. The two new defects, fixed IR first before round 5 opens (case 012 change 6): N1 (SP-25), step 3's "A fix adds words only for a missing definition, referent or rule" against "adds no rule in a fix beyond the changes the owner adopted"; "or rule" cut (C71). N2 (SP-26), the locus and the fix kind stated in step 4's findings-table definition and in the Stranger brief; step 4 keeps "A findings table lists the round's findings." (C67), and the brief's sentence defines the values; R6 adjusted.

Claims check after the confirmation's fixes (base: the round 4 fix pass's prose): 2 changed claims, 0 missing, 0 stale. Claims: 69. Prose: 3,865 words. Round trip: 69 of 69.

## Round 5

Branch point version and commit the count runs under: v1.10 at commit 387dc43; round 5 reads the text at this round's opening commit, named in the brief. Prose 3,865 words; IR 69 claims; unratified terms 1 (T8, fix commit).

Passages awaiting restatement: none.

Owner-pending findings: none.

Declined findings carried in the brief: from v1.9's count, round 1's F3, round 2's 10, round 4's 11, round 5's N1 and round 6's 6; from this count, round 4's 9. Each with its reason. The brief also says that the v1.10 IR lists the claims v1.10 changed only.

Forms added to the brief: none.

Signals script before the round: signal 1 reads one round with a fix not held (round 3), so it does not fire; no line unparsed.

Stranger model: claude-haiku-5-5, a fresh instance at the frugal tier (a14a756c4fb06e7bd), reading at commit c3fbbdf. Prose 3,865 words by `wordCount` (the stranger's hand estimate: about 4,000); IR 69 claims; 7 findings, 1.8 per thousand words. Restatement: one mismatch. Listed passages: none. Contradictions 2 (findings 2 and 6), undefined terms 0; verdict: not readable for RD-4.

The mismatch: C65's round 4 wording, "For its restatement at step 2, the stranger reads only the prose and the IR.", gave the IR to the restatement; the stranger relied on step 2's "The stranger reads the prose, writes its restatement, and only then reads the IR." First occurrence on this sentence as a mismatch.
Mismatches: C65

Omissions noticed, not counted: (a) step 6's trigger, a mismatch "in any two rounds of the text's counts", is v1.9's C17; (b) the Rounds introduction's limit of ten stands in an earlier IR. Both sentences are unchanged in v1.10.

For the ruleset review: C65 took four rewordings in this count, each from a defect on the same sentence (round 3's finding 6, round 3's confirmation N1, round 4's finding 5, this round's findings 1 and 2). The sentence tried to carry the file scope and the read order at once; its purpose since v1.7 is the scope. Two reader points: step 7's "The reasoning role runs step 7's claims check as in step 4." sits after the limit's sentences, so it reads as part of the limit run; the Meta-review history runs about 450 words in one block.

| # | Finding (shortened) | Kind | Decision |
|---|---|---|---|
| 1, 2 | mismatch on C65; C65 against step 2's read order | restatement; SP-25 | C65 reworded to the scope only, its fourth rewording: "For its review, the stranger reads two files and nothing else: the prose, then the IR." |
| 3 | "Entries name claims by their claim identifiers" names no actor | SP-18 | C73: "The reasoning role names each claim in an entry by its claim identifier in the IR." |
| 4 | step 3's "as its kind does" | SP-03 | C19: "Until the owner decides, the finding counts against the verdict like a mismatch, contradiction or undefined-term finding.", as the specification reads |
| 5 | step 3's "A fix ..." sentences name no actor | SP-18 | each names the reasoning role: C74, C71, C75, C76, C77 |
| 6 | BP-05a's reason against BP-04 | SP-25 | the ruling's record (the backlog's chunk 3 row, E4) reads "reports to RD-1 or RD-3 need an IR only for a term, a decision or a register fact; review on request". The ruling covers reports to RD-1 and RD-3 only, so the reason is scoped: "... the stranger review on reports to RD-1 or RD-3 runs only on request" (C72). A text fix, not a new rule |
| 7 | the trigger paragraph repeats the script paragraph's second-signal clause | SP-26 | the clause cut from C61; the script paragraph keeps its sentence |

The C65 wording differs from the Orchestrator's suggestion, "The stranger reads two files for a round and nothing else", in its opening: "For its review" leaves the reads at steps 4 and 7 outside the sentence, which "for a round" would have caught again.

Claims after fixes: 75. Prose after fixes: 3,890 words. Claims check after the fix pass (base: round 5 prose): 10 changed claims, 0 missing, 0 stale. Round trip: 75 of 75. IR check: 0 violations, 0 warnings.

Decided claims the fixes reworded, for the owner's list at the count's close: C19, C65 (fourth rewording), C71 (again), C72, C73, C74 to C77.

Confirmation: 7 of 7 fixes hold. Not held: none. Declines accepted: 0 of 0. New defects: 1.

The instance (a14a756c4fb06e7bd) read both files in full at fix commit 7657b6a. The new defect, N1 (SP-25), fell on C65 again: "For its review, the stranger reads two files and nothing else" against the reads at steps 4 and 7, with "its review" naming no clear referent. The sentence has now failed five wordings on one adjacency, the Stranger brief paragraph beside the confirmation inputs. At the Orchestrator's direction it takes a structural fix, though step 6's trigger is a mismatch: the file-scope claim moves out of the Stranger brief paragraph into step 2, beside the read-order sentence, and the confirmation inputs move with it. Step 2 now reads: "The stranger reads the prose, writes its restatement, and only then reads the IR. In step 2, the stranger reads no file other than the prose and the IR. At steps 4 and 7, the round's instance also reads the findings table, the fixed passages and the declined findings." The Stranger brief paragraph's two sentences are cut. Reason: scope and order now sit together, and the extension at steps 4 and 7 is stated in the same place. C65 and C53 carry the rewording and move notes. The step 2 passage is marked `awaiting restatement` and listed in round 6's brief for a one-sentence restatement.

Claims check after the confirmation's fix (base: the round 5 fix pass's prose): 2 changed claims, 0 missing, 0 stale. Claims: 75. Prose: 3,888 words. Round trip: 75 of 75.

## Round 6

Branch point version and commit the count runs under: v1.10 at commit 387dc43; round 6 reads the text at this round's opening commit, named in the brief. Prose 3,888 words; IR 75 claims; unratified terms 1 (T8, fix commit).

Passage awaiting restatement, listed in the brief for a one-sentence restatement (case 012 change 4): step 2's read scope with the read order and the confirmation inputs (C65, C53), the structural fix after round 5's confirmation.

Owner-pending findings: none.

Declined findings carried in the brief: from v1.9's count, round 1's F3, round 2's 10, round 4's 11, round 5's N1 and round 6's 6; from this count, round 4's 9. Each with its reason. The brief also says that the v1.10 IR lists the claims v1.10 changed only.

Forms added to the brief: none.

Signals script before the round: signal 1 reads one round with a fix not held (round 3), so it does not fire; no line unparsed.
