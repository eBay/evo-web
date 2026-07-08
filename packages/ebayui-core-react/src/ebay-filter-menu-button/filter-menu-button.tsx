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
    selectionDisplay?: "count" | "label";
    a11yFilterAppliedText?: string;
    onExpand?: () => void;
    onCollapse?: () => void;
};

const EbayFilterMenuButton: React.FC<EbayFilterMenuButtonProps> = ({
    className,
    text,
    selectionDisplay,
    a11yFilterAppliedText = "Filter Applied",
    "aria-label": ariaLabel,
    onExpand,
    onCollapse,
    onChange,
    children,
    ...filterMenuProps
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const items = filterByType(children, EbayFilterMenuItem);
    const [checkedValues, setCheckedValues] = useState<string[]>(() =>
        items.filter((item) => item.props.checked).map((item) => item.props.value as string),
    );
    const [checkedIndices, setCheckedIndices] = useState<number[]>(() =>
        items.reduce<number[]>((acc, item, i) => (item.props.checked ? [...acc, i] : acc), []),
    );
    const hasChecked = checkedValues.length > 0;

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
        setCheckedValues(data.checked ?? []);
        setCheckedIndices(data.checkedIndex ?? []);
    };

    return (
        <span ref={ref} className={classNames("filter-menu-button", className)}>
            <button
                type="button"
                className={classNames(
                    "filter-menu-button__button",
                    hasChecked && "filter-menu-button__button--selected",
                )}
                ref={refs.setHost}
                aria-expanded="false"
                aria-haspopup="true"
                aria-label={ariaLabel}
            >
                <span className="filter-menu-button__button-cell">
                    <span className="filter-menu-button__button-text">
                        {text}
                        {selectionDisplay === "count" && hasChecked && (
                            <span className="filter-menu-button__count">{`(${checkedValues.length})`}</span>
                        )}
                        {selectionDisplay === "label" && hasChecked && items[checkedIndices[0]]?.props.children}
                        {selectionDisplay === "label" && checkedValues.length > 1 && (
                            <span className="filter-menu-button__count">{`(+${checkedValues.length - 1})`}</span>
                        )}
                    </span>
                    <EbayIconChevronDown12 />
                </span>
                {hasChecked && <span className="clipped">{a11yFilterAppliedText}</span>}
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
