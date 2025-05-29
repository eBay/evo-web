import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type Props = ComponentProps<"span">;

const EbayButtonText: FC<Props> = ({ className, children }) => (
    <span className={classNames(className, "btn__text")}>{children}</span>
);

export default EbayButtonText;
