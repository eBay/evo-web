import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

export type EbayBadgeType = "menu" | "icon" | "img";

export type EbayBadgeProps = ComponentProps<"span"> & {
    type?: EbayBadgeType;
    number?: number | string | null;
};

const EbayBadge: FC<EbayBadgeProps> = ({ number, type = "img", className, ...rest }) => {
    const role = type === "icon" ? undefined : "img";

    if (number == null) {
        return <span {...rest} className={classNames("badge", className)} role={role} />;
    }

    if (+number > 99) {
        return (
            <span {...rest} className={classNames("badge", className)} role={role}>
                99+
            </span>
        );
    }

    if (+number > 0) {
        return (
            <span {...rest} className={classNames("badge", "badge--circle", className)} role={role}>
                {Math.round(+number)}
            </span>
        );
    }

    return null;
};

export default EbayBadge;
