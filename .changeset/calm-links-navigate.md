---
"@ebay/skin": minor
---

Add `link-button`, `navigation-tabs`, `button-link` and `navigation-menu` as standalone Skin components. Each gives the same look as the pattern it replaces under a name that states what the control is built from: `link-button` (an `<a>` styled as a button), `navigation-tabs` (a list of links styled as tabs), `button-link` (a `<button>` styled as a link) and `navigation-menu` (a list of links styled as menu items). The compiled CSS of `button`, `tabs`, `link` and `menu` is unchanged. The `fake-btn`, `fake-tabs`, `fake-link` and `fake-menu` classes keep working and are deprecated. They will be removed in the next major version. Also renames the `signal` Storybook title from "Hotness Signals" to "Signal".
