import type { ComponentProps } from "react";

export type SelectSize = "regular" | "large";

type BaseSelectProps = Omit<
  ComponentProps<"select">,
  "multiple" | "onChange" | "size"
> & {
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

export type EvoSelectProps = BaseSelectProps &
  (
    | {
        /** Selects one option at a time. */
        multiple?: false;
        /** Called with the selected option value. */
        onChange?: (value: string) => void;
      }
    | {
        /** Allows more than one option to be selected. */
        multiple: true;
        /** Called with all selected option values. */
        onChange?: (values: string[]) => void;
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
