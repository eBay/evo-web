import type {
  ComponentProps,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react";
import type { EvoBadgeProps } from "../badge/types";

export type MenuValue = string | number;
export type EvoMenuVariant = "filter" | "none";
export type EvoMenuItemSelectEvent =
  | MouseEvent<HTMLDivElement>
  | KeyboardEvent<HTMLDivElement>;

export type EvoMenuProps = ComponentProps<"span"> & {
  /** Changes the menu presentation. The filter variant displays selection controls. */
  variant?: EvoMenuVariant;
  /** Prefix applied to the menu BEM classes when embedded in another component. */
  classPrefix?: string;
  /** Aligns the menu to the opposite inline edge. */
  reverse?: boolean;
  /** Uses fixed positioning instead of absolute positioning. */
  fixed?: boolean;
  /** Makes the menu width match its containing control. */
  fixWidth?: boolean;
  /** Time in milliseconds before the typeahead search buffer resets. */
  typeaheadTimeoutLength?: number;
};

type MenuItemsA11yProps =
  | {
      /** Localized accessible name for the menu. */
      a11yText?: string;
      /** Cannot be used with `a11yText`. */
      a11yLabelId?: never;
    }
  | {
      /** Cannot be used with `a11yLabelId`. */
      a11yText?: never;
      /** ID of the element that labels the menu. */
      a11yLabelId?: string;
    };

export type EvoMenuItemsProps = Omit<
  ComponentProps<"div">,
  "aria-label" | "aria-labelledby" | "role" | "tabIndex"
> &
  MenuItemsA11yProps;

export type EvoMenuItemProps = Omit<
  ComponentProps<"div">,
  "aria-checked" | "aria-disabled" | "onSelect" | "role" | "tabIndex"
> & {
  /** Prevents activation and removes the item from keyboard navigation. */
  disabled?: boolean;
  /** Text used for typeahead. Defaults to the rendered text content. */
  textValue?: string;
  /** Triggered when the item is activated by click, Enter, or Space. */
  onSelect?: (event: EvoMenuItemSelectEvent) => void;
};

export type EvoMenuRadioItemProps<Value extends MenuValue = MenuValue> =
  EvoMenuItemProps & {
    /** Selection value managed by the nearest EvoMenuRadioGroup. */
    value: Value;
  };

export type EvoMenuCheckboxItemProps<Value extends MenuValue = MenuValue> =
  EvoMenuItemProps & {
    /** Selection value managed by the nearest EvoMenuCheckboxGroup. */
    value: Value;
  };

type MenuGroupProps = {
  children?: ReactNode;
};

type ControlledRadioGroupProps<Value extends MenuValue> = {
  /** Controlled selected value. Pass null when no item is selected. */
  selected: Value | null;
  /** Unavailable when selected controls the group. */
  defaultSelected?: never;
  /** Triggered when the selected value changes. */
  onSelectedChange?: (selected: Value) => void;
};

type UncontrolledRadioGroupProps<Value extends MenuValue> = {
  /** Unavailable when defaultSelected initializes an uncontrolled group. */
  selected?: never;
  /** Initial selected value for an uncontrolled group. Pass null or omit when no item is selected. */
  defaultSelected?: Value | null;
  /** Triggered when the selected value changes. */
  onSelectedChange?: (selected: Value) => void;
};

export type EvoMenuRadioGroupProps<Value extends MenuValue = MenuValue> =
  MenuGroupProps &
    (ControlledRadioGroupProps<Value> | UncontrolledRadioGroupProps<Value>);

type ControlledCheckboxGroupProps<Value extends MenuValue> = {
  /** Controlled selected values. */
  selected: readonly Value[];
  /** Unavailable when selected controls the group. */
  defaultSelected?: never;
  /** Triggered when the selected values change. */
  onSelectedChange?: (selected: Value[]) => void;
};

type UncontrolledCheckboxGroupProps<Value extends MenuValue> = {
  /** Unavailable when defaultSelected initializes an uncontrolled group. */
  selected?: never;
  /** Initial selected values for an uncontrolled group. */
  defaultSelected?: readonly Value[];
  /** Triggered when the selected values change. */
  onSelectedChange?: (selected: Value[]) => void;
};

export type EvoMenuCheckboxGroupProps<Value extends MenuValue = MenuValue> =
  MenuGroupProps &
    (
      | ControlledCheckboxGroupProps<Value>
      | UncontrolledCheckboxGroupProps<Value>
    );

export type EvoMenuSeparatorProps = Omit<ComponentProps<"hr">, "role">;
export type EvoMenuFooterProps = ComponentProps<"div">;

export type EvoMenuItemBadgeProps = Omit<EvoBadgeProps, "type">;
