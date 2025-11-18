import React, { ComponentProps, FC, useEffect, useRef } from "react";
import classNames from "classnames";
import { EbayBadge } from "../ebay-badge";
import { EbayIconTick16 } from "../ebay-icon/icons/ebay-icon-tick-16";

export type EbayMenuItemType = "button";
export type EbayFakeMenuItemProps = Omit<ComponentProps<"a">, "onKeyDown"> &
    Omit<ComponentProps<"button">, "onKeyDown"> & {
        current?: boolean;
        disabled?: boolean;
        autoFocus?: boolean;
        type?: EbayMenuItemType;
        badgeNumber?: number;
        badgeAriaLabel?: string;
    };

const EbayMenuItem: FC<EbayFakeMenuItemProps> = ({
    className,
    disabled,
    autoFocus,
    type,
    badgeNumber,
    badgeAriaLabel,
    children,
    ...rest
}) => {
    const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
    const hasBadge = badgeNumber !== undefined;

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    });

    const itemProps = {
        ...rest,
        ref,
        className: classNames(className, "fake-menu__item", hasBadge && "menu__item--badged"),
        "aria-label": badgeAriaLabel,
    };

    const tick = <EbayIconTick16 />;
    // todo: remove this workaround when Skin team fixes https://github.com/eBay/skin/issues/2208
    const badgeStyleFix = {
        marginLeft: "var(--spacing-100)",
        marginRight: "var(--spacing-100)",
    };
    const badge = hasBadge && <EbayBadge type="menu" number={badgeNumber} style={badgeStyleFix} />;

    return type === "button" ? (
        <button {...itemProps} type="button" disabled={disabled}>
            <span>
                {children}
                {badge}
            </span>
            {tick}
        </button>
    ) : (
        <a {...itemProps} aria-disabled={disabled ? "true" : undefined}>
            <span>
                {children}
                {badge}
            </span>
            {tick}
        </a>
    );
};

export default EbayMenuItem;
