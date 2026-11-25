---
type: bug
impact: med
effort: med
site: packages/skin/src/sass/menu/stories/fake-menu.stories.js › buttonsDisabled
---

# Fix markup and accessibility defects in the menu-family, pagination and table stories

These components were left out of the Skin docs migration because PR #1141 and issues #1145 and #1147 change them. Their stories still have defects that would break or mislead a docs page once those pages move to `<component-demo>`. Unparseable (the docs page would return HTTP 500): Fake Menu `buttonsDisabled` and `buttonsSelected`, Pagination overflow `endMenuCollapsed` and `endMenuExpanded`. Dangling references: Filter Menu `aria-owns="filter-menu-search-items-1"` in `RTL`, `textSpacing` and `withHeaderSearch`; Pagination overflow `aria-labelledby="pagination-heading-4"` in `middle` and `textSpacing`. Duplicate `id="options"` ×5 in Table actions `base`, `compact` and `relaxed`. Filter Menu Button `RTL` opens two more `<div>`s than it closes. Axe (WCAG 2.2 AA) also flags Split Button (`button-name`, 21 stories), Menu Button (`aria-required-attr`, `aria-roles`), Table (`select-name`, `aria-valid-attr-value`), Filter Menu (`aria-valid-attr-value`), Filter Menu Button (`aria-valid-attr`) and Section Title (`button-name`).

Check: pass each listed export's markup to `prettier.format(html, { parser: "html" })`; run axe-core with the `wcag2a`, `wcag2aa`, `wcag21aa` and `wcag22aa` tags on the listed stories in Skin Storybook.
