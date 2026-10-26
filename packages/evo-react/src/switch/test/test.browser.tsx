import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoSwitch } from "../switch";

describe("evo-switch", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders the native switch input inside Skin wrappers and forwards its ref", async () => {
    const ref = createRef<HTMLInputElement>();
    const screen = await render(
      <div>
        <EvoSwitch
          id="saved-search-alerts"
          ref={ref}
          name="saved-search-alerts"
          className="alerts-switch"
          style={{ marginInlineEnd: 8 }}
          data-testid="alerts-switch"
        />
        <label htmlFor="saved-search-alerts">Saved search alerts</label>
      </div>,
    );

    const control = screen.getByRole("switch", { name: "Saved search alerts" });
    await expect.element(control).toHaveClass("switch__control");
    await expect.element(control).toHaveAttribute("type", "checkbox");
    await expect
      .element(control)
      .toHaveAttribute("name", "saved-search-alerts");
    await expect
      .element(control)
      .toHaveAttribute("data-testid", "alerts-switch");
    expect(control.element().parentElement).toHaveClass(
      "switch",
      "alerts-switch",
    );
    expect(control.element().nextElementSibling).toHaveClass("switch__button");
    expect(ref.current).toBe(control.element());
  });

  it("toggles with Space and by clicking its visible label", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <div>
        <EvoSwitch id="watch-item" onChange={onChange} />
        <label htmlFor="watch-item">Watch this item</label>
      </div>,
    );
    const control = screen.getByRole("switch", { name: "Watch this item" });

    await user.tab();
    await expect.element(control).toHaveFocus();
    await user.keyboard(" ");
    await expect.element(control).toBeChecked();
    await user.click(screen.getByText("Watch this item"));
    await expect.element(control).not.toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls[0]).toHaveLength(1);
  });

  it("honors controlled checked state", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <div>
        <EvoSwitch id="seller-updates" checked onChange={onChange} />
        <label htmlFor="seller-updates">Seller updates</label>
      </div>,
    );
    const control = screen.getByRole("switch", { name: "Seller updates" });

    await user.click(control);
    await expect.element(control).toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("keeps a disabled switch out of the tab sequence", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <div>
        <EvoSwitch id="paused-alerts" disabled onChange={onChange} />
        <label htmlFor="paused-alerts">Paused alerts</label>
      </div>,
    );
    const control = screen.getByRole("switch", { name: "Paused alerts" });

    await expect.element(control).toBeDisabled();
    await user.tab();
    await expect.element(control).not.toHaveFocus();
    expect(onChange).not.toHaveBeenCalled();
  });
});
