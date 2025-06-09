import React, { FC } from "react";
import { EbayTextboxPrefixTextProps } from "./types";

const EbayTextboxPrefixText: FC<EbayTextboxPrefixTextProps> = (props: EbayTextboxPrefixTextProps) => (
    <span {...props} />
);

export default EbayTextboxPrefixText;
