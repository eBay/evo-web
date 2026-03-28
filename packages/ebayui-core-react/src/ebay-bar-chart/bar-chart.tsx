import React, { FC, useMemo } from "react";
import classNames from "classnames";
import type Highcharts from "highcharts";
import { Chart, Series } from "@highcharts/react";
import {
    chartFontFamily,
    backgroundColor,
    gridColor,
    labelsColor,
    legendColor,
    legendInactiveColor,
    legendHoverColor,
    tooltipBackgroundColor,
    tooltipShadows,
    setSeriesColors,
    colorMapping,
} from "../common/charts/shared";
import { ebayLegend } from "../common/charts/legend";
import { eBayColumns } from "../common/charts/bar-chart";
import type { ColumnPointInternal, EbayColumnSeriesOptions } from "../common/charts/bar-chart";
import highcharts from "../common/charts/load-highcharts";
import { barChartTooltipHtml } from "./bar-chart-tooltip";
import type { EbayBarChartProps, BarChartSeriesItem } from "./types";

// Initialize Highcharts extensions once at module level.
ebayLegend(highcharts);
eBayColumns(highcharts);

const BAR_CHART_STYLES = `
    .ebay-bar-chart {
        width: 100%;
    }
    .ebay-bar-chart .highcharts-legend-item-hidden {
        transition: fill 250ms;
    }
    .ebay-bar-chart .highcharts-legend-item-hidden .highcharts-point {
        stroke-width: 0;
    }
    .highcharts-tooltip-container svg {
        overflow: visible;
    }
`;

/** Normalize the series prop into an array and apply stacking / color metadata. */
function prepareSeries(seriesProp: BarChartSeriesItem | BarChartSeriesItem[], stacked: boolean): BarChartSeriesItem[] {
    const series: BarChartSeriesItem[] = Array.isArray(seriesProp)
        ? seriesProp.map((s) => ({ ...s }))
        : [{ ...seriesProp }];

    if (stacked) {
        series[0].bottom = true;
        series[series.length - 1].top = true;
        series.forEach((s) => {
            s.group = ":previous";
        });
    } else {
        series.forEach((s) => {
            s.top = true;
            s.bottom = true;
        });
    }

    setSeriesColors(series as Highcharts.SeriesOptions[]);
    return series;
}

/** Compute the max data value across all series. */
function getMaxValue(series: BarChartSeriesItem[]): number {
    return Math.max(0, ...series.flatMap((serie) => serie.data.map((data) => data.y)));
}

function getXAxisConfig(xAxisLabelFormat?: string, xAxisPositioner?: () => number[]): Highcharts.XAxisOptions {
    return {
        type: "datetime",
        labels: {
            format: xAxisLabelFormat || "{value:%b %e}",
            align: "center",
            style: { color: labelsColor },
        },
        tickWidth: 0,
        tickPositioner: xAxisPositioner,
    };
}

function getYAxisConfig(
    maxVal: number,
    yAxisLabels?: string[],
    yAxisPositioner?: () => number[],
): Highcharts.YAxisOptions {
    let yLabelsIterator = 0;

    return {
        gridLineColor: gridColor,
        opposite: true,
        reversedStacks: false,
        labels: {
            format: yAxisLabels ? undefined : "${text}",
            formatter: yAxisLabels
                ? function (this: Highcharts.AxisLabelsFormatterContextObject) {
                      if (this.isFirst) {
                          yLabelsIterator = -1;
                      }
                      yLabelsIterator = yLabelsIterator + 1;
                      return yAxisLabels[yLabelsIterator] as string;
                  }
                : undefined,
            style: { color: labelsColor },
        },
        max: maxVal,
        title: { enabled: false } as Highcharts.YAxisTitleOptions,
        offset: 0,
        tickPositioner: yAxisPositioner,
    };
}

function getLegendConfig(seriesProp: BarChartSeriesItem | BarChartSeriesItem[]): Highcharts.LegendOptions {
    return {
        symbolRadius: 2,
        enabled: Array.isArray(seriesProp) && seriesProp.length > 1,
        itemStyle: { color: legendColor },
        itemHiddenStyle: { color: legendInactiveColor },
        itemHoverStyle: { color: legendHoverColor },
    };
}

function getTooltipConfig(hc: typeof highcharts, stacked: boolean): Highcharts.TooltipOptions {
    const formatter: Highcharts.TooltipFormatterCallbackFunction = function (this: Highcharts.Point) {
        const chartSeries = this.series.chart.series;
        const date = hc.dateFormat("%b %e, %Y", this.x as number, false);
        const xVal = this.x as number;

        if (stacked) {
            return barChartTooltipHtml({ date, data: chartSeries, stacked: true, x: xVal });
        }
        return barChartTooltipHtml({
            date,
            data: this as Highcharts.Point & { label?: string },
            stacked: false,
            x: xVal,
        });
    };

    const positioner: Highcharts.TooltipPositionerCallbackFunction = function (
        this: Highcharts.Tooltip,
        labelWidth: number,
        labelHeight: number,
    ): Highcharts.PositionObject {
        const chart = this.chart;
        const chartSeries = chart.series;
        const chartPosition = chart.pointer.getChartPosition();
        const hoverPoint = chart.hoverPoint!;
        const hpIndex = hoverPoint.index;
        const hpInternal = hoverPoint as unknown as ColumnPointInternal;
        const lastSeriesPoint = chartSeries[chartSeries.length - 1].data[hpIndex] as unknown as ColumnPointInternal;

        const yAxisTop = (hoverPoint.series.yAxis as Highcharts.Axis & { top: number }).top;
        const y = chartPosition.top + yAxisTop + lastSeriesPoint.shapeY - labelHeight - 15;

        let x = chartPosition.left + hpInternal.dlBox.x + hpInternal.dlBox.width * 0.5 - labelWidth * 0.5 + 3;
        if (x < 6) {
            x = 6;
        }
        if (x + hpInternal.dlBox.width > chartPosition.left + chart.chartWidth - 6) {
            x = chartPosition.left + chart.chartWidth - hpInternal.dlBox.width - 6;
        }

        return { x, y };
    };

    return {
        formatter,
        useHTML: true,
        backgroundColor: tooltipBackgroundColor,
        borderWidth: 0,
        borderRadius: 10,
        outside: true,
        shadow: false,
        style: { filter: tooltipShadows, fontSize: "12px" },
        positioner: stacked ? positioner : undefined,
    };
}

function getColumnPlotOptions(stacked: boolean, description?: string): Highcharts.PlotOptions {
    const legendItemClickHandler: Highcharts.SeriesLegendItemClickCallbackFunction = function (
        this: Highcharts.Series,
    ) {
        const chartSeries = this.chart.series;
        if (stacked) {
            setTimeout(() => {
                let topFound = false;
                let bottomFound = false;

                for (let i = 0; i < chartSeries.length; i++) {
                    const opts = chartSeries[i].options as EbayColumnSeriesOptions;
                    if (!bottomFound && chartSeries[i].visible) {
                        opts.bottom = true;
                        bottomFound = true;
                    } else {
                        opts.bottom = false;
                    }
                }

                for (let i = chartSeries.length - 1; i >= 0; i--) {
                    const opts = chartSeries[i].options as EbayColumnSeriesOptions;
                    if (!topFound && chartSeries[i].visible) {
                        opts.top = true;
                        topFound = true;
                    } else {
                        opts.top = false;
                    }
                }
                this.chart.redraw();
            }, 0);
        }
    };

    const mouseOverHandler: Highcharts.PointMouseOverCallbackFunction = function (this: Highcharts.Point) {
        const chart = this.series.chart;
        chart.series.forEach((s: Highcharts.Series) =>
            s.points.forEach((p: Highcharts.Point) => {
                if ((stacked && p.x !== this.x) || (!stacked && p !== this)) {
                    p.update({ opacity: 0.2 } as Highcharts.PointOptionsObject, false);
                }
            }),
        );
        chart.redraw();
    };

    function mouseOutHandler(this: Highcharts.Point): void {
        const chart = this.series.chart;
        chart.series.forEach((s: Highcharts.Series) =>
            s.points.forEach((p: Highcharts.Point) => p.update({ opacity: 1 } as Highcharts.PointOptionsObject, false)),
        );
        chart.redraw();
    }

    return {
        series: { description },
        column: {
            events: { legendItemClick: legendItemClickHandler },
            stacking: stacked ? "normal" : undefined,
            groupPadding: 0.1,
            pointPadding: 0.15,
            states: { inactive: { opacity: 1 } },
            point: {
                events: {
                    mouseOver: mouseOverHandler,
                    mouseOut: mouseOutHandler,
                },
            },
        },
    };
}

function buildChartOptions(
    hc: typeof highcharts,
    props: Pick<
        EbayBarChartProps,
        | "description"
        | "series"
        | "xAxisLabelFormat"
        | "xAxisPositioner"
        | "yAxisLabels"
        | "yAxisPositioner"
        | "stacked"
    >,
    preparedSeries: BarChartSeriesItem[],
): Highcharts.Options {
    const {
        description,
        series: seriesProp,
        xAxisLabelFormat,
        xAxisPositioner,
        yAxisLabels,
        yAxisPositioner,
        stacked = false,
    } = props;

    return {
        chart: {
            type: "column",
            backgroundColor,
            style: { fontFamily: chartFontFamily },
        },
        colors: colorMapping,
        xAxis: getXAxisConfig(xAxisLabelFormat, xAxisPositioner),
        yAxis: getYAxisConfig(getMaxValue(preparedSeries), yAxisLabels, yAxisPositioner),
        legend: getLegendConfig(seriesProp),
        tooltip: getTooltipConfig(hc, stacked),
        plotOptions: getColumnPlotOptions(stacked, description),
        credits: { enabled: false },
    };
}

const EbayBarChart: FC<EbayBarChartProps> = ({
    title,
    description,
    series,
    xAxisLabelFormat,
    xAxisPositioner,
    yAxisLabels,
    yAxisPositioner,
    stacked = false,
    className,
    ...rest
}) => {
    const preparedSeries = useMemo(() => prepareSeries(series, stacked), [series, stacked]);

    const chartOptions = useMemo(
        () =>
            buildChartOptions(
                highcharts,
                {
                    description,
                    series,
                    xAxisLabelFormat,
                    xAxisPositioner,
                    yAxisLabels,
                    yAxisPositioner,
                    stacked,
                },
                preparedSeries,
            ),
        [description, series, xAxisLabelFormat, xAxisPositioner, yAxisLabels, yAxisPositioner, stacked, preparedSeries],
    );

    return (
        <>
            <style>{BAR_CHART_STYLES}</style>
            <div {...rest} className={classNames("ebay-bar-chart", className)}>
                <Chart highcharts={highcharts} title={title} options={chartOptions}>
                    {preparedSeries.map((serie, i) => (
                        <Series
                            key={serie.name || i}
                            type="column"
                            data={serie.data as unknown as number[]}
                            options={
                                {
                                    type: "column",
                                    name: serie.name,
                                    color: serie.color,
                                    borderColor: serie.borderColor,
                                    lineColor: serie.lineColor,
                                    fillOpacity: serie.fillOpacity,
                                    top: serie.top,
                                    bottom: serie.bottom,
                                    group: serie.group,
                                } as EbayColumnSeriesOptions
                            }
                        />
                    ))}
                </Chart>
            </div>
        </>
    );
};

export default EbayBarChart;
