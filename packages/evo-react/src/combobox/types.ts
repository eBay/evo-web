import type { ComponentProps, CSSProperties, ReactNode } from "react";
import type { Strategy } from "@floating-ui/react";
import type { NativeIconButtonProps } from "../icon-button";

/** How the combobox filters its options. */
export type ComboboxAutocomplete = "list" | "none";

/** How keyboard navigation previews the active option. */
export type ComboboxListSelection = "automatic" | "manual";

/** Floating UI positioning strategy used by the listbox. */
export type ComboboxStrategy = Strategy;

/** Optional icon rendered after the combobox input. */
export type EvoComboboxPostfixProps = {
  /** Icon displayed after the input. */
  icon: ReactNode;
  /** Makes the icon actionable using an EvoIconButton. */
  buttonProps?: Omit<NativeIconButtonProps, "children">;
};

export type EvoComboboxProps = Omit<
  ComponentProps<"input">,
  | "aria-activedescendant"
  | "aria-autocomplete"
  | "aria-controls"
  | "aria-expanded"
  | "aria-haspopup"
  | "aria-owns"
  | "autoComplete"
  | "children"
  | "className"
  | "defaultValue"
  | "onSelect"
  | "prefix"
  | "role"
  | "style"
  | "type"
  | "value"
> & {
  /**
   * Filters visible options to those whose text includes the current input
   * value. Defaults to `"none"`.
   */
  autocomplete?: ComboboxAutocomplete;
  /** Removes the input border. */
  borderless?: boolean;
  /** EvoComboboxOption children rendered in the component's listbox. */
  children?: ReactNode;
  /** Class name applied to the combobox wrapper. */
  className?: string;
  /** Initial open state for uncontrolled usage. Ignored when `open` is provided. */
  defaultOpen?: boolean;
  /** Initial input value for uncontrolled usage. Ignored when `value` is provided. */
  defaultValue?: string;
  /** Floating label text shown above the input when focused or filled. */
  floatingLabel?: string;
  /** Stretches the component to fill its container. */
  fluid?: boolean;
  /**
   * Whether arrow-key navigation previews the highlighted option text in the
   * input. Defaults to `"automatic"`.
   */
  listSelection?: ComboboxListSelection;
  /** Called with the displayed input value after typing or option selection. */
  onValueChange?: (value: string) => void;
  /** Called when the listbox requests to open or close. */
  onOpenChange?: (open: boolean) => void;
  /** Controlled listbox visibility. Manage changes with `onOpenChange`. */
  open?: boolean;
  /** Optional icon or icon button rendered after the input. */
  postfix?: EvoComboboxPostfixProps;
  /** Listbox positioning strategy. Defaults to `"absolute"`. */
  strategy?: ComboboxStrategy;
  /** Style applied to the combobox wrapper. */
  style?: CSSProperties;
  /** Controlled displayed input value. */
  value?: string;
};

export type EvoComboboxOptionProps = Omit<
  ComponentProps<"div">,
  "aria-selected" | "children" | "id" | "role" | "tabIndex"
> & {
  /** Always shown during list autocomplete, even when its text does not match. */
  sticky?: boolean;
  /** Display text shown by the option and written into the input when selected. */
  text: string;
};
