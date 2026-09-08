import { describe, it } from "vitest";
import { render } from "@marko/testing-library";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import template from "../index.marko";

describe("evo-calendar SSR", () => {
  it("renders default non-interactive calendar", async () => {
    await snapshotHTML(template);
  });

  it("renders with today pinned", async () => {
    await snapshotHTML(template, { today: "2025-01-15" });
  });

  it("renders interactive mode with selectMode=day", async () => {
    await snapshotHTML(template, {
      selectMode: "day",
      today: "2025-01-15",
    });
  });

  it("renders with a selected date", async () => {
    await snapshotHTML(template, {
      selectMode: "day",
      today: "2025-01-15",
      selected: "2025-01-10",
    });
  });

  it("renders with a selected range", async () => {
    await snapshotHTML(template, {
      selectMode: "range",
      today: "2025-01-15",
      selected: { from: "2025-01-05", to: "2025-01-12" },
    });
  });

  it("renders with disabled dates", async () => {
    await snapshotHTML(template, {
      selectMode: "day",
      today: "2025-01-15",
      disable: { before: "2025-01-05", after: "2025-01-25" },
    });
  });

  it("renders multi-month view", async () => {
    await snapshotHTML(template, {
      today: "2025-01-15",
      visibleMonthCount: 2,
    });
  });
});
