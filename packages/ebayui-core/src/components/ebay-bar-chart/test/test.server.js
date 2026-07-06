import { describe, it, expect } from "vitest";
import BarChart from "../component";

const threeSeriesWithSharedX = [
    {
        name: "Value 1",
        data: [{ x: 1643673600000, y: 50, label: "$50" }],
    },
    {
        name: "Value 2",
        data: [{ x: 1643673600000, y: 40, label: "$40" }],
    },
    {
        name: "Value 3",
        data: [{ x: 1643673600000, y: 30, label: "$30" }],
    },
];

function createBarChart(input = {}) {
    const chart = Object.create(BarChart.prototype);
    chart.input = input;
    return chart;
}

describe("ebay-bar-chart y-axis config", () => {
    it("uses stacked totals for the y-axis max", () => {
        const chart = createBarChart({ stacked: true });

        expect(chart.getYAxisConfig(threeSeriesWithSharedX).max).toBe(120);
    });

    it("uses individual values for the y-axis max when not stacked", () => {
        const chart = createBarChart({ stacked: false });

        expect(chart.getYAxisConfig(threeSeriesWithSharedX).max).toBe(50);
    });
});

describe("ebay-bar-chart tooltip config", () => {
    it("defaults tooltip outside to true", () => {
        const chart = createBarChart();

        expect(chart.getTooltipConfig().outside).toBe(true);
    });

    it("sets tooltip outside=false when renderTooltipOutside is false", () => {
        const chart = createBarChart({ renderTooltipOutside: false });

        expect(chart.getTooltipConfig().outside).toBe(false);
    });
});
