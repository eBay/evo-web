import { useEffect, useState, useCallback } from "react";
import type { AnimationEvent, SyntheticEvent } from "react";
import classNames from "classnames";
import type { EvoConfirmDialogProps } from "./types";
import { ConfirmDialogProvider } from "./context";
import { useRefTee } from "../utils/use-ref-tee";
import { useControllableId } from "../utils/use-controllable-id";
import "@ebay/skin/dialog.mjs";

export function EvoConfirmDialog({
  open,
  defaultOpen = false,
  onOpenChange,
  onCancel,
  onAnimationEnd,
  className,
  children,
  ref,
  ...rest
}: EvoConfirmDialogProps) {
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const currentOpen = isControlled ? open : uncontrolledOpen;

  const [dialogRef, internalRef] = useRefTee(ref);
  const [headerId, setHeaderId] = useControllableId();
  const [mainId, setMainId] = useControllableId();

  useEffect(() => {
    const dialog = internalRef.current;
    if (!dialog) return;

    if (currentOpen && !dialog.open) {
      dialog.showModal();
    }
  }, [currentOpen]);

  const close = useCallback(() => {
    if (!isControlled) {
      setUncontrolledOpen(false);
    }
    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  const handleCancel = useCallback(
    (e: SyntheticEvent<HTMLDialogElement, Event>) => {
      // closedby="closerequest" lets Escape fire onCancel; we close the dialog
      // here (treated as a cancel/reject) but do NOT invoke the reject button's onClick.
      e.preventDefault();
      close();
      onCancel?.(e);
    },
    [close, onCancel],
  );

  const handleAnimationEnd = useCallback(
    (e: AnimationEvent<HTMLDialogElement>) => {
      const dialog = internalRef.current;
      if (e.target === dialog && !currentOpen) {
        dialog.close();
      }
      onAnimationEnd?.(e);
    },
    [currentOpen, onAnimationEnd],
  );

  return (
    <ConfirmDialogProvider
      headerId={headerId}
      setHeaderId={setHeaderId}
      mainId={mainId}
      setMainId={setMainId}
      onConfirmClick={close}
      onRejectClick={close}
    >
      <dialog
        {...rest}
        ref={dialogRef}
        role="alertdialog"
        aria-modal="true"
        closedby="closerequest"
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
    </ConfirmDialogProvider>
  );
}
