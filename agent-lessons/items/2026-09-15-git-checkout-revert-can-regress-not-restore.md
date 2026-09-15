---
source: observed-failure
disposition: applied
---

# `git checkout -- <file>` to undo your own bad edit can regress the file if other parts of the same diff already changed its dependencies

After an incorrect edit to 4 docs pages, I reverted them with `git checkout --` back to their
pre-diff (`origin/main`) state, intending to undo my mistake. This was wrong: those files'
original markup depended on a global CSS rule (in `icon.scss`) that this same diff had already
permanently deleted elsewhere. Restoring the file to its old content didn't restore old behavior —
it left the page relying on a rule that no longer existed, regressing it to broken (icons would
render black/uncolored, contradicting the fix's own goal). An independent adversarial-review
subagent caught this; it would have shipped otherwise. Cost: a full extra review-and-fix cycle.
General rule: reverting one file to an earlier git state is only safe if nothing else in the
working diff changed what that file depends on. When "undo this part" is the goal mid-task,
re-derive the correct end state relative to the CURRENT diff, don't `git checkout --` back to a
point before the diff existed — that reintroduces every dependency the diff has since removed.

Disposition: applied — this session subsequently re-derived the correct state for all 4 affected
files (added the compensating root modifier class, stripped the stale rule) rather than reverting,
and verified the fix by re-running a fresh adversarial review rather than assuming the revert was
sufficient.
