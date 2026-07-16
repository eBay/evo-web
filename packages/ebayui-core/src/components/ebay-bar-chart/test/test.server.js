import { afterEach, describe, it, expect, vi } from "vitest";
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

afterEach(() => vi.unstubAllGlobals());

describe("ebay-bar-chart axis config", () => {
    it("uses normalized label and positioner inputs", () => {
        const xPositioner = () => [1];
        const yPositioner = () => [0];
        const chart = createBarChart({
            xLabelFormat: "{value:%Y}",
            xLabelFormatter: () => "x label",
            xPositioner,
            yLabels: ["zero"],
            yPositioner,
        });
        const xAxis = chart.getXAxisConfig();
        const yAxis = chart.getYAxisConfig(threeSeriesWithSharedX);

        expect(xAxis.labels.format).toBe("{value:%Y}");
        expect(xAxis.labels.formatter).toBeTypeOf("function");
        expect(xAxis.tickPositioner).toBe(xPositioner);
        expect(yAxis.labels.formatter.call({ isFirst: true })).toBe("zero");
        expect(yAxis.tickPositioner).toBe(yPositioner);
    });

    it("supports deprecated aliases with normalized inputs taking precedence", () => {
        const oldXPositioner = () => [1];
        const newXPositioner = () => [2];
        const chart = createBarChart({
            xLabelFormat: "new",
            xPositioner: newXPositioner,
            xAxisLabelFormat: "old",
            xAxisPositioner: oldXPositioner,
            yAxisLabels: ["old y"],
        });

        expect(chart.getXAxisConfig().labels.format).toBe("new");
        expect(chart.getXAxisConfig().tickPositioner).toBe(newXPositioner);
        expect(
            chart
                .getYAxisConfig(threeSeriesWithSharedX)
                .labels.formatter.call({ isFirst: true }),
        ).toBe("old y");
    });
});

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

    it("uses tooltip formatters when a point has no label", () => {
        vi.stubGlobal("Highcharts", { dateFormat: vi.fn() });
        const tooltipValueFormatter = vi.fn(() => "formatted value");
        const tooltipTitleFormatter = vi.fn(() => "formatted title");
        const chart = createBarChart({
            tooltipValueFormatter,
            tooltipTitleFormatter,
        });
        const formatter = chart.getTooltipConfig().formatter;
        const html = formatter.call({
            x: 1,
            point: { y: 2 },
            series: { chart: { series: [] } },
        });

        expect(html).toContain("formatted title");
        expect(html).toContain("formatted value");
        expect(tooltipTitleFormatter).toHaveBeenCalledWith(
            1,
            expect.any(Function),
        );
        expect(tooltipValueFormatter).toHaveBeenCalledWith(2);
    });
});
