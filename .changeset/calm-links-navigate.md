---
"@ebay/skin": minor
---

Add `navigation-button`, `navigation-tabs`, `text-button` and `navigation-menu` as standalone Skin components. Each gives the same look as the pattern it replaces: `navigation-button` (an `<a>` styled as a button), `navigation-tabs` (a list of links styled as tabs), `text-button` (a `<button>` styled as a link) and `navigation-menu` (a list of links styled as menu items). The compiled CSS of `tabs` and `link` is unchanged. The `fake-btn`, `fake-tabs`, `fake-link` and `fake-menu` classes keep working and are deprecated. They will be removed in the next major version. Also renames the `signal` Storybook title from "Hotness Signals" to "Signal".

Add spelled-out class names for the button family: `button`, `icon-button`, `cta-button` and `expand-button`, with every element and modifier (`button__cell`, `button--primary` and so on). Each new selector sits beside its abbreviated twin and produces the same styles. The docs and stories now use the new names. The `btn`, `icon-btn`, `cta-btn` and `expand-btn` classes keep working and are deprecated. They will be removed in the next major version. Don't combine old and new names on one element. The `--btn-*` custom properties are unchanged.
