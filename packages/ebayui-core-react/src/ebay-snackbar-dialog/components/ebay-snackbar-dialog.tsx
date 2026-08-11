import classNames from "classnames";
import React, { KeyboardEventHandler, MouseEventHandler, ReactElement, useEffect, useRef, useState } from "react";
import { DialogBaseProps, DialogBaseWithState, EbayDialogActions } from "../../ebay-dialog-base";
import { EbaySnackbarDialogAction } from "./ebay-snackbar-dialog-action";
import { excludeComponent, findComponent } from "../../utils";

export type EbaySnackbarDialogProps = Omit<DialogBaseProps<HTMLElement>, "a11yCloseText"> & {
    layout?: "row" | "column";
    onOpen?: () => void;
    onClose?: () => void;
    onAction?: MouseEventHandler<HTMLButtonElement> & KeyboardEventHandler;
};

const DEFAULT_TIMEOUT_LENGTH = 6000; // 6 seconds

export const EbaySnackbarDialog = ({
    className,
    onOpen = () => {},
    onClose = () => {},
    layout,
    open,
    children,
    onAction,
    ...rest
}: EbaySnackbarDialogProps): ReactElement => {
    // We use this eventSet to track which event opened the snackbar and we make sure that
    // we don't close the snackbar in an undesired moment.
    // For example, the snackbar should stay open on focus even if the mouseLeave event happened.
    const eventSet = useRef<Set<string>>(new Set());
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
    const [isOpen, setIsOpen] = useState(open);

    const action = findComponent(children, EbaySnackbarDialogAction);
    const content = excludeComponent(children, EbaySnackbarDialogAction);

    const cancelCurrentCloseRequest = () => {
        clearTimeout(timeoutRef.current);
    };

    const closeDialog = () => {
        setIsOpen(false);
        onClose();
    };

    const requestToCloseDialog = () => {
        // We will make a request to close the snackbar only
        // when there is no pending opening event.
        if (eventSet.current.size === 0) {
            cancelCurrentCloseRequest();
            timeoutRef.current = setTimeout(() => {
                closeDialog();
            }, DEFAULT_TIMEOUT_LENGTH);
        }
    };

    const openDialog = () => {
        setIsOpen(true);
        onOpen();
        requestToCloseDialog();
    };

    const handleFocus = () => {
        cancelCurrentCloseRequest();
        eventSet.current.add("focus");
    };

    const handleBlur = () => {
        eventSet.current.delete("focus");
        requestToCloseDialog();
    };

    const handleMouseEnter = () => {
        cancelCurrentCloseRequest();
        eventSet.current.add("mouseEnter");
    };

    const handleMouseLeave = () => {
        eventSet.current.delete("mouseEnter");
        requestToCloseDialog();
    };

    const handleAction = (event) => {
        cancelCurrentCloseRequest();
        onAction?.(event);
        action?.props?.onClick?.(event);

        closeDialog();
    };

    useEffect(
        () => () => {
            // On unmount of the component we
            // cancel the close request
            cancelCurrentCloseRequest();
        },
        [],
    );

    // This useEffect is to make sure that the internal state is in sync with the "open" property.
    useEffect(() => {
        if (open) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [open]);

    return (
        <DialogBaseWithState
            {...rest}
            open={isOpen}
            isModal={false}
            baseEl="aside"
            classPrefix="snackbar-dialog"
            transitionElement="root"
            a11yCloseText=""
            buttonPosition="hidden"
            className={classNames(className, "snackbar-dialog--transition")}
            windowClass={layout === "column" && "snackbar-dialog__window--column"}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {content}
            {action ? (
                <EbayDialogActions>
                    {React.cloneElement(action, {
                        onClick: handleAction,
                    })}
                </EbayDialogActions>
            ) : null}
        </DialogBaseWithState>
    );
};
