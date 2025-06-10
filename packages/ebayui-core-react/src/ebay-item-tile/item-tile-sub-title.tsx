import React, { FC, ComponentProps } from "react";

const EbayItemTileSectionSubTitle: FC<ComponentProps<"div">> = ({ children, ...rest }) => (
    <div className="item-tile__subtitle" {...rest}>
        {children}
    </div>
);

export default EbayItemTileSectionSubTitle;
