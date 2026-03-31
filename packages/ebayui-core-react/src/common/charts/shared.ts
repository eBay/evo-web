import type Highcharts from "highcharts";

export function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export const chartFontFamily = '"Market Sans", Arial, sans-serif',
    backgroundColor = "var(--color-background-primary)",
    lineChartPrimaryColor = "var(--color-data-viz-line-chart-primary)",
    lineChartSecondaryColor = "var(--color-data-viz-line-chart-secondary)",
    lineChartTertiaryColor = "var(--color-data-viz-line-chart-tertiary)",
    lineChartQueternaryColor = "var(--color-data-viz-line-chart-queternary)",
    lineChartQuinaryColor = "var(--color-data-viz-line-chart-quinary)",
    trendPositiveColor = "var(--color-data-viz-trend-positive)",
    trendNegativeColor = "var(--color-data-viz-trend-negative)",
    gridColor = "var(--color-data-viz-grid)",
    labelsColor = "var(--color-foreground-secondary)",
    legendColor = "var(--color-foreground-primary)",
    legendInactiveColor = "var(--color-data-viz-legend-inactive)",
    legendHoverColor = "var(--color-data-viz-legend-hover)",
    tooltipBackgroundColor = "var(--color-background-primary)",
    tooltipShadows =
        "drop-shadow(0 2px 7px var(--color-data-viz-tooltip-shadow-primary)) drop-shadow(0 5px 7px var(--color-data-viz-tooltip-shadow-secondary))",
    chartPrimaryColor = "var(--color-data-viz-chart-primary)",
    chartSecondaryColor = "var(--color-data-viz-chart-secondary)",
    chartTertiaryBackgroundColor = "var(--color-data-viz-chart-tertiary-background)",
    chartTertiaryStrokeColor = "var(--color-data-viz-chart-tertiary-stroke)",
    chartQuaternaryBackgroundColor = "var(--color-data-viz-chart-quaternary-background)",
    chartQuaternaryStrokeColor = "var(--color-data-viz-chart-quaternary-stroke)",
    chartQuinaryBackgroundColor = "var(--color-data-viz-chart-quinary-background)",
    chartQuinaryStrokeColor = "var(--color-data-viz-chart-quinary-stroke)";

// patterns are in highcharts PatternOptionsObject format
// refer to https://api.highcharts.com/class-reference/Highcharts.PatternOptionsObject
export const patternTertiary: Highcharts.PatternObject = {
    pattern: {
        path: {
            // d is a standard SVG path definition string
            d: "M0 0 L0 3", // draw a 3 unit vertical line
        },
        width: 4.5, // defines the x bounds of the repeating pattern
        height: 3, // defines the y bounds of the repeating pattern
        backgroundColor: chartTertiaryBackgroundColor,
        color: chartTertiaryStrokeColor,
        patternTransform: "rotate(-60)", // rotates the path -60 degrees
    },
};

export const patternQuaternary: Highcharts.PatternObject = {
    pattern: {
        path: {
            d: "M0 0 L3 0",
        },
        width: 3,
        height: 5,
        backgroundColor: chartQuaternaryBackgroundColor,
        color: chartQuaternaryStrokeColor,
    },
};

export const colorMapping: Highcharts.ColorType[] = [
    chartPrimaryColor,
    chartSecondaryColor,
    patternTertiary,
    patternQuaternary,
    chartQuinaryBackgroundColor,
];

const strokeColorMapping: Highcharts.ColorString[] = [
    chartPrimaryColor,
    chartSecondaryColor,
    chartTertiaryStrokeColor,
    chartQuaternaryStrokeColor,
    chartQuaternaryStrokeColor,
];

/**
 * Extends PointOptionsObject to include `lineColor`, which Highcharts uses
 * internally for pie slice border strokes but does not expose in its public types.
 */
interface PiePointOptions extends Highcharts.PointOptionsObject {
    lineColor?: Highcharts.ColorType;
}

type DonutColorEntry = {
    lineColor: Highcharts.ColorType;
    borderColor: Highcharts.ColorType;
};

const donutColorMapping: DonutColorEntry[] = [
    { lineColor: chartPrimaryColor, borderColor: chartPrimaryColor },
    { lineColor: chartSecondaryColor, borderColor: chartSecondaryColor },
    { lineColor: patternTertiary, borderColor: chartTertiaryStrokeColor },
    { lineColor: patternQuaternary, borderColor: chartQuaternaryStrokeColor },
    { lineColor: chartQuinaryBackgroundColor, borderColor: chartQuinaryStrokeColor },
];

/**
 * Sets up the colors on each donut slice data point and returns an array of
 * lineColors to be used as the chart-level colors option.
 */
export function setDonutColors(series: Highcharts.SeriesPieOptions): Highcharts.ColorType[] {
    const data = series.data as PiePointOptions[];
    data.forEach((item, index) => {
        const colorEntry = donutColorMapping[index % donutColorMapping.length];
        item.lineColor = colorEntry.lineColor;
        item.borderColor = colorEntry.borderColor;
    });
    return donutColorMapping.map((c) => c.lineColor);
}

/**
 * Sets up the marker styles and z-index on each series.
 * Used by area and line charts to configure circular point markers.
 */
export function setSeriesMarkerStyles(series: Highcharts.SeriesOptions[]): void {
    series.forEach((s, i) => {
        s.zIndex = series.length - i;
        (s as Highcharts.SeriesAreasplineOptions).marker = {
            symbol: "circle",
            lineWidth: 1,
            fillColor: "black",
            lineColor: "white",
            states: {
                hover: {
                    animation: { duration: 0 },
                    radius: 4,
                    lineWidth: 2,
                },
                normal: {
                    animation: false,
                },
            },
        };
    });
}

/**
 * Sets up the colors including lineColor (SVG stroke) on each of the series objects
 * based on the position in the series array.
 */
export function setSeriesColors(series: Highcharts.SeriesOptions[]): void {
    for (let i = 0; i < series.length; i++) {
        // Added a modulus in case the user passes in more than 5 series so it doesn't error out
        const color = strokeColorMapping[i % strokeColorMapping.length];
        if (series[i].type === "bar" || series[i].type === "column") {
            const barSeries = series[i] as Highcharts.SeriesBarOptions | Highcharts.SeriesColumnOptions;
            barSeries.borderColor = color;
            barSeries.color = color;
        } else {
            const areaSeries = series[i] as Highcharts.SeriesAreasplineOptions;
            areaSeries.lineColor = color;
            areaSeries.fillOpacity = 1;
        }
    }
}
