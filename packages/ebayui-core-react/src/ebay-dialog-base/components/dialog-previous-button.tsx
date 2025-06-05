import React, { FC, KeyboardEventHandler, MouseEventHandler } from "react";
import classNames from "classnames";
import { EbayIconButton } from "../../ebay-icon-button";
import { Icon } from "../../ebay-icon";

type EbayDialogPreviousButtonProps = {
    icon?: Icon;
    className?: string;
    onClick?: MouseEventHandler & KeyboardEventHandler;
};

const EbayDialogPreviousButton: FC<EbayDialogPreviousButtonProps> = ({
    className,
    icon,
    ...rest
}: EbayDialogPreviousButtonProps) => (
    <EbayIconButton
        {...rest}
        icon={icon || "chevronLeft16"}
        className={classNames(className, "lightbox-dialog__prev")}
    />
);

export default EbayDialogPreviousButton;
