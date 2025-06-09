import React, { FC, ReactNode } from "react";
import EbayButtonCell from "./button-cell";
import EbayButtonText from "./button-text";
import { EbayIcon } from "../ebay-icon";

const EbayButtonExpand: FC<{ children?: ReactNode }> = ({ children }) =>
    children ? (
        <EbayButtonCell>
            <EbayButtonText>{children}</EbayButtonText>
            <EbayIcon name="chevronDown12" />
        </EbayButtonCell>
    ) : (
        <EbayIcon name="chevronDown12" />
    );

export default EbayButtonExpand;
