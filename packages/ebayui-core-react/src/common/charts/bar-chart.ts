import type Highcharts from "highcharts";

/**
 * Internal Highcharts shape arguments attached to column points.
 * These are not part of the public API but are used internally by the column
 * series during the translate phase.
 */
interface ColumnShapeArgs {
    x: number;
    y: number;
    width: number;
    height: number;
}

/**
 * The custom path-based shape args we assign to points for rounded corners.
 * Highcharts accepts a mixed array of SVG path commands and numbers for `d`.
 */
interface PathShapeArgs {
    d: Array<string | number>;
}

/**
 * Extended column point with internal properties used during the translate phase.
 * `shapeArgs`, `shapeType`, `shapeY`, and `dlBox` are Highcharts internals
 * that the eBayColumns extension modifies for custom rounded-corner rendering.
 *
 * We use Omit to avoid conflict with the readonly `shapeArgs` on Highcharts.Point.
 */
interface ColumnPointInternal extends Omit<Highcharts.Point, "shapeArgs"> {
    shapeArgs: ColumnShapeArgs;
    shapeType: string;
    shapeY: number;
    dlBox: ColumnShapeArgs;
}

/**
 * Extended column series options with custom top/bottom flags
 * used to control which ends of stacked bars get rounded corners.
 */
interface EbayColumnSeriesOptions {
    top?: boolean;
    bottom?: boolean;
}

/**
 * Extended column series prototype with the ebayColumn flag
 * to prevent double-wrapping.
 */
interface EbayColumnPrototype {
    ebayColumn?: boolean;
    options: EbayColumnSeriesOptions;
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
        column: { prototype: EbayColumnPrototype };
        [key: string]: { prototype: EbayColumnPrototype };
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
    const seriesTypes = highcharts.seriesTypes;

    if (!seriesTypes.column.prototype.ebayColumn) {
        highcharts.wrap(
            seriesTypes.column.prototype as unknown as Record<string, unknown>,
            "translate",
            function (this: EbayColumnPrototype, proceed: () => void) {
                seriesTypes.column.prototype.ebayColumn = true;
                const top = this.options.top,
                    bottom = this.options.bottom;

                // Run the original translate function first
                proceed.call(this);

                for (const point of this.points) {
                    const shapeArgs = point.shapeArgs;
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

                    point.dlBox = shapeArgs; // data label box for tooltip alignment
                    point.shapeY = y;
                    point.shapeType = "path";
                    // Assign the path-based shape args.
                    // Cast required because we're replacing the rectangular shapeArgs with an SVG path definition,
                    // which Highcharts handles internally but doesn't expose in its public types.
                    (point as unknown as { shapeArgs: PathShapeArgs }).shapeArgs = {
                        d: [
                            "M",
                            x + rTopLeft,
                            y,
                            "L",
                            x + w - rTopRight,
                            y,
                            "C",
                            x + w - rTopRight / 2,
                            y,
                            x + w,
                            y + rTopRight / 2,
                            x + w,
                            y + rTopRight,
                            "L",
                            x + w,
                            y + h - rBottomRight,
                            "C",
                            x + w,
                            y + h - rBottomRight / 2,
                            x + w - rBottomRight / 2,
                            y + h,
                            x + w - rBottomRight,
                            y + h,
                            "L",
                            x + rBottomLeft,
                            y + h,
                            "C",
                            x + rBottomLeft / 2,
                            y + h,
                            x,
                            y + h - rBottomLeft / 2,
                            x,
                            y + h - rBottomLeft,
                            "L",
                            x,
                            y + rTopLeft,
                            "C",
                            x,
                            y + rTopLeft / 2,
                            x + rTopLeft / 2,
                            y,
                            x + rTopLeft,
                            y,
                            "Z",
                        ],
                    };
                }
            },
        );
    }
}
