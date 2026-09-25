import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoChipsCombobox, EvoChipsComboboxOption } from "../index";

function choices() {
  return (
    <>
      <EvoChipsComboboxOption text="Free shipping" />
      <EvoChipsComboboxOption text="Local pickup" />
      <EvoChipsComboboxOption text="Returns accepted" />
    </>
  );
}

describe("EvoChipsCombobox", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("renders suggestions in the composed combobox", async () => {
    const screen = await render(
      <EvoChipsCombobox aria-label="Item features" placeholder="Add a feature">
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await expect.element(input).toHaveAttribute("placeholder", "Add a feature");
    await user.click(input);
    await expect
      .element(screen.getByRole("option", { name: "Free shipping" }))
      .toBeInTheDocument();
  });

  it("adds and removes a suggested chip and hides its option", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoChipsCombobox
        aria-label="Item features"
        onSelectedChange={onSelectedChange}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await user.click(input);
    await user.click(screen.getByRole("option", { name: "Free shipping" }));
    expect(onSelectedChange).toHaveBeenCalledWith(["Free shipping"]);
    await expect
      .element(screen.getByRole("button", { name: "Remove Free shipping" }))
      .toBeInTheDocument();
    await user.click(input);
    expect(
      screen.container.querySelector('[role="option"]'),
    ).not.toHaveTextContent("Free shipping");
    await user.click(
      screen.getByRole("button", { name: "Remove Free shipping" }),
    );
    expect(onSelectedChange).toHaveBeenLastCalledWith([]);
  });

  it("adds typed custom text with Enter", async () => {
    const screen = await render(
      <EvoChipsCombobox aria-label="Item features">
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await user.fill(input, "Gift wrap");
    await user.keyboard("{Enter}");
    await expect
      .element(screen.getByRole("button", { name: "Remove Gift wrap" }))
      .toBeInTheDocument();
    await expect.element(input).toHaveValue("");
  });

  it("adds a highlighted suggestion with the keyboard", async () => {
    const screen = await render(
      <EvoChipsCombobox aria-label="Item features" listSelection="manual">
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    await user.click(input);
    await user.keyboard("{ArrowDown}{Enter}");
    await expect
      .element(screen.getByRole("button", { name: "Remove Free shipping" }))
      .toBeInTheDocument();
    await expect.element(input).toHaveValue("");
  });

  it("keeps controlled selection unchanged until the application updates it", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoChipsCombobox
        aria-label="Item features"
        selected={["Free shipping"]}
        onSelectedChange={onSelectedChange}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    await user.click(screen.getByRole("combobox", { name: "Item features" }));
    await user.click(screen.getByRole("option", { name: "Local pickup" }));
    expect(onSelectedChange).toHaveBeenCalledWith([
      "Free shipping",
      "Local pickup",
    ]);
    await expect
      .element(screen.getByRole("button", { name: "Remove Free shipping" }))
      .toBeInTheDocument();
    expect(
      screen.container.querySelectorAll(".chips-combobox__items li"),
    ).toHaveLength(1);
  });

  it("applies invalid and disabled states and forwards the input ref", async () => {
    const ref = createRef<HTMLInputElement>();
    const screen = await render(
      <EvoChipsCombobox
        ref={ref}
        aria-label="Item features"
        aria-invalid
        disabled
        defaultSelected={["Free shipping"]}
      >
        {choices()}
      </EvoChipsCombobox>,
    );
    const input = screen.getByRole("combobox", { name: "Item features" });
    expect(ref.current).toBe(input.element());
    await expect.element(input).toBeDisabled();
    await expect.element(input).toHaveAttribute("aria-invalid", "true");
    expect(input.element().closest(".chips-combobox--error")).not.toBeNull();
    await expect
      .element(screen.getByRole("button", { name: "Remove Free shipping" }))
      .toBeDisabled();
  });
});
