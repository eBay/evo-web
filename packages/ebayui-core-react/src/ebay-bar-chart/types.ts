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
    /** Formats tooltip values when a point does not provide a label. */
    tooltipValueFormatter?: (value: number | string) => string;
    /** Formats the tooltip date header. */
    tooltipTitleFormatter?: (value: number | string, dateFormat: typeof Highcharts.dateFormat) => string;
    /** Used to modify the display of the x-axis labels. Accepts Highcharts date format string. Default: "{value:%b %e}" */
    xLabelFormat?: string;
    /** Formats x-axis labels. Receives the raw value and Highcharts.dateFormat. */
    xLabelFormatter?: (value: number | string, dateFormat: typeof Highcharts.dateFormat) => string;
    /** A custom function that returns an array of epoch/unix time values where x-axis labels will be displayed */
    xPositioner?: Highcharts.XAxisOptions["tickPositioner"];
    /** An array of labels to use on the y-axis */
    yLabels?: string[];
    /** Formats y-axis labels. */
    yLabelFormatter?: (value: number | string) => string;
    /** A custom function that returns an array of numeric values where y-axis labels will be displayed */
    yPositioner?: Highcharts.YAxisOptions["tickPositioner"];
    /** @deprecated Use `xLabelFormat` instead. */
    xAxisLabelFormat?: string;
    /** @deprecated Use `xPositioner` instead. */
    xAxisPositioner?: Highcharts.XAxisOptions["tickPositioner"];
    /** @deprecated Use `yLabels` instead. */
    yAxisLabels?: string[];
    /** @deprecated Use `yPositioner` instead. */
    yAxisPositioner?: Highcharts.YAxisOptions["tickPositioner"];
    /** When true, bars stack vertically; when false, bars render side-by-side. Default: false */
    stacked?: boolean;
    /** When true, renders the tooltip outside the chart SVG to prevent clipping. Default: true */
    renderTooltipOutside?: boolean;
};
