import React, { FC } from "react";
import { symbols } from "./symbols";
import { symbols as flagSymbols } from "./flag-symbols";
import { Icon } from "../ebay-icon";
import { kebabCased } from "../ebay-icon/icon";

export type EbaySvgProps = {
    icons?: Icon[];
    flags?: boolean;
};

const EbaySvg: FC<EbaySvgProps> = ({ icons, flags }: EbaySvgProps) => {
    const iconIds = icons && new Set(icons.map((icon) => `icon-${kebabCased(icon)}`));

    // Use position absolute and height/width 0px instead of display none
    // so <defs> element for spectrum icons are shown
    return (
        <svg style={{ position: "absolute", height: "0px", width: "0px" }} focusable={false} aria-hidden="true">
            {!iconIds ? symbols : symbols.filter(({ props, type }) => type === "defs" || iconIds.has(props.id))}
            {flags ? flagSymbols : null}
        </svg>
    );
};

export default EbaySvg;
