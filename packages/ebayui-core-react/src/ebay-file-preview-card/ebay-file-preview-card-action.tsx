import { FC } from "react";
import { EbayIconButtonProps } from "../ebay-icon-button";

export type EbayFilePreviewCardActionProps = Omit<EbayIconButtonProps, "ref">;

const EbayFilePreviewCardAction: FC<EbayFilePreviewCardActionProps> = () => null;

EbayFilePreviewCardAction.displayName = "EbayFilePreviewCardAction";

export default EbayFilePreviewCardAction;
