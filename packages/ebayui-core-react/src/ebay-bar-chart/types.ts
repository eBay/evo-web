import { ComponentProps } from "react";
import type Highcharts from "highcharts";

export interface BarChartDataPoint extends Highcharts.PointOptionsObject {
    x: number;
    y: number;
    label?: string;
}

export interface BarChartSeriesItem {
    data: BarChartDataPoint[];
    name?: string;
    type?: string;
    top?: boolean;
    bottom?: boolean;
    group?: string;
    borderColor?: string;
    color?: string | { pattern: Record<string, unknown> };
    lineColor?: string;
    fillOpacity?: number;
}

export type EbayBarChartProps = Omit<ComponentProps<"div">, "title"> & {
    /** A title displayed above the graph */
    title?: string;
    /** A description of what the chart is displaying (for accessibility) */
    description?: string;
    /** The series data: an array of one to five series objects, each containing data points with x (epoch time), y (numeric value), and optional label */
    series: BarChartSeriesItem | BarChartSeriesItem[];
    /** Used to modify the display of the x-axis labels. Accepts Highcharts date format string. Default: "{value:%b %e}" */
    xAxisLabelFormat?: string;
    /** A custom function that returns an array of epoch/unix time values where x-axis labels will be displayed */
    xAxisPositioner?: () => number[];
    /** An array of labels to use on the y-axis */
    yAxisLabels?: string[];
    /** A custom function that returns an array of numeric values where y-axis labels will be displayed */
    yAxisPositioner?: () => number[];
    /** When true, bars stack vertically; when false, bars render side-by-side. Default: false */
    stacked?: boolean;
};
