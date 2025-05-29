import type { EbayChangeEventHandler, EbayFocusEventHandler, EbayKeyboardEventHandler } from "../events";

export type Size = "default" | "large";

export type EventData = {
    value: string | number;
    checked: boolean;
};

export type CheckboxChangeHandler = EbayChangeEventHandler<HTMLInputElement, EventData>;
export type CheckboxFocusHandler = EbayFocusEventHandler<HTMLInputElement, EventData>;
export type CheckboxKeyDownHandler = EbayKeyboardEventHandler<HTMLInputElement, EventData>;
