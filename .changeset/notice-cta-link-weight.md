---
"@ebay/skin": patch
---

fix(page-notice, section-notice): unbold action CTA links per design spec

Links and `button.fake-link` elements inside the `__cta` slot of
`page-notice` and `section-notice` were rendering bold because the
components have blanket rules that bold every link inside the
component. The Playbook design spec calls for unbolded CTA action
text. The fix adds an override scoped to the `__cta` slot only, leaving
the existing bold weight on any non-CTA links unchanged.
