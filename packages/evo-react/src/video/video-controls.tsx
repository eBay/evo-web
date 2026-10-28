import { useCallback, useRef, useState } from "react";
import type { CSSProperties, Ref, RefObject } from "react";
import { EvoIconAudioHigh16 } from "../icon/icons/audio-high-16";
import { EvoIconAudioLow16 } from "../icon/icons/audio-low-16";
import { EvoIconAudioOff16 } from "../icon/icons/audio-off-16";
import { EvoIconClosedCaption16 } from "../icon/icons/closed-caption-16";
import { EvoIconClosedCaptionFilled16 } from "../icon/icons/closed-caption-filled-16";
import { EvoIconContract16 } from "../icon/icons/contract-16";
import { EvoIconExpand16 } from "../icon/icons/expand-16";
import { EvoIconFlag16 } from "../icon/icons/flag-16";
import { EvoIconPause20 } from "../icon/icons/pause-20";
import { EvoIconPlay20 } from "../icon/icons/play-20";
import { EvoMenu } from "../menu/menu";
import { EvoMenuRadioItem } from "../menu/menu-item";
import { EvoMenuItems } from "../menu/menu-items";
import { EvoMenuRadioGroup } from "../menu/menu-radio-group";
import type {
  EvoVideoAudioControl,
  EvoVideoCaptionsControl,
  EvoVideoFullscreenControl,
  EvoVideoReportControl,
  EvoVideoTimelineControl,
} from "./types";

function formatTime(value: number) {
  const safeValue = Number.isFinite(value) ? Math.max(0, value) : 0;
  const hours = Math.floor(safeValue / 3600);
  const minutes = Math.floor((safeValue / 60) % 60);
  const seconds = String(Math.floor(safeValue % 60)).padStart(2, "0");
  return hours
    ? `${hours}:${String(minutes).padStart(2, "0")}:${seconds}`
    : `${minutes}:${seconds}`;
}

type VideoElementRef = RefObject<HTMLVideoElement | null | undefined>;

export function VideoPlayControl({
  playing,
  a11yPlayText,
  a11yPauseText,
  onToggle,
  buttonRef,
}: {
  playing: boolean;
  a11yPlayText: string;
  a11yPauseText: string;
  onToggle: () => void;
  buttonRef: Ref<HTMLButtonElement>;
}) {
  return (
    <button
      ref={buttonRef}
      className="video__control"
      type="button"
      aria-label={playing ? a11yPauseText : a11yPlayText}
      onClick={onToggle}
    >
      {playing ? <EvoIconPause20 /> : <EvoIconPlay20 />}
    </button>
  );
}

export function VideoTimelineControl({
  control,
  currentTime,
  duration,
  onSeek,
}: {
  control: EvoVideoTimelineControl;
  currentTime: number;
  duration: number;
  onSeek: (currentTime: number) => void;
}) {
  const scrubberPercent =
    duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0;

  return (
    <>
      <span className="video__timestamp" aria-hidden="true">
        {formatTime(currentTime)}
      </span>
      <input
        className="video__scrubber"
        type="range"
        min="0"
        max="1"
        step="any"
        value={scrubberPercent}
        style={
          {
            "--value-percent": `${scrubberPercent * 100}%`,
          } as CSSProperties
        }
        aria-label={control.a11yText}
        aria-valuetext={formatTime(currentTime)}
        onChange={(event) => {
          const nextTime = Number(event.currentTarget.value) * duration;
          if (Number.isFinite(nextTime)) {
            onSeek(nextTime);
          }
        }}
      />
      <span className="video__timestamp">{formatTime(duration)}</span>
    </>
  );
}

export function VideoRemainingControl({
  currentTime,
  duration,
}: {
  currentTime: number;
  duration: number;
}) {
  return (
    <>
      <span className="video__timestamp video__timestamp--remaining">
        -{formatTime(Math.max(0, duration - currentTime))}
      </span>
      <span className="video__spacer" />
    </>
  );
}

function languageLabel(language: string) {
  try {
    return (
      new Intl.DisplayNames([language], { type: "language" }).of(language) ??
      language
    );
  } catch {
    return language;
  }
}

export function VideoCaptionsControl({
  control,
  language,
  textTracks,
  onLanguageChange,
}: {
  control: EvoVideoCaptionsControl;
  language: string | null;
  textTracks: readonly TextTrack[];
  onLanguageChange: (language: string | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const focusMenu = useCallback(
    (menu: HTMLDivElement | null) => {
      if (open) {
        menu?.querySelector<HTMLElement>("[role^='menuitem']")?.focus();
      }
    },
    [open],
  );

  if (!textTracks.length) {
    return null;
  }

  const closeAndFocusButton = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <span
      className="video__popover-container"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <button
        ref={buttonRef}
        className="video__control"
        type="button"
        aria-label={control.a11yText}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        {language ? (
          <EvoIconClosedCaptionFilled16 />
        ) : (
          <EvoIconClosedCaption16 />
        )}
      </button>
      <span className="video__popover">
        <EvoMenu>
          <EvoMenuItems
            ref={focusMenu}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                buttonRef.current?.focus();
              }
            }}
          >
            <EvoMenuRadioGroup
              selected={language ?? "off"}
              onSelectedChange={(value) => {
                onLanguageChange(value === "off" ? null : String(value));
                closeAndFocusButton();
              }}
            >
              <EvoMenuRadioItem value="off">
                {control.captionsOffText ?? "Off"}
              </EvoMenuRadioItem>
              {textTracks.map((track, index) =>
                track.language ? (
                  <EvoMenuRadioItem
                    key={`${track.language}-${index}`}
                    value={track.language}
                    lang={track.language}
                  >
                    {languageLabel(track.language)}
                  </EvoMenuRadioItem>
                ) : null,
              )}
            </EvoMenuRadioGroup>
          </EvoMenuItems>
        </EvoMenu>
      </span>
    </span>
  );
}

export function VideoAudioControl({
  videoRef,
  control,
  muted,
  volume,
}: {
  videoRef: VideoElementRef;
  control: EvoVideoAudioControl;
  muted: boolean;
  volume: number;
}) {
  const audioOff = muted || volume === 0;

  return (
    <span
      className={
        control.a11yVolumeText
          ? "video__popover-container video__popover-container--hover"
          : "video__popover-container"
      }
    >
      <button
        className="video__control"
        type="button"
        aria-label={audioOff ? control.a11yUnmuteText : control.a11yMuteText}
        aria-pressed={audioOff}
        onClick={() => {
          const video = videoRef.current;
          if (!video) {
            return;
          }
          if (audioOff) {
            video.muted = false;
            if (!video.volume) {
              video.volume = 1;
            }
          } else {
            video.muted = true;
          }
        }}
      >
        {audioOff ? (
          <EvoIconAudioOff16 />
        ) : volume < 0.5 ? (
          <EvoIconAudioLow16 />
        ) : (
          <EvoIconAudioHigh16 />
        )}
      </button>
      {control.a11yVolumeText && (
        <div className="video__popover">
          <input
            className="video__volume"
            type="range"
            min="0"
            max="1"
            step="any"
            value={audioOff ? 0 : volume}
            style={
              {
                "--value-percent": `${(audioOff ? 0 : volume) * 100}%`,
              } as CSSProperties
            }
            aria-label={control.a11yVolumeText}
            aria-valuetext={`${Math.round((audioOff ? 0 : volume) * 100)}%`}
            onChange={(event) => {
              const video = videoRef.current;
              if (!video) {
                return;
              }
              const nextVolume = Number(event.currentTarget.value);
              video.muted = false;
              video.volume = nextVolume < 0.005 ? 0 : nextVolume;
            }}
          />
        </div>
      )}
    </span>
  );
}

export function VideoReportControl({
  control,
}: {
  control: EvoVideoReportControl;
}) {
  const { a11yText, icon, ...rest } = control;
  return (
    <button
      type="button"
      {...rest}
      className={`video__control${rest.className ? ` ${rest.className}` : ""}`}
      aria-label={a11yText}
    >
      {icon ?? <EvoIconFlag16 />}
    </button>
  );
}

export function VideoFullscreenControl({
  control,
  fullscreen,
  onToggle,
}: {
  control: EvoVideoFullscreenControl;
  fullscreen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      className="video__control"
      type="button"
      aria-label={fullscreen ? control.a11yExitText : control.a11yEnterText}
      onClick={onToggle}
    >
      {fullscreen ? <EvoIconContract16 /> : <EvoIconExpand16 />}
    </button>
  );
}
