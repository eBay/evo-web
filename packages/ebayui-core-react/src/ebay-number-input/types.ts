import type { EbayTextboxProps as TextboxInput } from "../ebay-textbox";

import {
    EbayChangeEventHandler,
    EbayFocusEventHandler,
    EbayKeyboardEventHandler,
    EbayMouseEventHandler,
} from "../common/event-utils/types";

export interface NumberInputEventProps {
    value: number;
}

export type NumberInputChangeHandler = EbayChangeEventHandler<HTMLInputElement, NumberInputEventProps>;
export type NumberInputFocusHandler = EbayFocusEventHandler<HTMLInputElement, NumberInputEventProps>;
export type NumberInputKeyDownHandler = EbayKeyboardEventHandler<HTMLInputElement, NumberInputEventProps>;

export type EbayNumberInputProps = Omit<
    TextboxInput,
    "onChange" | "onInputChange" | "onFocus" | "onBlur" | "onKeyDown" | "onKeyPress" | "onKeyUp" | "forwardedRef"
> & {
    label?: string;
    a11yDeleteText?: string;
    min?: number;
    max?: number;
    value?: number;
    onKeyDown?: EbayKeyboardEventHandler<HTMLInputElement, NumberInputEventProps>;
    onKeyPress?: EbayKeyboardEventHandler<HTMLInputElement, NumberInputEventProps>;
    onKeyUp?: EbayKeyboardEventHandler<HTMLInputElement, NumberInputEventProps>;
    onChange?: NumberInputChangeHandler;
    onInputChange?: NumberInputChangeHandler;
    onFocus?: EbayFocusEventHandler<HTMLInputElement, NumberInputEventProps>;
    onBlur?: EbayFocusEventHandler<HTMLInputElement, NumberInputEventProps>;
    onDeleteClick?: EbayMouseEventHandler<HTMLInputElement, NumberInputEventProps>;
    onIncrement?: EbayMouseEventHandler<HTMLInputElement, NumberInputEventProps>;
    onDecrement?: EbayMouseEventHandler<HTMLInputElement, NumberInputEventProps>;
};
