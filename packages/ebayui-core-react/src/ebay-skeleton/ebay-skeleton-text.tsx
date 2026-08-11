import React, { ReactNode } from "react";
import classNames from "classnames";
import { BaseSkeletonComponentProps, SupportedElements } from "./types";

export type EbaySkeletonTextProps<T extends SupportedElements> = BaseSkeletonComponentProps<T> & {
    size?: "small" | "large";
    multiline?: boolean;
};

const EbaySkeletonText = <T extends SupportedElements = "div">(props: EbaySkeletonTextProps<T>): ReactNode => {
    const { as: Component = "div", className, size, multiline, ...rest } = props;

    return (
        <Component
            className={classNames(
                "skeleton__text",
                multiline && "skeleton__text--multiline",
                size === "large" && `skeleton__text--large`,
                className,
            )}
            {...rest}
        />
    );
};

export default EbaySkeletonText;
