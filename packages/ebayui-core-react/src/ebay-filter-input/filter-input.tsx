import classnames from "classnames";
import React, { FC, useState } from "react";
import { EbayTextbox, EbayTextboxPrefixIcon, EbayTextboxPostfixIcon, type EbayTextboxProps } from "../ebay-textbox";
import { EbayIconSearch16 } from "../ebay-icon/icons/ebay-icon-search-16";
import { EbayIconClear16 } from "../ebay-icon/icons/ebay-icon-clear-16";
import { EbayEventHandler, EbayMouseEventHandler } from "../common/event-utils/types";
import type { Size as TextboxSize } from "../ebay-textbox/types";

const validSizes = ["large", "small"] as const;
export type Size = "large" | "small";

export type FilterInputEventProps = { value: string };

export type EbayFilterInputProps = Omit<EbayTextboxProps, "inputSize" | "ref" | "onInputChange" | "size"> & {
    size?: Size;
    a11yClearButton?: string;
    a11yControlsId?: string;
    inputRef?: EbayTextboxProps["forwardedRef"];
    onClear?: EbayMouseEventHandler<HTMLButtonElement, FilterInputEventProps>;
    onInputChange?: EbayEventHandler<HTMLInputElement | HTMLButtonElement, FilterInputEventProps>;
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
    inputRef,
    ...rest
}) => {
    const isControlled = controlledValue !== undefined;

    // Always manage internal state, even in controlled mode (for clear functionality)
    const [internalValue, setInternalValue] = useState(defaultValue || "");

    // Use controlled value if provided, otherwise use internal state
    const value = isControlled ? controlledValue : internalValue;

    // Map filter-input sizes to textbox sizes
    // filter-input "small" -> textbox "default", filter-input "large" -> textbox "large"
    const textboxSize: TextboxSize | undefined =
        inputSize && validSizes.includes(inputSize) ? (inputSize === "small" ? "default" : "large") : undefined;

    const handleInputChange: EbayTextboxProps["onInputChange"] = (event, { value: newValue }) => {
        // Always update internal state for uncontrolled mode
        if (!isControlled) {
            setInternalValue(newValue);
        }

        // Call parent's onInputChange if provided
        if (onInputChange) {
            onInputChange(event, { value: newValue });
        }
    };

    const handleButtonClick: EbayMouseEventHandler<HTMLButtonElement> = (event) => {
        // Update internal state for uncontrolled mode
        if (!isControlled) {
            setInternalValue("");
        }

        // Call onInputChange to notify parent of the change
        if (onInputChange) {
            onInputChange(event, { value: "" });
        }

        // Call onClear callback
        onClear(event, { value: "" });
    };

    const containerClassName = classnames(
        "filter-input",
        inputSize && validSizes.includes(inputSize) && `filter-input--${inputSize}`,
        className,
    );

    return (
        <span className={containerClassName}>
            <EbayTextbox
                {...rest}
                inputRef={inputRef}
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
                        onClick={(event) => handleButtonClick(event)}
                    />
                )}
            </EbayTextbox>
        </span>
    );
};

export default EbayFilterInput;
