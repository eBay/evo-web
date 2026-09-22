import type { MouseEvent } from "react";
import type { EvoInputProps } from "../input";

type NumberInputAccessibilityProps =
  | {
      /** Visible label placed before the decrement button. */
      label: string;
      /**
       * Accessible name used when no visible `label` is supplied. English
       * default to be overridden is `"Number input"`. Pass `null` explicitly
       * _only_ if alternative accessibility information is present.
       */
      a11yText?: null;
    }
  | {
      label?: never;
      /**
       * Accessible name used when no visible `label` is supplied. English
       * default to be overridden is `"Number input"`. Pass `null` explicitly
       * _only_ if alternative accessibility information is present.
       */
      a11yText?: string;
    };

type NumberInputBehaviorProps = {
  /** Accessible name for the delete button, which enables the quantity-input variant. */
  a11yDeleteText?: string;
  /** Controlled numeric value. */
  value?: number;
  /** Initial numeric value for uncontrolled usage. */
  defaultValue?: number;
  /** Minimum numeric value. Defaults to `0`, or `1` when delete is enabled. */
  min?: number;
  /** Maximum numeric value. Defaults to `Infinity`. */
  max?: number;
  /** Called with the next value after direct input or a paddle click. */
  onChange?: (value: number) => void;
  /** Called when the delete button is clicked. */
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type EvoNumberInputProps = Omit<
  EvoInputProps,
  | "aria-label"
  | "children"
  | "defaultValue"
  | "floatingLabel"
  | "floatingLabelStatic"
  | "max"
  | "min"
  | "onChange"
  | "postfix"
  | "prefix"
  | "type"
  | "value"
> &
  NumberInputAccessibilityProps &
  NumberInputBehaviorProps;
