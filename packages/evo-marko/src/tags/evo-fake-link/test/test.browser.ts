import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../fake-link.stories";
import Form from "./form.marko";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
const clickSpy = vi.fn();

describe("evo-fake-link", () => {
  afterEach(() => {
    clickSpy.mockReset();
  });

  describe("given fake link is enabled", () => {
    beforeEach(async () => {
      component = await render(Default, { onClick: clickSpy });
    });

    it("should render a button", () => {
      expect(
        component.getByRole("button", { name: "View seller details" }),
      ).toBeTruthy();
    });

    describe("when fake link is clicked", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("button"));
      });

      it("then it calls the click handler", () => {
        expect(clickSpy).toBeCalledTimes(1);
      });
    });
  });

  describe("given fake link is disabled", () => {
    beforeEach(async () => {
      component = await render(Default, { disabled: true, onClick: clickSpy });
    });

    describe("when fake link is clicked", () => {
      beforeEach(() => {
        // Chromium still dispatches synthetic events (`fireEvent.click`) on a
        // disabled button; `click()` follows the real activation behavior.
        component.getByRole("button").click();
      });

      it("then it does not call the click handler", () => {
        expect(clickSpy).not.toBeCalled();
      });
    });
  });

  describe("given fake link is inside a form", () => {
    const submitSpy = vi.fn();

    beforeEach(async () => {
      component = await render(Form, { onSubmit: submitSpy });
    });

    describe("when fake link is clicked", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("button"));
      });

      it("then it does not submit the form", () => {
        expect(submitSpy).not.toBeCalled();
      });
    });
  });
});
