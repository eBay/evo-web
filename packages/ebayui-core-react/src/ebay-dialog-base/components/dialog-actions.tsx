import React, { FC, ReactNode } from "react";

type EbayDialogActionsProps = {
    children?: ReactNode;
};

const EbayDialogActions: FC<EbayDialogActionsProps> = ({ children }) => <>{children}</>;

EbayDialogActions.displayName = "EbayDialogActions";

export default EbayDialogActions;
