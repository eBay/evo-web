function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

interface LineChartPoint {
    point: {
        tooltip?: string;
        label?: string;
        series: { name: string };
    };
}

interface LineChartTooltipOptions {
    date: string;
    points: LineChartPoint[];
    seriesLength: boolean;
}

export function lineChartTooltipHtml({ date, points, seriesLength }: LineChartTooltipOptions): string {
    const rows = points
        .map(({ point }) => {
            if (point.tooltip) {
                // Custom tooltip content rendered as-is (matches Marko behavior)
                return point.tooltip;
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
