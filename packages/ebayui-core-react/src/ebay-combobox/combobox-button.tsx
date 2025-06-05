import classNames from "classnames";
import React, { ComponentProps, FC } from "react";

export type EbayComboboxButtonProps = ComponentProps<"button">;

const EbayComboboxButton: FC<EbayComboboxButtonProps> = ({ className, ...rest }) => (
    <button className={classNames("icon-btn", "icon-btn--transparent", className)} {...rest} />
);

export default EbayComboboxButton;
