import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, cleanup, act } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../progress-bar-expressive.stories";
import ProgressBarExpressive from "../index.marko";
import Messages from "./messages.marko";

const { Default, CustomTiming } = composeStories(stories);

const messageDuration = 1500;
const fadeInDuration = 833;

let component: Awaited<ReturnType<typeof render>>;

// Each timer step changes state, and the next step is only scheduled once
// Marko has rendered it, so advance one step at a time.
function advance(ms: number) {
  return act(() => vi.advanceTimersByTime(ms));
}

function getStagedMessage() {
  return component.container.querySelector('[aria-hidden="true"]');
}

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout"] });
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("evo-progress-bar-expressive", () => {
  it("labels the progress bar and passes attributes to the root", async () => {
    component = await render(ProgressBarExpressive, {
      a11yText: "Uploading photos",
      class: "custom-class",
      "data-testid": "root",
    });

    const progressbar = component.getByRole("progressbar", {
      name: "Uploading photos",
    });
    expect(component.getByTestId("root")).toHaveClass(
      "progress-bar-expressive",
      "custom-class",
    );
    expect(progressbar).not.toHaveAttribute("aria-describedby");
    expect(component.queryByRole("status")).toBeNull();
    expect(
      component.container.querySelectorAll(".progress-bar-expressive__line"),
    ).toHaveLength(12);
  });

  it("describes the progress bar with the current message", async () => {
    component = await render(Default, { size: "medium" });

    expect(component.getByRole("progressbar")).toHaveAccessibleDescription(
      "Hang tight",
    );
  });

  describe("given medium text", () => {
    it("shows the first message immediately and rotates in order", async () => {
      component = await render(Default, { size: "medium" });
      const status = component.getByRole("status");

      for (const text of [
        "Hang tight",
        "We're processing your order",
        "Just a moment longer",
        "Hang tight",
      ]) {
        expect(status).toHaveTextContent(text);
        await advance(messageDuration);
        expect(status).toHaveClass("progress-bar-expressive__message--out");
        expect(getStagedMessage()).toHaveClass(
          "progress-bar-expressive__message--in",
        );
        await advance(fadeInDuration);
      }
    });

    it("displays each message for its custom duration", async () => {
      component = await render(CustomTiming, { size: "medium" });
      const status = component.getByRole("status");

      for (const [text, duration] of [
        ["Display for 2 seconds", 2000],
        ["Display for 3 seconds", 3000],
        ["Display for 4 seconds", 4000],
      ] as const) {
        expect(status).toHaveTextContent(text);
        await advance(duration - 1);
        expect(status).not.toHaveClass("progress-bar-expressive__message--out");
        await advance(1);
        await advance(fadeInDuration);
      }

      expect(status).toHaveTextContent("Display for 2 seconds");
    });

    it("keeps a single message without scheduling timers", async () => {
      component = await render(Messages, {
        size: "medium",
        messages: [{ text: "Only message" }],
      });

      expect(component.getByRole("status")).toHaveTextContent("Only message");
      expect(getStagedMessage()).toBeNull();
      expect(vi.getTimerCount()).toBe(0);
    });
  });

  describe("given large text", () => {
    it("fades in the first message after a delay", async () => {
      component = await render(Default);
      const status = component.getByRole("status");

      expect(status.textContent).toBe("");
      expect(status).toHaveClass("progress-bar-expressive__message--initial");
      expect(getStagedMessage()).toHaveTextContent("Hang tight");

      await advance(messageDuration);
      expect(getStagedMessage()).toHaveClass(
        "progress-bar-expressive__message--in",
      );
      expect(status).not.toHaveClass(
        "progress-bar-expressive__message--initial",
      );

      await advance(fadeInDuration);
      expect(status).toHaveTextContent("Hang tight");
      expect(getStagedMessage()).toHaveTextContent(
        "We're processing your order",
      );
    });

    it("fades in a single message sooner and stops", async () => {
      component = await render(Messages, {
        messages: [{ text: "Only message" }],
      });
      const status = component.getByRole("status");

      expect(getStagedMessage()).toBeNull();
      await advance(messageDuration / 2);
      await advance(fadeInDuration);
      expect(status).toHaveTextContent("Only message");
      expect(vi.getTimerCount()).toBe(0);
    });
  });

  describe("given the user prefers reduced motion", () => {
    beforeEach(() => {
      vi.spyOn(window, "matchMedia").mockReturnValue({
        matches: true,
      } as MediaQueryList);
    });

    it("shows the first message immediately and skips the fade", async () => {
      component = await render(Default);
      await act(() => {});
      const status = component.getByRole("status");

      expect(status).toHaveTextContent("Hang tight");
      await advance(messageDuration * 1.5 - 1);
      expect(status).toHaveTextContent("Hang tight");
      await advance(1);
      expect(status).toHaveTextContent("We're processing your order");
      expect(status).not.toHaveClass("progress-bar-expressive__message--out");
    });
  });

  describe("given messages that change", () => {
    const messages = [{ text: "One" }, { text: "Two" }, { text: "Three" }];

    beforeEach(async () => {
      component = await render(Messages, { size: "medium", messages });
    });

    it("updates the content without restarting the rotation", async () => {
      await advance(messageDuration - 1);
      await component.rerender({
        size: "medium",
        messages: messages.map(({ text }) => ({ text: `New ${text}` })),
      });
      await act(() => {});
      const status = component.getByRole("status");

      expect(status).toHaveTextContent("New One");
      await advance(1);
      await advance(fadeInDuration);
      expect(status).toHaveTextContent("New Two");
    });

    it("clamps to the last message when the list shrinks", async () => {
      await advance(messageDuration);
      await advance(fadeInDuration);
      await component.rerender({
        size: "medium",
        messages: [{ text: "Last" }],
      });
      await act(() => {});

      expect(component.getByRole("status")).toHaveTextContent("Last");
      expect(getStagedMessage()).toBeNull();
    });

    it("removes the messages when the list empties", async () => {
      await component.rerender({ size: "medium", messages: [] });
      await act(() => {});

      expect(component.queryByRole("status")).toBeNull();
      expect(component.getByRole("progressbar")).not.toHaveAttribute(
        "aria-describedby",
      );
      expect(vi.getTimerCount()).toBe(0);
    });
  });

  it("clears pending timers when destroyed", async () => {
    component = await render(Default, { size: "medium" });

    expect(vi.getTimerCount()).toBe(1);
    cleanup();
    expect(vi.getTimerCount()).toBe(0);
  });
});
