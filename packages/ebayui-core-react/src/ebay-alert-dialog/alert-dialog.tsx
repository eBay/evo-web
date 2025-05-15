import React, { FC, useRef } from 'react'
import classNames from 'classnames'
import { DialogBaseProps, DialogBaseWithState, EbayDialogFooter } from '../ebay-dialog-base'
import { EbayButton } from '../ebay-button'

const classPrefix = 'alert-dialog'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Props<T = any> extends DialogBaseProps<T> {
  open?: boolean;
  confirmText: string;
  onConfirm?: () => void;
}

const EbayAlertDialog: FC<Props> = ({
    a11yCloseText = 'Close Dialog',
    confirmText,
    onConfirm = () => {},
    ...rest
}) => {
    const confirmBtnRef = useRef(null)
    const confirmId = 'alert-dialog-confirm'
    const mainId = 'alert-dialog-main'
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
                    aria-describedby={mainId}
                    onClick={onConfirm}
                    ref={confirmBtnRef}
                    id={confirmId}
                    className="alert-dialog__acknowledge"
                >
                    {confirmText}
                </EbayButton>
            </EbayDialogFooter>
        </DialogBaseWithState>
    )
}

export default EbayAlertDialog
