import { it, expect, describe } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoCalendar } from "../calendar";

describe("EvoCalendar SSR", () => {
  it("renders default non-interactive calendar", () => {
    expect(
      renderToString(<EvoCalendar today="2025-01-15" />),
    ).toMatchSnapshot();
  });

  it("renders interactive day mode", () => {
    expect(
      renderToString(<EvoCalendar selectMode="day" today="2025-01-15" />),
    ).toMatchSnapshot();
  });

  it("renders a selected day", () => {
    expect(
      renderToString(
        <EvoCalendar
          selectMode="day"
          today="2025-01-15"
          selected="2025-01-10"
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders a selected range", () => {
    expect(
      renderToString(
        <EvoCalendar
          selectMode="range"
          today="2025-01-15"
          selected={{ from: "2025-01-05", to: "2025-01-12" }}
          a11yRangeText={{
            start: "start of range",
            end: "end of range",
            in: "in range",
          }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders with disabled dates", () => {
    expect(
      renderToString(
        <EvoCalendar
          selectMode="day"
          today="2025-01-15"
          disable={{ before: "2025-01-05", after: "2025-01-25" }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders multi-month view", () => {
    expect(
      renderToString(<EvoCalendar today="2025-01-15" visibleMonthCount={2} />),
    ).toMatchSnapshot();
  });

  it("renders navigable calendar", () => {
    expect(
      renderToString(
        <EvoCalendar
          today="2025-01-15"
          a11yNavigateText={(month, dir) =>
            `${dir === "prev" ? "Previous" : "Next"}: ${month}`
          }
        />,
      ),
    ).toMatchSnapshot();
  });
});
