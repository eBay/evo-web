import React, { FC, ComponentProps } from "react";

const EbayItemTileSubtitle: FC<ComponentProps<"div">> = ({ children, ...rest }) => (
    <div className="item-tile__subtitle" {...rest}>
        {children}
    </div>
);

EbayItemTileSubtitle.displayName = "EbayItemTileSubtitle";

export default EbayItemTileSubtitle;
