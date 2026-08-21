---
type: dx
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-calendar/test/test.server.ts › evo-calendar SSR
---

# Make the calendar server snapshot deterministic

The default calendar snapshot depends on the current date and now expects June 2026 while the component renders the current month. Freeze the clock in the test or pass a fixed date so the package suite does not fail as time advances.

Check: Run `npm run test:server -w packages/evo-marko -- src/tags/evo-calendar/test/test.server.ts`.
