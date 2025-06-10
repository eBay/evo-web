import React, { FC, ComponentProps } from "react";

const EbayItemTileSubTitle: FC<ComponentProps<"div">> = ({ children, ...rest }) => (
    <div className="item-tile__subtitle" {...rest}>
        {children}
    </div>
);

export default EbayItemTileSubTitle;
