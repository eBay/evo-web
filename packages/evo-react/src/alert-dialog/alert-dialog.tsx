import { useEffect, useState, useCallback } from "react";
import type { AnimationEvent, SyntheticEvent } from "react";
import classNames from "classnames";
import type { EvoAlertDialogProps } from "./types";
import { AlertDialogProvider } from "./context";
import { useRefTee } from "../utils/use-ref-tee";
import { useControllableId } from "../utils/use-controllable-id";
import "@ebay/skin/dialog.mjs";

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
  const [mainId] = useControllableId();

  // Open the native <dialog> as a modal when `currentOpen` becomes true,
  useEffect(() => {
    const dialog = internalRef.current;
    if (!dialog) return;

    if (currentOpen && !dialog.open) {
      dialog.showModal();
    }
  }, [currentOpen]);

  function handleCancel(e: SyntheticEvent<HTMLDialogElement, Event>) {
    // Prevent Escape key from dismissing the dialog (mirrors closedby="none").
    // Only necessary while `closedby` is outside of our browser policy
    e.preventDefault();
    onCancel?.(e);
  }

  function handleAnimationEnd(e: AnimationEvent<HTMLDialogElement>) {
    const dialog = internalRef.current;
    // Only act on the dialog element itself, not bubbled child events.
    if (e.target === dialog && !currentOpen) {
      dialog.close();
    }
    onAnimationEnd?.(e);
  }

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
