---
source: observed-failure
disposition: open
---

# Verify Vitest scope before snapshot updates

I ran `npx vitest run --update` from the monorepo root for one evo-react server test, but the root configuration discovered a broad set of unrelated suites; most failed under the wrong environment, and Vitest removed an unrelated carousel snapshot. I restored that snapshot, but the run caused avoidable failures and cleanup. Before using snapshot update mode, run through the package's test script and verify the selected project/file scope.

Disposition: open — maintainer to decide whether this general safeguard belongs in a shared testing skill or command policy, raised 2026-10-12
