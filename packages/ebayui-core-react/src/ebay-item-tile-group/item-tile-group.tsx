import React, { FC, ComponentProps, cloneElement } from "react";
import cx from "classnames";
import { filterByType } from "../common/component-utils";
import { EbayItemTile, ItemTileLayout } from "../ebay-item-tile";
import { FilePreviewCardActionHandler } from "./types";

export type EbayItemTileGroupProps = ComponentProps<"div"> & {
    layout?: ItemTileLayout;
    onAction?: FilePreviewCardActionHandler;
};

const EbayItemTileGroup: FC<EbayItemTileGroupProps> = ({ layout, className, onAction, children, ...rest }) => {
    const itemTileComponents = filterByType(children, EbayItemTile);

    return (
        <div
            className={cx("layout-grid item-tile-group", className, {
                "item-tile-group--list-view": layout === "list",
            })}
            {...rest}
        >
            <ul>
                {itemTileComponents.map((itemTile, i) => (
                    <li key={i}>
                        {cloneElement(itemTile, {
                            layout,
                            onAction: (e) => onAction && onAction(e, { index: i }),
                        })}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EbayItemTileGroup;
