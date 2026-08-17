import type { ComponentProps, ComponentType } from "react";
import type { EvoBadgeProps } from "../badge/types";

export type EvoFakeMenuProps = ComponentProps<"span"> & {
  /** Prefix applied to item and separator BEM classes when embedded in another component. */
  classPrefix?: string;
  /** Aligns the menu to the opposite inline edge. */
  reverse?: boolean;
  /** Uses fixed positioning instead of absolute positioning. */
  fixed?: boolean;
  /** Makes the menu width match its containing control. */
  fixWidth?: boolean;
};

export type EvoFakeMenuItemsProps = Omit<ComponentProps<"ul">, "tabIndex">;

export type EvoFakeMenuItemType = "button" | "submit";

type BaseFakeMenuItemProps = {
  /** Marks the item as representing the current page or current selection. */
  current?: boolean;
  /** When `false`, a current item uses `aria-current="true"` instead of `aria-current="page"`. */
  itemMatchesUrl?: boolean;
};

export type EvoFakeMenuAnchorItemProps = Omit<
  ComponentProps<"a">,
  "aria-current" | "aria-disabled" | "type"
> &
  BaseFakeMenuItemProps & {
    /** Prevents navigation by removing the link's `href`. */
    disabled?: boolean;
    /** Custom component used in place of the native anchor. Only applies when `type` is omitted. */
    as?: ComponentType<ComponentProps<"a">>;
    /** Omit to render the item as an anchor. */
    type?: never;
  };

export type EvoFakeMenuButtonItemProps = Omit<
  ComponentProps<"button">,
  "aria-current" | "disabled" | "type"
> &
  BaseFakeMenuItemProps & {
    /** Disables the native button. */
    disabled?: boolean;
    /** Renders the item as a button with the specified native button type. */
    type: EvoFakeMenuItemType;
    /** Unavailable when the item renders as a button. */
    href?: never;
    /** Unavailable when the item renders as a button. */
    as?: never;
  };

export type EvoFakeMenuItemProps =
  | EvoFakeMenuAnchorItemProps
  | EvoFakeMenuButtonItemProps;

export type EvoFakeMenuItemBadgeProps = Omit<EvoBadgeProps, "type">;

export type EvoFakeMenuSeparatorProps = Omit<ComponentProps<"hr">, "role">;
