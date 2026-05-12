---
"@ebay/skin": patch
---

fix(page-notice, section-notice): unbold action CTA links per design spec

Links and `button.fake-link` elements inside the `__cta` slot of
`page-notice` and `section-notice` were rendering bold because the
components had blanket rules that bolded every link inside the
component. The Playbook design spec calls for unbolded CTA action
text. The fix scopes `font-weight: bold` to the body slots (`__main`,
`__footer`) where prose-with-links lives, so `__cta` links pick up
the default normal weight without needing an override.
