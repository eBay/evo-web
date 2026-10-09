import type {
  ComponentProps,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  Ref,
} from "react";

export type FilterMenuType = "checkbox" | "radio";
export type FilterMenuVariant = "form";
export type FilterMenuItemEvent =
  | MouseEvent<HTMLDivElement>
  | KeyboardEvent<HTMLDivElement>
  | FormEvent<HTMLInputElement>;

/** Selection details passed to item and footer callbacks. */
export type FilterMenuSelection = {
  /** Selected values, in their order of activation. */
  selected: string[];
  /** Value most recently activated, when a single item caused the callback. */
  value?: string;
  /** Whether that value is selected after activation. */
  checked?: boolean;
};

type FilterMenuBaseProps = Omit<
  ComponentProps<"span">,
  "onChange" | "onSubmit"
> & {
  /** Renders native radio or checkbox inputs in a form. Omit for menu semantics. */
  variant?: FilterMenuVariant;
  /** BEM prefix for embedded filter menus. Defaults to `"filter-menu"`. */
  classPrefix?: string;
  /** Localized accessible name for the menu items region. */
  a11yText?: string;
  /** ID of another element that labels the menu items region. */
  a11yLabelId?: string;
  /** Native form name, only used when `variant="form"`. */
  formName?: string;
  /** Native form action, only used when `variant="form"`. */
  formAction?: string;
  /** Native form method, only used when `variant="form"`. */
  formMethod?: string;
  /** Search field placeholder; its presence renders the search header. */
  searchHeaderPlaceholderText?: string;
  /** Accessible name for the search clear button. English default to be overridden is `"Clear search"`. */
  a11ySearchHeaderClearText?: string;
  /** Controlled search text. Pair with `onSearchChange`. */
  searchValue?: string;
  /** Initial search text when `searchValue` is omitted. */
  defaultSearchValue?: string;
  /** Called after the search text changes or is cleared. */
  onSearchChange?: (searchTerm: string) => void;
  /** Called on form submission with the current selection. */
  onFormSubmit?: (
    event: FormEvent<HTMLFormElement>,
    selection: FilterMenuSelection,
  ) => void;
  /** Called when the footer button is activated outside form mode. */
  onFooterClick?: (
    event: MouseEvent<HTMLButtonElement>,
    selection: FilterMenuSelection,
  ) => void;
};

export type EvoFilterMenuCheckboxProps = FilterMenuBaseProps & {
  /** Checkbox selection mode. This is the default. */
  type?: "checkbox";
  /** Controlled selected values. Omit to use `defaultSelected`. */
  selected?: readonly string[];
  /** Initial selected values when `selected` is omitted. */
  defaultSelected?: readonly string[];
  /** Called with the next selected values after an enabled item is activated. */
  onSelectedChange?: (selected: string[]) => void;
};

export type EvoFilterMenuRadioProps = FilterMenuBaseProps & {
  /** Single selection mode. */
  type: "radio";
  /** Controlled selected value. Omit to use `defaultSelected`. */
  selected?: string | null;
  /** Initial selected value when `selected` is omitted. */
  defaultSelected?: string | null;
  /** Called with the next selected value after an enabled item is activated. */
  onSelectedChange?: (selected: string) => void;
};

export type EvoFilterMenuProps =
  EvoFilterMenuCheckboxProps | EvoFilterMenuRadioProps;

export type EvoFilterMenuItemsProps = Omit<
  ComponentProps<"div">,
  "role" | "tabIndex"
>;

export type EvoFilterMenuItemProps = Omit<
  ComponentProps<"div">,
  "children" | "onSelect" | "ref" | "role" | "aria-checked" | "aria-disabled"
> & {
  /** Stable selection value. Values must be distinct within the menu. */
  value: string;
  /** Visible item label and optional supporting content. */
  children: ReactNode;
  /** Prevents selection and removes the item from keyboard navigation. */
  disabled?: boolean;
  /** Ref to the rendered `div` or `label`. */
  ref?: Ref<HTMLElement>;
  /** Called after an enabled item is activated with its next checked state. */
  onSelect?: (
    event: FilterMenuItemEvent,
    selection: FilterMenuSelection,
  ) => void;
};

export type EvoFilterMenuFooterButtonProps = Omit<
  ComponentProps<"button">,
  "type"
>;
