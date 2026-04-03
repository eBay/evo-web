import { ComponentProps } from "react";
import type Highcharts from "highcharts";

type EbayAreaChartBaseProps = Omit<ComponentProps<"div">, "title"> & {
    title?: string;
    description?: string;
    tooltipValueFormatter?: (value: number | string) => string;
    tooltipTitleFormatter?: (value: number | string, dateFormat: typeof Highcharts.dateFormat) => string;
    xLabelFormatter?: (value: number | string, dateFormat: typeof Highcharts.dateFormat) => string;
    yLabelFormatter?: (value: number | string) => string;
    highchartOptions?: Highcharts.Options;
};

export type EbayAreaChartProps =
    | (EbayAreaChartBaseProps & {
          areaType: "area";
          series: Highcharts.SeriesAreaOptions | Highcharts.SeriesAreaOptions[];
      })
    | (EbayAreaChartBaseProps & {
          areaType?: "areaspline";
          series: Highcharts.SeriesAreasplineOptions | Highcharts.SeriesAreasplineOptions[];
      });
