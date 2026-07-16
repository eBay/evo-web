import type Highcharts from "highcharts";
import { escapeHtml } from "../common/charts/shared";

export type LineChartPoint = Highcharts.Point & { tooltip?: string; label?: string };

interface LineChartTooltipOptions {
    date: string;
    points: LineChartPoint[];
    seriesLength: boolean;
    valueFormatter?: (value: number | string) => string;
}

export function lineChartTooltipHtml({
    date,
    points,
    seriesLength,
    valueFormatter = String,
}: LineChartTooltipOptions): string {
    const rows = points
        .map((point) => {
            if (point.tooltip) {
                return escapeHtml(point.tooltip);
            }
            const value = escapeHtml(point.label ?? valueFormatter(point.y ?? 0));
            if (seriesLength) {
                const name = escapeHtml(point.series.name);
                return `<div style="display:flex"><span>${name}</span><span style="margin-left:16px">${value}</span></div>`;
            }
            return value;
        })
        .join("");

    return `<b>${escapeHtml(date)}</b><br>${rows}`;
}
