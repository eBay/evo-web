import React, { ComponentProps, FC, Fragment } from "react";
import type { ColumnType } from "./types";
import classNames from "classnames";

export type EbayTableCellProps = ComponentProps<"td" | "th"> & {
    rowHeader?: boolean;
    columnType?: ColumnType;
};

const EbayTableCell: FC<EbayTableCellProps> = ({
    rowHeader,
    columnType,
    className,
    children,
    ...rest
}: EbayTableCellProps) => {
    const Tag = rowHeader ? "th" : "td";
    const Layout = columnType === "layout" ? "div" : Fragment;

    return (
        <Tag
            className={classNames("table-cell", className, {
                [`table-cell--${columnType}`]: columnType,
            })}
            {...rest}
        >
            <Layout {...(columnType === "layout" ? { className: "table-cell__layout" } : {})}>{children}</Layout>
        </Tag>
    );
};

export default EbayTableCell;
