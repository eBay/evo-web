import { ComponentProps } from "react";
import type Highcharts from "highcharts";

type EbayAreaChartBaseProps = Omit<ComponentProps<"div">, "title"> & {
    title?: string;
    description?: string;
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
    renderTooltipOutside?: boolean;
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
