# IR: Branch point v1.6, the signal-based meta-review trigger

Reader: RD-4
Purpose: document. The revision of the branch point that replaces the three-round meta-review trigger with four signals read from the review record, by owner decision of 2026-10-27.
Status: draft (round 2 in progress; unratified terms 0)
Source: the owner's decision of 2026-10-27 ("signal based triggers are preferred"; "Go ahead with those defaults"); the five recorded counts; the methodology specification's count-3 amendment.
Normative: yes
Footprint: docs/branch-point.md; docs/records/branch-point-v1.6.ir.md; docs/records/branch-point-v1.6.review.md; docs/vocabulary.md; scripts/signals.mjs; scripts/test.mjs

## Terms

T1. Meta-review signal. defined-at: https://github.com/majodali/methodology/blob/main/docs/intermediate-representation.md#meta-review [decided: owner, 2026-10-27]

## Claims

### The trigger

C1. A text is a meta-review subject when its count reaches the limit or its review record shows a meta-review signal. [decided: owner, 2026-10-27]

C2. The first signal: in two or more rounds of the count, the round's stranger instance rejected a fix at confirmation or the claims check reported a missing or stale claim. [decided: owner, 2026-10-27]

C3. The second signal: a finding declined and carried in the stranger brief was raised again, or a restatement mismatch recurred on one passage. [decided: owner, 2026-10-27]

C4. The third signal: the prose grew across the count by more than one tenth of its round-1 word count. [decided: owner, 2026-10-27]

C5. The fourth signal: after round 3, a stranger found a contradiction in a passage an earlier round's fix touched. [decided: owner, 2026-10-27]

C6. At the end of a count, the reasoning role checks the four signals against the review record. [decided: owner, 2026-10-27]

C7. The reasoning role writes `Meta-review: pending` when the text is a subject and `Meta-review: not indicated` otherwise, naming the signals checked. [decided: owner, 2026-10-27]

C8. The script `scripts/signals.mjs` reads a review record and reports the first and third signals from its per-round word counts, confirmation results and claims-check results. [proposed: this IR]

C9. The script reports wording that may show the second or fourth signal, for the reasoning role to confirm by reading. [proposed: this IR]

C10. The owner may dispatch a meta-review of any text, signal or none. [decided: owner, 2026-10-27]

### Why

C11. The trigger of three rounds predated the measurements and fired on counts that converged without any step failing. [decided: owner, 2026-10-27]

C12. Every meta-review so far was foreshadowed by a signal in its review record: growth and an abandoned IR, a drift the mechanical check passed, confirmations rejecting fixes. [decided: cases 005, 007, 008]

C13. The limit of ten stays as the one count-based trigger. [decided: owner, 2026-10-27]

C14. Until the owner accepts v1.6, v1.5 is active on main. [decided: owner, 2026-10-27]

C15. Case 008 proposed no change to the D1 row's rule on joining a reason to its rule by connective prose, and none was made. [decided: owner, 2026-10-27]

C16. When the owner dispatches a meta-review, the meta-review session reads the review record and the text, and reports, as an evaluation case, whether the process needs a change. [decided: owner, 2026-10-26]

C17. The stranger reads only the prose, the IR, and at Rounds steps 4 and 7 its own findings table with the fixed passages. [decided: owner, 2026-10-27]

C18. The reasoning role writes a document as an IR first. [decided: owner, 2026-10-25]

## Relations

R1. C2 refines C1 because each signal is one condition of the rule.

R2. C3 refines C1 because each signal is one condition of the rule.

R3. C4 refines C1 because each signal is one condition of the rule.

R4. C5 refines C1 because each signal is one condition of the rule.

R5. C8 supports C6 because the script reads the two signals the record states in numbers.

R6. C12 supports C1 because the signals are what the three records showed before their meta-reviews.

## Evidence

E1. docs/records/branch-point-v1.4.review.md: confirmations rejected fixes in rounds 1, 2 and 5; prose 1,527 to 1,626 words.

E2. docs/records/branch-point-v1.5.review.md and the methodology's review record, count 2: no confirmation rejection, no missing or stale claim, growth under four percent, readable at rounds 3 and 4.

E3. eval/cases/005-meta-review-stranger-rounds-2026-10-26.md: prose 2,572 to 4,516 words; the IR unchanged from round 3.

## Asks

A1. Accept branch point v1.6. Depends: C1 to C18.
