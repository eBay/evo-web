import React, { FC, ReactNode } from "react";

type EbayDialogFooterProps = {
    children?: ReactNode;
};

const EbayDialogFooter: FC<EbayDialogFooterProps> = ({ children }) => <>{children}</>;

EbayDialogFooter.displayName = "EbayDialogFooter";

export default EbayDialogFooter;
