import React, { FC, ComponentProps, ElementType } from "react";

export type EbayItemTileSectionDescriptionProps = ComponentProps<"p"> & {
    as?: ElementType;
};

const EbayItemTileSectionDescription: FC<EbayItemTileSectionDescriptionProps> = ({
    as: DescriptionEl = "p",
    children,
    ...rest
}) => <DescriptionEl {...rest}>{children}</DescriptionEl>;

export default EbayItemTileSectionDescription;
