import React, { ComponentProps, FC, KeyboardEvent, RefObject } from "react";
import classNames from "classnames";
import { EbayIcon, Icon } from "../ebay-icon";
import { EbayBadge } from "../ebay-badge";
import { withForwardRef } from "../common/component-utils";
import { EbayKeyboardEventHandler } from "../common/event-utils/types";
import { Priority, Size } from "../ebay-button";

export type EbayIconButtonProps = ComponentProps<"button"> &
    ComponentProps<"a"> & {
        href?: string;
        icon: Icon;
        badgeNumber?: number;
        badgeAriaLabel?: string;
        transparent?: boolean;
        priority?: Priority;
        size?: Size;
        forwardedRef?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
        onEscape?: EbayKeyboardEventHandler;
    };

const EbayIconButton: FC<EbayIconButtonProps> = ({
    href,
    icon,
    badgeNumber,
    badgeAriaLabel,
    transparent,
    className: extraClasses,
    forwardedRef,
    priority = "none",
    size,
    onEscape = () => {},
    onKeyDown = () => {},
    ...rest
}) => {
    const classPrefix = href ? "icon-link" : "icon-btn";
    const priorityStyles: { [key in Priority]: string } = {
        primary: `${classPrefix}--primary`,
        secondary: `${classPrefix}--secondary`,
        tertiary: `${classPrefix}--tertiary`,
        none: "",
    };
    const className = classNames(
        extraClasses,
        classPrefix,
        size && `${classPrefix}--${size}`,
        {
            [`${classPrefix}--badged`]: badgeNumber,
            [`${classPrefix}--transparent`]: transparent,
        },
        priorityStyles[priority],
    );
    const children = (
        <>
            <EbayIcon name={icon} />
            {badgeNumber && <EbayBadge type="icon" number={badgeNumber} aria-label={badgeAriaLabel} />}
        </>
    );

    const keyDownHandler = (e: KeyboardEvent<HTMLButtonElement & HTMLAnchorElement>) => {
        if (e.key === "Escape" || e.key === "Esc") {
            onEscape(e);
        }
        onKeyDown(e);
    };

    return href ? (
        <a ref={forwardedRef} className={className} href={href} onKeyDown={keyDownHandler} {...rest}>
            {children}
        </a>
    ) : (
        <button ref={forwardedRef} type="button" className={className} onKeyDown={keyDownHandler} {...rest}>
            {children}
        </button>
    );
};

export default withForwardRef(EbayIconButton);
