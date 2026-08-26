---
type: dx
impact: med
effort: med
site: packages/evo-react/package.json › scripts.lint
---

# Restore a clean Evo React lint baseline

The package lint command fails in existing alert-dialog and confirm-dialog files on `autoFocus` and `closedby`, in button and icon-button stories and tests on empty custom anchors, and in the generated icon story on `@ts-nocheck`. These unrelated failures prevent component migrations from using the workspace lint command as a merge gate. Fix the source violations or narrow generated-file linting with an intentional repository rule.

Check: Run `npm run lint -w packages/evo-react` and observe failures outside `src/combobox/`.
