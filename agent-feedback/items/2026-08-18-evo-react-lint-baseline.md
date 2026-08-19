---
type: dx
impact: med
effort: low
site: packages/evo-react/eslint.config.js › exported ESLint configuration
---

# Restore a clean evo-react lint baseline

The package-wide lint command fails on pre-existing errors across alert-dialog, button, confirm-dialog, icon-button, and icon files, preventing component migrations from using it as a completion gate. Add or correct package lint configuration and affected source so new migrations can distinguish their own failures from the baseline.

Check: Run `npm run lint -w packages/evo-react`.
