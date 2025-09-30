import React, { FC, Key, ReactNode, RefObject, StyleHTMLAttributes, ComponentProps } from "react";
import { withForwardRef } from "../common/component-utils";
import classNames from "classnames";
import { EbayEventHandler } from "../common/event-utils/types";
import { EbayIconArrowLeft16 } from "../ebay-icon/icons/ebay-icon-arrow-left-16";
import { EbayIconArrowRight16 } from "../ebay-icon/icons/ebay-icon-arrow-right-16";

export type PaginationItemType = "previous" | "next" | "page" | "separator";
type HtmlProps = Omit<ComponentProps<"button">, "type" | "onSelect"> &
    Omit<ComponentProps<"a">, "onSelect"> &
    Omit<ComponentProps<"li">, "onSelect">;
export type PaginationItemProps = HtmlProps & {
    pageIndex?: number;
    key?: Key;
    type?: PaginationItemType;
    current?: boolean;
    disabled?: boolean;
    href?: string;
    hide?: boolean;
    a11yPreviousText?: string;
    a11yNextText?: string;
    onPrevious?: EbayEventHandler;
    onNext?: EbayEventHandler;
    onSelect?: EbayEventHandler<{ value: string; index: number }>;
    style?: StyleHTMLAttributes<HTMLButtonElement & HTMLAnchorElement>;
    forwardedRef?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
    children?: ReactNode;
};

const EbayPaginationItem: FC<PaginationItemProps> = ({
    pageIndex = 0,
    key,
    current,
    disabled,
    type = "page",
    href,
    hide,
    children,
    a11yPreviousText = "Previous page",
    a11yNextText = "Next page",
    onSelect,
    onNext,
    onPrevious,
    className,
    style,
    forwardedRef,
    ...rest
}) => {
    const handlePageNumber = (e) => {
        onSelect(e, { value: e.currentTarget?.innerText || "", index: pageIndex });
    };

    const handleNextPage = (e) => {
        if (!e.currentTarget.getAttribute("aria-disabled")) {
            onNext(e);
        }
    };

    const handlePreviousPage = (e) => {
        if (!e.currentTarget.getAttribute("aria-disabled")) {
            onPrevious(e);
        }
    };
    const isAnchor = !!href;
    const ButtonOrAnchor = isAnchor ? "a" : "button";
    const iconClassName = isAnchor ? "icon-link" : "icon-btn";
    const arrowStyle = { ...style, minWidth: "40px" };
    switch (type) {
        case "previous":
            return (
                <ButtonOrAnchor
                    {...rest}
                    ref={forwardedRef}
                    aria-disabled={disabled ? "true" : undefined}
                    aria-label={a11yPreviousText}
                    href={disabled ? undefined : href}
                    className={classNames(className, iconClassName, "pagination__previous")}
                    style={arrowStyle}
                    onClick={handlePreviousPage}
                >
                    <EbayIconArrowLeft16 />
                </ButtonOrAnchor>
            );
        case "next":
            return (
                <ButtonOrAnchor
                    {...rest}
                    ref={forwardedRef}
                    aria-disabled={disabled ? "true" : undefined}
                    aria-label={a11yNextText}
                    href={disabled ? undefined : href}
                    className={classNames(className, iconClassName, "pagination__next")}
                    style={arrowStyle}
                    onClick={handleNextPage}
                >
                    <EbayIconArrowRight16 />
                </ButtonOrAnchor>
            );
        case "separator":
            return (
                <span
                    key={key}
                    style={style}
                    className={classNames(className, "pagination__item")}
                    ref={forwardedRef}
                    role="separator"
                >
                    {children}
                </span>
            );
        default:
            return (
                <li {...rest} hidden={hide}>
                    <ButtonOrAnchor
                        ref={forwardedRef}
                        aria-current={current ? "page" : undefined}
                        href={href}
                        className={classNames(className, "pagination__item")}
                        style={style}
                        key={key}
                        onClick={handlePageNumber}
                    >
                        {children}
                    </ButtonOrAnchor>
                </li>
            );
    }
};

export default withForwardRef(EbayPaginationItem);
