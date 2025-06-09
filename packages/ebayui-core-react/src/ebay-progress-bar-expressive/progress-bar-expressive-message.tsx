import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

export type EbayProgressBarExpressiveMessageProps = Omit<ComponentProps<"div">, "className"> & {
    isFadingIn?: boolean;
    isFadingOut?: boolean;
    isInitial?: boolean;
    duration?: number;
};

const EbayProgressBarExpressiveMessage: FC<EbayProgressBarExpressiveMessageProps> = ({
    isFadingIn,
    isFadingOut,
    isInitial,
    ...props
}) => (
    <div
        {...props}
        className={classNames("progress-bar-expressive__message", {
            "progress-bar-expressive__message--out": isFadingOut,
            "progress-bar-expressive__message--in": isFadingIn,
            "progress-bar-expressive__message--initial": isInitial,
        })}
    />
);

export default EbayProgressBarExpressiveMessage;
