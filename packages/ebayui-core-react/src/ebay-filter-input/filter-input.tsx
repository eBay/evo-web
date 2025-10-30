/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from "classnames";
import React, { FC, useRef, useState } from "react";
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
    value: controlledValue,
    defaultValue,
    onInputChange,
    ...rest
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const isControlled = controlledValue !== undefined;
    
    // Always manage internal state, even in controlled mode (for clear functionality)
    const [internalValue, setInternalValue] = useState(defaultValue || "");
    
    // Use controlled value if provided, otherwise use internal state
    const value = isControlled ? controlledValue : internalValue;
    
    // Map filter-input sizes to textbox sizes
    // filter-input "small" -> textbox "default", filter-input "large" -> textbox "large"
    const textboxSize: TextboxSize | undefined = inputSize && validSizes.includes(inputSize) 
        ? (inputSize === "small" ? "default" : "large") 
        : undefined;

    const handleInputChange: EbayChangeEventHandler<HTMLInputElement, { value: string }> = (event, { value: newValue }) => {
        // Always update internal state for uncontrolled mode
        if (!isControlled) {
            setInternalValue(newValue);
        }
        
        // Call parent's onInputChange if provided
        if (onInputChange) {
            onInputChange(event, { value: newValue });
        }
    };

    const handleButtonClick = (event: any) => {
        // Get the input element from the event target
        const inputElement = (event.target as HTMLElement).closest('.textbox')?.querySelector('input') as HTMLInputElement;
        
        // Create synthetic event for the clear action
        const syntheticEvent = {
            ...event,
            target: inputElement || inputRef.current,
            currentTarget: inputElement || inputRef.current,
        } as unknown as React.ChangeEvent<HTMLInputElement>;

        // Update internal state for uncontrolled mode
        if (!isControlled) {
            setInternalValue("");
        }
        
        // Call onInputChange to notify parent of the change
        if (onInputChange) {
            onInputChange(syntheticEvent, { value: "" });
        }
        
        // Call onClear callback
        onClear(syntheticEvent, { value: "" });
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
                value={value}
                onInputChange={handleInputChange}
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