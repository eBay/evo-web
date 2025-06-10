import React, { FC, ComponentProps } from "react";

const EbayItemTileSectionTitle: FC<ComponentProps<"a">> = ({ href, children, ...rest }) => (
    <a href={href} className="item-tile__title" {...rest}>
        {children}
    </a>
);

export default EbayItemTileSectionTitle;
