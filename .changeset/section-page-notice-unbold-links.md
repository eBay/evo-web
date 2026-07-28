---
"@ebay/skin": patch
---

fix(page-notice, section-notice): remove bold font weight from all links

`__main` and `__footer` links/`button.fake-link` elements were still
rendering bold, left over from a prior fix (#648) that only excluded
`__cta` links from the bold rule under the assumption that `__main`/
`__footer` were prose slots. In practice, `__footer` is commonly used
for a single action link (as the "with action" example demonstrates),
and no bolded links appear anywhere in the Playbook spec for either
component. Removes the bold rule entirely so links are normal weight
regardless of which slot they render in.
