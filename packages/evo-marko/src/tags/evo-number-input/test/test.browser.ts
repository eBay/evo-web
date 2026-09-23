import { afterEach, describe, expect, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { cleanup, fireEvent, render, waitFor } from "@marko/testing-library";
import * as stories from "../number-input.stories";
import AriaLabelledby from "./aria-labelledby.marko";

const { Controlled, Default } = composeStories(stories);

afterEach(cleanup);

describe("evo-number-input", () => {
  it("supports aria-labelledby as alternative accessibility information", async () => {
    const component = await render(AriaLabelledby);
    const input = component.getByRole("spinbutton", { name: "Item quantity" });

    expect(input).not.toHaveAttribute("aria-label");
  });

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

  it("shows delete at a configured minimum", async () => {
    const component = await render(Default, {
      a11yDeleteText: "Remove item",
      min: 2,
      value: 2,
    });

    expect(component.container.firstElementChild).toHaveClass(
      "number-input--show-delete",
    );
    expect(component.getByLabelText("Remove item")).toBeVisible();
  });

  it.each([
    ["disabled", "disabled"],
    ["readonly", "readonly"],
  ] as const)(
    "disables internal controls when the input is %s",
    async (state, inputAttribute) => {
      const component = await render(Default, {
        a11yDeleteText: "Remove item",
        [state]: true,
        value: 1,
      });
      const input = component.getByLabelText("Enter a number");
      const decrement = component.container.querySelector<HTMLButtonElement>(
        ".number-input__decrement",
      )!;
      const increment = component.container.querySelector<HTMLButtonElement>(
        ".number-input__increment",
      )!;
      const deleteButton = component.getByLabelText("Remove item");

      expect(input).toHaveAttribute(inputAttribute);
      expect(decrement).toBeDisabled();
      expect(increment).toBeDisabled();
      expect(deleteButton).toBeDisabled();

      increment.click();
      expect(input).toHaveValue(1);
    },
  );
});
