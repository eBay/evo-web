import React, { FC, HTMLProps } from "react";
import classNames from "classnames";

type Props = HTMLProps<HTMLHeadingElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
};

const EbayTourtipHeading: FC<Props> = ({ as, children, className, ...props }) => {
    const HeadingTag = as || "h2";
    return (
        <HeadingTag {...props} className={classNames(`tourtip__heading`, className)}>
            {children}
        </HeadingTag>
    );
};

export default EbayTourtipHeading;
