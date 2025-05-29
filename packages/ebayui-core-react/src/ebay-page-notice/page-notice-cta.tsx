import React, { FC, ReactNode } from "react";
import NoticeCTA from "../common/notice-utils/notice-cta";

type Props = {
    className?: string;
    children?: ReactNode;
};

const EbayPageNoticeCTA: FC<Props> = ({ className, children }) => (
    <NoticeCTA className={className} type="page">
        {children}
    </NoticeCTA>
);

export default EbayPageNoticeCTA;
