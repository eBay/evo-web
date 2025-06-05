import React from "react";
import EbaySvg from "../svg";
import { EbayIcon } from "../../ebay-icon";

export default {
    component: EbaySvg,
    title: "graphics & icons/ebay-svg",
};

export const FilteredIcons = () => (
    <>
        <EbaySvg icons={["notification16", "attention16"]} />
        <EbayIcon name="notification16" />
        <EbayIcon name="attention16" />
    </>
);
