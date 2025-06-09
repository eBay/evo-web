import React, { ComponentProps, FC, ReactNode } from "react";
import classNames from "classnames";

type Props = ComponentProps<"a"> & {
    ctaText?: ReactNode;
    href?: string;
};

const Cta: FC<Props> = ({ ctaText, href, className, ...rest }: Props) => {
    if (!ctaText) {
        return null;
    }

    return (
        <a {...rest} className={classNames("section-title__cta", className)} href={href}>
            {ctaText}
        </a>
    );
};

export default Cta;
