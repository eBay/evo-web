import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, cleanup, fireEvent } from "@marko/testing-library";
import Video from "../index.marko";

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

// The fine-grained controls only enter the document once playback has
// started; simulate the native event that marks first play.
const startPlayback = () =>
  fireEvent(component.container.querySelector("video")!, new Event("playing"));

describe("evo-video", () => {
  describe("given a video with a single mp4 source", () => {
    beforeEach(async () => {
      component = await render(Video, {
        source: [{ src: "https://example.com/video.mp4" }],
        preload: "none",
        a11ySeekText: "Seek",
        a11yMuteText: "Mute",
        a11yUnmuteText: "Unmute",
        a11yVolumeText: "Volume",
        a11yFullscreenText: "Enter fullscreen",
        a11yExitFullscreenText: "Exit fullscreen",
      });
      await startPlayback();
    });

    it("renders a video element", () => {
      expect(component.container.querySelector("video")).toBeTruthy();
    });

    it("renders the video inline", () => {
      expect(
        component.container.querySelector("video")!.hasAttribute("playsinline"),
      ).toBe(true);
    });

    it("renders the controls bar", () => {
      expect(
        component.container.querySelector(".video__controls"),
      ).toBeTruthy();
    });

    it("renders a play button in the controls", () => {
      expect(component.getAllByLabelText("Play")).toHaveLength(1);
    });

    it("renders a seek slider", () => {
      expect(component.getByLabelText("Seek")).toBeTruthy();
    });

    it("renders a mute toggle", async () => {
      const mute = component.getByLabelText("Mute");
      expect(mute.getAttribute("aria-pressed")).toBe("false");
      await fireEvent.click(mute);
      expect(mute.getAttribute("aria-pressed")).toBe("true");
      expect(mute.getAttribute("aria-label")).toBe("Unmute");
    });

    it("renders a volume slider", () => {
      expect(component.getByLabelText("Volume")).toBeTruthy();
    });

    it("drops the slider to 0 while muted and restores it on unmute", async () => {
      const slider = component.getByLabelText("Volume") as HTMLInputElement;
      const mute = component.getByLabelText("Mute");
      expect(slider.value).toBe("1");
      await fireEvent.click(mute);
      expect(slider.value).toBe("0");
      await fireEvent.click(mute);
      expect(slider.value).toBe("1");
    });

    it("treats zero volume as muted and one click restores sound", async () => {
      const slider = component.getByLabelText("Volume") as HTMLInputElement;
      const mute = component.getByLabelText("Mute");
      // [unmuted, volume 0] displays as muted...
      await fireEvent.input(slider, { target: { value: "0" } });
      expect(mute.getAttribute("aria-pressed")).toBe("true");
      expect(mute.getAttribute("aria-label")).toBe("Unmute");
      // ...and a single click restores [unmuted, volume 1]
      await fireEvent.click(mute);
      expect(mute.getAttribute("aria-pressed")).toBe("false");
      expect(slider.value).toBe("1");
    });

    it("recovers from muted with zero volume in one click", async () => {
      const slider = component.getByLabelText("Volume") as HTMLInputElement;
      const mute = component.getByLabelText("Mute");
      await fireEvent.input(slider, { target: { value: "0" } });
      await fireEvent.click(mute); // restores sound
      await fireEvent.click(mute); // mutes
      expect(mute.getAttribute("aria-pressed")).toBe("true");
      await fireEvent.click(mute); // one click back to sound
      expect(mute.getAttribute("aria-pressed")).toBe("false");
      expect(slider.value).toBe("1");
    });

    it("snaps near-zero slider drags to true zero", async () => {
      const slider = component.getByLabelText("Volume") as HTMLInputElement;
      const mute = component.getByLabelText("Mute");
      await fireEvent.input(slider, { target: { value: "0.004" } });
      expect(slider.value).toBe("0");
      expect(mute.getAttribute("aria-label")).toBe("Unmute");
    });

    it("switches the audio icon with the effective state", async () => {
      const mute = component.getByLabelText("Mute");
      const icon = () =>
        mute.querySelector("use")?.getAttribute("href") ??
        mute.innerHTML.match(/icon-audio-[a-z]+-16/)?.[0];
      expect(icon()).toContain("audio-high");
      await fireEvent.click(mute); // mute
      expect(icon()).toContain("audio-off");
      await fireEvent.click(mute); // sound back
      expect(icon()).toContain("audio-high");
      const slider = component.getByLabelText("Volume") as HTMLInputElement;
      await fireEvent.input(slider, { target: { value: "0" } });
      expect(icon()).toContain("audio-off");
      await fireEvent.click(mute); // restore from zero
      expect(icon()).toContain("audio-high");
    });

    it("unmutes when the slider is dragged", async () => {
      const slider = component.getByLabelText("Volume") as HTMLInputElement;
      const mute = component.getByLabelText("Mute");
      await fireEvent.click(mute);
      expect(mute.getAttribute("aria-pressed")).toBe("true");
      await fireEvent.input(slider, { target: { value: "0.5" } });
      expect(mute.getAttribute("aria-pressed")).toBe("false");
      expect(slider.value).toBe("0.5");
    });

    it("shows the volume popover while focus is within and hides it after a delay", async () => {
      const popover = component.container.querySelector(
        ".video__popover-container--hover > .video__popover",
      )!;
      const mute = component.getByLabelText("Mute");
      expect(getComputedStyle(popover).opacity).toBe("0");
      mute.focus();
      expect(getComputedStyle(popover).opacity).toBe("1");
      mute.blur();
      // still shown immediately after focus leaves...
      expect(getComputedStyle(popover).opacity).toBe("1");
      // ...and hidden once the transition completes
      await vi.waitFor(
        () => {
          expect(getComputedStyle(popover).opacity).toBe("0");
        },
        { timeout: 2000 },
      );
    });

    it("keeps the slider in the focus order while the popover is hidden", () => {
      const popover = component.container.querySelector(
        ".video__popover-container--hover > .video__popover",
      )!;
      const slider = component.getByLabelText("Volume") as HTMLInputElement;
      expect(getComputedStyle(popover).opacity).toBe("0");
      slider.focus();
      expect(document.activeElement).toBe(slider);
      expect(getComputedStyle(popover).opacity).toBe("1");
    });

    it("renders a fullscreen button", () => {
      expect(component.getByLabelText("Enter fullscreen")).toBeTruthy();
    });

    it("does not render a report button", () => {
      expect(component.queryByLabelText("Report")).toBeNull();
    });
  });

  describe("given no audio or fullscreen labels", () => {
    beforeEach(async () => {
      component = await render(Video, {
        source: [{ src: "https://example.com/video.mp4" }],
        preload: "none",
      });
      await startPlayback();
    });

    it("does not render the audio button or volume slider", () => {
      expect(component.queryByLabelText("Mute")).toBeNull();
      expect(component.queryByLabelText("Volume")).toBeNull();
    });

    it("does not render the fullscreen button", () => {
      expect(component.queryByLabelText("Enter fullscreen")).toBeNull();
    });
  });

  describe("given audio labels without a volume label", () => {
    beforeEach(async () => {
      component = await render(Video, {
        source: [{ src: "https://example.com/video.mp4" }],
        preload: "none",
        a11yMuteText: "Mute",
        a11yUnmuteText: "Unmute",
      });
      await startPlayback();
    });

    it("renders the mute toggle without a volume slider", () => {
      expect(component.getByLabelText("Mute")).toBeTruthy();
      expect(component.queryByLabelText("Volume")).toBeNull();
      expect(component.container.querySelector(".video__popover")).toBeNull();
    });
  });

  describe("given a report attribute tag", () => {
    const onClick = vi.fn();

    beforeEach(async () => {
      component = await render(Video, {
        source: [{ src: "https://example.com/video.mp4" }],
        preload: "none",
        a11ySeekText: "Seek",
        report: { a11yText: "Report", onClick },
      });
      await startPlayback();
    });

    it("renders the report button and passes through the click", async () => {
      const report = component.getByLabelText("Report");
      await fireEvent.click(report);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("given a side-loaded text track", () => {
    beforeEach(async () => {
      component = await render(Video, {
        source: [{ src: "https://example.com/video.mp4" }],
        preload: "none",
        track: [
          {
            src: "https://example.com/captions.vtt",
            srclang: "en",
            kind: "captions",
          },
        ],
      });
    });

    it("renders a track element", () => {
      const track = component.container.querySelector("track");
      expect(track).toBeTruthy();
      expect(track!.getAttribute("srclang")).toBe("en");
    });
  });

  describe("given no seek label", () => {
    beforeEach(async () => {
      component = await render(Video, {
        source: [{ src: "https://example.com/video.mp4" }],
        preload: "none",
        a11yFullscreenText: "Enter fullscreen",
        a11yExitFullscreenText: "Exit fullscreen",
      });
      await startPlayback();
    });

    it("does not render a seek slider", () => {
      expect(component.queryByLabelText("Seek")).toBeNull();
    });

    it("renders a remaining-time countdown instead of the seek timestamps", () => {
      expect(
        component.container.querySelector(".video__timestamp--remaining"),
      ).toBeTruthy();
      expect(
        component.container.querySelectorAll(".video__timestamp"),
      ).toHaveLength(1);
    });

    it("still renders the other labeled controls", () => {
      expect(component.getByLabelText("Enter fullscreen")).toBeTruthy();
    });
  });

  describe("controls visibility", () => {
    beforeEach(async () => {
      component = await render(Video, {
        source: [{ src: "https://example.com/video.mp4" }],
        preload: "none",
        a11ySeekText: "Seek",
        a11yMuteText: "Mute",
        a11yUnmuteText: "Unmute",
        a11yVolumeText: "Volume",
      });
    });

    it("keeps the controls out of the document until playback starts", async () => {
      expect(component.queryByLabelText("Seek")).toBeNull();
      expect(component.getByLabelText("Play")).toBeTruthy(); // the overlay
      await startPlayback();
      expect(component.getByLabelText("Seek")).toBeTruthy();
      expect(
        component.container.querySelector(".video__play-overlay"),
      ).toBeNull();
    });

    it("keeps the controls reachable by keyboard", async () => {
      await startPlayback();
      const mute = component.getByLabelText("Mute");
      mute.focus();
      expect(
        component.container.querySelector(".video__controls:focus-within"),
      ).toBeTruthy();
    });
  });

  describe("given a nav link", () => {
    beforeEach(async () => {
      component = await render(Video, {
        source: [{ src: "https://example.com/video.mp4" }],
        preload: "none",
        nav: { href: "https://www.ebay.com" },
      });
    });

    it("renders a nav link over the video", () => {
      const anchor = component.container.querySelector("a.video__nav");
      expect(anchor).toBeTruthy();
      expect(anchor!.getAttribute("href")).toBe("https://www.ebay.com");
    });

    it("never hides the controls", async () => {
      await startPlayback();
      expect(
        component.container.querySelector(".video--controls-hidden"),
      ).toBeNull();
    });
  });

  describe("given a controlling parent that re-renders", () => {
    it("does not restart the media when the source attr tag identity churns", async () => {
      const base = () => ({
        source: [{ src: "https://example.com/video.mp4" }],
        preload: "none",
        playing: false,
        playingChange() {},
      });
      component = await render(Video, base());
      const video = component.container.querySelector("video")!;
      let loadstarts = 0;
      video.addEventListener("loadstart", () => loadstarts++);
      await component.rerender({ ...base(), playing: true });
      await component.rerender({ ...base(), playing: true, volume: 0.5 });
      await new Promise((resolve) => setTimeout(resolve, 50));
      expect(loadstarts).toBe(0);
    });
  });

  describe("given a source that fails to load", () => {
    it("shows the error overlay and emits load-error", async () => {
      const onLoadError = vi.fn();
      component = await render(Video, {
        source: [{ src: "https://localhost:9/video.mp4" }],
        onLoadError,
      });
      await vi.waitFor(
        () => {
          expect(component.getByText("An error has occurred")).toBeTruthy();
        },
        { timeout: 5000 },
      );
      expect(onLoadError).toHaveBeenCalled();
      // controls are replaced by the overlay
      expect(component.queryByLabelText("Seek")).toBeNull();
    });
  });

  describe("given overridden a11y text", () => {
    beforeEach(async () => {
      component = await render(Video, {
        source: [{ src: "https://example.com/video.mp4" }],
        preload: "none",
        a11ySeekText: "Buscar",
      });
      await startPlayback();
    });

    it("applies the overridden labels", () => {
      expect(component.getByLabelText("Buscar")).toBeTruthy();
    });
  });
});
