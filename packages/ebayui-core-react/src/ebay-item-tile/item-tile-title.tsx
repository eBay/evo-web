import React, { FC, ComponentProps } from "react";

const EbayItemTileTitle: FC<ComponentProps<"a">> = ({ href, children, ...rest }) => (
    <a href={href} className="item-tile__title" {...rest}>
        {children}
    </a>
);

export default EbayItemTileTitle;
