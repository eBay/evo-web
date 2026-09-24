import type { ComponentProps, ReactNode } from "react";
import type { Priority, Size, Split } from "../button/types";
import type {
  EvoMenuCheckboxItemProps,
  EvoMenuItemProps,
  EvoMenuRadioItemProps,
  MenuValue,
} from "../menu/types";

/** Visual treatment of the menu trigger. */
export type MenuButtonVariant = "button" | "form" | "icon" | "filter";

export type EvoMenuButtonProps = Omit<ComponentProps<"span">, "onChange"> & {
  /** Controls whether the menu is open. Pair with `onOpenChange`. */
  open?: boolean;
  /** Initial open state when `open` is omitted. Defaults to `false`. */
  defaultOpen?: boolean;
  /** Called when the trigger or dismissal behavior requests an open-state change. */
  onOpenChange?: (open: boolean) => void;
  /** Closes the popup after a menu item is selected by pointer or keyboard. Defaults to `false`. */
  collapseOnSelect?: boolean;
  /** Trigger presentation. Defaults to `"button"`. */
  variant?: MenuButtonVariant;
  /** Removes the trigger border in button and form variants. */
  borderless?: boolean;
  /** Visual priority of button and form triggers. Defaults to `"secondary"`. */
  priority?: Priority;
  /** Supported trigger size. */
  size?: Size;
  /** Transparent background for the button or icon trigger. */
  transparent?: boolean;
  /** Disables the trigger and closes an uncontrolled popup. */
  disabled?: boolean;
  /** Keeps the trigger focusable but prevents menu opening. */
  partiallyDisabled?: boolean;
  /** Omits the toggle chevron from button and form triggers. */
  noToggleIcon?: boolean;
  /** Accessible name for an icon trigger or override for a visible text trigger. English default to be overridden is `"Menu"` for the icon variant. */
  a11yText?: string;
  /** Indicates applied values for the filter trigger. */
  hasSelection?: boolean;
  /** Hidden applied-state text for the filter trigger. English default to be overridden is `"Filter Applied"`. */
  a11ySelectedText?: string;
  /** Aligns the popup to the opposite inline edge. */
  reverse?: boolean;
  /** CSS positioning strategy for the popup. Defaults to `"absolute"`. */
  strategy?: "absolute" | "fixed";
  /** Makes the menu width match its trigger. */
  fixWidth?: boolean;
  /** Styles the trigger as one side of a split control. */
  split?: Split;
  /** ID of an external label prepended to the trigger's own label reference. */
  prefixId?: string;
};

export type EvoMenuButtonTriggerProps = Omit<
  ComponentProps<"button">,
  "aria-expanded" | "aria-controls" | "aria-label" | "disabled" | "type"
>;

export type EvoMenuButtonMenuProps = Omit<
  ComponentProps<"span">,
  "id" | "tabIndex"
> & {
  /** Optional footer rendered after the navigable menu items. */
  footer?: ReactNode;
};

export type EvoMenuButtonItemProps = EvoMenuItemProps;
export type EvoMenuButtonRadioItemProps<Value extends MenuValue = MenuValue> =
  EvoMenuRadioItemProps<Value>;
export type EvoMenuButtonCheckboxItemProps<
  Value extends MenuValue = MenuValue,
> = EvoMenuCheckboxItemProps<Value>;
