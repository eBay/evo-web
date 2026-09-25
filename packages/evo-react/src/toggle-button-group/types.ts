import type { ComponentProps } from "react";
import type {
  EvoToggleButtonProps,
  ToggleButtonLayout,
} from "../toggle-button/types";

export type ToggleButtonGroupValue = string | number;
export type ToggleButtonGroupVariant = "checkbox" | "radio" | "radio-toggle";

type GroupBaseProps = Omit<ComponentProps<"div">, "onChange"> & {
  /** Accessible name for the button list. Use this or `a11yLabelId`. */
  a11yText?: string;
  /** ID of visible text naming the button list. Use this or `a11yText`. */
  a11yLabelId?: string;
  /** Default layout inherited by each group item. Defaults to `"minimal"`. */
  layoutType?: ToggleButtonLayout;
  /** Preferred minimum column count for the smallest container. */
  columnsMin?: number;
  /** Preferred column count for extra small containers. */
  columnsXS?: number;
  /** Preferred column count for small containers. */
  columnsSM?: number;
  /** Preferred column count for medium containers. */
  columnsMD?: number;
  /** Preferred column count for extra large containers. */
  columnsXL?: number;
};

type MultipleSelection<Value extends ToggleButtonGroupValue> = {
  /** Enables multiple pressed buttons. Defaults to `"checkbox"`. */
  variant?: "checkbox";
  /** Controlled values of pressed buttons. */
  selected?: readonly Value[];
  /** Initial values of pressed buttons in an uncontrolled group. */
  defaultSelected?: readonly Value[];
  /** Called with the next array of pressed values. */
  onSelectedChange?: (selected: Value[]) => void;
};

type SingleSelection<Value extends ToggleButtonGroupValue> = {
  /** Selects one button. `"radio"` keeps it pressed; `"radio-toggle"` can clear it. */
  variant: "radio" | "radio-toggle";
  /** Controlled value of the pressed button, or `null` when none is pressed. */
  selected?: Value | null;
  /** Initial pressed value in an uncontrolled group. Defaults to `null`. */
  defaultSelected?: Value | null;
  /** Called with the next pressed value, or `null` when cleared. */
  onSelectedChange?: (selected: Value | null) => void;
};

export type EvoToggleButtonGroupProps<
  Value extends ToggleButtonGroupValue = ToggleButtonGroupValue,
> = GroupBaseProps & (MultipleSelection<Value> | SingleSelection<Value>);

export type EvoToggleButtonGroupItemProps<
  Value extends ToggleButtonGroupValue = ToggleButtonGroupValue,
> = Omit<
  EvoToggleButtonProps,
  "value" | "pressed" | "defaultPressed" | "onToggle"
> & {
  /** Stable value identifying this button in the group's selected values. */
  value: Value;
};
