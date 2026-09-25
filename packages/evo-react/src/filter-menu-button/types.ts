import type { ComponentProps, FormEvent, MouseEvent } from "react";
import type {
  FilterMenuSelection,
  FilterMenuVariant,
} from "../filter-menu/types";

type FilterMenuButtonBaseProps = Omit<ComponentProps<"span">, "onChange"> & {
  /** Visible trigger text. Supply this or `a11yText` to name the button. */
  text?: string;
  /** Optional formatted count displayed after `text`. */
  countText?: string;
  /** Accessible trigger name when visible text is absent or needs more context. */
  a11yText?: string;
  /** Overrides whether the trigger looks selected, independently of item selection. */
  hasSelection?: boolean;
  /** Hidden text announced while selection styling is active. English default to be overridden is `"Filter Applied"`. */
  a11yFilterAppliedText?: string;
  /** Disables the trigger and keeps its menu closed. */
  disabled?: boolean;
  /** Controls whether the menu is open. Pair with `onOpenChange`. */
  open?: boolean;
  /** Initial open state when `open` is omitted. Defaults to `false`. */
  defaultOpen?: boolean;
  /** Called when the trigger or a dismissal action requests an open-state change. */
  onOpenChange?: (open: boolean) => void;
  /** Uses native inputs and a form submit action instead of menu items. */
  variant?: FilterMenuVariant;
  /** Native form name, only used with `variant="form"`. */
  formName?: string;
  /** Native form action, only used with `variant="form"`. */
  formAction?: string;
  /** Native form method, only used with `variant="form"`. */
  formMethod?: string;
  /** Footer button text rendered after the supplied items region. */
  footerText?: string;
  /** Accessible name for the automatically rendered footer button. */
  a11yFooterText?: string;
  /** Placeholder and accessible name for the optional search input. */
  searchHeaderPlaceholderText?: string;
  /** Accessible name for the search clear button. English default to be overridden is `"Clear search"`. */
  a11ySearchHeaderClearText?: string;
  /** Controlled search text. Pair with `onSearchChange`. */
  searchValue?: string;
  /** Initial search text when `searchValue` is omitted. */
  defaultSearchValue?: string;
  /** Called with the next search text. The consumer filters the rendered items. */
  onSearchChange?: (searchTerm: string) => void;
  /** Called on form submission with the current selected values, before dismissal. */
  onFormSubmit?: (
    event: FormEvent<HTMLFormElement>,
    selection: FilterMenuSelection,
  ) => void;
  /** Called when a footer button is activated outside form mode, before dismissal. */
  onFooterClick?: (
    event: MouseEvent<HTMLButtonElement>,
    selection: FilterMenuSelection,
  ) => void;
};

export type EvoFilterMenuButtonCheckboxProps = FilterMenuButtonBaseProps & {
  /** Checkbox selection mode. This is the default. */
  type?: "checkbox";
  /** Controlled selected values. Omit to use `defaultSelected`. */
  selected?: readonly string[];
  /** Initial selected values when `selected` is omitted. */
  defaultSelected?: readonly string[];
  /** Called with the next selected values after an enabled item is activated. */
  onSelectedChange?: (selected: string[]) => void;
};

export type EvoFilterMenuButtonRadioProps = FilterMenuButtonBaseProps & {
  /** Single selection mode. */
  type: "radio";
  /** Controlled selected value. Omit to use `defaultSelected`. */
  selected?: string | null;
  /** Initial selected value when `selected` is omitted. */
  defaultSelected?: string | null;
  /** Called with the next selected value after an enabled item is activated. */
  onSelectedChange?: (selected: string) => void;
};

export type EvoFilterMenuButtonProps =
  EvoFilterMenuButtonCheckboxProps | EvoFilterMenuButtonRadioProps;
