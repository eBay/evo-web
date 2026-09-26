import type { Placement } from "@floating-ui/react";
import type {
  ComponentProps,
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
} from "react";

export type TourtipPlacement = Placement;

export type EvoTourtipProps = ComponentProps<"span"> & {
  /** Controlled visibility. The tourtip requests changes through `onOpenChange`. */
  open?: boolean;
  /** Initial visibility for uncontrolled usage. Defaults to `true`. */
  defaultOpen?: boolean;
  /** Called when the close button or `Escape` requests a visibility change. */
  onOpenChange?: (open: boolean) => void;
  /** Position relative to the host. Defaults to `"top"`. */
  placement?: TourtipPlacement;
  /** Distance from the host in pixels. Defaults to `6`. */
  offset?: number;
  /** Flips the overlay when it would leave the viewport. Defaults to `true`. */
  flip?: boolean;
  /** Shifts the overlay to remain within the viewport. Defaults to `false`. */
  shift?: boolean;
  /** Positions against individual lines of a wrapping host. Defaults to `true`. */
  inline?: boolean;
  /** Close button label. English default to be overridden is `"Dismiss tourtip"`. */
  a11yCloseText: string;
};

type TourtipHostOwnProps<T extends ElementType> = {
  /** Rendered host element or component. Defaults to `<span>`; use an interactive element when users must act on it. */
  as?: T;
  /** Content of the host element. */
  children?: ReactNode;
  /** Additional class name merged with `tourtip__host`. */
  className?: string;
  /** Ref forwarded to the rendered host. Custom components must forward it to their DOM element. */
  ref?: ComponentPropsWithRef<T>["ref"];
};

export type EvoTourtipHostProps<T extends ElementType = "span"> =
  TourtipHostOwnProps<T> &
    Omit<
      ComponentPropsWithRef<T>,
      keyof TourtipHostOwnProps<T> | "aria-expanded" | "aria-controls"
    >;

export type EvoTourtipContentProps = Omit<ComponentProps<"span">, "role"> & {
  /** Optional named heading, rendered before body content and used to label the region. */
  heading?: ReactNode;
  /** Optional named footer, rendered after the close button. */
  footer?: ReactNode;
};

type TourtipHeadingOwnProps<T extends ElementType> = {
  /** Heading element or component. Defaults to `<h2>`. */
  as?: T;
  /** Heading content used as the region's accessible name. */
  children?: ReactNode;
  /** Additional class name merged with `tourtip__heading`. */
  className?: string;
  /** Ref forwarded to the rendered heading. */
  ref?: ComponentPropsWithRef<T>["ref"];
};

export type EvoTourtipHeadingProps<T extends ElementType = "h2"> =
  TourtipHeadingOwnProps<T> &
    Omit<ComponentPropsWithRef<T>, keyof TourtipHeadingOwnProps<T>>;

export type EvoTourtipFooterProps = ComponentProps<"span"> & {
  /** Optional position in a guided sequence, such as `"2 of 3"`. */
  index?: string;
};
