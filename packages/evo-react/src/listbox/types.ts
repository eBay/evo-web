import type { ComponentProps, ReactNode } from "react";

/** Value assigned to a listbox option. */
export type ListboxValue = string | number;

/** Data for one `EvoListbox` choice. */
export type EvoListboxOption<Value extends ListboxValue = ListboxValue> = Omit<
  ComponentProps<"div">,
  "aria-disabled" | "aria-selected" | "children" | "role" | "tabIndex"
> & {
  /** Stable value used for selection and form submission. */
  value: Value;
  /** Visible option text and text used for typeahead. */
  text: string;
  /** Optional icon displayed before `text`. */
  icon?: ReactNode;
  /** Supporting text displayed below `text`. */
  description?: ReactNode;
  /** Prevents selection and keyboard activation. */
  disabled?: boolean;
};

type ControlledSelection<Value extends ListboxValue> = {
  /** Controlled selected option value. Pass `null` to clear the selection. */
  selected: Value | null;
  /** Unavailable when `selected` controls the listbox. */
  defaultSelected?: never;
};

type UncontrolledSelection<Value extends ListboxValue> = {
  /** Unavailable when `defaultSelected` initializes the listbox. */
  selected?: never;
  /** Initial selected option value. Omit or pass `null` for no visual selection. */
  defaultSelected?: Value | null;
};

export type EvoListboxProps<Value extends ListboxValue = ListboxValue> = Omit<
  ComponentProps<"div">,
  "children" | "defaultValue" | "onChange" | "role"
> &
  (ControlledSelection<Value> | UncontrolledSelection<Value>) & {
    /** Options rendered in the listbox and its hidden native `<select>`. */
    options: readonly EvoListboxOption<Value>[];
    /** Skin class prefix when embedded in another control. Defaults to `"listbox"`. */
    classPrefix?: string;
    /** Name submitted by the hidden native `<select>`. */
    name?: string;
    /** Disables interaction and the hidden native `<select>`. */
    disabled?: boolean;
    /** Accessible name for the listbox. Use `aria-labelledby` for an external label. */
    a11yText?: string;
    /**
     * Clipped text added to the selected option. English default to be overridden is
     * `"selected"`.
     */
    a11ySelectedText: string;
    /**
     * `"auto"` selects while navigating with arrow keys; `"manual"` requires
     * `Enter` or `Space`. Defaults to `"manual"`.
     */
    listSelection?: "auto" | "manual";
    /** Time in milliseconds before the typeahead search resets. Defaults to `1300`. */
    typeaheadTimeoutLength?: number;
    /** Called when the selected option changes by pointer or keyboard. */
    onSelectedChange?: (selected: Value) => void;
    /** Called when `Escape` is pressed while the listbox has focus. */
    onEscape?: () => void;
  };
