---
"@evo-web/marko": patch
---

Stop leaking controllable change handlers and nested attribute tags onto rendered DOM elements: `evo-filter-chip`, `evo-selection-chip` and `evo-toggle-button-group` no longer render `selectedChange`/`pressedChange`, `evo-tabs` no longer renders `panel` on each tab, and `evo-tooltip`, `evo-menu-button` and `evo-fake-menu-button` no longer render `open`/`openChange`.
