---
type: a11y
impact: med
effort: low
site: packages/skin/src/sass/checkbox/stories/mixed.stories.js › base
---

# Replace `aria-checked="mixed"` on the native mixed checkbox with the `indeterminate` property

The Checkbox CSS page tells consumers to put `aria-checked="mixed"` on `<input type="checkbox">`, and the `mixed` `base` story does, while the mixed look comes only from placing `icon-checkbox-mixed-18` in the `checkbox__checked` slot of a natively `checked` input. ARIA in HTML forbids `aria-checked` on a native checkbox and browsers expose the native state, so assistive technology is told "checked" while the control looks mixed (axe `aria-conditional-attr`; not yet confirmed with a screen reader), and activating it flips to unchecked while `aria-checked` stays "mixed". It was carried into the docs migration unchanged by decision on 2026-11-25. Direction: set the `indeterminate` property instead (exposed as "mixed"), in a Storybook-only `<script>` in the story and in `src/routes/_index/main.js` for the docs demo, keep the icon swap, remove `aria-checked`, and rewrite the page's prose; no framework implements a mixed checkbox yet. Full write-up: "1.5 Mixed checkbox, carried over unchanged" in `docs/adr/supporting-docs/0008-skin-storybook-docs-integration-story-discrepancies.md`.

Check: run axe-core on `skin-checkbox-mixed--base` in Skin Storybook; `aria-conditional-attr` fails on the input.
