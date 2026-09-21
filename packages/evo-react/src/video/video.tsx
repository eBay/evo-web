import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { EvoIconAttention24 } from "../icon/icons/attention-24";
import { EvoIconPlayFilled64Colored } from "../icon/icons/play-filled-64-colored";
import { EvoProgressSpinner } from "../progress-spinner/progress-spinner";
import { useRefTee } from "../utils/use-ref-tee";
import { createVideoMedia, inferEngine } from "./media-adapter";
import type { VideoMedia } from "./media-adapter";
import {
  VideoAudioControl,
  VideoCaptionsControl,
  VideoFullscreenControl,
  VideoPlayControl,
  VideoRemainingControl,
  VideoReportControl,
  VideoTimelineControl,
} from "./video-controls";
import type { EvoVideoLoadError, EvoVideoProps, EvoVideoSource } from "./types";
import "@ebay/skin/video.mjs";

const DEFAULT_SPINNER_TIMEOUT = 2000;
const EMPTY_TRACKS: NonNullable<EvoVideoProps["tracks"]> = [];

type DashLikeMedia = VideoMedia & {
  engine: {
    getTracksFor(type: "text"): { lang?: string | null }[];
    setTextTrack(index: number): void;
  };
};

function isDashLikeMedia(media: VideoMedia): media is DashLikeMedia {
  return (
    "engine" in media &&
    typeof (media as DashLikeMedia).engine?.getTracksFor === "function"
  );
}

/**
 * Renders video from an ordered list of native, HLS, or DASH sources. The
 * player tries each source until one loads and reports an error only if all
 * sources fail.
 *
 * Accessible play and pause controls are always available. Use `controls` to
 * configure the other control groups. The component sets their visual order.
 * Native video attributes and event handlers pass through to the underlying
 * `<video>` element.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoVideo } from "@evo-web/react/video";
 *
 * <EvoVideo
 *   sources={[
 *     { src: "/listing-video.m3u8", type: "application/x-mpegURL", engine: "hls" },
 *     { src: "/listing-video.mp4", type: "video/mp4" },
 *   ]}
 *   poster="/listing-video-poster.jpg"
 *   controls={{
 *     timeline: { a11yText: "Seek" },
 *     audio: {
 *       a11yMuteText: "Mute",
 *       a11yUnmuteText: "Unmute",
 *       a11yVolumeText: "Volume",
 *     },
 *   }}
 *   a11yPlayText="Play"
 *   a11yPauseText="Pause"
 *   a11yLoadText="Loading"
 *   errorText="The video could not be loaded"
 * />
 * ```
 *
 * @summary Video playback with adaptive streaming and accessible controls.
 */
export function EvoVideo({
  sources,
  tracks = EMPTY_TRACKS,
  nav,
  controls = {},
  playView = "inline",
  playing: requestedPlaying,
  onPlayingChange,
  volume: requestedVolume = 1,
  onVolumeValueChange,
  muted: requestedMuted = false,
  onMutedChange,
  language: requestedLanguage,
  onLanguageChange,
  fullscreen: requestedFullscreen,
  onFullscreenChange,
  currentTime: requestedCurrentTime,
  onCurrentTimeChange,
  offscreenPause = false,
  spinnerTimeout = DEFAULT_SPINNER_TIMEOUT,
  errorText = "An error has occurred",
  a11yPlayText = "Play",
  a11yPauseText = "Pause",
  a11yLoadText = "Loading",
  onLoadError,
  autoPlay = false,
  ref,
  onPlaying,
  onPause,
  onLoadedMetadata,
  onTimeUpdate,
  onVolumeChange,
  onWaiting,
  onCanPlay,
  onError,
  onPointerDown,
  onClick,
  onDoubleClick,
  ...videoProps
}: EvoVideoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [videoTeeRef, videoRef] = useRefTee<HTMLVideoElement | null>(ref, null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const mediaRef = useRef<VideoMedia | null>(null);
  const generationRef = useRef(0);
  const sourcesRef = useRef(sources);
  const onLoadErrorRef = useRef(onLoadError);
  const onPlayingChangeRef = useRef(onPlayingChange);
  const onFullscreenChangeRef = useRef(onFullscreenChange);
  const userPausedRef = useRef(false);
  const autoPauseRef = useRef(false);
  const focusControlsRef = useRef(false);
  const clickOnHiddenControlsRef = useRef(false);
  const focusFromClickRef = useRef(false);
  const playingRef = useRef(false);

  const [video, setVideo] = useState<HTMLVideoElement | null>(null);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [playing, setPlaying] = useState(requestedPlaying ?? false);
  const [played, setPlayed] = useState(requestedPlaying ?? false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [controlsActive, setControlsActive] = useState(false);
  const [volume, setVolume] = useState(requestedVolume);
  const [muted, setMuted] = useState(requestedMuted);
  const [language, setLanguage] = useState<string | null>(
    requestedLanguage ?? null,
  );
  const [fullscreen, setFullscreen] = useState(requestedFullscreen ?? false);
  const [textTracks, setTextTracks] = useState<TextTrack[]>([]);

  sourcesRef.current = sources;
  onLoadErrorRef.current = onLoadError;
  onPlayingChangeRef.current = onPlayingChange;
  onFullscreenChangeRef.current = onFullscreenChange;
  playingRef.current = playing;

  const sourceKey = useMemo(
    () =>
      sources
        .map(({ src, engine }) => `${engine ?? "native"}:${src}`)
        .join("\n"),
    [sources],
  );
  const source = sources[sourceIndex];
  const sourceSrc = source?.src;
  const sourceEngine = source?.engine;

  const setVideoElement = useCallback(
    (element: HTMLVideoElement | null) => {
      videoTeeRef(element);
      setVideo(element);
    },
    [videoTeeRef],
  );

  const reportSourceFailure = useCallback(
    (cause: unknown, failedIndex: number, failedSource: EvoVideoSource) => {
      if (failedIndex < sourcesRef.current.length - 1) {
        setSourceIndex(failedIndex + 1);
        return;
      }

      setFailed(true);
      setLoading(false);
      const error: EvoVideoLoadError = {
        cause,
        engine: inferEngine(failedSource),
        sourceIndex: failedIndex,
        source: failedSource,
      };
      onLoadErrorRef.current?.(error);
    },
    [],
  );

  const updatePlaying = useCallback((nextPlaying: boolean) => {
    playingRef.current = nextPlaying;
    setPlaying(nextPlaying);
    onPlayingChangeRef.current?.(nextPlaying);
  }, []);

  const requestPlay = useCallback(async () => {
    if (!videoRef.current) {
      return;
    }
    try {
      await videoRef.current.play();
    } catch {
      updatePlaying(false);
    }
  }, [updatePlaying]);

  const requestPause = useCallback(() => {
    videoRef.current?.pause();
  }, []);

  const fullscreenEnabled = Boolean(controls.fullscreen);
  const requestFullscreen = useCallback(async () => {
    const root = rootRef.current;
    if (!root || !fullscreenEnabled) {
      return;
    }
    try {
      await root.requestFullscreen();
    } catch {
      setFullscreen(false);
      onFullscreenChangeRef.current?.(false);
    }
  }, [fullscreenEnabled]);

  const exitFullscreen = useCallback(async () => {
    if (document.fullscreenElement === rootRef.current) {
      await document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    setSourceIndex(0);
  }, [sourceKey]);

  useEffect(() => {
    const currentSource = sourcesRef.current[sourceIndex];
    if (!video || !currentSource) {
      if (video && !currentSource) {
        setFailed(true);
        setLoading(false);
        onLoadErrorRef.current?.({
          cause: new Error("No video source provided"),
          sourceIndex: 0,
          source: undefined,
        });
      }
      return;
    }

    const generation = ++generationRef.current;
    let media: VideoMedia | null = null;

    void createVideoMedia(currentSource)
      .then((created) => {
        media = created.media;
        if (generation !== generationRef.current) {
          media.destroy?.();
          return;
        }
        media.attach(video);
        mediaRef.current = media;
        setFailed(false);
      })
      .catch((error: unknown) => {
        if (generation === generationRef.current) {
          reportSourceFailure(error, sourceIndex, currentSource);
        }
      });

    return () => {
      generationRef.current++;
      if (mediaRef.current === media) {
        mediaRef.current = null;
      }
      media?.detach?.();
      media?.destroy?.();
    };
  }, [reportSourceFailure, sourceEngine, sourceIndex, sourceSrc, video]);

  useEffect(() => {
    if (!video || requestedPlaying === undefined) {
      return;
    }
    if (requestedPlaying && video.paused) {
      void requestPlay();
    } else if (!requestedPlaying && !video.paused) {
      requestPause();
    }
  }, [requestedPlaying, requestPause, requestPlay, video]);

  useEffect(() => {
    if (video) {
      video.volume = Math.min(1, Math.max(0, requestedVolume));
    }
  }, [requestedVolume, video]);

  useEffect(() => {
    if (video) {
      video.muted = requestedMuted;
    }
  }, [requestedMuted, video]);

  useEffect(() => {
    if (
      video &&
      requestedCurrentTime !== undefined &&
      Math.abs(video.currentTime - requestedCurrentTime) > 0.25
    ) {
      video.currentTime = requestedCurrentTime;
    }
  }, [requestedCurrentTime, video]);

  useEffect(() => {
    if (requestedLanguage === undefined) {
      return;
    }

    const media = mediaRef.current;
    if (media && isDashLikeMedia(media)) {
      media.engine.setTextTrack(
        media.engine
          .getTracksFor("text")
          .findIndex(({ lang }) => lang === requestedLanguage),
      );
    } else {
      for (const track of textTracks) {
        track.mode =
          track.language === requestedLanguage ? "showing" : "disabled";
      }
    }
    setLanguage(requestedLanguage);
  }, [requestedLanguage, textTracks]);

  useEffect(() => {
    if (requestedFullscreen === undefined || !fullscreenEnabled) {
      return;
    }
    if (requestedFullscreen) {
      void requestFullscreen();
    } else {
      void exitFullscreen();
    }
  }, [
    exitFullscreen,
    fullscreenEnabled,
    requestFullscreen,
    requestedFullscreen,
  ]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const nextFullscreen = document.fullscreenElement === rootRef.current;
      setFullscreen(nextFullscreen);
      onFullscreenChange?.(nextFullscreen);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [onFullscreenChange]);

  useEffect(() => {
    if (!loading) {
      return;
    }
    const timeout = window.setTimeout(() => setLoading(false), spinnerTimeout);
    return () => window.clearTimeout(timeout);
  }, [loading, spinnerTimeout]);

  useEffect(() => {
    if (!controlsActive) {
      return;
    }
    const timeout = window.setTimeout(() => setControlsActive(false), 3000);
    return () => window.clearTimeout(timeout);
  }, [controlsActive]);

  useEffect(() => {
    if (!video) {
      return;
    }
    const updateTextTracks = () => {
      setTextTracks(Array.from(video.textTracks));
    };
    updateTextTracks();
    video.textTracks.addEventListener("addtrack", updateTextTracks);
    video.textTracks.addEventListener("change", updateTextTracks);
    video.textTracks.addEventListener("removetrack", updateTextTracks);
    return () => {
      video.textTracks.removeEventListener("addtrack", updateTextTracks);
      video.textTracks.removeEventListener("change", updateTextTracks);
      video.textTracks.removeEventListener("removetrack", updateTextTracks);
    };
  }, [video, tracks]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !offscreenPause) {
      return;
    }

    let inViewport = false;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          inViewport = entry.isIntersecting;
          if (userPausedRef.current) {
            continue;
          }
          if (entry.isIntersecting) {
            if (autoPlay) {
              void requestPlay();
            }
          } else if (playingRef.current) {
            autoPauseRef.current = true;
            requestPause();
          }
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(root);

    const handleMouseDown = () => {
      if (!document.hasFocus()) {
        focusFromClickRef.current = true;
      }
    };
    const handleFocus = () => {
      if (focusFromClickRef.current) {
        focusFromClickRef.current = false;
      } else if (autoPlay && inViewport && !userPausedRef.current) {
        void requestPlay();
      }
    };
    const handleBlur = () => {
      if (playingRef.current) {
        autoPauseRef.current = true;
        requestPause();
      }
    };

    root.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);
    return () => {
      observer.disconnect();
      root.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, [autoPlay, offscreenPause, requestPause, requestPlay, video]);

  useEffect(() => {
    if (played && focusControlsRef.current) {
      focusControlsRef.current = false;
      playButtonRef.current?.focus();
    }
  }, [played]);

  const controlsHidden = Boolean(!nav && !failed && playing && !controlsActive);
  const started = played || playing;

  const videoElement = (
    // Text tracks are supplied through the typed `tracks` prop below.
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      {...videoProps}
      ref={setVideoElement}
      playsInline
      autoPlay={autoPlay && !offscreenPause}
      onPlaying={(event) => {
        updatePlaying(true);
        setPlayed(true);
        setLoading(false);
        userPausedRef.current = false;
        if (playView === "fullscreen" && fullscreenEnabled) {
          void requestFullscreen();
        }
        onPlaying?.(event);
      }}
      onPause={(event) => {
        if (!autoPauseRef.current) {
          userPausedRef.current = true;
        }
        autoPauseRef.current = false;
        updatePlaying(false);
        onPause?.(event);
      }}
      onLoadedMetadata={(event) => {
        setTextTracks(Array.from(event.currentTarget.textTracks));
        onLoadedMetadata?.(event);
      }}
      onTimeUpdate={(event) => {
        onCurrentTimeChange?.(event.currentTarget.currentTime);
        onTimeUpdate?.(event);
      }}
      onVolumeChange={(event) => {
        const nextVolume = event.currentTarget.volume;
        const nextMuted = event.currentTarget.muted;
        setVolume(nextVolume);
        setMuted(nextMuted);
        onVolumeValueChange?.(nextVolume);
        onMutedChange?.(nextMuted);
        onVolumeChange?.(event);
      }}
      onWaiting={(event) => {
        setLoading(true);
        onWaiting?.(event);
      }}
      onCanPlay={(event) => {
        setLoading(false);
        onCanPlay?.(event);
      }}
      onError={(event) => {
        if (source) {
          reportSourceFailure(
            event.currentTarget.error ?? new Error("Video source failed"),
            sourceIndex,
            source,
          );
        }
        onError?.(event);
      }}
      onPointerDown={(event) => {
        clickOnHiddenControlsRef.current = controlsHidden;
        onPointerDown?.(event);
      }}
      onClick={(event) => {
        if (!nav) {
          if (clickOnHiddenControlsRef.current) {
            clickOnHiddenControlsRef.current = false;
            setControlsActive(true);
          } else if (playingRef.current) {
            requestPause();
          } else {
            void requestPlay();
          }
        }
        onClick?.(event);
      }}
      onDoubleClick={(event) => {
        if (!nav && fullscreenEnabled) {
          if (fullscreen) {
            void exitFullscreen();
          } else {
            void requestFullscreen();
          }
        }
        onDoubleClick?.(event);
      }}
    >
      {tracks.map((track, index) => (
        <track key={`${String(track.src)}-${index}`} {...track} />
      ))}
    </video>
  );

  const navElement = nav
    ? (() => {
        const {
          as: NavComponent = "a",
          a11yText,
          className,
          ...navigationProps
        } = nav;
        return (
          <NavComponent
            {...navigationProps}
            aria-label={a11yText}
            className={classNames("video__nav", className)}
          />
        );
      })()
    : null;

  return (
    <div
      ref={rootRef}
      className="video"
      onMouseMove={() => setControlsActive(true)}
      onMouseLeave={() => setControlsActive(false)}
    >
      {videoElement}
      {navElement}

      {failed ? (
        <div className="video__overlay" role="alert">
          <EvoIconAttention24 />
          <div className="video__overlay-text">{errorText}</div>
        </div>
      ) : (
        <>
          {loading ? (
            <div className="video__overlay video__overlay--transparent">
              <EvoProgressSpinner size="large" a11yText={a11yLoadText} />
            </div>
          ) : !started ? (
            <button
              className="video__play-overlay"
              type="button"
              aria-label={a11yPlayText}
              onClick={() => {
                focusControlsRef.current = true;
                void requestPlay();
              }}
            >
              <EvoIconPlayFilled64Colored />
            </button>
          ) : null}

          {started && (
            <div
              className={classNames(
                "video__controls",
                controlsHidden && "video__controls--hidden",
              )}
            >
              {!controls.timeline && <VideoRemainingControl video={video} />}
              <VideoPlayControl
                buttonRef={playButtonRef}
                playing={playing}
                a11yPlayText={a11yPlayText}
                a11yPauseText={a11yPauseText}
                onToggle={() => {
                  if (playing) {
                    requestPause();
                  } else {
                    void requestPlay();
                  }
                }}
              />
              {controls.timeline && (
                <VideoTimelineControl
                  video={video}
                  control={controls.timeline}
                />
              )}
              {controls.captions && (
                <VideoCaptionsControl
                  control={controls.captions}
                  language={language}
                  textTracks={textTracks}
                  onLanguageChange={(nextLanguage) => {
                    setLanguage(nextLanguage);
                    const media = mediaRef.current;
                    if (media && isDashLikeMedia(media)) {
                      media.engine.setTextTrack(
                        media.engine
                          .getTracksFor("text")
                          .findIndex(({ lang }) => lang === nextLanguage),
                      );
                    } else {
                      for (const track of textTracks) {
                        track.mode =
                          track.language === nextLanguage
                            ? "showing"
                            : "disabled";
                      }
                    }
                    onLanguageChange?.(nextLanguage);
                  }}
                />
              )}
              {controls.audio && (
                <VideoAudioControl
                  video={video}
                  control={controls.audio}
                  muted={muted}
                  volume={volume}
                />
              )}
              {controls.report && (
                <VideoReportControl control={controls.report} />
              )}
              {controls.fullscreen && (
                <VideoFullscreenControl
                  control={controls.fullscreen}
                  fullscreen={fullscreen}
                  onToggle={() => {
                    if (fullscreen) {
                      void exitFullscreen();
                    } else {
                      void requestFullscreen();
                    }
                  }}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
