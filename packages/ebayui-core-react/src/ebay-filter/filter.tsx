import classnames from "classnames";
import React, { ComponentProps, FC, MouseEventHandler, useState } from "react";
import { FilterClickHandler } from "./types";

export type EbayFilterProps = Omit<ComponentProps<"button"> & ComponentProps<"a">, "onClick" | "type"> & {
    selected?: boolean;
    defaultSelected?: boolean;
    a11ySelectedText?: string;
    useAriaPressed?: boolean;
    onClick?: FilterClickHandler;
};

const EbayFilter: FC<EbayFilterProps> = ({
    defaultSelected,
    selected: controlledSelected,
    href,
    className,
    useAriaPressed,
    a11ySelectedText,
    disabled,
    children,
    onClick = () => {},
    ...rest
}: EbayFilterProps) => {
    const baseClass = href ? "filter-link" : "filter-button";
    const [selected, setSelected] = useState<boolean>(defaultSelected);
    const currentSelected = typeof controlledSelected !== "undefined" ? controlledSelected : selected;
    const Component = href ? "a" : "button";

    const handleClick: MouseEventHandler<HTMLButtonElement & HTMLAnchorElement> = (event) => {
        if (!disabled) {
            const newSelected = !currentSelected;
            setSelected(newSelected);
            onClick(event, {
                selected: newSelected,
            });
        }
    };

    return (
        <Component
            {...rest}
            disabled={disabled}
            className={classnames(baseClass, className, `${baseClass}--${currentSelected ? "selected" : "unselected"}`)}
            type={!href ? "button" : undefined}
            href={href}
            aria-pressed={useAriaPressed !== false && !href && currentSelected ? "true" : undefined}
            onClick={handleClick}
        >
            <span className={`${baseClass}__cell`}>
                <span>{children}</span>
                {href && currentSelected ? <span className="clipped">- {a11ySelectedText || "Selected"}</span> : null}
            </span>
        </Component>
    );
};

export default EbayFilter;
