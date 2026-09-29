# EvoVideo migration

## Composition

`EbayVideoSource` has been removed. Pass ordered fallback sources and text tracks as data.

```diff
-<EbayVideo thumbnail="/poster.jpg">
-  <EbayVideoSource src="/video.mpd" type="dash" />
-</EbayVideo>
+<EvoVideo
+  poster="/poster.jpg"
+  sources={[{ src: "/video.mpd", engine: "dash" }]}
+  tracks={[]}
+/>
```

`children` is unsupported. Use `sources`, `tracks`, `nav`, and `controls`.

## Renamed and moved props

- `thumbnail` → native `poster`
- `action="play" | "pause"` → `playing={boolean}`
- Source `type="hls" | "dash"` → `engine="hls" | "dash"`; native `type` remains the MIME type
- `volumeSlider` → `controls.audio.a11yVolumeText`
- `reportText`, `a11yReportText`, `onReport`, and `hideReportButton` → optional `controls.report`
- `a11yMuteText` and `a11yUnmuteText` → `controls.audio`
- `a11yFullscreenText` and `a11yExitFullscreenText` → `controls.fullscreen`
- `a11ySkipToLiveText` has been removed; use `controls.timeline.a11yText` for the seek slider

```tsx
<EvoVideo
  {...props}
  controls={{
    timeline: { a11yText: "Seek" },
    audio: {
      a11yMuteText: "Mute",
      a11yUnmuteText: "Unmute",
      a11yVolumeText: "Volume",
    },
    report: {
      a11yText: "Report video",
      onClick: handleReport,
    },
    fullscreen: {
      a11yEnterText: "Enter fullscreen",
      a11yExitText: "Exit fullscreen",
    },
  }}
/>
```

Play/pause is always available. Without `controls.timeline`, the player renders the remaining-time layout. `EvoVideo` owns the order of optional control groups.

## Removed props

- `layout`: the Evo player has one responsive Skin layout
- `cdnVersion`: media engines are package dependencies
- `shakaConfig`: EvoVideo uses the same Video.js media adapters as Evo Marko, not Shaka UI

## Events and state

- `onPlay` and `onPause` are now native React media event handlers
- `onVolumeChange` is now the native React media event handler
- Use `onPlayingChange` for the actual boolean playback state
- Use `onVolumeValueChange` for the numeric volume
- Use `onMutedChange`, `onLanguageChange`, `onFullscreenChange`, and `onCurrentTimeChange` for player state
- `onLoadError` now receives `{ cause, source, sourceIndex, engine }`

Playback, seeking, and fullscreen props request browser state changes. Their change callbacks report the resulting browser state.

## Navigation

Pass navigation as an object. Custom links follow the same `as` convention as `EvoButton`.

```tsx
<EvoVideo
  {...props}
  nav={{
    href: "/listing/123",
    a11yText: "View listing",
    as: ListingLink,
  }}
/>
```

Wrap routing-library links when they use a destination prop other than `href`.
