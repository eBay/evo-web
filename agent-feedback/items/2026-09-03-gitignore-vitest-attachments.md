---
type: dx
impact: low
effort: low
site: packages/evo-react/.gitignore
---

# Ignore vitest browser failure attachments

Vitest browser mode writes failure screenshots to `packages/evo-react/.vitest-attachments/`, which no `.gitignore` covers, so every failing browser test leaves untracked binaries that are easy to commit by accident. The same `.gitignore` already lists `__screenshots__`, so the attachments directory looks like an oversight rather than a deliberate choice. Add `.vitest-attachments` next to `__screenshots__`, and check the other packages that run `vitest --browser` for the same gap.

Check: run `npx vitest run --browser.headless src/tooltip` from `packages/evo-react` with a deliberately failing assertion, then `git status --short`. The attachments directory is listed as untracked.
