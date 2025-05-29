import React from "react";
import { EbayProgressSpinner } from "../index";

export default {
    title: "progress/ebay-progress-spinner",
};

export const DefaultSmallLarge = {
    render: () => (
        <>
            <p>
                <EbayProgressSpinner />
            </p>
            <p>
                <EbayProgressSpinner size="small" aria-label="Stand by..." />
            </p>
            <p>
                <EbayProgressSpinner size="large" aria-label="Stand by..." />
            </p>
        </>
    ),

    name: "Default, Small & Large",
};
