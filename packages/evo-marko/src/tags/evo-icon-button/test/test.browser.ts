import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../icon-button.stories";
const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
let clickSpy = vi.fn();

describe.skip("icon-button", () => {
  afterEach(() => {
    clickSpy.mockReset();
  });
  describe("given button is enabled", () => {
    beforeEach(async () => {
      component = await render(Default, {
        onClick: clickSpy,
      });
    });
    describe("when button is clicked", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("button"));
      });

      it("then it emits the event with correct data", () => {
        expect(component.emitted("click")).has.length(1);
      });
    });
  });

  describe("given button is disabled", () => {
    beforeEach(async () => {
      component = await render(Default, {
        disabled: true,
        onClick: clickSpy,
      });
    });

    describe("when button is clicked", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("button"));
      });

      it("then it does not emit the event", () => {
        expect(component.emitted("click")).has.length(0);
      });
    });
  });
});
