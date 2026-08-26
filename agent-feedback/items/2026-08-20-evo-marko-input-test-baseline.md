---
type: dx
impact: med
effort: med
site: packages/evo-marko/src/tags/evo-input/test › input test suites
---

# Restore the evo-input test baseline

The Marko test compiler crashes while importing `evo-input/index.marko`, which also prevents dependent filter-input, number-input, and textarea server suites from loading. The browser suite additionally uses the legacy `component.emitted()` helper with a tags-API component. Update the test integration for the current tags API and isolate the compiler crash with a minimal fixture.

Check: Run `npm run test -w packages/evo-marko`.
