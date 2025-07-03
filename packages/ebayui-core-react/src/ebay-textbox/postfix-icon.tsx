// TODO: make sure EbayTextboxIconProps needs button/anchor types
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { EbayTextboxIconProps } from "./types";
import { EbayIcon } from "../ebay-icon";
import { EbayIconButton } from "../ebay-icon-button";

const EbayTextboxPostfixIcon: FC<EbayTextboxIconProps> = ({
    children,
    name,
    buttonAriaLabel,
    onClick = () => {},
    ...rest
}: EbayTextboxIconProps) => {
    if (name) {
        return buttonAriaLabel ? (
            <EbayIconButton aria-label={buttonAriaLabel} icon={name} transparent onClick={onClick} {...(rest as any)} />
        ) : (
            <EbayIcon name={name} {...(rest as any)} />
        );
    }

    return children;
};

export default EbayTextboxPostfixIcon;
