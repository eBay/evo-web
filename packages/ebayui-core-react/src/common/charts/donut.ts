import type Highcharts from "highcharts";

interface PiePoint extends Highcharts.Point {
    // Overwrite read-only shapeArgs
    shapeArgs: Highcharts.SVGAttributes;
}

interface PieSeries {
    center: number[];
    points: PiePoint[];
}

declare module "highcharts" {
    interface SeriesTypeRegistry {
        pie: { prototype: PieSeries };
    }
}

/**
 * Extends the Highcharts pie series translate function to add 5px arc spacing
 * between donut slices.
 */
export function ebayDonut(highcharts: typeof Highcharts): void {
    highcharts.wrap(highcharts.seriesTypes.pie.prototype, "translate", function (this: PieSeries, proceed: () => void) {
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
    });
}
