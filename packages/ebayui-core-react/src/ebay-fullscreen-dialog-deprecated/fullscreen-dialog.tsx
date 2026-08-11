import React, { FC } from "react";
import classNames from "classnames";
import { DialogBaseProps, DialogBaseWithState } from "../ebay-dialog-base";
import { DialogCloseEventHandler } from "../ebay-dialog-base/types";

const classPrefix = "fullscreen-dialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Props<T = any> extends DialogBaseProps<T> {
    open?: boolean;
    onClose?: DialogCloseEventHandler;
}

const EbayFullscreenDialogDeprecated: FC<Props> = ({ open, onClose = () => {}, className, animated, ...rest }) => (
    <DialogBaseWithState
        {...rest}
        classPrefix={classPrefix}
        buttonPosition="right"
        onCloseBtnClick={onClose}
        transitionElement="window"
        animated={animated}
        className={classNames(className, `${classPrefix}--mask-fade-slow`)}
        windowClass={classNames(`${classPrefix}__window`, `${classPrefix}__window--slide`)}
        open={open}
    />
);

export default EbayFullscreenDialogDeprecated;
