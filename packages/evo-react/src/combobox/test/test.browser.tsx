import { createRef, useRef, useState } from "react";
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
    vi.restoreAllMocks();
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

    it("scrolls each newly active option without scrolling on reset", async () => {
      const scrollIntoView = vi.spyOn(HTMLElement.prototype, "scrollIntoView");
      const screen = await render(<ComboboxFixture />);
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowDown}");

      expect(scrollIntoView).toHaveBeenCalledTimes(2);
      expect(scrollIntoView).toHaveBeenLastCalledWith({ block: "nearest" });

      await user.keyboard("{Escape}");
      expect(scrollIntoView).toHaveBeenCalledTimes(2);
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

    it("does not let a controlled update leave a stale keyboard preview", async () => {
      function ControlledCombobox() {
        const [value, setValue] = useState("");
        return (
          <ComboboxFixture
            value={value}
            onValueChange={setValue}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                setValue("Externally changed");
              }
            }}
          />
        );
      }

      const screen = await render(<ControlledCombobox />);
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.keyboard("{ArrowDown}");

      await expect.element(input).toHaveValue("Externally changed");
    });

    it("does not let an active option removal leave a stale preview", async () => {
      function FilteredCombobox() {
        const [showFirst, setShowFirst] = useState(true);
        return (
          <EvoCombobox
            floatingLabel="Campaign"
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                setShowFirst(false);
              }
            }}
          >
            {showFirst && <EvoComboboxOption text="August Campaign" />}
            <EvoComboboxOption text="Basic Offer" />
          </EvoCombobox>
        );
      }

      const screen = await render(<FilteredCombobox />);
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.keyboard("{ArrowDown}");

      await expect.element(input).toHaveValue("");
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

    it("clears a preview when list selection changes to manual", async () => {
      function ChangingSelectionCombobox() {
        const [selection, setSelection] =
          useState<EvoComboboxProps["listSelection"]>("automatic");
        const arrowPresses = useRef(0);

        return (
          <EvoCombobox
            floatingLabel="Campaign"
            listSelection={selection}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown" && ++arrowPresses.current === 2) {
                setSelection("manual");
              }
            }}
          >
            <EvoComboboxOption text="August Campaign" />
            <EvoComboboxOption text="Basic Offer" />
          </EvoCombobox>
        );
      }

      const screen = await render(<ChangingSelectionCombobox />);
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.keyboard("{ArrowDown}");
      await expect.element(input).toHaveValue("August Campaign");
      await user.keyboard("{ArrowDown}");

      await expect.element(input).toHaveValue("");
    });

    it("commits preview before native onBlur and allows restoration", async () => {
      const onValueChange = vi.fn();

      function ControlledCombobox() {
        const [value, setValue] = useState("Initial value");
        return (
          <ComboboxFixture
            value={value}
            onValueChange={(nextValue) => {
              onValueChange(nextValue);
              setValue(nextValue);
            }}
            onBlur={() => setValue("Restored value")}
          />
        );
      }

      const screen = await render(<ControlledCombobox />);
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.keyboard("{ArrowDown}");
      await user.tab();

      await expect.element(input).toHaveValue("Restored value");
      expect(onValueChange).toHaveBeenCalledTimes(1);
      expect(onValueChange).toHaveBeenCalledWith("August Campaign");
      await expect.element(input).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("disabled state", () => {
    it("keeps a default-open combobox closed when disabled", async () => {
      const screen = await render(<ComboboxFixture disabled defaultOpen />);
      const input = screen.getByRole("combobox");
      const wrapper = screen.container.querySelector(".combobox");

      await expect.element(input).toBeDisabled();
      await expect.element(input).toHaveAttribute("aria-expanded", "false");
      expect(wrapper).not.toHaveClass("combobox--expanded");
    });

    it("does not expose a controlled open state while disabled", async () => {
      const screen = await render(
        <ComboboxFixture disabled open onOpenChange={vi.fn()} />,
      );
      const input = screen.getByRole("combobox");
      const wrapper = screen.container.querySelector(".combobox");

      await expect.element(input).toBeDisabled();
      await expect.element(input).toHaveAttribute("aria-expanded", "false");
      expect(wrapper).not.toHaveClass("combobox--expanded");
    });

    it("does not open from focus, click, or keyboard input while disabled", async () => {
      const onOpenChange = vi.fn();
      const onFocus = vi.fn();
      const screen = await render(
        <ComboboxFixture
          disabled
          onFocus={onFocus}
          onOpenChange={onOpenChange}
        />,
      );
      const input = screen.getByRole("combobox");

      input.element().dispatchEvent(new FocusEvent("focus", { bubbles: true }));
      input.element().dispatchEvent(new MouseEvent("click", { bubbles: true }));
      input
        .element()
        .dispatchEvent(
          new KeyboardEvent("keydown", { bubbles: true, key: "ArrowDown" }),
        );

      await expect.element(input).toHaveAttribute("aria-expanded", "false");
      expect(onOpenChange).not.toHaveBeenCalled();
      expect(onFocus).not.toHaveBeenCalled();
    });

    it("clears active state and stays closed after an uncontrolled combobox is re-enabled", async () => {
      function ToggleableCombobox() {
        const [disabled, setDisabled] = useState(false);
        return (
          <>
            <button
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => setDisabled((current) => !current)}
            >
              Toggle disabled
            </button>
            <ComboboxFixture defaultOpen={false} disabled={disabled} />
          </>
        );
      }

      const screen = await render(<ToggleableCombobox />);
      const input = screen.getByRole("combobox");
      const toggle = screen.getByRole("button", { name: "Toggle disabled" });

      await user.click(input);
      await user.keyboard("{ArrowDown}");
      await expect.element(input).toHaveAttribute("aria-activedescendant");

      await user.click(toggle);
      await expect.element(input).toBeDisabled();
      await expect.element(input).toHaveAttribute("aria-expanded", "false");
      await expect.element(input).not.toHaveAttribute("aria-activedescendant");

      await user.click(toggle);
      await expect.element(input).not.toBeDisabled();
      await expect.element(input).toHaveAttribute("aria-expanded", "false");
      await expect.element(input).not.toHaveAttribute("aria-activedescendant");
    });

    it("follows a controlled open state after being re-enabled", async () => {
      function ToggleableCombobox() {
        const [disabled, setDisabled] = useState(true);
        return (
          <>
            <button
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => setDisabled((current) => !current)}
            >
              Toggle disabled
            </button>
            <ComboboxFixture disabled={disabled} open />
          </>
        );
      }

      const screen = await render(<ToggleableCombobox />);
      const input = screen.getByRole("combobox");
      const toggle = screen.getByRole("button", { name: "Toggle disabled" });

      await expect.element(input).toHaveAttribute("aria-expanded", "false");
      await user.click(toggle);
      await expect.element(input).toHaveAttribute("aria-expanded", "true");
    });

    it("does not invoke disabled option handlers or select an option", async () => {
      const onClick = vi.fn();
      const onKeyDown = vi.fn();
      const onMouseDown = vi.fn();
      const onValueChange = vi.fn();
      const screen = await render(
        <EvoCombobox
          disabled
          open
          onValueChange={onValueChange}
          floatingLabel="Campaign"
        >
          <EvoComboboxOption
            text="August Campaign"
            onClick={onClick}
            onKeyDown={onKeyDown}
            onMouseDown={onMouseDown}
          />
        </EvoCombobox>,
      );
      const option =
        screen.container.querySelector<HTMLElement>('[role="option"]');

      option?.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
      option?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      option?.dispatchEvent(
        new KeyboardEvent("keydown", { bubbles: true, key: "Enter" }),
      );

      expect(onClick).not.toHaveBeenCalled();
      expect(onKeyDown).not.toHaveBeenCalled();
      expect(onMouseDown).not.toHaveBeenCalled();
      expect(onValueChange).not.toHaveBeenCalled();
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

    it("does not open or focus the input from a closed postfix action", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <ComboboxFixture
          postfix={{
            icon: <EvoIconClose12 />,
            buttonProps: { a11yText: "Action", onClick },
          }}
        />,
      );
      const input = screen.getByRole("combobox");

      await user.click(screen.getByRole("button", { name: "Action" }));

      expect(onClick).toHaveBeenCalledTimes(1);
      await expect.element(input).not.toHaveFocus();
      await expect.element(input).toHaveAttribute("aria-expanded", "false");
    });

    it("keeps keyboard focus on the postfix after activation", async () => {
      const screen = await render(
        <ComboboxFixture
          postfix={{
            icon: <EvoIconClose12 />,
            buttonProps: { a11yText: "Action" },
          }}
        />,
      );
      const button = screen.getByRole("button", { name: "Action" });
      const input = screen.getByRole("combobox");

      button.element().focus();
      await user.keyboard("{Enter}");

      await expect.element(button).toHaveFocus();
      await expect.element(input).toHaveAttribute("aria-expanded", "false");
    });

    it("clears keyboard preview before a controlled clear callback", async () => {
      function ControlledCombobox() {
        const [value, setValue] = useState("");
        return (
          <ComboboxFixture
            value={value}
            onValueChange={setValue}
            postfix={{
              icon: <EvoIconClose12 />,
              buttonProps: {
                a11yText: "Clear",
                onClick: () => setValue(""),
              },
            }}
          />
        );
      }

      const screen = await render(<ControlledCombobox />);
      const input = screen.getByRole("combobox");

      await user.click(input);
      await user.keyboard("{ArrowDown}");
      await expect.element(input).toHaveValue("August Campaign");

      await user.click(screen.getByRole("button", { name: "Clear" }));

      await expect.element(input).toHaveValue("");
      await expect.element(input).toHaveFocus();
    });

    it("does not run a disabled postfix callback", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <ComboboxFixture
          disabled
          postfix={{
            icon: <EvoIconClose12 />,
            buttonProps: { a11yText: "Clear", onClick },
          }}
        />,
      );

      const button = screen.getByRole("button", { name: "Clear" });
      await expect.element(button).toBeDisabled();
      button
        .element()
        .dispatchEvent(new MouseEvent("click", { bubbles: true }));

      expect(onClick).not.toHaveBeenCalled();
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

  describe("listbox layout", () => {
    it("makes the open listbox at least as wide as the combobox", async () => {
      const screen = await render(
        <div style={{ width: 320 }}>
          <ComboboxFixture fluid />
        </div>,
      );
      const input = screen.getByRole("combobox");

      await user.click(input);

      const listbox = screen.getByRole("listbox").element();
      const wrapper = screen.container.querySelector(".combobox");
      expect(listbox.getBoundingClientRect().width).toBeGreaterThanOrEqual(
        (wrapper?.getBoundingClientRect().width ?? 0) - 1,
      );
    });
  });
});
