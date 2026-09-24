import { useCallback, useEffect, useState } from "react";
import type { AnimationEvent, SyntheticEvent } from "react";
import classNames from "classnames";
import { ToastDialogProvider } from "./context";
import type { EvoToastDialogProps } from "./types";
import { useControllableId } from "../utils/use-controllable-id";
import { useRefTee } from "../utils/use-ref-tee";
import "@ebay/skin/toast-dialog.mjs";

function supportsClosedBy() {
  return (
    typeof HTMLDialogElement !== "undefined" &&
    "closedBy" in HTMLDialogElement.prototype
  );
}

/**
 * Toast dialogs present a short message or action while the rest of the page
 * remains available. The native `<dialog>` opens nonmodally and announces its
 * content politely.
 *
 * Use `open` with `onOpenChange` for controlled state, or `defaultOpen` for
 * internal state. Compose a title and close action inside
 * `EvoToastDialogHeader`, then add `EvoToastDialogMain` and an optional
 * `EvoToastDialogFooter`. Provide localized `a11yText` on the close action.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoToastDialog,
 *   EvoToastDialogClose,
 *   EvoToastDialogHeader,
 *   EvoToastDialogMain,
 *   EvoToastDialogTitle,
 * } from "@evo-web/react/toast-dialog";
 *
 * <EvoToastDialog open={isOpen} onOpenChange={setIsOpen}>
 *   <EvoToastDialogHeader>
 *     <EvoToastDialogTitle>Item saved</EvoToastDialogTitle>
 *     <EvoToastDialogClose a11yText="Close item saved message" />
 *   </EvoToastDialogHeader>
 *   <EvoToastDialogMain>Your changes are saved.</EvoToastDialogMain>
 * </EvoToastDialog>
 * ```
 *
 * @summary Nonmodal message dialog with an optional action.
 */
export function EvoToastDialog({
  open,
  defaultOpen = false,
  onOpenChange,
  className,
  children,
  ref,
  "aria-labelledby": inputLabelledBy,
  onCancel,
  onAnimationEnd,
  ...rest
}: EvoToastDialogProps) {
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const currentOpen = isControlled ? open : uncontrolledOpen;
  const [dialogRef, internalRef] = useRefTee(ref);
  const [headerId, setHeaderId] = useControllableId();

  const close = useCallback(() => {
    if (!isControlled) {
      setUncontrolledOpen(false);
    }
    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  const requestClose = useCallback(() => {
    const dialog = internalRef.current;
    if (dialog && typeof dialog.requestClose === "function") {
      dialog.requestClose();
    } else {
      close();
    }
  }, [close, internalRef]);

  useEffect(() => {
    const dialog = internalRef.current;
    if (currentOpen && dialog && !dialog.open) {
      const previousFocus = document.activeElement as HTMLElement | null;
      dialog.show();
      previousFocus?.focus();
    }
  }, [currentOpen, internalRef]);

  useEffect(() => {
    if (!currentOpen || supportsClosedBy()) return;
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape" && !event.defaultPrevented) {
        close();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [close, currentOpen]);

  const handleCancel = useCallback(
    (event: SyntheticEvent<HTMLDialogElement, Event>) => {
      event.preventDefault();
      close();
      onCancel?.(event);
    },
    [close, onCancel],
  );

  const handleAnimationEnd = useCallback(
    (event: AnimationEvent<HTMLDialogElement>) => {
      const dialog = internalRef.current;
      if (event.target === dialog && !currentOpen) {
        dialog.close();
      }
      onAnimationEnd?.(event);
    },
    [currentOpen, internalRef, onAnimationEnd],
  );

  const labelledBy = inputLabelledBy
    ? `${inputLabelledBy} ${headerId}`
    : headerId;

  return (
    <ToastDialogProvider
      headerId={headerId}
      setHeaderId={setHeaderId}
      requestClose={requestClose}
    >
      <dialog
        {...rest}
        ref={dialogRef}
        aria-modal="false"
        aria-live="polite"
        closedby="closerequest"
        aria-labelledby={labelledBy}
        className={classNames(
          "toast-dialog",
          !currentOpen && "toast-dialog--close",
          className,
        )}
        onCancel={handleCancel}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="toast-dialog__window">{children}</div>
      </dialog>
    </ToastDialogProvider>
  );
}
