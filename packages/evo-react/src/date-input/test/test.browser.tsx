import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { useState } from "react";
import type { DateRange, DayISO } from "../../calendar";
import { EvoDateInput } from "../date-input";
import { EvoDateRangeInput } from "../date-range-input";

const calendar = {
  today: "2024-01-05" as const,
  visibleMonthCount: 1,
};

const a11yOpenPopoverText = "open calendar";

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

describe("evo-date-input", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
    vi.restoreAllMocks();
  });

  it("opens and closes the calendar from the postfix button", async () => {
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        floatingLabel="Date"
        calendar={calendar}
      />,
    );
    const trigger = screen.getByRole("button", { name: "open calendar" });
    // popover is closed and hidden from the a11y tree; querySelector is intentional here
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

  it("positions the popover with the given strategy", async () => {
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        strategy="fixed"
        floatingLabel="Date"
        calendar={calendar}
      />,
    );
    await user.click(screen.getByRole("button", { name: "open calendar" }));

    // popover positioning class is on the hidden-capable wrapper
    const popover = screen.container.querySelector(".date-textbox__popover");
    expect(popover).toHaveClass("date-textbox__popover--fixed");
    expect(popover).toHaveStyle({ position: "fixed" });
  });

  it("closes the calendar when clicking outside", async () => {
    const screen = await render(
      <>
        <EvoDateInput
          locale="en-US"
          a11yOpenPopoverText={a11yOpenPopoverText}
          floatingLabel="Date"
          calendar={calendar}
        />
        <button type="button">Outside</button>
      </>,
    );
    await user.click(screen.getByRole("button", { name: "open calendar" }));
    // popover is closed and hidden from the a11y tree; querySelector is intentional here
    const popover = screen.container.querySelector(".date-textbox__popover");
    expect(popover).not.toHaveAttribute("hidden");

    await user.click(screen.getByRole("button", { name: "Outside" }));
    expect(popover).toHaveAttribute("hidden");
  });

  it("does not close the calendar when selecting a date and collapseOnSelect is false", async () => {
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        collapseOnSelect={false}
        floatingLabel="Date"
        calendar={calendar}
      />,
    );
    await user.click(screen.getByRole("button", { name: "open calendar" }));
    await user.click(screen.getByRole("button", { name: /^1$/ }));

    // popover is closed and hidden from the a11y tree; querySelector is intentional here
    expect(
      screen.container.querySelector(".date-textbox__popover"),
    ).not.toHaveAttribute("hidden");
  });

  it("closes the calendar and returns focus when collapseOnSelect is true", async () => {
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        collapseOnSelect
        floatingLabel="Date"
        calendar={calendar}
      />,
    );
    const trigger = screen.getByRole("button", { name: "open calendar" });
    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: /^1$/ }));

    // popover is closed and hidden from the a11y tree; querySelector is intentional here
    expect(
      screen.container.querySelector(".date-textbox__popover"),
    ).toHaveAttribute("hidden");
    await expect.element(trigger).toHaveFocus();
  });

  it("emits the selected ISO date", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        onChange={onChange}
        floatingLabel="Date"
        calendar={calendar}
      />,
    );
    await user.click(screen.getByRole("button", { name: "open calendar" }));
    await user.click(screen.getByRole("button", { name: /^1$/ }));

    expect(onChange).toHaveBeenCalledWith("2024-01-01");
    await expect
      .element(screen.getByRole("textbox", { name: "Date" }))
      .toHaveValue("01/01/2024");
  });

  it("formats a provided value and updates when it changes", async () => {
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        value="2024-01-01"
        floatingLabel="Date"
        calendar={calendar}
      />,
    );
    const input = screen.getByRole("textbox", { name: "Date" });
    await expect.element(input).toHaveValue("01/01/2024");

    screen.rerender(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        value="2024-01-12"
        floatingLabel="Date"
        calendar={calendar}
      />,
    );
    await expect.element(input).toHaveValue("01/12/2024");
  });

  it("allows clearing a selected value", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        defaultValue="2024-01-01"
        onChange={onChange}
        floatingLabel="Date"
        calendar={calendar}
      />,
    );
    const input = screen.getByRole("textbox", { name: "Date" });
    await expect.element(input).toHaveValue("01/01/2024");

    await user.clear(input);
    await user.tab();

    await expect.element(input).toHaveValue("");
    expect(onChange).toHaveBeenCalledWith(undefined);
  });

  it("keeps invalid typed text and emits onInvalidDate", async () => {
    const onChange = vi.fn();
    const onInvalidDate = vi.fn();
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        onChange={onChange}
        onInvalidDate={onInvalidDate}
        floatingLabel="Date"
        calendar={calendar}
      />,
    );
    const input = screen.getByRole("textbox", { name: "Date" });
    await user.type(input, "not-a-date");
    await user.tab();

    await expect.element(input).toHaveValue("not-a-date");
    expect(onChange).not.toHaveBeenCalled();
    expect(onInvalidDate).toHaveBeenCalledWith({
      value: "not-a-date",
      index: 0,
    });
  });

  it("does not fail when the provided value is invalid", async () => {
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        value={"invalid" as DayISO}
        floatingLabel="Date"
        calendar={calendar}
      />,
    );

    await expect
      .element(screen.getByRole("textbox", { name: "Date" }))
      .toHaveValue("invalid");
  });

  it("commits a typed locale date on blur", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        onChange={onChange}
        floatingLabel="Date"
        calendar={calendar}
      />,
    );
    const input = screen.getByRole("textbox", { name: "Date" });
    await user.type(input, "01022024");
    await user.tab();

    expect(onChange).toHaveBeenCalledWith("2024-01-02");
    await expect.element(input).toHaveValue("01/02/2024");
  });

  it("forwards input props such as a floating label", async () => {
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        floatingLabel="Purchase date"
        calendar={calendar}
      />,
    );

    await expect.element(screen.getByText("Purchase date")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "open calendar" }));
    // popover is closed and hidden from the a11y tree; querySelector is intentional here
    expect(
      screen.container.querySelector(".date-textbox__popover"),
    ).not.toHaveAttribute("hidden");
  });

  it("updates visibleMonthCount when the viewport media query changes", async () => {
    const media = mockMinWidth(true);
    const screen = await render(
      <EvoDateInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        floatingLabel="Date"
        calendar={{ today: "2024-01-05" }}
      />,
    );
    await user.click(screen.getByRole("button", { name: "open calendar" }));
    expect(screen.container.querySelectorAll(".calendar__month")).toHaveLength(
      2,
    );

    media.setMatches(false);
    await expect
      .poll(() => screen.container.querySelectorAll(".calendar__month").length)
      .toBe(1);
  });

  it("supports a controlled value through onChange", async () => {
    function Controlled() {
      const [value, setValue] = useState<DayISO | undefined>();
      return (
        <>
          <EvoDateInput
            locale="en-US"
            a11yOpenPopoverText={a11yOpenPopoverText}
            value={value}
            onChange={setValue}
            floatingLabel="Date"
            calendar={calendar}
          />
          <button type="button" onClick={() => setValue("2024-01-03")}>
            Set date
          </button>
        </>
      );
    }

    const screen = await render(<Controlled />);
    await user.click(screen.getByRole("button", { name: "Set date" }));
    await expect
      .element(screen.getByRole("textbox", { name: "Date" }))
      .toHaveValue("01/03/2024");
  });
});

describe("evo-date-range-input", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("selects a range from the calendar", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoDateRangeInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        onChange={onChange}
        startInput={{ floatingLabel: "Start" }}
        endInput={{ floatingLabel: "End" }}
        calendar={calendar}
      />,
    );
    await user.click(screen.getByRole("button", { name: "open calendar" }));
    await user.click(screen.getByRole("button", { name: /^1$/ }));
    expect(onChange).toHaveBeenLastCalledWith({ from: "2024-01-01" });

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

  it("does not close after the first range date when collapseOnSelect is true", async () => {
    const screen = await render(
      <EvoDateRangeInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        collapseOnSelect
        startInput={{ floatingLabel: "Start" }}
        endInput={{ floatingLabel: "End" }}
        calendar={calendar}
      />,
    );
    const trigger = screen.getByRole("button", { name: "open calendar" });
    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: /^1$/ }));

    // popover is closed and hidden from the a11y tree; querySelector is intentional here
    expect(
      screen.container.querySelector(".date-textbox__popover"),
    ).not.toHaveAttribute("hidden");
    await expect.element(trigger).not.toHaveFocus();
  });

  it("closes and returns focus after completing a range when collapseOnSelect is true", async () => {
    const screen = await render(
      <EvoDateRangeInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        collapseOnSelect
        startInput={{ floatingLabel: "Start" }}
        endInput={{ floatingLabel: "End" }}
        calendar={calendar}
      />,
    );
    const trigger = screen.getByRole("button", { name: "open calendar" });
    await user.click(trigger);
    await user.click(screen.getByRole("button", { name: /^1$/ }));
    await user.click(screen.getByRole("button", { name: /^2$/ }));

    // popover is closed and hidden from the a11y tree; querySelector is intentional here
    expect(
      screen.container.querySelector(".date-textbox__popover"),
    ).toHaveAttribute("hidden");
    await expect.element(trigger).toHaveFocus();
  });

  it("renders start and end floating labels", async () => {
    const screen = await render(
      <EvoDateRangeInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        startInput={{ floatingLabel: "Start" }}
        endInput={{ floatingLabel: "End" }}
        calendar={calendar}
      />,
    );

    await expect.element(screen.getByText("Start")).toBeInTheDocument();
    await expect.element(screen.getByText("End")).toBeInTheDocument();
  });

  it("updates both fields when the controlled range changes", async () => {
    const screen = await render(
      <EvoDateRangeInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        value={{ from: "2024-01-01", to: "2024-01-10" }}
        startInput={{ floatingLabel: "Start" }}
        endInput={{ floatingLabel: "End" }}
        calendar={calendar}
      />,
    );
    await expect
      .element(screen.getByRole("textbox", { name: "Start" }))
      .toHaveValue("01/01/2024");
    await expect
      .element(screen.getByRole("textbox", { name: "End" }))
      .toHaveValue("01/10/2024");

    screen.rerender(
      <EvoDateRangeInput
        locale="en-US"
        a11yOpenPopoverText={a11yOpenPopoverText}
        value={{ from: "2024-01-12", to: "2024-01-15" }}
        startInput={{ floatingLabel: "Start" }}
        endInput={{ floatingLabel: "End" }}
        calendar={calendar}
      />,
    );
    await expect
      .element(screen.getByRole("textbox", { name: "Start" }))
      .toHaveValue("01/12/2024");
    await expect
      .element(screen.getByRole("textbox", { name: "End" }))
      .toHaveValue("01/15/2024");
  });

  it("supports a controlled range through onChange", async () => {
    function Controlled() {
      const [value, setValue] = useState<DateRange | undefined>();
      return (
        <EvoDateRangeInput
          locale="en-US"
          a11yOpenPopoverText={a11yOpenPopoverText}
          value={value}
          onChange={setValue}
          startInput={{ floatingLabel: "Start" }}
          endInput={{ floatingLabel: "End" }}
          calendar={calendar}
        />
      );
    }

    const screen = await render(<Controlled />);
    await user.click(screen.getByRole("button", { name: "open calendar" }));
    await user.click(screen.getByRole("button", { name: /^1$/ }));
    await user.click(screen.getByRole("button", { name: /^2$/ }));

    await expect
      .element(screen.getByRole("textbox", { name: "Start" }))
      .toHaveValue("01/01/2024");
    await expect
      .element(screen.getByRole("textbox", { name: "End" }))
      .toHaveValue("01/02/2024");
  });
});
