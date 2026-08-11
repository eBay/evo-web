import React from "react";
import { symbols } from "./flag-symbols";

const EbayFlagsSvg = () => {
    // Use position absolute and height/width 0px instead of display none
    // so <defs> element for spectrum icons are shown
    return (
        <svg style={{ position: "absolute", height: "0px", width: "0px" }} focusable={false} aria-hidden="true">
            {symbols}
        </svg>
    );
};

export default EbayFlagsSvg;
