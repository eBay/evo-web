import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type Props = ComponentProps<"hr"> & {
    baseClass?: string;
};

const EbayMenuItemSeparator: FC<Props> = ({ className, baseClass = "menu", ...rest }) => (
    <hr {...rest} className={classNames(className, `${baseClass}__separator`)} />
);

export default EbayMenuItemSeparator;
