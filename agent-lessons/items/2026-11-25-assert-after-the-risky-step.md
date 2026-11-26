---
source: observed-failure
disposition: open
---

# A test of "X survives Y" asserts after Y, not before it

A browser test meant to prove an icon kept its SVG symbol when the server-rendered icon holding it was removed checked the symbol while that icon was still on the page, then removed it in `afterEach`. It passed with the bug present; an independent review found it, and the fix needed another round of tests. Put the risky action in the test body and assert on what the user would see after it, then confirm the test fails against the broken code before trusting it.

Disposition: open — evo-web maintainers (candidate for the `evo-testing` skill), raised 2026-11-25
