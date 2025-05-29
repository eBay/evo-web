# EbayVideo

Video player. Supports either MPD or M3U8 playlist formats.
Natively uses `shaka` player under the hood. For resizing, `ebay-video` supports fixed width or variable width. If no width is provided the video tag will resize based on the container size.

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/media-ebay-video--default)

## Usage

```bash
yarn add @ebay/ui-core-react shaka-player
```

```jsx
import { EbayVideo } from '@ebay/ui-core-react/ebay-video'
import '@ebay/skin/video'
import 'shaka-player/dist/controls.css'

<EbayVideo
    width="600"
    height="400"
    onLoadError(err => {
        console.log("handle error", err);
    })>
        <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd" />
</EbayVideo>
```

## EbayVideo Props

| Name         | Type    | Required | Description                                                                                                         |
| ------------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| width        | Number  | No       |                                                                                                                     |
| height       | Number  | No       |                                                                                                                     |
| thumbnail    | String  | No       | URL path for the video thumbnail                                                                                    |
| action       | String  | No       | `play` or `pause`: will programatically perform the given action                                                    |
| volume       | Number  | No       | sets sound volume                                                                                                   |
| volumeSlider | Boolean | No       | keep or remove volume slider, default is `false`                                                                    |
| muted        | Boolean | No       | mute or unmute video, default is `false`                                                                            |
| playView     | String  | No       | `inline` or `fullscreen`. When player starts to play, will either play `inline` (default) or switch to `fullscreen` |
| a11yLoadText | String  | Yes      | a11y text for the loading spinner                                                                                   |
| a11yPlayText | String  | Yes      | a11y text for the play button                                                                                       |
| errorText    | String  | Yes      | content for error when an either the library or video cannot load                                                   |
| reportText   | String  | Yes      | text for report button                                                                                              |

## Callbacks

| Name           | Required | Description                                                      | Arguments                                   |
| -------------- | -------- | ---------------------------------------------------------------- | ------------------------------------------- |
| onLoadError    | No       | triggered when there is a load error with video player or source | (Event)                                     |
| onPlay         | No       | triggered when playback starts                                   | (Event, { player })                         |
| onVolumeChange | No       | triggered when volume is changed                                 | (Event, { volume: number, muted: boolean }) |
| onReport       | No       | triggered when report button is clicked                          |                                             |

## EbayVideoSource Props

| Name | Type   | Required | Description                    |
| ---- | ------ | -------- | ------------------------------ |
| src  | String | Yes      | video/playlist URL             |
| type | String | No       | playlist type, `hls` or `dash` |
