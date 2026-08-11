import React, { ComponentProps, FC } from "react";
import type { ColumnType, TableHeaderSortHandler, TableSort } from "./types";
import EbayTableCell from "./table-cell";
import { EbayIconSortDown12 } from "../ebay-icon/icons/ebay-icon-sort-down-12";
import { EbayIconSortUp12 } from "../ebay-icon/icons/ebay-icon-sort-up-12";
import { EbayIconSort12 } from "../ebay-icon/icons/ebay-icon-sort-12";
import { EbayIconComponent } from "../ebay-icon/icons/types";

export type EbayTableHeaderProps = ComponentProps<"th"> & {
    columnType?: ColumnType;
    name?: string;
    sort?: TableSort;
    href?: string;
    // rowHeader is only used to be passed in the EbayTableRow cells
    // but for headers, this is a <th> so "rowHeader" is always true
    rowHeader?: boolean;
    onSort?: TableHeaderSortHandler;
};

export const EbayTableHeader: FC<EbayTableHeaderProps> = ({
    columnType,
    sort,
    href,
    children,
    onSort,
    ...rest
}: EbayTableHeaderProps) => {
    const ariaSortMap: Record<TableSort, ComponentProps<"th">["aria-sort"]> = {
        asc: "ascending",
        desc: "descending",
        none: "none",
    };

    const sortIconMap: Record<TableSort, EbayIconComponent> = {
        asc: EbayIconSortDown12,
        desc: EbayIconSortUp12,
        none: EbayIconSort12,
    };

    const Icon = sortIconMap[sort];

    const sortContent = sort ? (
        <>
            {" "}
            <Icon />
        </>
    ) : null;

    let content = children;
    if (href) {
        content = (
            <a href={href} onClick={onSort}>
                {children}
                {sortContent}
            </a>
        );
    } else if (sort) {
        content = (
            <button type="button" onClick={onSort}>
                {children}
                {sortContent}
            </button>
        );
    }

    return (
        <EbayTableCell {...rest} rowHeader columnType={columnType} aria-sort={sort ? ariaSortMap[sort] : undefined}>
            {content}
        </EbayTableCell>
    );
};

export default EbayTableHeader;
