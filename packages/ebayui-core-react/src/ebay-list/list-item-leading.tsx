import React, { ReactNode } from "react";

type EbayListItemLeadingProps = {
    children: ReactNode;
};

export const EbayListItemLeading: React.FC<EbayListItemLeadingProps> = ({ children }) => (
    <div className="list__leading">{children}</div>
);

export default EbayListItemLeading;
