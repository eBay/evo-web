import { EbayChangeEventHandler, EbayFocusEventHandler, EbayKeyboardEventHandler } from "../events";

export type Size = "default" | "large";
export type CheckboxState = "true" | "false" | "mixed";

export type TriStateCheckboxEventData = {
    value: string | number;
    checked: CheckboxState;
};

export type TriStateCheckboxChangeHandler = EbayChangeEventHandler<HTMLInputElement, TriStateCheckboxEventData>;
export type TriStateCheckboxFocusHandler = EbayFocusEventHandler<HTMLInputElement, TriStateCheckboxEventData>;
export type TriStateCheckboxKeyDownHandler = EbayKeyboardEventHandler<HTMLInputElement, TriStateCheckboxEventData>;
