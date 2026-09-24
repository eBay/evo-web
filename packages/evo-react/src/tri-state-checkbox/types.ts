import type { ComponentProps } from "react";

export type TriStateCheckboxState = "true" | "false" | "mixed";
export type TriStateCheckboxSize = "regular" | "large";

export type EvoTriStateCheckboxProps = Omit<
  ComponentProps<"input">,
  "aria-checked" | "checked" | "children" | "defaultChecked" | "size" | "type"
> & {
  /**
   * Controlled checkbox state. Use `onCheckedChange` to apply requested changes;
   * omit to use `defaultChecked` and internal state.
   */
  checked?: TriStateCheckboxState;
  /** Initial state when `checked` is omitted. Defaults to `"false"`. */
  defaultChecked?: TriStateCheckboxState;
  /** Called with the next state after the checkbox is activated. */
  onCheckedChange?: (checked: TriStateCheckboxState) => void;
  /**
   * All values controlled by this checkbox. Pair with `checkedValues` and
   * `onCheckedValuesChange` to manage a group of choices.
   */
  values?: readonly string[];
  /**
   * Selected values in the controlled group. With `values`, this determines
   * whether the checkbox is unchecked, mixed, or checked.
   */
  checkedValues?: readonly string[];
  /** Called with the next group selection after the checkbox is activated. */
  onCheckedValuesChange?: (checkedValues: string[]) => void;
  /** Cycles directly between unchecked and checked in standalone mode. */
  skipMixed?: boolean;
  /** Selects regular or large checkbox icons. Defaults to `"regular"`. */
  size?: TriStateCheckboxSize;
};
