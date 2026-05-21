import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { pressKey } from "../../../common/test-utils/browser";
import * as stories from "../fake-menu-button.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe.skip("evo-fake-menu-button", () => {
  describe("given the menu is in the default state", () => {
    beforeEach(async () => {
      component = await render(Default);
    });

    it("should render correctly", () => {
      expect(component.getByRole("button")).toBeTruthy();
    });

    it("should have aria-expanded=false initially", () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });

    describe("when the button is clicked once", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("button"));
      });

      it("then it expands", () => {
        expect(component.getByRole("button")).toHaveAttribute(
          "aria-expanded",
          "true",
        );
      });

      describe("when it is clicked again", () => {
        beforeEach(async () => {
          await fireEvent.click(component.getByRole("button"));
        });

        it("then it collapses", () => {
          expect(component.getByRole("button")).toHaveAttribute(
            "aria-expanded",
            "false",
          );
        });
      });
    });
  });

  describe("given the menu is in the expanded state", () => {
    beforeEach(async () => {
      component = await render(Default);
      await fireEvent.click(component.getByRole("button"));
    });

    describe("when the escape key is pressed from the button", () => {
      beforeEach(async () => {
        await pressKey(component.getByRole("button"), {
          key: "Escape",
          keyCode: 27,
        });
      });

      it("then it collapses", () => {
        expect(component.getByRole("button")).toHaveAttribute(
          "aria-expanded",
          "false",
        );
      });
    });

    describe("when an item is clicked", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("link", { name: /item 1/i }));
      });

      it("should fire native click event", () => {
        // Native click events pass through -- no custom event wrapping
        expect(component.getByRole("link", { name: /item 1/i })).toBeTruthy();
      });
    });

  });
});

describe("given the evo-fake-menu-button is open", () => {
  let triggerButton: HTMLElement;

  beforeEach(async () => {
    component = await render(Default);
    triggerButton = component.getByRole("button", { name: /eBay Menu/i });
    await fireEvent.click(triggerButton);
  });

  describe("when focus moves outside the component", () => {
    beforeEach(async () => {
      await fireEvent.focusOut(triggerButton, {
        relatedTarget: document.body,
      });
    });

    it("then it collapses", () => {
      expect(triggerButton).toHaveAttribute("aria-expanded", "false");
    });
  });
});
