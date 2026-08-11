import React, { FC, ReactNode } from "react";

type EbayDialogCloseButtonProps = {
    children?: ReactNode;
};

const EbayDialogCloseButton: FC<EbayDialogCloseButtonProps> = ({ children }) => <>{children}</>;

EbayDialogCloseButton.displayName = "EbayDialogCloseButton";

export default EbayDialogCloseButton;
