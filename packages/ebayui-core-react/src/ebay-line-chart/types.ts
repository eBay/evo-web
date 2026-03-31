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
    xAxisLabelFormat?: string;
    xAxisPositioner?: Highcharts.XAxisOptions["tickPositioner"];
    yAxisLabels?: string[];
    yAxisPositioner?: Highcharts.YAxisOptions["tickPositioner"];
    plotPoints?: boolean;
    renderTooltipOutside?: boolean;
    trend?: "positive" | "negative" | "neutral";
};
