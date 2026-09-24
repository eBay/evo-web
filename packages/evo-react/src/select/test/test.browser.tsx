import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoSelect, EvoSelectOption, EvoSelectOptionGroup } from "../index";

describe("evo-select", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("selects an option and forwards native events", async () => {
    const onChange = vi.fn();
    const onValueChange = vi.fn();
    const screen = await render(
      <EvoSelect
        aria-label="Shipping method"
        defaultValue="standard"
        name="shipping"
        onChange={onChange}
        onValueChange={onValueChange}
      >
        <EvoSelectOption value="standard">Standard</EvoSelectOption>
        <EvoSelectOption value="express">Express</EvoSelectOption>
      </EvoSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Shipping method" });

    await expect.element(select).toHaveValue("standard");
    await user.selectOptions(select, "express");
    await expect.element(select).toHaveValue("express");
    await expect.element(select).toHaveAttribute("name", "shipping");
    expect(onValueChange).toHaveBeenLastCalledWith("express");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0]).toHaveLength(1);
  });

  it("keeps a controlled value until its owner changes it", async () => {
    const onValueChange = vi.fn();
    const screen = await render(
      <EvoSelect
        aria-label="Shipping method"
        value="standard"
        onValueChange={onValueChange}
      >
        <EvoSelectOption value="standard">Standard</EvoSelectOption>
        <EvoSelectOption value="express">Express</EvoSelectOption>
      </EvoSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Shipping method" });

    await user.selectOptions(select, "express");
    expect(onValueChange).toHaveBeenLastCalledWith("express");
    await expect.element(select).toHaveValue("standard");
  });

  it("updates a controlled value and floating label", async () => {
    function ControlledSelect() {
      const [value, setValue] = useState("");
      return (
        <EvoSelect
          floatingLabel="Shipping method"
          value={value}
          onValueChange={setValue}
        >
          <EvoSelectOption value="">Choose</EvoSelectOption>
          <EvoSelectOption value="express">Express</EvoSelectOption>
        </EvoSelect>
      );
    }

    const screen = await render(<ControlledSelect />);
    const select = screen.getByRole("combobox", { name: "Shipping method" });
    const label = screen.getByText("Shipping method");
    await expect.element(label).toHaveClass("floating-label__label--inline");
    await user.selectOptions(select, "express");
    await expect
      .element(label)
      .not.toHaveClass("floating-label__label--inline");
  });

  it("renders native groups and passes option attributes", async () => {
    const screen = await render(
      <EvoSelect
        aria-label="Shipping method"
        aria-invalid="true"
        size="large"
        fluid
      >
        <EvoSelectOptionGroup label="Domestic">
          <EvoSelectOption value="standard">Standard</EvoSelectOption>
          <EvoSelectOption value="express" disabled>
            Express
          </EvoSelectOption>
        </EvoSelectOptionGroup>
      </EvoSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Shipping method" });

    await expect.element(select).toHaveAttribute("aria-invalid", "true");
    expect(
      select.element().closest(".select--large.select--fluid"),
    ).not.toBeNull();
    // Native optgroup is not exposed as a group in Chromium's accessibility tree.
    expect(select.element().querySelector("optgroup")?.label).toBe("Domestic");
    await expect
      .element(screen.getByRole("option", { name: "Express" }))
      .toBeDisabled();
  });

  it("supports native multiple selection", async () => {
    const onValueChange = vi.fn();
    const screen = await render(
      <EvoSelect
        aria-label="Shipping methods"
        multiple
        onValueChange={onValueChange}
      >
        <EvoSelectOption value="standard">Standard</EvoSelectOption>
        <EvoSelectOption value="express">Express</EvoSelectOption>
      </EvoSelect>,
    );
    const select = screen.getByRole("listbox", { name: "Shipping methods" });
    await user.selectOptions(select, ["standard", "express"]);
    expect(onValueChange).toHaveBeenLastCalledWith(["standard", "express"]);
  });

  it("forwards ref and disabled state to the native select", async () => {
    const ref = createRef<HTMLSelectElement>();
    const screen = await render(
      <EvoSelect aria-label="Shipping method" disabled ref={ref} borderless>
        <EvoSelectOption value="standard">Standard</EvoSelectOption>
      </EvoSelect>,
    );

    expect(ref.current).toBe(screen.getByRole("combobox").element());
    await expect.element(screen.getByRole("combobox")).toBeDisabled();
    expect(ref.current?.closest(".select--borderless")).not.toBeNull();
  });
});
