import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EvoButton } from "../button/button";
import { EvoVideo } from "./video";
import type { EvoVideoControls, EvoVideoProps } from "./types";

const defaultControls = {
  timeline: { a11yText: "Seek" },
  captions: {
    a11yText: "Closed captions",
    captionsOffText: "Off",
  },
  audio: {
    a11yMuteText: "Mute",
    a11yUnmuteText: "Unmute",
    a11yVolumeText: "Volume",
  },
  fullscreen: {
    a11yEnterText: "Enter fullscreen",
    a11yExitText: "Exit fullscreen",
  },
} satisfies EvoVideoControls;

function ControlledVideo(args: EvoVideoProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);

  return (
    <>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <EvoButton onClick={() => setPlaying((value) => !value)}>
          {playing ? "Pause" : "Play"}
        </EvoButton>
        <EvoButton onClick={() => setMuted((value) => !value)}>
          {muted ? "Unmute" : "Mute"}
        </EvoButton>
      </div>
      <EvoVideo
        {...args}
        playing={playing}
        muted={muted}
        volume={volume}
        onPlayingChange={(value) => {
          setPlaying(value);
          args.onPlayingChange?.(value);
        }}
        onMutedChange={(value) => {
          setMuted(value);
          args.onMutedChange?.(value);
        }}
        onVolumeValueChange={(value) => {
          setVolume(value);
          args.onVolumeValueChange?.(value);
        }}
      />
      <p>
        The video is {playing ? "playing" : "paused"},{" "}
        {muted ? "muted" : `at volume ${Math.round(volume * 100)}%`}.
      </p>
    </>
  );
}

const meta: Meta<typeof EvoVideo> = {
  title: "Media/EvoVideo",
  component: EvoVideo,

  argTypes: {
    a11yPlayText: {
      type: { name: "string", required: true },
      control: "text",
    },
    a11yPauseText: {
      type: { name: "string", required: true },
      control: "text",
    },
    a11yLoadText: {
      type: { name: "string", required: true },
      control: "text",
    },
    errorText: {
      type: { name: "string", required: true },
      control: "text",
    },
    playView: {
      control: "select",
      options: ["inline", "fullscreen"],
    },
    playing: { control: "boolean" },
    volume: { control: { type: "range", min: 0, max: 1, step: 0.01 } },
    muted: { control: "boolean" },
    currentTime: { control: "number" },
    fullscreen: { control: "boolean" },
    language: { control: "text" },
    spinnerTimeout: { control: "number" },
    onLoadError: { action: "load-error", table: { category: "Events" } },
    onPlayingChange: {
      action: "playing-change",
      table: { category: "Events" },
    },
    onVolumeValueChange: {
      action: "volume-value-change",
      table: { category: "Events" },
    },
    onMutedChange: {
      action: "muted-change",
      table: { category: "Events" },
    },
    onLanguageChange: {
      action: "language-change",
      table: { category: "Events" },
    },
    onFullscreenChange: {
      action: "fullscreen-change",
      table: { category: "Events" },
    },
    onCurrentTimeChange: {
      action: "current-time-change",
      table: { category: "Events" },
    },
  },
  args: {
    sources: [
      {
        src: "https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd",
        engine: "dash",
      },
    ],
    tracks: [],
    width: 640,
    height: 360,
    poster:
      "https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/iphone-thumbnail.jpg",
    preload: "metadata",
    a11yPlayText: "Play",
    a11yPauseText: "Pause",
    a11yLoadText: "Loading",
    errorText: "An error has occurred",
    controls: defaultControls,
  },
};

export default meta;
type Story = StoryObj<typeof EvoVideo>;

/** A video player provides playback, timeline, captions, audio, and fullscreen controls. */
export const Default: Story = {};

/** A DASH stream exposes its embedded captions through the captions menu. */
export const Captions: Story = {
  args: {
    sources: [
      {
        src: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd",
        engine: "dash",
      },
    ],
  },
};

/** A navigation overlay opens the destination while playback controls remain visible. */
export const WithNav: Story = {
  args: {
    autoPlay: true,
    muted: true,
    offscreenPause: true,
    nav: {
      href: "https://www.ebay.com",
      target: "_blank",
      a11yText: "Visit eBay",
    },
  },
};

/** A side-loaded text track is offered through the captions menu. */
export const WithTrack: Story = {
  args: {
    sources: [
      {
        src: "https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4",
        type: "video/mp4",
      },
    ],
    tracks: [
      {
        src: "https://raw.githubusercontent.com/shaka-project/shaka-player/main/demo/assets/elephants-dream-subtitles-en.vtt",
        srcLang: "en",
        kind: "captions",
        label: "English",
      },
    ],
  },
};

/** External controls synchronize with the player's playback and audio state. */
export const Controlled: Story = {
  render: (args) => <ControlledVideo {...args} />,
};

/** The optional report action appears in the player's canonical control order. */
export const Report: Story = {
  args: {
    controls: {
      ...defaultControls,
      report: {
        a11yText: "Report this video",
        onClick: action("report"),
      },
    },
  },
};
