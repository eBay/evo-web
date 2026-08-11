import React, { FC } from "react";
import classNames from "classnames";
import { DialogBaseWithState, DialogBaseProps } from "../../ebay-dialog-base";
import { DialogCloseEventHandler } from "../../ebay-dialog-base/types";

export type EbayToastProps = DialogBaseProps<HTMLElement> & {
    onClose?: DialogCloseEventHandler;
};

export const EbayToast: FC<EbayToastProps> = ({ className, onClose = () => {}, ...rest }) => (
    <DialogBaseWithState
        {...rest}
        isModal={false}
        baseEl="aside"
        classPrefix="toast-dialog"
        buttonPosition="right"
        transitionElement="root"
        className={classNames(className, "toast-dialog--transition")}
        onCloseBtnClick={onClose}
    />
);

export default EbayToast;
