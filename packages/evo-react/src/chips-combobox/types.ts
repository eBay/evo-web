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
  | "onOptionSelect"
  | "onValueChange"
  | "style"
  | "value"
> &
  (ControlledSelection | UncontrolledSelection) & {
    /** Named `EvoChipsComboboxOption` choices. */
    children?: ReactNode;
    /** Called when a chip is added or removed. */
    onSelectedChange?: (selected: string[]) => void;
    /**
     * Accessible action prefix for each chip's removal button. English
     * default to be overridden is `"Remove"`.
     */
    a11yDeleteButtonText?: string;
    /** Skin class on the outer `<span>`. */
    className?: string;
    /** Style on the outer `<span>`. */
    style?: CSSProperties;
  };

/** A selectable option shown only while its value is not a chip. */
export type EvoChipsComboboxOptionProps = EvoComboboxOptionProps;
