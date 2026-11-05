---
source: observed-failure
disposition: open
---

# Strip wrapper-only props before forwarding the remainder

Main-agent review caught that after the root-variant refactor, parent context did not narrow nested trigger props, allowing `hasSelection`, `a11ySelectedText`, and `noToggleIcon` to leak through branch `...rest` spreads as native attributes. The review required a follow-up edit and browser test; I now extract those aliases before every branch spread and cover mismatched root variants. When runtime branch selection cannot narrow a prop union, consume all wrapper-only configuration before forwarding its remainder.

Disposition: open — maintainer to decide whether to add this to shared React-wrapper guidance, raised 2026-10-12
