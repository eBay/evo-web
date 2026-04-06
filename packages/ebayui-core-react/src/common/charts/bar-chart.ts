import type Highcharts from "highcharts";

/**
 * Extended column point with internal properties used during the translate phase.
 * `shapeArgs`, `shapeType`, `shapeY`, and `dlBox` are Highcharts internals
 * that the eBayColumns extension modifies for custom rounded-corner rendering.
 */
export interface ColumnPointInternal extends Highcharts.Point {
    shapeType: string;
    shapeY: number;
    dlBox: Highcharts.BBoxObject;
    // Overwrite read-only shapeArgs
    shapeArgs: Highcharts.SVGAttributes;
    label?: string;
}

/**
 * Extended column series options with custom top/bottom flags
 * used to control which ends of stacked bars get rounded corners.
 */
export interface ColumnSeriesOptions extends Highcharts.SeriesColumnOptions {
    top?: boolean;
    bottom?: boolean;
}

interface ColumnSeries {
    options: ColumnSeriesOptions;
    points: ColumnPointInternal[];
}

/**
 * Augment the Highcharts module with the internal `seriesTypes` registry.
 *
 * Highcharts source defines a `SeriesTypeRegistry` interface
 * (see highcharts/ts/Core/Series/SeriesType.ts) that maps series type
 * names to their constructors, but it is not included in the published
 * type definitions. We re-declare it here so the `eBayColumns` extension
 * can access `highcharts.seriesTypes.column.prototype` without type casts.
 */
declare module "highcharts" {
    interface SeriesTypeRegistry {
        column: { prototype: ColumnSeries };
    }
    const seriesTypes: SeriesTypeRegistry;
}

/**
 * Extends the Highcharts column series translate function to render
 * rounded corners on bar tops/bottoms and visual gaps between stacked segments.
 *
 * - When `options.top` is set, the top corners are rounded.
 * - When `options.bottom` is set, the bottom corners are rounded and no gap is subtracted.
 * - Non-bottom bars get 4px subtracted from their height to create a visual gap.
 */
export function eBayColumns(highcharts: typeof Highcharts): void {
    highcharts.wrap(
        highcharts.seriesTypes.column.prototype,
        "translate",
        function (this: ColumnSeries, proceed: () => void) {
            const top = this.options.top,
                bottom = this.options.bottom;

            // Run the original translate function first
            proceed.call(this);

            for (const point of this.points) {
                const shapeArgs = point.shapeArgs;
                if (!shapeArgs) {
                    continue;
                }
                const x = shapeArgs.x;
                const w = shapeArgs.width;

                let y = shapeArgs.y;
                // If not a bottom point, subtract 4px to create a visual gap between stacked segments
                let h = shapeArgs.height - (bottom ? 0 : 4);

                // Ensure h is not negative; if it is, restore original height and shift y instead
                if (h < 0) {
                    h = shapeArgs.height;
                    y = y - 4;
                }

                const cornerRadius = 3;

                let rTopLeft = highcharts.relativeLength(top ? cornerRadius : 0, w);
                let rTopRight = highcharts.relativeLength(top ? cornerRadius : 0, w);
                let rBottomRight = highcharts.relativeLength(bottom ? cornerRadius : 0, w);
                let rBottomLeft = highcharts.relativeLength(bottom ? cornerRadius : 0, w);

                // Max corner radius is half the smaller dimension
                const maxCornerRadius = Math.min(w, h) / 2;
                if (rTopLeft > maxCornerRadius) rTopLeft = maxCornerRadius;
                if (rTopRight > maxCornerRadius) rTopRight = maxCornerRadius;
                if (rBottomRight > maxCornerRadius) rBottomRight = maxCornerRadius;
                if (rBottomLeft > maxCornerRadius) rBottomLeft = maxCornerRadius;

                // @ts-expect-error shapeArgs has [key: string]: any, so it has the missing dlBox properties
                point.dlBox = shapeArgs;
                point.shapeY = y;
                point.shapeType = "path";
                // Assign the path-based shape args.
                // Cast required because we're replacing the rectangular shapeArgs with an SVG path definition,
                // which Highcharts handles internally but doesn't expose in its public types.
                const path: Highcharts.SVGPathArray = [
                    ["M", x + rTopLeft, y],
                    ["L", x + w - rTopRight, y],
                    ["C", x + w - rTopRight / 2, y, x + w, y + rTopRight / 2, x + w, y + rTopRight],
                    ["L", x + w, y + h - rBottomRight],
                    [
                        "C",
                        x + w,
                        y + h - rBottomRight / 2,
                        x + w - rBottomRight / 2,
                        y + h,
                        x + w - rBottomRight,
                        y + h,
                    ],
                    ["L", x + rBottomLeft, y + h],
                    ["C", x + rBottomLeft / 2, y + h, x, y + h - rBottomLeft / 2, x, y + h - rBottomLeft],
                    ["L", x, y + rTopLeft],
                    ["C", x, y + rTopLeft / 2, x + rTopLeft / 2, y, x + rTopLeft, y],
                    ["Z"],
                ];

                point.shapeArgs = {
                    ...shapeArgs,
                    d: path,
                };
            }
        },
    );
}
