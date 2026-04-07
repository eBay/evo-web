import React, { FC, useMemo } from "react";
import classNames from "classnames";
import { Chart, Series } from "@highcharts/react";
import type Highcharts from "highcharts";
import highcharts from "../common/charts/load-highcharts";
import { ebayLegend } from "../common/charts/legend";
import {
    backgroundColor,
    chartFontFamily,
    colorMapping,
    gridColor,
    labelsColor,
    legendColor,
    legendHoverColor,
    legendInactiveColor,
    setSeriesColors,
    setSeriesMarkerStyles,
    tooltipBackgroundColor,
    tooltipShadows,
} from "../common/charts/shared";
import { areaChartTooltipHtml } from "./area-chart-tooltip";
import type { EbayAreaChartProps } from "./types";

ebayLegend(highcharts);

const AREA_CHART_STYLES = `
    .ebay-area-chart { width: 100%; }
    .ebay-area-chart .highcharts-tooltip-container svg { overflow: visible; }
`;

function defaultTooltipTitleFormatter(value: number | string, dateFormat: typeof Highcharts.dateFormat): string {
    const v = typeof value === "string" ? parseFloat(value) : value;
    return dateFormat("%b %e, %Y", v);
}

function defaultTooltipValueFormatter(value: number | string): string {
    const v = typeof value === "string" ? parseFloat(value) : value;
    return Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(v);
}

function defaultYLabelFormatter(value: number | string): string {
    const v = typeof value === "string" ? parseFloat(value) : value;
    return Intl.NumberFormat("en-US", {
        notation: "compact",
        style: "currency",
        currency: "USD",
        maximumSignificantDigits: 4,
    }).format(v);
}

function mergeConfigs<T extends object>(source: T, target: T): T {
    (Object.keys(source) as (keyof T)[]).forEach((key) => {
        const sourceVal = source[key];
        const targetVal = target[key];
        if (sourceVal instanceof Object) {
            Object.assign(sourceVal, mergeConfigs((targetVal ?? {}) as T, sourceVal as T));
        }
    });
    return Object.assign(target, source);
}

type AreaSeriesOptions = Highcharts.SeriesAreaOptions | Highcharts.SeriesAreasplineOptions;

function prepareSeries(seriesProp: AreaSeriesOptions | AreaSeriesOptions[]): AreaSeriesOptions[] {
    const series = (Array.isArray(seriesProp) ? seriesProp : [seriesProp]).map((s) => ({
        ...s,
        data: Array.isArray(s.data) ? [...s.data] : s.data,
    }));
    setSeriesMarkerStyles(series as Highcharts.SeriesOptions[]);
    setSeriesColors(series as Highcharts.SeriesOptions[]);
    return series;
}

const EbayAreaChart: FC<EbayAreaChartProps> = ({
    title,
    description,
    series: seriesProp,
    tooltipValueFormatter = defaultTooltipValueFormatter,
    tooltipTitleFormatter = defaultTooltipTitleFormatter,
    xLabelFormatter,
    yLabelFormatter = defaultYLabelFormatter,
    areaType = "areaspline",
    highchartOptions,
    className,
    ...rest
}) => {
    const preparedSeries = useMemo(
        () => prepareSeries(seriesProp),

        [seriesProp],
    );

    const chartOptions = useMemo<Highcharts.Options>(() => {
        const isMultiSeries = preparedSeries.length > 1;

        const xAxis: Highcharts.XAxisOptions = {
            type: "datetime",
            labels: {
                formatter: xLabelFormatter
                    ? function () {
                          return xLabelFormatter(this.value, highcharts.dateFormat);
                      }
                    : undefined,
                format: "{value:%b %e}",
                align: "center",
                style: { color: labelsColor },
            },
            tickWidth: 0,
            crosshair: { color: "rgba(0, 0, 0, 0.2)", zIndex: 3 },
        };

        const yAxis: Highcharts.YAxisOptions = {
            gridLineColor: gridColor,
            opposite: true,
            reversedStacks: false,
            labels: {
                formatter: function () {
                    return yLabelFormatter(this.value);
                },
                style: { color: labelsColor },
            },
            title: { enabled: false } as Highcharts.YAxisTitleOptions,
            offset: 0,
        };

        const legend: Highcharts.LegendOptions = {
            enabled: isMultiSeries,
            symbolRadius: 2,
            symbolWidth: 12,
            symbolHeight: 12,
            align: "left",
            itemStyle: { color: legendColor, fontWeight: "normal" },
            itemHiddenStyle: { color: legendInactiveColor },
            itemHoverStyle: { color: legendHoverColor },
        };

        const tooltip: Highcharts.TooltipOptions = {
            formatter: function () {
                const date = tooltipTitleFormatter(this.x ?? 0, highcharts.dateFormat);
                const total =
                    this.points &&
                    this.points.length > 1 &&
                    this.points.reduce((acc, curr) => acc + (curr.y ?? 0) * 100, 0) / 100;

                return areaChartTooltipHtml({
                    date,
                    points: this.points as Parameters<typeof areaChartTooltipHtml>[0]["points"],
                    total: total || false,
                    valueFormatter: tooltipValueFormatter,
                });
            },
            useHTML: true,
            backgroundColor: tooltipBackgroundColor,
            borderWidth: 0,
            borderRadius: 10,
            outside: true,
            shadow: false,
            shared: true,
            style: { filter: tooltipShadows, fontSize: "12px" },
        };

        const plotOptions: Highcharts.PlotOptions = {
            series: {
                accessibility: { description },
                stacking: "normal",
                states: { hover: { halo: { size: 0 } } },
                marker: { enabled: false, animation: { duration: 0 } },
            },
            [areaType]: {
                className: "ebay-area-chart",
                lineWidth: 1,
            },
        };

        const config: Highcharts.Options = {
            chart: {
                type: areaType,
                animation: false,
                backgroundColor,
                style: { fontFamily: chartFontFamily },
            },
            colors: colorMapping,
            xAxis,
            yAxis,
            legend,
            tooltip,
            plotOptions,
            credits: { enabled: false },
        };

        if (highchartOptions) {
            return mergeConfigs(config, highchartOptions);
        }

        return config;
    }, [
        preparedSeries,
        areaType,
        description,
        xLabelFormatter,
        yLabelFormatter,
        tooltipValueFormatter,
        tooltipTitleFormatter,
        highchartOptions,
    ]);

    return (
        <>
            <style>{AREA_CHART_STYLES}</style>
            <div {...rest} className={classNames("ebay-area-chart", className)}>
                <Chart highcharts={highcharts} title={title} options={chartOptions}>
                    {preparedSeries.map((s, i) => (
                        <Series
                            key={s.name || i}
                            type={areaType}
                            data={s.data ?? []}
                            options={{ type: areaType, name: s.name } as AreaSeriesOptions}
                        />
                    ))}
                </Chart>
            </div>
        </>
    );
};

export default EbayAreaChart;
