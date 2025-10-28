/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from "classnames";
import React, { ComponentProps, FC } from "react";
import { EbayTextbox, EbayTextboxPrefixIcon, EbayTextboxPostfixIcon } from "../ebay-textbox";
import { EbayIconSearch16 } from "../ebay-icon/icons/ebay-icon-search-16";
import { EbayIconClear16 } from "../ebay-icon/icons/ebay-icon-clear-16";
import {
    EbayChangeEventHandler,
    EbayFocusEventHandler,
    EbayKeyboardEventHandler,
} from "../common/event-utils/types";
import type { Size as TextboxSize } from "../ebay-textbox/types";

const validSizes = ["large", "small"] as const;
export type Size = (typeof validSizes)[number];

export type FilterInputEventProps = { value: string };

export type EbayFilterInputProps = Omit<ComponentProps<"input">, "size" | "defaultValue"> & {
    size?: Size;
    defaultValue?: string;
    a11yClearButton?: string;
    a11yControlsId?: string;
    onClear?: EbayChangeEventHandler<HTMLInputElement, FilterInputEventProps>;
    onKeyDown?: EbayKeyboardEventHandler<HTMLInputElement, FilterInputEventProps>;
    onKeyPress?: EbayKeyboardEventHandler<HTMLInputElement, FilterInputEventProps>;
    onKeyUp?: EbayKeyboardEventHandler<HTMLInputElement, FilterInputEventProps>;
    onChange?: EbayChangeEventHandler<HTMLInputElement, FilterInputEventProps>;
    onInputChange?: EbayChangeEventHandler<HTMLInputElement, FilterInputEventProps>;
    onFocus?: EbayFocusEventHandler<HTMLInputElement, FilterInputEventProps>;
    onBlur?: EbayFocusEventHandler<HTMLInputElement, FilterInputEventProps>;
};

const EbayFilterInput: FC<EbayFilterInputProps> = ({
    size: inputSize,
    a11yClearButton,
    a11yControlsId,
    onClear = () => {},
    onKeyDown = () => {},
    onKeyPress = () => {},
    onKeyUp = () => {},
    onChange = () => {},
    onInputChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    className,
    placeholder = "Filter",
    // Only pass through specific input props that are compatible
    id,
    name,
    value,
    defaultValue,
    disabled,
    required,
    readOnly,
    maxLength,
    minLength,
    autoComplete,
    autoFocus,
    tabIndex
}) => {

    const size = inputSize && validSizes.includes(inputSize) ? inputSize as TextboxSize : undefined;

    const handleClear = (event: any) => {
        // Find the input element in the DOM (since ref may not be connected properly)
        const inputElement = (event.target as HTMLElement).closest('.textbox')?.querySelector('input') as HTMLInputElement;
        
        if (inputElement) {
            // Use React's synthetic event to properly trigger input change
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
            if (nativeInputValueSetter) {
                nativeInputValueSetter.call(inputElement, '');
                
                // Create a proper input event
                const inputEvent = new Event('input', { bubbles: true });
                inputElement.dispatchEvent(inputEvent);
            }
            
            // Also trigger our own clear event
            const syntheticEvent = {
                ...event,
                target: inputElement,
                currentTarget: inputElement,
            } as unknown as React.ChangeEvent<HTMLInputElement>;

            onClear(syntheticEvent, { value: "" });
        }
    };

    const containerClassName = classnames(
        "filter-input",
        size && `filter-input--${size}`,
        className
    );

    return (
        <span className={containerClassName}>
            <EbayTextbox
                id={id}
                name={name}
                value={value}
                defaultValue={defaultValue}
                disabled={disabled}
                required={required}
                readOnly={readOnly}
                maxLength={maxLength}
                minLength={minLength}
                autoComplete={autoComplete}
                autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
                tabIndex={tabIndex}
                fluid
                type="search"
                aria-controls={a11yControlsId}
                placeholder={placeholder}
                inputSize={size}
                onKeyDown={onKeyDown}
                onKeyPress={onKeyPress}
                onKeyUp={onKeyUp}
                onChange={onChange}
                onInputChange={onInputChange}
                onFocus={onFocus}
                onBlur={onBlur}
            >
                <EbayTextboxPrefixIcon icon={<EbayIconSearch16 />} />
                {a11yClearButton && (
                    <EbayTextboxPostfixIcon
                        icon={<EbayIconClear16 />}
                        buttonAriaLabel={a11yClearButton}
                        onClick={handleClear}
                        className="filter-input__clear-btn"
                    />
                )}
            </EbayTextbox>
        </span>
    );
};

export default EbayFilterInput;