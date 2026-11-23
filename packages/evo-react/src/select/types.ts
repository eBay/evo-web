import type { ComponentProps } from "react";

export type SelectSize = "regular" | "large";

type BaseSelectProps<Value extends string> = Omit<
  ComponentProps<"select">,
  "multiple" | "onChange" | "size" | "value" | "defaultValue"
> & {
  value?: Value | readonly Value[];
  defaultValue?: Value | readonly Value[];
  /** Removes the select border while retaining the native control. */
  borderless?: boolean;
  /**
   * Displays a label that rises when focused or when a value is selected.
   * While the label is inline, an `EvoSelectOption` with an empty `value`
   * renders no text so it does not overlap the label.
   */
  floatingLabel?: string;
  /** Makes the select fill its containing block. */
  fluid?: boolean;
  /** Selects the regular or large Skin treatment. Defaults to `"regular"`. */
  size?: SelectSize;
};

export type EvoSelectProps<Value extends string = string> =
  BaseSelectProps<Value> &
    (
      | {
          /** Selects one option at a time. */
          multiple?: false;
          /** Called with the selected option value. */
          onChange?: (value: Value) => void;
        }
      | {
          /** Allows more than one option to be selected. */
          multiple: true;
          /** Called with all selected option values. */
          onChange?: (values: Value[]) => void;
        }
    );

export type EvoSelectOptionProps = ComponentProps<"option">;

export type EvoSelectOptionGroupProps = Omit<
  ComponentProps<"optgroup">,
  "label"
> & {
  /** Names this group of related options. */
  label: string;
};
