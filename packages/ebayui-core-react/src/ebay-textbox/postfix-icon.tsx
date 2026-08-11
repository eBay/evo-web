// TODO: make sure EbayTextboxIconProps needs button/anchor types
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { EbayTextboxIconProps } from "./types";
import { EbayIcon } from "../ebay-icon";
import { EbayIconButton } from "../ebay-icon-button";

const EbayTextboxPostfixIcon: FC<EbayTextboxIconProps> = ({
    children,
    name,
    icon,
    buttonAriaLabel,
    onClick = () => {},
    ...rest
}: EbayTextboxIconProps) => {
    if (name || icon) {
        return buttonAriaLabel ? (
            <EbayIconButton
                aria-label={buttonAriaLabel}
                icon={icon || name}
                transparent
                onClick={onClick}
                {...(rest as any)}
            />
        ) : (
            icon || <EbayIcon name={name} {...(rest as any)} />
        );
    }

    return children;
};

export default EbayTextboxPostfixIcon;
