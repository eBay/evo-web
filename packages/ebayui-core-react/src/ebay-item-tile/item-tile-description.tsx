import React, { FC, ComponentProps, ElementType } from "react";

export type EbayItemTileDescriptionProps = ComponentProps<"p"> & {
    as?: ElementType;
};

const EbayItemTileDescription: FC<EbayItemTileDescriptionProps> = ({ as: DescriptionEl = "p", children, ...rest }) => (
    <DescriptionEl {...rest}>{children}</DescriptionEl>
);

export default EbayItemTileDescription;
