/**
 * This Component is used only for finding it as a child of EbayInfotip
 * and pass the properties to TooltipContent
 */
import React, { FC } from "react";
import { TooltipContentProps } from "../common/tooltip-utils/tooltip-content";

const EbayInfotipContent: FC<TooltipContentProps> = ({ children }) => <>{children}</>;

export default EbayInfotipContent;
