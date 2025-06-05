import React, { ComponentProps, FC, ReactElement } from "react";
import classNames from "classnames";
import { filterByType } from "../utils";
import { EbayIcon } from "../ebay-icon";
import { EbayListboxOptionDescription } from "./listbox-option-description";

export type EbayListboxOptionProps = ComponentProps<"div"> & {
    icon?: ReactElement;
    text?: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
};

export const EbayListboxOption: FC<EbayListboxOptionProps> = ({
    className,
    icon,
    text,
    children,
    disabled,
    tabIndex,
    selected,
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
                </span>
            ) : (
                <>
                    <span className="listbox__value">{displayText}</span>
                    {description?.length ? description : null}
                </>
            )}
            <EbayIcon name="tick16" />
        </div>
    );
};
