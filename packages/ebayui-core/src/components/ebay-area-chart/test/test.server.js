import { describe, it, expect } from "vitest";
import AreaChart from "../component";

function createAreaChart(input = {}) {
    const chart = Object.create(AreaChart.prototype);
    chart.input = input;
    return chart;
}

describe("ebay-area-chart tooltip config", () => {
    it("defaults tooltip outside to true", () => {
        const chart = createAreaChart();

        expect(chart.getTooltipConfig().outside).toBe(true);
    });

    it("sets tooltip outside=false when renderTooltipOutside is false", () => {
        const chart = createAreaChart({ renderTooltipOutside: false });

        expect(chart.getTooltipConfig().outside).toBe(false);
    });
});
