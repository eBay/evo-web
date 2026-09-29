---
"@evo-web/marko": patch
---

Make `evo-video`'s `@source` attribute tag optional and guard the places that
spread it, so a consumer building sources with `<for>` type-checks (a
`<for>`-generated attribute tag is always `AttrTag<…> | undefined`) and a player
with no sources reports "No video source provided" instead of throwing on the
spread. Drop `src` from the input as well, since the component assigns the
`<video>` element's `src` itself from the resolved `@source`. Also fix
`isDashMedia` throwing `TypeError: Cannot use 'in' operator to search for
'getTracksFor' in null` when a media engine is present but null.
