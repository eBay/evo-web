import { describe, it, expect } from "vitest";
import LineChart from "../component";

function createLineChart(input = {}) {
    const chart = Object.create(LineChart.prototype);
    chart.input = input;
    return chart;
}

describe("ebay-line-chart tooltip config", () => {
    it("defaults tooltip outside to true", () => {
        const chart = createLineChart({ series: [] });

        expect(chart.getTooltipConfig().outside).toBe(true);
    });

    it("sets tooltip outside=false when renderTooltipOutside is false", () => {
        const chart = createLineChart({
            renderTooltipOutside: false,
            series: [],
        });

        expect(chart.getTooltipConfig().outside).toBe(false);
    });
});
