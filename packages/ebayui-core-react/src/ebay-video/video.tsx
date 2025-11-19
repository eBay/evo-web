// TODO enable media-has-caption back by introducing a EbayVideoTrack component
/* eslint-disable @typescript-eslint/ban-ts-comment, jsx-a11y/media-has-caption */
import React, { ComponentProps, FC, SyntheticEvent, MouseEvent, useEffect, useRef, useState } from "react";
import classNames from "classnames";
// need that for broken definitions workaround
// @ts-ignore
import shaka from "shaka-player/dist/shaka-player.ui";

import { filterByType } from "../common/component-utils";
import { EbayProgressSpinner } from "../ebay-progress-spinner";
import { Player, VideoAction, VideoPlayView } from "./types";
import EbayVideoSource from "./source";
import { defaultVideoConfig, ERROR_ANOTHER_LOAD, ERROR_NO_PLAYER } from "./const";
import { customControls } from "./controls";
import { EbayEventHandler } from "../common/event-utils/types";
import { EbayIconPlayFilled64Colored } from "../ebay-icon/icons/ebay-icon-play-filled-64-colored";
import { EbayIconAttention64 } from "../ebay-icon/icons/ebay-icon-attention-64";

export type PlayEventProps = {
    player: Player;
};
export type VolumeChangeProps = {
    volume: number;
    muted: boolean;
};
export type EbayVideoProps = Omit<ComponentProps<"video">, "onPlay" | "onVolumeChange"> & {
    width?: number;
    height?: number;
    thumbnail?: string;
    action?: VideoAction;
    volume?: number;
    muted?: boolean;
    volumeSlider?: boolean;
    hideReportButton?: boolean;
    playView?: VideoPlayView;
    // todo: implement CDN support
    cdnUrl?: string;
    cssUrl?: string;
    cdnVersion?: string;
    //
    a11yLoadText: string;
    a11yPlayText: string;
    errorText: string;
    reportText?: string;
    onLoadError?: (err: Error) => void;
    onPlay?: EbayEventHandler<HTMLVideoElement, PlayEventProps>;
    onVolumeChange?: EbayEventHandler<HTMLVideoElement, VolumeChangeProps>;
    onReport?: (event?: MouseEvent<HTMLButtonElement>) => void;
};

const EbayVideo: FC<EbayVideoProps> = ({
    width,
    height,
    thumbnail,
    action,
    muted,
    playView = "inline",
    a11yLoadText,
    a11yPlayText,
    reportText,
    volumeSlider,
    volume = 1,
    hideReportButton,
    errorText,
    onVolumeChange = () => {},
    onLoadError = () => {},
    onPlay = () => {},
    onReport = () => {},
    children,
    ...rest
}) => {
    const [loaded, setLoaded] = useState<boolean>();
    const [buffering, setBuffering] = useState<boolean>();
    const [playing, setPlaying] = useState<boolean>();
    const [failed, setFailed] = useState<boolean>();

    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<Player>(null);
    const uiRef = useRef(null);

    const sources = filterByType(children, EbayVideoSource).map(({ props }) => props);

    const handleError = (err: Error) => {
        setLoaded(true);
        setFailed(true);
        onLoadError(err);
    };

    const loadSource = (index = 0) => {
        if (!sources.length || !playerRef.current) return;

        setLoaded(false);
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
            })
            .finally(() => {
                setLoaded(true);
            });
    };

    useEffect(() => {
        const video = videoRef.current;
        const container = containerRef.current;
        if (!video || !container) return;

        video.volume = volume;

        shaka.polyfill.installAll(); // todo: check if we need that

        playerRef.current = new shaka.Player(video);
        if (!playerRef.current) return;

        playerRef.current.addEventListener("error", () => handleError(new Error("Shake-Player error")));
        playerRef.current.addEventListener("buffering", (e) => {
            setBuffering((e as unknown as { buffering: boolean }).buffering);
        });

        uiRef.current = new shaka.ui.Overlay(playerRef.current, container, video, reportText);
        uiRef.current.configure({
            addBigPlayButton: true,
            controlPanelElements: [],
            addSeekBar: false,
        });

        if (!hideReportButton) {
            const { Report } = customControls(onReport);
            shaka.ui.Controls.registerElement("report", new Report.Factory(reportText));
        }

        loadSource();
        hideSpinner(container);

        // return () => {
        //     playerRef.current.destroy()
        //     uiRef.current.destroy()
        // }
    }, []);

    useEffect(() => {
        switch (action) {
            case "play":
                videoRef.current.play();
                break;
            case "pause":
                videoRef.current.pause();
                break;
            default:
        }
    }, [action]);

    const showControls = () => {
        if (!uiRef.current) return;

        const updatedControls = volumeSlider
            ? {
                  controlPanelElements: withVolumeControl(defaultVideoConfig.controlPanelElements),
              }
            : {};

        uiRef.current.configure({
            ...defaultVideoConfig,
            ...updatedControls,
        });
        videoRef.current.controls = false;
    };

    const handlePlaying = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
        e.stopPropagation();

        showControls();

        if (playView === "fullscreen") {
            videoRef.current.requestFullscreen();
        }

        setPlaying(true);
        onPlay(e, { player: playerRef.current });
    };

    const handleOnPlayClick = () => {
        videoRef.current.play();
    };

    const handleVolumeChange = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
        const eventTarget = e.currentTarget;
        onVolumeChange(e, {
            volume: Math.round((eventTarget.volume + Number.EPSILON) * 100) / 100,
            muted: eventTarget.muted,
        });
    };

    const handleOnPause = () => {
        // On IOS, the controls force showing up if the video exist fullscreen while playing.
        // This forces the controls to always hide
        videoRef.current.controls = false;
    };

    const style = {
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
    };

    return (
        <div style={style} className={classNames("video-player", { "video-player--poster": !playing })}>
            {!playing && loaded && !failed && !buffering && (
                <div className="shaka-play-button-container">
                    <button
                        onClick={handleOnPlayClick}
                        className="shaka-play-button"
                        style={{ opacity: 1, zIndex: 999 }}
                        aria-label={a11yPlayText}
                    >
                        <EbayIconPlayFilled64Colored />
                    </button>
                </div>
            )}
            <div className="video-player__container" ref={containerRef}>
                <video
                    ref={videoRef}
                    style={style}
                    poster={thumbnail}
                    muted={muted || false}
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
            <div
                className={classNames("video-player__overlay", {
                    "video-player__overlay--hidden": loaded && (failed || !buffering),
                })}
            >
                <EbayProgressSpinner size="large" aria-label={a11yLoadText} />
            </div>
        </div>
    );
};

function withVolumeControl(controls: string[]): string[] {
    const insertAt = controls.length - 2 > 0 ? controls.length - 2 : controls.length;
    const controlsWithVolume = [...controls];
    controlsWithVolume.splice(insertAt, 0, "volume");
    return controlsWithVolume;
}

function hideSpinner(container: HTMLDivElement) {
    const shakaSpinner = container.querySelectorAll(".shaka-spinner")[0];
    if (shakaSpinner) {
        shakaSpinner.setAttribute("hidden", "");
    }
}

export default EbayVideo;
