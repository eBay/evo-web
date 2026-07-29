import type { ComponentProps, ElementType, ReactNode } from "react";
import type { NativeButtonProps } from "../button/types";

export type EvoAlertDialogHeaderProps = ComponentProps<"h2"> & {
  as?: ElementType;
};

export type EvoAlertDialogMainProps = ComponentProps<"div">;

export type EvoAlertDialogFooterProps = ComponentProps<"div">;

export type EvoAlertDialogConfirmProps = Omit<
  NativeButtonProps,
  "priority" | "autoFocus" | "aria-describedby"
>;

export type EvoAlertDialogProps = Omit<
  ComponentProps<"dialog">,
  "open" | "role" | "aria-labelledby" | "aria-modal" | "closedby"
> & {
  /** Controlled open state. When provided, the consumer manages it via `onOpenChange`. */
  open?: boolean;
  /** Initial open state for uncontrolled usage. Ignored when `open` is provided. */
  defaultOpen?: boolean;
  /** Callback fired when the dialog requests to change its open state. Receives the new boolean value. */
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};
