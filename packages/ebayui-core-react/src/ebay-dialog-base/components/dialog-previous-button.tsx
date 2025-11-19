import React, { FC, KeyboardEventHandler, MouseEventHandler, ReactElement } from "react";
import classNames from "classnames";
import { EbayIconButton } from "../../ebay-icon-button";
import { Icon } from "../../ebay-icon";
import { EbayIconChevronLeft16 } from "../../ebay-icon/icons/ebay-icon-chevron-left-16";

type EbayDialogPreviousButtonProps = {
    icon?: Icon | ReactElement;
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
        icon={icon || <EbayIconChevronLeft16 />}
        className={classNames(className, "lightbox-dialog__prev")}
    />
);

export default EbayDialogPreviousButton;
