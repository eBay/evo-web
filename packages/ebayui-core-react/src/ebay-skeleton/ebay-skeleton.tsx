import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

export type EbaySkeletonProps = ComponentProps<"div"> & {
    color?: "purple" | "green" | "blue";
};

const EbaySkeleton: FC<EbaySkeletonProps> = ({ children, className, color, ...rest }) => (
    <div role="img" className={classNames("skeleton", color && `skeleton--${color}`, className)} {...rest}>
        {children}
    </div>
);

export default EbaySkeleton;
