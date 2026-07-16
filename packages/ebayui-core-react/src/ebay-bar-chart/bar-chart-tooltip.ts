import type Highcharts from "highcharts";
import { escapeHtml } from "../common/charts/shared";
import type { ColumnPointInternal } from "../common/charts/bar-chart";

interface BarChartTooltipPropsStacked {
    date: string;
    data: Highcharts.Series[];
    stacked: true;
    valueFormatter?: (value: number | string) => string;
    x: number;
}

interface BarChartTooltipPropsNonStacked {
    date: string;
    data: Highcharts.Point & { label?: string };
    stacked: false;
    valueFormatter?: (value: number | string) => string;
    x: number;
}

type BarChartTooltipProps = BarChartTooltipPropsStacked | BarChartTooltipPropsNonStacked;

/**
 * Generates the HTML string for the bar chart tooltip.
 * This replaces the Marko subtemplate.marko from the core component.
 */
export function barChartTooltipHtml({ date, data, stacked, valueFormatter = String, x }: BarChartTooltipProps): string {
    let html = `<b>${escapeHtml(date)}</b>`;

    if (!stacked) {
        const point = data as BarChartTooltipPropsNonStacked["data"];
        const value = point.label !== undefined ? point.label : valueFormatter(point.y ?? 0);
        html += `<div><span>${escapeHtml(value)}</span></div>`;
    } else {
        const seriesList = data as Highcharts.Series[];
        for (const series of seriesList) {
            for (const point of series.data) {
                if (point.x === x) {
                    const dataPoint = point as ColumnPointInternal;
                    html += `<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;">`;
                    const value = dataPoint.label !== undefined ? dataPoint.label : valueFormatter(dataPoint.y ?? 0);
                    html += `${escapeHtml(series.name || "")}`;
                    html += `<span style="margin-left: 16px">${escapeHtml(value)}</span>`;
                    html += `</div>`;
                }
            }
        }
    }

    return html;
}
