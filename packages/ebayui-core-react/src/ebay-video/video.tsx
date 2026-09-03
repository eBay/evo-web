/* eslint-disable @typescript-eslint/ban-ts-comment, jsx-a11y/media-has-caption */
import React, {
    ComponentProps,
    FC,
    SyntheticEvent,
    MouseEvent,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
// need that for broken definitions workaround
// @ts-ignore
import shaka from "shaka-player/dist/shaka-player.ui";

import { filterByType } from "../common/component-utils";
import { Player, VideoAction, VideoPlayView } from "./types";
import EbayVideoSource from "./source";
import { ERROR_ANOTHER_LOAD, ERROR_NO_PLAYER, DEFAULT_SPINNER_TIMEOUT } from "./const";
import { MuteButtonControl } from "./controls/mute-button-control";
import { FullscreenButtonControl } from "./controls/fullscreen-button-control";
import { RemainingTimeControl } from "./controls/remaining-time-control";
import { CurrentTimeControl } from "./controls/current-time-control";
import { TotalTimeControl } from "./controls/total-time-control";
import { ReportButtonControl } from "./controls/report-button-control";
import { CaptionsControl } from "./controls/captions-control";
import { EbayEventHandler } from "../common/event-utils/types";
import { EbayIconPlayFilled64Colored } from "../ebay-icon/icons/ebay-icon-play-filled-64-colored";
import { EbayIconAttention64 } from "../ebay-icon/icons/ebay-icon-attention-64";
import { buildTimeString } from "./controls/time-utils";

export type PlayEventProps = {
    player: Player;
    auto: boolean;
};
export type VolumeChangeProps = {
    volume: number;
    muted: boolean;
};
export type EbayVideoProps = Omit<ComponentProps<"video">, "onPlay" | "onPause" | "onVolumeChange"> & {
    width?: number;
    height?: number;
    thumbnail?: string;
    action?: VideoAction;
    volume?: number;
    muted?: boolean;
    volumeSlider?: boolean;
    hideReportButton?: boolean;
    playView?: VideoPlayView;
    cdnVersion?: string;
    a11yPlayText: string;
    errorText: string;
    reportText?: string;
    a11yReportText?: string;
    a11yMuteText?: string;
    a11yUnmuteText?: string;
    a11yFullscreenText?: string;
    a11yExitFullscreenText?: string;
    a11ySkipToLiveText?: string;

    shakaConfig?: Record<string, unknown>;
    spinnerTimeout?: number;
    layout?: "default" | "compact";
    onLoadError?: (err: Error) => void;
    onPlay?: EbayEventHandler<HTMLVideoElement, PlayEventProps>;
    onPause?: EbayEventHandler<HTMLVideoElement, PlayEventProps>;
    onVolumeChange?: EbayEventHandler<HTMLVideoElement, VolumeChangeProps>;
    onReport?: (event?: MouseEvent<HTMLButtonElement>) => void;
};

const defaultControlPanelElements = [
    "play_pause",
    "current_time",
    "spacer",
    "total_time",
    "captions",
    "mute_popover",
    "report",
    "fullscreen_button",
];

const compactLayoutControlPanelElements = ["remaining_time", "spacer", "mute_popover", "play_pause"];

const videoConfig = {
    doubleClickForFullscreen: true,
    singleClickForPlayAndPause: true,
    customContextMenu: true,
    contextMenuElements: ["mute"],
    showUIAlways: false,
    addSeekBar: true,
    controlPanelElements: defaultControlPanelElements,
};

const compactConfig = {
    doubleClickForFullscreen: true,
    singleClickForPlayAndPause: true,
    customContextMenu: true,
    contextMenuElements: ["mute"],
    showUIAlways: false,
    addSeekBar: false,
    controlPanelElements: compactLayoutControlPanelElements,
};

const EbayVideo: FC<EbayVideoProps> = ({
    width,
    height,
    thumbnail,
    action,
    muted,
    playView = "inline",
    layout = "default",
    a11yPlayText,
    reportText,
    a11yReportText,
    a11yMuteText,
    a11yUnmuteText,
    a11yFullscreenText,
    a11yExitFullscreenText,
    a11ySkipToLiveText,
    volumeSlider,
    volume = 1,
    hideReportButton,
    errorText,
    shakaConfig,
    spinnerTimeout,
    onVolumeChange = () => {},
    onLoadError = () => {},
    onPlay = () => {},
    onPause = () => {},
    onReport = () => {},
    children,
    ...rest
}) => {
    const [playing, setPlaying] = useState<boolean>();
    const [failed, setFailed] = useState<boolean>();
    const [isAutoPlay, setIsAutoPlay] = useState(action === "play" || rest.autoPlay === true);
    const [isAutoPause, setIsAutoPause] = useState(false);
    const [showInitialPlayButton, setShowInitialPlayButton] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<Player>(null);
    const uiRef = useRef(null);

    const sources = filterByType(children, EbayVideoSource).map(({ props }) => props);

    const handleError = (err: Error) => {
        setFailed(true);
        // Hide initial play button on error
        setShowInitialPlayButton(false);
        onLoadError(err);
    };

    const loadSource = (index = 0) => {
        if (!sources.length || !playerRef.current) return;

        playerRef.current
            .load(sources[index]?.src)
            .then(() => {
                setFailed(false);
            })
            .catch((err) => {
                console.error(err);
                switch (err.code) {
                    case ERROR_ANOTHER_LOAD:
                        return;
                    case ERROR_NO_PLAYER:
                        setTimeout(() => loadSource(index), 0);
                        break;
                    default: {
                        const nextIndex = sources.length > index + 1 && index + 1;
                        if (nextIndex) {
                            setTimeout(() => loadSource(nextIndex), 0);
                        } else {
                            handleError(err);
                        }
                    }
                }
            });
    };

    useLayoutEffect(() => {
        const video = videoRef.current;
        const container = containerRef.current;
        if (!video || !container) return;

        video.volume = volume;
        video.muted = muted !== false;

        shaka.polyfill.installAll();

        playerRef.current = new shaka.Player();
        if (!playerRef.current) return;

        if (shakaConfig) {
            playerRef.current.configure(shakaConfig);
        }

        playerRef.current.addEventListener("error", () => handleError(new Error("Shaka-Player error")));

        // Create UI overlay
        uiRef.current = new shaka.ui.Overlay(playerRef.current, container, video);
        uiRef.current.configure({
            controlPanelElements: [],
            addSeekBar: false,
            // shaka-player 5 no longer merges partial configs with the
            // defaults, which silently dropped the buffering spinner
            showBufferingSpinner: true,
        });

        // Set locale if document language is available
        if (document?.documentElement?.lang) {
            uiRef.current.getControls().getLocalization().changeLocale([document.documentElement.lang]);
        }

        // Keep aria-valuetext on the seek bar <input type="range"> in sync with
        // the current playback position so screen readers announce time in
        // x:xx format rather than the raw decimal number that Shaka sets as
        // the numeric value.
        uiRef.current.getControls().addEventListener("timeandseekrangeupdated", () => {
            const controls = uiRef.current?.getControls();
            const player = uiRef.current?.getControls().getPlayer();
            if (!controls || !player) return;

            const seekRange = player.seekRange() as { start: number; end: number };
            const seekRangeSize = seekRange.end - seekRange.start;
            if (!isFinite(seekRangeSize) || player.isLive()) return;

            const displayTime = controls.getDisplayTime();
            const currentTime = Math.max(0, displayTime - seekRange.start);
            const showHour = seekRangeSize >= 3600;
            const valueText = buildTimeString(currentTime, showHour);

            const seekBar = container.querySelector<HTMLInputElement>(".shaka-seek-bar");
            if (seekBar) {
                seekBar.setAttribute("aria-valuetext", valueText);
            }
        });

        // See ebayui-core/ebay-video/component.ts for full explanation.
        // Shaka's compiled dist uses closed-over module functions internally,
        // so subclassing TextSelection can't intercept ARIA writes. Instead
        // we listen to captionselectionupdated, which fires after every
        // updateTextLanguages_ call, and correct two things:
        // 1. Trigger button: swap aria-pressed for aria-expanded="false".
        // 2. Menu items: replace aria-selected (meaningless on a plain button)
        //    with aria-current="true" on the selected item.
        uiRef.current.getControls().addEventListener("captionselectionupdated", () => {
            const el = container;
            const ccButton = el.querySelector<HTMLButtonElement>("button[shaka-status]");
            if (!ccButton) return;
            ccButton.removeAttribute("aria-pressed");
            ccButton.removeAttribute("aria-label");
            ccButton.setAttribute("aria-expanded", "false");

            const menu = el.querySelector(".shaka-text-languages");
            if (!menu) return;
            menu.querySelectorAll<HTMLButtonElement>("[aria-selected='true']").forEach((btn) => {
                btn.removeAttribute("aria-selected");
                btn.setAttribute("aria-current", "true");
            });
        });

        // Trigger re-render to show initial play button portal
        setShowInitialPlayButton(true);

        // Hide spinner after timeout
        const shakaSpinner = container.querySelector<HTMLElement>(".shaka-spinner");
        if (shakaSpinner) {
            setTimeout(() => {
                shakaSpinner.hidden = true;
            }, spinnerTimeout || DEFAULT_SPINNER_TIMEOUT);
        }

        playerRef.current
            .attach(video)
            .then(() => loadSource())
            .catch((err: Error) => handleError(err));

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
            if (uiRef.current) {
                uiRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (!videoRef.current) return;
        switch (action) {
            case "play":
                setIsAutoPlay(true);
                videoRef.current.play();
                break;
            case "pause":
                setIsAutoPause(true);
                videoRef.current.pause();
                break;
            default:
        }
    }, [action]);

    const showControls = () => {
        if (!uiRef.current) return;

        const baseConfig = layout === "compact" ? compactConfig : videoConfig;
        const copyConfig = {
            ...baseConfig,
            controlPanelElements: [...baseConfig.controlPanelElements],
        };

        if (volumeSlider === true) {
            const insertAt =
                copyConfig.controlPanelElements.length - 2 > 0
                    ? copyConfig.controlPanelElements.length - 2
                    : copyConfig.controlPanelElements.length;
            copyConfig.controlPanelElements.splice(insertAt, 0, "volume");
        }

        uiRef.current.configure(copyConfig);
        videoRef.current.controls = false;
        setTimeout(() => alignSeekbar(), 10);
    };

    const handlePlaying = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
        e.stopPropagation();

        showControls();
        alignSeekbar();

        if (playView === "fullscreen" && layout !== "compact") {
            videoRef.current.requestFullscreen();
        }

        setPlaying(true);
        onPlay(e, { player: playerRef.current, auto: isAutoPlay });

        // Reset isAutoPlay after emitting the event
        setIsAutoPlay(false);
    };

    const handleOnPlayClick = () => {
        // Remove play button from React tree before shaka player removes it
        setShowInitialPlayButton(false);
        videoRef.current.play();
    };

    const handleVolumeChange = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
        const eventTarget = e.currentTarget;
        onVolumeChange(e, {
            volume: Math.round((eventTarget.volume + Number.EPSILON) * 100) / 100,
            muted: eventTarget.muted,
        });
    };
    const alignSeekbar = () => {
        if (containerRef.current) {
            const buttonPanel = containerRef.current.querySelector<HTMLElement>(".shaka-controls-button-panel");
            const spacer = buttonPanel?.querySelector(".shaka-spacer");
            const rangeContainer = containerRef.current.querySelector<HTMLElement>(".shaka-range-container");
            if (buttonPanel && spacer && rangeContainer) {
                const buttonPanelRect = buttonPanel.getBoundingClientRect();
                const spacerRect = spacer.getBoundingClientRect();

                rangeContainer.style.marginRight = `${buttonPanelRect.right - spacerRect.right}px`;
                rangeContainer.style.marginLeft = `${spacerRect.left - buttonPanelRect.left}px`;
            }
        }
    };

    const handleOnPause = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
        // On IOS, the controls force showing up if the video exist fullscreen while playing.
        // This forces the controls to always hide
        videoRef.current.controls = false;

        onPause(e, { player: playerRef.current, auto: isAutoPause });

        // Reset isAutoPause after emitting the event
        setIsAutoPause(false);
        alignSeekbar();
    };

    const style = {
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
    };

    // Query for shaka controls container on render when play button should be shown
    const shakaControlsContainer =
        showInitialPlayButton && containerRef.current
            ? containerRef.current.querySelector<HTMLElement>(".shaka-controls-container")
            : null;

    return (
        <div
            style={style}
            className={classNames("video-player", {
                "video-player--poster": !playing,
                "video-player--compact": layout === "compact",
            })}
        >
            <div className="video-player__container" ref={containerRef} style={style}>
                <video
                    ref={videoRef}
                    poster={thumbnail}
                    playsInline
                    muted={muted !== false}
                    onPlaying={handlePlaying}
                    onPause={handleOnPause}
                    onVolumeChange={handleVolumeChange}
                    {...rest}
                >
                    {sources.map((source, i) => (
                        <source key={i} {...source} />
                    ))}
                </video>
            </div>
            <div className={classNames("video-player__overlay", { "video-player__overlay--hidden": !failed })}>
                <EbayIconAttention64 />
                <div className="video-player__overlay-text">{errorText}</div>
            </div>
            {shakaControlsContainer &&
                createPortal(
                    <div className="shaka-play-button-container">
                        <button
                            type="button"
                            className="shaka-play-button"
                            aria-label={a11yPlayText}
                            onClick={handleOnPlayClick}
                        >
                            <EbayIconPlayFilled64Colored width={64} />
                        </button>
                    </div>,
                    shakaControlsContainer,
                )}
            {!hideReportButton && (
                <ReportButtonControl reportText={reportText} a11yReportText={a11yReportText} onReport={onReport} />
            )}
            <CurrentTimeControl a11ySkipToLiveText={a11ySkipToLiveText} />
            <RemainingTimeControl />
            <TotalTimeControl />
            <MuteButtonControl a11yMuteText={a11yMuteText} a11yUnmuteText={a11yUnmuteText} />
            <FullscreenButtonControl
                a11yFullscreenText={a11yFullscreenText}
                a11yExitFullscreenText={a11yExitFullscreenText}
            />
            <CaptionsControl />
        </div>
    );
};

export default EbayVideo;
