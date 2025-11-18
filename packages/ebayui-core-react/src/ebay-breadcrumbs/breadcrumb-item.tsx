import React, { ComponentProps, FC, MouseEventHandler, ReactNode } from "react";
import { EbayIconChevronRight12 } from "../ebay-icon/icons/ebay-icon-chevron-right-12";

type ItemAttributes = ComponentProps<"a"> & ComponentProps<"button">;

export type BreadcrumbItemProps = ItemAttributes & {
    children: ReactNode;
    tag?: "a" | "button";
    href?: string;
    isLastItem?: boolean;
    onClick?: MouseEventHandler;
    _sp?: string;
    navsrc?: string;
};

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
    tag: Item = "button",
    isLastItem = false,
    href,
    children,
    onClick,
    ...rest
}) => {
    const isLink = Item === "a";
    const itemAttr: ItemAttributes = {
        ...rest,
        ...(isLastItem ? { "aria-current": "location" } : {}),
        href: isLink ? href : undefined,
        onClick: isLink ? undefined : onClick,
    };
    return (
        <li>
            <Item {...itemAttr}>{children}</Item>
            {!isLastItem && <EbayIconChevronRight12 />}
        </li>
    );
};

export default BreadcrumbItem;
