import React, { FC } from "react";
import cx from "classnames";

type Props = React.HTMLProps<HTMLDivElement> & {
    type: "window" | "section" | "page";
    className?: string;
};

const NoticeCTA: FC<Props> = ({ className, type, children, ...rest }) => (
    <p className={cx(className, `${type}-notice__cta`)} {...rest}>
        {children}
    </p>
);

export default NoticeCTA;
