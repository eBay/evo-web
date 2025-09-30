import React, { ComponentProps, FC } from "react";
import { EbayIcon } from "../ebay-icon";
import { EbayIconImagePlaceholder } from "../ebay-icon/icons/ebay-icon-image-placeholder";

export type EbayImagePlaceholderProps = Omit<ComponentProps<typeof EbayIcon>, "name" | "iconPrefix">;

const EbayImagePlaceholder: FC<EbayImagePlaceholderProps> = (props) => <EbayIconImagePlaceholder {...props} />;

export default EbayImagePlaceholder;
