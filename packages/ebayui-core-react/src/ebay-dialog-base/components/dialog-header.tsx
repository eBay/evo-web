import React, { FC, ComponentProps } from "react";

export type EbayDialogHeaderProps = ComponentProps<"h2">;

const EbayDialogHeader: FC<EbayDialogHeaderProps> = ({ children, ...rest }) => <h2 {...rest}>{children}</h2>;

export default EbayDialogHeader;
