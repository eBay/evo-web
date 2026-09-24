import type { ComponentProps, ReactNode } from "react";
import type {
  AnchorButtonProps,
  NativeButtonProps,
  Priority,
  Size,
} from "../button/types";
import type { EvoMenuButtonProps } from "../menu-button/types";

/** Props shared by both halves of the split control. */
export type EvoSplitButtonProps = ComponentProps<"span"> & {
  /** Visual priority shared by the action and menu trigger. */
  priority?: Priority;
  /** Size shared by the action and menu trigger. */
  size?: Size;
  /** Disables both controls. */
  disabled?: boolean;
  /** Makes both controls focusable but prevents their actions. */
  partiallyDisabled?: boolean;
  /** Gives both controls a transparent background. */
  transparent?: boolean;
  /** Removes the opaque border from both controls. */
  borderless?: boolean;
  /** Accessible name of the menu trigger. Defaults to `"Menu"`; localize this text. */
  a11yMenuText?: string;
};

type SharedButtonKeys =
  | "priority"
  | "size"
  | "disabled"
  | "partiallyDisabled"
  | "transparent"
  | "borderless"
  | "split";

type ActionExtras = {
  /** Accessible action name while `bodyState="loading"`. */
  a11yLoadingText?: string;
};

export type EvoSplitButtonActionProps =
  | (Omit<AnchorButtonProps, SharedButtonKeys> & ActionExtras)
  | (Omit<NativeButtonProps, SharedButtonKeys> & ActionExtras);

export type EvoSplitButtonMenuProps = Omit<
  EvoMenuButtonProps,
  | SharedButtonKeys
  | "variant"
  | "reverse"
  | "noToggleIcon"
  | "children"
  | "a11yText"
> & {
  /** Menu items or value-based selection groups. */
  children?: ReactNode;
  /** Accessible name for this menu trigger, overriding the root's `a11yMenuText`. */
  a11yText?: string;
  /** Optional footer rendered after the navigable menu items. */
  footer?: ReactNode;
};
