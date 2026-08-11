import React, { ReactNode } from "react";

type EbayListItemTrailingProps = {
    children: ReactNode;
};

const EbayListItemTrailing: React.FC<EbayListItemTrailingProps> = ({ children }) => (
    <div className="list__trailing">{children}</div>
);

EbayListItemTrailing.displayName = "EbayListItemTrailing";

export default EbayListItemTrailing;
