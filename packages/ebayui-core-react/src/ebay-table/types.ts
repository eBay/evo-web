import { MouseEvent } from "react";
import type { CheckboxState } from "../ebay-tri-state-checkbox/types";
import type { EbayChangeEventHandler, EbayMouseEventHandler } from "../events";

export type ColumnType = "normal" | "numeric" | "layout" | "icon-action";
export type TableDensity = "compact" | "relaxed";
export type TableMode = "none" | "selection";
export type TableSort = "none" | "asc" | "desc";

export type TableSelectEventData = {
    selected?: Record<string, boolean>;
    allSelected?: CheckboxState;
};
export type TableSelectHandler = EbayChangeEventHandler<HTMLInputElement, TableSelectEventData>;

export type TableRowSelectEventData = {
    name?: string;
    selected: boolean;
};
export type TableRowSelectHandler = EbayChangeEventHandler<HTMLInputElement, TableRowSelectEventData>;

export type TableSortEventData = {
    sorted: Record<string, TableSort>;
};
export type TableSortHandler = (event: MouseEvent<HTMLButtonElement>, data: TableSortEventData) => void;

export type TableHeaderSortHandler = EbayMouseEventHandler<HTMLButtonElement> &
    EbayMouseEventHandler<HTMLAnchorElement>;
