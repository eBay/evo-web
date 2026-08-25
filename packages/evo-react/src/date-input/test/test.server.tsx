import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoDateInput } from "../date-input";
import { EvoDateRangeInput } from "../date-range-input";

describe("EvoDateInput SSR", () => {
  it("renders defaults", () => {
    expect(
      renderToString(
        <EvoDateInput
          locale="en-US"
          a11yOpenPopoverText="open calendar"
          floatingLabel="Date"
          calendar={{ today: "2024-01-15", visibleMonthCount: 1 }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders a selected date and floating label", () => {
    expect(
      renderToString(
        <EvoDateInput
          locale="en-US"
          a11yOpenPopoverText="open calendar"
          defaultValue="2024-01-03"
          floatingLabel="Purchase date"
          calendar={{ today: "2024-01-15", visibleMonthCount: 1 }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders disabled", () => {
    expect(
      renderToString(
        <EvoDateInput
          disabled
          locale="en-US"
          a11yOpenPopoverText="open calendar"
          floatingLabel="Date"
          calendar={{ today: "2024-01-15", visibleMonthCount: 1 }}
        />,
      ),
    ).toMatchSnapshot();
  });
});

describe("EvoDateRangeInput SSR", () => {
  it("renders a range with floating labels", () => {
    expect(
      renderToString(
        <EvoDateRangeInput
          locale="en-US"
          a11yOpenPopoverText="open calendar"
          defaultValue={{ from: "2024-01-03", to: "2024-01-10" }}
          startInput={{ floatingLabel: "Start" }}
          endInput={{ floatingLabel: "End" }}
          calendar={{ today: "2024-01-15", visibleMonthCount: 1 }}
        />,
      ),
    ).toMatchSnapshot();
  });
});
