---
name: render
description: Dispatch one IR through the branch point and, when it says render, produce prose with a fresh-context paraphraser subagent. Use after /reason. Records the disposition in eval/dispatch-log.md.
---

# Render an IR

1. Run `node scripts/dispatch.mjs <file>.ir.md` (add `--flag review`
   if the owner asked for a review). Note the disposition: D0, D1 or
   D2. The dispatcher appends the row to `eval/dispatch-log.md`.
2. D0: deliver the IR as it stands. Stop.
3. D1 or D2: assemble the paraphraser's prompt with exactly three
   things, pasted in full, and nothing else:
   - the IR text;
   - the reader's entry from `docs/readers.md` (the whole table for
     that RD identifier);
   - the rows of `docs/style-spec.md` whose Readers column includes
     that identifier or `all`.
   Then invoke the Agent tool with `subagent_type: "paraphraser"` and
   that prompt. Do not describe the conversation, the project, or
   your intent. The subagent's fresh context is the mechanism.
4. Write the returned prose beside the IR as `<subject>.md` (or use it
   as the PR body or message). Keep the trailing render-map comment.
5. Run `node scripts/lint.mjs <subject>.md`. Fix lint findings in the
   prose yourself only when the fix changes no claim; otherwise fix the
   IR and render again.
6. D2: invoke `/review`.

If the paraphraser output contains `[paraphraser: could not render
C<n> ...]`, the IR is under-specified at C<n>. Fix the IR and render
again.
