import React, { ComponentProps, FC } from "react";
import { EbayIcon } from "../ebay-icon";

export type EbayImagePlaceholderProps = Omit<ComponentProps<typeof EbayIcon>, "name" | "iconPrefix">;

const EbayImagePlaceholder: FC<EbayImagePlaceholderProps> = (props) => (
    <EbayIcon {...props} name="imagePlaceholder" __type="none" />
);

export default EbayImagePlaceholder;
