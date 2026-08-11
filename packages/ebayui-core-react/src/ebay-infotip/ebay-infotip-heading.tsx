import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type Props = ComponentProps<"span">;

const EbayTooltipHeading: FC<Props> = ({ className, ...props }) => (
    <span {...props} className={classNames("infotip__heading", className)} />
);

export default EbayTooltipHeading;
