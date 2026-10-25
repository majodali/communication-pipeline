---
name: review
description: Run the stranger review on prose, an IR, or both, with a fresh-context reviewer subagent. Use after /render when the disposition is D2, or on any text the owner asks to have reviewed. Writes the review beside the text.
---

# Review as the stranger

1. Assemble the reviewer's prompt with exactly these things, pasted in
   full: the text under review (the prose, and the IR when both
   exist); the reader's entry from `docs/readers.md`, including the
   readability test; the rows of `docs/style-spec.md` for that reader
   or `all`. Nothing else. Do not tell the reviewer what the text is
   for or where it came from.
2. Invoke the Agent tool with `subagent_type: "reviewer"` and that
   prompt.
3. Save the returned report as `<subject>.review.md` beside the text,
   or under `eval/reviews/` for a chat message or PR body.
4. Act on each finding. A finding against the prose that changes no
   claim is fixed in the prose. A finding that reveals a missing term,
   an unresolved referent or a compound claim is fixed in the IR, and
   the IR is rendered again. A finding you disagree with is recorded
   as disputed in the review file with one sentence why; it is not
   deleted.
5. If the verdict is `not readable`, do not deliver. Fix and review
   again.
6. When the review is for the owner's gate, cite the review file in
   the report's *What changed*.

A review that is itself long or rhetorical is a finding against the
reviewer role; record it in the Backlog.
