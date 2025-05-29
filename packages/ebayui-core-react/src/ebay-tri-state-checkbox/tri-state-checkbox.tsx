import React, { ChangeEvent, ComponentProps, FC, FocusEvent, KeyboardEvent, useState } from "react";
import classNames from "classnames";
import { EbayIcon } from "../ebay-icon";
import {
    CheckboxState,
    TriStateCheckboxChangeHandler,
    TriStateCheckboxFocusHandler,
    TriStateCheckboxKeyDownHandler,
    Size,
} from "./types";

export type EbayTriStateCheckboxProps = Omit<
    ComponentProps<"input">,
    "size" | "onChange" | "onFocus" | "onKeyDown" | "checked" | "defaultChecked" | "ref"
> & {
    checked?: CheckboxState;
    defaultChecked?: CheckboxState;
    skipMixed?: boolean;
    size?: Size;
    onChange?: TriStateCheckboxChangeHandler;
    onFocus?: TriStateCheckboxFocusHandler;
    onKeyDown?: TriStateCheckboxKeyDownHandler;
    inputRef?: React.LegacyRef<HTMLInputElement>;
};

const isControlled = (checked: CheckboxState | undefined): checked is CheckboxState => checked !== undefined;

const EbayTriStateCheckbox: FC<EbayTriStateCheckboxProps> = ({
    id,
    size = "default",
    className,
    style,
    checked,
    defaultChecked = "false" as CheckboxState,
    skipMixed = false,
    onChange = () => {},
    onFocus = () => {},
    onKeyDown = () => {},
    inputRef,
    ...rest
}) => {
    const [checkboxState, setCheckboxState] = useState<CheckboxState>(defaultChecked);
    const currentCheckboxState = isControlled(checked) ? checked : checkboxState;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        let newCheckboxState: CheckboxState = checkboxState;
        if (currentCheckboxState === "true") {
            newCheckboxState = "false";
        } else if (currentCheckboxState === "false" && !skipMixed) {
            newCheckboxState = "mixed";
        } else {
            newCheckboxState = "true";
        }
        onChange(e, { value: input?.value, checked: newCheckboxState });
        setCheckboxState(newCheckboxState);
    };
    const handleFocus = (e: FocusEvent<HTMLInputElement>) =>
        onFocus(e, { value: e.target?.value, checked: currentCheckboxState });

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const input = e.target as EventTarget & HTMLInputElement;
        onKeyDown(e, { value: input.value, checked: currentCheckboxState });
    };

    const containerClass = classNames("checkbox", className, { "checkbox--large": size === "large" });

    let iconChecked = <EbayIcon name="checkboxChecked18" className="checkbox__checked" />;
    let iconUnchecked = <EbayIcon name="checkboxUnchecked18" className="checkbox__unchecked" />;
    let iconMixed = <EbayIcon name="checkboxMixed18" />;
    if (size === "large") {
        iconChecked = <EbayIcon name="checkboxChecked24" className="checkbox__checked" />;
        iconUnchecked = <EbayIcon name="checkboxUnchecked24" className="checkbox__unchecked" />;
        iconMixed = <EbayIcon name="checkboxMixed24" />;
    }

    const renderCheckboxIcon = () => {
        if (currentCheckboxState === "true") {
            return iconChecked;
        } else if (currentCheckboxState === "mixed") {
            return iconMixed;
        }
        return iconUnchecked;
    };
    return (
        <span className={containerClass} style={{ ...style }}>
            <input
                {...rest}
                aria-checked={currentCheckboxState}
                id={id}
                className="checkbox__control"
                type="checkbox"
                checked={currentCheckboxState === "true"}
                onChange={handleChange}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                ref={inputRef}
            />
            <span className="checkbox__icon" hidden>
                {renderCheckboxIcon()}
            </span>
        </span>
    );
};

export default EbayTriStateCheckbox;
