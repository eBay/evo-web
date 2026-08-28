---
"@ebay/skin": patch
"@evo-web/marko": patch
---

Add `video`, a CSS shell and Marko component for an accessible video player built on a native `<video>` element with a composable `video__controls` bar, replacing the previous `shaka-player` based approach. DASH and HLS sources load their media engine on demand, with fallback across multiple `@source` entries. Includes poster, loading and error states; mute, volume, captions, fullscreen and report controls; controllable `playing`/`volume`/`muted`/`language` inputs with change callbacks; side-loaded `@track` captions; localizable `a11y*Text` labels that also gate their optional controls (captions, audio, volume slider, fullscreen, report, seek); `offscreen-pause`, autoplay coordination and `play-view="fullscreen"` behaviors; and an overlay `@nav` link variant. In `evo-select`, spread HTML input is now applied before explicit attributes so `disabled`, `id` and the `value` binding are no longer overridden by it.
