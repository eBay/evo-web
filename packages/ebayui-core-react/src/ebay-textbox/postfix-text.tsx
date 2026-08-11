import React, { FC } from "react";
import { EbayTextboxPostfixTextProps } from "./types";

const EbayTextboxPostfixText: FC<EbayTextboxPostfixTextProps> = (props: EbayTextboxPostfixTextProps) => (
    <span {...props} />
);

EbayTextboxPostfixText.displayName = "EbayTextboxPostfixText";

export default EbayTextboxPostfixText;
