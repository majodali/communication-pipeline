# Reader catalog

Status: active (v1, chunk 1).

Type: Specification (methodology vocabulary). The paraphraser and the
reviewer implement against it; every IR names one entry in its Reader
header.

Reader: RD-4 (a fresh agent session) in the paraphraser or reviewer
role; the human owner striking or accepting entries.

## Why a catalog

"Readable" has no test until the reader is named (Allegro's proposed
P-007, a document states its reader). Each entry below therefore ends
with a readability test: the question a reviewer answers to judge a
text readable for that reader. The catalog is small on purpose. An
entry is added when a real text had a reader none of these describes,
and the text is cited.

## Entry shape

| Field | Content |
|---|---|
| Who | the reader, concretely |
| Assumed to know | with a pointer to where that knowledge is defined |
| Not assumed to know | the things a writer most often wrongly assumes |
| Needs from the text | what the reader is trying to do |
| Shape | the structure the text must take |
| Identifiers | the rule for identifiers and terms |
| Readability test | the reviewer's question |
| Evidence | the instance that put the reader in the catalog |

## RD-1 Human owner, in conversation

| Field | Content |
|---|---|
| Who | the project's human owner, reading in the session that produced the text |
| Assumed to know | the conversation; the [methodology corpus](https://github.com/majodali/methodology); the portfolio; the project's documents |
| Not assumed to know | anything recorded only in a prior session or only in an agent's context |
| Needs from the text | the decisions and actions requested, first; what is new against what was settled |
| Shape | W-008's three parts (asks; what is already covered; what changed) then *Terms introduced*; the first ask within the first screen |
| Identifiers | named on first use (P-004, citations carry names); linked where a target exists |
| Readability test | After the first screen, can the owner list every ask? Does each sentence state one claim? |
| Evidence | W-008's motivating instance, 2026-08-30; [case 001](../eval/cases/001-review-response-2026-10-23.md) |

## RD-2 Human owner, returning

| Field | Content |
|---|---|
| Who | the project's human owner, reading after a gap or in a different session from the one that produced the text |
| Assumed to know | the methodology corpus; the portfolio; the project's documents |
| Not assumed to know | the conversation; any decision not yet recorded in a document; the order in which things happened |
| Needs from the text | the current state re-established in one paragraph, citing the last recorded state; what changed since; the asks |
| Shape | a state paragraph, then W-008's three parts, then *Terms introduced* |
| Identifiers | named on first use; linked |
| Readability test | Without the session transcript, can the owner say what was decided and what is now asked? |
| Evidence | this pilot's own session: a gap from 2026-09-02 to 2026-10-22, after which nine open PRs had to be re-established; the owner's search for "fold" that missed "two-fold", 2026-10-24 |

## RD-3 Delegating agent

| Field | Content |
|---|---|
| Who | an agent that dispatched the work: project-orchestrator's dispatch loop, or a parent session |
| Assumed to know | the task it dispatched; the project's documents; the methodology at the project's pin |
| Not assumed to know | what the working session learned that it did not record |
| Needs from the text | status; a map of the deliverable; the asks |
| Shape | W-008's agent-audience form: status, map, asks; the IR delivered as it stands when the [branch point](branch-point.md) allows |
| Identifiers | may be bare when linked; project terms from the vocabulary |
| Readability test | From the status and asks alone, can the agent decide its next dispatch? |
| Evidence | project-orchestrator's handoff contract; the W-008 amendment of 2026-09-01 that scoped reports by audience |

## RD-4 Fresh agent session

| Field | Content |
|---|---|
| Who | an agent beginning a session in the project with no conversation history; includes an agent in the Auditor or reviewer role. This is the stranger of the plan's Terms table |
| Assumed to know | the methodology corpus at the project's pin; whatever the project's documents state |
| Not assumed to know | any conversation; any decision recorded nowhere; any term defined nowhere; any status line that is no longer true |
| Needs from the text | terms defined or cited before use; the problem before the solution; one definition site per term; status that is true |
| Shape | documentation: P-001 to P-006 in full; a reader statement; no W-008 parts |
| Identifiers | named on first use in every document; linked |
| Readability test | Can the session state the document's problem, its terms and its decision, without the conversation? |
| Evidence | the owner's "Convergence and Divergence" (2026-10-22): agents have no tacit layer and rebuild the theory from the artifacts every session; Allegro's proposed P-007 and its section 4 reviewer test; case 001, finding 2 |

## RD-5 External reader

| Field | Content |
|---|---|
| Who | a person outside the project and outside the methodology: an advisor reading a hosted register view; a user reading a tutorial or a reference |
| Assumed to know | the general domain, or general software practice |
| Not assumed to know | the methodology; the project's identifiers; the project's vocabulary; that a repository exists |
| Needs from the text | plain language; standard names for patterns where one exists; a gloss wherever precision needs a term |
| Shape | documentation; identifiers carry names at every use or are removed |
| Identifiers | no bare identifier anywhere; project terms glossed on first use |
| Readability test | Does any sentence need a project or methodology identifier to be understood? Could a reader with no repository access act on the text? |
| Evidence | in-real-life's hosted register views (its decision D69) and the founder's finding that the entries read terse and jargon-dense for that audience (Backlog, "Register readability pass", 2026-08-21); Allegro removed decision and backlog identifiers from its language-reference comments for the same reader, 2026-10-21 |

## Readers not in the catalog

A reviewer who finds a text addressed to a reader none of these
describes reports it as a finding with the text cited. The owner
decides whether the catalog grows.
