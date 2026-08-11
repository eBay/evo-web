import React, { ComponentProps, FC } from "react";
import { EbayIcon } from "../ebay-icon";
import { Icon } from "./types";

export type EbayFlagIconProps = Omit<ComponentProps<typeof EbayIcon>, "name"> & {
    name: Icon;
};

const EbayFlagIcon: FC<EbayFlagIconProps> = (props) => <EbayIcon __type="flag" {...props} />;

export default EbayFlagIcon;
