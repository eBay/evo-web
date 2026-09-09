---
"@ebay/skin": minor
"@evo-web/react": patch
"@evo-web/marko": patch
"@ebay/ebayui-core": minor
"@ebay/ui-core-react": minor
---

Deprecate `live-bag-thin-16`, `live-bag-16`, `live-bag-20`, `live-bag-24`, and `live-bag-filled-24`; use the equivalent `live-broadcast-*` icons instead. To stop live usage immediately without breaking existing consumers, the underlying artwork for these 5 icons has been swapped to match their `live-broadcast-*` counterparts — `EvoIconLiveBag16` (and its Marko/legacy equivalents) now render the broadcast icon under the existing name, with no code changes required. Consumers should still migrate to `live-broadcast-*` directly, since the deprecated names will be removed in a future major version.

The 3 colored `live-bag-play-filled-*-colored` variants are untouched pending a follow-up decision (no `live-broadcast` colored equivalent currently exists).
