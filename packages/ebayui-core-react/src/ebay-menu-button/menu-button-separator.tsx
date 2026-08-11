import React, { ComponentProps, FC } from "react";
import classNames from "classnames";

type Props = ComponentProps<"hr">;

const EbayMenuButtonSeparator: FC<Props> = ({ className, ...rest }) => (
    <hr {...rest} className={classNames(className, "menu-button__separator")} />
);

EbayMenuButtonSeparator.displayName = "EbayMenuButtonSeparator";

export default EbayMenuButtonSeparator;
