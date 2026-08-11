import React, { FC, HTMLAttributes, ElementType } from "react";

export type EbayItemTileDescriptionProps = HTMLAttributes<HTMLElement> & {
    as?: ElementType;
};

const EbayItemTileDescription: FC<EbayItemTileDescriptionProps> = ({ as: DescriptionEl = "p", children, ...rest }) => (
    <DescriptionEl {...rest}>{children}</DescriptionEl>
);

export default EbayItemTileDescription;
