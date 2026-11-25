---
type: a11y
impact: low
effort: low
site: packages/skin/src/sass/section-notice/section-notice.scss
---

# Space the section-notice CTA and dismiss targets to meet WCAG 2.5.8

In the three iconless Section Notice stories with a CTA link and a dismiss button, the two targets sit closer than WCAG 2.5.8 (Target Size, Minimum) allows. This is a spacing fix in `section-notice.scss`, not markup.

Check: run axe-core on `skin-section-notice-iconless--dismiss-and-link-cta` in Skin Storybook; `target-size` fails.
