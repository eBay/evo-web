import React, { ReactNode } from "react";
import classNames from "classnames";
import { BaseSkeletonComponentProps, SupportedElements } from "./types";

export type EbaySkeletonImageProps<T extends SupportedElements> = BaseSkeletonComponentProps<T>;

const EbaySkeletonImage = <T extends SupportedElements = "div">(props: EbaySkeletonImageProps<T>): ReactNode => {
    const { as: Component = "div", className, ...rest } = props;
    return <Component className={classNames("skeleton__image", className)} {...rest} />;
};

export default EbaySkeletonImage;
