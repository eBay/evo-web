import type Highcharts from "highcharts";

interface EbayDonutPrototype {
    center: number[];
    points: Array<{ shapeArgs: { start: number; end: number } }>;
}

declare module "highcharts" {
    interface SeriesTypeRegistry {
        pie: { prototype: EbayDonutPrototype };
    }
}

/**
 * Extends the Highcharts pie series translate function to add 5px arc spacing
 * between donut slices.
 */
export function ebayDonut(highcharts: typeof Highcharts): void {
    highcharts.wrap(
        highcharts.seriesTypes.pie.prototype as unknown as Record<string, unknown>,
        "translate",
        function (this: EbayDonutPrototype, proceed: () => void) {
            proceed.call(this);

            if (this.points.length === 1) {
                return;
            }

            const diameter = this.center[2];
            const spacing = 5;
            const angle = 2 * Math.asin(spacing / diameter);

            this.points.forEach((point) => {
                point.shapeArgs.start += angle / 2;
                point.shapeArgs.end -= angle / 2;
            });
        },
    );
}
