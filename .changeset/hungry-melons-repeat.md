---
"@evo-web/marko": minor
---

BREAKING: `<evo-menu>` / `<evo-menu-button>`: replace the `separator` attribute on `<@item>` with a new `<@group>` attribute tag. Each `<@group>` accepts its own `selected`/`selectedChange` and nested `<@item>` tags, and adjacent groups are divided by separators automatically. Top-level `<@item>` tags may be combined with `<@group>` tags and always render first, sharing the menu-level `selected`. `selected` (on the menu or a `<@group>`) now also accepts `null`, meaning single-select with nothing selected yet, whereas omitting `selected` means the items are not selectable.
