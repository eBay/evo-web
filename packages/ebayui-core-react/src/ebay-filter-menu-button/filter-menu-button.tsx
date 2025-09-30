import React, { FC, RefCallback, useRef, useState } from "react";
import classNames from "classnames";
import { useExpander, useFloatingDropdown } from "../common/dropdown";
import {
    EbayFilterMenu,
    EbayFilterMenuItem,
    EbayFilterMenuProps,
    FilterMenuChange,
    FilterMenuFooterClick,
    FilterMenuFormSubmit,
} from "../ebay-filter-menu";
import { filterByType } from "../utils";
import { EbayIconChevronDown12 } from "../ebay-icon/icons/ebay-icon-chevron-down-12";

export type EbayFilterMenuButtonProps = EbayFilterMenuProps & {
    className?: string;
    text: string;
    onExpand?: () => void;
    onCollapse?: () => void;
};

const EbayFilterMenuButton: React.FC<EbayFilterMenuButtonProps> = ({
    className,
    text,
    "aria-label": ariaLabel,
    onExpand,
    onCollapse,
    onChange,
    children,
    ...filterMenuProps
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const items = filterByType(children, EbayFilterMenuItem);
    const [hasChecked, setHasChecked] = useState(() => items.some((item) => item.props.checked));
    const { isExpanded, collapse } = useExpander({
        ref,
        options: {
            hostSelector: ".filter-menu-button__button",
            contentSelector: ".filter-menu-button__menu",
            focusManagement: "interactive",
            expandOnClick: true,
            autoCollapse: true,
            alwaysDoFocusManagement: true,
        },
        onExpand,
        onCollapse,
    });

    const { overlayStyles, refs } = useFloatingDropdown({
        open: isExpanded,
    });

    const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
        filterMenuProps.onKeyDown?.(event);
        if (event.key === "Escape") {
            collapse();
        }
    };

    const handleMenuFormSubmit: FilterMenuFormSubmit = (...args) => {
        filterMenuProps.onFormSubmit?.(...args);
        collapse();
    };

    const handleFooterButtonClick: FilterMenuFooterClick = (...args) => {
        filterMenuProps.onFooterClick?.(...args);
        collapse();
    };

    const handleChange: FilterMenuChange = (event, data) => {
        onChange?.(event, data);
        setHasChecked(data.checked?.length > 0);
    };

    return (
        <span ref={ref} className={classNames("filter-menu-button", className)}>
            <button
                type="button"
                className="filter-menu-button__button"
                ref={refs.setHost}
                aria-expanded="false"
                aria-haspopup="true"
                aria-label={ariaLabel}
                aria-pressed={hasChecked}
            >
                <span className="filter-menu-button__button-cell">
                    <span className="filter-menu-button__button-text">{text}</span>
                    <EbayIconChevronDown12 />
                </span>
            </button>
            <EbayFilterMenu
                {...filterMenuProps}
                onChange={handleChange}
                classPrefix="filter-menu-button"
                onKeyDown={handleMenuKeyDown}
                onFooterClick={handleFooterButtonClick}
                onFormSubmit={handleMenuFormSubmit}
                ref={refs.setOverlay as unknown as RefCallback<FC<EbayFilterMenuProps>>}
                style={overlayStyles}
            >
                {children}
            </EbayFilterMenu>
        </span>
    );
};

export default EbayFilterMenuButton;
