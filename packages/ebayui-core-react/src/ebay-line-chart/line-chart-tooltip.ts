import type Highcharts from "highcharts";
import { escapeHtml } from "../common/charts/shared";

export type LineChartPoint = Highcharts.Point & { tooltip?: string; label?: string };

interface LineChartTooltipOptions {
    date: string;
    points: LineChartPoint[];
    seriesLength: boolean;
}

export function lineChartTooltipHtml({ date, points, seriesLength }: LineChartTooltipOptions): string {
    const rows = points
        .map((point) => {
            if (point.tooltip) {
                return escapeHtml(point.tooltip);
            }
            if (seriesLength) {
                const name = escapeHtml(point.series.name);
                const label = escapeHtml(point.label ?? "");
                return `<div style="display:flex"><span>${name}</span><span style="margin-left:16px">${label}</span></div>`;
            }
            return escapeHtml(point.label ?? "");
        })
        .join("");

    return `<b>${escapeHtml(date)}</b><br>${rows}`;
}
