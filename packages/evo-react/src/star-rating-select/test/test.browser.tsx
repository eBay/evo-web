import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoStarRatingSelect } from "../star-rating-select";

describe("evo-star-rating-select", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("selects native radios and updates filled icons by pointer", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoStarRatingSelect
        a11yText="Rate your purchase"
        name="purchase-rating"
        onChange={onChange}
      />,
    );

    await expect
      .element(screen.getByRole("radiogroup", { name: "Rate your purchase" }))
      .toBeInTheDocument();
    const twoStars = screen.getByRole("radio", { name: "2 stars" });
    const fourStars = screen.getByRole("radio", { name: "4 stars" });

    await user.click(twoStars);
    await expect.element(twoStars).toBeChecked();
    await expect
      .element(twoStars)
      .toHaveClass("star-rating-select__control--filled");
    expect(onChange).toHaveBeenLastCalledWith(expect.anything(), { value: 2 });

    await user.click(fourStars);
    await expect.element(fourStars).toBeChecked();
    await expect
      .element(twoStars)
      .toHaveClass("star-rating-select__control--filled");
    expect(onChange).toHaveBeenLastCalledWith(expect.anything(), { value: 4 });
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("keeps focus separate from selection and follows native arrow navigation", async () => {
    const onFocus = vi.fn();
    const onKeyDown = vi.fn();
    const onChange = vi.fn();
    const screen = await render(
      <EvoStarRatingSelect
        a11yText="Rate the seller"
        defaultValue={2}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />,
    );
    const twoStars = screen.getByRole("radio", { name: "2 stars" });
    const threeStars = screen.getByRole("radio", { name: "3 stars" });

    await user.tab();
    await expect.element(twoStars).toHaveFocus();
    await expect.element(twoStars).toBeChecked();
    expect(onFocus).toHaveBeenCalledWith(expect.anything(), { value: 2 });
    expect(onChange).not.toHaveBeenCalled();

    await user.keyboard("{ArrowRight}");
    await expect.element(threeStars).toHaveFocus();
    await expect.element(threeStars).toBeChecked();
    expect(onKeyDown).toHaveBeenCalledWith(expect.anything(), { value: 2 });
    expect(onChange).toHaveBeenCalledWith(expect.anything(), { value: 3 });
  });

  it("leaves controlled selection with the owner", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoStarRatingSelect
        a11yText="Rate your purchase"
        value={2}
        onChange={onChange}
      />,
    );

    await user.click(screen.getByRole("radio", { name: "4 stars" }));
    await expect
      .element(screen.getByRole("radio", { name: "2 stars" }))
      .toBeChecked();
    expect(onChange).toHaveBeenCalledWith(expect.anything(), { value: 4 });
  });

  it("uses the shared name as a native form value", async () => {
    const screen = await render(
      <form aria-label="Purchase review">
        <EvoStarRatingSelect a11yText="Rate your purchase" name="rating" />
      </form>,
    );
    await user.click(screen.getByRole("radio", { name: "3 stars" }));

    const form = screen.getByRole("form", { name: "Purchase review" });
    expect(new FormData(form.element() as HTMLFormElement).get("rating")).toBe(
      "3",
    );
  });

  it("disables all choices without changing selection", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoStarRatingSelect
        a11yText="Rate your purchase"
        disabled
        onChange={onChange}
      />,
    );

    for (const radio of screen.getByRole("radio").all()) {
      await expect.element(radio).toBeDisabled();
    }
    await user.tab();
    await expect
      .element(screen.getByRole("radio", { name: "1 star" }))
      .not.toHaveFocus();
    expect(onChange).not.toHaveBeenCalled();
  });
});
