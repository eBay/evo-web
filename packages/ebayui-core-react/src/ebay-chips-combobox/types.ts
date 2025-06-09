import { EbayEventHandler } from "../events";

export type ChipsComboboxEvent = {
    selected: string[];
};

export type ChipsComboboxChangeHandler = EbayEventHandler<HTMLElement, ChipsComboboxEvent>;
