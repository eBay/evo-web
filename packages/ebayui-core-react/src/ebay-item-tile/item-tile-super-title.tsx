import React, { FC, ComponentProps } from "react";

export const EbayItemTileSuperTitle: FC<ComponentProps<"div">> = ({ children, ...rest }) => (
    <div className="item-tile__section-primary" {...rest}>
        {children}
    </div>
);

export default EbayItemTileSuperTitle;
