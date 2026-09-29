import type { ComponentProps, ElementType } from "react";
import type { NativeIconButtonProps } from "../icon-button/types";

export type EvoToastDialogProps = Omit<
  ComponentProps<"dialog">,
  "open" | "role" | "aria-modal" | "aria-live" | "closedby"
> & {
  /** Controls visibility. Pair with `onOpenChange`; omit to use `defaultOpen`. */
  open?: boolean;
  /** Initial visibility when `open` is omitted. Defaults to `false`. */
  defaultOpen?: boolean;
  /** Called with `false` when a close request is made. */
  onOpenChange?: (open: boolean) => void;
};

export type EvoToastDialogHeaderProps = ComponentProps<"div">;

export type EvoToastDialogTitleProps = ComponentProps<"h2"> & {
  /** Heading element for the title. Defaults to `"h2"`. */
  as?: ElementType;
};

export type EvoToastDialogCloseProps = Omit<
  NativeIconButtonProps,
  "children" | "transparent"
>;

export type EvoToastDialogMainProps = ComponentProps<"div">;
export type EvoToastDialogFooterProps = ComponentProps<"div">;
