---
type: a11y
impact: low
effort: med
site: packages/skin/src/sass/menu-button/stories/base.stories.js › .menu-button__items
---

# Decide whether a menu button's `role="menu"` should be labelled

The popup rendered by a menu button has no accessible name in any layer: the
skin markup emits a bare `<div class="menu-button__items" role="menu">`, and
`evo-menu-button` deliberately omits `a11yText`/`a11yLabelId` from its input, so
consumers cannot supply one either. A name is not required for `role="menu"`,
but the ARIA APG menu button pattern points the menu at its trigger with
`aria-labelledby`, which gives screen reader users the button's text when focus
enters the menu. This is a design system decision rather than a component fix —
it needs to land in the skin markup first, then in `@evo-web/marko`,
`@ebay/ebayui-core`, `@evo-web/react` and `@ebay/ui-core-react` together. Only
skin and `@evo-web/marko` were checked.

Check: render the `menu-button` "Base" skin story, or the `buttons/evo-menu-button`
"Default" story, and inspect the `role="menu"` element — it carries neither
`aria-label` nor `aria-labelledby`.
