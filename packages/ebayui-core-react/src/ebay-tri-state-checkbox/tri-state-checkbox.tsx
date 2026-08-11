import React, { ChangeEvent, ComponentProps, FC, FocusEvent, KeyboardEvent, useState } from "react";
import classNames from "classnames";
import {
    CheckboxState,
    TriStateCheckboxChangeHandler,
    TriStateCheckboxFocusHandler,
    TriStateCheckboxKeyDownHandler,
    Size,
} from "./types";
import { EbayIconCheckboxChecked18 } from "../ebay-icon/icons/ebay-icon-checkbox-checked-18";
import { EbayIconCheckboxUnchecked18 } from "../ebay-icon/icons/ebay-icon-checkbox-unchecked-18";
import { EbayIconCheckboxMixed18 } from "../ebay-icon/icons/ebay-icon-checkbox-mixed-18";
import { EbayIconCheckboxChecked24 } from "../ebay-icon/icons/ebay-icon-checkbox-checked-24";
import { EbayIconCheckboxUnchecked24 } from "../ebay-icon/icons/ebay-icon-checkbox-unchecked-24";
import { EbayIconCheckboxMixed24 } from "../ebay-icon/icons/ebay-icon-checkbox-mixed-24";

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

    let iconChecked = <EbayIconCheckboxChecked18 className="checkbox__checked" />;
    let iconUnchecked = <EbayIconCheckboxUnchecked18 className="checkbox__unchecked" />;
    let iconMixed = <EbayIconCheckboxMixed18 />;
    if (size === "large") {
        iconChecked = <EbayIconCheckboxChecked24 className="checkbox__checked" />;
        iconUnchecked = <EbayIconCheckboxUnchecked24 className="checkbox__unchecked" />;
        iconMixed = <EbayIconCheckboxMixed24 />;
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
