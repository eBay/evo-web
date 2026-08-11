import React, { FC, ComponentProps } from "react";
import classNames from "classnames";

export type SignalStatus = "neutral" | "trustworthy" | "time-sensitive" | "recent";

type Props = ComponentProps<"span"> & {
    status?: SignalStatus;
};

const EbaySignal: FC<Props> = ({ status = "neutral", ...rest }) => {
    const className = classNames(`signal signal--${status}`, rest.className);
    return <span {...rest} className={className} />;
};

export default EbaySignal;
