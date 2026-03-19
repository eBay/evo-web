/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
// @ts-ignore
import { ui } from "shaka-player/dist/shaka-player.ui";

type UseShakaControlOptions = {
    onInit?: (data: {
        muted?: boolean;
        volume?: number;
        isFullScreenEnabled?: boolean;
        isFullScreenSupported?: boolean;
    }) => void;
    onVolumeChange?: (data: { muted: boolean; volume: number }) => void;
    onTimeAndSeekRangeUpdated?: (data: {
        displayTime: number;
        seekRange: { start: number; end: number };
        isLive: boolean;
        isSeeking: boolean;
    }) => void;
    onTracksChanged?: (data: { isLive: boolean }) => void;
    onFullscreenChange?: (data: { isFullScreenEnabled: boolean }) => void;
    onLoadedMetadata?: (data: { isFullScreenSupported: boolean }) => void;
    onLoadedData?: (data: { isFullScreenSupported: boolean }) => void;
};

type UseShakaControlReturn = {
    container: HTMLElement | null;
    videoRef: React.RefObject<HTMLVideoElement | null>;
    controlsRef: React.RefObject<Record<string, unknown> | null>;
    playerRef: React.RefObject<Record<string, unknown> | null>;
};

export const useShakaControl = (elementName: string, options: UseShakaControlOptions = {}): UseShakaControlReturn => {
    const {
        onInit,
        onVolumeChange,
        onTimeAndSeekRangeUpdated,
        onTracksChanged,
        onFullscreenChange,
        onLoadedMetadata,
        onLoadedData,
    } = options;

    const [container, setContainer] = useState<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const controlsRef = useRef<Record<string, unknown> | null>(null);
    const playerRef = useRef<Record<string, unknown> | null>(null);
    const isMountedRef = useRef(true);

    useLayoutEffect(() => {
        isMountedRef.current = true;

        class ShakaControl extends ui.Element {
            constructor(parentEl: HTMLElement, controls: unknown) {
                super(parentEl, controls);

                if (!isMountedRef.current) return;

                // Use flushSync to ensure React renders the portal synchronously
                flushSync(() => {
                    setContainer(parentEl);
                });
                videoRef.current = this.video;
                controlsRef.current = this.controls;
                playerRef.current = this.player;

                if (onInit) {
                    const initData: Record<string, unknown> = {};
                    if (onVolumeChange) {
                        initData.muted = this.video.muted;
                        initData.volume = this.video.volume;
                    }
                    if (onFullscreenChange || onLoadedMetadata || onLoadedData) {
                        initData.isFullScreenEnabled = this.controls.isFullScreenEnabled();
                        initData.isFullScreenSupported = this.controls.isFullScreenSupported();
                    }
                    onInit(initData);
                }

                // Register video events
                if (onVolumeChange) {
                    this.eventManager.listen(this.video, "volumechange", () => {
                        if (isMountedRef.current) {
                            onVolumeChange({
                                muted: this.video.muted,
                                volume: this.video.volume,
                            });
                        }
                    });
                }

                // Register controls events
                if (onTimeAndSeekRangeUpdated) {
                    this.eventManager.listen(this.controls, "timeandseekrangeupdated", () => {
                        if (isMountedRef.current) {
                            onTimeAndSeekRangeUpdated({
                                displayTime: this.controls.getDisplayTime(),
                                seekRange: this.player.seekRange(),
                                isLive: this.player.isLive(),
                                isSeeking: this.controls.isSeeking(),
                            });
                        }
                    });
                }

                // Register player events
                if (onTracksChanged) {
                    this.eventManager.listen(this.player, "trackschanged", () => {
                        if (isMountedRef.current) {
                            onTracksChanged({
                                isLive: this.player.isLive(),
                            });
                        }
                    });
                }

                // Register document events
                if (onFullscreenChange) {
                    this.eventManager.listen(document, "fullscreenchange", () => {
                        if (isMountedRef.current) {
                            onFullscreenChange({
                                isFullScreenEnabled: this.controls.isFullScreenEnabled(),
                            });
                        }
                    });
                }

                // Register localVideo events
                const localVideo = this.controls.getLocalVideo();
                if (onLoadedMetadata) {
                    this.eventManager.listen(localVideo, "loadedmetadata", () => {
                        if (isMountedRef.current) {
                            onLoadedMetadata({
                                isFullScreenSupported: this.controls.isFullScreenSupported(),
                            });
                        }
                    });
                }
                if (onLoadedData) {
                    this.eventManager.listen(localVideo, "loadeddata", () => {
                        if (isMountedRef.current) {
                            onLoadedData({
                                isFullScreenSupported: this.controls.isFullScreenSupported(),
                            });
                        }
                    });
                }
            }
        }

        ui.Controls.registerElement(elementName, {
            create: (rootElement: HTMLElement, controls: unknown) => {
                return new ShakaControl(rootElement, controls);
            },
        });

        return () => {
            isMountedRef.current = false;
        };
    }, []);

    return { container, videoRef, controlsRef, playerRef };
};
