import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../button.stories";
const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
let clickSpy = vi.fn();

describe("evo-button", () => {
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
        expect(clickSpy).toBeCalledTimes(1);
      });
    });
  });

  [
    { state: "loading", input: { a11yLoadingText: "Loading" } },
    { state: "partially disabled", input: { partiallyDisabled: true } },
  ].forEach(({ state, input }) => {
    describe(`given button is ${state}`, () => {
      beforeEach(async () => {
        component = await render(Default, { ...input, onClick: clickSpy });
      });

      describe("when button is clicked", () => {
        beforeEach(async () => {
          await fireEvent.click(component.getByRole("button"));
        });

        it("then it does not emit the event", () => {
          expect(clickSpy).not.toBeCalled();
        });
      });
    });
  });

  describe.skip("given button is disabled", () => {
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
        expect(clickSpy).not.toBeCalled();
      });
    });
  });
});
