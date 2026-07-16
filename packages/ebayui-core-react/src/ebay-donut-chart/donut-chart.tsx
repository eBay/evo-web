import React, { FC, useMemo } from "react";
import classNames from "classnames";
import { Chart } from "@highcharts/react";
import type Highcharts from "highcharts";
import highcharts from "../common/charts/load-highcharts";
import { ebayDonut } from "../common/charts/donut";
import { backgroundColor, chartFontFamily, setDonutColors, tooltipShadows } from "../common/charts/shared";
import { EbayChartLegend } from "../ebay-chart-legend";
import { donutChartTooltipHtml } from "./donut-chart-tooltip";
import type { DonutSeriesItem, EbayDonutChartProps } from "./types";

ebayDonut(highcharts);

function defaultTooltipTitleFormatter(value: number | string): string {
    return String(value);
}

function defaultTooltipValueFormatter(value: number | string): string {
    return String(value);
}

const DONUT_CHART_STYLES = `
    .donut-tooltip.tooltip__overlay { display: block; position: relative; }
`;

function prepareSeries(series: DonutSeriesItem[]): {
    prepared?: Highcharts.SeriesPieOptions;
    colors: Highcharts.ColorType[];
} {
    const firstSeries = series[0];
    if (!firstSeries) {
        return { prepared: undefined, colors: [] };
    }

    const first = { ...firstSeries, type: (firstSeries.type ?? "pie") as "pie" } as Highcharts.SeriesPieOptions;
    const colors = setDonutColors(first);
    return { prepared: first, colors };
}

const EbayDonutChart: FC<EbayDonutChartProps> = ({
    title,
    metricValue,
    metricLabel,
    series,
    description,
    highchartsDescription,
    tooltipValueFormatter = defaultTooltipValueFormatter,
    tooltipTitleFormatter = defaultTooltipTitleFormatter,
    renderTooltipOutside = true,
    className,
    ...rest
}) => {
    const resolvedDescription = description ?? highchartsDescription;

    if (series.length === 0) {
        console.warn("EbayDonutChart: at least one series is required.");
    }

    if (series.length > 1) {
        console.warn("EbayDonutChart: only one series is supported. Additional series will be ignored.");
    }

    const { prepared, colors } = useMemo(() => prepareSeries(series), [series]);

    const legendItems = useMemo(
        () =>
            prepared?.data?.map((point) => ({
                name: (point as Highcharts.PointOptionsObject).name ?? "",
                value: (point as Highcharts.PointOptionsObject).y,
            })) ?? [],
        [prepared],
    );

    const chartOptions = useMemo<Highcharts.Options>(
        () => ({
            chart: {
                type: "pie",
                spacing: [0, 0, 0, 0],
                margin: [0, 0, 0, 0],
                backgroundColor,
                style: { fontFamily: chartFontFamily },
            },
            colors,
            title: { text: undefined },
            plotOptions: {
                pie: {
                    description: resolvedDescription,
                    size: "100%",
                    thickness: 10,
                    allowPointSelect: false,
                    cursor: "pointer",
                    borderRadius: "30%",
                    dataLabels: { enabled: false },
                    states: { hover: { halo: { size: 0 } } },
                } as Highcharts.PlotPieOptions,
            },
            tooltip: {
                hideDelay: 250,
                useHTML: true,
                backgroundColor: "transparent",
                padding: 0,
                borderWidth: 0,
                borderRadius: 0,
                outside: renderTooltipOutside,
                shadow: false,
                shared: true,
                style: { filter: tooltipShadows, fontSize: "12px" },
                formatter: function (this: Highcharts.Point & { label?: string; tooltip?: string }) {
                    return donutChartTooltipHtml({
                        name: tooltipTitleFormatter(String(this.key ?? "")),
                        value: tooltipValueFormatter(this.y ?? ""),
                        label: this.label,
                        tooltip: this.tooltip,
                    });
                },
            },
            series: prepared ? [prepared] : [],
            credits: { enabled: false },
        }),
        [prepared, colors, resolvedDescription, tooltipValueFormatter, tooltipTitleFormatter, renderTooltipOutside],
    );

    return (
        <>
            <style>{DONUT_CHART_STYLES}</style>
            <div {...rest} className={classNames("donut-chart", className)}>
                <div className="donut-chart__grid">
                    {title && <div className="donut-chart__title">{title}</div>}
                    {(metricValue || metricLabel) && (
                        <div className="donut-chart__metric">
                            {metricValue && <div className="donut-chart__metric-value">{metricValue}</div>}
                            {metricLabel && <div className="donut-chart__metric-label">{metricLabel}</div>}
                        </div>
                    )}
                    <div className="donut-chart__graph">
                        <Chart highcharts={highcharts} options={chartOptions} />
                    </div>
                    <div className="donut-chart__legend">
                        <EbayChartLegend items={legendItems} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EbayDonutChart;
