# Case 015: review of the pipeline's ruleset for simplification

This case proposes a smaller and plainer set of rules for how this project writes, checks and reviews its texts. The human owner reads it to decide which changes to make before the next reviews start.

Instance of the [Evaluation case](../README.md) type. Performed 2026-11-02 by a fresh communication-pipeline session with no part in the rounds it reads. The owner dispatched it on 2026-11-02. The owner asked for the review on 2026-10-30, because the ruleset grows a lot and may hold room to simplify. The [Backlog](../../docs/backlog.md) row is "Review of the pipeline's ruleset for simplification". The case also carries the [meta-review](../../docs/vocabulary.md#def-meta-review) of the count on K-003 (the Backlog is the single source of progress truth). The owner deferred that meta-review to this review on 2026-11-02.

| Field | Value |
|---|---|
| Case | 015 |
| Source text date | 2026-11-01, [branch point](../../docs/branch-point.md) v1.10 as the owner accepted it |
| Reader addressed | the fresh agent session and the human owner that the branch point's Reader line names |
| Origin | the Backlog row above; the owner's adopted changes of [case 013](013-meta-review-k003-proposal-count-1-2026-10-30.md) (changes 1, 2, 3 and 5) and case 014 (changes 1 to 8), whose landing waits on this review; the owner's text-quality review of 2026-11-01 |
| Through the pipeline | no: a review of the rules, not a text under rounds |
| Graded by | a fresh communication-pipeline session with no part in the rounds |

## Source text

Not quoted. Read through git:

- This repository at `origin/main`, commit 74db7bc: `docs/style-spec.md`, `docs/readers.md`, `docs/ir-schema.md`, `docs/term-lifecycle.md`, the eight scripts, `.claude/agents/reviewer.md` and the [review records](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-review-record) of v1.4 to v1.9. A review record is the file that logs a text's rounds.
- Branch `branch-point-v1.10-accepted`, commits 55ef13f (the owner's acceptance of v1.10) and 4726c3d: `docs/branch-point.md`, `docs/vocabulary.md`, `docs/records/branch-point-v1.10.ir.md` and its review record.
- Branch `meta-review-case-014`, commit 7c78044: case 014 with the owner's decision. Branch `case-013-decision`, commit 330c8b2: case 013 with the owner's decision. Pull requests #27, #28 and #29 carry these three branches. `main` holds none of them yet.
- The methodology at `origin/main`, commit be5f993: `docs/intermediate-representation.md` with its `.ir.md` and `.review.md` (counts 4, 5 and 6), `docs/style.md`, `docs/rules/prose.md` and `docs/vocabulary.md`.
- The K-003 count's record: `docs/records/k-003-planning-execution-model.review.md` on the methodology's branch `k-003-count-1-rounds`, commit c4b4eb0.
- methodology-tools at `origin/main`, commit ecb507c: `src/style.ts`, for the sentence-length check.

Methods. "My word count" is `wordCount` in `scripts/ir.mjs` on a file with its HTML comments stripped. "Body words" leave out heading lines. "My claim count" is the number of claim elements that `parseIR` in `scripts/ir.mjs` finds. [Lint](../../docs/vocabulary.md#def-lint) figures come from `node scripts/lint.mjs` at commit 74db7bc. "Estimate" marks a number I did not count, with its basis.

## Findings

### The words this case uses

The ruleset is the set of documents and scripts that say how a text is written, checked and reviewed here. A coined name is a term that this project or the methodology defined for itself, not plain English. The coined names this case uses most are glossed here, at their first use:

- The [branch point](../../docs/branch-point.md) is this project's document that decides which checks a text gets, and how its review rounds run.
- The specification is the methodology's [intermediate-representation specification](https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md). Every project that writes its texts IR first follows it.
- An [IR, an intermediate representation,](../../docs/vocabulary.md#def-intermediate-representation) is the numbered list of a text's terms and claims, written before the prose. A claim identifier such as C65 names one claim.
- The [stranger](../../docs/vocabulary.md#def-stranger) is a fresh agent [reviewer](../../docs/vocabulary.md#def-reviewer) with no part in the conversation. The stranger brief is the instruction each round's stranger receives.
- The [reasoning role](../../docs/vocabulary.md#def-reasoning-role) is the agent role that writes the IR and the prose, fixes findings and runs the rounds.
- A [round](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-round) is one stranger's reading of a text, the fixes that follow, and that stranger's check of the fixes.
- A [count](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-count) is the run of rounds on one version of a text, up to a [limit](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-limit) of ten.
- A [restatement](../../docs/vocabulary.md#def-restatement) is the stranger's own account of the text, at most 200 words. A restatement mismatch is a point where the restatement disagrees with the IR.
- An [omission](../../docs/vocabulary.md#def-omission) is a claim the restatement leaves out. An omission is not a mismatch.
- The verdict is readable when a round finds no mismatch, no contradiction and no undefined term.
- A [fix pass](../../docs/vocabulary.md#def-fix-pass) is the fixes of one round's findings. The fix commit is the commit that holds them. At [confirmation](https://github.com/majodali/methodology/blob/main/docs/vocabulary.md#def-confirmation), the round's stranger says whether each fix holds. A [new defect](../../docs/vocabulary.md#def-new-defect) is a defect a fix introduces.
- A [structural fix](../../docs/vocabulary.md#def-structural-fix) moves a sentence instead of rewording it. The rounds owe one to a mismatch that recurs. A [step-6 fix](../../docs/vocabulary.md#def-step-6-fix) is that fix, and it stays [awaiting restatement](../../docs/vocabulary.md#def-awaiting-restatement) until a later stranger restates its passage. The brief lists each such passage, a listed passage, for a one-sentence restatement.
- The [claims check](../../docs/vocabulary.md#def-claims-check) is `scripts/claims-check.mjs`. It looks for a prose sentence that carries each changed claim.
- A meta-review signal is a pattern in a review record that suggests the process needs a look. The specification defines three. The signals script, `scripts/signals.mjs`, reads the first signal and part of the second from the record.
- The review record holds lines in fixed forms. A `Mismatches:` line names the claims each mismatch touched. A `Confirmation:` line counts the fixes that held. A `Meta-review:` line says whether a meta-review is due.
- The [lint](../../docs/vocabulary.md#def-lint) is the deterministic checker `scripts/lint.mjs`. The [style specification](../../docs/vocabulary.md#def-style-specification), `docs/style-spec.md`, holds the style rules from SP-01 (one claim per sentence) to SP-26 (excess words). The lint and the stranger apply them.

"Step" means a step of the branch point v1.10's Rounds section. Claim identifiers collide between texts, so this case names the text with each one.

### What the ruleset holds now

The working ruleset is the eight files below: the files a round reads or a role follows today.

| File | Words | What it does | Source |
|---|---|---|---|
| `docs/branch-point.md` v1.10 | 3,982 | dispatch rules; the seven round steps; the stranger brief; meta-review signals; history | my word count at 55ef13f |
| the specification | 4,303 | the IR's form; rendering; the verdict; rounds; signals; history | my word count at be5f993 |
| `docs/style-spec.md` | 1,777 | 26 style rules, SP-01 to SP-26 | my word count; the rule table |
| `docs/vocabulary.md` | 1,561 | 43 term rows | my word count and row count at 55ef13f |
| `docs/readers.md` | 1,270 | the five readers | my word count |
| `docs/ir-schema.md` | 2,182 | the IR schema v1.4 | my word count |
| `docs/term-lifecycle.md` | 710 | how a term is linked and ratified | my word count |
| `.claude/agents/reviewer.md` | 623 | the reviewer agent's own brief | my word count |
| Total | 16,408 | | my arithmetic |

`docs/readers.md`, `docs/ir-schema.md` and `docs/term-lifecycle.md` each open with a marker. Each marker says a methodology document superseded the file on 2026-10-26. The three skills under `.claude/skills/` and the [paraphraser](../../docs/vocabulary.md#def-paraphraser) agent still point the roles at them.

The branch point grew from 1,626 words at v1.5 to 3,982 at v1.10. Source: my word count at commits b613adb, 12e17c3, c53d682, d9947bb, 17befa3 and 55ef13f.

| Version | v1.5 | v1.6 | v1.7 | v1.8 | v1.9 | v1.10 |
|---|---|---|---|---|---|---|
| Words | 1,626 | 2,124 | 2,781 | 2,831 | 3,921 | 3,982 |

Where the v1.10 words sit, in body words. Source: my count by section at 55ef13f.

| Part | Body words |
|---|---|
| Rounds, the seven steps | 1,437 |
| The verdict and the per-round record | 101 |
| Meta-review: trigger, line and script paragraphs | 364 |
| Meta-review: the history paragraph and the owner's decisions | 608 |
| Stranger brief | 345 |
| Rules and Why each rule | 395 |
| Status, Purpose, the texts that require an IR, Inputs, Dispositions | 439 |
| Versions and the dispatch log | 220 |

### Rules stated in two places

| Topic | Places | Cost on record |
|---|---|---|
| ten round rules: the restatement mismatch, the omission, the listed passages, the fix rules, the fix pass, the claims check, the fix commit, new defects, the readable verdict, the limit | branch point steps 2 to 7; the specification's Stranger rounds section | fixes crossed between the two texts five times; the marking of final-round findings now reads two ways (case 014, observations 4 and 12) |
| the texts that require an IR | a branch point section; the specification's section of that name | v1.9's residue N1: the readers RD-1 (the owner in conversation) and RD-3 (a delegating agent) named twice, and the catalog link twice (v1.9 review record, round 8) |
| the meta-review trigger, the signals and the `Meta-review:` line's values | the branch point's Meta-review section; the specification's Meta-review section | fixes crossed: the branch point's C81, its rule for the `not indicated` value, took the specification's wording (case 014, observation 12) |
| the words a fix may add | step 3: a definition, a referent, a state header, a rewording note; the specification: a definition, a referent | v1.10 round 6's contradiction sat on step 3's list (case 014) |
| three calibrations and one reading of a style rule | the stranger brief; the [style specification's rule table](../../docs/style-spec.md#rule-table) rows SP-01 (one claim per sentence), SP-05 (identifiers named), SP-18 (a duty names its actor) and SP-26 (excess words) | 9 sentences and 144 words in the brief (my count) |
| 20 of 26 style rules | the style specification; the methodology's [prose rules](https://github.com/majodali/methodology/blob/main/docs/rules/prose.md), W-008 (reports map their deliverables), K-010 (superseded content is never silently readable) and K-011 (found contradictions are marked) | the lint column drifted (the next table) |
| the dispatch conditions | the branch point's Rules table; the specification's Rendering conditions | none found; the branch point names the specification's rows as its source |
| the stranger's brief | the branch point's Stranger brief; `.claude/agents/reviewer.md` | the agent file names branch point v1.3 and a three-part report, and the brief asks for five parts |
| the readers, the schema, the term rule | the three superseded files; the methodology's style guide, the specification and its rule P-008 (terms are defined once and linked) | none found |

The specification also points back into this project. Its rule sections link seven of this repository's files or rows (my count of its links at be5f993). They are the stranger brief, three vocabulary rows, the claims check, the signals script and the corpus README.

### Lints against the rules they check

`scripts/lint.mjs` runs 26 checks: 15 IR checks and 11 style checks. Source: my count of the check identifiers in the script.

| Measure | Value | Source |
|---|---|---|
| style rules whose Check column names a lint | 18 | the style specification's rule table |
| of those, rules the lint checks | 11, from SP-02 (sentence length) to SP-24 (a term link resolves) | the script |
| rules whose named lint the script does not run | 7: SP-01 (one claim per sentence), SP-04 (terms defined), SP-06 (no bare identifiers), SP-12 (register rows), SP-14 (reports to an agent), SP-16 (reader statement), SP-22 (supersession markers) | the script |
| a rule whose lint disagrees with its row | SP-02: the row warns over 25 words, the lint over 35 | the row; the script |
| `mtool style`, the methodology-tools checker | runs all 18, with the same 35-word warning | `src/style.ts` at ecb507c |
| sentences of 26 to 35 words, listed only with `--verbose` | 276 | the lint at 74db7bc |
| of those, in `docs/records` and `eval/cases` | 232 | the lint at 74db7bc |
| warnings across the repository | 1,246, in 57 files | the lint at 74db7bc |
| dispatch rules `scripts/dispatch.mjs` implements | 9 of 10; row BP-00 (IR-only documents) is missing | its header comment; the Backlog |

### What the records show

1. A version meant to simplify still grew. Case 012 estimated a net cut of about 250 words. The adopted edit cut 166, and the count's fixes then added 195 (case 014, judgement d).
2. The branch point's history sections drew late findings: its history paragraph and its subsection on the owner's decisions. On v1.10, 12 of 59 findings sat there, with all 3 fixes not held (case 014, judgement c). So did round 8's only finding that counted against the verdict.
3. The read-scope sentence, C65 of the v1.10 IR, took six wordings in rounds 3 to 6. It stated a global "only" that steps 4 and 7 broke. A move into step 2 settled it (case 014, judgement c).
4. Step 2 holds 304 words in one list item (my count).
5. Step 6 keys a recurrence on a passage, while `scripts/signals.mjs` keys it on a claim (the v1.10 record, round 2). The K-003 count shows the gap. Its mismatches named C8 and C9 in round 1 and C10 in round 3, all in one line of prose. The script reported no signal.
6. Two passages of the specification drew mismatches in counts 4, 5 and 6. The meta-review subject passage, C104 of its IR, drew four, from count 4 round 1 to count 6 round 1. It also drew them in count 1's rounds 5 and 6. Count 6's stranger read the signals as starting the meta-review. The Provenance opening drew four more, on C44 and on C260. Source: the record's curve and `Mismatches:` lines.
7. The claims check ran about 65 times in the counts of cases 012 and 014 and the K-003 count. It found no prose drift. It reported 5 stale claims, none of them a prose drift (case 012, observation 13, and case 014, observation 2). It also reported one claim below its match floor before the K-003 round 1 (the K-003 record).
8. No record I read ever wrote `Meta-review: unparsed`. The signals script reports unparsed lines only on the v1.4 to v1.7 records. Those records predate the line forms the script reads (my run of the script on each record).
9. Case 014's counts had 5 findings on sentence length (its observation 1). Case 013's count had 15 (its observation 1). Each sat on a sentence of 26 to 35 words. The lint lists such sentences only with `--verbose`.
10. The vocabulary gained 20 of its 43 rows between 2026-10-27 and 2026-11-01. Eighteen rows name the branch point as where the term is defined or practised. v1.10 links 35 distinct terms (my count at 55ef13f).
11. No review record keeps the stranger's restatement. Each v1.10 round entry records only whether it held a mismatch. The K-003 record says the stranger's report is held outside the record. Every v1.10 round used one small model, as did the specification's count 6 round 1 (the round entries).
12. The K-003 round 4 stranger made one call outside the two files its brief allowed (the K-003 record, round 4). `.claude/agents/reviewer.md` grants reading tools only. So that stranger did not run under the agent file's tool list.
13. The two IRs give one set of adopted changes two provenances. The branch point's IR marks them decided, the specification's proposed (case 014, observation 5). The v1.10 IR covers only the passages v1.10 changed. Strangers reported about 50 omissions against claims it lacks in round 3 (case 014, observation 6).
14. The v1.10 owner list asked the owner to ratify 31 reworded and 7 added decided claims. The owner ratified them as one item (the v1.10 record, owner items).
15. No ruleset document opens with what it is for and who reads it. Each of the seven opens with a Status line (my reading of each first paragraph). The branch point's Purpose section holds 48 words and five links, each to a coined name.

### The K-003 count, the deferred meta-review

The subject is count 1 of the methodology's K-003 amendment. Four rounds ran under branch point v1.9, and round 4 read readable.

| Round | Prose words | IR claims | Findings | Mismatches | Confirmation |
|---|---|---|---|---|---|
| 1 | 261 | 43 | 8 | C8, C9 (own) | 2 of 3 hold |
| 2 | 268 | 43 | 5 | C2 (own) | 2 of 2 hold |
| 3 | 278 | 44 | 2 | C10 (own) | 0 of 0 |
| 4 | 251 | 44 | 1 | none | 1 of 1 hold |

Source: the record's curve and its `Mismatches:` and `Confirmation:` lines. "Own" marks an [own mismatch](../../docs/vocabulary.md#def-own-mismatch), one the stranger put down to its own restatement.

My reading. The process worked. Round 3's structural fix moved the declaration out of the rule's Cites line, and round 4's restatement matched. Signal 2 fired on the record's reading of the passage, not on the script (observation 5). Under v1.10, every mismatch counts. Rounds 1 and 2 also held contradictions or undefined terms, so no verdict changes. Under case 014's change 4, signal 2 would not fire. The count asks for no change beyond changes 3 and 23 below. Its `Meta-review:` line can read delivered, with a link to this case.

### The owner's two questions

The owner's text-quality review of 2026-11-01 observed this: the rules reward local precision, such as 25 words, one claim and every identifier named. Agent strangers tolerate jargon, because they read the IR next. So texts pass as readable that a cold human reader cannot paraphrase.

The first question asks for a paraphrase test in the readable verdict. The stranger would restate the text without any term the text introduces, for a human reader the brief names. A passage that can only be repeated would fail.

- For it. The verdict asks for no mismatch with the IR, and a near-copy of the prose passes that. The methodology's [readability test](../../docs/vocabulary.md#def-readability-test) for a fresh agent asks it to state the document's terms, which rewards repeating them. The branch point's Reader line names the human owner too, and no round tests that reader. No record keeps a restatement, so nobody can check how plain one was (observation 11).
- Against it. A fourth condition can lengthen counts toward the limit. An agent writing for an imagined human is still an agent. A wording rule without a mechanical check adds one more judgement call.
- What would make it testable. The record keeps each restatement as written. A script lists any introduced term the restatement uses. The script also flags a restatement sentence whose content words mostly repeat one prose sentence. The claims check's overlap measure can score that.

The second question asks for a plain-purpose sentence on every document and a gloss on every coined name. A document would open with two sentences, with no identifiers, saying what it is for and who reads it. Each coined name would get a one-line gloss at its first use. The link lint would check both.

- For it. Observation 15. A cold reader of the branch point meets 35 linked terms (observation 10). A gloss lets that reader keep reading without following each link.
- Against it. A gloss states a definition a second time, so it can drift from its vocabulary row. Glossing each of v1.10's 56 term links would add about 390 words (estimate: my count of the links, at about seven words a gloss).
- What would keep the cost down. Gloss once per document, not per section. Gloss only names this project coined, and leave methodology terms to their links. Use fewer coined names, as change 12 proposes.

## My judgement

a. Where a rule belongs. A rule a reader needs to judge a round's outcome belongs in the specification. Those rules are the verdict, the fix rules, confirmation, the limit and the signals. A rule about how this project carries a round out stays in the branch point. Those rules are which script runs, which line the record holds, and in what order. Under that test, steps 2, 3, 4 and 7 mostly restate the specification. The specification, in turn, names this project's scripts and record lines in seven places.

b. Why the ruleset grows. Each meta-review adds rules to two texts. Each count's fixes add words to both. The history sections then record the growth inside the reviewed text, where the next stranger reads it. Removing the second statement of each rule removes most of the surface that grows.

c. The cold reader. The owner's observation and observations 10, 11 and 15 point one way. The rules check sentences and claims. Nothing checks whether a human can say what the whole text is for. The paraphrase test measures that outcome. The gloss and the purpose sentence help writers reach it.

d. The cost of a rewrite. A rewritten Rounds section is new text to its strangers. Case 006 rewrote the specification from a full IR. Its round 1 found 9.0 findings per thousand words, and it read readable only at round 10. A smaller text with fewer coined names should do better. The count could still reach the limit.

## Measures

Before and after. "After" is counted where the text exists, in the appendix's sizing draft, and estimated elsewhere with its basis.

| Measure | Before | After | Source |
|---|---|---|---|
| Branch point words | 3,982 | about 2,000 | my word count at 55ef13f; after: the parts kept as they are (about 960), the Purpose (about 60), the brief without its 144 struck words (about 220), the appendix (717) and headings (about 45) |
| Rounds, verdict and meta-review parts | 1,902 body words | 717 | my count; the appendix |
| History sections in the branch point | 608 body words | none; moved to a history file, a record outside the reviewed text | my count |
| Branch point IR | 89 claims, changed passages only | about 130 claims, whole text | the v1.10 IR; after: an estimate at the specification's 15.5 words per claim (case 014, judgement d) |
| Specification words | 4,303 | about 3,950 | my word count; after: an estimate, its History's 347 body words out and other edits about even |
| Specification IR | 278 claims | about 265 | my claim count; after: an estimate, the History's 23 claims out and about 10 claims in |
| Style specification words | 1,777 | about 800 | my word count; after: an estimate for 20 one-line rows and 6 full rows |
| Working ruleset words | 16,408 | about 8,400 | the sums above; after: the three superseded files leave, the reviewer agent falls to about 100 words, the vocabulary stays |
| Topics stated in two places | 9 groups, holding 20 style rules and 10 round rules among others | 1, the dispatch conditions | the duplicates table |
| Style rules with full text | 26 | 6, or 7 with change 28 | the rule table |
| `Meta-review:` line values | 4: pending, unparsed, not indicated, delivered | 3 | the specification's Meta-review line |
| Terms the branch point links | 35 | about 17 | my count; after: an estimate from the appendix and the kept parts |
| Lint checks | 26 | 26, or 29 with changes 27 and 28 | the script |
| Style rows whose lint does not match | 8 | 0 | the lints table |
| Dispatch rules implemented | 9 of 10 | 10 of 10 | the script |
| Scripts | 8 | 9, with `scripts/check.mjs` | `scripts/` |

## Outcome

Proposed changes, in eight groups. The owner can answer "go" to a group. "v1.11" means the next branch point version. "Count 7" means the specification's next count. Each change says where it lands and what it rests on.

Group A: land the adopted changes of cases 013 and 014.

1. Case 014 change 1 lands as one sentence-length threshold. `scripts/lint.mjs` warns over 25 words, and the SP-02 row drops its "flag over 35". Steps 1 and 5 of v1.11 run the lint after every fix pass. The owner carries the 25-word threshold to methodology-tools' `src/style.ts`. Evidence: observation 9. Recommended.
2. Case 014 changes 2 and 3 land in count 7's first signal, in `scripts/signals.mjs` and in `scripts/claims-check.mjs`. Signal 1 reads fixes not held, and nothing else. The unparsed-line rule for a round with no claims-check line goes too. The claims check ignores a claim's `evidence:` field. Evidence: observation 7. Recommended.
3. Case 014 change 4 lands as adopted. A recurrence is keyed on a claim, in count 7 and in v1.11's step 5. The script already keys so. The K-003 count shows the cost: a recurrence on one line under different claims goes unreported (observation 5). The reasoning role can still choose a structural fix by judgement. Recommended.
4. Case 014 change 5 lands in v1.11's step 5. The fix commit holds the fix pass and every fix the checks call for. This settles the step-4 read order the Backlog row names. Recommended.
5. Case 013 changes 1, 2 and 3 land in count 7 only, and v1.11 links them. Change 1 sends to the owner, mid-count, any fix that would change a decided claim. Change 2 adds a Terms section for borrowed terms. Change 3 adds to the IR each term a fix brings in. Evidence: judgement a. Recommended.
6. Case 013 change 5 goes to the project-orchestrator's Backlog when this review lands. It carries the pipeline's record lines into that project's reviewer contract. The lines are the table in change 7. Recommended.

Group B: branch point v1.11.

7. The Rounds section becomes seven short steps of this project's own procedure. Each step names its action, the script it runs and the record line it writes. One table gives the five record lines. Every rule the specification states is linked, not restated. Each step names what the stranger reads in that step, with no global "only". This settles the read-scope sentence's six wordings. Step 5's carried declined findings join the brief step. This lands case 014 change 7. Evidence: observations 2 to 4; judgement a. Size: 1,902 body words fall to 717 (the appendix). Recommended.
8. The history sections move to `docs/records/branch-point-history.md`, outside the rounds, with one linking sentence. The Versions table stays. The six old render maps, which are HTML comments, leave the prose. This lands case 014 change 6. Evidence: observation 2. Recommended.
9. The section "The texts that require an IR" is struck. The Purpose links the specification's section of that name instead. Row BP-04 (readers [RD-4 and RD-5](https://github.com/majodali/methodology/blob/main/docs/style.md#readers)) drops its catalog link, which the Inputs table carries. This settles v1.9's residue N1. Evidence: the duplicates table. Recommended.
10. The Meta-review section shrinks to one paragraph. The paragraph says when the script runs, what the script reads and what the reasoning role reads. The trigger, the signals and the line's values are linked. Evidence: the duplicates table. Recommended.
11. The stranger brief loses the nine sentences that restate the style rows and calibrations, 144 words. The brief cites the rows instead. Evidence: the duplicates table. Recommended.
12. The v1.11 text drops eight coined names. They are own mismatch, [re-fix](../../docs/vocabulary.md#def-re-fix), process change, findings table, declined finding, step-6 fix, present state and target state. Each becomes a plain phrase, moves out with its passage, or gives way to structural fix. Their vocabulary rows stay, and each row's [definition site](../../docs/vocabulary.md#def-definition-site) points to where the term now stands. Row BP-05a's "ratification ask", undefined at v1.10 round 9, reads "an ask to ratify the proposed terms". Round 9's two other notes sit in the history sections, which change 8 moves. Evidence: observation 10; the three undefined terms of v1.10 round 7 (case 014). Recommended.
13. v1.11 carries a whole-text IR: an IR that holds every claim of the text, not only the changed passages. It sits beside the prose as `docs/branch-point.ir.md`. This lands case 014 change 8. Its shape:
    - one claim per asserting sentence and per table row, with one [cluster](../../docs/vocabulary.md#def-cluster) per step, so the [render map](../../docs/vocabulary.md#def-render-map)'s paragraphs match the steps;
    - claim numbers from C1 in document order, with the older IRs kept in `docs/records/` as the record;
    - each carried claim decided, with its source;
    - each claim that renders an adopted change decided, naming the owner, the date, the case and the change, in both IRs;
    - a Terms section listing every term the prose uses, with its definition site;
    - a first claims check against an empty base, as the K-003 count ran one.

    Evidence: observations 7 and 13. Recommended.

Group C: specification count 7.

14. The two rules that read two ways are settled in the specification. A readable round's findings are marked confirmed or unfixed in the review record, as at the limit. The words a fix may add are a definition, a referent, a state header and a rewording note. Evidence: the duplicates table; case 014, observation 4. Recommended.
15. Five rules the branch point holds and the specification lacks move into the specification, in plain words:
    - the structural fix owed to a recurring mismatch;
    - the header move that separates what is done now from what a text aims at;
    - the [connective prose](../../docs/vocabulary.md#def-connective-prose) a fix keeps;
    - the rules for an edit, outside a round, to a reviewed IR;
    - a fix that holds in part is not held.

    Evidence: judgement a. Recommended.
16. This project's scripts and record lines leave the specification. They are the claims check and its record line, the [unparsed line](../../docs/vocabulary.md#def-unparsed-line) and the signals script's name. The links to the stranger brief and the step-6 fix go too. The specification says instead that the project's round procedure names its checks and record lines. Evidence: the seven links. Recommended.
17. The meta-review passage is rewritten. At a count's end the reasoning role reports the signals that fired, or the limit. The owner decides whether a meta-review runs. The `Meta-review:` line takes three values: pending, not indicated and delivered. The value unparsed is struck. The signals script stops with an error on a line it cannot read, and the reasoning role corrects the line. Evidence: observations 6 and 8. Recommended.
18. The Provenance opening keeps count 6's form, a column per element kind. Count 7's round 1 tests it with a fresh restatement. Evidence: observation 6; case 014, observation 8. Recommended.
19. The owner's acceptance of a text ratifies its reworded decided claims, unless the owner names one. Evidence: observation 14. Recommended.
20. The specification's History leaves the reviewed text, as case 014 change 6 left to the methodology. This case suggests the specification's review record as its home. Recommended.

Group D: the supporting files.

21. The style specification keeps full text only for its six rules of its own, with their calibrations. They are SP-17 (problem before mechanism), SP-18, SP-19 (a measurement states its question), SP-21 (quotes are exact), SP-25 (contradiction) and SP-26. Its other 20 rows become one line each: the identifier, a link to the methodology rule, and the check. The Check column names a lint only where `scripts/lint.mjs` runs it. The seven rows it does not run name `mtool style` as their check. Evidence: the lints table. Recommended.
22. The skills and agents read the methodology's homes for the readers, the schema and the term rule. `docs/readers.md`, `docs/ir-schema.md` and `docs/term-lifecycle.md` stay unedited, as records. Evidence: their supersession markers. Recommended.
23. `.claude/agents/reviewer.md` keeps its tools and model lines. For everything else it points to the branch point's brief. Each round starts its stranger from that agent file. Evidence: observation 12; the duplicates table. Recommended.

Group E: scripts.

24. A new `scripts/check.mjs`, run as `npm run check`, runs the lint, the round trip and the claims check on the text under review. It prints one `Checks:` line for the record. That line names the long sentences, the unmapped claims, and the missing or stale claims. Steps 1 and 5 of v1.11 run it. Each script change gains its tests in `scripts/test.mjs`. Evidence: observations 7 and 9. Recommended.
25. `scripts/dispatch.mjs` implements row BP-00, which closes its Backlog row. Evidence: the lints table. Recommended.

Group F: the owner's two questions.

26. The paraphrase test becomes the verdict's fourth condition, from count 7 and v1.11's count. The brief names the human reader from the text's Reader line. The stranger writes the restatement for that reader without any term the text introduces. A passage the stranger cannot restate without such a term is a finding that counts against the verdict. The record keeps each restatement as written. The owner carries a matching edit of the fresh agent's readability test to the methodology's style guide. Evidence: the first question above; judgement c. Recommended.
27. `scripts/lint.mjs` gains a `--restatement` check for change 26. It lists any introduced term that a recorded restatement uses. It flags a restatement sentence whose content words mostly repeat one prose sentence. Recommended with change 26.
28. A new pilot-only style rule, SP-27 (plain purpose and glosses), asks for two things. Each document under `docs/` and each evaluation case opens with a plain purpose of at most two sentences, with no identifier, code or link. Each name this project coined carries a short gloss at its first use in the document. Methodology terms keep their links. `scripts/lint.mjs` checks both. Evidence: the second question above; observation 15. Recommended in this narrowed form.

Group G: landing.

29. Branch point v1.11 and count 7 land as one pair, in one task, with their counts run in parallel. Both run under this case's changes as the owner adopts them. The order of work:
    - the owner decides this case;
    - the reasoning role writes v1.11's whole-text IR, then its prose;
    - count 7's IR edits follow, then its prose;
    - the style specification, the agents, the skills and the scripts change, with their tests;
    - the two counts run.

    What each text carries:

    | Text | Changes | If adopted |
    |---|---|---|
    | branch point v1.11 | 1, 3, 4, 7 to 13, 24 | 26, 28 |
    | specification count 7 | 2, 3, 5, 14 to 20 | 26 |
    | scripts | 1, 2, 17, 24, 25 | 27 |
    | style specification | 1, 21 | 28 |
    | agents and skills | 22, 23 | |
    | other repositories, carried by the owner | 1 (methodology-tools), 6 (project-orchestrator), 26 (the style guide's readability test), 30 (the K-003 record) | |

    The rounds under the new rules look like this:
    - each brief names the commit, the declined findings so far, any passage awaiting restatement and, under change 26, the human reader;
    - round 1 lists no passage, so the full restatement tests count 6's fixes afresh;
    - each round's record keeps the restatement and the `Checks:`, `Mismatches:` and `Confirmation:` lines;
    - strangers judge omissions against whole-text IRs;
    - the reasoning role asks the owner about a meta-review only on a signal or the limit.

    Judgement d gives the risk. Recommended.
30. The K-003 count's `Meta-review:` line reads delivered, with a link to this case. The record is the methodology's, so the owner carries the edit. Recommended.

Group H: considered and not recommended.

31. Strike the claims check, which found no prose drift in about 65 runs (observation 7). Not recommended. The owner kept it by adopting case 014 changes 3 and 5. Inside `npm run check` it costs one line. The next meta-review can weigh it again.
32. Key a recurrence on the render map's paragraph instead of the claim. That key would have caught the K-003 recurrence. Not recommended: v1.10's step 2 holds 304 words in one paragraph, so the key would fire on unrelated claims.
33. Batch to the count's close the findings that do not count against the verdict (case 014, judgement g, item 10). Not recommended. Defects that earlier fixes wrote decided one round of eleven (case 014, judgement b). Each fresh stranger would also report the batched findings again.
34. Port the seven missing checks of `mtool style` into `scripts/lint.mjs`. Not recommended. Change 21 makes each row name the tool that checks it, and the lints move to methodology-tools at this project's exit.
35. Give the specification's rendering conditions identifiers, and strike the branch point's Rules table. Not recommended. `eval/dispatch-log.md` records the dispatch identifiers, and the table already names the specification's rows as its source.

Seven terms in this case are in neither vocabulary: paraphrase test, plain-purpose sentence, coined name, whole-text IR, history file, working ruleset and the `Checks:` line. The owner ratifies or strikes each. The case glosses each at its first use.

Owner's decision on the outcome: pending.

## Appendix: a sizing draft of v1.11's Rounds and meta-review parts

For sizing only. v1.11's text is written IR first after the owner decides. The draft holds 717 body words (my word count).

```markdown
## Rounds

A round is one fresh stranger's reading of the text, the fixes that follow, and that stranger's check of those fixes. The methodology specification's Stranger rounds section holds the rules every round follows: the verdict, the fix rules, confirmation, the limit and the signals. This section holds this project's steps, the script each step runs and the line each step writes in the review record.

At a count's start, the reasoning role writes the branch point version and commit into the review record. A change the owner adopts during a count applies from the next count.

1. Check the text. The reasoning role runs `npm run check` on the text under review. The reasoning role shortens each sentence over 25 words that the check lists, outside the forms the brief permits. The reasoning role writes the `Checks:` line.
2. Brief the stranger. The reasoning role starts a fresh stranger instance with the brief below. The brief names the commit to read, each declined finding so far with its reason, and each passage awaiting restatement.
3. Read and report. The stranger reads the prose and writes its restatement (its own account of the text, at most 200 words). Then it restates each listed passage in one sentence. Then it reads the IR and writes its report. In this step the stranger reads the brief, the prose and the IR, and no other file.
4. Record the round. The reasoning role writes the round's entry: the stranger model, the restatement as written, and each finding with its decision. The reasoning role writes the `Mismatches:` line. Then the reasoning role runs `node scripts/signals.mjs` on the record and writes the verdict.
5. Fix. The reasoning role fixes each accepted finding under the specification's fix rules, the IR first. A mismatch the script reports as recurring gets a structural fix (a fix that moves the sentence instead of rewording it), marked `awaiting restatement`. The reasoning role runs `npm run check` again and fixes what it lists. The commit that holds these fixes is the fix commit.
6. Confirm. The reasoning role sends the round's stranger instance the findings, the declined findings with their reasons, and the fix commit. The instance reads the prose and the IR at that commit, in full. The instance says for each fix whether it holds and for each decline whether it accepts it. The instance names each new defect a fix introduced. The reasoning role writes the `Confirmation:` line and makes the fixes it calls for. Then the next round opens.
7. Close the count. At a readable verdict or at the limit, the specification's rules for the final round apply. The reasoning role writes the `Meta-review:` line. The reasoning role lists for the owner what the specification sends to the owner.

### The review record's lines

| Line | Form | Step |
|---|---|---|
| `Checks:` | `Checks: L sentences over 25 words; M of N claims mapped; C claims changed, X missing, Y stale.` | 1 and 5 |
| `Mismatches:` | one entry per mismatch, naming the claim the restatement contradicts and, after "relied on", the claim of the sentence the stranger quoted, as `C41 (relied on C35)`; or `none` | 4 |
| `Confirmation:` | `Confirmation: H of A fixes hold. Not held: <finding numbers, or none>. Declines accepted: K of D. New defects: N.` | 6 |
| per-round row | round, prose words, IR claims, findings, verdict | 4 |
| `Meta-review:` | the form the specification's Meta-review section gives | 7 |

During the rounds the prose status line reads `under review` with the version and the round number. The IR's Status parenthesis holds the round number. The reasoning role changes both at the start of each round.

## Meta-review signals

At the end of a count the reasoning role runs `node scripts/signals.mjs` on the review record. The script reads the first signal from the `Confirmation:` lines. The script reads recurring mismatches, part of the second signal, from the `Mismatches:` lines of every count. The reasoning role reads the rest of the second signal and the fourth signal from the record. The script stops with an error on a line it cannot read. The reasoning role corrects that line before it writes the `Meta-review:` line. The history file records the past meta-reviews and the owner's decisions on them.
```
