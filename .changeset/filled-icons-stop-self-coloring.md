---
"@ebay/skin": minor
"@ebay/ebayui-core": minor
"@ebay/ui-core-react": minor
"@evo-web/marko": patch
"@evo-web/react": patch
---

Fix `confirmation-filled`, `attention-filled`, and `information-filled` icons rendering with a hardcoded color instead of `currentColor` when used outside of a notice component. The icon components no longer auto-apply an `icon--{status}-filled` color class; `inline-notice` and `section-notice` now cascade the status color onto their own icon via CSS instead (`section-notice`'s Marko component also now applies the `section-notice--{status}` root class needed for this, matching its React counterpart). `page-notice` already colored its status icon this way and is unaffected. Bare/standalone usage of these icons (outside any notice component) now correctly renders black via `currentColor`, matching Skin's own icon documentation.
