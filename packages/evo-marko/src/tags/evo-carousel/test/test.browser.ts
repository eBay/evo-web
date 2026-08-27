import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../carousel.stories";
const { Continuous, Slides, Controlled } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

const list = () =>
  component.container.querySelector(".carousel__list") as HTMLElement;
const control = (direction: "prev" | "next") =>
  component.container.querySelector(
    `.carousel__control--${direction}`,
  ) as HTMLElement;
const disabled = (direction: "prev" | "next") =>
  control(direction).getAttribute("aria-disabled") === "true";

/** Waits for the scrolling to stop, however it was started. */
const settles = () =>
  vi.waitFor(
    () => {
      const before = list().scrollLeft;
      return new Promise((resolve, reject) =>
        setTimeout(
          () => (list().scrollLeft === before ? resolve(true) : reject()),
          150,
        ),
      );
    },
    { timeout: 3000 },
  );

describe("evo-carousel", () => {
  describe("given a continuous carousel", () => {
    beforeEach(async () => {
      component = await render(Continuous);
      await settles();
    });

    it("should label itself as a carousel", () => {
      const root = component.container.querySelector(".carousel");
      expect(root?.getAttribute("role")).toBe("group");
      expect(root?.getAttribute("aria-roledescription")).toBe("carousel");
      expect(root?.getAttribute("aria-label")).toBe("Top products");
      expect(
        component.container.querySelectorAll(".carousel__item"),
      ).toHaveLength(10);
    });

    it("should move forwards and back, disabling the controls at each end", async () => {
      expect(disabled("prev")).toBe(true);
      expect(disabled("next")).toBe(false);

      control("next").click();
      await settles();
      expect(list().scrollLeft).toBeGreaterThan(0);
      expect(disabled("prev")).toBe(false);

      control("prev").click();
      await settles();
      expect(list().scrollLeft).toBe(0);
      expect(disabled("prev")).toBe(true);
    });

    it("should not lose presses that come faster than the scrolling", async () => {
      // Four presses, each given time to arrive.
      for (let i = 0; i < 4; i++) {
        control("next").click();
        await settles();
      }
      const deliberate = list().scrollLeft;

      component = await render(Continuous);
      await settles();

      for (let i = 0; i < 4; i++) {
        control("next").click();
        await new Promise((resolve) => setTimeout(resolve, 80));
      }
      await settles();

      // Each press adds to the move already running rather than replacing it.
      expect(list().scrollLeft).toBe(deliberate);
    }, 30000);
  });

  describe("given the controlled example", () => {
    it("should not bounce a set made while a move is running", async () => {
      component = await render(Controlled);
      await settles();

      const button = (label: string) =>
        Array.from(component.container.querySelectorAll("button")).find((el) =>
          el.textContent?.includes(label),
        ) as HTMLElement;

      // The second set lands mid-move: it must re-aim, not be swallowed.
      button("Jump to item 9").click();
      await new Promise((resolve) => setTimeout(resolve, 100));
      button("Back to the start").click();
      await settles();

      expect(list().scrollLeft).toBe(0);
    }, 20000);
  });

  describe("given a fixed number of items per slide", () => {
    beforeEach(async () => {
      component = await render(Slides);
      await settles();
    });

    it("should fit exactly that many items in the viewport", () => {
      const items = list().querySelectorAll(".carousel__item");
      const gap = parseFloat(getComputedStyle(list()).columnGap) || 0;
      const itemWidth = (items[0] as HTMLElement).getBoundingClientRect().width;
      expect(itemWidth * 4 + gap * 3).toBeCloseTo(list().clientWidth, 0);
    });

    it("should report the settled index once per press, in both directions", async () => {
      const indexChange = vi.fn();
      component = await render(Slides, { indexChange });

      control("next").click();
      await vi.waitFor(() => expect(indexChange).toHaveBeenCalledWith(4), {
        timeout: 2000,
      });
      // Not once per item scrolled past, and not before the scroll came to rest.
      expect(indexChange.mock.calls.map(([i]) => i)).toEqual([4]);

      indexChange.mockClear();
      control("prev").click();
      await vi.waitFor(() => expect(indexChange).toHaveBeenCalledWith(0), {
        timeout: 2000,
      });
      expect(indexChange.mock.calls.map(([i]) => i)).toEqual([0]);
    });
  });
});
