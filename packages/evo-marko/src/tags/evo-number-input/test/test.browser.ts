import { afterEach, describe, expect, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { cleanup, fireEvent, render, waitFor } from "@marko/testing-library";
import * as stories from "../number-input.stories";

const { Controlled } = composeStories(stories);

afterEach(cleanup);

describe("evo-number-input", () => {
  it("updates a bound value after a paddle click", async () => {
    const component = await render(Controlled);
    const increment = component.queryAllByRole("button", { hidden: true })[1];

    await fireEvent.click(increment);

    await waitFor(() => {
      expect(component.getByLabelText("Enter a number")).toHaveValue(1);
      expect(component.getByText(/Current value is 1/)).toBeInTheDocument();
    });
  });

  it("updates a bound value after direct input", async () => {
    const component = await render(Controlled);
    const input = component.getByLabelText("Enter a number");

    await fireEvent.input(input, { target: { value: "7" } });

    await waitFor(() => {
      expect(input).toHaveValue(7);
      expect(component.getByText(/Current value is 7/)).toBeInTheDocument();
    });
  });
});
