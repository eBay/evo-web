import React, { ComponentProps, FC } from "react";
import classNames from "classnames";
import { EbayIconSpinner20 } from "../ebay-icon/icons/ebay-icon-spinner-20";
import { EbayIconSpinner24 } from "../ebay-icon/icons/ebay-icon-spinner-24";
import { EbayIconSpinner30 } from "../ebay-icon/icons/ebay-icon-spinner-30";
import { EbayIconComponent } from "../ebay-icon/icons/types";

export type SpinnerSize = "default" | "small" | "large";

type EbayProgressSpinnerProps = {
    size?: SpinnerSize;
    "aria-label"?: string;
};

type SpanProps = Omit<ComponentProps<"span">, "size">;

const sizeClass: { [key in SpinnerSize]: string } = {
    default: "",
    small: "progress-spinner--small",
    large: "progress-spinner--large",
};

const iconName: { [key in SpinnerSize]: EbayIconComponent } = {
    default: EbayIconSpinner24,
    small: EbayIconSpinner20,
    large: EbayIconSpinner30,
};

const EbayProgressSpinner: FC<SpanProps & EbayProgressSpinnerProps> = ({
    size = "default",
    "aria-label": ariaLabel = "Busy",
    className,
    ...rest
}) => {
    const SpinnerIcon = iconName[size];
    return (
        <span
            {...rest}
            className={classNames("progress-spinner", sizeClass[size], className)}
            aria-label={ariaLabel}
            role="img"
        >
            <SpinnerIcon />
        </span>
    );
};
export default EbayProgressSpinner;
