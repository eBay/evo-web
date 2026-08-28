import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { useState } from "react";
import { EvoDateInput, EvoDateInputCalendarPopover } from "../index";
import type {
  DateInputValue,
  EvoDateInputCalendarPopoverProps,
  EvoDateInputProps,
} from "../types";

const a11yOpenPopoverText = "open calendar";
const a11yNavigateText = (month: string, direction: "next" | "prev") =>
  `${direction === "prev" ? "Previous" : "Next"} ${month}`;

function mockMinWidth(matches: boolean) {
  let current = matches;
  const listeners = new Set<() => void>();
  const media = {
    get matches() {
      return current;
    },
    media: "(min-width: 600px)",
    onchange: null,
    addEventListener(_type: string, listener: () => void) {
      listeners.add(listener);
    },
    removeEventListener(_type: string, listener: () => void) {
      listeners.delete(listener);
    },
    addListener() {},
    removeListener() {},
    dispatchEvent() {
      return true;
    },
    setMatches(next: boolean) {
      current = next;
      listeners.forEach((listener) => listener());
    },
  };

  vi.spyOn(window, "matchMedia").mockImplementation(
    () => media as unknown as MediaQueryList,
  );
  return media;
}

function getPopoverStartError(root: Element, popover: Element) {
  const marginLeft = Number.parseFloat(
    window.getComputedStyle(popover).marginLeft,
  );
  return Math.abs(
    popover.getBoundingClientRect().left -
      root.getBoundingClientRect().left -
      marginLeft,
  );
}

type TestDateInputProps = Omit<
  EvoDateInputProps,
  "a11yOpenPopoverText" | "children"
> & {
  calendarPopover?: Partial<EvoDateInputCalendarPopoverProps>;
};

function TestDateInput({ calendarPopover, ...props }: TestDateInputProps) {
  return (
    <EvoDateInput {...props} a11yOpenPopoverText={a11yOpenPopoverText}>
      <EvoDateInputCalendarPopover
        today="2024-01-05"
        visibleMonthCount={1}
        a11yNavigateText={a11yNavigateText}
        {...calendarPopover}
      />
    </EvoDateInput>
  );
}

describe("evo-date-input", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
    vi.restoreAllMocks();
  });

  it("renders a div root and a child calendar popover", async () => {
    const screen = await render(<TestDateInput floatingLabel="Date" />);
    const root = screen.container.querySelector(".date-textbox");

    expect(root?.tagName).toBe("DIV");
    expect(root?.children).toHaveLength(2);
    expect(root?.lastElementChild).toHaveClass("date-textbox__popover");
  });

  it("opens and closes the calendar from the postfix button", async () => {
    const screen = await render(<TestDateInput floatingLabel="Date" />);
    const trigger = screen.getByRole("button", { name: a11yOpenPopoverText });
    const popover = screen.container.querySelector(".date-textbox__popover");

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    expect(popover).toHaveAttribute("hidden");

    await user.click(trigger);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
    expect(popover).not.toHaveAttribute("hidden");

    await user.click(trigger);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    expect(popover).toHaveAttribute("hidden");
  });

  it("anchors the popover to the complete date input", async () => {
    const screen = await render(
      <TestDateInput
        floatingLabel="Date"
        calendarPopover={{ visibleMonthCount: 1 }}
      />,
    );
    const root = screen.container.querySelector<HTMLElement>(".date-textbox");
    const popover = screen.container.querySelector<HTMLElement>(
      ".date-textbox__popover",
    );

    if (!root || !popover) {
      throw new Error("Date input root and popover must be rendered");
    }

    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));
    await expect
      .poll(() => getPopoverStartError(root, popover))
      .toBeLessThan(0.5);
  });

  it("positions the popover with the strategy passed to the popover child", async () => {
    const screen = await render(
      <TestDateInput
        floatingLabel="Date"
        calendarPopover={{ strategy: "fixed" }}
      />,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));

    const popover = screen.container.querySelector(".date-textbox__popover");
    expect(popover).toHaveClass("date-textbox__popover--fixed");
    expect(popover).toHaveStyle({ position: "fixed" });
  });

  it("closes the calendar when clicking outside", async () => {
    const screen = await render(
      <>
        <TestDateInput floatingLabel="Date" />
        <button type="button">Outside</button>
      </>,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));
    const popover = screen.container.querySelector(".date-textbox__popover");
    expect(popover).not.toHaveAttribute("hidden");

    await user.click(screen.getByRole("button", { name: "Outside" }));
    expect(popover).toHaveAttribute("hidden");
  });

  it("does not close the calendar when selecting a date and collapseOnSelect is false", async () => {
    const screen = await render(
      <TestDateInput collapseOnSelect={false} floatingLabel="Date" />,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));
    await user.click(screen.getByRole("button", { name: /^1$/ }));

    expect(
      screen.container.querySelector(".date-textbox__popover"),
    ).not.toHaveAttribute("hidden");
  });

  it("closes the calendar and returns focus to the trigger on Escape", async () => {
    const screen = await render(<TestDateInput floatingLabel="Date" />);
    const trigger = screen.getByRole("button", { name: a11yOpenPopoverText });
    const popover = screen.container.querySelector(".date-textbox__popover");

    await user.click(trigger);
    await user.keyboard("{Escape}");

    expect(popover).toHaveAttribute("hidden");
    await expect.element(trigger).toHaveFocus();
  });

  it("closes the calendar and returns focus when collapseOnSelect is true", async () => {
    const screen = await render(
      <TestDateInput collapseOnSelect floatingLabel="Date" />,
    );
    const trigger = screen.getByRole("button", { name: a11yOpenPopoverText });
    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: /^1$/ }));

    expect(
      screen.container.querySelector(".date-textbox__popover"),
    ).toHaveAttribute("hidden");
    await expect.element(trigger).toHaveFocus();
  });

  it("emits the selected ISO date", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <TestDateInput onChange={onChange} floatingLabel="Date" />,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));
    await user.click(screen.getByRole("button", { name: /^1$/ }));

    expect(onChange).toHaveBeenCalledWith("2024-01-01");
    await expect
      .element(screen.getByRole("textbox", { name: "Date" }))
      .toHaveValue("01/01/2024");
  });

  it("formats a provided value and updates when it changes", async () => {
    const screen = await render(
      <TestDateInput value="2024-01-01" floatingLabel="Date" />,
    );
    const input = screen.getByRole("textbox", { name: "Date" });
    await expect.element(input).toHaveValue("01/01/2024");

    screen.rerender(<TestDateInput value="2024-01-12" floatingLabel="Date" />);
    await expect.element(input).toHaveValue("01/12/2024");
  });

  it("allows clearing a selected value", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <TestDateInput
        defaultValue="2024-01-01"
        onChange={onChange}
        floatingLabel="Date"
      />,
    );
    const input = screen.getByRole("textbox", { name: "Date" });
    await expect.element(input).toHaveValue("01/01/2024");

    await user.clear(input);
    await user.tab();

    await expect.element(input).toHaveValue("");
    expect(onChange).toHaveBeenCalledWith("");
  });

  it("keeps invalid typed text and emits onInvalidDate", async () => {
    const onChange = vi.fn();
    const onInvalidDate = vi.fn();
    const screen = await render(
      <TestDateInput
        onChange={onChange}
        onInvalidDate={onInvalidDate}
        floatingLabel="Date"
      />,
    );
    const input = screen.getByRole("textbox", { name: "Date" });
    await user.type(input, "not-a-date");
    await user.tab();

    await expect.element(input).toHaveValue("not-a-date");
    await expect.element(input).toHaveAttribute("aria-invalid", "true");
    expect(onChange).not.toHaveBeenCalled();
    expect(onInvalidDate).toHaveBeenCalledWith({
      value: "not-a-date",
      index: 0,
    });
  });

  it("does not fail when the provided value is invalid", async () => {
    const screen = await render(
      <TestDateInput
        value={"invalid" as DateInputValue}
        floatingLabel="Date"
      />,
    );

    await expect
      .element(screen.getByRole("textbox", { name: "Date" }))
      .toHaveValue("invalid");
  });

  it("commits a typed locale date on blur", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <TestDateInput onChange={onChange} floatingLabel="Date" />,
    );
    const input = screen.getByRole("textbox", { name: "Date" });
    await user.type(input, "01022024");
    await user.tab();

    expect(onChange).toHaveBeenCalledWith("2024-01-02");
    await expect.element(input).toHaveValue("01/02/2024");
  });

  it("forwards input props such as a floating label", async () => {
    const screen = await render(
      <TestDateInput floatingLabel="Purchase date" />,
    );

    await expect.element(screen.getByText("Purchase date")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));
    expect(
      screen.container.querySelector(".date-textbox__popover"),
    ).not.toHaveAttribute("hidden");
  });

  it("updates visibleMonthCount when the viewport media query changes", async () => {
    const media = mockMinWidth(true);
    const screen = await render(
      <TestDateInput
        floatingLabel="Date"
        calendarPopover={{ visibleMonthCount: undefined }}
      />,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));
    expect(screen.container.querySelectorAll(".calendar__month")).toHaveLength(
      2,
    );

    media.setMatches(false);
    await expect
      .poll(() => screen.container.querySelectorAll(".calendar__month").length)
      .toBe(1);
  });

  it("keeps an explicit visibleMonthCount override on desktop", async () => {
    mockMinWidth(true);
    const screen = await render(
      <TestDateInput
        floatingLabel="Date"
        calendarPopover={{ visibleMonthCount: 1 }}
      />,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));

    expect(screen.container.querySelectorAll(".calendar__month")).toHaveLength(
      1,
    );
  });

  it("keeps a controlled empty value after select then clear", async () => {
    function Controlled() {
      const [value, setValue] = useState<DateInputValue>("");
      return (
        <TestDateInput value={value} onChange={setValue} floatingLabel="Date" />
      );
    }

    const screen = await render(<Controlled />);
    const input = screen.getByRole("textbox", { name: "Date" });
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));
    await user.click(screen.getByRole("button", { name: /^1$/ }));
    await expect.element(input).toHaveValue("01/01/2024");

    await user.clear(input);
    await user.tab();
    await expect.element(input).toHaveValue("");
  });

  it("disables the input and calendar button when readOnly", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <TestDateInput readOnly onChange={onChange} floatingLabel="Date" />,
    );
    const input = screen.getByRole("textbox", { name: "Date" });
    const trigger = screen.getByRole("button", { name: a11yOpenPopoverText });

    await expect.element(input).toHaveAttribute("readonly");
    await expect.element(trigger).toBeDisabled();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("disables the input and calendar button when disabled", async () => {
    const screen = await render(
      <TestDateInput disabled floatingLabel="Date" />,
    );

    await expect
      .element(screen.getByRole("textbox", { name: "Date" }))
      .toBeDisabled();
    await expect
      .element(screen.getByRole("button", { name: a11yOpenPopoverText }))
      .toBeDisabled();
  });

  it("opens the calendar on the selected month", async () => {
    const screen = await render(
      <TestDateInput value="2023-06-15" floatingLabel="Date" />,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));

    await expect
      .element(screen.getByRole("heading", { name: "June 2023" }))
      .toBeInTheDocument();
  });

  it("keeps a controlled visible month when the popover provides one", async () => {
    const screen = await render(
      <TestDateInput
        value="2023-06-15"
        floatingLabel="Date"
        calendarPopover={{ visibleMonth: "2024-02" }}
      />,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));

    await expect
      .element(screen.getByRole("heading", { name: "February 2024" }))
      .toBeInTheDocument();
  });
});
