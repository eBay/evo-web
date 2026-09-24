import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoFilterInput } from "../filter-input";

describe("evo-filter-input", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders the search box and links it to results", async () => {
    const screen = await render(
      <>
        <EvoFilterInput
          a11yControlsId="results"
          aria-label="Filter products"
          placeholder="Filter products"
          data-testid="filter"
        />
        <ul id="results">
          <li>Camera</li>
        </ul>
      </>,
    );
    const input = screen.getByRole("searchbox", { name: "Filter products" });

    await expect.element(input).toHaveAttribute("aria-controls", "results");
    await expect
      .element(input)
      .toHaveAttribute("placeholder", "Filter products");
    await expect.element(input).toHaveAttribute("data-testid", "filter");
    expect(
      input.element().closest(".filter-input > .textbox--fluid"),
    ).not.toBeNull();
    expect(
      screen.getByRole("button", { name: "Clear filter" }).query(),
    ).toBeNull();
  });

  it("clears an uncontrolled value and reports changes", async () => {
    const onChange = vi.fn();
    const onValueChange = vi.fn();
    const screen = await render(
      <EvoFilterInput
        a11yControlsId="results"
        a11yClearButtonText="Clear filter"
        aria-label="Filter products"
        defaultValue="Camera"
        onChange={onChange}
        onValueChange={onValueChange}
        placeholder="Filter products"
      />,
    );
    const input = screen.getByRole("searchbox", { name: "Filter products" });
    const clear = screen.getByRole("button", { name: "Clear filter" });

    await expect.element(input).toHaveValue("Camera");
    await user.clear(input);
    await user.type(input, "Lens");
    await expect.element(input).toHaveValue("Lens");
    expect(onChange).toHaveBeenCalled();
    expect(onValueChange).toHaveBeenLastCalledWith("Lens");

    await user.click(clear);
    await expect.element(input).toHaveValue("");
    expect(onValueChange).toHaveBeenLastCalledWith("");
    await expect.element(clear).toHaveClass("filter-input__clear-btn");
  });

  it("asks the owner to clear a controlled value", async () => {
    function ControlledFilter() {
      const [value, setValue] = useState("Camera");
      return (
        <EvoFilterInput
          a11yControlsId="results"
          a11yClearButtonText="Clear filter"
          aria-label="Filter products"
          onValueChange={setValue}
          placeholder="Filter products"
          value={value}
        />
      );
    }

    const screen = await render(<ControlledFilter />);
    const input = screen.getByRole("searchbox", { name: "Filter products" });
    await user.click(screen.getByRole("button", { name: "Clear filter" }));
    await expect.element(input).toHaveValue("");
  });

  it("forwards the input ref and keeps the clear button disabled", async () => {
    const ref = createRef<HTMLInputElement>();
    const screen = await render(
      <EvoFilterInput
        a11yControlsId="results"
        a11yClearButtonText="Clear filter"
        aria-label="Filter products"
        disabled
        placeholder="Filter products"
        ref={ref}
        size="large"
      />,
    );

    expect(ref.current).toBe(screen.getByRole("searchbox").element());
    await expect.element(screen.getByRole("searchbox")).toBeDisabled();
    await expect
      .element(screen.getByRole("button", { name: "Clear filter" }))
      .toBeDisabled();
    expect(ref.current?.closest(".filter-input--large")).not.toBeNull();
    expect(ref.current?.closest(".textbox--large")).not.toBeNull();
  });
});
