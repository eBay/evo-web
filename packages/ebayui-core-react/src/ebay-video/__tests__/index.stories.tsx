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
