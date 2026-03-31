import { ComponentProps } from "react";

export interface LegendItem {
    name: string;
    value: number | string | undefined;
}

export type EbayChartLegendProps = ComponentProps<"div"> & {
    items: LegendItem[];
};
