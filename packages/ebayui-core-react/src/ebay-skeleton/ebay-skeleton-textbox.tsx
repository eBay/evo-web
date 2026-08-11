import React, { ReactNode } from "react";
import classNames from "classnames";
import { BaseSkeletonComponentProps, SupportedElements } from "./types";

export type EbaySkeletonTextboxProps<T extends SupportedElements> = BaseSkeletonComponentProps<T>;

const EbaySkeletonTextbox = <T extends SupportedElements = "div">(props: EbaySkeletonTextboxProps<T>): ReactNode => {
    const { as: Component = "div", className, ...rest } = props;

    return <Component className={classNames("skeleton__textbox", className)} {...rest} />;
};

export default EbaySkeletonTextbox;
