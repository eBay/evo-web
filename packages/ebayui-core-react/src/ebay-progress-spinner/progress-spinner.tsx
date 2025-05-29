import React, { ComponentProps, FC } from "react";
import classNames from "classnames";
import { EbayIcon, Icon } from "../ebay-icon";

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

const iconName: { [key in SpinnerSize]: Icon } = {
    default: "spinner24",
    small: "spinner20",
    large: "spinner30",
};

const EbayProgressSpinner: FC<SpanProps & EbayProgressSpinnerProps> = ({
    size = "default",
    "aria-label": ariaLabel = "Busy",
    className,
    ...rest
}) => (
    <span
        {...rest}
        className={classNames("progress-spinner", sizeClass[size], className)}
        aria-label={ariaLabel}
        role="img"
    >
        <EbayIcon name={iconName[size]} />
    </span>
);

export default EbayProgressSpinner;
