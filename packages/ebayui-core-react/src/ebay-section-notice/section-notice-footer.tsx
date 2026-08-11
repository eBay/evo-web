import React, { FC, ReactNode } from "react";
import NoticeFooter from "../common/notice-utils/notice-footer";

type Props = {
    className?: string;
    children?: ReactNode;
};

const EbaySectionNoticeFooter: FC<Props> = ({ className, children }) => (
    <NoticeFooter className={className} type="section">
        {children}
    </NoticeFooter>
);

export default EbaySectionNoticeFooter;
