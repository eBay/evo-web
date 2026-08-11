import React, { ReactNode } from "react";
import classNames from "classnames";
import { BaseSkeletonComponentProps, SupportedElements } from "./types";

export type EbaySkeletonButtonProps<T extends SupportedElements> = BaseSkeletonComponentProps<T> & {
    size?: "small" | "large";
};

const EbaySkeletonButton = <T extends SupportedElements = "div">(props: EbaySkeletonButtonProps<T>): ReactNode => {
    const { as: Component = "div", className, size, ...rest } = props;

    return (
        <Component
            className={classNames("skeleton__button", size && `skeleton__button--${size}`, className)}
            {...rest}
        />
    );
};
export default EbaySkeletonButton;
