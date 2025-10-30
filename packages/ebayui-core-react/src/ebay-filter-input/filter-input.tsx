/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from "classnames";
import React, { FC, useRef } from "react";
import { EbayTextbox, EbayTextboxPrefixIcon, EbayTextboxPostfixIcon, type EbayTextboxProps } from "../ebay-textbox";
import { EbayIconSearch16 } from "../ebay-icon/icons/ebay-icon-search-16";
import { EbayIconClear16 } from "../ebay-icon/icons/ebay-icon-clear-16";
import { EbayChangeEventHandler } from "../common/event-utils/types";
import type { Size as TextboxSize } from "../ebay-textbox/types";

const validSizes = ["large", "small"] as const;
export type Size = (typeof validSizes)[number];

export type FilterInputEventProps = { value: string };

export type EbayFilterInputProps = Omit<EbayTextboxProps, "inputSize"> & {
    size?: Size;
    a11yClearButton?: string;
    a11yControlsId?: string;
    onClear?: EbayChangeEventHandler<HTMLInputElement, FilterInputEventProps>;
};

const EbayFilterInput: FC<EbayFilterInputProps> = ({
    size: inputSize,
    a11yClearButton,
    a11yControlsId,
    onClear = () => {},
    className,
    placeholder = "Filter",
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    // Map filter-input sizes to textbox sizes
    // filter-input "small" -> textbox "default", filter-input "large" -> textbox "large"
    const textboxSize: TextboxSize | undefined = inputSize && validSizes.includes(inputSize) 
        ? (inputSize === "small" ? "default" : "large") 
        : undefined;

    const handleButtonClick = (event: any) => {
        // Note: This uses DOM manipulation as a workaround because the textbox component
        // manages its own internal state and doesn't expose a proper clear API.
        // This is not ideal React code but is necessary for integration with the existing textbox.
        const inputElement = inputRef.current || 
                           (event.target as HTMLElement).closest('.textbox')?.querySelector('input') as HTMLInputElement;
        
        if (inputElement) {
            // Use React's property setter to update the value
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
            if (nativeInputValueSetter) {
                nativeInputValueSetter.call(inputElement, '');
                
                // Dispatch input event to trigger React's onChange handlers
                const inputEvent = new Event('input', { bubbles: true });
                inputElement.dispatchEvent(inputEvent);
            }
            
            // Create synthetic event for the clear callback
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
        inputSize && validSizes.includes(inputSize) && `filter-input--${inputSize}`,
        className
    );

    return (
        <span className={containerClassName}>
            <EbayTextbox
                {...rest}
                forwardedRef={inputRef}
                fluid
                type="search"
                aria-controls={a11yControlsId}
                placeholder={placeholder}
                inputSize={textboxSize}
            >
                <EbayTextboxPrefixIcon icon={<EbayIconSearch16 />} />
                {a11yClearButton && (
                    <EbayTextboxPostfixIcon
                        icon={<EbayIconClear16 />}
                        buttonAriaLabel={a11yClearButton}
                        className="filter-input__clear-btn"
                        onClick={handleButtonClick}
                    />
                )}
            </EbayTextbox>
        </span>
    );
};

export default EbayFilterInput;