import React, { FC, ComponentProps } from "react";

type TourtipFooterProps = ComponentProps<"div"> & {
    index?: string;
};
const EbayTourtipFooter: FC<TourtipFooterProps> = ({ index, children }) => (
    <>
        {index !== undefined && <span className="tourtip__index">{index}</span>}
        {children}
    </>
);

export default EbayTourtipFooter;
