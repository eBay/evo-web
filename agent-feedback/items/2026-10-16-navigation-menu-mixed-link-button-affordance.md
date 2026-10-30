---
type: a11y
impact: med
effort: med
site: packages/skin/src/sass/navigation-menu/navigation-menu.scss › .navigation-menu__item
---

# Decide how navigation-menu treats mixed link and button items

The `mixed` story (`Skin/Navigation Menu`) puts `<a href>` and `<button>` items in one list, and both get the same `navigation-menu__item` styling. A user cannot tell before acting whether an item navigates to another page or runs an action on the current one. That breaks the expectation that people know what will happen before they act. It also leaves open how assistive tech users hear the list: a screen reader announces "link" for anchors and "button" for buttons, but the visual layer gives sighted users no matching cue. The docs page (`src/routes/_index/components/navigation-menu/accessibility+page.marko`) says both item types are supported and does not address mixing them. The open questions: should the component allow mixed lists at all, should links and buttons get different visual treatment, or should the guidance say a menu is all links or all buttons? This needs a design and accessibility call before any code change. Only the Skin component and its docs page were checked. The same pattern in `evo-fake-menu`/`ebay-fake-menu` was not.

Check: run `npm run storybook` in `packages/skin`, open `Skin/Navigation Menu` > `Mixed`, and compare "Link 1" and "Button 2". Then run `grep -n "navigation-menu__item" packages/skin/src/sass/navigation-menu/navigation-menu.scss` and look for any rule that targets `a` versus `button`.
