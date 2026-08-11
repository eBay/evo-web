import React, { FC } from "react";
import NoticeTitle from "../common/notice-utils/notice-title";

type Props = React.HTMLProps<HTMLHeadingElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
};

const EbayPageNoticeTitle: FC<Props> = ({ className, as, children, ...rest }) => (
    <NoticeTitle {...rest} className={className} as={as} type="page">
        {children}
    </NoticeTitle>
);

export default EbayPageNoticeTitle;
