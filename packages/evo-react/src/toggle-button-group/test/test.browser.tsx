import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoToggleButtonGroup, EvoToggleButtonGroupItem } from "../index";

describe("evo-toggle-button-group", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders a labeled list with stable item values and native refs", async () => {
    const groupRef = createRef<HTMLDivElement>();
    const buttonRef = createRef<HTMLButtonElement>();
    const screen = await render(
      <EvoToggleButtonGroup
        ref={groupRef}
        a11yText="Listing condition"
        columnsMin={2}
        className="condition-group"
        dir="rtl"
      >
        <EvoToggleButtonGroupItem ref={buttonRef} value="new" title="New" />
        <EvoToggleButtonGroupItem value="used" title="Used" />
      </EvoToggleButtonGroup>,
    );

    const list = screen.getByRole("list", { name: "Listing condition" });
    await expect.element(list).toBeInTheDocument();
    expect(list.element().children).toHaveLength(2);
    const newButton = screen.getByRole("button", { name: "New" });
    expect(newButton.element().parentElement?.tagName).toBe("LI");
    expect(buttonRef.current).toBe(newButton.element());
    expect(groupRef.current).toHaveClass(
      "toggle-button-group",
      "condition-group",
    );
    expect(groupRef.current).toHaveAttribute("data-columns-min", "2");
    expect(groupRef.current).toHaveAttribute("dir", "rtl");
  });

  it("allows multiple buttons in checkbox mode", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoToggleButtonGroup
        a11yText="Listing condition"
        onSelectedChange={onSelectedChange}
      >
        <EvoToggleButtonGroupItem value="new" title="New" />
        <EvoToggleButtonGroupItem value="used" title="Used" />
      </EvoToggleButtonGroup>,
    );
    const newButton = screen.getByRole("button", { name: "New" });
    const usedButton = screen.getByRole("button", { name: "Used" });

    await user.click(newButton);
    await user.click(usedButton);
    await expect.element(newButton).toHaveAttribute("aria-pressed", "true");
    await expect.element(usedButton).toHaveAttribute("aria-pressed", "true");
    expect(onSelectedChange).toHaveBeenLastCalledWith(["new", "used"]);

    await user.click(newButton);
    await expect.element(newButton).toHaveAttribute("aria-pressed", "false");
    expect(onSelectedChange).toHaveBeenLastCalledWith(["used"]);
  });

  it("keeps a radio selection when the same button is pressed again", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoToggleButtonGroup
        a11yText="Shipping method"
        variant="radio"
        onSelectedChange={onSelectedChange}
      >
        <EvoToggleButtonGroupItem value="delivery" title="Delivery" />
        <EvoToggleButtonGroupItem value="pickup" title="Local pickup" />
      </EvoToggleButtonGroup>,
    );
    const delivery = screen.getByRole("button", { name: "Delivery" });
    const pickup = screen.getByRole("button", { name: "Local pickup" });

    await user.click(delivery);
    await user.click(pickup);
    await expect.element(delivery).toHaveAttribute("aria-pressed", "false");
    await expect.element(pickup).toHaveAttribute("aria-pressed", "true");
    await user.click(pickup);
    await expect.element(pickup).toHaveAttribute("aria-pressed", "true");
    expect(onSelectedChange).toHaveBeenCalledTimes(2);
    expect(onSelectedChange).toHaveBeenLastCalledWith("pickup");
  });

  it("clears a radio-toggle selection by keyboard", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoToggleButtonGroup
        a11yText="Result display"
        variant="radio-toggle"
        defaultSelected="grid"
        onSelectedChange={onSelectedChange}
      >
        <EvoToggleButtonGroupItem value="grid" title="Grid view" />
        <EvoToggleButtonGroupItem value="list" title="List view" />
      </EvoToggleButtonGroup>,
    );
    const grid = screen.getByRole("button", { name: "Grid view" });

    await expect.element(grid).toHaveAttribute("aria-pressed", "true");
    await user.tab();
    await expect.element(grid).toHaveFocus();
    await user.keyboard(" ");
    await expect.element(grid).toHaveAttribute("aria-pressed", "false");
    expect(onSelectedChange).toHaveBeenCalledWith(null);
  });

  it("does not change a controlled selection until updated", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoToggleButtonGroup
        a11yText="Listing condition"
        variant="radio"
        selected="used"
        onSelectedChange={onSelectedChange}
      >
        <EvoToggleButtonGroupItem value="new" title="New" />
        <EvoToggleButtonGroupItem value="used" title="Used" />
      </EvoToggleButtonGroup>,
    );

    await user.click(screen.getByRole("button", { name: "New" }));
    await expect
      .element(screen.getByRole("button", { name: "Used" }))
      .toHaveAttribute("aria-pressed", "true");
    expect(onSelectedChange).toHaveBeenCalledWith("new");
  });
});
