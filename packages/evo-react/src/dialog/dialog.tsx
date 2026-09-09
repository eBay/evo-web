/* eslint-disable jsx-a11y/no-noninteractive-element-interactions -- native dialog interaction handlers are not yet recognized by the lint plugin. */
import { useCallback, useEffect, useState } from "react";
import type {
  AnimationEvent,
  KeyboardEvent,
  MouseEvent,
  SyntheticEvent,
} from "react";
import classNames from "classnames";
import { DialogProvider } from "./context";
import type { EvoDialogProps } from "./types";
import { useControllableId } from "../utils/use-controllable-id";
import { useRefTee } from "../utils/use-ref-tee";
import "@ebay/skin/dialog.mjs";

function supportsClosedBy() {
  return (
    typeof HTMLDialogElement !== "undefined" &&
    "closedBy" in HTMLDialogElement.prototype
  );
}

/**
 * Dialogs focus attention on information or a task without taking people away
 * from the current page. Use them for short, self-contained interactions that
 * need an immediate response.
 *
 * Use `open` with `onOpenChange` when the parent owns the dialog state, or
 * `defaultOpen` when the dialog manages its own state. Build the dialog with
 * its title and region components to keep the content and accessible label
 * connected.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoDialog,
 *   EvoDialogClose,
 *   EvoDialogHeader,
 *   EvoDialogMain,
 *   EvoDialogTitle,
 * } from "@evo-web/react/dialog";
 *
 * <EvoDialog open={isOpen} onOpenChange={setIsOpen}>
 *   <EvoDialogHeader>
 *     <EvoDialogTitle>Order details</EvoDialogTitle>
 *     <EvoDialogClose a11yText="Close order details" />
 *   </EvoDialogHeader>
 *   <EvoDialogMain>Review the items in your order.</EvoDialogMain>
 * </EvoDialog>
 * ```
 *
 * @summary Modal window for focused tasks or information.
 */
export function EvoDialog({
  open,
  defaultOpen = false,
  onOpenChange,
  size,
  closedby = "any",
  banner,
  className,
  children,
  ref,
  "aria-labelledby": inputLabelledBy,
  onCancel,
  onAnimationEnd,
  onClick,
  onKeyDown,
  ...rest
}: EvoDialogProps) {
  const isControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const currentOpen = isControlled ? open : uncontrolledOpen;
  const [dialogRef, internalRef] = useRefTee(ref);
  const [headerId, setHeaderId] = useControllableId();

  useEffect(() => {
    const dialog = internalRef.current;
    if (currentOpen && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [currentOpen, internalRef]);

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

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDialogElement>) => {
      onClick?.(event);

      // Safari does not support `closedby` yet. For `closedby="any"`, a click
      // targeting the dialog itself represents a backdrop click and must close it.
      if (
        !supportsClosedBy() &&
        closedby === "any" &&
        event.target === event.currentTarget
      ) {
        close();
      }
    },
    [close, closedby, onClick],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDialogElement>) => {
      onKeyDown?.(event);

      // `closedby="none"` blocks user-initiated close requests. Safari does not
      // support that attribute yet, so prevent Escape from dismissing the dialog.
      // Programmatic requests such as EvoDialogClose must remain available.
      if (
        !supportsClosedBy() &&
        closedby === "none" &&
        event.key === "Escape"
      ) {
        event.preventDefault();
      }
    },
    [closedby, onKeyDown],
  );

  const labelledBy = inputLabelledBy
    ? `${inputLabelledBy} ${headerId}`
    : headerId;

  return (
    <DialogProvider
      headerId={headerId}
      setHeaderId={setHeaderId}
      requestClose={requestClose}
    >
      <dialog
        {...rest}
        ref={dialogRef}
        closedby={closedby}
        aria-labelledby={labelledBy}
        className={classNames(
          "dialog",
          !currentOpen && "dialog--close",
          size && `dialog--${size}`,
          banner && "dialog--expressive",
          className,
        )}
        onCancel={handleCancel}
        onAnimationEnd={handleAnimationEnd}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {banner}
        {children}
      </dialog>
    </DialogProvider>
  );
}
