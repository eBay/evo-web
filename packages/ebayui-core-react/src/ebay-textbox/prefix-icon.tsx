// TODO: make sure EbayTextboxIconProps needs button/anchor types
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { EbayIcon } from "../ebay-icon";
import { EbayTextboxIconProps } from "./types";

const EbayTextboxPrefixIcon: FC<EbayTextboxIconProps> = ({ children, name, icon, ...rest }: EbayTextboxIconProps) => {
    if (name) {
        return <EbayIcon name={name} {...(rest as any)} />;
    }

    return icon || children;
};

export default EbayTextboxPrefixIcon;
