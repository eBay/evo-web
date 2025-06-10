import React, { FC, ComponentProps } from "react";
import cx from "classnames";
import { EbayEventHandler } from "../common/event-utils/types";
import { filterByType, findComponent } from "../common/component-utils";
import { EbayFilePreviewCardAction } from "../ebay-file-preview-card";
import { FilePreviewType, EbayFilePreviewCard } from "../ebay-file-preview-card";
import EbayItemTileAction from "./item-tile-action";
import EbayItemTileSupertitle from "./item-tile-super-title";
import EbayItemTileTitle from "./item-tile-title";
import EbayItemTileSubtitle from "./item-tile-sub-title";
import EbayItemTileDescription from "./item-tile-description";
import EbayItemTileSections from "./item-tile-sections";
import { ItemTileLayout } from "./types";

export type EbayItemTileProps = ComponentProps<"div"> & {
    layout?: ItemTileLayout;
    href?: string;
    file?: File | FilePreviewType;
    onAction?: EbayEventHandler<HTMLElement>;
};

const EbayItemTile: FC<EbayItemTileProps> = ({ file, href, layout, className, onAction, children, ...rest }) => {
    const supertitle = findComponent(children, EbayItemTileSupertitle);
    const title = findComponent(children, EbayItemTileTitle);
    const subtitle = findComponent(children, EbayItemTileSubtitle);
    const action = findComponent(children, EbayItemTileAction);
    const descriptions = filterByType(children, EbayItemTileDescription);

    return (
        <div
            className={cx(className, "item-tile", {
                "item-tile--list-view": layout === "list",
            })}
            {...rest}
        >
            {file && (
                <div className="item-tile__header">
                    <EbayFilePreviewCard file={file} href={href} onAction={onAction}>
                        {action && <EbayFilePreviewCardAction {...action.props} />}
                    </EbayFilePreviewCard>
                </div>
            )}
            <div className="item-tile__body">
                {supertitle}
                <EbayItemTileSections title={title} subtitle={subtitle} descriptions={descriptions} />
            </div>
        </div>
    );
};

export default EbayItemTile;
