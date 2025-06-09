import React, { ComponentProps, FC } from "react";
import classNames from "classnames";
import { LabelPosition } from "./types";

export type Props = {
    className?: string;
    stacked?: boolean;
    required?: boolean;
    position?: LabelPosition;
} & ComponentProps<"label">;

const Label: FC<Props> = ({ className, children, stacked = false, required = false, position = "start", ...rest }) => {
    const wrapperClassName = classNames(
        `field__label`,
        className,
        { "field__label--stacked": stacked },
        { "field__label--end": position === "end" },
    );
    const requiredMark = required ? (
        <>
            {" "}
            <sup>*</sup>
        </>
    ) : null;

    return (
        <label className={wrapperClassName} {...rest}>
            {children}
            {requiredMark}
        </label>
    );
};

export default Label;
