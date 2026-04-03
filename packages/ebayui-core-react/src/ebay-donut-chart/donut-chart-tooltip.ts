import { escapeHtml } from "../common/charts/shared";

interface DonutChartTooltipOptions {
    name: string;
    value: string;
    tooltip?: string;
}

export function donutChartTooltipHtml({ name, value, tooltip }: DonutChartTooltipOptions): string {
    const content = escapeHtml(tooltip ?? value);
    return `<div class="donut-tooltip tooltip__overlay" role="tooltip"><div class="tooltip__mask"><div class="tooltip__cell"><div class="tooltip__content"><b>${escapeHtml(name)}</b><br>${content}</div></div></div></div>`;
}
