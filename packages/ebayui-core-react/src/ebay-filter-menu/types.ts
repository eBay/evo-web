import { EbayChangeEventHandler, EbayEventHandler, EbayMouseEventHandler } from "../events";

export type Variant = "form";
export type Type = "radio" | "checkbox";

export type FilterMenuItemEventData = {
    value?: string;
    checked?: boolean;
};

export type FilterMenuItemClick = EbayMouseEventHandler<HTMLLabelElement | HTMLDivElement, FilterMenuItemEventData>;

export type FilterMenuSearchEventData = {
    searchTerm?: string;
};

export type FilterMenuSearchChange = EbayChangeEventHandler<HTMLInputElement, FilterMenuSearchEventData>;

export type FilterMenuEventData = {
    checked?: string[];
    checkedIndex?: number[];
    currentChecked?: boolean;
    index?: number;
};

export type FilterMenuChange = EbayEventHandler<HTMLLabelElement | HTMLDivElement, FilterMenuEventData>;
export type FilterMenuFormSubmit = EbayEventHandler<HTMLFormElement, FilterMenuEventData>;
export type FilterMenuFooterClick = EbayMouseEventHandler<HTMLFormElement, FilterMenuEventData>;
