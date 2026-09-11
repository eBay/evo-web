<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-video
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

## evo-video Usage

Video player supporting plain video sources plus DASH (`.mpd`) and HLS (`.m3u8`)
playlists, with the media engine loaded on demand. Provides play/pause, seek,
captions, volume/mute, fullscreen and optional report controls, a poster play
overlay, loading and error states, label-gated optional controls, an overlay `@nav` link,
and offscreen auto-pause via `offscreen-pause`.

```marko
<evo-video muted autoplay offscreen-pause>
  <@source src="https://example.com/playlist.mpd"/>
</evo-video>
```

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/evo-marko/?path=/story/media-evo-video)
- [Storybook Docs](https://ebay.github.io/evo-web/evo-marko/?path=/docs/media-evo-video)
