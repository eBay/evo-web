import React from "react";
import { render } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("@highcharts/react", () => ({
    Chart: vi.fn((props: Record<string, unknown>) => (
        <div
            data-testid="highcharts-chart"
            data-options={JSON.stringify(props.options)}
            data-title={props.title as string}
        >
            {props.children as React.ReactNode}
        </div>
    )),
    Series: vi.fn((props: Record<string, unknown>) => (
        <div data-testid="highcharts-series" data-type={props.type as string} />
    )),
}));

vi.mock("../../common/charts/load-highcharts", () => {
    const mockHighcharts = {
        dateFormat: vi.fn(() => "Jan 1, 2022"),
        setOptions: vi.fn(),
        wrap: vi.fn(),
        pick: vi.fn((...args: unknown[]) => args.find((a) => a !== undefined)),
        relativeLength: vi.fn((v: number) => v),
        addEvent: vi.fn(),
        Legend: { prototype: {} },
        Series: { prototype: {} },
        seriesTypes: { column: { prototype: {} } },
    };
    return { default: mockHighcharts };
});

vi.mock("../../common/charts/legend", () => ({
    ebayLegend: vi.fn(),
}));

import { Chart, Series } from "@highcharts/react";
import { EbayLineChart } from "../index";
import { lineChartTooltipHtml, type LineChartPoint } from "../line-chart-tooltip";

const MockChart = Chart as unknown as ReturnType<typeof vi.fn>;
const MockSeries = Series as unknown as ReturnType<typeof vi.fn>;

const sampleSeries = [
    {
        name: "Series A",
        data: [
            { x: 1643673600000, y: 100 },
            { x: 1643760000000, y: 200 },
            { x: 1643846400000, y: 150 },
        ],
    },
];

const multiSeries = [
    ...sampleSeries,
    {
        name: "Series B",
        data: [
            { x: 1643673600000, y: 50 },
            { x: 1643760000000, y: 80 },
            { x: 1643846400000, y: 120 },
        ],
    },
];

describe("ebay-line-chart rendering", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders the chart container with correct class", () => {
        const { container } = render(<EbayLineChart series={sampleSeries} />);
        expect(container.querySelector(".ebay-line-chart")).toBeInTheDocument();
    });

    it("renders the Chart component from @highcharts/react", () => {
        const { getByTestId } = render(<EbayLineChart series={sampleSeries} />);
        expect(getByTestId("highcharts-chart")).toBeInTheDocument();
    });

    it("uses line as the chart type", () => {
        render(<EbayLineChart series={sampleSeries} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.chart.type).toBe("line");
    });

    it("disables legend for single series", () => {
        render(<EbayLineChart series={sampleSeries} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.legend.enabled).toBe(false);
    });

    it("enables legend for multiple series", () => {
        render(<EbayLineChart series={multiSeries} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.legend.enabled).toBe(true);
    });

    it("sets trendPositiveColor for trend='positive'", () => {
        render(<EbayLineChart series={sampleSeries} trend="positive" />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.colors[0]).toBe("var(--color-data-viz-trend-positive)");
    });

    it("sets trendNegativeColor for trend='negative'", () => {
        render(<EbayLineChart series={sampleSeries} trend="negative" />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.colors[0]).toBe("var(--color-data-viz-trend-negative)");
    });

    it("keeps primary color for trend='neutral'", () => {
        render(<EbayLineChart series={sampleSeries} trend="neutral" />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.colors[0]).toBe("var(--color-data-viz-line-chart-primary)");
    });

    it("sets tooltip outside=false when renderTooltipOutside is false", () => {
        render(<EbayLineChart series={sampleSeries} renderTooltipOutside={false} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.tooltip.outside).toBe(false);
    });

    it("defaults tooltip outside to true", () => {
        render(<EbayLineChart series={sampleSeries} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.tooltip.outside).toBe(true);
    });

    it("passes title to Chart, not in options", () => {
        render(<EbayLineChart series={sampleSeries} title="My Line Chart" />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.title).toBe("My Line Chart");
    });

    it("renders one Series per series item", () => {
        const { getAllByTestId } = render(<EbayLineChart series={multiSeries} />);
        expect(getAllByTestId("highcharts-series")).toHaveLength(2);
    });

    it("passes line type to each Series", () => {
        render(<EbayLineChart series={sampleSeries} />);
        const seriesProps = MockSeries.mock.calls[0][0];
        expect(seriesProps.type).toBe("line");
    });

    it("injects style with marker visibility classes", () => {
        const { container } = render(<EbayLineChart series={sampleSeries} />);
        const style = container.parentElement!.querySelector("style");
        expect(style?.textContent).toContain(".ebay-line-chart .highcharts-point");
        expect(style?.textContent).toContain(".ebay-line-chart__marker--visible");
    });
});

describe("lineChartTooltipHtml XSS escaping", () => {
    it("escapes date", () => {
        const html = lineChartTooltipHtml({
            date: '<img src=x onerror="alert(1)">',
            points: [],
            seriesLength: false,
        });
        expect(html).toContain("&lt;img src=x onerror=&quot;alert(1)&quot;&gt;");
    });

    it("renders single series label only", () => {
        const html = lineChartTooltipHtml({
            date: "Jan 1",
            points: [{ series: { name: "A" }, label: "$100" } as LineChartPoint],
            seriesLength: false,
        });
        expect(html).toContain("$100");
        expect(html).not.toContain("Series A");
    });

    it("renders name and label for multi-series", () => {
        const html = lineChartTooltipHtml({
            date: "Jan 1",
            points: [{ series: { name: "Series A" }, label: "$100" } as LineChartPoint],
            seriesLength: true,
        });
        expect(html).toContain("Series A");
        expect(html).toContain("$100");
    });

    it("escapes name and label in multi-series", () => {
        const html = lineChartTooltipHtml({
            date: "Jan 1",
            points: [{ series: { name: "<b>evil</b>" }, label: "<script>xss</script>" } as LineChartPoint],
            seriesLength: true,
        });
        expect(html).toContain("&lt;b&gt;evil&lt;/b&gt;");
        expect(html).toContain("&lt;script&gt;xss&lt;/script&gt;");
    });

    it("escapes custom tooltip content", () => {
        const customTooltip = '<span class="custom">Custom</span>';
        const html = lineChartTooltipHtml({
            date: "Jan 1",
            points: [{ series: { name: "A" }, tooltip: customTooltip } as LineChartPoint],
            seriesLength: false,
        });
        expect(html).toContain("&lt;span class=&quot;custom&quot;&gt;Custom&lt;/span&gt;");
        expect(html).not.toContain(customTooltip);
    });
});
