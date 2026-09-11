import type {
  ComponentProps,
  CSSProperties,
  ElementType,
  ReactElement,
} from "react";
import type { NativeIconButtonProps } from "../icon-button/types";

/** Supported dialog width treatments. */
export type DialogSize = "wide" | "narrow" | "large";
/** User interactions that the native dialog allows to request dismissal. */
export type DialogClosedBy = "any" | "closerequest" | "none";

export type EvoDialogBannerProps = ComponentProps<"div"> & {
  /** Image URL rendered as the banner's CSS background image. */
  src?: string;
  /** Background position applied to the image supplied through `src`. */
  position?: CSSProperties["backgroundPosition"];
};

export type EvoDialogCloseProps = Omit<NativeIconButtonProps, "children">;

export type EvoDialogPreviousProps = Omit<NativeIconButtonProps, "children">;

export type EvoDialogHeaderProps = ComponentProps<"div">;

export type EvoDialogTitleProps = ComponentProps<"h2"> & {
  /**
   * Heading element used for the dialog title. Match it to the surrounding
   * page's heading hierarchy. Defaults to `"h2"`.
   */
  as?: ElementType;
};

export type EvoDialogMainProps = ComponentProps<"div">;

export type EvoDialogFooterProps = ComponentProps<"div">;

export type EvoDialogProps = Omit<
  ComponentProps<"dialog">,
  "open" | "closedby"
> & {
  /**
   * Controls whether the dialog is open. Pair with `onOpenChange`; omit to use
   * `defaultOpen` for uncontrolled state.
   */
  open?: boolean;
  /** Sets the initial open state when `open` is omitted. Defaults to `false`. */
  defaultOpen?: boolean;
  /** Called with `false` when the dialog receives an allowed close request. */
  onOpenChange?: (open: boolean) => void;
  /** Selects a supported dialog width treatment. */
  size?: DialogSize;
  /**
   * Sets which user interactions can request dismissal through the native
   * `closedby` behavior. Defaults to `"any"`.
   */
  closedby?: DialogClosedBy;
  /**
   * Banner rendered before the dialog contents. Use `EvoDialogBanner` to apply
   * the expressive image structure expected by Skin.
   */
  banner?: ReactElement<EvoDialogBannerProps> | null;
};
