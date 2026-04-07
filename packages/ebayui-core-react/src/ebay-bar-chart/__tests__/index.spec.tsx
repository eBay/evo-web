import React from "react";
import { render } from "@testing-library/react";
import { vi } from "vitest";

// Mock the @highcharts/react Chart and Series components to avoid real Highcharts in jsdom
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

// Mock the load-highcharts module
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

// Mock the extensions so they don't run real Highcharts code
vi.mock("../../common/charts/legend", () => ({
    ebayLegend: vi.fn(),
}));
vi.mock("../../common/charts/bar-chart", () => ({
    eBayColumns: vi.fn(),
}));

// Import components after mocks are set up
import { Chart, Series } from "@highcharts/react";
import { EbayBarChart } from "../index";
import { barChartTooltipHtml } from "../bar-chart-tooltip";
import type { BarChartSeriesItem } from "../types";

const MockChart = Chart as unknown as ReturnType<typeof vi.fn>;
const MockSeries = Series as unknown as ReturnType<typeof vi.fn>;

const sampleSeries: BarChartSeriesItem[] = [
    {
        name: "Value 1",
        data: [
            { x: 1643673600000, y: 686.42, label: "$686.42" },
            { x: 1643760000000, y: 3395.53, label: "$3395.53" },
            { x: 1643846400000, y: 4623.43, label: "$4623.43" },
            { x: 1643932800000, y: 742.12, label: "$742.12" },
            { x: 1644019200000, y: 4525.82, label: "$4525.82" },
        ],
    },
];

const multiSeries: BarChartSeriesItem[] = [
    ...sampleSeries,
    {
        name: "Value 2",
        data: [
            { x: 1643673600000, y: 2016.88, label: "$2016.88" },
            { x: 1643760000000, y: 3035.94, label: "$3035.94" },
            { x: 1643846400000, y: 1452.5, label: "$1452.5" },
            { x: 1643932800000, y: 582.67, label: "$582.67" },
            { x: 1644019200000, y: 1283.86, label: "$1283.86" },
        ],
    },
];

describe("ebay-bar-chart rendering", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders the chart container with correct class", () => {
        const { container } = render(<EbayBarChart series={sampleSeries} />);
        const wrapper = container.querySelector(".ebay-bar-chart");
        expect(wrapper).toBeInTheDocument();
    });

    it("renders the Chart component from @highcharts/react", () => {
        const { getByTestId } = render(<EbayBarChart series={sampleSeries} />);
        expect(getByTestId("highcharts-chart")).toBeInTheDocument();
    });

    it("passes options to the Chart component", () => {
        render(<EbayBarChart series={sampleSeries} />);
        expect(MockChart).toHaveBeenCalledTimes(1);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options).toBeDefined();
        expect(callProps.options.chart.type).toBe("column");
    });

    it("passes highcharts instance to the Chart component", () => {
        render(<EbayBarChart series={sampleSeries} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.highcharts).toBeDefined();
    });

    it("renders multi-series chart", () => {
        const { container } = render(<EbayBarChart series={multiSeries} />);
        const wrapper = container.querySelector(".ebay-bar-chart");
        expect(wrapper).toBeInTheDocument();
    });

    it("renders stacked chart", () => {
        render(<EbayBarChart series={multiSeries} stacked />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.plotOptions.column.stacking).toBe("normal");
    });

    it("passes className to the container", () => {
        const { container } = render(<EbayBarChart series={sampleSeries} className="custom-class" />);
        const wrapper = container.querySelector(".ebay-bar-chart");
        expect(wrapper).toHaveClass("ebay-bar-chart");
        expect(wrapper).toHaveClass("custom-class");
    });

    it("passes extra HTML attributes to the container", () => {
        const { container } = render(<EbayBarChart series={sampleSeries} data-testid="bar-chart" />);
        const wrapper = container.querySelector('[data-testid="bar-chart"]');
        expect(wrapper).toBeInTheDocument();
        expect(wrapper).toHaveClass("ebay-bar-chart");
    });

    it("injects style element with chart styles", () => {
        const { container } = render(<EbayBarChart series={sampleSeries} />);
        const parentEl = container.parentElement!;
        const style = parentEl.querySelector("style");
        expect(style).toBeInTheDocument();
        expect(style?.textContent).toContain(".ebay-bar-chart");
    });

    it("passes title prop to Chart instead of options", () => {
        render(<EbayBarChart series={sampleSeries} title="Revenue" />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.title).toBe("Revenue");
        expect(callProps.options.title).toBeUndefined();
    });

    it("renders Series children for each data series", () => {
        const { getAllByTestId } = render(<EbayBarChart series={multiSeries} />);
        const seriesEls = getAllByTestId("highcharts-series");
        expect(seriesEls).toHaveLength(2);
    });

    it("passes column type to each Series child", () => {
        render(<EbayBarChart series={sampleSeries} />);
        expect(MockSeries).toHaveBeenCalledTimes(1);
        const seriesProps = MockSeries.mock.calls[0][0];
        expect(seriesProps.type).toBe("column");
    });

    it("passes series data to Series children", () => {
        render(<EbayBarChart series={sampleSeries} />);
        const seriesProps = MockSeries.mock.calls[0][0];
        expect(seriesProps.data).toHaveLength(5);
    });

    it("escapes tooltip HTML in non-stacked mode", () => {
        const html = barChartTooltipHtml({
            date: '<img src=x onerror="alert(1)">',
            data: {
                label: '<script>alert("xss")</script> & "quote" \'apostrophe\'',
            } as never,
            stacked: false,
            x: 1643673600000,
        });

        expect(html).toContain("&lt;img src=x onerror=&quot;alert(1)&quot;&gt;");
        expect(html).toContain(
            "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt; &amp; &quot;quote&quot; &#39;apostrophe&#39;",
        );
        expect(html).not.toContain("<script>");
        expect(html).not.toContain('<img src=x onerror="alert(1)">');
    });

    it("escapes tooltip HTML in stacked mode", () => {
        const html = barChartTooltipHtml({
            date: "Jan 1, 2022",
            data: [
                {
                    name: "Series <b>One</b>",
                    data: [
                        {
                            x: 1643673600000,
                            label: '<span onclick="alert(1)">unsafe</span>',
                        },
                    ],
                },
            ] as never,
            stacked: true,
            x: 1643673600000,
        });

        expect(html).toContain("Series &lt;b&gt;One&lt;/b&gt;");
        expect(html).toContain("&lt;span onclick=&quot;alert(1)&quot;&gt;unsafe&lt;/span&gt;");
        expect(html).not.toContain("<b>One</b>");
        expect(html).not.toContain('<span onclick="alert(1)">unsafe</span>');
    });
});
