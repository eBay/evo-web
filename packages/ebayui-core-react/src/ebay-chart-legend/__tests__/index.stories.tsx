import { Meta, StoryObj } from "@storybook/react-vite";
import { EbayChartLegend } from "../index";
import type { EbayChartLegendProps, LegendItem } from "../types";

const meta: Meta<typeof EbayChartLegend> = {
    component: EbayChartLegend,
    title: "charts/ebay-chart-legend",
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `Presentational legend component used alongside chart components to display named series with their associated values. Used internally by \`EbayDonutChart\` but can also be used standalone.

## Usage

### Import

\`\`\`jsx harmony
import { EbayChartLegend } from "@ebay/ui-core-react/ebay-chart-legend";
\`\`\`

### Basic

\`\`\`jsx
<EbayChartLegend
    items={[
        { name: "Electronics", value: "$12,345" },
        { name: "Fashion", value: "$8,762" },
        { name: "Home & Garden", value: "$5,431" },
    ]}
/>
\`\`\``,
            },
        },
    },
    argTypes: {
        items: {
            description:
                "Array of legend items. Each item has a `name` (string) and `value` (string, number, or undefined) to display.",
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

const sampleItems: LegendItem[] = [
    { name: "Electronics", value: "$12,345" },
    { name: "Fashion", value: "$8,762" },
    { name: "Home & Garden", value: "$5,431" },
    { name: "Collectibles", value: "$3,210" },
];

export const Default: StoryObj<EbayChartLegendProps> = {
    args: {
        items: sampleItems,
    },
};

export const TwoItems: StoryObj<EbayChartLegendProps> = {
    args: {
        items: sampleItems.slice(0, 2),
    },
};

export const SingleItem: StoryObj<EbayChartLegendProps> = {
    args: {
        items: [{ name: "Total Sales", value: "$42,000" }],
    },
};

export const WithNumericValues: StoryObj<EbayChartLegendProps> = {
    args: {
        items: [
            { name: "Series A", value: 4200 },
            { name: "Series B", value: 3100 },
            { name: "Series C", value: 1800 },
        ],
    },
};
