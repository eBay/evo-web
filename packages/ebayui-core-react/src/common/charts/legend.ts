import type Highcharts from "highcharts";

/**
 * Extended Legend item with legendSymbol property used by the ebayLegend extension.
 * Highcharts internally adds legendSymbol to series/point items but it's not
 * in the public type definitions.
 */
interface LegendItemWithSymbol {
    borderWidth?: number;
    legendSymbol?: Highcharts.SVGElement;
    options: {
        borderColor?: string;
    };
}

type HighchartsStatic = typeof Highcharts;

/**
 * Wraps the Legend.colorizeItem method to render crisper legend symbol borders.
 * This makes legend swatches display with sharp pixel-aligned borders that
 * match the series borderColor.
 */
export function ebayLegend(highcharts: HighchartsStatic): void {
    highcharts.wrap(
        highcharts.Legend.prototype,
        "colorizeItem",
        function (
            this: Highcharts.Legend,
            proceed: (...args: unknown[]) => void,
            item: LegendItemWithSymbol,
            visible: boolean,
        ) {
            const width = highcharts.pick(item.borderWidth, 1),
                crisp = -(width % 2) / 2;

            proceed.apply(this, [].slice.call(args, 1));

            if (item.legendSymbol) {
                if (visible) {
                    item.legendSymbol.attr({
                        "stroke-width": width,
                        translateX: crisp,
                        translateY: crisp,
                        stroke: item.options.borderColor,
                    });
                }
            }
        },
    );
}
