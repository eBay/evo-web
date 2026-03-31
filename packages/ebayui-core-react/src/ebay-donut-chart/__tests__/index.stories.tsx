import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { EbayDonutChart } from "../index";
import type { EbayDonutChartProps, DonutSeriesItem } from "../types";

const meta: Meta<typeof EbayDonutChart> = {
    component: EbayDonutChart,
    title: "charts/ebay-donut-chart",
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `Donut chart component powered by Highcharts. Displays a single series as a ring chart with arc spacing between slices, an optional title, optional metric value and label, and an integrated legend.

## Usage

### Import

\`\`\`jsx harmony
import { EbayDonutChart } from "@ebay/ui-core-react/ebay-donut-chart";
\`\`\`

### Basic

\`\`\`jsx
<EbayDonutChart
    series={[{
        data: [
            { name: "Electronics", y: 400 },
            { name: "Fashion", y: 300 },
            { name: "Home & Garden", y: 200 },
        ],
    }]}
/>
\`\`\`

### With title and metric

\`\`\`jsx
<EbayDonutChart
    title="Category Sales"
    metricValue="$12,345"
    metricLabel="Total Revenue"
    series={series}
/>
\`\`\``,
            },
        },
    },
    argTypes: {
        title: {
            description: "Title displayed above the chart. Accepts a string or any React node.",
            control: "text",
        },
        metricValue: {
            description:
                "Large value displayed in the metric section (e.g. a total dollar amount). Accepts a string or any React node.",
            control: "text",
        },
        metricLabel: {
            description:
                'Label displayed below `metricValue` (e.g. `"Total Revenue"`). Accepts a string or any React node.',
            control: "text",
        },
        series: {
            description:
                "Array of series data. Only the first series is rendered — each data point requires `name` (string) and `y` (numeric value).",
            control: "object",
        },
        highchartsDescription: {
            description: "Accessible description passed to the Highcharts plot options for screen readers.",
            control: "text",
        },
    },
    globals: {
        a11y: {
            manual: true,
        },
    },
};

export default meta;

const sampleSeries: DonutSeriesItem[] = [
    {
        data: [
            { name: "Electronics", y: 400 },
            { name: "Fashion", y: 300 },
            { name: "Home & Garden", y: 200 },
            { name: "Collectibles", y: 100 },
        ],
    },
];

export const Default: StoryObj<EbayDonutChartProps> = {
    args: {
        series: sampleSeries,
    },
};

export const WithTitle: StoryObj<EbayDonutChartProps> = {
    args: {
        title: "Category Sales",
        series: sampleSeries,
    },
};

export const WithMetric: StoryObj<EbayDonutChartProps> = {
    args: {
        metricValue: "$12,345",
        metricLabel: "Total Revenue",
        series: sampleSeries,
    },
};

export const WithTitleAndMetric: StoryObj<EbayDonutChartProps> = {
    args: {
        title: "Category Sales",
        metricValue: "$12,345",
        metricLabel: "Total Revenue",
        series: sampleSeries,
    },
};

export const WithReactNodeTitle: StoryObj<EbayDonutChartProps> = {
    render: (args) => (
        <EbayDonutChart {...args} title={<span style={{ fontStyle: "italic" }}>Category Breakdown</span>} />
    ),
    args: {
        series: sampleSeries,
    },
};

export const TwoSlices: StoryObj<EbayDonutChartProps> = {
    args: {
        series: [
            {
                data: [
                    { name: "Sold", y: 750 },
                    { name: "Unsold", y: 250 },
                ],
            },
        ],
        metricValue: "75%",
        metricLabel: "Sell-through rate",
    },
};

export const FiveSlices: StoryObj<EbayDonutChartProps> = {
    args: {
        series: [
            {
                data: [
                    { name: "Electronics", y: 400 },
                    { name: "Fashion", y: 300 },
                    { name: "Home & Garden", y: 200 },
                    { name: "Collectibles", y: 100 },
                    { name: "Motors", y: 150 },
                ],
            },
        ],
    },
};
