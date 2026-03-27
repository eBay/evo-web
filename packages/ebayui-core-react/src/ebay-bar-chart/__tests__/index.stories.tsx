import { Meta, StoryObj } from "@storybook/react-vite";
import { EbayBarChart } from "../index";
import type { EbayBarChartProps, BarChartSeriesItem } from "../types";

const meta: Meta<typeof EbayBarChart> = {
    component: EbayBarChart,
    title: "charts/ebay-bar-chart",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `Bar chart component powered by Highcharts. Displays time-series data as vertical bars with support for single or multiple series, stacked or grouped layouts, custom axis formatting, and interactive tooltips.

## Usage

### Import

\`\`\`jsx harmony
import { EbayBarChart } from "@ebay/ui-core-react/ebay-bar-chart";
\`\`\`

### Basic

\`\`\`jsx
<EbayBarChart
    series={[{
        name: "Sales",
        data: [
            { x: 1643673600000, y: 686.42, label: "$686.42" },
            { x: 1643760000000, y: 3395.53, label: "$3395.53" },
        ],
    }]}
/>
\`\`\`

### Stacked

\`\`\`jsx
<EbayBarChart
    series={[
        { name: "Product A", data: [...] },
        { name: "Product B", data: [...] },
    ]}
    stacked
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
                "The series data: an array of one to five series objects, each containing `data` points with `x` (epoch time), `y` (numeric value), and optional `label`",
            control: "object",
        },
        xAxisLabelFormat: {
            description: 'Highcharts date format string for x-axis labels. Default: `"{value:%b %e}"`',
            control: "text",
        },
        xAxisPositioner: {
            description:
                "A custom function that returns an array of epoch/unix time values where x-axis labels will be displayed",
            table: { category: "Callbacks" },
        },
        yAxisLabels: {
            description: "An array of labels to use on the y-axis",
            control: "object",
        },
        yAxisPositioner: {
            description:
                "A custom function that returns an array of numeric values where y-axis labels will be displayed",
            table: { category: "Callbacks" },
        },
        stacked: {
            description: "When `true`, bars stack vertically; when `false`, bars render side-by-side. Default: `false`",
            control: "boolean",
        },
    },
    globals: {
        a11y: {
            manual: true,
        },
    },
};

export default meta;

const sampleSeriesData: BarChartSeriesItem[] = [
    {
        name: "Value 1",
        data: [
            { x: 1643673600000, y: 686.42, label: "$686.42" },
            { x: 1643760000000, y: 3395.53, label: "$3395.53" },
            { x: 1643846400000, y: 4623.43, label: "$4623.43" },
            { x: 1643932800000, y: 742.12, label: "$742.12" },
            { x: 1644019200000, y: 4525.82, label: "$4525.82" },
            { x: 1644105600000, y: 1568.92, label: "$1568.92" },
            { x: 1644192000000, y: 3511.5, label: "$3511.5" },
            { x: 1644278400000, y: 313.66, label: "$313.66" },
            { x: 1644364800000, y: 653.18, label: "$653.18" },
            { x: 1644451200000, y: 3117, label: "$3117" },
            { x: 1644537600000, y: 4497.92, label: "$4497.92" },
            { x: 1644624000000, y: 4206.77, label: "$4206.77" },
            { x: 1644710400000, y: 4640.38, label: "$4640.38" },
            { x: 1644796800000, y: 1849.15, label: "$1849.15" },
            { x: 1644883200000, y: 4105.95, label: "$4105.95" },
            { x: 1644969600000, y: 2996.36, label: "$2996.36" },
            { x: 1645056000000, y: 2358.2, label: "$2358.2" },
            { x: 1645142400000, y: 3641.09, label: "$3641.09" },
            { x: 1645228800000, y: 3654.44, label: "$3654.44" },
            { x: 1645315200000, y: 1418.79, label: "$1418.79" },
            { x: 1645401600000, y: 207.46, label: "$207.46" },
            { x: 1645488000000, y: 1606.93, label: "$1606.93" },
            { x: 1645574400000, y: 604.25, label: "$604.25" },
            { x: 1645660800000, y: 3205.45, label: "$3205.45" },
        ],
    },
    {
        name: "Value 2",
        data: [
            { x: 1643673600000, y: 2016.88, label: "$2016.88" },
            { x: 1643760000000, y: 3035.94, label: "$3035.94" },
            { x: 1643846400000, y: 1452.5, label: "$1452.5" },
            { x: 1643932800000, y: 582.67, label: "$582.67" },
            { x: 1644019200000, y: 1283.86, label: "$1283.86" },
            { x: 1644105600000, y: 3912.73, label: "$3912.73" },
            { x: 1644192000000, y: 2448.16, label: "$2448.16" },
            { x: 1644278400000, y: 717.37, label: "$717.37" },
            { x: 1644364800000, y: 590.24, label: "$590.24" },
            { x: 1644451200000, y: 1308.96, label: "$1308.96" },
            { x: 1644537600000, y: 3744.15, label: "$3744.15" },
            { x: 1644624000000, y: 1693.57, label: "$1693.57" },
            { x: 1644710400000, y: 4594.56, label: "$4594.56" },
            { x: 1644796800000, y: 3426.48, label: "$3426.48" },
            { x: 1644883200000, y: 2364.75, label: "$2364.75" },
            { x: 1644969600000, y: 3338.47, label: "$3338.47" },
            { x: 1645056000000, y: 2217.38, label: "$2217.38" },
            { x: 1645142400000, y: 4269.42, label: "$4269.42" },
            { x: 1645228800000, y: 1811.27, label: "$1811.27" },
            { x: 1645315200000, y: 4247.46, label: "$4247.46" },
            { x: 1645401600000, y: 3230.72, label: "$3230.72" },
            { x: 1645488000000, y: 236.64, label: "$236.64" },
            { x: 1645574400000, y: 2960.39, label: "$2960.39" },
            { x: 1645660800000, y: 720.03, label: "$720.03" },
        ],
    },
    {
        name: "Value 3",
        data: [
            { x: 1643673600000, y: 3744.38, label: "$3744.38" },
            { x: 1643760000000, y: 4091.42, label: "$4091.42" },
            { x: 1643846400000, y: 1269.12, label: "$1269.12" },
            { x: 1643932800000, y: 4966.14, label: "$4966.14" },
            { x: 1644019200000, y: 1268.94, label: "$1268.94" },
            { x: 1644105600000, y: 4357.47, label: "$4357.47" },
            { x: 1644192000000, y: 3517.96, label: "$3517.96" },
            { x: 1644278400000, y: 4678.7, label: "$4678.7" },
            { x: 1644364800000, y: 4080.55, label: "$4080.55" },
            { x: 1644451200000, y: 1224.7, label: "$1224.7" },
            { x: 1644537600000, y: 356.99, label: "$356.99" },
            { x: 1644624000000, y: 1534.12, label: "$1534.12" },
            { x: 1644710400000, y: 328.14, label: "$328.14" },
            { x: 1644796800000, y: 4199.1, label: "$4199.1" },
            { x: 1644883200000, y: 4078.09, label: "$4078.09" },
            { x: 1644969600000, y: 1475.89, label: "$1475.89" },
            { x: 1645056000000, y: 2874.13, label: "$2874.13" },
            { x: 1645142400000, y: 2888.78, label: "$2888.78" },
            { x: 1645228800000, y: 658.46, label: "$658.46" },
            { x: 1645315200000, y: 2050.67, label: "$2050.67" },
            { x: 1645401600000, y: 1971.17, label: "$1971.17" },
            { x: 1645488000000, y: 4168.71, label: "$4168.71" },
            { x: 1645574400000, y: 425.5, label: "$425.5" },
            { x: 1645660800000, y: 3665.67, label: "$3665.67" },
        ],
    },
    {
        name: "Value 4",
        data: [
            { x: 1643673600000, y: 3840.06, label: "$3840.06" },
            { x: 1643760000000, y: 4828.12, label: "$4828.12" },
            { x: 1643846400000, y: 2265.45, label: "$2265.45" },
            { x: 1643932800000, y: 4496.69, label: "$4496.69" },
            { x: 1644019200000, y: 4393.03, label: "$4393.03" },
            { x: 1644105600000, y: 624.28, label: "$624.28" },
            { x: 1644192000000, y: 3722.88, label: "$3722.88" },
            { x: 1644278400000, y: 4590.79, label: "$4590.79" },
            { x: 1644364800000, y: 1679.32, label: "$1679.32" },
            { x: 1644451200000, y: 4748.64, label: "$4748.64" },
            { x: 1644537600000, y: 1822.92, label: "$1822.92" },
            { x: 1644624000000, y: 1384.22, label: "$1384.22" },
            { x: 1644710400000, y: 2966.97, label: "$2966.97" },
            { x: 1644796800000, y: 4730.39, label: "$4730.39" },
            { x: 1644883200000, y: 3929.62, label: "$3929.62" },
            { x: 1644969600000, y: 3731.83, label: "$3731.83" },
            { x: 1645056000000, y: 4785.14, label: "$4785.14" },
            { x: 1645142400000, y: 2657.6, label: "$2657.6" },
            { x: 1645228800000, y: 4816.07, label: "$4816.07" },
            { x: 1645315200000, y: 4493.61, label: "$4493.61" },
            { x: 1645401600000, y: 2887.25, label: "$2887.25" },
            { x: 1645488000000, y: 1905.9, label: "$1905.9" },
            { x: 1645574400000, y: 706.83, label: "$706.83" },
            { x: 1645660800000, y: 1516, label: "$1516" },
        ],
    },
    {
        name: "Value 5",
        data: [
            { x: 1643673600000, y: 3510.98, label: "$3510.98" },
            { x: 1643760000000, y: 2558.58, label: "$2558.58" },
            { x: 1643846400000, y: 2028.93, label: "$2028.93" },
            { x: 1643932800000, y: 3998.57, label: "$3998.57" },
            { x: 1644019200000, y: 1234.8, label: "$1234.8" },
            { x: 1644105600000, y: 3512.28, label: "$3512.28" },
            { x: 1644192000000, y: 554.04, label: "$554.04" },
            { x: 1644278400000, y: 4934.67, label: "$4934.67" },
            { x: 1644364800000, y: 3190.14, label: "$3190.14" },
            { x: 1644451200000, y: 2894.57, label: "$2894.57" },
            { x: 1644537600000, y: 68.99, label: "$68.99" },
            { x: 1644624000000, y: 3051.49, label: "$3051.49" },
            { x: 1644710400000, y: 1766.32, label: "$1766.32" },
            { x: 1644796800000, y: 1998.19, label: "$1998.19" },
            { x: 1644883200000, y: 3695.29, label: "$3695.29" },
            { x: 1644969600000, y: 46.56, label: "$46.56" },
            { x: 1645056000000, y: 3877.75, label: "$3877.75" },
            { x: 1645142400000, y: 2752.76, label: "$2752.76" },
            { x: 1645228800000, y: 4341.6, label: "$4341.6" },
            { x: 1645315200000, y: 1836.76, label: "$1836.76" },
            { x: 1645401600000, y: 346.63, label: "$346.63" },
            { x: 1645488000000, y: 1149.93, label: "$1149.93" },
            { x: 1645574400000, y: 4566.77, label: "$4566.77" },
            { x: 1645660800000, y: 4337.08, label: "$4337.08" },
        ],
    },
];

function getSeriesData(seriesCount: number, days: number): BarChartSeriesItem[] {
    return sampleSeriesData.slice(0, seriesCount).map((s) => ({
        ...s,
        data: s.data.slice(0, days),
    }));
}

// Single series stories
export const SingleSeriesFiveDays: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(1, 5),
    },
};

export const SingleSeriesThirteenDays: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(1, 13),
    },
};

export const SingleSeriesTwentyFourDays: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(1, 24),
    },
};

// Multi-series stories
export const TwoSeriesEightDays: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(2, 8),
    },
};

export const ThreeSeriesThreeDays: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(3, 3),
    },
};

export const FourSeriesFourDays: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(4, 4),
    },
};

export const FiveSeriesThreeDays: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(5, 3),
    },
};

export const FiveSeriesSixDays: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(5, 6),
    },
};

// Stacked series stories
export const TwoSeriesStacked: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(2, 24),
        stacked: true,
    },
};

export const ThreeSeriesStacked: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(3, 24),
        stacked: true,
    },
};

export const FourSeriesStacked: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(4, 24),
        stacked: true,
    },
};

export const FiveSeriesStacked: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(5, 24),
        stacked: true,
    },
};

// With title and description
export const WithTitle: StoryObj<EbayBarChartProps> = {
    args: {
        title: "Revenue Over Time",
        description: "Daily revenue breakdown across product categories",
        series: getSeriesData(3, 8),
    },
};

// Custom x-axis format
export const CustomXAxisFormat: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(2, 12),
        xAxisLabelFormat: "{value:%b %e, %Y}",
    },
};

// Custom y-axis labels
export const CustomYAxisLabels: StoryObj<EbayBarChartProps> = {
    args: {
        series: getSeriesData(1, 8),
        yAxisLabels: ["$0", "$1k", "$2k", "$3k", "$4k", "$5k"],
    },
};
