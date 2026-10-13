import type { ComponentProps } from "react";
import type { NativeButtonProps } from "../button/types";
import type { MenuFilterChipProps } from "../filter-chip/types";
import type { NativeIconButtonProps } from "../icon-button/types";
import type { EvoMenuProps as BaseEvoMenuProps } from "../menu/types";

/** Visual treatment of a menu-button trigger. */
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
  /** Disables the trigger and hides the popup while disabled. */
  disabled?: boolean;
  /** Aligns the popup to the opposite inline edge. */
  reverse?: boolean;
  /** CSS positioning strategy for the popup. Defaults to `"absolute"`. */
  strategy?: "absolute" | "fixed";
  /** Makes the menu width match its trigger. */
  fixWidth?: boolean;
};

type MenuButtonTriggerCommonProps = {
  /** Keeps the trigger focusable but prevents menu opening. */
  partiallyDisabled?: NativeButtonProps["partiallyDisabled"];
  onClick?: NativeButtonProps["onClick"];
  /** ID of an external label prepended to the trigger's own label reference. */
  prefixId?: string;
};

type ButtonMenuButtonTriggerProps = Omit<
  NativeButtonProps,
  | "aria-controls"
  | "aria-disabled"
  | "aria-expanded"
  | "aria-haspopup"
  | "aria-label"
  | "aria-labelledby"
  | "as"
  | "bodyState"
  | "disabled"
  | "href"
  | "id"
  | "onClick"
  | "partiallyDisabled"
  | "type"
  | "variant"
> &
  MenuButtonTriggerCommonProps & {
    /** Accessible name for the trigger or an override for its visible text. */
    a11yText?: NativeButtonProps["aria-label"];
    /** Omits the toggle chevron from button and form triggers. */
    noToggleIcon?: boolean;
    hasSelection?: never;
    a11ySelectedText?: never;
  };

type IconMenuButtonTriggerProps = Omit<
  NativeIconButtonProps,
  | "a11yText"
  | "aria-controls"
  | "aria-disabled"
  | "aria-expanded"
  | "aria-haspopup"
  | "aria-label"
  | "aria-labelledby"
  | "as"
  | "disabled"
  | "href"
  | "id"
  | "onClick"
  | "partiallyDisabled"
  | "type"
> &
  MenuButtonTriggerCommonProps & {
    /** Accessible name for the icon trigger. English default to be overridden is `"Menu"`. Pass `null` explicitly only if alternative accessibility information is present. */
    a11yText?: NativeIconButtonProps["a11yText"];
    noToggleIcon?: never;
    hasSelection?: never;
    a11ySelectedText?: never;
    borderless?: never;
    split?: never;
  };

type FilterMenuButtonTriggerProps = Omit<
  MenuFilterChipProps,
  | "aria-controls"
  | "aria-disabled"
  | "aria-expanded"
  | "aria-haspopup"
  | "aria-label"
  | "aria-labelledby"
  | "aria-selected"
  | "a11ySelectedText"
  | "defaultOpen"
  | "defaultSelected"
  | "disabled"
  | "href"
  | "icon"
  | "id"
  | "image"
  | "open"
  | "onClick"
  | "selected"
  | "type"
  | "variant"
> &
  MenuButtonTriggerCommonProps & {
    /** Accessible name for the filter trigger or an override for its visible text. */
    a11yText?: NativeButtonProps["aria-label"];
    /** Indicates applied values for the filter trigger. */
    hasSelection?: MenuFilterChipProps["selected"];
    /** Hidden applied-state text for the filter trigger. English default to be overridden is `"Filter Applied"`. */
    a11ySelectedText?: MenuFilterChipProps["a11ySelectedText"];
    noToggleIcon?: never;
    priority?: never;
    borderless?: never;
    split?: never;
  };

export type EvoMenuButtonTriggerProps =
  | ButtonMenuButtonTriggerProps
  | IconMenuButtonTriggerProps
  | FilterMenuButtonTriggerProps;

/** Props for the positioned menu wrapper. Popup integration props are owned by `EvoMenuButton`. */
export type EvoMenuProps = Omit<
  BaseEvoMenuProps,
  | "id"
  | "tabIndex"
  | "classPrefix"
  | "reverse"
  | "fixed"
  | "fixWidth"
  | "variant"
>;
