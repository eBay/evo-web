import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

export type EbayBadgeType = "menu" | "icon" | "img";

export type EbayBadgeProps = ComponentProps<"span"> & {
    type?: EbayBadgeType;
    number: number | string;
};

const EbayBadge: FC<EbayBadgeProps> = ({ number, type = "img", className, ...rest }) => {
    // Parse in case user provided a string by mistake
    const parsed = Math.round(parseInt(String(number), 10));

    return parsed <= 0 ? null : (
        <span
            {...rest}
            className={classNames("badge", className)}
            role={type === "img" ? "img" : undefined}
            aria-hidden={type !== "img"}
        >
            {parsed > 99 ? "99+" : parsed}
        </span>
    );
};

export default EbayBadge;
