import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
  expect,
} from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { userEvent } from "vitest/browser";
import { composeStories } from "@storybook/marko";
import { fastAnimations } from "../../../common/test-utils/index";
import * as stories from "../alert-dialog.stories";

const { Default } = composeStories(stories);

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-alert-dialog", () => {
  describe("given the dialog is in the default (closed) state", () => {
    beforeEach(async () => {
      component = await render(Default);
    });

    it("should render with a dialog element", () => {
      expect(component.container.querySelector("dialog")).toBeTruthy();
    });

    it("should have the dialog class", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.classList.contains("dialog")).toBe(true);
    });

    it("should have dialog--close class when not open", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.classList.contains("dialog--close")).toBe(true);
    });

    it("should have dialog--narrow class", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.classList.contains("dialog--narrow")).toBe(true);
    });
  });

  describe("given the dialog is in the open state", () => {
    beforeEach(async () => {
      component = await render(Default, { open: true });
    });

    it("should render the dialog element", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog).toBeTruthy();
    });

    it("should not have dialog--close class when open", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.classList.contains("dialog")).toBe(true);
      expect(dialog?.classList.contains("dialog--close")).toBe(false);
    });

    it("should have role alertdialog", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.getAttribute("role")).toBe("alertdialog");
    });

    it("should have aria-modal set to true", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.getAttribute("aria-modal")).toBe("true");
    });

    it("should have closedby set to none", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.getAttribute("closedby")).toBe("none");
    });

    it("should render header with h2 by default", () => {
      const title = component.container.querySelector(".dialog__title");
      expect(title).toBeTruthy();
      expect(title?.tagName.toLowerCase()).toBe("h2");
    });

    it("should link dialog to header via aria-labelledby", () => {
      const dialog = component.container.querySelector("dialog");
      const title = component.container.querySelector(".dialog__title");
      const titleId = title?.id;
      expect(titleId).toBeTruthy();
      expect(dialog?.getAttribute("aria-labelledby")).toBe(titleId);
    });

    it("should render the confirm button", () => {
      const button = component.getByRole("button", { name: "OK" });
      expect(button).toBeTruthy();
    });

    it("should have aria-describedby on the confirm button referencing main content", () => {
      const button = component.getByRole("button", { name: "OK" });
      const describedBy = button.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();
      const mainEl = document.getElementById(describedBy!);
      expect(mainEl).toBeTruthy();
      expect(mainEl?.textContent).toContain(
        "You must acknowledge this alert to continue.",
      );
    });

    it("should render main content area", () => {
      const main = component.container.querySelector(".dialog__main");
      expect(main).toBeTruthy();
    });

    describe("when the confirm button is clicked", () => {
      it("should close the dialog", async () => {
        await fireEvent.click(
          component.getByRole("button", { name: "OK" }),
        );
        const dialog = component.container.querySelector("dialog");
        expect(dialog?.classList.contains("dialog--close")).toBe(true);
      });
    });

    describe("when Escape key is pressed", () => {
      it("should not close the dialog", async () => {
        const user = userEvent.setup();
        const button = component.getByRole("button", { name: "OK" });
        button.focus();
        await user.keyboard("{Escape}");
        const dialog = component.container.querySelector("dialog");
        expect(dialog?.classList.contains("dialog--close")).toBe(false);
      });
    });
  });
});
