import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import type { ComponentProps } from "react";
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

function getVideo(container: HTMLElement) {
  // A native video without controls has no reliable accessible role.
  return container.querySelector("video") as HTMLVideoElement;
}

async function startPlayback(container: HTMLElement) {
  const video = getVideo(container);
  video.dispatchEvent(new Event("playing"));
  await vi.waitFor(() => {
    expect(container.querySelector(".video__controls")).not.toBeNull();
  });
}

describe("evo-video", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
  });

  afterEach(() => {
    user.cleanup();
    vi.restoreAllMocks();
  });

  it("renders inline video attributes and tracks", async () => {
    const screen = await render(
      <EvoVideo
        {...defaultProps}
        poster="poster.jpg"
        width={640}
        tracks={[
          {
            src: "captions.vtt",
            srcLang: "en",
            kind: "captions",
            label: "English",
          },
        ]}
      />,
    );

    const video = getVideo(screen.container);
    expect(video.playsInline).toBe(true);
    expect(video.poster).toContain("poster.jpg");
    expect(video.width).toBe(640);
    expect(video.querySelector("track")?.getAttribute("srclang")).toBe("en");
  });

  it("uses the safe remaining-time controls by default", async () => {
    const screen = await render(<EvoVideo {...defaultProps} />);
    await startPlayback(screen.container);

    const play = screen.getByRole("button", { name: "Pause" });
    const controls = play.element().closest(".video__controls");
    expect(controls).toHaveClass("video__controls--hidden");
    expect(controls?.children[0]).toHaveClass("video__timestamp--remaining");
    expect(controls?.children[1]).toHaveClass("video__spacer");
    expect(controls?.children[2]).toBe(play.element());
  });

  it("renders the timeline after play in canonical order", async () => {
    const screen = await render(
      <EvoVideo
        {...defaultProps}
        controls={{ timeline: { a11yText: "Seek" } }}
      />,
    );
    await startPlayback(screen.container);

    const play = screen.getByRole("button", { name: "Pause" });
    const seek = screen.getByLabelText("Seek");
    const controls = play.element().closest(".video__controls");
    expect(controls?.children[0]).toBe(play.element());
    expect(controls?.children[2]).toBe(seek.element());
  });

  it("updates the timeline from media time events", async () => {
    const screen = await render(
      <EvoVideo
        {...defaultProps}
        controls={{ timeline: { a11yText: "Seek" } }}
      />,
    );
    await startPlayback(screen.container);

    const video = getVideo(screen.container);
    Object.defineProperty(video, "duration", {
      configurable: true,
      value: 120,
    });
    video.currentTime = 30;
    video.dispatchEvent(new Event("timeupdate"));

    const seek = screen.getByLabelText("Seek");
    await expect.element(seek).toHaveValue("0.25");
    await expect.element(seek).toHaveAttribute("aria-valuetext", "0:30");
  });

  it("updates the timeline with arrow keys", async () => {
    const screen = await render(
      <EvoVideo
        {...defaultProps}
        controls={{ timeline: { a11yText: "Seek" } }}
      />,
    );
    await startPlayback(screen.container);

    const video = getVideo(screen.container);
    Object.defineProperty(video, "duration", {
      configurable: true,
      value: 120,
    });
    video.currentTime = 30;
    video.dispatchEvent(new Event("timeupdate"));

    const seek = screen.getByLabelText("Seek");
    await user.tab();
    await user.tab();
    await expect.element(seek).toHaveFocus();
    await user.keyboard("{ArrowRight}");

    expect(video.currentTime).toBeGreaterThan(30);
    expect(Number((seek.element() as HTMLInputElement).value)).toBeGreaterThan(
      0.25,
    );
  });

  it("clamps the timeline when the timestamp exceeds the duration", async () => {
    const screen = await render(
      <EvoVideo
        {...defaultProps}
        currentTime={180}
        controls={{ timeline: { a11yText: "Seek" } }}
      />,
    );
    await startPlayback(screen.container);

    const video = getVideo(screen.container);
    Object.defineProperty(video, "duration", {
      configurable: true,
      value: 120,
    });
    video.dispatchEvent(new Event("durationchange"));

    const seek = screen.getByLabelText("Seek");
    await expect.element(seek).toHaveValue("1");
    expect(
      (seek.element() as HTMLInputElement).style.getPropertyValue(
        "--value-percent",
      ),
    ).toBe("100%");
  });

  it("manages captions menu focus within the control", async () => {
    const screen = await render(
      <>
        <button type="button">Outside control</button>
        <EvoVideo
          {...defaultProps}
          tracks={[
            {
              src: "https://example.com/captions.vtt",
              srcLang: "en",
              kind: "captions",
              label: "English",
            },
          ]}
          controls={{
            captions: {
              a11yText: "Closed captions",
              captionsOffText: "Off",
            },
          }}
        />
      </>,
    );
    await startPlayback(screen.container);
    await user.hover(getVideo(screen.container));

    const captions = screen.getByRole("button", { name: "Closed captions" });
    await user.click(captions);
    await expect
      .element(screen.getByRole("menuitemradio", { name: "Off" }))
      .toHaveFocus();

    await user.keyboard("{Escape}");
    await expect.element(captions).toHaveFocus();
    await expect.element(captions).toHaveAttribute("aria-expanded", "false");

    await user.click(captions);
    await user.click(screen.getByRole("button", { name: "Outside control" }));
    await expect.element(captions).toHaveAttribute("aria-expanded", "false");
  });

  it("owns captions language when uncontrolled", async () => {
    const onLanguageChange = vi.fn();
    const screen = await render(
      <EvoVideo
        {...defaultProps}
        tracks={[
          {
            src: "https://example.com/captions.vtt",
            srcLang: "en",
            kind: "captions",
            label: "English",
          },
        ]}
        controls={{
          captions: {
            a11yText: "Closed captions",
            captionsOffText: "Off",
          },
        }}
        onLanguageChange={onLanguageChange}
      />,
    );
    await startPlayback(screen.container);
    await user.hover(getVideo(screen.container));

    const captions = screen.getByRole("button", { name: "Closed captions" });
    await user.click(captions);
    await user.click(screen.getByRole("menuitemradio", { name: "English" }));

    expect(onLanguageChange).toHaveBeenCalledWith("en");
    await vi.waitFor(() =>
      expect(getVideo(screen.container).textTracks[0]?.mode).toBe("showing"),
    );
    await user.click(captions);
    await expect
      .element(screen.getByRole("menuitemradio", { name: "English" }))
      .toHaveAttribute("aria-checked", "true");
  });

  it("leaves captions language under parent control", async () => {
    const onLanguageChange = vi.fn();
    const createPlayer = (language: string | null) => (
      <EvoVideo
        {...defaultProps}
        language={language}
        tracks={[
          {
            src: "https://example.com/captions.vtt",
            srcLang: "en",
            kind: "captions",
            label: "English",
          },
        ]}
        controls={{
          captions: {
            a11yText: "Closed captions",
            captionsOffText: "Off",
          },
        }}
        onLanguageChange={onLanguageChange}
      />
    );
    const screen = await render(createPlayer("en"));
    await startPlayback(screen.container);
    await user.hover(getVideo(screen.container));

    const video = getVideo(screen.container);
    const captions = screen.getByRole("button", { name: "Closed captions" });
    await vi.waitFor(() => expect(video.textTracks[0]?.mode).toBe("showing"));
    await user.click(captions);
    await user.click(screen.getByRole("menuitemradio", { name: "Off" }));

    expect(onLanguageChange).toHaveBeenCalledWith(null);
    expect(video.textTracks[0]?.mode).toBe("showing");
    await user.click(captions);
    await expect
      .element(screen.getByRole("menuitemradio", { name: "English" }))
      .toHaveAttribute("aria-checked", "true");

    await user.keyboard("{Escape}");
    await screen.rerender(createPlayer(null));
    await vi.waitFor(() => expect(video.textTracks[0]?.mode).toBe("disabled"));
    await user.click(captions);
    await expect
      .element(screen.getByRole("menuitemradio", { name: "Off" }))
      .toHaveAttribute("aria-checked", "true");
  });

  it("moves focus from the initial overlay to the play control", async () => {
    const screen = await render(<EvoVideo {...defaultProps} />);
    await user.click(screen.getByRole("button", { name: "Play" }));
    await startPlayback(screen.container);

    await expect
      .element(screen.getByRole("button", { name: "Pause" }))
      .toHaveFocus();
  });

  it("renders and activates configured report and audio controls", async () => {
    const onReport = vi.fn();
    const screen = await render(
      <EvoVideo
        {...defaultProps}
        controls={{
          audio: {
            a11yMuteText: "Mute",
            a11yUnmuteText: "Unmute",
            a11yVolumeText: "Volume",
          },
          report: { a11yText: "Report video", onClick: onReport },
        }}
      />,
    );
    await startPlayback(screen.container);
    await user.hover(getVideo(screen.container));

    await user.click(screen.getByRole("button", { name: "Report video" }));
    expect(onReport).toHaveBeenCalledTimes(1);

    const mute = screen.getByRole("button", { name: "Mute" });
    await user.click(mute);
    expect(getVideo(screen.container).muted).toBe(true);
    await expect
      .element(screen.getByRole("button", { name: "Unmute" }))
      .toHaveAttribute("aria-pressed", "true");
    await expect.element(screen.getByLabelText("Volume")).toBeInTheDocument();
  });

  it("renders navigation as the Evo Marko sibling anchor", async () => {
    function CustomLink({ href, children, ...rest }: ComponentProps<"a">) {
      return (
        <a data-custom-link="true" href={href} {...rest}>
          {children}
        </a>
      );
    }

    const screen = await render(
      <EvoVideo
        {...defaultProps}
        nav={{
          href: "/listing/123",
          a11yText: "View listing",
          as: CustomLink,
        }}
      />,
    );

    const link = screen.getByRole("link", { name: "View listing" });
    await expect.element(link).toHaveAttribute("href", "/listing/123");
    await expect.element(link).toHaveClass("video__nav");
    await expect.element(link).toHaveAttribute("data-custom-link", "true");
    expect(link.element().previousElementSibling).toBe(
      getVideo(screen.container),
    );

    const root = screen.container.querySelector(".video")!;
    expect(link.element().getBoundingClientRect()).toEqual(
      root.getBoundingClientRect(),
    );
  });

  it("tracks browser fullscreen state", async () => {
    const onFullscreenChange = vi.fn();
    const screen = await render(
      <EvoVideo
        {...defaultProps}
        controls={{
          fullscreen: {
            a11yEnterText: "Enter fullscreen",
            a11yExitText: "Exit fullscreen",
          },
        }}
        onFullscreenChange={onFullscreenChange}
      />,
    );
    await startPlayback(screen.container);
    await user.hover(getVideo(screen.container));

    const root = screen.container.querySelector(".video") as HTMLDivElement;
    let fullscreenElement: Element | null = null;
    vi.spyOn(document, "fullscreenElement", "get").mockImplementation(
      () => fullscreenElement,
    );
    vi.spyOn(root, "requestFullscreen").mockImplementation(async () => {
      fullscreenElement = root;
      document.dispatchEvent(new Event("fullscreenchange"));
    });

    await user.click(screen.getByRole("button", { name: "Enter fullscreen" }));

    await expect
      .element(screen.getByRole("button", { name: "Exit fullscreen" }))
      .toBeInTheDocument();
    expect(onFullscreenChange).toHaveBeenCalledWith(true);
  });

  it("tries the next source before reporting a load error", async () => {
    const onLoadError = vi.fn();
    const screen = await render(
      <EvoVideo
        {...defaultProps}
        sources={[
          { src: "https://example.com/first.mp4" },
          { src: "https://example.com/second.mp4" },
        ]}
        onLoadError={onLoadError}
      />,
    );
    const video = getVideo(screen.container);

    video.dispatchEvent(new Event("error"));
    await vi.waitFor(() => expect(video.src).toContain("second.mp4"));
    expect(onLoadError).not.toHaveBeenCalled();

    video.dispatchEvent(new Event("error"));
    await expect
      .element(screen.getByRole("alert"))
      .toHaveTextContent("An error has occurred");
    expect(onLoadError).toHaveBeenCalledWith(
      expect.objectContaining({ sourceIndex: 1 }),
    );
  });

  it("restarts fallback selection when sources change", async () => {
    const createPlayer = (prefix: string) => (
      <EvoVideo
        {...defaultProps}
        sources={[
          { src: `https://example.com/${prefix}-first.mp4` },
          { src: `https://example.com/${prefix}-second.mp4` },
        ]}
      />
    );
    const screen = await render(createPlayer("old"));
    const video = getVideo(screen.container);

    video.dispatchEvent(new Event("error"));
    await vi.waitFor(() => expect(video.src).toContain("old-second.mp4"));

    await screen.rerender(createPlayer("new"));
    await vi.waitFor(() => expect(video.src).toContain("new-first.mp4"));
  });

  it("does not reload an equivalent inline source after rerender", async () => {
    const createPlayer = () => (
      <EvoVideo
        {...defaultProps}
        sources={[{ src: "https://example.com/video.mp4" }]}
      />
    );
    const screen = await render(createPlayer());
    const video = getVideo(screen.container);
    const onLoadStart = vi.fn();
    video.addEventListener("loadstart", onLoadStart);
    await vi.waitFor(() => expect(video.src).toContain("video.mp4"));
    await new Promise((resolve) => window.setTimeout(resolve, 50));
    onLoadStart.mockClear();

    await screen.rerender(createPlayer());
    await new Promise((resolve) => window.setTimeout(resolve, 50));

    expect(onLoadStart).not.toHaveBeenCalled();
  });

  it("passes native media events through", async () => {
    const onPlaying = vi.fn();
    const onPlayingChange = vi.fn();
    const screen = await render(
      <EvoVideo
        {...defaultProps}
        onPlaying={onPlaying}
        onPlayingChange={onPlayingChange}
      />,
    );

    await startPlayback(screen.container);

    expect(onPlaying).toHaveBeenCalledTimes(1);
    expect(onPlayingChange).toHaveBeenCalledWith(true);
  });
});
