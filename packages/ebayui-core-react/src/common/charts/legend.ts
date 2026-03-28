import type Highcharts from "highcharts";

type LegendColorizeItem = (Highcharts.Point | Highcharts.Series) & {
    borderWidth?: number;
    legendSymbol?: Highcharts.SVGElement;
};

/**
 * Wraps the Legend.colorizeItem method to render crisper legend symbol borders.
 * This makes legend swatches display with sharp pixel-aligned borders that
 * match the series borderColor.
 */
export function ebayLegend(highcharts: typeof Highcharts): void {
    highcharts.wrap(
        highcharts.Legend.prototype,
        "colorizeItem",
        function (
            this: Highcharts.Legend,
            proceed: (...args: unknown[]) => void,
            item: LegendColorizeItem,
            visible: boolean,
        ) {
            const width = highcharts.pick(item.borderWidth, 1),
                crisp = -(width % 2) / 2;
            const borderColor = (item.options as { borderColor?: Highcharts.SVGAttributes["stroke"] } | undefined)
                ?.borderColor;

            // eslint-disable-next-line prefer-rest-params
            proceed.apply(this, [].slice.call(arguments, 1));

            if (item.legendSymbol) {
                if (visible) {
                    item.legendSymbol.attr({
                        "stroke-width": width,
                        translateX: crisp,
                        translateY: crisp,
                        stroke: borderColor,
                    });
                }
            }
        },
    );
}
