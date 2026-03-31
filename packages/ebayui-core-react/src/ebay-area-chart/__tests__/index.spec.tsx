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
import { EbayAreaChart } from "../index";
import { areaChartTooltipHtml } from "../area-chart-tooltip";

const MockChart = Chart as unknown as ReturnType<typeof vi.fn>;
const MockSeries = Series as unknown as ReturnType<typeof vi.fn>;

const sampleSeries: Highcharts.SeriesAreasplineOptions[] = [
    {
        name: "Revenue",
        data: [
            { x: 1643673600000, y: 686.42 },
            { x: 1643760000000, y: 3395.53 },
        ],
    },
];

const multiSeries: Highcharts.SeriesAreasplineOptions[] = [
    ...sampleSeries,
    {
        name: "Costs",
        data: [
            { x: 1643673600000, y: 200 },
            { x: 1643760000000, y: 300 },
        ],
    },
];

describe("ebay-area-chart rendering", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders the chart container with correct class", () => {
        const { container } = render(<EbayAreaChart series={sampleSeries} />);
        expect(container.querySelector(".ebay-area-chart")).toBeInTheDocument();
    });

    it("renders the Chart component from @highcharts/react", () => {
        const { getByTestId } = render(<EbayAreaChart series={sampleSeries} />);
        expect(getByTestId("highcharts-chart")).toBeInTheDocument();
    });

    it("uses areaspline as the default chart type", () => {
        render(<EbayAreaChart series={sampleSeries} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.chart.type).toBe("areaspline");
    });

    it("uses area chart type when areaType='area'", () => {
        render(<EbayAreaChart series={sampleSeries} areaType="area" />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.chart.type).toBe("area");
    });

    it("passes highcharts instance to the Chart component", () => {
        render(<EbayAreaChart series={sampleSeries} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.highcharts).toBeDefined();
    });

    it("disables legend for single series", () => {
        render(<EbayAreaChart series={sampleSeries} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.legend.enabled).toBe(false);
    });

    it("enables legend for multiple series", () => {
        render(<EbayAreaChart series={multiSeries} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.legend.enabled).toBe(true);
    });

    it("passes title to Chart, not in options", () => {
        render(<EbayAreaChart series={sampleSeries} title="My Chart" />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.title).toBe("My Chart");
        expect(callProps.options.title).toBeUndefined();
    });

    it("renders one Series per series item", () => {
        const { getAllByTestId } = render(<EbayAreaChart series={multiSeries} />);
        expect(getAllByTestId("highcharts-series")).toHaveLength(2);
    });

    it("passes areaType to each Series", () => {
        render(<EbayAreaChart series={sampleSeries} />);
        const seriesProps = MockSeries.mock.calls[0][0];
        expect(seriesProps.type).toBe("areaspline");
    });

    it("passes className to the container", () => {
        const { container } = render(<EbayAreaChart series={sampleSeries} className="extra" />);
        const el = container.querySelector(".ebay-area-chart");
        expect(el).toHaveClass("extra");
    });

    it("passes extra HTML attributes to the container", () => {
        const { container } = render(<EbayAreaChart series={sampleSeries} data-testid="area-chart" />);
        expect(container.querySelector('[data-testid="area-chart"]')).toBeInTheDocument();
    });

    it("injects style element with chart styles", () => {
        const { container } = render(<EbayAreaChart series={sampleSeries} />);
        const style = container.parentElement!.querySelector("style");
        expect(style).toBeInTheDocument();
        expect(style?.textContent).toContain(".ebay-area-chart");
    });

    it("accepts highchartOptions escape hatch", () => {
        render(<EbayAreaChart series={sampleSeries} highchartOptions={{ chart: { margin: [0, 0, 0, 0] } }} />);
        expect(MockChart).toHaveBeenCalledTimes(1);
    });

    it("does not mutate the input series prop", () => {
        const inputSeries: Highcharts.SeriesAreasplineOptions[] = [
            {
                name: "Revenue",
                data: [
                    { x: 1643673600000, y: 686.42 },
                    { x: 1643760000000, y: 3395.53 },
                ],
            },
        ];

        render(<EbayAreaChart series={inputSeries} />);

        expect(inputSeries[0].marker).toBeUndefined();
        expect(inputSeries[0].lineColor).toBeUndefined();
        expect(inputSeries[0].fillOpacity).toBeUndefined();
    });
});

describe("areaChartTooltipHtml XSS escaping", () => {
    const valueFormatter = (v: number | string) => `$${v}`;

    it("escapes the date field", () => {
        const html = areaChartTooltipHtml({
            date: '<img src=x onerror="alert(1)">',
            points: [],
            total: false,
            valueFormatter,
        });
        expect(html).toContain("&lt;img src=x onerror=&quot;alert(1)&quot;&gt;");
        expect(html).not.toContain("<img");
    });

    it("escapes series name and value", () => {
        const html = areaChartTooltipHtml({
            date: "Jan 1",
            points: [{ series: { name: "<b>evil</b>" }, y: 100, label: "<script>alert(1)</script>" }],
            total: false,
            valueFormatter,
        });
        expect(html).toContain("&lt;b&gt;evil&lt;/b&gt;");
        expect(html).toContain("&lt;script&gt;alert(1)&lt;/script&gt;");
    });

    it("shows total row when total is provided", () => {
        const html = areaChartTooltipHtml({
            date: "Jan 1",
            points: [
                { series: { name: "A" }, y: 100 },
                { series: { name: "B" }, y: 200 },
            ],
            total: 300,
            valueFormatter,
        });
        expect(html).toContain("Total");
        expect(html).toContain("$300");
    });

    it("omits total row when total is false", () => {
        const html = areaChartTooltipHtml({
            date: "Jan 1",
            points: [{ series: { name: "A" }, y: 100 }],
            total: false,
            valueFormatter,
        });
        expect(html).not.toContain("Total");
    });
});
