import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, cleanup, waitFor, fireEvent } from "@marko/testing-library";
import * as stories from "../filter-input.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("given a filter input textbox", () => {
  beforeEach(async () => {
    component = await render(Default, {
      value: 1,
      a11yClearButton: "Clear the text",
    });
  });

  describe("clear is pressed", () => {
    beforeEach(async () => {
      const clear = component.getByLabelText("Clear the text");
      await fireEvent.click(clear);
    });

    it("it should clear the value", async () => {
      await waitFor(() => {
        expect(component.emitted("clear")).has.length(1);
      });
    });

    it("should clear textbox", async () => {
      const textbox = component.getByLabelText(
        "Filter input",
      ) as HTMLInputElement;
      expect(textbox.value).toBe("");
    });
  });
});
