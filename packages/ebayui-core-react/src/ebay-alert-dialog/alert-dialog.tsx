import React, { ComponentProps, FC, ReactElement, useRef } from "react";
import classNames from "classnames";
import { DialogBaseProps, DialogBaseWithState, EbayDialogFooter } from "../ebay-dialog-base";
import { EbayButton } from "../ebay-button";

const classPrefix = "alert-dialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Props<T = any> extends DialogBaseProps<T> {
    open?: boolean;
    confirmText?: string;
    confirm?: ReactElement<ComponentProps<typeof EbayButton>>;
    onConfirm?: () => void;
}

const EbayAlertDialog: FC<Props> = ({
    a11yCloseText = "Close Dialog",
    confirmText,
    confirm,
    onConfirm = () => {},
    ...rest
}) => {
    const confirmBtnRef = useRef(null);
    const confirmId = "alert-dialog-confirm";
    const mainId = "alert-dialog-main";

    if (!confirmText && !confirm) {
        throw new Error('EbayAlertDialog: A "confirmText" or a "confirm" component needs to be passed');
    }

    return (
        <DialogBaseWithState
            focus={confirmBtnRef}
            {...rest}
            a11yCloseText={a11yCloseText}
            role="alertdialog"
            classPrefix={classPrefix}
            ignoreEscape
            mainId={mainId}
            buttonPosition="hidden"
            className={classNames(rest.className, `${classPrefix}--mask-fade`)}
            windowClass={`${classPrefix}__window ${classPrefix}__window--animate`}
        >
            {rest.children}
            <EbayDialogFooter>
                <EbayButton
                    priority="primary"
                    onClick={onConfirm}
                    {...confirm?.props}
                    aria-describedby={mainId}
                    ref={confirmBtnRef}
                    id={confirmId}
                    className={classNames("alert-dialog__acknowledge", confirm?.props?.className)}
                >
                    {confirm?.props?.children || confirmText}
                </EbayButton>
            </EbayDialogFooter>
        </DialogBaseWithState>
    );
};

export default EbayAlertDialog;
