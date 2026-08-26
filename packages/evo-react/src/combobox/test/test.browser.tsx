import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconClose12 } from "../../icon/icons/close-12";
import { EvoCombobox } from "../combobox";
import { EvoComboboxOption } from "../combobox-option";
import type { EvoComboboxProps } from "../types";

function ComboboxFixture(props: EvoComboboxProps) {
  return (
    <EvoCombobox floatingLabel="Campaign" {...props}>
      <EvoComboboxOption text="August Campaign" />
      <EvoComboboxOption text="Basic Offer" />
    </EvoCombobox>
  );
}

describe("evo-combobox", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  describe("ARIA attributes", () => {
    it("links the combobox to its listbox", async () => {
      const screen = await render(<ComboboxFixture />);
      const input = screen.getByRole("combobox", { name: "Campaign" });

      await user.click(input);

      const listbox = screen.getByRole("listbox");
      await expect.element(input).toHaveAttribute("aria-expanded", "true");
      await expect
        .element(input)
        .toHaveAttribute("aria-controls", listbox.element().id);
      await expect
        .element(input)
        .toHaveAttribute("aria-owns", listbox.element().id);
    });

    it("sets the active descendant during keyboard navigation", async () => {
      const screen = await render(<ComboboxFixture />);
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.keyboard("{ArrowDown}");

      const option = screen.getByRole("option", { name: "August Campaign" });
      await expect
        .element(input)
        .toHaveAttribute("aria-activedescendant", option.element().id);
      await expect.element(option).toHaveAttribute("aria-selected", "true");
    });
  });

  describe("value changes", () => {
    it("passes the displayed value to onValueChange while typing", async () => {
      const onValueChange = vi.fn();
      const screen = await render(
        <ComboboxFixture onValueChange={onValueChange} />,
      );

      await user.type(screen.getByRole("combobox"), "Basic");

      expect(onValueChange).toHaveBeenLastCalledWith("Basic");
      await expect.element(screen.getByRole("combobox")).toHaveValue("Basic");
    });

    it("passes the native change event to onChange while typing", async () => {
      const onChange = vi.fn();
      const screen = await render(
        <ComboboxFixture
          onChange={(event) => onChange(event.currentTarget.value)}
        />,
      );

      await user.type(screen.getByRole("combobox"), "B");

      expect(onChange).toHaveBeenCalledWith("B");
    });

    it("passes selected option text only to onValueChange", async () => {
      const onChange = vi.fn();
      const onValueChange = vi.fn();
      const screen = await render(
        <ComboboxFixture onChange={onChange} onValueChange={onValueChange} />,
      );
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.click(screen.getByRole("option", { name: "August Campaign" }));

      expect(onValueChange).toHaveBeenCalledWith("August Campaign");
      expect(onChange).not.toHaveBeenCalled();
      await expect.element(input).toHaveValue("August Campaign");
      await expect.element(input).toHaveAttribute("aria-expanded", "false");
    });

    it("supports controlled values for typing and selection", async () => {
      function ControlledCombobox() {
        const [value, setValue] = useState("");
        return <ComboboxFixture value={value} onValueChange={setValue} />;
      }

      const screen = await render(<ControlledCombobox />);
      const input = screen.getByRole("combobox");

      await user.type(input, "B");
      await expect.element(input).toHaveValue("B");
      await user.click(screen.getByRole("option", { name: "Basic Offer" }));
      await expect.element(input).toHaveValue("Basic Offer");
    });
  });

  describe("filtering", () => {
    it("filters options by text when autocomplete is list", async () => {
      const screen = await render(<ComboboxFixture autocomplete="list" />);
      const input = screen.getByRole("combobox");

      await user.type(input, "Basic");

      await expect
        .element(screen.getByRole("option", { name: "August Campaign" }))
        .not.toBeInTheDocument();
      await expect
        .element(screen.getByRole("option", { name: "Basic Offer" }))
        .toBeInTheDocument();
    });

    it("keeps sticky options visible when they do not match", async () => {
      const screen = await render(
        <EvoCombobox floatingLabel="Campaign" autocomplete="list">
          <EvoComboboxOption text="Create campaign" sticky />
          <EvoComboboxOption text="Basic Offer" />
        </EvoCombobox>,
      );

      await user.type(screen.getByRole("combobox"), "missing");

      await expect
        .element(screen.getByRole("option", { name: "Create campaign" }))
        .toBeInTheDocument();
      await expect
        .element(screen.getByRole("option", { name: "Basic Offer" }))
        .not.toBeInTheDocument();
    });
  });

  describe("keyboard interactions", () => {
    it("previews and selects options in automatic mode", async () => {
      const onValueChange = vi.fn();
      const screen = await render(
        <ComboboxFixture onValueChange={onValueChange} />,
      );
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.keyboard("{ArrowDown}");

      await expect.element(input).toHaveValue("August Campaign");
      expect(onValueChange).not.toHaveBeenCalled();

      await user.keyboard("{Enter}");

      expect(onValueChange).toHaveBeenCalledWith("August Campaign");
    });

    it("does not preview option text in manual mode", async () => {
      const screen = await render(<ComboboxFixture listSelection="manual" />);
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.keyboard("{ArrowDown}");

      await expect.element(input).toHaveValue("");
      await expect.element(input).toHaveAttribute("aria-activedescendant");
    });

    it("restores the committed value on Escape", async () => {
      const screen = await render(
        <ComboboxFixture defaultValue="Initial value" />,
      );
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.keyboard("{ArrowDown}");
      await expect.element(input).toHaveValue("August Campaign");

      await user.keyboard("{Escape}");

      await expect.element(input).toHaveValue("Initial value");
      await expect.element(input).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("postfix action", () => {
    it("runs the button callback without closing the listbox", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <ComboboxFixture
          postfix={{
            icon: <EvoIconClose12 />,
            buttonProps: { a11yText: "Clear", onClick },
          }}
        />,
      );
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.click(screen.getByRole("button", { name: "Clear" }));

      expect(onClick).toHaveBeenCalledTimes(1);
      await expect.element(input).toHaveFocus();
      await expect.element(input).toHaveAttribute("aria-expanded", "true");
    });
  });

  describe("refs", () => {
    it("passes the ref to the input", async () => {
      const ref = createRef<HTMLInputElement>();

      await render(<ComboboxFixture ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
      expect(ref.current?.getAttribute("role")).toBe("combobox");
    });
  });
});
