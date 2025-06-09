import React, { FC } from "react";
import cx from "classnames";

type Props = React.HTMLProps<HTMLDivElement> & {
    type: "window" | "section" | "page" | "education";
    className?: string;
};

const NoticeFooter: FC<Props> = ({ className, type, children, ...rest }) => (
    <div className={cx(className, `${type}-notice__footer`)} {...rest}>
        {children}
    </div>
);

export default NoticeFooter;
