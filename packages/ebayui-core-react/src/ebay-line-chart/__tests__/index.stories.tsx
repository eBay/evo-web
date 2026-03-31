import { Meta, StoryObj } from "@storybook/react-vite";
import { EbayLineChart } from "../index";
import type { EbayLineChartProps, LineChartSeriesItem } from "../types";

const meta: Meta<typeof EbayLineChart> = {
    component: EbayLineChart,
    title: "charts/ebay-line-chart",
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `Line chart component powered by Highcharts. Displays time-series data as lines with support for single or multiple series, trend color indicators, tick-aligned plot points, and interactive hover markers.

## Usage

### Import

\`\`\`jsx harmony
import { EbayLineChart } from "@ebay/ui-core-react/ebay-line-chart";
\`\`\`

### Basic

\`\`\`jsx
<EbayLineChart
    series={[{
        name: "Revenue",
        data: [
            { x: 1643673600000, y: 686 },
            { x: 1643760000000, y: 3395 },
        ],
    }]}
/>
\`\`\`

### With trend indicator

\`\`\`jsx
<EbayLineChart
    series={series}
    trend="positive"
/>
\`\`\`

### With plot points at tick marks

\`\`\`jsx
<EbayLineChart
    series={series}
    plotPoints
/>
\`\`\``,
            },
        },
    },
    argTypes: {
        title: {
            description: "A title displayed above the chart",
            control: "text",
        },
        description: {
            description: "A description of what the chart is displaying (for accessibility)",
            control: "text",
        },
        series: {
            description:
                "The series data: a single series or an array of up to five series objects, each containing `data` points with `x` (epoch time) and `y` (numeric value)",
            control: "object",
        },
        trend: {
            description:
                'Sets the color of the first series to indicate trend direction. `"positive"` uses green, `"negative"` uses red, `"neutral"` uses the default color. If omitted, trend direction is auto-detected from the first and last `y` values.',
            control: { type: "select" },
            options: ["positive", "negative", "neutral"],
        },
        plotPoints: {
            description:
                "When `true`, renders visible markers at x-axis tick positions. Markers appear on hover between tick positions.",
            control: "boolean",
        },
        renderTooltipOutside: {
            description: "When `true` (default), renders the tooltip outside the chart SVG to prevent clipping.",
            control: "boolean",
        },
        xAxisLabelFormat: {
            description: 'Highcharts date format string for x-axis labels. Default: `"{value:%b %e}"`',
            control: "text",
        },
        xAxisPositioner: {
            description: "A custom function that returns an array of epoch/unix time values for x-axis tick positions",
            table: { category: "Callbacks" },
        },
        yAxisLabels: {
            description: "An array of custom labels to use on the y-axis, ordered from lowest to highest tick",
            control: "object",
        },
        yAxisPositioner: {
            description: "A custom function that returns an array of numeric values for y-axis tick positions",
            table: { category: "Callbacks" },
        },
    },
    globals: {
        a11y: {
            manual: true,
        },
    },
};

export default meta;

const sampleSeriesData: LineChartSeriesItem[] = [
    {
        name: "Electronics",
        data: [
            { x: 1643673600000, y: 686 },
            { x: 1643760000000, y: 3395 },
            { x: 1643846400000, y: 4623 },
            { x: 1643932800000, y: 742 },
            { x: 1644019200000, y: 4525 },
            { x: 1644105600000, y: 1568 },
            { x: 1644192000000, y: 3511 },
            { x: 1644278400000, y: 313 },
            { x: 1644364800000, y: 653 },
            { x: 1644451200000, y: 3117 },
            { x: 1644537600000, y: 4497 },
            { x: 1644624000000, y: 4206 },
            { x: 1644710400000, y: 4640 },
            { x: 1644796800000, y: 1849 },
        ],
    },
    {
        name: "Fashion",
        data: [
            { x: 1643673600000, y: 2016 },
            { x: 1643760000000, y: 3035 },
            { x: 1643846400000, y: 1452 },
            { x: 1643932800000, y: 582 },
            { x: 1644019200000, y: 1283 },
            { x: 1644105600000, y: 3912 },
            { x: 1644192000000, y: 2448 },
            { x: 1644278400000, y: 717 },
            { x: 1644364800000, y: 590 },
            { x: 1644451200000, y: 1308 },
            { x: 1644537600000, y: 3744 },
            { x: 1644624000000, y: 1693 },
            { x: 1644710400000, y: 4594 },
            { x: 1644796800000, y: 3426 },
        ],
    },
    {
        name: "Home & Garden",
        data: [
            { x: 1643673600000, y: 3744 },
            { x: 1643760000000, y: 4091 },
            { x: 1643846400000, y: 1269 },
            { x: 1643932800000, y: 4966 },
            { x: 1644019200000, y: 1268 },
            { x: 1644105600000, y: 4357 },
            { x: 1644192000000, y: 3517 },
            { x: 1644278400000, y: 4678 },
            { x: 1644364800000, y: 4080 },
            { x: 1644451200000, y: 1224 },
            { x: 1644537600000, y: 356 },
            { x: 1644624000000, y: 1534 },
            { x: 1644710400000, y: 328 },
            { x: 1644796800000, y: 4199 },
        ],
    },
];

function getSeries(count: number): LineChartSeriesItem[] {
    return sampleSeriesData.slice(0, count);
}

export const SingleSeries: StoryObj<EbayLineChartProps> = {
    args: {
        series: getSeries(1),
    },
};

export const TwoSeries: StoryObj<EbayLineChartProps> = {
    args: {
        series: getSeries(2),
    },
};

export const ThreeSeries: StoryObj<EbayLineChartProps> = {
    args: {
        series: getSeries(3),
    },
};

export const WithTitle: StoryObj<EbayLineChartProps> = {
    args: {
        title: "Revenue Over Time",
        description: "Daily revenue trends across product categories",
        series: getSeries(2),
    },
};

export const TrendPositive: StoryObj<EbayLineChartProps> = {
    args: {
        series: getSeries(1),
        trend: "positive",
    },
};

export const TrendNegative: StoryObj<EbayLineChartProps> = {
    args: {
        series: [
            {
                name: "Declining Revenue",
                data: [
                    { x: 1643673600000, y: 4640 },
                    { x: 1643760000000, y: 4206 },
                    { x: 1643846400000, y: 4497 },
                    { x: 1643932800000, y: 3117 },
                    { x: 1644019200000, y: 653 },
                    { x: 1644105600000, y: 313 },
                    { x: 1644192000000, y: 1568 },
                    { x: 1644278400000, y: 742 },
                ],
            },
        ],
        trend: "negative",
    },
};

export const TrendNeutral: StoryObj<EbayLineChartProps> = {
    args: {
        series: getSeries(1),
        trend: "neutral",
    },
};

export const WithPlotPoints: StoryObj<EbayLineChartProps> = {
    args: {
        series: getSeries(2),
        plotPoints: true,
    },
};

export const CustomYAxisLabels: StoryObj<EbayLineChartProps> = {
    args: {
        series: getSeries(1),
        yAxisLabels: ["$0", "$1k", "$2k", "$3k", "$4k", "$5k"],
    },
};

export const CustomXAxisFormat: StoryObj<EbayLineChartProps> = {
    args: {
        series: getSeries(1),
        xAxisLabelFormat: "{value:%b %e, %Y}",
    },
};
