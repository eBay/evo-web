---
type: dx
impact: med
effort: med
site: packages/evo-marko/src/tags/evo-input/test › input test suites
---

# Restore the evo-input test baseline

The evo-input browser suite uses the legacy `component.emitted()` helper with a tags-API component, which throws `The emitted helper cannot be used with tags api components` — rewrite those assertions with function-handler spies.

Check: Run `npm run test -w packages/evo-marko`.
