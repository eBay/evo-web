import { afterEach, describe, it, expect, vi } from "vitest";
import LineChart from "../component";

function createLineChart(input = {}) {
    const chart = Object.create(LineChart.prototype);
    chart.input = input;
    return chart;
}

afterEach(() => vi.unstubAllGlobals());

describe("ebay-line-chart axis config", () => {
    const series = [{ type: "line", data: [{ x: 1, y: 1 }] }];

    it("uses normalized label and positioner inputs", () => {
        const xPositioner = () => [1];
        const yPositioner = () => [0];
        const chart = createLineChart({
            series,
            xLabelFormat: "{value:%Y}",
            xLabelFormatter: () => "x label",
            xPositioner,
            yLabels: ["zero"],
            yPositioner,
        });
        const xAxis = chart.getXAxisConfig();
        const yAxis = chart.getYAxisConfig(series);

        expect(xAxis.labels.format).toBe("{value:%Y}");
        expect(xAxis.labels.formatter).toBeTypeOf("function");
        expect(xAxis.tickPositioner).toBe(xPositioner);
        expect(yAxis.labels.formatter.call({ isFirst: true })).toBe("zero");
        expect(yAxis.tickPositioner).toBe(yPositioner);
    });

    it("supports deprecated aliases with normalized inputs taking precedence", () => {
        const oldXPositioner = () => [1];
        const newXPositioner = () => [2];
        const chart = createLineChart({
            series,
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
                .getYAxisConfig(series)
                .labels.formatter.call({ isFirst: true }),
        ).toBe("old y");
    });
});

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

    it("uses tooltip formatters when a point has no override", () => {
        vi.stubGlobal("Highcharts", { dateFormat: vi.fn() });
        const tooltipValueFormatter = vi.fn(() => "formatted value");
        const tooltipTitleFormatter = vi.fn(() => "formatted title");
        const chart = createLineChart({
            series: [],
            tooltipValueFormatter,
            tooltipTitleFormatter,
        });
        const formatter = chart.getTooltipConfig().formatter;
        const html = formatter.call({
            points: [{ x: 1, point: { y: 2, series: { name: "A" } } }],
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
