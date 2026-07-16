import { describe, it, expect } from "vitest";
import AreaChart from "../component";

function createAreaChart(input = {}) {
    const chart = Object.create(AreaChart.prototype);
    chart.input = input;
    return chart;
}

describe("ebay-area-chart axis config", () => {
    it("uses normalized label and positioner inputs", () => {
        const xPositioner = () => [1];
        const yPositioner = () => [0];
        const chart = createAreaChart({
            xLabelFormat: "{value:%Y}",
            xLabelFormatter: () => "x label",
            xPositioner,
            yLabels: ["zero"],
            yPositioner,
        });
        const xAxis = chart.getXAxisConfig();
        const yAxis = chart.getYAxisConfig();

        expect(xAxis.labels.format).toBe("{value:%Y}");
        expect(xAxis.labels.formatter).toBeTypeOf("function");
        expect(xAxis.tickPositioner).toBe(xPositioner);
        expect(yAxis.labels.formatter.call({ isFirst: true })).toBe("zero");
        expect(yAxis.tickPositioner).toBe(yPositioner);
    });

    it("supports deprecated aliases with normalized inputs taking precedence", () => {
        const oldXPositioner = () => [1];
        const newXPositioner = () => [2];
        const chart = createAreaChart({
            xLabelFormat: "new",
            xPositioner: newXPositioner,
            xAxisLabelFormat: "old",
            xAxisPositioner: oldXPositioner,
            yAxisLabels: ["old y"],
        });

        expect(chart.getXAxisConfig().labels.format).toBe("new");
        expect(chart.getXAxisConfig().tickPositioner).toBe(newXPositioner);
        expect(
            chart.getYAxisConfig().labels.formatter.call({ isFirst: true }),
        ).toBe("old y");
    });
});

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
