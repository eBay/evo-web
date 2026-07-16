import { ComponentProps } from "react";
import type Highcharts from "highcharts";

export interface LineChartSeriesItem {
    data: Highcharts.PointOptionsObject[];
    type?: "line";
    marker?: Highcharts.PointMarkerOptionsObject;
    name?: string;
}

export type EbayLineChartProps = Omit<ComponentProps<"div">, "title"> & {
    title?: string;
    description?: string;
    series: LineChartSeriesItem | LineChartSeriesItem[];
    tooltipValueFormatter?: (value: number | string) => string;
    tooltipTitleFormatter?: (value: number | string, dateFormat: typeof Highcharts.dateFormat) => string;
    xLabelFormat?: string;
    xLabelFormatter?: (value: number | string, dateFormat: typeof Highcharts.dateFormat) => string;
    xPositioner?: Highcharts.XAxisOptions["tickPositioner"];
    yLabels?: string[];
    yLabelFormatter?: (value: number | string) => string;
    yPositioner?: Highcharts.YAxisOptions["tickPositioner"];
    /** @deprecated Use `xLabelFormat` instead. */
    xAxisLabelFormat?: string;
    /** @deprecated Use `xPositioner` instead. */
    xAxisPositioner?: Highcharts.XAxisOptions["tickPositioner"];
    /** @deprecated Use `yLabels` instead. */
    yAxisLabels?: string[];
    /** @deprecated Use `yPositioner` instead. */
    yAxisPositioner?: Highcharts.YAxisOptions["tickPositioner"];
    plotPoints?: boolean;
    renderTooltipOutside?: boolean;
    trend?: "positive" | "negative" | "neutral";
};
