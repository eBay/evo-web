import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoListboxButton } from "../listbox-button";

const options = [
  { value: "US", text: "United States" },
  { value: "CA", text: "Canada", description: "International shipping" },
  { value: "MX", text: "Mexico", disabled: true },
];

describe("EvoListboxButton", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("renders the legacy trigger, popup, and hidden select", async () => {
    const screen = await render(
      <form>
        <EvoListboxButton
          prefixLabel="Shipping region"
          a11ySelectedText="selected"
          name="region"
          options={options}
          defaultSelected="US"
        />
      </form>,
    );
    const trigger = screen.getByRole("button", {
      name: /Shipping region United States/,
    });
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger.element().closest("span.listbox-button")).not.toBeNull();
    expect(
      new FormData(screen.container.querySelector("form")!).get("region"),
    ).toBe("US");
    await user.click(trigger);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
    await expect
      .element(screen.getByRole("listbox", { name: "Shipping region" }))
      .toBeInTheDocument();
    await expect
      .element(screen.getByRole("option", { name: /Canada/ }))
      .toHaveClass("listbox-button__option");
  });

  it("selects by click, closes, restores trigger focus, and submits the value", async () => {
    const onSelectedChange = vi.fn();
    const onOpenChange = vi.fn();
    const screen = await render(
      <form>
        <EvoListboxButton
          prefixLabel="Shipping region"
          a11ySelectedText="selected"
          name="region"
          options={options}
          onSelectedChange={onSelectedChange}
          onOpenChange={onOpenChange}
        />
      </form>,
    );
    const trigger = screen.getByRole("button", { name: /Shipping region/ });
    await user.click(trigger);
    await user.click(screen.getByRole("option", { name: /Canada/ }));
    expect(onSelectedChange).toHaveBeenCalledWith("CA");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
    expect(
      new FormData(screen.container.querySelector("form")!).get("region"),
    ).toBe("CA");
  });

  it("supports arrow navigation, manual selection, and Escape", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoListboxButton
        prefixLabel="Shipping region"
        a11ySelectedText="selected"
        options={options}
        onSelectedChange={onSelectedChange}
      />,
    );
    const trigger = screen.getByRole("button", { name: /Shipping region/ });
    await user.click(trigger);
    await expect.element(screen.getByRole("listbox")).toHaveFocus();
    await user.keyboard("{ArrowDown}");
    expect(onSelectedChange).not.toHaveBeenCalled();
    await user.keyboard("{Enter}");
    expect(onSelectedChange).toHaveBeenCalledWith("US");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await user.click(trigger);
    await user.keyboard("{Escape}");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();
  });

  it("keeps the popup open on auto navigation and skips disabled options", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoListboxButton
        prefixLabel="Shipping region"
        a11ySelectedText="selected"
        options={options}
        listSelection="auto"
        onSelectedChange={onSelectedChange}
      />,
    );
    const trigger = screen.getByRole("button", { name: /Shipping region/ });
    await user.click(trigger);
    await user.keyboard("{ArrowDown}{ArrowDown}{ArrowDown}");
    expect(onSelectedChange).toHaveBeenNthCalledWith(1, "US");
    expect(onSelectedChange).toHaveBeenNthCalledWith(2, "CA");
    expect(onSelectedChange).toHaveBeenNthCalledWith(3, "US");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
  });

  it("supports controlled selection and popup state", async () => {
    const onSelectedChange = vi.fn();
    const onOpenChange = vi.fn();
    const screen = await render(
      <EvoListboxButton
        prefixLabel="Shipping region"
        a11ySelectedText="selected"
        options={options}
        selected="CA"
        open
        onSelectedChange={onSelectedChange}
        onOpenChange={onOpenChange}
      />,
    );
    const trigger = screen.getByRole("button", {
      name: /Shipping region Canada/,
    });
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
    await user.click(screen.getByRole("option", { name: "United States" }));
    expect(onSelectedChange).toHaveBeenCalledWith("US");
    expect(onOpenChange).toHaveBeenCalledWith(false);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
  });

  it("keeps the popup open when collapseOnSelect is false", async () => {
    const screen = await render(
      <EvoListboxButton
        prefixLabel="Shipping region"
        a11ySelectedText="selected"
        options={options}
        collapseOnSelect={false}
      />,
    );
    const trigger = screen.getByRole("button", { name: /Shipping region/ });
    await user.click(trigger);
    await user.click(screen.getByRole("option", { name: /Canada/ }));
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
  });

  it("maps invalid state to the native trigger and prevents disabled opening", async () => {
    const screen = await render(
      <EvoListboxButton
        prefixLabel="Shipping region"
        a11ySelectedText="selected"
        options={options}
        aria-invalid
        hasError
        disabled
      />,
    );
    const trigger = screen.getByRole("button", { name: /Shipping region/ });
    await expect.element(trigger).toHaveAttribute("aria-invalid", "true");
    await expect.element(trigger).toBeDisabled();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger.element().closest(".listbox-button--error")).not.toBeNull();
  });

  it("uses a div wrapper for truncated nonfluid buttons", async () => {
    const screen = await render(
      <EvoListboxButton
        a11yText="Shipping region"
        a11ySelectedText="selected"
        options={options}
        truncate
      />,
    );
    expect(screen.container.querySelector("div.listbox-button")).not.toBeNull();
    expect(
      screen.container.querySelector("button.btn--truncated"),
    ).not.toBeNull();
  });
});
