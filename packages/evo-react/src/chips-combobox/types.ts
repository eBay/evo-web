import type { CSSProperties, ReactNode } from "react";
import type {
  EvoComboboxOptionProps,
  EvoComboboxProps,
} from "../combobox/types";

type ControlledSelection = {
  /** Controlled chip values. Pair with `onSelectedChange`. */
  selected: readonly string[];
  /** Unavailable when `selected` controls the chips. */
  defaultSelected?: never;
};

type UncontrolledSelection = {
  /** Unavailable when `defaultSelected` initializes the chips. */
  selected?: never;
  /** Initial chip values when selection is managed internally. */
  defaultSelected?: readonly string[];
};

export type EvoChipsComboboxProps = Omit<
  EvoComboboxProps,
  | "children"
  | "className"
  | "defaultValue"
  | "inputSize"
  | "onOptionSelect"
  | "onValueChange"
  | "required"
  | "style"
  | "value"
> &
  (ControlledSelection | UncontrolledSelection) & {
    /** Named `EvoChipsComboboxOption` choices. */
    children?: ReactNode;
    /** Called when a chip is added or removed. */
    onSelectedChange?: (selected: string[]) => void;
    /**
     * Accessible action label for each chip's removal button. The chip text
     * is linked as its description. English default to be overridden is
     * `"Remove"`.
     */
    a11yDeleteButtonText?: string;
    /**
     * Accessible name for the list of selected chips. English default to be
     * overridden is `"Selected items"`.
     */
    a11ySelectedItemsText?: string;
    /** Skin class on the outer `<div>`. */
    className?: string;
    /** Style on the outer `<div>`. */
    style?: CSSProperties;
  };

/** A selectable option shown only while its value is not a chip. */
export type EvoChipsComboboxOptionProps = EvoComboboxOptionProps;
