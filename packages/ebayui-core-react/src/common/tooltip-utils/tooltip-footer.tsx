import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type TooltipFooterProps = ComponentProps<"div"> & {
    type?: string;
};

const TooltipFooter: FC<TooltipFooterProps> = ({ children, className, type = "tourtip" }) => (
    <div className={classNames(`${type}__footer`, className)}>{children}</div>
);

TooltipFooter.displayName = "TooltipFooter";

export default TooltipFooter;
