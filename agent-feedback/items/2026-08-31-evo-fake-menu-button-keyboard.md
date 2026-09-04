---
type: a11y
impact: med
effort: med
site: packages/evo-marko/src/tags/evo-fake-menu-button/index.marko › evo-fake-menu-button
---

# Give evo-fake-menu-button the menu button keyboard behaviors

The trigger only toggles `open` from its `onClick`, so focus is never moved into
the popup: Enter/Space leave focus on the button, ArrowDown/ArrowUp do not open
it, and Escape closes it without returning focus to the button. The trigger
also carries no `aria-haspopup`. Its popup is a
list of links/buttons rather than `role="menu"` items, so it needs its own focus
handling rather than the `focusItem` input that `evo-menu` exposes; the opening
keys, Escape-restores-focus and Tab-closes handling in `evo-menu-button` can be
followed. Only `@evo-web/marko` was checked; `@ebay/ebayui-core`,
`@evo-web/react` and `@ebay/ui-core-react` may carry the same gap.

Check: open the `buttons/evo-fake-menu-button` "Default" Storybook story, focus
the button and press Enter — the popup expands while `document.activeElement`
stays on the button, and the arrow keys then do nothing.
