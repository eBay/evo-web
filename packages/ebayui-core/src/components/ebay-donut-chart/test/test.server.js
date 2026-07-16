import { describe, it, expect, vi } from "vitest";

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

describe("ebay-donut-chart description config", () => {
    it("uses description with precedence over the deprecated alias", () => {
        const chart = createDonutChart({
            description: "normalized description",
            highchartsDescription: "deprecated description",
        });

        expect(chart.getPlotOptions().pie.description).toBe(
            "normalized description",
        );
    });

    it("supports highchartsDescription as a deprecated alias", () => {
        const chart = createDonutChart({
            highchartsDescription: "deprecated description",
        });

        expect(chart.getPlotOptions().pie.description).toBe(
            "deprecated description",
        );
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

    it("uses tooltip formatters when a point has no override", () => {
        const tooltipValueFormatter = vi.fn(() => "formatted value");
        const tooltipTitleFormatter = vi.fn(() => "formatted title");
        const chart = createDonutChart({
            tooltipValueFormatter,
            tooltipTitleFormatter,
        });
        const formatter = chart.getTooltipConfig().formatter;
        const html = formatter.call({ name: "Electronics", y: 400 });

        expect(html).toContain("formatted title");
        expect(html).toContain("formatted value");
        expect(tooltipTitleFormatter).toHaveBeenCalledWith("Electronics");
        expect(tooltipValueFormatter).toHaveBeenCalledWith(400);
    });

    it("prefers point tooltip text and labels over formatted values", () => {
        const chart = createDonutChart({
            tooltipValueFormatter: () => "formatted value",
        });
        const formatter = chart.getTooltipConfig().formatter;

        expect(
            formatter.call({ name: "A", y: 1, tooltip: "point tooltip" }),
        ).toContain("point tooltip");
        expect(
            formatter.call({ name: "A", y: 1, label: "point label" }),
        ).toContain("point label");
    });
});
