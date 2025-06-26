import React, { ComponentProps, FC } from "react";
import { EbayIcon } from "../ebay-icon";
import { Icon } from "./types";

export type EbayFlagProps = Omit<ComponentProps<typeof EbayIcon>, "name"> & {
    name: Icon;
};

const EbayFlag: FC<EbayFlagProps> = (props) => <EbayIcon __type="flag" {...props} />;

export default EbayFlag;
