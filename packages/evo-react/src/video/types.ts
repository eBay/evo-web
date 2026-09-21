import type {
  ComponentProps,
  ComponentType,
  MouseEventHandler,
  ReactNode,
} from "react";

export type EvoVideoEngine = "hls" | "dash";
export type EvoVideoPlayView = "inline" | "fullscreen";

export type EvoVideoSource = Omit<
  ComponentProps<"source">,
  "children" | "src"
> & {
  /** URL of the video, DASH manifest, or HLS playlist. */
  src: string;
  /** Forces a streaming engine when it cannot be inferred from the URL. */
  engine?: EvoVideoEngine;
};

export type EvoVideoTrack = ComponentProps<"track">;

export type EvoVideoNav = Omit<
  ComponentProps<"a">,
  "aria-label" | "children"
> & {
  /** Navigation destination. */
  href: string;
  /** Accessible name for the navigation link, mapped to `aria-label`. */
  a11yText: string;
  /** Custom component used in place of the native anchor. */
  as?: ComponentType<ComponentProps<"a">>;
};

export type EvoVideoTimelineControl = {
  /** Accessible name for the seek slider. */
  a11yText: string;
};

export type EvoVideoCaptionsControl = {
  /** Accessible name for the captions menu button. */
  a11yText: string;
  /** Label for the menu item that turns captions off. English default to be overridden is `"Off"`. */
  captionsOffText?: string;
};

export type EvoVideoAudioControl = {
  /** Accessible name for the audio button while unmuted. */
  a11yMuteText: string;
  /** Accessible name for the audio button while muted. */
  a11yUnmuteText: string;
  /** Accessible name for the optional volume slider. */
  a11yVolumeText?: string;
};

export type EvoVideoReportControl = Omit<
  ComponentProps<"button">,
  "aria-label" | "children" | "type"
> & {
  /** Accessible name for the report button, mapped to `aria-label`. */
  a11yText: string;
  /** Replaces the default flag icon. */
  icon?: ReactNode;
  /** Triggered when the report button is activated. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type EvoVideoFullscreenControl = {
  /** Accessible name for entering fullscreen. */
  a11yEnterText: string;
  /** Accessible name for exiting fullscreen. */
  a11yExitText: string;
};

export type EvoVideoControls = {
  /** Adds elapsed time, a seek slider, and duration. Otherwise the player displays remaining time. */
  timeline?: EvoVideoTimelineControl;
  /** Adds the captions menu when text tracks are available. */
  captions?: EvoVideoCaptionsControl;
  /** Adds the mute button and, when labeled, a volume slider. */
  audio?: EvoVideoAudioControl;
  /** Adds a report button. */
  report?: EvoVideoReportControl;
  /** Adds fullscreen behavior and its toggle button. */
  fullscreen?: EvoVideoFullscreenControl;
};

export type EvoVideoLoadError = {
  /** Original error reported by the browser or media adapter. */
  cause: unknown;
  /** Media engine selected for the failed source. */
  engine?: EvoVideoEngine;
  /** Zero-based index of the failed source. */
  sourceIndex: number;
  /** Source that failed, or undefined when the source list was empty. */
  source?: EvoVideoSource;
};

type NativeVideoProps = Omit<
  ComponentProps<"video">,
  "children" | "controls" | "src"
>;

export type EvoVideoProps = NativeVideoProps & {
  /** Ordered fallback sources. The player tries the next source after a load failure. */
  sources: readonly EvoVideoSource[];
  /** Native text tracks rendered inside the video element. */
  tracks?: readonly EvoVideoTrack[];
  /** Optional navigation link rendered using the Evo Marko sibling-link structure. */
  nav?: EvoVideoNav;
  /** Optional control groups. The player owns their canonical order and always renders play/pause. */
  controls?: EvoVideoControls;
  /** Enters fullscreen when playback starts when the fullscreen control is enabled. */
  playView?: EvoVideoPlayView;
  /** Requests playback when true and pause when false. */
  playing?: boolean;
  /** Reports the actual playback state after media events or a rejected playback request. */
  onPlayingChange?: (playing: boolean) => void;
  /** Requested volume between 0 and 1. */
  volume?: number;
  /** Reports the current numeric volume without replacing the native `onVolumeChange` event prop. */
  onVolumeValueChange?: (volume: number) => void;
  /** Reports whether the video is muted. */
  onMutedChange?: (muted: boolean) => void;
  /** Selected captions language, or null when captions are off. */
  language?: string | null;
  /** Reports the selected captions language. */
  onLanguageChange?: (language: string | null) => void;
  /** Requests fullscreen when true and exits fullscreen when false. */
  fullscreen?: boolean;
  /** Reports the actual fullscreen state. */
  onFullscreenChange?: (fullscreen: boolean) => void;
  /** Requested playback position in seconds. */
  currentTime?: number;
  /** Reports the current playback position in seconds. */
  onCurrentTimeChange?: (currentTime: number) => void;
  /** Pauses when less than half visible or the window loses focus, then resumes autoplay when eligible. */
  offscreenPause?: boolean;
  /** Maximum time the loading overlay remains visible, in milliseconds. Defaults to 2000. */
  spinnerTimeout?: number;
  /** Text shown after every source fails. English default to be overridden is `"An error has occurred"`. */
  errorText: string;
  /** Accessible name for the initial and control-bar play buttons. English default to be overridden is `"Play"`. */
  a11yPlayText: string;
  /** Accessible name for the pause button. English default to be overridden is `"Pause"`. */
  a11yPauseText: string;
  /** Accessible name for the loading spinner. English default to be overridden is `"Loading"`. */
  a11yLoadText: string;
  /** Triggered after every configured source fails. */
  onLoadError?: (error: EvoVideoLoadError) => void;
  /** Children are unsupported. Use `sources`, `tracks`, and `controls`. */
  children?: never;
};
