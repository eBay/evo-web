import type { ComponentProps, MouseEventHandler } from "react";

export type EvoSnackbarDialogProps = Omit<
  ComponentProps<"aside">,
  "aria-label" | "onAction" | "onClose" | "onOpen"
> & {
  /** Whether the snackbar is open. Changes to this prop synchronize its visibility. Defaults to `false`. */
  open?: boolean;
  /** Stacks the action below the message when set to `"column"`. Defaults to `"row"`. */
  layout?: "row" | "column";
  /** Applies the Skin transition classes. Defaults to `true`. */
  animated?: boolean;
  /** Accessible name for the nonmodal dialog. English default to be overridden is `"Notification"`. */
  a11yText?: string;
  /** Called when the snackbar opens. */
  onOpen?: () => void;
  /** Called when the snackbar closes, including automatic dismissal. */
  onClose?: () => void;
  /** Called when `EvoSnackbarDialogAction` is activated. */
  onAction?: MouseEventHandler<HTMLButtonElement>;
};

export type EvoSnackbarDialogMainProps = ComponentProps<"div">;

export type EvoSnackbarDialogActionsProps = ComponentProps<"div">;

export type EvoSnackbarDialogActionProps = Omit<
  ComponentProps<"button">,
  "aria-label" | "type"
> & {
  /** Accessible label when the visible action text does not explain the action. */
  a11yText?: string;
};
