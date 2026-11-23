---
type: a11y
impact: low
effort: low
site: packages/skin/src/sass/pagination/stories/overflow.stories.js › endMenuCollapsed
---

# Fix the malformed markup in the pagination overflow stories

The overflow stories put `role="separator"` on the overflow icon `<svg>`, so the
decorative ellipsis is announced as a separator instead of being hidden with
`aria-hidden="true"`. The overflow menu items in `endMenuCollapsed` also open a second
`<span>` instead of closing the first (`<span>7<span>`), leaving unclosed elements.
The `middle` and `textSpacing` stories also point `aria-labelledby` at `pagination-heading-4`, which no element has. All three predate the menu-family change, which only moved these lines into the new
`menu-button` markup. Only the skin stories were checked.

Check: `grep -n 'role="separator"\|<span>[0-9]<span>\|pagination-heading-4' packages/skin/src/sass/pagination/stories/overflow.stories.js`
