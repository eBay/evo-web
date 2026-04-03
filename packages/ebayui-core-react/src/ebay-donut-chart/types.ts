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
    highchartsDescription?: string;
};
