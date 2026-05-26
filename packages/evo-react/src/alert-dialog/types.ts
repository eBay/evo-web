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
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
};
