import React, { FC } from "react";
import { EbayTextboxPrefixTextProps } from "./types";

const EbayTextboxPrefixText: FC<EbayTextboxPrefixTextProps> = (props: EbayTextboxPrefixTextProps) => (
    <span {...props} />
);

EbayTextboxPrefixText.displayName = "EbayTextboxPrefixText";

export default EbayTextboxPrefixText;
