import React, { ChangeEvent, cloneElement, ComponentProps, FC, FocusEvent, KeyboardEvent, useState } from "react";
import classNames from "classnames";
import { EbayLabel, EbayLabelProps } from "../ebay-field";
import { findComponent } from "../common/component-utils";
import { CheckboxChangeHandler, CheckboxFocusHandler, CheckboxKeyDownHandler, Size } from "./types";
import { EbayIconCheckboxChecked24 } from "../ebay-icon/icons/ebay-icon-checkbox-checked-24";
import { EbayIconCheckboxChecked18 } from "../ebay-icon/icons/ebay-icon-checkbox-checked-18";
import { EbayIconCheckboxUnchecked24 } from "../ebay-icon/icons/ebay-icon-checkbox-unchecked-24";
import { EbayIconCheckboxUnchecked18 } from "../ebay-icon/icons/ebay-icon-checkbox-unchecked-18";

export type EbayCheckboxProps = Omit<ComponentProps<"input">, "size" | "onChange" | "onFocus" | "onKeyDown"> & {
    size?: Size;
    onChange?: CheckboxChangeHandler;
    onFocus?: CheckboxFocusHandler;
    onKeyDown?: CheckboxKeyDownHandler;
    inputRef?: React.LegacyRef<HTMLInputElement>;
};

const isControlled = (checked) => typeof checked !== "undefined";

const EbayCheckbox: FC<EbayCheckboxProps> = ({
    id,
    size = "default",
    className,
    style,
    checked,
    defaultChecked = false,
    onChange = () => {},
    onFocus = () => {},
    onKeyDown = () => {},
    children,
    inputRef,
    ...rest
}) => {
    const [isChecked, setChecked] = useState(defaultChecked);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        onChange(e, { value: input?.value, checked: Boolean(input?.checked) });
        setChecked(input?.checked);
    };
    const handleFocus = (e: FocusEvent<HTMLInputElement>) =>
        onFocus(e, { value: e.target?.value, checked: Boolean(e.target?.checked) });

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const input = e.target as EventTarget & HTMLInputElement;
        onKeyDown(e, { value: input.value, checked: Boolean(input.checked) });
    };

    const containerClass = classNames("checkbox", className, { "checkbox--large": size === "large" });

    const iconChecked =
        size === "large" ? (
            <EbayIconCheckboxChecked24 className="checkbox__checked" />
        ) : (
            <EbayIconCheckboxChecked18 className="checkbox__checked" />
        );
    const iconUnChecked =
        size === "large" ? (
            <EbayIconCheckboxUnchecked24 className="checkbox__unchecked" />
        ) : (
            <EbayIconCheckboxUnchecked18 className="checkbox__unchecked" />
        );

    const ebayLabel = findComponent(children, EbayLabel);

    return (
        <>
            <span className={containerClass} style={{ ...style, alignItems: "center" }}>
                <input
                    {...rest}
                    id={id}
                    className="checkbox__control"
                    type="checkbox"
                    checked={isControlled(checked) ? checked : isChecked}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />
                <span className="checkbox__icon" hidden>
                    {iconChecked}
                    {iconUnChecked}
                </span>
            </span>
            {ebayLabel
                ? cloneElement<EbayLabelProps>(ebayLabel, {
                      ...ebayLabel.props,
                      position: "end",
                      htmlFor: id,
                  })
                : children}
        </>
    );
};

export default EbayCheckbox;
