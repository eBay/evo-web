import React, { FC, ReactNode } from "react";
import NoticeFooter from "../common/notice-utils/notice-footer";

type Props = {
    className?: string;
    children?: ReactNode;
};

const EbayEducationNoticeFooter: FC<Props> = ({ className, children }) => (
    <NoticeFooter className={className} type="education">
        {children}
    </NoticeFooter>
);

export default EbayEducationNoticeFooter;
