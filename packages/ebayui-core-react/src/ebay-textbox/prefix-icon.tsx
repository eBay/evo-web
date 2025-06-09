// TODO: make sure EbayTextboxIconProps needs button/anchor types
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { EbayIcon } from "../ebay-icon";
import { EbayTextboxIconProps } from "./types";

const EbayTextboxPrefixIcon: FC<EbayTextboxIconProps> = ({ name, ...rest }: EbayTextboxIconProps) => (
    <EbayIcon name={name} {...(rest as any)} />
);

export default EbayTextboxPrefixIcon;
