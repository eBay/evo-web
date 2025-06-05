import React, { cloneElement, ComponentProps, FC, RefObject } from "react";
import classNames from "classnames";
import { withForwardRef } from "../component-utils/forwardRef";
import { findComponent, excludeComponent } from "../component-utils";
import { TooltipType } from "./types";
import TooltipHost from "./tooltip-host";

export type TooltipProps = ComponentProps<"span"> & {
    type?: TooltipType;
    isExpanded?: boolean;
    forwardedRef?: RefObject<HTMLSpanElement>;
};

const Tooltip: FC<TooltipProps> = ({ className, type, isExpanded, children, forwardedRef, ...rest }) => {
    const originalHostComponent = findComponent(children, TooltipHost);
    const content = excludeComponent(children, TooltipHost)[0];

    if (!originalHostComponent) {
        throw new Error(`Tooltip: Please use a TooltipHost that defines the host of the tooltip`);
    }

    const host = cloneElement(originalHostComponent, {
        className: `${type}__host`,
        "aria-expanded": isExpanded,
        "aria-describedby": content?.props?.id,
        ...originalHostComponent.props,
    });

    return (
        <span
            {...rest}
            ref={forwardedRef}
            className={classNames(className, type, {
                [`${type}--expanded`]: isExpanded,
            })}
        >
            {host}
            {content}
        </span>
    );
};

export default withForwardRef(Tooltip);
