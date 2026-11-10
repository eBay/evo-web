---
"@evo-web/marko": minor
---

**Breaking:** reshape the `evo-button` inputs so every combination is valid.

- `priority` is renamed `appearance`. `variant="form"` and `borderless` become `appearance="form"` and `appearance="borderless"`, and `"none"` is removed.
- `variant="destructive"` becomes `destructive`, which combines with any appearance.
- `bodyState` is removed. Setting `a11yLoadingText` shows the loading spinner (it no longer defaults to `"loading"`). `bodyState="expand"` and `reset` are dropped; render a chevron icon in the button's content instead.
- `transparent`, `fixedHeight` and `onEscape` are removed; use `onKeyDown` to handle Escape.
- `truncate` keeps the size class, so `size="small" truncate` stays small.
- `split` is removed; give the left half of a split button `class="btn--split-start"` (`evo-menu-button` and `evo-listbox-button` keep their own `split`).
- The `validSizes` and `validSplit` exports are removed, and `size` is no longer checked at runtime.

`evo-icon-button` follows suit: `priority` is renamed `appearance`, `transparent` becomes `appearance="transparent"`, `"none"` is removed (leave `appearance` unset instead), and so is `onEscape`. `evo-menu-button` and `evo-fake-menu-button` drop the `"none"` and `"delete"` priorities.
