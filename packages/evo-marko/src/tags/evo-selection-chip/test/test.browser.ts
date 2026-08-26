import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../selection-chip.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;
let onClick = vi.fn();
let selectedChange = vi.fn();

describe("evo-selection-chip", () => {
  afterEach(() => {
    onClick.mockReset();
    selectedChange.mockReset();
  });

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

describe("evo-selection-chip selected", () => {
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
