import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
  expect,
  vi,
} from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { fastAnimations } from "../../../common/test-utils/index";
import * as stories from "../dialog.stories";
const { Default } = composeStories(stories);

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
let cancelSpy = vi.fn();

describe("evo-dialog", () => {
  describe("given the dialog is in the default (closed) state", () => {
    beforeEach(async () => {
      component = await render(Default, {
        onCancel: cancelSpy,
      });
    });
    afterEach(() => {
      cancelSpy.mockReset();
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

    it("should render the close button", () => {
      const closeBtn = component.container.querySelector(".dialog__close");
      expect(closeBtn).toBeTruthy();
    });

    it("should have aria-label on close button", () => {
      const closeBtn = component.container.querySelector(".dialog__close");
      expect(closeBtn?.getAttribute("aria-label")).toBe("Close Dialog");
    });
  });

  describe("given the dialog is in the open state", () => {
    beforeEach(async () => {
      component = await render(Default, {
        open: true,
        onCancel: cancelSpy,
      });
    });
    afterEach(() => {
      cancelSpy.mockReset();
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

    it("should render main content area", () => {
      const main = component.container.querySelector(".dialog__main");
      expect(main).toBeTruthy();
    });
  });

  describe("given size variants via props", () => {
    it("should apply the dialog--wide class", async () => {
      component = await render(Default, { size: "wide" });
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.classList.contains("dialog--wide")).toBe(true);
    });

    it("should apply the dialog--narrow class", async () => {
      component = await render(Default, { size: "narrow" });
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.classList.contains("dialog--narrow")).toBe(true);
    });

    it("should apply the dialog--large class", async () => {
      component = await render(Default, { size: "large" });
      const dialog = component.container.querySelector("dialog");
      expect(dialog?.classList.contains("dialog--large")).toBe(true);
    });
  });
});
