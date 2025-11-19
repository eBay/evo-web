import React, { FC, ReactNode } from "react";
import EbayButtonCell from "./button-cell";
import EbayButtonText from "./button-text";
import { EbayIconChevronDown12 } from "../ebay-icon/icons/ebay-icon-chevron-down-12";

const EbayButtonExpand: FC<{ children?: ReactNode }> = ({ children }) =>
    children ? (
        <EbayButtonCell>
            <EbayButtonText>{children}</EbayButtonText>
            <EbayIconChevronDown12 />
        </EbayButtonCell>
    ) : (
        <EbayIconChevronDown12 />
    );

export default EbayButtonExpand;
