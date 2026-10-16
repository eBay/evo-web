---
type: bug
impact: low
effort: low
site: packages/skin/src/sass/education-notice/education-notice.scss › .education-notice__title
---

# Drop the title's icon gap when an education notice header has no icon

`.education-notice__title` always sets `margin-inline-start: var(--spacing-150)` to space the title from the header icon. `@evo-web/react` lets callers omit `EvoEducationNoticeIcon` while keeping `EvoEducationNoticeHeader`, the title, and the dismiss button. The title then sits 12px in from the header start while `.education-notice__main` stays flush, so the title and body text no longer line up. Every Skin education-notice story has an icon, so Skin has no iconless case. A Skin rule that moves the spacing to the icon (for example a `gap` on `.education-notice__header` instead of the title margin) would fix it for every framework. Checked: skin (rule applies with no icon), evo-react (the `Iconless` story exposes it). ebayui-core removes the whole header for its `icon="none"` option, and ebayui-core-react has no icon option, so neither shows the gap. evo-marko has no education notice yet.

Check: open the evo-react Storybook story `notices-tips-evoeducationnotice--iconless` and run `getComputedStyle(document.querySelector(".education-notice__title")).marginInlineStart` in the preview (`"12px"`). The title's left edge is 12px right of `.education-notice__header`, while `.education-notice__main` is at 0px.
