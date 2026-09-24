import type { ComponentProps } from "react";
import type { Priority, Size } from "../button/types";

export type FakeMenuButtonVariant = "button" | "form" | "icon";

export type EvoFakeMenuButtonProps = Omit<
  ComponentProps<"span">,
  "onChange"
> & {
  /** Controls whether the menu is open. Pair with `onOpenChange`. */
  open?: boolean;
  /** Initial open state when `open` is omitted. Defaults to `false`. */
  defaultOpen?: boolean;
  /** Called whenever the trigger or dismissal behavior requests an open-state change. */
  onOpenChange?: (open: boolean) => void;
  /** Closes the menu after a link or button inside it is activated. Defaults to `false`. */
  collapseOnSelect?: boolean;
  /** Selects text, form, or icon trigger styling. Defaults to `"button"`. */
  variant?: FakeMenuButtonVariant;
  /** Removes the trigger border in text and form variants. */
  borderless?: boolean;
  /** Visual priority for text and form trigger variants. Defaults to `"secondary"`. */
  priority?: Priority;
  /** Trigger size, when supported by Skin. */
  size?: Size;
  /** Transparent background for the icon trigger. */
  transparent?: boolean;
  /** Disables the trigger. */
  disabled?: boolean;
  /** Omits the toggle chevron from text and form triggers. */
  noToggleIcon?: boolean;
  /** Accessible trigger name. The icon variant needs it when no text is visible; English default to be overridden is `"Menu"` for that variant. */
  a11yText?: string;
  /** Aligns the menu with the opposite inline edge. */
  reverse?: boolean;
  /** CSS positioning strategy for the popup. Defaults to `"absolute"`. */
  strategy?: "absolute" | "fixed";
  /** Makes the menu width match the trigger width. */
  fixWidth?: boolean;
  /** Allows the popup to flip to remain in view. Defaults to `true`. */
  flip?: boolean;
};

export type EvoFakeMenuButtonTriggerProps = Omit<
  ComponentProps<"button">,
  "aria-expanded" | "aria-controls" | "aria-label" | "disabled" | "type"
>;

export type EvoFakeMenuButtonMenuProps = Omit<
  ComponentProps<"span">,
  "id" | "tabIndex"
>;

export type EvoFakeMenuButtonLabelProps = ComponentProps<"span">;
