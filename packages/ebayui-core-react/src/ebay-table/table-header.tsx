import React, { ComponentProps, FC } from "react";
import type { ColumnType, TableHeaderSortHandler, TableSort } from "./types";
import EbayTableCell from "./table-cell";
import { EbayIcon, Icon } from "../ebay-icon";

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

    const sortIconMap: Record<TableSort, Icon> = {
        asc: "sortDown12",
        desc: "sortUp12",
        none: "sort12",
    };

    const sortContent = sort ? (
        <>
            {" "}
            <EbayIcon name={sortIconMap[sort]} />
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
