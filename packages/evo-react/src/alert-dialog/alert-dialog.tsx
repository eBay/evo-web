import { useEffect, useState, useCallback } from "react";
import type { AnimationEvent, SyntheticEvent } from "react";
import classNames from "classnames";
import type { EvoAlertDialogProps } from "./types";
import { AlertDialogProvider } from "./context";
import { useRefTee } from "../utils/use-ref-tee";
import { useControllableId } from "../utils/use-controllable-id";
import "@ebay/skin/dialog.mjs";

/**
 * Alert dialogs present critical information and require an explicit decision
 * from the user before they close.
 *
 * `EvoAlertDialog` cannot be dismissed with `Escape` or by clicking the backdrop.
 * Its controlled or uncontrolled state is composed with a header, main region,
 * footer, and confirm action. The header labels the dialog, and the main region
 * supplies the description referenced by the auto-focused confirm button.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoAlertDialog,
 *   EvoAlertDialogConfirm,
 *   EvoAlertDialogFooter,
 *   EvoAlertDialogHeader,
 *   EvoAlertDialogMain,
 * } from "@evo-web/react/alert-dialog";
 *
 * <EvoAlertDialog open={open} onOpenChange={setOpen}>
 *   <EvoAlertDialogHeader>Important notice</EvoAlertDialogHeader>
 *   <EvoAlertDialogMain>Please review this message.</EvoAlertDialogMain>
 *   <EvoAlertDialogFooter>
 *     <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
 *   </EvoAlertDialogFooter>
 * </EvoAlertDialog>
 * ```
 *
 * @summary Required-acknowledgement alert dialog.
 */
export function EvoAlertDialog({
  open,
  defaultOpen = false,
  onOpenChange,
  onCancel,
  onAnimationEnd,
  className,
  children,
  ref,
  ...rest
}: EvoAlertDialogProps) {
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const currentOpen = isControlled ? open : uncontrolledOpen;

  const [dialogRef, internalRef] = useRefTee(ref);
  const [headerId, setHeaderId] = useControllableId();
  const [mainId, setMainId] = useControllableId();

  // Open the native <dialog> as a modal when `currentOpen` becomes true,
  useEffect(() => {
    const dialog = internalRef.current;
    if (!dialog) return;

    if (currentOpen && !dialog.open) {
      dialog.showModal();
    }
  }, [currentOpen]);

  const handleCancel = useCallback(
    (e: SyntheticEvent<HTMLDialogElement, Event>) => {
      // Prevent Escape key from dismissing the dialog (mirrors closedby="none").
      // Only necessary while `closedby` is outside of our browser policy
      e.preventDefault();
      onCancel?.(e);
    },
    [onCancel],
  );

  const handleAnimationEnd = useCallback(
    (e: AnimationEvent<HTMLDialogElement>) => {
      const dialog = internalRef.current;
      // Only act on the dialog element itself, not bubbled child events.
      if (e.target === dialog && !currentOpen) {
        dialog.close();
      }
      onAnimationEnd?.(e);
    },
    [currentOpen, onAnimationEnd],
  );

  const handleConfirmClick = useCallback(() => {
    if (!isControlled) {
      setUncontrolledOpen(false);
    }
    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  return (
    <AlertDialogProvider
      headerId={headerId}
      setHeaderId={setHeaderId}
      mainId={mainId}
      setMainId={setMainId}
      onConfirmClick={handleConfirmClick}
    >
      <dialog
        {...rest}
        ref={dialogRef}
        role="alertdialog"
        aria-modal="true"
        closedby="none"
        aria-labelledby={headerId}
        className={classNames(
          "dialog",
          "dialog--narrow",
          !currentOpen && "dialog--close",
          className,
        )}
        onCancel={handleCancel}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </dialog>
    </AlertDialogProvider>
  );
}
