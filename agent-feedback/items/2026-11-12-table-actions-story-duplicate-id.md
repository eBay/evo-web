---
type: a11y
impact: low
effort: low
site: packages/skin/src/sass/table/stories/table.actions.stories.js › base
---

# Make the `options` ids unique in the table actions stories

Each of the `base`, `compact` and `relaxed` stories renders `id="options"` on more
than one element, so any label or ARIA reference to it resolves to the first match
only. This predates the menu-family change. Only the skin story was checked.

Check: `grep -c 'id="options"' packages/skin/src/sass/table/stories/table.actions.stories.js` returns more than 3.
