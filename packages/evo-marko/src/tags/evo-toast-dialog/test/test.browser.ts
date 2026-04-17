import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
  expect,
} from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { fastAnimations } from "../../../common/test-utils/index";
import * as stories from "../toast-dialog.stories";

const { Default } = composeStories(stories);

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-toast-dialog", () => {
  describe("given the toast dialog is in the default (closed) state", () => {
    beforeEach(async () => {
      component = await render(Default);
    });

    it("should render with a dialog element", () => {
      expect(component.container.querySelector("dialog")).toBeTruthy();
    });

    it("should have the toast-dialog class", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.classList.contains("toast-dialog")).toBe(true);
    });

    it("should have toast-dialog--close class when not open", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.classList.contains("toast-dialog--close")).toBe(true);
    });

    it("should have role=dialog", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.getAttribute("role")).toBe("dialog");
    });

    it("should have aria-modal=false", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.getAttribute("aria-modal")).toBe("false");
    });

    it("should have aria-live=polite", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.getAttribute("aria-live")).toBe("polite");
    });

    it("should render the close button", () => {
      const closeBtn = component.container.querySelector(
        ".toast-dialog__close",
      );
      expect(closeBtn).toBeTruthy();
    });

    it("should have aria-label on close button", () => {
      const closeBtn = component.container.querySelector(
        ".toast-dialog__close",
      );
      expect(closeBtn?.getAttribute("aria-label")).toBe("Close Toast");
    });
  });

  describe("given the toast dialog is in the open state", () => {
    beforeEach(async () => {
      component = await render(Default, { open: true });
    });

    it("should render the dialog element", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog).toBeTruthy();
    });

    it("should not have toast-dialog--close class when open", () => {
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.classList.contains("toast-dialog")).toBe(true);
      expect(dialog?.classList.contains("toast-dialog--close")).toBe(false);
    });

    it("should render header with h2 by default", () => {
      const title = component.container.querySelector(".toast-dialog__title");
      expect(title).toBeTruthy();
      expect(title?.tagName.toLowerCase()).toBe("h2");
    });

    it("should link dialog to header via aria-labelledby", () => {
      const dialog = component.container.querySelector("dialog");
      const title = component.container.querySelector(".toast-dialog__title");
      const titleId = title?.id;
      expect(titleId).toBeTruthy();
      expect(dialog?.getAttribute("aria-labelledby")).toBe(titleId);
    });

    it("should render main content area", () => {
      const main = component.container.querySelector(".toast-dialog__main");
      expect(main).toBeTruthy();
    });

    it("should render footer when provided", () => {
      const footer = component.container.querySelector(".toast-dialog__footer");
      expect(footer).toBeTruthy();
    });
  });
});
