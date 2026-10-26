import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoVideo } from "../video";
import type { EvoVideoProps } from "../types";

const defaultProps: EvoVideoProps = {
  sources: [{ src: "https://example.com/video.mp4" }],
  preload: "none",
  a11yPlayText: "Play",
  a11yPauseText: "Pause",
  a11yLoadText: "Loading",
  errorText: "An error has occurred",
};

describe("EvoVideo SSR", () => {
  it("renders the initial player", () => {
    expect(renderToString(<EvoVideo {...defaultProps} />)).toMatchSnapshot();
  });

  it("renders the safe default controls", () => {
    expect(
      renderToString(<EvoVideo {...defaultProps} playing />),
    ).toMatchSnapshot();
  });

  it("renders every configured control group", () => {
    expect(
      renderToString(
        <EvoVideo
          {...defaultProps}
          playing
          tracks={[
            {
              src: "captions.vtt",
              srcLang: "en",
              kind: "captions",
              label: "English",
            },
          ]}
          controls={{
            timeline: { a11yText: "Seek" },
            captions: {
              a11yText: "Closed captions",
              captionsOffText: "Off",
            },
            audio: {
              a11yMuteText: "Mute",
              a11yUnmuteText: "Unmute",
              a11yVolumeText: "Volume",
            },
            report: { a11yText: "Report video" },
            fullscreen: {
              a11yEnterText: "Enter fullscreen",
              a11yExitText: "Exit fullscreen",
            },
          }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders navigation as a sibling anchor", () => {
    expect(
      renderToString(
        <EvoVideo
          {...defaultProps}
          nav={{
            href: "/listing/123",
            a11yText: "View listing",
          }}
        />,
      ),
    ).toMatchSnapshot();
  });
});
