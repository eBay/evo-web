import { describe, it, expect } from "vitest";

import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../donut-chart.stories";
import DonutChart from "../component";

const { Standard, TwoValues, FiveValues, NoMetrics } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);

function createDonutChart(input = {}) {
    const chart = Object.create(DonutChart.prototype);
    chart.input = input;
    return chart;
}

describe("section-title", () => {
    it("renders defaults", async () => {
        await htmlSnap(Standard);
    });

    it("renders with two values", async () => {
        await htmlSnap(TwoValues);
    });

    it("renders with five values", async () => {
        await htmlSnap(FiveValues);
    });

    it("renders with no metrics", async () => {
        await htmlSnap(NoMetrics);
    });
});

describe("ebay-donut-chart tooltip config", () => {
    it("defaults tooltip outside to true", () => {
        const chart = createDonutChart();

        expect(chart.getTooltipConfig().outside).toBe(true);
    });

    it("sets tooltip outside=false when renderTooltipOutside is false", () => {
        const chart = createDonutChart({ renderTooltipOutside: false });

        expect(chart.getTooltipConfig().outside).toBe(false);
    });
});
