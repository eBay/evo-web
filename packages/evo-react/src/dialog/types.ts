import type {
  ComponentProps,
  CSSProperties,
  ElementType,
  ReactElement,
} from "react";
import type { NativeIconButtonProps } from "../icon-button/types";

export type DialogSize = "wide" | "narrow" | "large";
export type DialogClosedBy = "any" | "closerequest" | "none";

export type EvoDialogBannerProps = ComponentProps<"div"> & {
  /** URL of the banner image. */
  src?: string;
  /** CSS background position used for the banner image. */
  position?: CSSProperties["backgroundPosition"];
};

export type EvoDialogCloseProps = Omit<NativeIconButtonProps, "children">;

export type EvoDialogPreviousProps = Omit<NativeIconButtonProps, "children">;

export type EvoDialogHeaderProps = ComponentProps<"div">;

export type EvoDialogTitleProps = ComponentProps<"h2"> & {
  /** Heading element used for the dialog title. Defaults to `h2`. */
  as?: ElementType;
};

export type EvoDialogMainProps = ComponentProps<"div">;

export type EvoDialogFooterProps = ComponentProps<"div">;

export type EvoDialogProps = Omit<
  ComponentProps<"dialog">,
  "open" | "closedby"
> & {
  /** Controlled open state. When provided, the consumer manages it via `onOpenChange`. */
  open?: boolean;
  /** Initial open state for uncontrolled usage. Ignored when `open` is provided. */
  defaultOpen?: boolean;
  /** Callback fired when the dialog requests to change its open state. */
  onOpenChange?: (open: boolean) => void;
  /** Size variant of the dialog. */
  size?: DialogSize;
  /** User actions that may close the native dialog. Defaults to `any`. */
  closedby?: DialogClosedBy;
  /** Optional banner rendered before the dialog header. */
  banner?: ReactElement<EvoDialogBannerProps> | null;
};
