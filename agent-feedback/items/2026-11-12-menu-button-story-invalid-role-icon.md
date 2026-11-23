---
type: a11y
impact: low
effort: low
site: packages/skin/src/sass/menu-button/stories/base.stories.js › menuIcons
---

# Remove the invalid `role="icon"` from item icons in the menu button `menuIcons` story

Three icons inside menu items use `role="icon"`, which is not an ARIA role, with
`aria-label` values (Settings, Calendar, Profile). The labels also disagree with the
visible item text: the first item shows "Profile" next to an icon labelled
"Settings". Since each item already has visible text, the icons are decorative and
should carry `aria-hidden="true"` like the other menu icons; if a label is kept,
the valid role is `role="img"`. Only the skin story was checked.

Check: `grep -n 'role="icon"' packages/skin/src/sass/menu-button/stories/base.stories.js`
returns lines 364, 372 and 380.
