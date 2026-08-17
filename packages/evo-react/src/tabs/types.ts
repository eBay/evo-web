import type { ComponentProps } from "react";

export type TabId = string | number;
export type Activation = "auto" | "manual";
export type Size = "medium" | "large";

type BaseTabsProps = ComponentProps<"div"> & {
  /** Selects tabs automatically on focus or manually with Enter or Space. Defaults to `"auto"`. */
  activation?: Activation;
  /** Changes the tab heading size. Defaults to `"medium"`. */
  size?: Size;
};

type ControlledTabsProps<Id extends TabId> = {
  /** Controlled id shared by the selected tab and tab panel. Required when `defaultSelected` is not provided. */
  selected: Id;
  /** Unavailable when `selected` controls the selected tab. */
  defaultSelected?: never;
  /** Fired when the selected id changes. */
  onSelectedChange?: (selected: Id) => void;
};

type UncontrolledTabsProps<Id extends TabId> = {
  /** Unavailable when `defaultSelected` initializes an uncontrolled tab set. */
  selected?: never;
  /** Initial id shared by the selected tab and tab panel. Required when `selected` is not provided. */
  defaultSelected: Id;
  /** Fired when the selected id changes. */
  onSelectedChange?: (selected: Id) => void;
};

export type EvoTabsProps<Id extends TabId = TabId> = BaseTabsProps &
  (ControlledTabsProps<Id> | UncontrolledTabsProps<Id>);

export type EvoTabListProps = Omit<ComponentProps<"div">, "role" | "tabIndex">;

export type EvoTabProps<Id extends TabId = TabId> = Omit<
  ComponentProps<"div">,
  | "aria-controls"
  | "aria-disabled"
  | "aria-selected"
  | "id"
  | "role"
  | "tabIndex"
> & {
  /** Unique id that associates this tab with an `EvoTabPanel`. */
  id: Id;
  /** Prevents selection and removes the tab from keyboard navigation. */
  disabled?: boolean;
};

export type EvoTabPanelsProps = ComponentProps<"div">;

export type EvoTabPanelProps<Id extends TabId = TabId> = Omit<
  ComponentProps<"div">,
  "aria-labelledby" | "hidden" | "id" | "role"
> & {
  /** Id of the associated `EvoTab`. */
  id: Id;
};
