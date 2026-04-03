import React from "react";
import { render } from "@testing-library/react";
import { vi } from "vitest";

vi.mock("@highcharts/react", () => ({
    Chart: vi.fn((props: Record<string, unknown>) => (
        <div data-testid="highcharts-chart" data-options={JSON.stringify(props.options)} />
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
        seriesTypes: { pie: { prototype: {} } },
    };
    return { default: mockHighcharts };
});

vi.mock("../../common/charts/donut", () => ({
    ebayDonut: vi.fn(),
}));

vi.mock("../../ebay-chart-legend", () => ({
    EbayChartLegend: vi.fn((props: Record<string, unknown>) => (
        <div data-testid="chart-legend" data-items={JSON.stringify(props.items)} />
    )),
}));

import { Chart } from "@highcharts/react";
import { EbayDonutChart } from "../index";
import { donutChartTooltipHtml } from "../donut-chart-tooltip";

const MockChart = Chart as unknown as ReturnType<typeof vi.fn>;

const sampleSeries = [
    {
        data: [
            { name: "Electronics", y: 400 },
            { name: "Fashion", y: 300 },
            { name: "Home", y: 200 },
        ],
    },
];

describe("ebay-donut-chart rendering", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders the donut-chart container", () => {
        const { container } = render(<EbayDonutChart series={sampleSeries} />);
        expect(container.querySelector(".donut-chart")).toBeInTheDocument();
    });

    it("renders the donut-chart__grid", () => {
        const { container } = render(<EbayDonutChart series={sampleSeries} />);
        expect(container.querySelector(".donut-chart__grid")).toBeInTheDocument();
    });

    it("renders title string in donut-chart__title", () => {
        const { container } = render(<EbayDonutChart series={sampleSeries} title="Sales" />);
        const titleEl = container.querySelector(".donut-chart__title");
        expect(titleEl).toBeInTheDocument();
        expect(titleEl?.textContent).toBe("Sales");
    });

    it("renders ReactNode title", () => {
        const { container } = render(
            <EbayDonutChart series={sampleSeries} title={<span data-testid="custom-title">Custom</span>} />,
        );
        expect(container.querySelector('[data-testid="custom-title"]')).toBeInTheDocument();
    });

    it("does not render title section when title is not provided", () => {
        const { container } = render(<EbayDonutChart series={sampleSeries} />);
        expect(container.querySelector(".donut-chart__title")).not.toBeInTheDocument();
    });

    it("renders metricValue in donut-chart__metric-value", () => {
        const { container } = render(<EbayDonutChart series={sampleSeries} metricValue="$1,234" />);
        expect(container.querySelector(".donut-chart__metric-value")?.textContent).toBe("$1,234");
    });

    it("renders metricLabel in donut-chart__metric-label", () => {
        const { container } = render(<EbayDonutChart series={sampleSeries} metricLabel="Total" />);
        expect(container.querySelector(".donut-chart__metric-label")?.textContent).toBe("Total");
    });

    it("does not render metric section when neither metricValue nor metricLabel provided", () => {
        const { container } = render(<EbayDonutChart series={sampleSeries} />);
        expect(container.querySelector(".donut-chart__metric")).not.toBeInTheDocument();
    });

    it("renders the Chart component", () => {
        const { getByTestId } = render(<EbayDonutChart series={sampleSeries} />);
        expect(getByTestId("highcharts-chart")).toBeInTheDocument();
    });

    it("sets chart type to pie", () => {
        render(<EbayDonutChart series={sampleSeries} />);
        const callProps = MockChart.mock.calls[0][0];
        expect(callProps.options.chart.type).toBe("pie");
    });

    it("logs a warning when multiple series provided", () => {
        const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
        render(<EbayDonutChart series={[...sampleSeries, ...sampleSeries]} />);
        expect(warn).toHaveBeenCalledWith(expect.stringContaining("one series"));
        warn.mockRestore();
    });

    it("passes legend items derived from series[0].data to EbayChartLegend", () => {
        const { getByTestId } = render(<EbayDonutChart series={sampleSeries} />);
        const legend = getByTestId("chart-legend");
        const items = JSON.parse(legend.getAttribute("data-items") ?? "[]");
        expect(items).toHaveLength(3);
        expect(items[0].name).toBe("Electronics");
        expect(items[0].value).toBe(400);
    });

    it("passes className to the container", () => {
        const { container } = render(<EbayDonutChart series={sampleSeries} className="extra" />);
        expect(container.querySelector(".donut-chart.extra")).toBeInTheDocument();
    });

    it("handles empty series without throwing and warns", () => {
        const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
        expect(() => render(<EbayDonutChart series={[]} />)).not.toThrow();
        expect(warn).toHaveBeenCalledWith(expect.stringContaining("at least one series"));
        warn.mockRestore();
    });
});

describe("donutChartTooltipHtml XSS escaping", () => {
    it("escapes name", () => {
        const html = donutChartTooltipHtml({
            name: "<b>evil</b>",
            value: "100",
        });
        expect(html).toContain("&lt;b&gt;evil&lt;/b&gt;");
        expect(html).not.toContain("<b>evil</b>");
    });

    it("escapes value", () => {
        const html = donutChartTooltipHtml({
            name: "Safe",
            value: "<script>alert(1)</script>",
        });
        expect(html).toContain("&lt;script&gt;alert(1)&lt;/script&gt;");
    });

    it("escapes custom tooltip content", () => {
        const custom = '<span class="custom">Custom</span>';
        const html = donutChartTooltipHtml({ name: "A", value: "100", tooltip: custom });
        expect(html).toContain("&lt;span class=&quot;custom&quot;&gt;Custom&lt;/span&gt;");
        expect(html).not.toContain(custom);
    });
});
