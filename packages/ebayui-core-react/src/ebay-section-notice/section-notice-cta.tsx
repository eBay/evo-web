import React, { FC, ReactNode } from "react";
import NoticeCTA from "../common/notice-utils/notice-cta";

type Props = {
    className?: string;
    children?: ReactNode;
};

const EbaySectionNoticeCTA: FC<Props> = ({ className, children }) => (
    <NoticeCTA className={className} type="section">
        {children}
    </NoticeCTA>
);

export default EbaySectionNoticeCTA;
