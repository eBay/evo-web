---
type: dx
impact: med
effort: med
site: packages/evo-marko/src/tags/evo-input/test › input test suites
---

# Restore the evo-input test baseline

The compiler crash importing `evo-input/index.marko` is resolved (see 2026-09-21-evo-marko-server-compile-crash). Remaining: the browser suite uses the legacy `component.emitted()` helper with a tags-API component, which throws `The emitted helper cannot be used with tags api components` — rewrite those assertions with function-handler spies.

Check: Run `npm run test -w packages/evo-marko`.
