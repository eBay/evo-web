---
type: dx
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-filter-chip/test/test.server.ts › expanded menu snapshots
---

# Use the filter-chip open-state API in tests

The server tests pass `expanded: true`, but the component controls `aria-expanded` through its `open` input. The unknown `expanded` attribute reaches the rendered button while `aria-expanded` remains false, so two snapshots no longer match actual output. Update the fixtures and related browser tests to use the current component contract.

Check: Run `npm run test:server -w packages/evo-marko -- src/tags/evo-filter-chip/test/test.server.ts`.
