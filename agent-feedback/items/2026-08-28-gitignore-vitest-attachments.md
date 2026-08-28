---
type: dx
impact: low
effort: low
site: .gitignore
---

# Gitignore .vitest-attachments/ so failure screenshots cannot be committed

A failing browser test writes a PNG to `packages/<pkg>/.vitest-attachments/`,
and that directory is matched by no ignore rule in the root `.gitignore` or
any package `.gitignore`. It shows up as untracked, so a routine `git add -A`
silently stages binary screenshots into an unrelated commit; this happened on
both `packages/ebayui-core` and `packages/evo-react`. Add
`.vitest-attachments/` to the root `.gitignore` alongside the other test
output patterns.

Check: fail any browser test (`npx vitest run --root packages/evo-react
src/dialog` with an assertion broken) and confirm `git status --short` stays
clean.
