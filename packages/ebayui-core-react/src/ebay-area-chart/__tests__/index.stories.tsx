import { Meta, StoryObj } from "@storybook/react-vite";
import { EbayAreaChart } from "../index";
import type { EbayAreaChartProps } from "../types";

const meta: Meta<typeof EbayAreaChart> = {
    component: EbayAreaChart,
    title: "charts/ebay-area-chart",
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `Area chart component powered by Highcharts. Displays time-series data as filled area shapes with support for single or multiple stacked series, custom axis formatting, and interactive tooltips.

## Usage

### Import

\`\`\`jsx harmony
import { EbayAreaChart } from "@ebay/ui-core-react/ebay-area-chart";
\`\`\`

### Basic

\`\`\`jsx
<EbayAreaChart
    series={[{
        name: "Revenue",
        data: [
            { x: 1643673600000, y: 686 },
            { x: 1643760000000, y: 3395 },
        ],
    }]}
/>
\`\`\`

### Multi-series (stacked)

\`\`\`jsx
<EbayAreaChart
    series={[
        { name: "Electronics", data: [...] },
        { name: "Fashion", data: [...] },
    ]}
/>
\`\`\`

### Custom formatters

\`\`\`jsx
<EbayAreaChart
    series={series}
    yLabelFormatter={(v) => \`\${Number(v).toLocaleString()} units\`}
    tooltipValueFormatter={(v) => \`\${v} items\`}
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
        areaType: {
            description:
                'Highcharts series type. Use `"areaspline"` (default) for smooth curves or `"area"` for straight lines between points.',
            control: { type: "select" },
            options: ["areaspline", "area"],
        },
        xLabelFormatter: {
            description: "Custom function to format x-axis labels. Receives the raw value and `Highcharts.dateFormat`.",
            table: { category: "Callbacks" },
        },
        yLabelFormatter: {
            description: "Custom function to format y-axis labels. Defaults to compact USD currency (e.g. `$4.6k`).",
            table: { category: "Callbacks" },
        },
        tooltipValueFormatter: {
            description:
                "Custom function to format the per-series value in the tooltip. Defaults to full USD currency.",
            table: { category: "Callbacks" },
        },
        tooltipTitleFormatter: {
            description:
                'Custom function to format the date header in the tooltip. Defaults to `"Jan 1, 2022"` format.',
            table: { category: "Callbacks" },
        },
        highchartOptions: {
            description:
                "Escape hatch for passing raw Highcharts options. Deep-merged into the default config — use sparingly.",
            control: "object",
        },
    },
    globals: {
        a11y: {
            manual: true,
        },
    },
};

export default meta;

const sampleSeriesData: Highcharts.SeriesAreasplineOptions[] = [
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

function getSeries(count: number): Highcharts.SeriesAreasplineOptions[] {
    return sampleSeriesData.slice(0, count);
}

export const SingleSeries: StoryObj<EbayAreaChartProps> = {
    args: {
        series: getSeries(1),
    },
};

export const TwoSeries: StoryObj<EbayAreaChartProps> = {
    args: {
        series: getSeries(2),
    },
};

export const ThreeSeries: StoryObj<EbayAreaChartProps> = {
    args: {
        series: getSeries(3),
    },
};

export const WithTitle: StoryObj<EbayAreaChartProps> = {
    args: {
        title: "Revenue Over Time",
        description: "Daily revenue breakdown across product categories",
        series: getSeries(2),
    },
};

export const AreaType: StoryObj<EbayAreaChartProps> = {
    args: {
        series: getSeries(2),
        areaType: "area",
    },
};

export const CustomYAxisLabels: StoryObj<EbayAreaChartProps> = {
    args: {
        series: getSeries(1),
        yLabelFormatter: (v) => `${(Number(v) / 1000).toFixed(1)}k units`,
    },
};
