import { describe, it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../calendar.stories";

const { Default, Controllable } = composeStories(stories);

describe("evo-calendar SSR", () => {
    it("renders default display calendar", async () => {
        await snapshotHTML(Default);
    });

    it("renders with todayISO pinned", async () => {
        await snapshotHTML(Default, { todayISO: "2025-01-15" });
    });

    it("renders interactive mode", async () => {
        await snapshotHTML(Default, {
            interactive: true,
            todayISO: "2025-01-15",
        });
    });

    it("renders with selected date", async () => {
        await snapshotHTML(Default, {
            interactive: true,
            todayISO: "2025-01-15",
            selected: "2025-01-10",
        });
    });

    it("renders with a range selected", async () => {
        await snapshotHTML(Default, {
            interactive: true,
            todayISO: "2025-01-15",
            selected: { from: "2025-01-05", to: "2025-01-12" },
        });
    });

    it("renders with navigable header", async () => {
        await snapshotHTML(Default, {
            interactive: true,
            todayISO: "2025-01-15",
            getA11yNavigateText: (month: string) => `Show ${month}`,
        });
    });

    it("renders with disabled dates", async () => {
        await snapshotHTML(Default, {
            interactive: true,
            todayISO: "2025-01-15",
            disabled: { before: "2025-01-05", after: "2025-01-25" },
        });
    });

    it("renders multi-month", async () => {
        await snapshotHTML(Default, {
            todayISO: "2025-01-15",
            numMonths: 2,
        });
    });
});
