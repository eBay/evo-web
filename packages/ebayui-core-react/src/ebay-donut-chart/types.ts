import { ComponentProps, ReactNode } from "react";
import type Highcharts from "highcharts";

export interface DonutSeriesItem extends Omit<Highcharts.SeriesOptions, "type"> {
    data: Highcharts.PointOptionsObject[];
    type?: "pie";
}

export type EbayDonutChartProps = Omit<ComponentProps<"div">, "title"> & {
    title?: ReactNode;
    metricValue?: ReactNode;
    metricLabel?: ReactNode;
    series: DonutSeriesItem[];
    /** Accessible description passed to Highcharts plot options. */
    description?: string;
    /** @deprecated Use `description` instead. */
    highchartsDescription?: string;
    /** Formats tooltip values when a point does not provide tooltip text or a label. */
    tooltipValueFormatter?: (value: number | string) => string;
    /** Formats the tooltip title from the slice name. */
    tooltipTitleFormatter?: (value: number | string) => string;
    /** When true, renders the tooltip outside the chart SVG to prevent clipping. Default: true */
    renderTooltipOutside?: boolean;
};
