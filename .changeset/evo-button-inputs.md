---
"@evo-web/marko": minor
---

**Breaking:** reshape the `evo-button` inputs so every combination is valid.

- `priority` is renamed `appearance`. `borderless` becomes `appearance="borderless"`, and `"none"` is removed.
- `variant="form"` moves to the new `evo-button-field` tag: a button that shows a value and always ends in a chevron, with an optional `borderless` look.
- `variant="destructive"` becomes `destructive`, which combines with any appearance.
- `bodyState` is removed. Setting `a11yLoadingText` shows the loading spinner (it no longer defaults to `"loading"`). `bodyState="expand"` becomes `evo-button-field`, and `reset` is dropped.
- `transparent`, `fixedHeight` and `onEscape` are removed; use `onKeyDown` to handle Escape.
- `truncate` keeps the size class, so `size="small" truncate` stays small.
- The `validSizes` and `validSplit` exports are removed; `size` and `split` are no longer checked at runtime.

`evo-icon-button` follows suit: `priority` is renamed `appearance`, `transparent` becomes `appearance="transparent"`, `"none"` is removed (leave `appearance` unset instead), and so is `onEscape`. `evo-menu-button` and `evo-fake-menu-button` drop the `"none"` and `"delete"` priorities, and their `form` variant renders `evo-button-field`, which always shows the chevron. `evo-listbox-button` renders `evo-button-field` too, so its chevron becomes the 12px icon Skin documents, and it drops `split`.
