import type {
  ComponentProps,
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
} from "react";
import type { EvoButton } from "../button";

export type TooltipPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end";

export type EvoTooltipProps = ComponentProps<"span"> & {
  /** Controlled open state. When provided, the consumer manages it via `onOpenChange`. */
  open?: boolean;
  /** Initial open state for uncontrolled usage. Ignored when `open` is provided. */
  defaultOpen?: boolean;
  /** Callback fired when the tooltip requests to change its open state. */
  onOpenChange?: (open: boolean) => void;
  /** Position of the overlay relative to the host. Defaults to `bottom`. */
  placement?: TooltipPlacement;
  /** Distance between the host and overlay in pixels. Defaults to `8`. */
  offset?: number;
  /** Flips the tooltip when there is insufficient space. Defaults to `true`. */
  flip?: boolean;
  /** Shifts the tooltip to keep it within the viewport. Defaults to `true`. */
  shift?: boolean;
  /** Uses inline positioning for hosts that wrap across multiple lines. Defaults to `true`. */
  inline?: boolean;
  /** Disables hover and opens only for keyboard-visible focus. Defaults to `false`. */
  noHover?: boolean;
};

type TooltipHostOwnProps<T extends ElementType> = {
  /** Element or component rendered as the tooltip host. Defaults to `EvoButton`. */
  as?: T;
  /** Content rendered inside the tooltip host. */
  children?: ReactNode;
  /** Additional class name merged with the Skin host class. */
  className?: string;
  /** Ref forwarded to the rendered host. Custom components must pass it to their DOM element. */
  ref?: ComponentPropsWithRef<T>["ref"];
};

export type EvoTooltipHostProps<T extends ElementType = typeof EvoButton> =
  TooltipHostOwnProps<T> &
    Omit<
      ComponentPropsWithRef<T>,
      keyof TooltipHostOwnProps<T> | "aria-describedby" | "aria-expanded"
    >;

export type EvoTooltipContentProps = Omit<
  ComponentProps<"span">,
  "id" | "role" | "tabIndex"
>;

type TooltipHeadingOwnProps<T extends ElementType> = {
  /** Element or component used for the heading. Defaults to `span`. */
  as?: T;
  /** Content rendered inside the tooltip heading. */
  children?: ReactNode;
  /** Additional class name merged with the Skin heading class. */
  className?: string;
  /** Ref forwarded to the rendered heading. */
  ref?: ComponentPropsWithRef<T>["ref"];
};

export type EvoTooltipHeadingProps<T extends ElementType = "span"> =
  TooltipHeadingOwnProps<T> &
    Omit<ComponentPropsWithRef<T>, keyof TooltipHeadingOwnProps<T>>;
