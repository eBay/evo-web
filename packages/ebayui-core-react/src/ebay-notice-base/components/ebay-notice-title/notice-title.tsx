import React, { ReactNode } from "react";

type EbayNoticeTitleProps = {
    children?: ReactNode;
};

const EbayNoticeTitle = ({ children }: EbayNoticeTitleProps): ReactNode => (
    <span className="page-notice__title">{children}</span>
);

export default EbayNoticeTitle;
