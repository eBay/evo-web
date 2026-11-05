import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../breadcrumbs.stories";

const { Default, Buttons } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-breadcrumbs", () => {
  describe("given link-based breadcrumbs", () => {
    beforeEach(async () => {
      component = await render(Default);
    });

    it("renders a navigation landmark", () => {
      expect(component.getByRole("navigation")).toBeTruthy();
    });

    it("renders breadcrumb items as links", () => {
      const links = component.getAllByRole("link");
      expect(links.length).toBeGreaterThan(0);
    });

    it("marks the last item as the current page", () => {
      const currentItem = component.getByText("Smart Watch Bands");
      expect(currentItem.getAttribute("aria-current")).toBe("page");
    });
  });

  describe("given button-based breadcrumbs", () => {
    beforeEach(async () => {
      component = await render(Buttons);
    });

    it("renders breadcrumb items as buttons", () => {
      const buttons = component.getAllByRole("button");
      expect(buttons.length).toBeGreaterThan(0);
    });

    it("marks the last button as the current page", () => {
      const lastItem = component.getByText("Smart Watch Bands");
      expect(lastItem.getAttribute("aria-current")).toBe("page");
    });
  });
});
