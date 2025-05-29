import React, { FC } from "react";
import classNames from "classnames";
import { DialogBaseProps, DialogBaseWithState } from "../ebay-dialog-base";
import { DialogCloseEventHandler } from "../ebay-dialog-base/types";

const classPrefix = "panel-dialog";

type Position = "start" | "end";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Props<T = any> extends DialogBaseProps<T> {
    open?: boolean;
    animated?: boolean;
    position?: Position;
    onClose?: DialogCloseEventHandler;
}

const EbayPanelDialog: FC<Props> = ({ open, animated, position = "start", onClose = () => {}, className, ...rest }) => (
    <DialogBaseWithState
        {...rest}
        aria-label="Infotip"
        classPrefix={classPrefix}
        buttonPosition="right"
        onCloseBtnClick={onClose}
        onBackgroundClick={onClose}
        animated={animated}
        className={classNames(className, { [`${classPrefix}--mask-fade-slow`]: animated })}
        windowClass={classNames(`${classPrefix}__window--slide`, {
            [`${classPrefix}__window--end`]: position === "end",
        })}
        open={open}
    />
);

export default EbayPanelDialog;
