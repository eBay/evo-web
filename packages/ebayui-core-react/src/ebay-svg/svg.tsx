import React, { FC } from "react";
import { symbols } from "./symbols";
import { Icon } from "../ebay-icon";
import { kebabCased } from "../ebay-icon/icon";

export type EbaySvgProps = {
    icons?: Icon[];
};

const EbaySvg: FC<EbaySvgProps> = ({ icons }: EbaySvgProps) => {
    const iconIds = icons && new Set(icons.map((icon) => kebabCased(icon)));

    // Use position absolute and height/width 0px instead of display none
    // so <defs> element for spectrum icons are shown
    return (
        <svg style={{ position: "absolute", height: "0px", width: "0px" }} focusable={false} aria-hidden="true">
            {!iconIds
                ? symbols
                : symbols.filter(({ props, type }) => type === "defs" || iconIds.has(props.id.replace(/^(icon)-/, "")))}
        </svg>
    );
};

export default EbaySvg;
