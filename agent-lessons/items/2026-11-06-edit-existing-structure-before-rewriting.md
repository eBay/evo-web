---
source: correction
disposition: open
---

# Edit the existing structure before rewriting it

While reshaping the `evo-button` API, the agent rewrote the callers' code instead of editing it. It replaced the per-variant `let` block in `evo-menu-button` with a new returned-object shape, reordered `Input` fields and argTypes, added an unrelated `onKeyDown` fix with `as any` casts, and dropped `split` from `evo-button`, which broke `evo-listbox-button`'s `ButtonInput["split"]`. Along the way it added `tagName === Button` checks against imported tags. The maintainer flagged it twice: "I'm seeing some _really_ bad ideas here with comparing tag names to element imports" and "make sure to (1) minimize changes and (2) make sure you're only using clean patterns". A second pass that restored main's files and reapplied only the needed edits shrank the diff from +127/-168 to +83/-88. Start from the file as it is, change only the lines the task needs, and grep for consumers of any input or export before removing it.

Disposition: open — maintainer, raised 2026-11-06 (candidate: none beyond the existing "Never widen a task's diff" and "Prefer reading existing patterns" lines in CLAUDE.md; may be a decline)
