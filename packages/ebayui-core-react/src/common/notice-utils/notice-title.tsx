import React, { FC } from "react";
import cx from "classnames";

type Props = React.HTMLProps<HTMLHeadingElement> & {
    type: "window" | "section" | "page" | "education";
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
};

const NoticeTitle: FC<Props> = ({ className, type, as, children, ...rest }) => {
    const HeadingTag = as || `h2`;
    return (
        <HeadingTag className={cx(className, `${type}-notice__title`)} {...rest}>
            {children}
        </HeadingTag>
    );
};

export default NoticeTitle;
