// TODO: make sure EbayTextboxIconProps needs button/anchor types
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { EbayTextboxIconProps } from "./types";
import { EbayIcon } from "../ebay-icon";
import { EbayIconButton } from "../ebay-icon-button";

const EbayTextboxPostfixIcon: FC<EbayTextboxIconProps> = ({
    name,
    buttonAriaLabel,
    onClick = () => {},
    ...rest
}: EbayTextboxIconProps) =>
    buttonAriaLabel ? (
        <EbayIconButton aria-label={buttonAriaLabel} icon={name} transparent onClick={onClick} {...(rest as any)} />
    ) : (
        <EbayIcon name={name} {...(rest as any)} />
    );

export default EbayTextboxPostfixIcon;
