import React, { ComponentProps, FC, ReactElement, useRef } from "react";
import classNames from "classnames";
import { DialogBaseProps, DialogBaseWithState, EbayDialogFooter } from "../ebay-dialog-base";
import { DialogCloseEventHandler } from "../ebay-dialog-base/types";
import { EbayButton } from "../ebay-button";

const classPrefix = "confirm-dialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Props<T = any> extends DialogBaseProps<T> {
    open?: boolean;
    confirmText?: string;
    rejectText?: string;
    confirm?: ReactElement<ComponentProps<typeof EbayButton>>;
    reject?: ReactElement<ComponentProps<typeof EbayButton>>;
    onReject?: DialogCloseEventHandler;
    onConfirm?: () => void;
}

const EbayConfirmDialog: FC<Props> = ({
    a11yCloseText = "Close Dialog",
    confirmText,
    rejectText,
    confirm,
    reject,
    onReject = () => {},
    onConfirm = () => {},
    ...rest
}) => {
    const confirmBtnRef = useRef(null);
    const confirmId = "confirm-dialog-confirm";
    const mainId = "confirm-dialog-main";

    if (!confirmText && !confirm) {
        throw new Error('EbayConfirmDialog: A "confirmText" or a "confirm" component needs to be passed');
    }

    if (!rejectText && !reject) {
        throw new Error('EbayConfirmDialog: A "rejectText" or a "reject" component needs to be passed');
    }

    return (
        <DialogBaseWithState
            focus={confirmBtnRef}
            {...rest}
            a11yCloseText={a11yCloseText}
            role="dialog"
            mainId={mainId}
            classPrefix={classPrefix}
            className={classNames(rest.className, `${classPrefix}--mask-fade`)}
            windowClass={`${classPrefix}__window ${classPrefix}__window--animate`}
            buttonPosition="hidden"
            onCloseBtnClick={onReject}
        >
            {rest.children}
            <EbayDialogFooter>
                <EbayButton
                    onClick={onReject}
                    {...reject?.props}
                    className={classNames("confirm-dialog__reject", reject?.props?.className)}
                >
                    {reject?.props?.children || rejectText}
                </EbayButton>
                <EbayButton
                    id={confirmId}
                    onClick={onConfirm}
                    priority="primary"
                    {...confirm?.props}
                    ref={confirmBtnRef}
                    aria-describedby={mainId}
                    className={classNames("confirm-dialog__confirm", confirm?.props?.className)}
                >
                    {confirm?.props?.children || confirmText}
                </EbayButton>
            </EbayDialogFooter>
        </DialogBaseWithState>
    );
};

export default EbayConfirmDialog;
