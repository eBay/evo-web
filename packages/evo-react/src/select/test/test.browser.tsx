import { act, createRef, useState } from "react";
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

  it("selects an option and passes its value to onChange", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoSelect
        aria-label="Shipping method"
        defaultValue="standard"
        name="shipping"
        onChange={onChange}
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
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith("express");
  });

  it("keeps a controlled value until its owner changes it", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoSelect
        aria-label="Shipping method"
        value="standard"
        onChange={onChange}
      >
        <EvoSelectOption value="standard">Standard</EvoSelectOption>
        <EvoSelectOption value="express">Express</EvoSelectOption>
      </EvoSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Shipping method" });

    await user.selectOptions(select, "express");
    expect(onChange).toHaveBeenLastCalledWith("express");
    await expect.element(select).toHaveValue("standard");
  });

  it("updates a controlled value and floating label", async () => {
    function ControlledSelect() {
      const [value, setValue] = useState("");
      return (
        <EvoSelect
          floatingLabel="Shipping method"
          value={value}
          onChange={setValue}
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

  const shippingOptions = (
    <>
      <EvoSelectOption value="">Choose a shipping method</EvoSelectOption>
      <EvoSelectOptionGroup label="Domestic">
        <EvoSelectOption value="standard">Standard shipping</EvoSelectOption>
        <EvoSelectOption value="express">Express shipping</EvoSelectOption>
      </EvoSelectOptionGroup>
    </>
  );

  it("hides the empty option text while the floating label is inline", async () => {
    const screen = await render(
      <EvoSelect floatingLabel="Shipping method">{shippingOptions}</EvoSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Shipping method" });
    const label = screen.getByText("Shipping method", { exact: true });

    await expect.element(label).toHaveClass("floating-label__label--inline");
    await expect.element(label).toBeVisible();
    await expect.element(select).toHaveDisplayValue("");
  });

  it("shows the empty option text on focus and hides it again on blur", async () => {
    const screen = await render(
      <EvoSelect floatingLabel="Shipping method">{shippingOptions}</EvoSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Shipping method" });
    const label = screen.getByText("Shipping method", { exact: true });

    await user.tab();
    await expect.element(select).toHaveFocus();
    await expect.element(label).toHaveClass("floating-label__label--focus");
    await expect
      .element(label)
      .not.toHaveClass("floating-label__label--inline");
    await expect.element(select).toHaveDisplayValue("Choose a shipping method");

    await user.tab();
    await expect.element(select).not.toHaveFocus();
    await expect.element(label).toHaveClass("floating-label__label--inline");
    await expect.element(select).toHaveDisplayValue("");
  });

  it("keeps a chosen option visible and hides the empty option again once it is re-chosen", async () => {
    const screen = await render(
      <EvoSelect floatingLabel="Shipping method">{shippingOptions}</EvoSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Shipping method" });
    const label = screen.getByText("Shipping method", { exact: true });

    await user.selectOptions(select, "express");
    await user.tab();
    await user.tab();
    await expect.element(select).not.toHaveFocus();
    await expect
      .element(label)
      .not.toHaveClass("floating-label__label--inline");
    await expect.element(select).toHaveDisplayValue("Express shipping");

    await user.tab();
    await user.selectOptions(select, "");
    await expect.element(select).toHaveDisplayValue("Choose a shipping method");
    await user.tab();
    await expect.element(select).not.toHaveFocus();
    await expect.element(label).toHaveClass("floating-label__label--inline");
    await expect.element(select).toHaveDisplayValue("");
  });

  it("keeps a default selection and the empty option text when the label is already floating", async () => {
    const screen = await render(
      <EvoSelect floatingLabel="Shipping method" defaultValue="express">
        {shippingOptions}
      </EvoSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Shipping method" });
    const label = screen.getByText("Shipping method", { exact: true });

    await expect
      .element(label)
      .not.toHaveClass("floating-label__label--inline");
    await expect.element(select).toHaveDisplayValue("Express shipping");
    await expect
      .element(screen.getByRole("option", { name: "Choose a shipping method" }))
      .toBeInTheDocument();
  });

  it("leaves the empty option text alone without a floating label", async () => {
    const screen = await render(
      <EvoSelect aria-label="Shipping method">{shippingOptions}</EvoSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Shipping method" });

    await expect.element(select).toHaveDisplayValue("Choose a shipping method");
    await user.tab();
    await expect.element(select).toHaveFocus();
    await expect.element(select).toHaveDisplayValue("Choose a shipping method");
    await user.tab();
    await expect.element(select).not.toHaveFocus();
    await expect.element(select).toHaveDisplayValue("Choose a shipping method");
  });

  it("hides a grouped empty option while the label is inline and keeps grouped option text", async () => {
    const screen = await render(
      <EvoSelect floatingLabel="Shipping method">
        <EvoSelectOptionGroup label="No selection">
          <EvoSelectOption value="">Choose a shipping method</EvoSelectOption>
        </EvoSelectOptionGroup>
        <EvoSelectOptionGroup label="Domestic">
          <EvoSelectOption value="standard">Standard shipping</EvoSelectOption>
        </EvoSelectOptionGroup>
      </EvoSelect>,
    );
    const select = screen.getByRole("combobox", { name: "Shipping method" });

    await expect.element(select).toHaveDisplayValue("");
    await expect
      .element(screen.getByRole("option", { name: "Standard shipping" }))
      .toBeInTheDocument();

    await user.tab();
    await expect.element(select).toHaveDisplayValue("Choose a shipping method");
  });

  describe("without a value or defaultValue", () => {
    const methodOptions = (
      <>
        <EvoSelectOption value="standard">Standard shipping</EvoSelectOption>
        <EvoSelectOption value="express">Express shipping</EvoSelectOption>
      </>
    );

    it("floats the label for the option the browser selects on mount", async () => {
      const onChange = vi.fn();
      const screen = await render(
        <EvoSelect floatingLabel="Shipping method" onChange={onChange}>
          {methodOptions}
        </EvoSelect>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const label = screen.getByText("Shipping method", { exact: true });

      await expect.element(select).toHaveValue("standard");
      await expect.element(select).toHaveDisplayValue("Standard shipping");
      await expect
        .element(label)
        .not.toHaveClass("floating-label__label--inline");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("keeps the label floating after focus and blur", async () => {
      const screen = await render(
        <EvoSelect floatingLabel="Shipping method">{methodOptions}</EvoSelect>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const label = screen.getByText("Shipping method", { exact: true });

      await user.tab();
      await expect.element(select).toHaveFocus();
      await expect.element(label).toHaveClass("floating-label__label--focus");
      await user.tab();
      await expect.element(select).not.toHaveFocus();
      await expect.element(label).toHaveClass("floating-label__label--focus");
      await expect
        .element(label)
        .not.toHaveClass("floating-label__label--inline");
      await expect.element(select).toHaveDisplayValue("Standard shipping");
    });

    it("floats the label for the first enabled option when a disabled placeholder comes first", async () => {
      const screen = await render(
        <EvoSelect floatingLabel="Shipping method">
          <EvoSelectOption value="" disabled>
            Choose a shipping method
          </EvoSelectOption>
          {methodOptions}
        </EvoSelect>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const label = screen.getByText("Shipping method", { exact: true });

      await expect.element(select).toHaveValue("standard");
      await expect.element(select).toHaveDisplayValue("Standard shipping");
      await expect
        .element(label)
        .not.toHaveClass("floating-label__label--inline");
    });

    it("floats the label for options added after mount", async () => {
      const screen = await render(
        <EvoSelect floatingLabel="Shipping method" />,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const label = screen.getByText("Shipping method", { exact: true });

      await expect.element(label).toHaveClass("floating-label__label--inline");
      await screen.rerender(
        <EvoSelect floatingLabel="Shipping method">{methodOptions}</EvoSelect>,
      );

      await expect.element(select).toHaveValue("standard");
      await expect
        .element(label)
        .not.toHaveClass("floating-label__label--inline");
    });

    it("follows the native selection when options are replaced", async () => {
      const screen = await render(
        <EvoSelect floatingLabel="Shipping method">{methodOptions}</EvoSelect>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const label = screen.getByText("Shipping method", { exact: true });

      await expect
        .element(label)
        .not.toHaveClass("floating-label__label--inline");
      await screen.rerender(
        <EvoSelect floatingLabel="Shipping method">
          <EvoSelectOption value="">Choose a shipping method</EvoSelectOption>
          <EvoSelectOption value="pickup">Pickup</EvoSelectOption>
        </EvoSelect>,
      );

      await expect.element(select).toHaveValue("");
      await expect.element(label).toHaveClass("floating-label__label--inline");
    });

    it("pairs every forwarded ref attach with a cleanup when options change", async () => {
      const attached: (HTMLSelectElement | null)[] = [];
      const cleanup = vi.fn();
      const forwardedRef = (node: HTMLSelectElement | null) => {
        attached.push(node);
        return cleanup;
      };
      const screen = await render(
        <EvoSelect aria-label="Shipping method" ref={forwardedRef} />,
      );
      const select = screen.getByRole("combobox").element();

      await screen.rerender(
        <EvoSelect aria-label="Shipping method" ref={forwardedRef}>
          {methodOptions}
        </EvoSelect>,
      );

      expect(attached).toEqual([select, select]);
      expect(cleanup).toHaveBeenCalledTimes(1);
      await screen.unmount();
      expect(attached).toEqual([select, select]);
      expect(cleanup).toHaveBeenCalledTimes(2);
    });
  });

  describe("empty option label attribute", () => {
    const labelledOptions = (
      <>
        <EvoSelectOption value="" label="Choose shipping">
          Choose a shipping method
        </EvoSelectOption>
        <EvoSelectOption value="standard">Standard shipping</EvoSelectOption>
        <EvoSelectOption value="express">Express shipping</EvoSelectOption>
      </>
    );

    // toHaveDisplayValue reads option text and ignores the label attribute, so
    // these tests assert option.label, which is what the browser renders.
    const emptyOption = (select: Element) =>
      select.querySelector<HTMLOptionElement>('option[value=""]')!;

    it("omits the label while the floating label is inline and restores it on focus", async () => {
      const screen = await render(
        <EvoSelect floatingLabel="Shipping method">
          {labelledOptions}
        </EvoSelect>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const placeholder = emptyOption(select.element());

      expect(placeholder.hasAttribute("label")).toBe(false);
      expect(placeholder.label).toBe("");

      await user.tab();
      await expect.element(select).toHaveFocus();
      await expect.poll(() => placeholder.label).toBe("Choose shipping");
      expect(placeholder.getAttribute("label")).toBe("Choose shipping");

      await user.tab();
      await expect.element(select).not.toHaveFocus();
      await expect.poll(() => placeholder.label).toBe("");
      expect(placeholder.hasAttribute("label")).toBe(false);
    });

    it("keeps the label when the floating label is already floating", async () => {
      const screen = await render(
        <EvoSelect floatingLabel="Shipping method" defaultValue="express">
          {labelledOptions}
        </EvoSelect>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const placeholder = emptyOption(select.element());

      expect(placeholder.getAttribute("label")).toBe("Choose shipping");
      expect(placeholder.label).toBe("Choose shipping");
    });

    it("leaves the label alone without a floating label", async () => {
      const screen = await render(
        <EvoSelect aria-label="Shipping method">{labelledOptions}</EvoSelect>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const placeholder = emptyOption(select.element());

      expect(placeholder.label).toBe("Choose shipping");
      await user.tab();
      await expect.element(select).toHaveFocus();
      expect(placeholder.label).toBe("Choose shipping");
      await user.tab();
      await expect.element(select).not.toHaveFocus();
      expect(placeholder.label).toBe("Choose shipping");
      expect(placeholder.getAttribute("label")).toBe("Choose shipping");
    });
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
    const onChange = vi.fn();
    const screen = await render(
      <EvoSelect aria-label="Shipping methods" multiple onChange={onChange}>
        <EvoSelectOption value="standard">Standard</EvoSelectOption>
        <EvoSelectOption value="express">Express</EvoSelectOption>
      </EvoSelect>,
    );
    const select = screen.getByRole("listbox", { name: "Shipping methods" });
    await user.selectOptions(select, ["standard", "express"]);
    expect(onChange).toHaveBeenLastCalledWith(["standard", "express"]);
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

  describe("form reset", () => {
    const settleReset = () =>
      act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
      });

    const selectedValues = (select: HTMLSelectElement) =>
      Array.from(select.selectedOptions, (option) => option.value);

    const methodOptions = (
      <>
        <EvoSelectOption value="standard">Standard</EvoSelectOption>
        <EvoSelectOption value="express">Express</EvoSelectOption>
        <EvoSelectOption value="global">Global</EvoSelectOption>
      </>
    );

    it("restores an empty selection, the inline label and the blank empty option", async () => {
      const onChange = vi.fn();
      const screen = await render(
        <form>
          <EvoSelect floatingLabel="Shipping method" onChange={onChange}>
            {shippingOptions}
          </EvoSelect>
          <button type="reset">Reset</button>
        </form>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const label = screen.getByText("Shipping method", { exact: true });

      await user.selectOptions(select, "express");
      await expect
        .element(label)
        .not.toHaveClass("floating-label__label--inline");
      onChange.mockClear();
      await user.click(screen.getByRole("button", { name: "Reset" }));
      await settleReset();

      await expect.element(select).toHaveValue("");
      await expect.element(select).toHaveDisplayValue("");
      await expect.element(label).toHaveClass("floating-label__label--inline");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("restores the default selection and keeps the label floating", async () => {
      const onChange = vi.fn();
      const screen = await render(
        <form>
          <EvoSelect
            floatingLabel="Shipping method"
            defaultValue="express"
            onChange={onChange}
          >
            {shippingOptions}
          </EvoSelect>
          <button type="reset">Reset</button>
        </form>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const label = screen.getByText("Shipping method", { exact: true });

      await user.selectOptions(select, "");
      await expect.element(label).toHaveClass("floating-label__label--inline");
      onChange.mockClear();
      await user.click(screen.getByRole("button", { name: "Reset" }));
      await settleReset();

      await expect.element(select).toHaveValue("express");
      await expect.element(select).toHaveDisplayValue("Express shipping");
      await expect
        .element(label)
        .not.toHaveClass("floating-label__label--inline");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("keeps the label floating for the option the browser re-selects when no default is set", async () => {
      const onChange = vi.fn();
      const screen = await render(
        <form>
          <EvoSelect floatingLabel="Shipping method" onChange={onChange}>
            <EvoSelectOption value="standard">Standard</EvoSelectOption>
            <EvoSelectOption value="express">Express</EvoSelectOption>
          </EvoSelect>
          <button type="reset">Reset</button>
        </form>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const label = screen.getByText("Shipping method", { exact: true });

      await user.selectOptions(select, "express");
      await expect.element(select).toHaveValue("express");
      onChange.mockClear();
      await user.click(screen.getByRole("button", { name: "Reset" }));
      await settleReset();

      await expect.element(select).toHaveValue("standard");
      await expect.element(select).toHaveDisplayValue("Standard");
      await expect
        .element(label)
        .not.toHaveClass("floating-label__label--inline");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("does not apply a canceled reset", async () => {
      const onChange = vi.fn();
      const screen = await render(
        <form onReset={(event) => event.preventDefault()}>
          <EvoSelect floatingLabel="Shipping method" onChange={onChange}>
            {shippingOptions}
          </EvoSelect>
          <button type="reset">Reset</button>
        </form>,
      );
      const select = screen.getByRole("combobox", { name: "Shipping method" });
      const label = screen.getByText("Shipping method", { exact: true });

      await user.selectOptions(select, "express");
      onChange.mockClear();
      await user.click(screen.getByRole("button", { name: "Reset" }));
      await settleReset();

      await expect.element(select).toHaveValue("express");
      await expect
        .element(label)
        .not.toHaveClass("floating-label__label--inline");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("restores the default selections of a multiple select", async () => {
      const onChange = vi.fn();
      const screen = await render(
        <form>
          <EvoSelect
            aria-label="Shipping methods"
            multiple
            defaultValue={["standard"]}
            onChange={onChange}
          >
            {methodOptions}
          </EvoSelect>
          <button type="reset">Reset</button>
        </form>,
      );
      const select = screen
        .getByRole("listbox", { name: "Shipping methods" })
        .element() as HTMLSelectElement;

      await user.selectOptions(select, ["express", "global"]);
      expect(selectedValues(select)).toEqual(["express", "global"]);
      onChange.mockClear();
      await user.click(screen.getByRole("button", { name: "Reset" }));
      await settleReset();

      await expect.poll(() => selectedValues(select)).toEqual(["standard"]);
      expect(onChange).not.toHaveBeenCalled();
    });

    it.each([
      { defaultValue: undefined, inline: true },
      { defaultValue: ["standard"], inline: false },
    ])(
      "derives the label of a multiple select from its restored selections (default $defaultValue)",
      async ({ defaultValue, inline }) => {
        const onChange = vi.fn();
        const screen = await render(
          <form>
            <EvoSelect
              floatingLabel="Shipping methods"
              multiple
              defaultValue={defaultValue}
              onChange={onChange}
            >
              {methodOptions}
            </EvoSelect>
            <button type="reset">Reset</button>
          </form>,
        );
        const select = screen
          .getByRole("listbox", { name: "Shipping methods" })
          .element() as HTMLSelectElement;
        const label = screen.getByText("Shipping methods", { exact: true });
        const labelIsInline = () =>
          label.element().classList.contains("floating-label__label--inline");

        await expect.poll(labelIsInline).toBe(inline);
        await user.selectOptions(select, ["express", "global"]);
        await expect.poll(labelIsInline).toBe(false);
        onChange.mockClear();
        await user.click(screen.getByRole("button", { name: "Reset" }));
        await settleReset();

        await expect
          .poll(() => selectedValues(select))
          .toEqual(defaultValue ?? []);
        await expect.poll(labelIsInline).toBe(inline);
        expect(onChange).not.toHaveBeenCalled();
      },
    );
  });
});
