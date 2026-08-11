import React, { ReactNode } from "react";
import classNames from "classnames";
import { BaseSkeletonComponentProps, SupportedElements } from "./types";

export type EbaySkeletonAvatarProps<T extends SupportedElements> = BaseSkeletonComponentProps<T>;

const EbaySkeletonAvatar = <T extends SupportedElements = "div">(props: EbaySkeletonAvatarProps<T>): ReactNode => {
    const { as: Component = "div", className, ...rest } = props;

    return <Component className={classNames("skeleton__avatar", className)} {...rest} />;
};

export default EbaySkeletonAvatar;
