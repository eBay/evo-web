import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

export type EbayBadgeType = "menu" | "icon" | "img";

export type EbayBadgeProps = ComponentProps<"span"> & {
    type?: EbayBadgeType;
    number?: number | string | null;
};

const EbayBadge: FC<EbayBadgeProps> = ({ number, type = "img", className, ...rest }) => {
    const role = type === "img" ? "img" : undefined;
    const ariaHidden = type !== "img";

    if (number == null) {
        return <span {...rest} className={classNames("badge", className)} role={role} aria-hidden={ariaHidden} />;
    }

    if (+number > 99) {
        return (
            <span
                {...rest}
                className={classNames("badge", "badge--wide", className)}
                role={role}
                aria-hidden={ariaHidden}
            >
                99+
            </span>
        );
    }

    if (+number > 0) {
        return (
            <span {...rest} className={classNames("badge", className)} role={role} aria-hidden={ariaHidden}>
                {+number}
            </span>
        );
    }

    return null;
};

export default EbayBadge;
