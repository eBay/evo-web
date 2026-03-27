import React, { SyntheticEvent, useState } from "react";
import { Meta } from "@storybook/react-vite";
import "shaka-player/dist/controls.css";

import { action } from "storybook/actions";
import { EbayButton } from "../../ebay-button";
import { EbayVideo, EbayVideoProps, EbayVideoSource } from "../index";
import { PlayEventProps, VolumeChangeProps } from "../video";

export default {
    component: EbayVideo,
    title: "media/ebay-video",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `Video player. Supports either MPD or M3U8 playlist formats. Natively uses \`shaka\` player under the hood. For resizing, \`ebay-video\` supports fixed width or variable width. If no width is provided the video tag will resize based on the container size.

## Usage

### Import

\`\`\`jsx harmony
import { EbayVideo } from "@ebay/ui-core-react/ebay-video";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/progress-spinner";
import "@ebay/skin/video";
import "shaka-player/dist/controls.css";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/progress-spinner.css";
@import "@ebay/skin/video.css";
import "shaka-player/dist/controls.css";
\`\`\``,
            },
        },
    },
    argTypes: {
        width: { control: "number" },
        height: { control: "number" },
        thumbnail: { description: "URL path for the video thumbnail", control: "text" },
        action: {
            description: "`play` or `pause`: will programatically perform the given action",
            options: ["play", "pause"],
            control: { type: "select" },
        },
        volume: { description: "sets sound volume", control: "number" },
        volumeSlider: { description: "keep or remove volume slider, default is `false`", control: "boolean" },
        muted: { description: "mute or unmute video, default is `false`", control: "boolean" },
        playView: {
            description:
                "`inline` or `fullscreen`. When player starts to play, will either play `inline` (default) or switch to `fullscreen`",
            options: ["inline", "fullscreen", "inline", "fullscreen"],
            control: { type: "select" },
        },
        a11yLoadText: { description: "a11y text for the loading spinner", control: "text" },
        a11yPlayText: { description: "a11y text for the play button", control: "text" },
        errorText: {
            description: "content for error when an either the library or video cannot load",
            control: "text",
        },
        reportText: { description: "text for report button", control: "text" },
        onLoadError: {
            description: "triggered when there is a load error with video player or source",
            action: "onLoadError",
            table: { category: "Events", defaultValue: { summary: "(Event)" } },
        },
        onPlay: {
            description: "triggered when playback starts",
            action: "onPlay",
            table: { category: "Events", defaultValue: { summary: "(Event, { player })" } },
        },
        onVolumeChange: {
            description: "triggered when volume is changed",
            action: "onVolumeChange",
            table: { category: "Events", defaultValue: { summary: "(Event, { volume: number, muted: boolean })" } },
        },
        onReport: {
            description: "triggered when report button is clicked",
            action: "onReport",
            table: { category: "Events" },
        },
        src: { description: "video/playlist URL", control: "text" },
        type: { description: "playlist type, `hls` or `dash`", options: ["hls", "dash"], control: { type: "select" } },
        hideReportButton: { description: "Hides the report button", control: "boolean" },
    },
} as Meta;

const defaultProps: EbayVideoProps = {
    a11yLoadText: "Loading",
    a11yPlayText: "Click to play",
    errorText: "An error has occurred",
    width: 600,
    height: 400,
    onPlay: (e: SyntheticEvent<HTMLVideoElement>, props: PlayEventProps) => action("onPlay")(e, props),
    onVolumeChange: (e: SyntheticEvent<HTMLVideoElement>, props: VolumeChangeProps) =>
        action("onVolumeChange")(e, props),
    onLoadError: (err: Error) => action("onLoadError")(err),
    onReport: (e) => action("onReport")(e),
};

export const Default = () => (
    <EbayVideo
        {...defaultProps}
        thumbnail="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/iphone-thumbnail.jpg"
        volumeSlider
    >
        <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd" type="dash" />
    </EbayVideo>
);

export const SingleVideo = () => (
    <EbayVideo {...defaultProps}>
        <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4" />
    </EbayVideo>
);

export const MultipleVideos = () => (
    <EbayVideo {...defaultProps} thumbnail="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/iphone-thumbnail.jpg">
        <EbayVideoSource
            src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
            type="hls"
        />
        <EbayVideoSource
            src="https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd"
            type="dash"
        />
    </EbayVideo>
);

export const Fail = () => (
    <EbayVideo {...defaultProps}>
        <EbayVideoSource src="wrong" />
    </EbayVideo>
);

export const FailInsidePlaylist = () => (
    <EbayVideo {...defaultProps}>
        <EbayVideoSource
            src="http://videoservices.vip.qa.ebay.com/videos/v1/b645f08316c0a4e114537903ffffffad/playlist.mpd"
            type="dash"
        />
    </EbayVideo>
);

export const Captions = () => (
    <EbayVideo {...defaultProps}>
        <EbayVideoSource src="https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd" />
    </EbayVideo>
);

export const ReportText = () => (
    <EbayVideo {...defaultProps} reportText="Report" onReport={action("report")}>
        <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd" type="dash" />
    </EbayVideo>
);

export const NoReportButton = () => (
    <EbayVideo {...defaultProps} hideReportButton>
        <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd" type="dash" />
    </EbayVideo>
);

export const MutedAutoplay = () => (
    <EbayVideo {...defaultProps} muted autoPlay>
        <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd" type="dash" />
    </EbayVideo>
);

export const FlexibleContainer = () => (
    <div style={{ width: "100%" }}>
        <EbayVideo {...defaultProps}>
            <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd" type="dash" />
        </EbayVideo>
    </div>
);

export const Controlled = () => {
    const [playing, setPlaying] = useState(undefined);
    const [muted, setMuted] = useState(false);

    return (
        <>
            <EbayButton onClick={() => setPlaying(!playing)}>{playing ? "Pause" : "Play"}</EbayButton> &nbsp;
            <EbayButton onClick={() => setMuted(!muted)}>{muted ? "Unmute" : "Mute"}</EbayButton>
            <EbayVideo
                style={{ marginTop: "1em" }}
                action={playing ? "play" : playing === false ? "pause" : undefined}
                muted={muted}
                onPlay={action("playing")}
                onVolumeChange={action("volume changed")}
                {...defaultProps}
            >
                <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd" type="dash" />
            </EbayVideo>
        </>
    );
};
