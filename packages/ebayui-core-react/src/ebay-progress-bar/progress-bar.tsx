import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

export type EbayProgressBarProps = ComponentProps<"progress"> & {
    fluid?: boolean;
};

const EbayProgressBar: FC<EbayProgressBarProps> = ({ value = 0, max = 100, fluid, className, ...rest }) => (
    <progress
        {...rest}
        className={classNames("progress-bar", className, { "progress-bar--fluid": fluid })}
        value={value}
        max={max}
    />
);

export default EbayProgressBar;
