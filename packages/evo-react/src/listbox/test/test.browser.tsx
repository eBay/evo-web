import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoListbox } from "../listbox";

const options = [
  { value: "US", text: "United States" },
  { value: "CA", text: "Canada", disabled: true },
  { value: "MX", text: "Mexico", description: "International shipping" },
];

describe("EvoListbox", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("renders options, descriptions, and the hidden native select", async () => {
    const screen = await render(
      <form>
        <EvoListbox
          a11yText="Shipping destination"
          a11ySelectedText="selected"
          name="destination"
          options={options}
        />
      </form>,
    );
    const listbox = screen.getByRole("listbox", {
      name: "Shipping destination",
    });
    await expect.element(listbox).toBeInTheDocument();
    await expect
      .element(
        screen.getByRole("option", { name: "Mexico International shipping" }),
      )
      .toBeInTheDocument();
    await expect
      .element(screen.getByRole("option", { name: "Canada" }))
      .toHaveAttribute("aria-disabled", "true");
    const form = screen.container.querySelector("form")!;
    expect(new FormData(form).get("destination")).toBe("US");
  });

  it("selects a value on click and submits it with the form", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <form>
        <EvoListbox
          a11yText="Shipping destination"
          a11ySelectedText="selected"
          name="destination"
          options={options}
          onSelectedChange={onSelectedChange}
        />
      </form>,
    );
    await user.click(
      screen.getByRole("option", { name: "Mexico International shipping" }),
    );
    expect(onSelectedChange).toHaveBeenCalledWith("MX");
    await expect
      .element(screen.getByRole("option", { name: /Mexico/ }))
      .toHaveAttribute("aria-selected", "true");
    expect(
      new FormData(screen.container.querySelector("form")!).get("destination"),
    ).toBe("MX");
  });

  it("skips disabled choices and selects with Enter in manual mode", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoListbox
        a11yText="Shipping destination"
        a11ySelectedText="selected"
        options={options}
        onSelectedChange={onSelectedChange}
      />,
    );
    await user.click(screen.getByRole("listbox"));
    await user.keyboard("{ArrowDown}");
    expect(onSelectedChange).not.toHaveBeenCalled();
    await user.keyboard("{Enter}");
    expect(onSelectedChange).toHaveBeenCalledWith("US");
    await user.keyboard("{ArrowDown}");
    await user.keyboard(" ");
    expect(onSelectedChange).toHaveBeenCalledWith("MX");
  });

  it("selects while navigating in auto mode", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoListbox
        a11yText="Shipping destination"
        a11ySelectedText="selected"
        options={options}
        listSelection="auto"
        onSelectedChange={onSelectedChange}
      />,
    );
    await user.click(screen.getByRole("listbox"));
    await user.keyboard("{ArrowDown}");
    expect(onSelectedChange).toHaveBeenCalledWith("US");
    await user.keyboard("{ArrowDown}");
    expect(onSelectedChange).toHaveBeenCalledWith("MX");
  });

  it("highlights by typeahead without selecting and calls onEscape", async () => {
    const onSelectedChange = vi.fn();
    const onEscape = vi.fn();
    const screen = await render(
      <EvoListbox
        a11yText="Shipping destination"
        a11ySelectedText="selected"
        options={options}
        listSelection="auto"
        onSelectedChange={onSelectedChange}
        onEscape={onEscape}
      />,
    );
    await user.click(screen.getByRole("listbox"));
    await user.keyboard("M");
    await expect
      .element(screen.getByRole("option", { name: /Mexico/ }))
      .toHaveClass("listbox__option--active");
    expect(onSelectedChange).not.toHaveBeenCalled();
    await user.keyboard("{Escape}");
    expect(onEscape).toHaveBeenCalledTimes(1);
  });

  it("blocks interaction when disabled", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoListbox
        a11yText="Shipping destination"
        a11ySelectedText="selected"
        options={options}
        disabled
        onSelectedChange={onSelectedChange}
      />,
    );
    const disabledOption = screen.getByRole("option", { name: /Mexico/ });
    (disabledOption.element() as HTMLElement).click();
    expect(onSelectedChange).not.toHaveBeenCalled();
    await expect
      .element(screen.getByRole("listbox"))
      .toHaveAttribute("tabindex", "-1");
  });

  it("uses an embedding component's Skin class prefix", async () => {
    const screen = await render(
      <EvoListbox
        a11yText="Shipping destination"
        a11ySelectedText="selected"
        options={options}
        classPrefix="listbox-button"
      />,
    );
    await expect
      .element(screen.getByRole("listbox"))
      .toHaveClass("listbox-button__options");
    await expect
      .element(screen.getByRole("option", { name: "United States" }))
      .toHaveClass("listbox-button__option");
  });
});
