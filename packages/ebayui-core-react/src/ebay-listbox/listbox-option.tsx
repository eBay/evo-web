import React, { ComponentProps, FC, ReactElement } from "react";
import classNames from "classnames";
import { filterByType } from "../utils";
import { EbayIconTick16 } from "../ebay-icon/icons/ebay-icon-tick-16";
import { EbayListboxOptionDescription } from "./listbox-option-description";

export type EbayListboxOptionProps = ComponentProps<"div"> & {
    icon?: ReactElement;
    text?: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
    a11ySelectedText?: string;
};

export const EbayListboxOption: FC<EbayListboxOptionProps> = ({
    className,
    icon,
    text,
    children,
    disabled,
    tabIndex,
    selected,
    a11ySelectedText = "selected",
    ...rest
}) => {
    const description = filterByType(children, EbayListboxOptionDescription);
    const displayText = text || (!description?.length ? children : "");

    return (
        <div
            {...rest}
            tabIndex={disabled ? -1 : tabIndex}
            className={classNames("listbox__option", className)}
            aria-disabled={disabled}
            aria-selected={selected}
            role="option"
        >
            {icon ? (
                <span className="listbox__value">
                    {icon}
                    {displayText ? <span>{displayText}</span> : null}
                    {description?.length ? description : null}
                    {selected && <span className="clipped">{a11ySelectedText}</span>}
                </span>
            ) : (
                <>
                    <span className="listbox__value">
                        {displayText}
                        {selected && <span className="clipped">{a11ySelectedText}</span>}
                    </span>
                    {description?.length ? description : null}
                </>
            )}
            <EbayIconTick16 />
        </div>
    );
};
