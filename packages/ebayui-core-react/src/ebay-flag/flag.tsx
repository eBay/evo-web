import React, { ComponentProps, FC } from "react";
import { Icon } from "./types";
import classNames from "classnames";

export type EbayFlagProps = ComponentProps<"span"> & {
    flag: Icon;
};

const EbayFlagIcon: FC<EbayFlagProps> = ({ flag, className, ...props }) => (
    <span className={classNames("fflag", className, `fflag--${flag.toLowerCase()}`)} {...props} />
);

export default EbayFlagIcon;
