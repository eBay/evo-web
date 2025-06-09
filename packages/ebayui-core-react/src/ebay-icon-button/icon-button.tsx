import React, { ComponentProps, FC, KeyboardEvent, RefObject } from "react";
import classNames from "classnames";
import { EbayIcon, Icon } from "../ebay-icon";
import { EbayBadge } from "../ebay-badge";
import { withForwardRef } from "../common/component-utils";
import { EbayKeyboardEventHandler } from "../common/event-utils/types";
import { Size } from "../ebay-button";

export type EbayIconButtonProps = ComponentProps<"button"> &
    ComponentProps<"a"> & {
        href?: string;
        icon: Icon;
        badgeNumber?: number;
        badgeAriaLabel?: string;
        transparent?: boolean;
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
    size,
    onEscape = () => {},
    onKeyDown = () => {},
    ...rest
}) => {
    const classPrefix = href ? "icon-link" : "icon-btn";
    const className = classNames(extraClasses, classPrefix, size && `${classPrefix}--${size}`, {
        [`${classPrefix}--badged`]: badgeNumber,
        [`${classPrefix}--transparent`]: transparent,
    });
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
