import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { userEvent, type UserEvent } from "@vitest/browser";
import * as stories from "../icon-button.stories";
const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
let user: UserEvent;
let clickSpy = vi.fn();
let escapeSpy = vi.fn();

describe("icon-button", () => {
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
    clickSpy.mockReset();
    escapeSpy.mockReset();
  });
  describe("given button is enabled", () => {
    beforeEach(async () => {
      component = await render(Default, {
        onClick: clickSpy,
        onEscape: escapeSpy,
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

    describe("when escape key is pressed", () => {
      beforeEach(async () => {
        await user.type(component.getByRole("button"), "{Escape}");
      });

      it("then it emits the event with correct data", () => {
        expect(component.emitted("escape")).has.length(1);
      });
    });
  });

  describe("given button is disabled", () => {
    beforeEach(async () => {
      component = await render(Default, {
        disabled: true,
        onClick: clickSpy,
        onEscape: escapeSpy,
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

    describe("when escape key is pressed", () => {
      beforeEach(async () => {
        await user.type(component.getByRole("button"), "{Escape}");
      });

      it("then it does not emit the event", () => {
        expect(component.emitted("escape")).has.length(0);
      });
    });
  });
});
