// Keyboard event is handle by ListboxButton component, disabling eslint
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus */
import React, { ComponentProps, FC, MouseEvent, ReactNode, RefCallback, RefObject } from "react";
import classNames from "classnames";
import { EbayIcon } from "../ebay-icon";

export type EbayListboxButtonOptionProps = ComponentProps<"input"> & {
    selected?: boolean;
    index?: number;
    icon?: ReactNode;
    onClick?: (event: MouseEvent<HTMLDivElement>, value: ComponentProps<"input">["value"], index: number) => void;
    innerRef?: RefObject<HTMLDivElement> | RefCallback<HTMLDivElement>;
};

const ListboxOption: FC<EbayListboxButtonOptionProps> = ({
    value,
    children,
    selected,
    onClick,
    index,
    icon,
    innerRef,
    className,
    ...rest
}) => {
    const wrapperClassName = classNames(`listbox-button__option`, className, {
        "listbox-button__option--active": selected,
    });
    return (
        <div
            {...rest}
            className={wrapperClassName}
            role="option"
            aria-selected={selected}
            ref={innerRef}
            onClick={(e) => {
                onClick(e, value, index);
            }}
        >
            <span className="listbox-button__value">
                {icon}
                {children}
            </span>
            <EbayIcon name="tick16" />
        </div>
    );
};

export default ListboxOption;
