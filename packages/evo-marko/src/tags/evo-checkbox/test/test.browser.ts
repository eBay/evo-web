import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, cleanup, fireEvent } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../checkbox.stories"; // import all stories from the stories file
const { Isolated } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
let clickSpy = vi.fn();
let focusSpy = vi.fn();

describe("evo-checkbox", () => {
  describe("given checkbox button is enabled", () => {
    beforeEach(async () => {
      component = await render(Isolated, { onClick: clickSpy });
    });
    afterEach(() => {
      clickSpy.mockReset();
    });

    describe("when checkbox button is clicked", () => {
      beforeEach(async () => {
        await component.getByRole("checkbox").click();
      });

      it("then it emitted the change event", () => {
        expect(clickSpy).toBeCalledTimes(1);
      });

      it("then it is checked", () => {
        expect(component.getByRole("checkbox")).has.property("checked", true);
      });
    });
  });

  describe("given checkbox button is disabled", () => {
    beforeEach(async () => {
      component = await render(Isolated, { disabled: true, onClick: clickSpy });
    });
    afterEach(() => {
      clickSpy.mockReset();
    });

    describe("when checkbox button is clicked", () => {
      beforeEach(async () => {
        await component.getByRole("checkbox").click();
      });

      it("then it does not emit the change event", () => {
        expect(clickSpy).not.toBeCalled();
      });

      it("then it remains unchecked", () => {
        expect(component.getByRole("checkbox")).has.property("checked", false);
      });
    });
  });

  describe("when native focus event is fired", () => {
    beforeEach(async () => {
      component = await render(Isolated, { onFocus: focusSpy });
      await fireEvent.focus(component.getByRole("checkbox"));
    });
    afterEach(() => {
      focusSpy.mockReset();
    });

    it("then it emits the event", () => {
      expect(focusSpy).toBeCalledTimes(1);
    });
  });
});
