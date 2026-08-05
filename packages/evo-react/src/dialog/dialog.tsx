/* eslint-disable react/no-unknown-property, jsx-a11y/no-noninteractive-element-interactions -- `closedby` and native dialog interaction handlers are not yet recognized by the lint plugins. */
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
