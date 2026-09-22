import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { RefObject } from "react";
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
const EMPTY_TEXT_TRACKS: readonly TextTrack[] = [];

type VideoElementRef = RefObject<HTMLVideoElement | null | undefined>;
type SourceCursor = { sourceKey: string; index: number };

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

function applyLanguage(
  media: VideoMedia | null,
  textTracks: readonly TextTrack[],
  language: string | null,
) {
  if (media && isDashLikeMedia(media)) {
    media.engine.setTextTrack(
      media.engine
        .getTracksFor("text")
        .findIndex(({ lang }) => lang === language),
    );
  } else {
    for (const track of textTracks) {
      track.mode = track.language === language ? "showing" : "disabled";
    }
  }
}

const textTrackSnapshots = new WeakMap<TextTrackList, readonly TextTrack[]>();

function getTextTrackSnapshot(videoRef: VideoElementRef) {
  const list = videoRef.current?.textTracks;
  if (!list) {
    return EMPTY_TEXT_TRACKS;
  }

  const previous = textTrackSnapshots.get(list);
  if (
    previous?.length === list.length &&
    previous.every((track, index) => track === list[index])
  ) {
    return previous;
  }

  const snapshot = Array.from(list);
  textTrackSnapshots.set(list, snapshot);
  return snapshot;
}

function getServerTextTrackSnapshot() {
  return EMPTY_TEXT_TRACKS;
}

function useVideoTextTracks(videoRef: VideoElementRef) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const video = videoRef.current;
      if (!video) {
        return () => undefined;
      }

      const list = video.textTracks;
      list.addEventListener("addtrack", onStoreChange);
      list.addEventListener("change", onStoreChange);
      list.addEventListener("removetrack", onStoreChange);
      video.addEventListener("loadedmetadata", onStoreChange);
      return () => {
        list.removeEventListener("addtrack", onStoreChange);
        list.removeEventListener("change", onStoreChange);
        list.removeEventListener("removetrack", onStoreChange);
        video.removeEventListener("loadedmetadata", onStoreChange);
      };
    },
    [videoRef],
  );
  const getSnapshot = useCallback(
    () => getTextTrackSnapshot(videoRef),
    [videoRef],
  );

  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerTextTrackSnapshot,
  );
}

function useFullscreenState(
  rootRef: RefObject<HTMLDivElement | null>,
  onFullscreenChangeRef: RefObject<
    EvoVideoProps["onFullscreenChange"] | undefined
  >,
) {
  const getSnapshot = useCallback(() => {
    const root = rootRef.current;
    return Boolean(root && root.ownerDocument.fullscreenElement === root);
  }, [rootRef]);
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const ownerDocument = rootRef.current?.ownerDocument;
      if (!ownerDocument) {
        return () => undefined;
      }

      const handleFullscreenChange = () => {
        onStoreChange();
        onFullscreenChangeRef.current?.(getSnapshot());
      };
      ownerDocument.addEventListener(
        "fullscreenchange",
        handleFullscreenChange,
      );
      return () =>
        ownerDocument.removeEventListener(
          "fullscreenchange",
          handleFullscreenChange,
        );
    },
    [getSnapshot, onFullscreenChangeRef, rootRef],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
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
 *     { src: "/listing-video.mp4" },
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
  const mediaRef = useRef<VideoMedia | null>(null);
  const generationRef = useRef(0);
  const sourcesRef = useRef(sources);
  const onLoadErrorRef = useRef(onLoadError);
  const onPlayingChangeRef = useRef(onPlayingChange);
  const onFullscreenChangeRef = useRef(onFullscreenChange);
  const languageRef = useRef<string | null>(requestedLanguage ?? null);
  const textTracksRef = useRef<readonly TextTrack[]>(EMPTY_TEXT_TRACKS);
  const userPausedRef = useRef(false);
  const autoPauseRef = useRef(false);
  const focusControlsRef = useRef(false);
  const clickOnHiddenControlsRef = useRef(false);
  const focusFromClickRef = useRef(false);
  const playingRef = useRef(false);
  const loadingTimerRef = useRef<number | null>(null);
  const controlsTimerRef = useRef<number | null>(null);

  const sourceKey = sources
    .map(({ src, engine }) => `${engine ?? "native"}:${src}`)
    .join("\n");
  const [sourceCursor, setSourceCursor] = useState<SourceCursor>({
    sourceKey,
    index: 0,
  });
  const [playing, setPlaying] = useState(requestedPlaying ?? false);
  const [played, setPlayed] = useState(requestedPlaying ?? false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [controlsActive, setControlsActive] = useState(false);
  const [volume, setVolume] = useState(requestedVolume);
  const [muted, setMuted] = useState(requestedMuted);
  const [uncontrolledLanguage, setUncontrolledLanguage] = useState<
    string | null
  >(null);

  sourcesRef.current = sources;
  onLoadErrorRef.current = onLoadError;
  onPlayingChangeRef.current = onPlayingChange;
  onFullscreenChangeRef.current = onFullscreenChange;
  playingRef.current = playing;

  const sourceIndex =
    sourceCursor.sourceKey === sourceKey ? sourceCursor.index : 0;
  const source = sources[sourceIndex];
  const sourceSrc = source?.src;
  const sourceEngine = source?.engine;
  const language =
    requestedLanguage !== undefined ? requestedLanguage : uncontrolledLanguage;
  const textTracks = useVideoTextTracks(videoRef);
  const fullscreen = useFullscreenState(rootRef, onFullscreenChangeRef);

  languageRef.current = language;
  textTracksRef.current = textTracks;

  const endLoading = useCallback(() => {
    if (loadingTimerRef.current !== null) {
      window.clearTimeout(loadingTimerRef.current);
      loadingTimerRef.current = null;
    }
    setLoading(false);
  }, []);

  const beginLoading = useCallback(() => {
    if (loadingTimerRef.current !== null) {
      window.clearTimeout(loadingTimerRef.current);
    }
    setLoading(true);
    loadingTimerRef.current = window.setTimeout(() => {
      loadingTimerRef.current = null;
      setLoading(false);
    }, spinnerTimeout);
  }, [spinnerTimeout]);

  const hideControls = useCallback(() => {
    if (controlsTimerRef.current !== null) {
      window.clearTimeout(controlsTimerRef.current);
      controlsTimerRef.current = null;
    }
    setControlsActive(false);
  }, []);

  const showControls = useCallback(() => {
    if (controlsTimerRef.current !== null) {
      window.clearTimeout(controlsTimerRef.current);
    }
    setControlsActive(true);
    controlsTimerRef.current = window.setTimeout(() => {
      controlsTimerRef.current = null;
      setControlsActive(false);
    }, 3000);
  }, []);

  const setRootElement = useCallback((element: HTMLDivElement | null) => {
    rootRef.current = element;
    if (!element) {
      return;
    }

    return () => {
      rootRef.current = null;
      if (loadingTimerRef.current !== null) {
        window.clearTimeout(loadingTimerRef.current);
      }
      if (controlsTimerRef.current !== null) {
        window.clearTimeout(controlsTimerRef.current);
      }
    };
  }, []);

  const setPlayButton = useCallback((button: HTMLButtonElement | null) => {
    if (button && focusControlsRef.current) {
      focusControlsRef.current = false;
      button.focus();
    }
  }, []);

  const reportSourceFailure = useCallback(
    (cause: unknown, failedIndex: number, failedSource: EvoVideoSource) => {
      if (failedIndex < sourcesRef.current.length - 1) {
        setSourceCursor({ sourceKey, index: failedIndex + 1 });
        return;
      }

      setFailed(true);
      endLoading();
      const error: EvoVideoLoadError = {
        cause,
        engine: inferEngine(failedSource),
        sourceIndex: failedIndex,
        source: failedSource,
      };
      onLoadErrorRef.current?.(error);
    },
    [endLoading, sourceKey],
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
      onFullscreenChangeRef.current?.(false);
    }
  }, [fullscreenEnabled]);

  const exitFullscreen = useCallback(async () => {
    if (document.fullscreenElement === rootRef.current) {
      await document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const currentSource = sourcesRef.current[sourceIndex];
    if (!video || !currentSource) {
      if (video && !currentSource) {
        setFailed(true);
        endLoading();
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
        applyLanguage(media, textTracksRef.current, languageRef.current);
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
  }, [
    endLoading,
    reportSourceFailure,
    sourceEngine,
    sourceIndex,
    sourceSrc,
    videoRef,
  ]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || requestedPlaying === undefined) {
      return;
    }
    if (requestedPlaying && video.paused) {
      void requestPlay();
    } else if (!requestedPlaying && !video.paused) {
      requestPause();
    }
  }, [requestedPlaying, requestPause, requestPlay, videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = Math.min(1, Math.max(0, requestedVolume));
    }
  }, [requestedVolume, videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = requestedMuted;
    }
  }, [requestedMuted, videoRef]);

  useEffect(() => {
    const video = videoRef.current;
    if (
      video &&
      requestedCurrentTime !== undefined &&
      Math.abs(video.currentTime - requestedCurrentTime) > 0.25
    ) {
      video.currentTime = requestedCurrentTime;
    }
  }, [requestedCurrentTime, videoRef]);

  useEffect(() => {
    applyLanguage(mediaRef.current, textTracks, language);
  }, [language, textTracks]);

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
  }, [autoPlay, offscreenPause, requestPause, requestPlay]);

  const controlsHidden = Boolean(!nav && !failed && playing && !controlsActive);
  const started = played || playing;

  const videoElement = (
    // Text tracks are supplied through the typed `tracks` prop below.
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      {...videoProps}
      ref={videoTeeRef}
      playsInline
      autoPlay={autoPlay && !offscreenPause}
      onPlaying={(event) => {
        updatePlaying(true);
        setPlayed(true);
        endLoading();
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
      onLoadedMetadata={onLoadedMetadata}
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
        beginLoading();
        onWaiting?.(event);
      }}
      onCanPlay={(event) => {
        endLoading();
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
            showControls();
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
      ref={setRootElement}
      className="video"
      onMouseMove={showControls}
      onMouseLeave={hideControls}
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
              {!controls.timeline && (
                <VideoRemainingControl videoRef={videoRef} />
              )}
              <VideoPlayControl
                buttonRef={setPlayButton}
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
                  videoRef={videoRef}
                  control={controls.timeline}
                />
              )}
              {controls.captions && (
                <VideoCaptionsControl
                  control={controls.captions}
                  language={language}
                  textTracks={textTracks}
                  onLanguageChange={(nextLanguage) => {
                    if (requestedLanguage === undefined) {
                      setUncontrolledLanguage(nextLanguage);
                    }
                    onLanguageChange?.(nextLanguage);
                  }}
                />
              )}
              {controls.audio && (
                <VideoAudioControl
                  videoRef={videoRef}
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
