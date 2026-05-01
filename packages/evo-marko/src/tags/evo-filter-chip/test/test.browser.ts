import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../filter-chip.stories"; // import all stories from the stories file
const { Default, MenuButton } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
let onClick = vi.fn();
let selectedChange = vi.fn();
let expandedChange = vi.fn();

describe("evo-filter-chip", () => {
  afterEach(() => {
    onClick.mockReset();
    selectedChange.mockReset();
    expandedChange.mockReset();
  });
  describe("default", () => {
    beforeEach(async () => {
      component = await render(Default, { onClick, selectedChange });
    });

    describe("when button is clicked", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("button"));
      });

      it("then it emits the event with correct data", () => {
        expect(onClick).toBeCalledTimes(1);
        expect(selectedChange).toBeCalledWith(true);
      });
    });
  });

  describe("default selected", () => {
    beforeEach(async () => {
      component = await render(Default, {
        selected: true,
        onClick,
        selectedChange,
      });
    });

    describe("when button is clicked", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("button"));
      });

      it("then it emits the event with correct data", () => {
        expect(onClick).toBeCalledTimes(1);
        expect(selectedChange).toBeCalledWith(false);
      });
    });
  });

  describe.skip("menu button", () => {
    beforeEach(async () => {
      component = await render(MenuButton);
    });

    describe("when button is clicked", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("button"));
      });

      it("then it emits the event with correct data", () => {
        expect(onClick).toBeCalledTimes(1);
        expect(expandedChange).toBeCalledWith(true);
      });
    });
  });
  describe.skip("menu button selected", () => {
    beforeEach(async () => {
      component = await render(MenuButton, {
        selected: true,
        expanded: true,
      });
    });

    describe("when button is clicked", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("button"));
      });

      it("then it emits the event with correct data", () => {
        expect(onClick).toBeCalledTimes(1);
        expect(expandedChange).toBeCalledWith(false);
      });
    });
  });
});
