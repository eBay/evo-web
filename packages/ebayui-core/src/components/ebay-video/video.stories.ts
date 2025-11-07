import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Component from "./index.marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: {
        ...args,
        renderBody: (args.renderBody
            ? (out: any) => {
                  out.html(args.renderBody);
              }
            : null) as any,
    },
});

export default {
    title: "media/ebay-video",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        thumbnail: {
            description: "The url path for the video thumbnail",
            control: { type: "text" },
        },
        action: {
            description:
                'Either "play" or "pause". Will programatically perform the given action',
            control: { type: "text" },
        },
        volume: {
            type: "number",
            table: {
                defaultValue: 0,
            },
            control: { type: "number", min: 0, max: 1, step: 0.1 },
        },
        muted: {
            type: "boolean",
            control: { type: "boolean" },
            description: "True/False to mute or unmute video. Default is false",
        },
        layout: {
            type: "string",
            description:
                'Either "default" or "compact". In "compact" layout, only play/pause, mute/unmute controls are available. Also the remaining time on the videois displayed',
            control: { type: "text" },
        },
        playView: {
            description:
                'Either "inline", or "fullscreen". When player strats to play, will either play "inline" (default) or switch to "fullscreen"',
            control: { type: "text" },
        },
        a11yLoadText: {
            control: { type: "text" },
            description:
                'The accessibility text for the loading spinner. Default is "Loading"',
        },
        a11yPlayText: {
            control: { type: "text" },
            description:
                'The accessibility text for the play button. Default is "Click to play"',
        },
        a11yMuteText: {
            control: { type: "text" },
            description:
                'The accessibility text for mute video. Default is "Mute"',
        },
        a11yUnmuteText: {
            control: { type: "text" },
            description:
                'The accessibility text for unmute video. Default is "Unmute"',
        },
        a11yFullscreenText: {
            control: { type: "text" },
            description:
                'The accessibility text for enter fullscreen. Default is "Enter Fullscreen"',
        },
        a11yExitFullscreenText: {
            control: { type: "text" },
            description:
                'The accessibility text for enter fullscreen. Default is "Exit Fullscreen"',
        },
        errorText: {
            control: { type: "text" },
            description:
                'The content for error when an either the library or video cannot load. Default is "An error has occurred"',
        },
        a11yReportText: {
            control: { type: "text" },
            description: 'The text for report button. Default is "Report"',
        },
        volumeSlider: {
            type: "boolean",
            description:
                "True/False to keep or remove volume slider. Default is False",
        },
        shakaConfig: {
            description:
                "The Shaka player [configuration object](https://shaka-player-demo.appspot.com/docs/api/tutorial-config.html). This allows users to control Shaka player.",
            control: { type: "object" },
        },
        nav: {
            name: "@nav",
            table: {
                category: "@attribute tags",
            },
            description:
                "An optional object to turn the video into a link. Accepts `href` and `target` properties.",
        },
        source: {
            name: "@source",
            table: {
                category: "@attribute tags",
            },
        },
        "onLoad-error": {
            action: "on-load-error",
            description:
                "Triggered when there is a load error with video player or source",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
        onPlay: {
            action: "on-play",
            description: "Triggered when play begins",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, player }",
                },
            },
        },
        "onVolume-change": {
            action: "on-volume-change",
            description:
                "Triggered when volume is changed. Will return the values of the volume decimal and muted true/false",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, volume, muted }",
                },
            },
        },
        onReport: {
            action: "on-report",
            description: "Triggered when report button is clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ }",
                },
            },
        },
        onPause: {
            action: "on-Pause",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ }",
                },
            },
        },

        onAbort: {
            action: "on-abort",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onCanplay: {
            action: "on-canplay",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onCanplaythrough: {
            action: "on-canplaythrough",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onDurationchange: {
            action: "on-durationchange",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onEmptied: {
            action: "on-emptied",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onEncrypted: {
            action: "on-encrypted",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onEnded: {
            action: "on-ended",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onError: {
            action: "on-error",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onLoadstart: {
            action: "on-loadstart",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onProgress: {
            action: "on-progress",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onRatechange: {
            action: "on-ratechange",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onSeeked: {
            action: "on-seeked",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onSeeking: {
            action: "on-seeking",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onStalled: {
            action: "on-stalled",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onSuspend: {
            action: "on-suspend",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onTimeupdate: {
            action: "on-timeupdate",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
        onWaiting: {
            action: "on-waiting",
            table: { category: "Events", defaultValue: { summary: "{ }" } },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    width: "700",
    height: "400",
    source: [
        {
            src: "https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd",
            type: "dash",
        },
    ] as any,
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-video", Default.args),
        },
    },
};

export const NavEnabled = Template.bind({});
NavEnabled.storyName = "Navigation Enabled Video";
NavEnabled.args = {
    width: "700",
    height: "400",
    nav: {
        href: "https://www.ebay.com",
        target: "_blank"
    } as any,
    source: [
        {
            src: "https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd",
            type: "dash",
        },
    ] as any,
};
NavEnabled.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-video", NavEnabled.args),
        },
    },
};

export const ios = Template.bind({});
ios.storyName = "ios";
ios.args = {
    width: "700",
    height: "400",
    source: [
        {
            src: "https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.m3u8",
            type: "hls",
        },
        {
            src: "https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd",
            type: "dash",
        },
    ] as any,
    shakaConfig: {
        streaming: {
            lowLatencyMode: true,
        },
    },
};

ios.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-video", ios.args),
        },
    },
};

export const mp4 = Template.bind({});
mp4.storyName = "mp4";
mp4.args = {
    width: "460",
    height: "300",
    "a11y-load-text": "This video is loading now",
    "a11y-play-text": "Click to start this video",
    source: [
        {
            src: "https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4",
        },
    ] as any,
};
mp4.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-video", mp4.args),
        },
    },
};

export const compactLayout = Template.bind({});
compactLayout.storyName = "Compact Layout";
compactLayout.args = {
    width: "700",
    height: "400",
    nav: {
        href: "https://www.ebay.com",
        target: "_blank"
    } as any,
    layout: "compact" as any, // Using 'as any' to maintain backward compatibility
    offscreenPause: true,
    autoplay: true,
    loop: true,
    // videoTarget property is not defined in the Input type
    // Using type assertion to maintain backward compatibility
    thumbnail: "https://i.ebayimg.com/images/g/EvEAAeSw3oFos1hF/s-l500.webp",
         
    muted: true,
    "a11y-load-text": "This video is loading now",
    "a11y-play-text": "Click to start this video",
    "a11y-mute-text": "Click to mute this video",
    "a11y-unmute-text": "Click to unmute this video",
    "error-text": "Sorry, this video cannot be played at this time.",

    source: [
        {
            src: "https://videoservices.vip.qa.ebay.com/videos/v1/52fced381990ad72e301760efffffef8/playlist.mpd",
            type: "dash",
        },
    ] as any,
};
compactLayout.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-video-ad", compactLayout.args),
        },
        description: {
            story: "This example demonstrates how to customize the video player controls using the new configurable videoConfig fields."
        }
    },
};


export const videoError = Template.bind({});
videoError.storyName = "Compact layout with video load error";
videoError.args = {
    width: "700",
    height: "400",
    layout: "compact",
    autoplay: true,
    loop: true,
    thumbnail: "https://i.ebayimg.com/images/g/EvEAAeSw3oFos1hF/s-l500.webp",
    muted: true,
    "a11y-load-text": "This video is loading now",
    "a11y-play-text": "Click to start this video",
    "a11y-mute-text": "Click to mute this video",
    "a11y-unmute-text": "Click to unmute this video",
    "error-text": "Sorry, this video cannot be played at this time.",

    source: [
        {
            src: "https://videoservices1.vip.qa.ebay.com/videos/v1/52fced381990ad72e301760efffffef8/playlist.mpd",
            type: "dash",
        },
    ] as any,
};
videoError.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-video", videoError.args),
        },
        description: {
            story: "This example demonstrates how to customize the video player controls using the new configurable videoConfig fields."
        }
    },
};


export const compactLayoutSmallContainer = Template.bind({});
compactLayoutSmallContainer.args = {
    width: "300",
    height: "300",
    layout: "compact",
    autoplay: true,
    loop: true,
    nav: {
        href: "https://www.ebay.com",
        target: "_blank"
    } as any,
    thumbnail: "https://i.ebayimg.com/images/g/EvEAAeSw3oFos1hF/s-l500.webp",
         
    muted: true,
    "a11y-load-text": "This video is loading now",
    "a11y-play-text": "Click to start this video",
    "a11y-mute-text": "Click to mute this video",
    "a11y-unmute-text": "Click to unmute this video",
    "error-text": "Sorry, this video cannot be played at this time.",

    source: [
        {
            src: "https://videoservices.vip.qa.ebay.com/videos/v1/52fced381990ad72e301760efffffef8/playlist.mpd",
            type: "dash",
        },
    ] as any,
};
compactLayoutSmallContainer.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-video", compactLayoutSmallContainer.args),
        },
    },
};
