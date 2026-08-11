import React, { ComponentProps, FC, ReactElement } from "react";
import type { EbayTableHeaderProps } from "./table-header";
import { filterByType } from "../utils";
import EbayTableCell from "./table-cell";
import { TableRowSelectHandler, TableMode } from "./types";
import { EbayCheckbox, CheckboxChangeHandler } from "../ebay-checkbox";

export type EbayTableRowProps = Omit<ComponentProps<"tr">, "onSelect"> & {
    name?: string;
    selected?: boolean;
    mode?: TableMode;
    a11ySelectRowText?: string;
    onSelect?: TableRowSelectHandler;

    /**
     * This property is used by EbayTable to make sure that headers match up with the correct cells
     * NOTE: The flag "@deprecated" is only to not show this property in the autocomplete list on the top
     * @deprecated
     */
    __headers?: ReactElement<EbayTableHeaderProps>[];
};

const EbayTableRow: FC<EbayTableRowProps> = ({
    name,
    className,
    selected,
    mode,
    a11ySelectRowText,
    children,
    onSelect,
    __headers,
    ...rest
}: EbayTableRowProps) => {
    const cells = filterByType(children, EbayTableCell);

    const handleCheckboxChange: CheckboxChangeHandler = (event, { checked }) => {
        onSelect(event, { name, selected: checked });
    };

    return (
        <tr className={className} {...rest}>
            {mode === "selection" && (
                <EbayTableCell rowHeader key="selection-cell">
                    <EbayCheckbox
                        checked={selected}
                        aria-label={a11ySelectRowText || "Select row"}
                        onChange={handleCheckboxChange}
                    />
                </EbayTableCell>
            )}
            {__headers?.map((header, index) =>
                React.cloneElement(cells[index], {
                    rowHeader:
                        typeof header.props.rowHeader === "boolean"
                            ? header.props.rowHeader
                            : cells[index].props.rowHeader,
                    columnType:
                        typeof header.props.columnType === "string"
                            ? header.props.columnType
                            : cells[index].props.columnType,
                }),
            )}
        </tr>
    );
};

export default EbayTableRow;
