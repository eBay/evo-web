import { composeStories } from "@storybook/marko";
import { cleanup, fireEvent, render } from "@marko/testing-library";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import * as stories from "../character-count.stories";

const { Default, InField, CustomText } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-character-count", () => {
  describe("given the default character count", () => {
    beforeEach(async () => {
      component = await render(Default);
    });

    it("renders the calculated count", () => {
      expect(component.getByText("11/120")).toBeInTheDocument();
    });

    it("renders the provided accessibility text", () => {
      expect(component.getByText("characters remaining")).toBeInTheDocument();
    });

    it("uses a manual count", async () => {
      await component.rerender({ ...Default.args, count: 5 });

      expect(component.getByText("5/120")).toBeInTheDocument();
    });
  });

  describe("given a character count associated with an input", () => {
    beforeEach(async () => {
      component = await render(InField);
    });

    it("sets aria-live to off while within the limit", () => {
      expect(component.getByRole("textbox")).toHaveAttribute(
        "aria-live",
        "off",
      );
    });

    it("sets aria-live to polite when the limit is exceeded", async () => {
      await fireEvent.input(component.getByRole("textbox"), {
        target: { value: "a".repeat(121) },
      });

      expect(component.getByRole("textbox")).toHaveAttribute(
        "aria-live",
        "polite",
      );
    });
  });

  it("passes the count to custom content", async () => {
    component = await render(CustomText, { value: "Custom" });

    expect(component.getByText("6 of 120 (114 remaining)")).toBeInTheDocument();
  });
});
