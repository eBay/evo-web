import { ComponentProps } from "react";
import type Highcharts from "highcharts";

export type EbayAreaChartProps = Omit<ComponentProps<"div">, "title"> & {
    title?: string;
    description?: string;
    series: Highcharts.SeriesAreasplineOptions | Highcharts.SeriesAreasplineOptions[];
    tooltipValueFormatter?: (value: number | string) => string;
    tooltipTitleFormatter?: (value: number | string, dateFormat: typeof Highcharts.dateFormat) => string;
    xLabelFormatter?: (value: number | string, dateFormat: typeof Highcharts.dateFormat) => string;
    yLabelFormatter?: (value: number | string) => string;
    areaType?: "areaspline" | "area";
    highchartOptions?: Highcharts.Options;
};
