---
source: observed-failure
disposition: open
---

# Check for a running dev server before applying a stash that adds route folders

`git stash apply` failed twice on 2026-10-27 with "could not restore untracked files from stash". Both times, `npm start` (`marko-run dev`) was running. The apply restored the stash's new route folders first, the dev server regenerated `.marko-run/routes.d.ts` as they appeared, and git then refused to write the 238 tracked changes over the now-dirty file. Each retry failed because the restored untracked files already existed. Diagnosing it cost two recovery passes, and my first fix (delete the restored files and re-apply) was blocked by the auto-mode guardrail. That block was correct, because a non-destructive route existed: apply `git diff --binary stash^1 stash -- . ':!.marko-run/routes.d.ts'` with `git apply --3way`, then verify against the stash.

Disposition: open, Arthur Khachatryan to decide whether a stash/merge preflight should warn about a running `marko-run dev`, raised 2026-10-27
