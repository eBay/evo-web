import { escapeHtml } from "../common/charts/shared";

interface AreaChartPoint {
    series: { name: string };
    label?: string;
    y: number | null;
}

interface AreaChartTooltipOptions {
    date: string;
    points: AreaChartPoint[];
    total: number | false;
    valueFormatter: (value: number | string) => string;
}

export function areaChartTooltipHtml({ date, points, total, valueFormatter }: AreaChartTooltipOptions): string {
    const rows = points
        .map((point) => {
            const name = escapeHtml(point.series.name);
            const value = escapeHtml(point.label !== undefined ? point.label : valueFormatter(point.y ?? 0));
            return `<div style="display:flex;justify-content:space-between;gap:var(--spacing-200, 16px)"><span>${name}</span><span>${value}</span></div>`;
        })
        .join("");

    const totalRow = total
        ? `<div style="display:flex;justify-content:space-between;gap:var(--spacing-200, 16px)"><span>Total</span><span>${escapeHtml(valueFormatter(total))}</span></div>`
        : "";

    return `<b>${escapeHtml(date)}</b>${rows}${totalRow}`;
}
