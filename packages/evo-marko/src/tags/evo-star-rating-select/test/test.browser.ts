import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, waitFor } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../star-rating-select.stories";
import Form from "./form.marko";

const { Default, Controllable } = composeStories(stories);

const filledClass = "star-rating-select__control--filled";

let component: Awaited<ReturnType<typeof render>>;

function getStar(name: string) {
  return component.getByRole("radio", { name }) as HTMLInputElement;
}

function getFilledStars() {
  const icons = component.container.querySelectorAll("svg");
  return [1, 2, 3, 4, 5].filter(
    (star) =>
      getComputedStyle(icons[star - 1]).getPropertyValue(
        "--color-star-rating-full",
      ) !== "transparent",
  );
}

afterEach(cleanup);

describe("evo-star-rating-select", () => {
  it("selects a star and fills the stars up to it", async () => {
    component = await render(Default);
    expect(
      component.getByRole("radiogroup", { name: "Rate your purchase" }),
    ).toBeTruthy();

    await fireEvent.click(getStar("2 stars"));
    expect(getStar("2 stars").checked).toBe(true);
    expect(getStar("1 star")).toHaveClass(filledClass);
    expect(getStar("2 stars")).toHaveClass(filledClass);
    expect(getStar("3 stars")).not.toHaveClass(filledClass);

    await fireEvent.click(getStar("4 stars"));
    expect(getStar("4 stars").checked).toBe(true);
    expect(getStar("2 stars").checked).toBe(false);
    expect(getStar("2 stars")).toHaveClass(filledClass);
    expect(getStar("5 stars")).not.toHaveClass(filledClass);
  });

  it("fills from the checked radio in CSS while the filled classes are stale", async () => {
    component = await render(Default, { value: 3 });
    expect(getFilledStars()).toEqual([1, 2, 3]);

    getStar("2 stars").checked = true;
    expect(getStar("3 stars")).toHaveClass(filledClass);
    expect(getFilledStars()).toEqual([1, 2]);

    getStar("5 stars").checked = true;
    expect(getStar("4 stars")).not.toHaveClass(filledClass);
    expect(getFilledStars()).toEqual([1, 2, 3, 4, 5]);
  });

  it("binds the rating both ways", async () => {
    component = await render(Controllable);
    expect(getStar("3 stars").checked).toBe(true);

    await fireEvent.click(getStar("5 stars"));
    expect(component.getByText("Selected: 5")).toBeTruthy();

    await fireEvent.click(component.getByRole("button", { name: "Clear" }));
    expect(component.getByText("Selected: none")).toBeTruthy();
    for (const radio of component.getAllByRole("radio")) {
      expect(radio).not.toBeChecked();
      expect(radio).not.toHaveClass(filledClass);
    }
  });

  it("submits the rating with its form and clears it on reset", async () => {
    component = await render(Form);
    const form = component.getByRole("form") as HTMLFormElement;

    await fireEvent.click(getStar("3 stars"));
    expect(new FormData(form).get("rating")).toBe("3");

    form.reset();
    await waitFor(() =>
      expect(component.getByRole("status")).toHaveTextContent("0"),
    );
    for (const radio of component.getAllByRole("radio")) {
      expect(radio).not.toBeChecked();
    }
  });
});
