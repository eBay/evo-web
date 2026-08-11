import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

export type EbayMenuButtonSeparatorProps = Omit<ComponentProps<"hr">, "onMouseDown">;

const EbayMenuButtonSeparator: FC<EbayMenuButtonSeparatorProps> = ({ className, ...rest }) => (
    <hr {...rest} className={classNames(className, "menu-button__separator")} />
);

export default EbayMenuButtonSeparator;
