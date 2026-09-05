import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { useState } from "react";
import {
  EvoDateRangeInput,
  EvoDateRangeInputCalendarPopover,
  EvoDateRangeInputGroup,
} from "../index";
import type {
  DateInputRange,
  EvoDateRangeInputCalendarPopoverProps,
  EvoDateRangeInputGroupProps,
} from "../types";

const a11yOpenPopoverText = "open calendar";
const a11yNavigateText = (month: string, direction: "next" | "prev") =>
  `${direction === "prev" ? "Previous" : "Next"} ${month}`;
const a11yRangeText = {
  start: "Start of range",
  in: "In range",
  end: "End of range",
};

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

type TestRangeInputProps = Omit<
  EvoDateRangeInputGroupProps,
  "a11yOpenPopoverText" | "children"
> & {
  startFloatingLabel?: string;
  endFloatingLabel?: string;
  calendarPopover?: Partial<EvoDateRangeInputCalendarPopoverProps>;
};

function TestRangeInput({
  startFloatingLabel = "Start",
  endFloatingLabel = "End",
  calendarPopover,
  ...props
}: TestRangeInputProps) {
  return (
    <EvoDateRangeInputGroup
      {...props}
      a11yOpenPopoverText={a11yOpenPopoverText}
    >
      <EvoDateRangeInput type="start" floatingLabel={startFloatingLabel} />
      <EvoDateRangeInput type="end" floatingLabel={endFloatingLabel} />
      <EvoDateRangeInputCalendarPopover
        today="2024-01-05"
        visibleMonthCount={1}
        a11yNavigateText={a11yNavigateText}
        a11yRangeText={a11yRangeText}
        {...calendarPopover}
      />
    </EvoDateRangeInputGroup>
  );
}

describe("evo-date-range-input", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
    vi.restoreAllMocks();
  });

  it("renders the fields and popover as direct group children", async () => {
    const screen = await render(<TestRangeInput />);
    const root = screen.container.querySelector(".date-textbox");

    expect(root?.tagName).toBe("SPAN");
    expect(root?.children).toHaveLength(3);
    expect(root?.children[0]).toHaveClass("floating-label");
    expect(root?.children[1]).toHaveClass("floating-label");
    expect(root?.children[2]).toHaveClass("date-textbox__popover");
  });

  it("renders the calendar trigger only on the end field", async () => {
    const screen = await render(<TestRangeInput />);

    expect(screen.container.querySelectorAll("input")).toHaveLength(2);
    expect(
      screen.container.querySelectorAll(
        `button[aria-label="${a11yOpenPopoverText}"]`,
      ),
    ).toHaveLength(1);
  });

  it("selects a range from the calendar", async () => {
    const onChange = vi.fn();
    const screen = await render(<TestRangeInput onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));
    await user.click(screen.getByRole("button", { name: /^1$/ }));
    expect(onChange).toHaveBeenLastCalledWith({ from: "2024-01-01", to: "" });

    await user.click(screen.getByRole("button", { name: /^2$/ }));
    expect(onChange).toHaveBeenLastCalledWith({
      from: "2024-01-01",
      to: "2024-01-02",
    });
    await expect
      .element(screen.getByRole("textbox", { name: "Start" }))
      .toHaveValue("01/01/2024");
    await expect
      .element(screen.getByRole("textbox", { name: "End" }))
      .toHaveValue("01/02/2024");
  });

  it("anchors the popover to the complete date range group", async () => {
    const screen = await render(
      <TestRangeInput calendarPopover={{ visibleMonthCount: 1 }} />,
    );
    const root = screen.container.querySelector<HTMLElement>(".date-textbox");
    const popover = screen.container.querySelector<HTMLElement>(
      ".date-textbox__popover",
    );

    if (!root || !popover) {
      throw new Error("Date range root and popover must be rendered");
    }

    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));
    await expect
      .poll(() => getPopoverStartError(root, popover))
      .toBeLessThan(0.5);
  });

  it("does not close after the first range date when collapseOnSelect is true", async () => {
    const screen = await render(<TestRangeInput collapseOnSelect />);
    const trigger = screen.getByRole("button", { name: a11yOpenPopoverText });
    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: /^1$/ }));

    expect(
      screen.container.querySelector(".date-textbox__popover"),
    ).not.toHaveAttribute("hidden");
    await expect.element(trigger).not.toHaveFocus();
  });

  it("closes the calendar and returns focus to the trigger on Escape", async () => {
    const screen = await render(<TestRangeInput />);
    const trigger = screen.getByRole("button", { name: a11yOpenPopoverText });
    const popover = screen.container.querySelector(".date-textbox__popover");

    await user.click(trigger);
    await user.keyboard("{Escape}");

    expect(popover).toHaveAttribute("hidden");
    await expect.element(trigger).toHaveFocus();
  });

  it("closes and returns focus after completing a range", async () => {
    const screen = await render(<TestRangeInput collapseOnSelect />);
    const trigger = screen.getByRole("button", { name: a11yOpenPopoverText });
    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: /^1$/ }));
    await user.click(screen.getByRole("button", { name: /^2$/ }));

    expect(
      screen.container.querySelector(".date-textbox__popover"),
    ).toHaveAttribute("hidden");
    await expect.element(trigger).toHaveFocus();
  });

  it("updates both fields when the controlled range changes", async () => {
    const screen = await render(
      <TestRangeInput value={{ from: "2024-01-01", to: "2024-01-10" }} />,
    );
    await expect
      .element(screen.getByRole("textbox", { name: "Start" }))
      .toHaveValue("01/01/2024");
    await expect
      .element(screen.getByRole("textbox", { name: "End" }))
      .toHaveValue("01/10/2024");

    screen.rerender(
      <TestRangeInput value={{ from: "2024-01-12", to: "2024-01-15" }} />,
    );
    await expect
      .element(screen.getByRole("textbox", { name: "Start" }))
      .toHaveValue("01/12/2024");
    await expect
      .element(screen.getByRole("textbox", { name: "End" }))
      .toHaveValue("01/15/2024");
  });

  it("disables both fields and the calendar trigger from the group", async () => {
    const screen = await render(<TestRangeInput disabled />);

    await expect
      .element(screen.getByRole("textbox", { name: "Start" }))
      .toBeDisabled();
    await expect
      .element(screen.getByRole("textbox", { name: "End" }))
      .toBeDisabled();
    await expect
      .element(screen.getByRole("button", { name: a11yOpenPopoverText }))
      .toBeDisabled();
  });

  it("makes both fields read-only and disables the calendar trigger from the group", async () => {
    const screen = await render(<TestRangeInput readOnly />);

    await expect
      .element(screen.getByRole("textbox", { name: "Start" }))
      .toHaveAttribute("readonly");
    await expect
      .element(screen.getByRole("textbox", { name: "End" }))
      .toHaveAttribute("readonly");
    await expect
      .element(screen.getByRole("button", { name: a11yOpenPopoverText }))
      .toBeDisabled();
  });

  it("keeps invalid typed text and reports the start field index", async () => {
    const onInvalidDate = vi.fn();
    const screen = await render(
      <TestRangeInput onInvalidDate={onInvalidDate} />,
    );
    const input = screen.getByRole("textbox", { name: "Start" });
    await user.type(input, "not-a-date");
    await user.tab();

    await expect.element(input).toHaveValue("not-a-date");
    await expect.element(input).toHaveAttribute("aria-invalid", "true");
    expect(onInvalidDate).toHaveBeenCalledWith({
      value: "not-a-date",
      index: 0,
    });
  });

  it("opens the calendar on the selected month", async () => {
    const screen = await render(
      <TestRangeInput value={{ from: "2023-06-15", to: "2023-06-20" }} />,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));

    await expect
      .element(screen.getByRole("heading", { name: "June 2023" }))
      .toBeInTheDocument();
  });

  it("does not render navigation when a11yNavigateText is omitted", async () => {
    const screen = await render(
      <TestRangeInput calendarPopover={{ a11yNavigateText: undefined }} />,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));

    expect(screen.container.querySelector(".calendar__header")).toBeNull();
  });

  it("supports a controlled range through onChange", async () => {
    function Controlled() {
      const [value, setValue] = useState<DateInputRange>({ from: "", to: "" });
      return <TestRangeInput value={value} onChange={setValue} />;
    }

    const screen = await render(<Controlled />);
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));
    await user.click(screen.getByRole("button", { name: /^1$/ }));
    await user.click(screen.getByRole("button", { name: /^2$/ }));

    await expect
      .element(screen.getByRole("textbox", { name: "Start" }))
      .toHaveValue("01/01/2024");
    await expect
      .element(screen.getByRole("textbox", { name: "End" }))
      .toHaveValue("01/02/2024");
  });

  it("positions the popover with the strategy passed to the popover child", async () => {
    const screen = await render(
      <TestRangeInput calendarPopover={{ strategy: "fixed" }} />,
    );
    await user.click(screen.getByRole("button", { name: a11yOpenPopoverText }));

    const popover = screen.container.querySelector(".date-textbox__popover");
    expect(popover).toHaveClass("date-textbox__popover--fixed");
    expect(popover).toHaveStyle({ position: "fixed" });
  });
});
