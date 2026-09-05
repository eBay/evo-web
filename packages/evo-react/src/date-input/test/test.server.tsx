import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoDateInput, EvoDateInputCalendarPopover } from "../index";

const a11yNavigateText = (month: string, direction: "next" | "prev") =>
  `${direction === "prev" ? "Previous" : "Next"} ${month}`;

function CalendarPopover() {
  return (
    <EvoDateInputCalendarPopover
      today="2024-01-15"
      visibleMonthCount={1}
      a11yNavigateText={a11yNavigateText}
    />
  );
}

describe("EvoDateInput SSR", () => {
  it("renders defaults", () => {
    expect(
      renderToString(
        <EvoDateInput
          locale="en-US"
          a11yOpenPopoverText="Open calendar"
          floatingLabel="Date"
        >
          <CalendarPopover />
        </EvoDateInput>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a selected date and floating label", () => {
    expect(
      renderToString(
        <EvoDateInput
          locale="en-US"
          a11yOpenPopoverText="Open calendar"
          defaultValue="2024-01-03"
          floatingLabel="Purchase date"
        >
          <CalendarPopover />
        </EvoDateInput>,
      ),
    ).toMatchSnapshot();
  });

  it("renders disabled", () => {
    expect(
      renderToString(
        <EvoDateInput
          disabled
          locale="en-US"
          a11yOpenPopoverText="Open calendar"
          floatingLabel="Date"
        >
          <CalendarPopover />
        </EvoDateInput>,
      ),
    ).toMatchSnapshot();
  });
});
