import React, { FC, ReactNode } from "react";
import cx from "classnames";

export type NoticeContentProps = {
    type: "inline" | "section" | "page" | "education";
    className?: string;
    children?: ReactNode;
};

const NoticeContent: FC<NoticeContentProps> = ({ className, type, children }) => {
    const ContentTag = type === "inline" ? "span" : "div";
    return <ContentTag className={cx(className, `${type}-notice__main`)}>{children}</ContentTag>;
};

export default NoticeContent;
