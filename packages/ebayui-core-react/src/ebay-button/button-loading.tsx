import React, { FC } from "react";
import EbayButtonCell from "./button-cell";
import { EbayProgressSpinner } from "../ebay-progress-spinner";

const EbayButtonLoading: FC = () => (
    <EbayButtonCell>
        <EbayProgressSpinner />
    </EbayButtonCell>
);

export default EbayButtonLoading;
