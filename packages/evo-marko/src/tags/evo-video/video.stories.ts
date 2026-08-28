import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import Video, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import CaptionsTemplate from "./examples/captions.marko";
import CaptionsTemplateCode from "./examples/captions.marko?raw";
import WithNavTemplate from "./examples/with-nav.marko";
import WithNavTemplateCode from "./examples/with-nav.marko?raw";
import WithTrackTemplate from "./examples/with-track.marko";
import WithTrackTemplateCode from "./examples/with-track.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";

export default {
  title: "media/evo-video",
  component: Video,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    source: {
      description:
        "Attribute tag for a video source. May be repeated; on a load failure the next `@source` is tried.",
      "@": {
        src: {
          type: "string",
          control: "text",
          description:
            "URL of the video, DASH manifest (`.mpd`), or HLS playlist (`.m3u8`)",
        },
        type: {
          type: "string",
          options: ["hls", "dash"],
          control: "inline-radio",
          description:
            "Forces the media engine when the URL extension is not enough to infer it",
        },
      },
    },
    track: {
      description:
        "Attribute tag for a side-loaded text track, passed through to a native `<track>` element and offered in the captions menu.",
      "@": {
        ["<track> attributes" as any]: {
          description:
            "All attributes from [the native HTML `<track>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/track) will be passed through.",
        },
      },
    },
    nav: {
      description:
        "Attribute tag rendering a navigation link over the video. When present, click-to-play and double-click fullscreen are disabled and the controls stay visible.",
      "@": {
        ["<a> attributes" as any]: {
          description:
            "All attributes from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through.",
        },
      },
    },
    playView: {
      type: "string",
      options: ["inline", "fullscreen"],
      control: "inline-radio",
      description:
        'Setting to "fullscreen" enters fullscreen whenever playback starts',
    },
    playing: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Whether the video is playing",
    },
    volume: {
      controllable: true,
      type: "number",
      control: { type: "range", min: 0, max: 1, step: 0.01 },
      description: "Volume of the video, between 0 and 1",
    },
    muted: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Whether the video is muted",
    },
    currentTime: {
      controllable: true,
      type: "number",
      control: "number",
      description: "Playback position in seconds; setting it seeks the video",
    },
    fullscreen: {
      controllable: true,
      type: "boolean",
      control: "boolean",
      description: "Whether the player is fullscreen",
    },
    language: {
      controllable: true,
      type: "string",
      control: "text",
      description:
        "Language of the selected captions track, or `null` for captions off",
      table: { type: { summary: "string | null" } },
    },
    offscreenPause: {
      type: "boolean",
      control: "boolean",
      description:
        "Pauses the video when it is less than 50% visible in the viewport or the window loses focus, and resumes autoplay when it returns",
    },
    spinnerTimeout: {
      type: "number",
      control: "number",
      description:
        "How long the loading spinner may show before hiding itself, in milliseconds. Defaults to 2000.",
    },
    errorText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'Text shown in the overlay when the video fails to load. Defaults to "An error has occurred".',
    },
    report: {
      description:
        "Attribute tag rendering an `<evo-icon-button>` report button in the control bar. Only renders when provided; body content replaces the default flag icon.",
      "@": {
        a11yText: {
          type: { name: "string", required: true },
          control: "text",
          description: "Localized accessible name for the report button",
        },
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All other `<evo-icon-button>` inputs (notably `onClick`) pass through.",
        },
      },
    },
    a11yPlayText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'Localized accessible name for the play button. Defaults to "Play".',
    },
    a11yPauseText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'Localized accessible name for the pause button. Defaults to "Pause".',
    },
    a11ySeekText: {
      type: "string",
      control: "text",
      description:
        "Localized accessible name for the seek slider. The seek slider and its timestamps only render when this is provided.",
    },
    a11yCaptionsText: {
      type: "string",
      control: "text",
      description:
        "Localized accessible name for the captions button. The button only renders when this is provided and the video has text tracks.",
    },
    a11yMuteText: {
      type: "string",
      control: "text",
      description:
        "Localized accessible name for the audio button while unmuted. The audio button only renders when this is provided, together with `a11yUnmuteText`.",
    },
    a11yUnmuteText: {
      type: "string",
      control: "text",
      description:
        "Localized accessible name for the audio button while muted.",
    },
    a11yVolumeText: {
      type: "string",
      control: "text",
      description:
        "Localized accessible name for the volume slider. The slider only renders when this is provided in addition to the audio button's labels.",
    },
    a11yFullscreenText: {
      type: "string",
      control: "text",
      description:
        "Localized accessible name for the fullscreen button. The button only renders when this is provided, together with `a11yExitFullscreenText`.",
    },
    a11yExitFullscreenText: {
      type: "string",
      control: "text",
      description:
        "Localized accessible name for the fullscreen button while fullscreen.",
    },
    a11yLoadText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'Localized accessible name for the loading spinner. Defaults to "Loading".',
    },
    onLoadError: {
      action: "load-error",
      description: "Emitted when every provided `@source` has failed to load",
      table: { category: "Events" },
    },
    ["<video> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<video>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video) will be passed through. In particular, pass `width` and `height` to reserve space before the video loads and avoid layout shift.",
    },
  },
  args: {
    a11ySeekText: "Seek",
    a11yCaptionsText: "Closed captions",
    a11yMuteText: "Mute",
    a11yUnmuteText: "Unmute",
    a11yVolumeText: "Volume",
    a11yFullscreenText: "Enter fullscreen",
    a11yExitFullscreenText: "Exit fullscreen",
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const Captions = buildExtensionTemplate(
  CaptionsTemplate,
  CaptionsTemplateCode,
);

export const WithNav = buildExtensionTemplate(
  WithNavTemplate,
  WithNavTemplateCode,
);

export const WithTrack = buildExtensionTemplate(
  WithTrackTemplate,
  WithTrackTemplateCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledTemplateCode,
);
