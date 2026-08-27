import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../carousel-autoplay.stories";
const { Default, Controllable } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

const list = () =>
  component.container.querySelector(".carousel-autoplay__list") as HTMLElement;
const control = (direction: "prev" | "next") =>
  component.container.querySelector(
    `.carousel-autoplay__control--${direction}`,
  ) as HTMLElement;
const playback = () =>
  component.container.querySelector(
    ".carousel-autoplay__playback",
  ) as HTMLElement;
const slides = () =>
  Array.from(
    component.container.querySelectorAll(".carousel-autoplay__item"),
  ) as HTMLElement[];

/** Which slide is at the front, measured rather than divided out of a width. */
const slot = () => {
  const start = list().getBoundingClientRect().left;
  let closest = 0;
  let closestDistance = Infinity;
  slides().forEach((el, i) => {
    const distance = Math.abs(el.getBoundingClientRect().left - start);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = i;
    }
  });
  return closest;
};

/** The showing slide's label, wherever in the strip it is. */
const showing = () => slides()[slot()]?.textContent?.trim();

/** The controllable example's cycle button, labelled by slide number. */
const cycle = () =>
  Array.from(component.container.querySelectorAll("p button")).find((el) =>
    /^\d+$/.test(el.textContent?.trim() || ""),
  ) as HTMLElement;

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

describe("evo-carousel-autoplay", () => {
  describe("given a playing carousel", () => {
    beforeEach(async () => {
      component = await render(Default);
      await settles();
    });

    it("should expose only the middle run, parked with runway either side", () => {
      const exposed = slides().filter(
        (el) => el.getAttribute("aria-hidden") !== "true",
      );
      expect(slides()).toHaveLength(12);
      expect(exposed.map((el) => el.textContent?.trim())).toEqual([
        "Slide 1",
        "Slide 2",
        "Slide 3",
        "Slide 4",
      ]);
      for (const el of slides().filter((s) => !exposed.includes(s))) {
        expect(el.hasAttribute("inert")).toBe(true);
      }

      expect(showing()).toBe("Slide 1");
      expect(slot()).toBe(4);
    });

    it("should label itself as a carousel", () => {
      const root = component.container.querySelector(".carousel-autoplay");
      expect(root?.getAttribute("role")).toBe("group");
      expect(root?.getAttribute("aria-roledescription")).toBe("carousel");
      expect(root?.getAttribute("aria-label")).toBe("Featured deals");
    });

    it("should announce slide changes only while it is still", async () => {
      expect(list().getAttribute("aria-live")).toBe("off");
      expect(playback().getAttribute("aria-label")).toBe("Pause");

      playback().click();
      await vi.waitFor(() =>
        expect(playback().getAttribute("aria-label")).toBe("Play"),
      );
      expect(list().getAttribute("aria-live")).toBe("polite");
    });

    it("should stop rotating when the slides are swiped", async () => {
      list().dispatchEvent(new TouchEvent("touchstart", { bubbles: true }));
      await vi.waitFor(() =>
        expect(playback().getAttribute("aria-label")).toBe("Play"),
      );
    });

    it("should keep moving when pressed again before a move finishes", async () => {
      const width = slides()[0].getBoundingClientRect().width;
      const start = list().scrollLeft;

      for (let i = 0; i < 4; i++) {
        control("next").click();
        await new Promise((resolve) => setTimeout(resolve, 80));
      }

      // Each press adds to what is left to travel and inherits the speed, so
      // four are nearly three slides along. Re-aiming the browser's own smooth
      // scrolling instead measures well under two by this point.
      expect((list().scrollLeft - start) / width).toBeGreaterThan(2.5);

      await settles();
      expect(showing()).toBe("Slide 1");
    }, 20000);

    it.each([20, 400])(
      "should take a second press %ims after the first, wrapping off the last slide",
      async (gap) => {
        for (const label of ["Slide 2", "Slide 3", "Slide 4"]) {
          control("next").click();
          await settles();
          expect(showing()).toBe(label);
        }

        // The gaps either side of a move ending are the awkward ones.
        control("next").click();
        await new Promise((resolve) => setTimeout(resolve, gap));
        control("next").click();
        await settles();

        expect(showing()).toBe("Slide 2");
      },
      20000,
    );

    it.each(["next", "prev"] as const)(
      "should keep looping when %s is pressed faster than it can settle",
      async (direction) => {
        // Never quiet long enough to settle, so it only stays in range if it
        // re-centres on the way past.
        for (let i = 0; i < 10; i++) {
          control(direction).click();
          await new Promise((resolve) => setTimeout(resolve, 150));
        }
        await settles();

        expect(showing()).toBe("Slide 3");
        expect(slot()).toBe(6);
      },
      30000,
    );

    it("should scroll forwards, not backwards, when it wraps around", async () => {
      for (const label of ["Slide 2", "Slide 3", "Slide 4"]) {
        control("next").click();
        await settles();
        expect(showing()).toBe(label);
      }

      const before = list().scrollLeft;
      control("next").click();
      await vi.waitFor(() =>
        expect(list().scrollLeft).toBeGreaterThan(before + 1),
      );

      await settles();
      expect(showing()).toBe("Slide 1");
      expect(slot()).toBe(4);
    });

    it("should carry on from where it was scrolled to by hand", async () => {
      list().scrollTo({ left: 6 * list().clientWidth, behavior: "instant" });

      control("next").click();
      await settles();

      // One on from where it was dragged to, not from where the last press
      // left it, which would be Slide 2.
      expect(showing()).toBe("Slide 4");
    });

    it("should keep looping when scrolled by hand rather than by the controls", async () => {
      list().scrollTo({
        left: list().scrollWidth - list().clientWidth,
        behavior: "instant",
      });
      await settles();

      expect(showing()).toBe("Slide 4");
      expect(slot()).toBe(7);
    });
  });

  describe("given a controlled index", () => {
    beforeEach(async () => {
      component = await render(Controllable);
      await settles();
      expect(cycle().textContent?.trim()).toBe("2");
    });

    it("should stay on its starting slide while paused", async () => {
      expect(playback().getAttribute("aria-label")).toBe("Play");
      await new Promise((resolve) => setTimeout(resolve, 400));
      expect(showing()).toBe("Slide 2");
    });

    it("should not bounce a set made while a move is running", async () => {
      // The second set lands mid-move: it must re-aim, not be swallowed.
      cycle().click();
      await new Promise((resolve) => setTimeout(resolve, 100));
      cycle().click();
      await settles();

      expect(showing()).toBe("Slide 4");
      expect(cycle().textContent?.trim()).toBe("4");
    }, 20000);

    it("should carry on forwards to a slide the same distance either way", async () => {
      const start = list().scrollLeft;
      let lowest = start;
      const watch = setInterval(() => {
        lowest = Math.min(lowest, list().scrollLeft);
      }, 8);

      // Slide 2 to slide 4: the same distance either way round a loop of four.
      cycle().click();
      cycle().click();
      await settles();
      clearInterval(watch);

      expect(cycle().textContent?.trim()).toBe("4");
      expect(lowest).toBeGreaterThanOrEqual(start - 1);
    }, 20000);

    it("should keep going forwards when cycled faster than it can settle", async () => {
      const runWidth = slides()[0].getBoundingClientRect().width * 4;
      const positions: number[] = [list().scrollLeft];
      const watch = setInterval(() => positions.push(list().scrollLeft), 8);

      // Two laps, each press landing while the last is still running.
      for (let i = 0; i < 8; i++) {
        cycle().click();
        await new Promise((resolve) => setTimeout(resolve, 120));
      }
      await settles();
      clearInterval(watch);

      // Whole-run shifts are how the loop works and are invisible; anything
      // else going backwards is a visible rewind.
      const rewinds = positions
        .slice(1)
        .map((position, i) => position - positions[i])
        .filter(
          (delta) =>
            delta < -1 && Math.abs(Math.abs(delta) - runWidth) >= runWidth / 4,
        );

      expect(rewinds).toEqual([]);
      expect(cycle().textContent?.trim()).toBe("2");
    }, 30000);
  });

  describe("given a short interval", () => {
    beforeEach(async () => {
      component = await render(Default, { interval: 200 });
      await settles();
    });

    it("should advance on its own, repeatedly", async () => {
      await vi.waitFor(() => expect(showing()).toBe("Slide 2"), {
        timeout: 3000,
      });
      // A second advance proves the timer restarts per slide.
      await vi.waitFor(() => expect(showing()).toBe("Slide 3"), {
        timeout: 3000,
      });
    });

    it("should stop while the pointer is over it", async () => {
      component.container
        .querySelector(".carousel-autoplay")!
        .dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));

      await new Promise((resolve) => setTimeout(resolve, 800));
      expect(showing()).toBe("Slide 1");
    });
  });
});
