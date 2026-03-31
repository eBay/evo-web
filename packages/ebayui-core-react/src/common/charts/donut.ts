import type Highcharts from "highcharts";

interface EbayDonutPrototype {
    ebayDonut?: boolean;
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
 * between donut slices. Guards against double-wrapping with an `ebayDonut` flag.
 */
export function ebayDonut(highcharts: typeof Highcharts): void {
    if (highcharts.seriesTypes.pie.prototype.ebayDonut) {
        return;
    }

    highcharts.wrap(
        highcharts.seriesTypes.pie.prototype as unknown as Record<string, unknown>,
        "translate",
        function (this: EbayDonutPrototype, proceed: () => void) {
            highcharts.seriesTypes.pie.prototype.ebayDonut = true;
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
