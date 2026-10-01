import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, cleanup, act } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../progress-bar-expressive.stories";
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
  it("rotates medium text in order, fading each message out", async () => {
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
  });

  it("fades in the first large message after a delay", async () => {
    component = await render(Default);
    const status = component.getByRole("status");

    expect(status.textContent).toBe("");
    expect(getStagedMessage()).toHaveTextContent("Hang tight");

    await advance(messageDuration);
    expect(getStagedMessage()).toHaveClass(
      "progress-bar-expressive__message--in",
    );

    await advance(fadeInDuration);
    expect(status).toHaveTextContent("Hang tight");
  });

  it("skips the fade and lengthens messages for reduced motion", async () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
    } as MediaQueryList);
    component = await render(Default);
    await act(() => {});
    const status = component.getByRole("status");

    expect(status).toHaveTextContent("Hang tight");
    await advance(messageDuration * 1.5 - 1);
    expect(status).toHaveTextContent("Hang tight");
    await advance(1);
    expect(status).toHaveTextContent("We're processing your order");
  });

  it("follows message changes without restarting the rotation", async () => {
    const messages = [{ text: "One" }, { text: "Two" }, { text: "Three" }];
    component = await render(Messages, { size: "medium", messages });
    const status = component.getByRole("status");

    await advance(messageDuration - 1);
    await component.rerender({
      size: "medium",
      messages: messages.map(({ text }) => ({ text: `New ${text}` })),
    });
    await act(() => {});
    expect(status).toHaveTextContent("New One");

    await advance(1);
    await advance(fadeInDuration);
    expect(status).toHaveTextContent("New Two");

    await component.rerender({ size: "medium", messages: [{ text: "Last" }] });
    await act(() => {});
    expect(status).toHaveTextContent("Last");
  });
});
