# Style specification

Status: active (v1, chunk 1).

Type: Specification (methodology vocabulary). The paraphraser applies
it rule by rule. The reviewer and the lints check against it.

Reader: RD-4 (a fresh agent session) in the paraphraser or reviewer
role.

## Authority and precedence

The specification restates the methodology's prose rules as data. The
[style guide](https://github.com/majodali/methodology/blob/v1.5.0/docs/style.md),
the [P- rules](https://github.com/majodali/methodology/blob/v1.5.0/docs/rules/prose.md)
and [W-008](https://github.com/majodali/methodology/blob/v1.5.0/docs/rules/working-agreement.md#w-008--reports-map-their-deliverables)
(reports map their deliverables) remain the authority. A disagreement
between this table and those documents is a defect here.

Where a rule here conflicts with writing guidance from the agent
harness, this specification wins. Known conflicts:

| Harness guidance | This specification | Why |
|---|---|---|
| bold the first few words of a bullet or paragraph | SP-07 (bold marks structure): bold only on a field label or a term at its definition site | P-003 (bold marks structure, never emphasis) forbids bold as emphasis; the harness pattern produced finding 8 of [case 001](../eval/cases/001-review-response-2026-10-23.md) |
| no headers in a message under about 500 words | SP-10 (headers state their contents): a header is permitted whenever a reader scanning headers would find a fact faster | P-001 (documents are structured for reference) |

Guidance from the harness that agrees with the methodology (short
sentences, lead with the outcome, no em-dashes, numbers out of prose)
is simply restated below with its methodology source.

## Rule table

Columns: identifier; rule; check, where `lint` is a deterministic
pattern and `judgment` needs a reader; the readers it binds; source.

Readers and sources are cited by identifier. Their names:

| Identifier | Name |
|---|---|
| RD-1 | human owner, in conversation ([catalog](readers.md)) |
| RD-2 | human owner, returning |
| RD-3 | delegating agent |
| RD-4 | fresh agent session |
| RD-5 | external reader |
| P-001 | documents are structured for reference |
| P-002 | one idea per sentence |
| P-003 | bold marks structure, never emphasis |
| P-004 | citations carry names |
| P-005 | headers state their contents |
| P-006 | registers hold uniform rows |
| W-008 | reports map their deliverables |
| K-010 | superseded content is never silently readable |
| K-011 | found contradictions are marked, not routed around |
| P-007 | Allegro's proposal: a document states its reader and prerequisites |
| P-008 | Allegro's proposal: terms are defined once and cited everywhere |
| P-009 | Allegro's proposal: principles carry their standard names and a test |
| P-010 | Allegro's proposal: a measurement states its question |
| P-011 | Allegro's proposal: design documents state the problem before the solution |

| Id | Rule | Check | Readers | Source |
|---|---|---|---|---|
| SP-01 | One claim per sentence. A sentence states one thing. | judgment; lint flags two independent clauses joined by `and`, `but`, `so`, `;` or an em-dash | all | P-002; owner feedback 2026-10-23 |
| SP-02 | A sentence is at most about 25 words. | lint: warn over 25, flag over 35 | all | P-002; style guide *Sentences* |
| SP-03 | Every referent is named. No pronoun or determiner phrase whose antecedent is in another sentence or paragraph. | lint: sentence-initial `This`, `That`, `These`, `Those`, `It`; `the other`, `the above`, `the former`, `the latter` | all | owner feedback 2026-10-23; IR referent rule |
| SP-04 | A term is used only if it is defined in the text, in the project [vocabulary](vocabulary.md), or in the methodology vocabulary. A word taken from the conversation is not a term. | judgment; lint flags bolded or capitalized phrases absent from both vocabularies | all | owner feedback 2026-10-23; Allegro's proposed P-008 |
| SP-05 | An identifier carries its name on first use in the text, and is linked where a target exists. An identifier from another repository carries its name at every use. | lint: pattern `[A-Z]{1,3}-?\d+` or `§\d+` whose first occurrence is not followed by a parenthesized name or a link | RD-1 to RD-4 | P-004 |
| SP-06 | No bare identifiers at all. An identifier is replaced by its name, or named at every use. | lint as SP-05, every occurrence | RD-5 | P-004; in-real-life "Register readability pass" |
| SP-07 | Bold appears only as a field label in a fielded entry or on a term at its definition site. | lint: bold span longer than four words, or bold not followed by `:` and not the first use of a vocabulary term | all | P-003 |
| SP-08 | No rhetorical devices: no dramatic accumulation, aphorism, suspense, metaphor, or slogan standing for a principle. | judgment; lint flags fragments of the form `That is X.` and `X is not Y. It is Z.` | all | P-002; style guide *Sentences*; case 001 findings 3 to 6 |
| SP-09 | No sentence is extended by chained em-dashes or semicolons. A single em-dash is permitted only inside a register row or field label. | lint: em-dash or semicolon joining clauses in body prose | all | P-002; style guide *Sentences* |
| SP-10 | A header is a noun phrase or a claim that predicts its section's content. No teaser, no joke, no bare identifier. | judgment; lint flags identifier-only headers and headers ending in `?` or containing an em-dash | all | P-005 |
| SP-11 | Each section answers its own header without the text above it and front-loads its claim. | judgment | RD-4, RD-5 | P-001 |
| SP-12 | A register entry has the shape its register declares, with bounded length; reasoning lives in a linked document. | lint: entry over 60 words in a register whose header declares a row shape | all | P-006 |
| SP-13 | A report to RD-1 or RD-2 leads with the outcome or the decision needed and carries, in order: asks; what is already covered; what changed; terms introduced. An empty part is stated in one line. | lint: the four headings present and ordered | RD-1, RD-2 | W-008; its bootstrap block; the plan's term ratification |
| SP-14 | A report to RD-3 carries status, a map of the deliverable, and asks, and may omit the rest. | lint: the three parts present | RD-3 | W-008 agent audience |
| SP-15 | A report to RD-2 opens with one paragraph stating the current state and citing the last recorded state. | judgment | RD-2 | reader catalog RD-2 |
| SP-16 | A document opens with a reader statement: who it is for and what they are assumed to know, with a link. | lint: a `Reader:` line or a *Reader* section within the first twenty lines | RD-4, RD-5 | Allegro's proposed P-007 (pilot-only) |
| SP-17 | A design document or plan states its problem before its mechanism: requirement, challenge, approach with displaced alternatives. | judgment | RD-4 | Allegro's proposed P-011 (pilot-only) |
| SP-18 | A principle is stated as a norm with the standard name for the pattern it applies, where one exists, and a test that would show it violated. | judgment | RD-4, RD-5 | Allegro's proposed P-009 (pilot-only) |
| SP-19 | A measurement is preceded by the question it answers and what each outcome would mean. | judgment | RD-4 | Allegro's proposed P-010 (pilot-only) |
| SP-20 | Numbers and counts go in a table or on their own line, not inside a sentence, unless the sentence is about that number. | lint: three or more numerals in one sentence | all | harness guidance, agreeing with P-001 |
| SP-21 | Quoted text from another document is byte-exact and marked as a quotation; it is not restyled. | judgment | all | project-orchestrator proposals, 2026-09-02 |
| SP-22 | A known-stale passage that cannot be corrected in the same deliverable carries a supersession marker in the style guide's form. A false passage in an active document is corrected, not marked. | lint: blockquotes beginning `Superseded by` resolve their citation | RD-4 | K-010, K-011 |

Rules marked pilot-only derive from Allegro's proposals that the
methodology has not adjudicated. They bind documentation produced by
this pipeline so the pilot yields evidence for or against them. They
do not bind any other project.

## What the paraphraser does with this table

For the IR's reader, the paraphraser selects the rows whose Readers
column includes that reader and applies them while rendering. Rows for
other readers do not apply. After rendering, the paraphraser runs the
lint column and fixes what it can before the reviewer sees the text.
