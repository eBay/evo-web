import type { ComponentProps, ElementType, ReactNode } from "react";
import type { NativeButtonProps } from "../button/types";

export type EvoConfirmDialogHeaderProps = ComponentProps<"h2"> & {
  as?: ElementType;
};

export type EvoConfirmDialogMainProps = ComponentProps<"div">;

export type EvoConfirmDialogFooterProps = ComponentProps<"div">;

export type EvoConfirmDialogConfirmProps = Omit<
  NativeButtonProps,
  "priority" | "autoFocus" | "aria-describedby"
>;

export type EvoConfirmDialogRejectProps = Omit<NativeButtonProps, "priority">;

export type EvoConfirmDialogProps = Omit<
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
