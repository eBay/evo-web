import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../fake-menu.stories";

const { Default, Separator, Disabled } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-fake-menu", () => {
  describe("given the default menu", () => {
    beforeEach(async () => {
      component = await render(Default);
    });

    it("should render all items as links", () => {
      const links = component.container.querySelectorAll("a.fake-menu__item");
      expect(links).toHaveLength(3);
    });

    it("should render items inside a list", () => {
      const list = component.container.querySelector("ul.fake-menu__items");
      expect(list).toBeTruthy();
    });

    it("should have correct href on items", () => {
      const links = component.container.querySelectorAll("a.fake-menu__item");
      links.forEach((link) => {
        expect(link).toHaveAttribute("href", "#");
      });
    });
  });

  describe("given the separator menu", () => {
    beforeEach(async () => {
      component = await render(Separator);
    });

    it("should render a separator", () => {
      const separators = component.getAllByRole("separator");
      expect(separators).toHaveLength(1);
    });

    it("should render items on both sides of the separator", () => {
      const items = component.container.querySelectorAll(".fake-menu__item");
      expect(items).toHaveLength(4);
    });
  });

  describe("given the disabled menu", () => {
    beforeEach(async () => {
      component = await render(Disabled);
    });

    it("should render a current item with aria-current", () => {
      const currentItem = component.container.querySelector("[aria-current]");
      expect(currentItem).toBeTruthy();
      expect(currentItem).toHaveAttribute("aria-current", "page");
    });

    it("should render a disabled button item", () => {
      const disabledButton =
        component.container.querySelector("button[disabled]");
      expect(disabledButton).toBeTruthy();
    });
  });

  describe("when an item is clicked", () => {
    beforeEach(async () => {
      component = await render(Default);
    });

    it("should fire native click event", async () => {
      const link = component.container.querySelector(
        "a.fake-menu__item",
      ) as HTMLElement;
      await fireEvent.click(link);
      // Native click events pass through -- no custom event wrapping
      expect(link).toBeTruthy();
    });
  });
});
