import { KeyboardEvent, SyntheticEvent } from "react";
import { EbayChangeEventHandler, EbayFocusEventHandler, EbayMouseEventHandler } from "../events";

export type Autocomplete = "list" | "none";
export type ListSelection = "automatic" | "manual";
export type EventData = {
    currentInputValue: string;
    selectedOption?: {
        text?: string;
        value?: string;
    };
};

export type ComboboxSelectEventArgs = SyntheticEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>;

export type ComboboxSelectHandler = (event: ComboboxSelectEventArgs, data: EventData) => void;

export type ComboboxFocusHandler = EbayFocusEventHandler<HTMLInputElement, EventData>;
export type ComboboxClickHandler = EbayMouseEventHandler<HTMLInputElement, EventData>;
export type ComboboxInputChangeHandler = EbayChangeEventHandler<HTMLInputElement, EventData>;
export type ComboboxChangeHandler = EbayChangeEventHandler<HTMLInputElement, EventData>;
