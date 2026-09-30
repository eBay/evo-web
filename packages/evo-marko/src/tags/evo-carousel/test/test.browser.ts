import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, cleanup, fireEvent } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { userEvent } from "vitest/browser";
import * as stories from "../carousel.stories";
const { Continuous, Discrete, Controlled, Autoplay } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

const root = () =>
  component.container.querySelector(".carousel") as HTMLElement;
const list = () =>
  component.container.querySelector(".carousel__list") as HTMLElement;
const items = () =>
  Array.from(list().querySelectorAll(":scope > li")) as HTMLElement[];
const control = (direction: "prev" | "next") =>
  component.container.querySelector(
    `.carousel__control--${direction}`,
  ) as HTMLElement;
const playback = () =>
  component.container.querySelector(".carousel__playback") as HTMLElement;
const disabled = (direction: "prev" | "next") =>
  control(direction).getAttribute("aria-disabled") === "true";
const button = (label: string) =>
  Array.from(component.container.querySelectorAll("button")).find((el) =>
    el.textContent?.includes(label),
  ) as HTMLElement;

const offset = (item: HTMLElement) => {
  const bounds = list().getBoundingClientRect();
  const rect = item.getBoundingClientRect();
  return getComputedStyle(list()).direction === "rtl"
    ? bounds.right - rect.right
    : rect.left - bounds.left;
};
const leading = () => items().findIndex((item) => Math.abs(offset(item)) < 1);
const firstCut = () =>
  items().findIndex(
    (item) =>
      offset(item) + item.getBoundingClientRect().width >
      list().clientWidth + 1,
  );
const reachable = () => items().flatMap((item, i) => (item.inert ? [] : [i]));

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

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("evo-carousel", () => {
  describe("given a continuous carousel", () => {
    beforeEach(async () => {
      component = await render(Continuous);
      await settles();
    });

    it("should be a labelled group whose controls name the list they move", () => {
      expect(root().getAttribute("role")).toBe("group");
      expect(root().getAttribute("aria-roledescription")).toBe("carousel");
      expect(root().getAttribute("aria-label")).toBe("Top products");
      expect(control("prev").getAttribute("aria-label")).toBe("Previous slide");
      expect(control("next").getAttribute("aria-label")).toBe("Next slide");
      expect(control("next").getAttribute("aria-controls")).toBe(list().id);
    });

    it("should keep everything not wholly in view out of reach", () => {
      const cut = firstCut();
      expect(cut).toBeGreaterThan(0);
      expect(reachable()).toEqual(Array.from({ length: cut }, (_, i) => i));
    });

    it("should page forwards to the first item cut off, and back again", async () => {
      expect(disabled("prev")).toBe(true);
      expect(disabled("next")).toBe(false);
      const cut = firstCut();

      control("next").click();
      await settles();
      expect(leading()).toBe(cut);
      expect(reachable()[0]).toBe(cut);
      expect(disabled("prev")).toBe(false);

      control("prev").click();
      await settles();
      expect(list().scrollLeft).toBe(0);
      expect(disabled("prev")).toBe(true);
    });

    it("should come to rest on an item however fast it is pressed", async () => {
      control("next").click();
      await wait(50);
      control("next").click();
      await settles();

      expect(leading()).toBeGreaterThan(0);
    });

    it("should page without scrolling the page", async () => {
      document.body.style.paddingTop = `${window.innerHeight - 50}px`;
      window.scrollTo(0, 0);
      try {
        component = await render(Continuous);
        await settles();
        const cut = firstCut();

        control("next").click();
        await settles();
        expect(leading()).toBe(cut);
        expect(window.scrollY).toBe(0);
      } finally {
        document.body.style.paddingTop = "";
      }
    });

    it("should disable next and drop the mask at the end", async () => {
      expect(
        component.container.querySelector(".carousel__viewport--mask"),
      ).not.toBeNull();

      for (let i = 0; i < 10 && !disabled("next"); i++) {
        control("next").click();
        await settles();
      }

      expect(disabled("next")).toBe(true);
      expect(items().at(-1)!.inert).toBe(false);
      expect(
        component.container.querySelector(".carousel__viewport--mask"),
      ).toBeNull();
    });

    it("should follow scrolling by hand once it comes to rest", async () => {
      const indexChange = vi.fn();
      component = await render(Continuous, { indexChange });
      await settles();

      list().scrollTo({ left: items()[4].offsetLeft, behavior: "instant" });
      await vi.waitFor(() => expect(indexChange).toHaveBeenLastCalledWith(4));
      expect(disabled("prev")).toBe(false);
      expect(items()[4].inert).toBe(false);
      expect(items()[0].inert).toBe(true);
    });
  });

  describe("given everything fits", () => {
    it("should hide both controls", async () => {
      component = await render(Continuous, { style: "width: 3000px" });
      await settles();

      expect(
        component.container.querySelector(
          ".carousel__container--controls-disabled",
        ),
      ).not.toBeNull();
      expect(reachable()).toHaveLength(items().length);
    });
  });

  describe("given a discrete carousel", () => {
    beforeEach(async () => {
      component = await render(Discrete, { style: "width: 800px" });
      await settles();
    });

    it("should fit three items and a tenth of the next in view", () => {
      const gap = parseFloat(getComputedStyle(list()).columnGap);
      const width = items()[0].getBoundingClientRect().width;
      expect(width * 3.1 + gap * 2.1).toBeCloseTo(list().clientWidth, 0);
      expect(reachable()).toEqual([0, 1, 2]);
    });

    it("should only rest on the first item of each slide", () => {
      expect(
        items().flatMap((item, i) =>
          item.classList.contains("carousel__item--snap") ? [i] : [],
        ),
      ).toEqual([0, 3, 6, 9]);
    });

    it("should move a slide per press, reporting each once", async () => {
      const indexChange = vi.fn();
      component = await render(Discrete, {
        style: "width: 800px",
        indexChange,
      });
      await settles();

      control("next").click();
      await settles();
      expect(leading()).toBe(3);
      control("prev").click();
      await settles();
      expect(leading()).toBe(0);

      expect(indexChange.mock.calls.map(([i]) => i)).toEqual([3, 0]);
    });

    it("should fill the view exactly without a peek", async () => {
      component = await render(Discrete, {
        style: "width: 800px",
        noPeek: true,
      });
      await settles();

      const gap = parseFloat(getComputedStyle(list()).columnGap);
      const width = items()[0].getBoundingClientRect().width;
      expect(width * 3 + gap * 2).toBeCloseTo(list().clientWidth, 0);
    });
  });

  describe("given a controlled index", () => {
    beforeEach(async () => {
      component = await render(Controlled);
      await settles();
    });

    it("should scroll to an index set from outside", async () => {
      button("Jump to card 9").click();
      await settles();

      expect(leading()).toBe(8);
      expect(component.getByText("Showing card 9")).toBeTruthy();
    });

    it("should re-aim when the index changes mid-move", async () => {
      button("Jump to card 9").click();
      await wait(100);
      button("Back to the start").click();
      await settles();

      expect(list().scrollLeft).toBe(0);
      expect(component.getByText("Showing card 1")).toBeTruthy();
    });

    it("should report back where a paddle takes it", async () => {
      control("next").click();
      await settles();

      expect(leading()).toBe(2);
      expect(component.getByText("Showing card 3")).toBeTruthy();
    });

    it("should open on a starting index without scrolling the page to it", async () => {
      document.body.style.paddingTop = "3000px";
      window.scrollTo(0, 0);
      try {
        component = await render(Discrete, { index: 6 });
        expect(leading()).toBe(6);
        expect(window.scrollY).toBe(0);
      } finally {
        document.body.style.paddingTop = "";
      }
    });

    it("should open on a starting index without travelling to it", async () => {
      const indexChange = vi.fn();
      component = await render(Discrete, { index: 6, indexChange });

      expect(leading()).toBe(6);
      await settles();
      expect(indexChange).not.toHaveBeenCalled();
    });
  });

  describe("given a browser without scrollend", () => {
    let descriptor: PropertyDescriptor | undefined;
    let owner: object;

    beforeEach(async () => {
      owner = "onscrollend" in Window.prototype ? Window.prototype : window;
      descriptor = Object.getOwnPropertyDescriptor(owner, "onscrollend");
      delete (owner as { onscrollend?: unknown }).onscrollend;
      component = await render(Continuous, { dir: "rtl" });
      await settles();
    });

    afterEach(() => {
      if (descriptor) Object.defineProperty(owner, "onscrollend", descriptor);
    });

    it("should still settle, and page both ways", async () => {
      expect("onscrollend" in window).toBe(false);
      const cut = firstCut();

      control("next").click();
      await settles();
      expect(leading()).toBe(cut);
      await vi.waitFor(() => expect(disabled("prev")).toBe(false));

      control("prev").click();
      await settles();
      expect(list().scrollLeft).toBe(0);
      await vi.waitFor(() => expect(disabled("prev")).toBe(true));
    });
  });

  describe("given a right-to-left carousel", () => {
    beforeEach(async () => {
      component = await render(Continuous, { dir: "rtl" });
      await settles();
    });

    it("should page towards the left and back", async () => {
      const cut = firstCut();

      control("next").click();
      await settles();
      expect(list().scrollLeft).toBeLessThan(0);
      expect(leading()).toBe(cut);

      control("prev").click();
      await settles();
      expect(list().scrollLeft).toBe(0);
    });
  });

  describe("given an autoplaying carousel", () => {
    beforeEach(async () => {
      component = await render(Autoplay, { autoplay: 600 });
      await settles();
    });

    it("should put its playback control first", () => {
      expect(root().querySelector("button")).toBe(playback());
      expect(playback().getAttribute("aria-label")).toBe("Pause carousel");
      expect(list().getAttribute("aria-live")).toBe("off");
      expect(disabled("prev")).toBe(false);
    });

    it("should advance on its own and rewind at the end", async () => {
      await vi.waitFor(() => expect(leading()).toBe(3), { timeout: 6000 });
      await vi.waitFor(
        () => {
          expect(leading()).toBe(0);
          expect(list().scrollLeft).toBe(0);
        },
        { timeout: 3000 },
      );

      expect(reachable()).toEqual([0]);
    });

    it("should go to the last slide backwards from the first", async () => {
      await userEvent.hover(root());
      control("prev").click();
      await settles();

      expect(leading()).toBe(3);
      expect(reachable()).toEqual([3]);
    });

    it("should hold still while the pointer is over it", async () => {
      await userEvent.hover(root());
      await wait(1000);
      expect(leading()).toBe(0);

      await userEvent.unhover(root());
      await vi.waitFor(() => expect(leading()).toBe(1), { timeout: 2000 });
    });

    it("should hold still while focus is in it, except on playback", async () => {
      control("next").focus();
      await wait(1000);
      expect(list().scrollLeft).toBe(0);

      playback().focus();
      await vi.waitFor(() => expect(leading()).toBe(1), { timeout: 2000 });
    });

    it("should pause and play from its playback control", async () => {
      await fireEvent.click(playback());
      expect(playback().getAttribute("aria-label")).toBe("Play carousel");
      expect(component.getByText("The carousel is paused.")).toBeTruthy();
      await wait(1000);
      expect(list().scrollLeft).toBe(0);

      await fireEvent.click(playback());
      expect(playback().getAttribute("aria-label")).toBe("Pause carousel");
      await vi.waitFor(() => expect(leading()).toBe(1), { timeout: 3000 });
    });
  });
});
