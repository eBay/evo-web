import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoDateRangeInput,
  EvoDateRangeInputCalendarPopover,
  EvoDateRangeInputGroup,
} from "../index";

const a11yNavigateText = (month: string, direction: "next" | "prev") =>
  `${direction === "prev" ? "Previous" : "Next"} ${month}`;

function CalendarPopover() {
  return (
    <EvoDateRangeInputCalendarPopover
      today="2024-01-15"
      visibleMonthCount={1}
      a11yNavigateText={a11yNavigateText}
      a11yRangeText={{
        start: "Start of range",
        in: "In range",
        end: "End of range",
      }}
    />
  );
}

describe("EvoDateRangeInput SSR", () => {
  it("renders a range with floating labels", () => {
    expect(
      renderToString(
        <EvoDateRangeInputGroup
          locale="en-US"
          a11yOpenPopoverText="Open calendar"
          defaultValue={{ from: "2024-01-03", to: "2024-01-10" }}
        >
          <EvoDateRangeInput type="start" floatingLabel="Start" />
          <EvoDateRangeInput type="end" floatingLabel="End" />
          <CalendarPopover />
        </EvoDateRangeInputGroup>,
      ),
    ).toMatchSnapshot();
  });

  it("renders the group disabled", () => {
    expect(
      renderToString(
        <EvoDateRangeInputGroup
          disabled
          locale="en-US"
          a11yOpenPopoverText="Open calendar"
        >
          <EvoDateRangeInput type="start" floatingLabel="Start" />
          <EvoDateRangeInput type="end" floatingLabel="End" />
          <CalendarPopover />
        </EvoDateRangeInputGroup>,
      ),
    ).toMatchSnapshot();
  });
});
