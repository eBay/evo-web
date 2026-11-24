---
type: a11y
impact: low
effort: low
site: packages/skin/src/sass/filter-menu-button/stories/filter-menu-button.stories.js › disabled
---

# Fix the `aria-expaned` typo on the disabled filter menu button story

The `disabled` story's trigger carries `aria-expaned="true"`, a misspelling of
`aria-expanded`, so the button exposes no expanded state at all. Because the button
is also disabled, the intended value is probably `aria-expanded="false"`. Only the
skin story was checked; the framework packages were not.

Check: `grep -n 'aria-expaned' packages/skin/src/sass/filter-menu-button/stories/filter-menu-button.stories.js`
returns line 159.
