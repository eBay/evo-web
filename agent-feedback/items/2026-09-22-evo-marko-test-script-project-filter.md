---
type: dx
impact: med
effort: low
site: packages/evo-marko/package.json › scripts.test:server
---

# Select Vitest projects with flags instead of positional filters

The `test:server` and `test:browser` scripts pass `server` and `browser` as positional Vitest filters even though those names identify projects in `vite.config.mjs`. Appending a component test path therefore combines filename filters and runs the full project rather than the requested file, making targeted validation slow and exposing unrelated failures. Use Vitest's project-selection option in both scripts so additional positional arguments can narrow the selected project.

Check: run `npm run test:server -w packages/evo-marko -- src/tags/evo-number-input/test/test.server.ts`; Vitest runs 51 server test files instead of only `evo-number-input/test.server.ts`.
