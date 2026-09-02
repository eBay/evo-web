---
"@evo-web/marko": patch
---

Fix keyboard accessibility of `evo-menu` and `evo-menu-button`. The menu button
now moves focus into the menu when it is opened, to the first item or, when
opened with ArrowUp, the last one, and returns focus to the button when it is
closed with Escape or by selecting an item. Menu items now activate on
Enter/Space, support Home/End, and no longer respond to
clicks while disabled. Fixes a roving tabindex bug that left no item focusable after arrow
navigation when items had no explicit `value`.
