import React, { FC, MutableRefObject, useEffect, useMemo, useRef } from "react";
import classNames from "classnames";
import { Chart, Series, type HighchartsReactRefObject } from "@highcharts/react";
import type Highcharts from "highcharts";
import highcharts from "../common/charts/load-highcharts";
import { ebayLegend } from "../common/charts/legend";
import {
    backgroundColor,
    chartFontFamily,
    gridColor,
    labelsColor,
    legendColor,
    legendHoverColor,
    legendInactiveColor,
    lineChartPrimaryColor,
    lineChartQueternaryColor,
    lineChartQuinaryColor,
    lineChartSecondaryColor,
    lineChartTertiaryColor,
    tooltipBackgroundColor,
    tooltipShadows,
    trendNegativeColor,
    trendPositiveColor,
} from "../common/charts/shared";
import { debounce } from "../common/debounce";
import { lineChartTooltipHtml, type LineChartPoint } from "./line-chart-tooltip";
import type { EbayLineChartProps, LineChartSeriesItem } from "./types";

ebayLegend(highcharts);

const LINE_CHART_STYLES = `
    .ebay-line-chart .highcharts-point { opacity: 0; }
    .ebay-line-chart .ebay-line-chart__marker--visible { opacity: 1; }
    .ebay-line-chart .highcharts-legend-item .highcharts-point { opacity: 1; stroke-width: 0; }
    .ebay-line-chart .highcharts-legend-item .highcharts-graph { display: none; }
    .dark .ebay-line-chart .highcharts-halo { fill-opacity: 0.8; }
`;

const POINT_SIZE = 6;
const MARKER_SYMBOLS: Highcharts.SymbolKeyValue[] = ["circle", "square", "triangle", "triangle-down", "diamond"];

function prepareSeries(seriesProp: LineChartSeriesItem | LineChartSeriesItem[]): LineChartSeriesItem[] {
    const series = Array.isArray(seriesProp) ? seriesProp : [seriesProp];
    return series.map((s, i) => ({
        ...s,
        marker: { ...s.marker, symbol: MARKER_SYMBOLS[i % MARKER_SYMBOLS.length] },
    }));
}

function resolveColors(series: LineChartSeriesItem[], trend: EbayLineChartProps["trend"]): string[] {
    const colors = [
        lineChartPrimaryColor,
        lineChartSecondaryColor,
        lineChartTertiaryColor,
        lineChartQueternaryColor,
        lineChartQuinaryColor,
    ];

    if (trend) {
        const trendLower = trend.toLowerCase();
        const firstY = (series[0]?.data[0] as Highcharts.PointOptionsObject)?.y ?? 0;
        const lastData = series[0]?.data;
        const lastY = (lastData?.[lastData.length - 1] as Highcharts.PointOptionsObject)?.y ?? 0;
        const isPositive = firstY < lastY;

        if (trendLower === "positive" || (trendLower !== "negative" && trendLower !== "neutral" && isPositive)) {
            colors[0] = trendPositiveColor;
        } else if (trendLower === "negative" || (trendLower !== "neutral" && !isPositive)) {
            colors[0] = trendNegativeColor;
        }
    }

    return colors;
}

type ChartPointWithMeta = Highcharts.Point & { onTick?: boolean; className?: string | null };
type PointMouseOverEvent = Event & { target: Highcharts.Point & EventTarget };

// Module-level pure functions for marker management (avoid stale closures)
function handleMouseOut(getChart: () => Highcharts.Chart | null): void {
    const chart = getChart();
    if (!chart) return;

    chart.series.forEach((s) => {
        s.data.forEach((data: ChartPointWithMeta) => {
            if (!data.onTick && data.className !== null) {
                data.update(
                    { className: undefined, marker: { enabled: false } } as Highcharts.PointOptionsType,
                    false,
                    false,
                );
            } else if (data.onTick && data.className === null) {
                data.update(
                    {
                        className: "ebay-line-chart__marker--visible",
                        onTick: data.onTick,
                        marker: { enabled: true, radius: POINT_SIZE, lineColor: backgroundColor, lineWidth: 2 },
                    } as Highcharts.PointOptionsType,
                    false,
                    false,
                );
            }
        });
    });
    chart.redraw();
}

function handleMouseOver(getChart: () => Highcharts.Chart | null, e: PointMouseOverEvent): void {
    const chart = getChart();
    if (!chart) return;
    const targetX = e.target.x as number;

    chart.series.forEach((s) => {
        s.data.forEach((data: ChartPointWithMeta) => {
            if (data.x === targetX) {
                data.update(
                    {
                        className: "ebay-line-chart__marker--visible",
                        onTick: data.onTick,
                        marker: { enabled: true, radius: POINT_SIZE, lineColor: backgroundColor, lineWidth: 2 },
                    } as Highcharts.PointOptionsType,
                    false,
                    false,
                );
            } else if (!data.onTick && data.className !== null) {
                data.update(
                    {
                        className: undefined,
                        onTick: data.onTick,
                        marker: { enabled: false },
                    } as Highcharts.PointOptionsType,
                    false,
                    false,
                );
            }
        });
    });
    chart.redraw();
}

function updateMarkers(
    plotPoints: boolean | undefined,
    getChart: () => Highcharts.Chart | null,
    axisTicksRef: MutableRefObject<number>,
    tickValuesRef: MutableRefObject<number[]>,
): void {
    if (!plotPoints) return;
    const chart = getChart();
    if (!chart) return;

    tickValuesRef.current = Object.keys(chart.axes[0].ticks).map((v) => parseInt(v, 10));
    if (axisTicksRef.current === tickValuesRef.current.length) return;

    axisTicksRef.current = tickValuesRef.current.length;

    chart.series.forEach((s) => {
        s.data.forEach((data: ChartPointWithMeta) => {
            if (data.className !== null) {
                data.update(
                    { className: undefined, onTick: false, marker: { enabled: false } } as Highcharts.PointOptionsType,
                    false,
                    false,
                );
            }
        });
    });

    chart.series.forEach((s) => {
        s.data.forEach((data: ChartPointWithMeta) => {
            tickValuesRef.current.forEach((tick) => {
                if (tick === data.x && data.className === null) {
                    data.update(
                        {
                            className: "ebay-line-chart__marker--visible",
                            onTick: true,
                            marker: { enabled: true, radius: POINT_SIZE, lineColor: backgroundColor, lineWidth: 2 },
                        } as Highcharts.PointOptionsType,
                        false,
                        false,
                    );
                }
            });
        });
    });

    chart.redraw();
}

const EbayLineChart: FC<EbayLineChartProps> = ({
    title,
    description,
    series: seriesProp,
    xAxisLabelFormat,
    xAxisPositioner,
    yAxisLabels,
    yAxisPositioner,
    plotPoints,
    renderTooltipOutside = true,
    trend,
    className,
    ...rest
}) => {
    const highchartsRef = useRef<HighchartsReactRefObject | null>(null);
    const getChart = () => highchartsRef.current?.chart ?? null;
    const axisTicksRef = useRef<number>(-1);
    const tickValuesRef = useRef<number[]>([]);

    const preparedSeries = useMemo(() => prepareSeries(seriesProp), [seriesProp]);
    const colors = useMemo(() => resolveColors(preparedSeries, trend), [preparedSeries, trend]);

    const mouseOutHandler = useRef(debounce(() => handleMouseOut(getChart), 80));
    const mouseOverHandler = useRef(debounce((e: PointMouseOverEvent) => handleMouseOver(getChart, e), 85));

    useEffect(() => {
        updateMarkers(plotPoints, getChart, axisTicksRef, tickValuesRef);
    }, []);

    const chartOptions = useMemo<Highcharts.Options>(() => {
        const isMultiSeries = preparedSeries.length > 1;
        let yLabelsIterator = 0;

        let maxVal = 0;
        for (const s of preparedSeries) {
            for (const d of s.data) {
                maxVal = Math.max((d as Highcharts.PointOptionsObject).y ?? 0, maxVal);
            }
        }

        const xAxis: Highcharts.XAxisOptions = {
            type: "datetime",
            labels: {
                format: xAxisLabelFormat || "{value:%b %e}",
                align: "center",
                style: { color: labelsColor },
            },
            tickWidth: 0,
            tickPositioner: xAxisPositioner,
            crosshair: { dashStyle: "Solid" },
        };

        const yAxis: Highcharts.YAxisOptions = {
            gridLineColor: gridColor,
            opposite: true,
            labels: {
                format: yAxisLabels ? undefined : "${text}",
                formatter: yAxisLabels
                    ? function () {
                          if (this.isFirst) {
                              yLabelsIterator = -1;
                          }
                          yLabelsIterator = yLabelsIterator + 1;
                          return yAxisLabels[yLabelsIterator] ?? "";
                      }
                    : undefined,
                style: { color: labelsColor },
            },
            max: maxVal,
            title: { enabled: false } as Highcharts.YAxisTitleOptions,
            offset: 0,
            tickPositioner: yAxisPositioner,
        };

        const legend: Highcharts.LegendOptions = {
            enabled: isMultiSeries,
            symbolRadius: 6,
            symbolWidth: 12,
            symbolHeight: 12,
            itemStyle: { color: legendColor },
            itemHiddenStyle: { color: legendInactiveColor },
            itemHoverStyle: { color: legendHoverColor },
        };

        const tooltip: Highcharts.TooltipOptions = {
            formatter: function (this: Highcharts.Point) {
                return lineChartTooltipHtml({
                    date: highcharts.dateFormat("%b %e, %Y", (this.points?.[0]?.x as number) ?? 0, false),
                    points: this.points as LineChartPoint[],
                    seriesLength: isMultiSeries,
                });
            },
            useHTML: true,
            backgroundColor: tooltipBackgroundColor,
            borderWidth: 0,
            borderRadius: 10,
            outside: renderTooltipOutside,
            shadow: false,
            shared: true,
            style: { filter: tooltipShadows, fontSize: "12px" },
        };

        const firstDataX = (preparedSeries[0]?.data[0] as Highcharts.PointOptionsObject)?.x;

        const plotOptions: Highcharts.PlotOptions = {
            line: {
                events: { mouseOut: mouseOutHandler.current as Highcharts.SeriesEventsOptionsObject["mouseOut"] },
            },
            series: {
                description,
                lineWidth: 3,
                pointStart: firstDataX,
                point: {
                    events: {
                        mouseOver: mouseOverHandler.current as Highcharts.PointEventsOptionsObject["mouseOver"],
                        mouseOut: mouseOutHandler.current as Highcharts.PointEventsOptionsObject["mouseOut"],
                    },
                },
            },
        };

        return {
            chart: {
                type: "line",
                backgroundColor,
                style: { fontFamily: chartFontFamily },
                events: {
                    redraw: () => updateMarkers(plotPoints, getChart, axisTicksRef, tickValuesRef),
                },
            },
            colors,
            xAxis,
            yAxis,
            legend,
            tooltip,
            plotOptions,
            credits: { enabled: false },
        };
    }, [
        preparedSeries,
        colors,
        xAxisLabelFormat,
        xAxisPositioner,
        yAxisLabels,
        yAxisPositioner,
        description,
        renderTooltipOutside,
        plotPoints,
    ]);

    return (
        <>
            <style>{LINE_CHART_STYLES}</style>
            <div {...rest} className={classNames("ebay-line-chart", className)}>
                <Chart
                    ref={highchartsRef as React.Ref<unknown>}
                    highcharts={highcharts}
                    title={title}
                    options={chartOptions}
                >
                    {preparedSeries.map((s, i) => (
                        <Series
                            key={s.name || i}
                            type="line"
                            data={s.data}
                            options={{ type: "line", name: s.name } as Highcharts.SeriesLineOptions}
                        />
                    ))}
                </Chart>
            </div>
        </>
    );
};

export default EbayLineChart;
