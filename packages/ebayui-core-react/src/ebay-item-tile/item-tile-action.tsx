import { FC } from "react";
import { EbayIconButtonProps } from "../ebay-icon-button";

export type EbayItemTileActionProps = Omit<EbayIconButtonProps, "ref">;

const EbayItemTileAction: FC<EbayItemTileActionProps> = () => null;

EbayItemTileAction.displayName = "EbayItemTileAction";

export default EbayItemTileAction;
