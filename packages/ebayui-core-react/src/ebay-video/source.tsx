import React, { ComponentProps, FC } from "react";

export type EbayVideoSourceProps = ComponentProps<"source">;

const EbayVideoSource: FC<EbayVideoSourceProps> = ({ ...rest }) => <source {...rest} />;

EbayVideoSource.displayName = "EbayVideoSource";

export default EbayVideoSource;
