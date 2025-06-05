/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, cloneElement, ComponentProps, ComponentType, FC, ReactElement, RefObject } from "react";
import classNames from "classnames";

export type TooltipHostProps = ComponentProps<ComponentType<any>> & {
    className?: string;
    children?: ReactElement<any>;
    forwardedRef?: RefObject<any>;
};

const TooltipHost: FC<TooltipHostProps> = ({ children, className, forwardedRef, ...rest }) => {
    Children.only(children);
    return cloneElement(children, {
        ref: forwardedRef,
        ...rest,
        className: classNames(className, children.props.className),
    });
};

export default TooltipHost;
