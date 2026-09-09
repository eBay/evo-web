---
type: tooling
impact: low
effort: low
site: packages/evo-react smoke tests › .vitest-attachments
---

# Pre-push hook is blocked by its own test artifacts

The pre-push build runs the evo-react smoke tests, which write screenshot
attachments to `packages/evo-react/.vitest-attachments/`. That directory was
not gitignored, so the hook's own untracked-files check then rejected the push
every time. A root `.gitignore` entry was added to unblock pushing; if the
attachments should live elsewhere (or be cleaned up by the test run), that may
be a better fix.

Check: before the `.gitignore` entry, `git push` failed with "You have
untracked files" after a green build, and `git status` showed only
`packages/evo-react/.vitest-attachments/`.
