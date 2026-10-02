import type { ComponentProps, FocusEventHandler, Ref } from "react";
import type { Strategy } from "@floating-ui/react";
import type { EvoListboxOption, ListboxValue } from "../listbox/types";

type ControlledSelection<Value extends ListboxValue> = {
  /** Controlled option value. Pass `null` when no option is selected. */
  selected: Value | null;
  /** Unavailable when `selected` controls the button. */
  defaultSelected?: never;
};

type UncontrolledSelection<Value extends ListboxValue> = {
  /** Unavailable when `defaultSelected` initializes selection. */
  selected?: never;
  /** Initial option value. Omit or pass `null` for no selection. */
  defaultSelected?: Value | null;
};

export type EvoListboxButtonProps<Value extends ListboxValue = ListboxValue> =
  Omit<
    ComponentProps<"span">,
    "children" | "defaultValue" | "onChange" | "ref" | "onBlurCapture"
  > &
    (ControlledSelection<Value> | UncontrolledSelection<Value>) & {
      /** Native reference to the root `<span>` or truncated `<div>`. */
      ref?: Ref<HTMLSpanElement | HTMLDivElement>;
      /** Native blur event from the root wrapper. */
      onBlurCapture?: FocusEventHandler<HTMLSpanElement | HTMLDivElement>;
      /** Options rendered in the popup and hidden native `<select>`. */
      options: readonly EvoListboxOption<Value>[];
      /** Name submitted by the hidden native `<select>`. */
      name?: string;
      /** Name assigned to the visible native `<button>`. */
      buttonName?: string;
      /** Controlled popup visibility. Pair with `onOpenChange`. */
      open?: boolean;
      /** Initial popup visibility when `open` is omitted. Defaults to `false`. */
      defaultOpen?: boolean;
      /** Called when the popup opens or closes. */
      onOpenChange?: (open: boolean) => void;
      /** Called when an option is selected. */
      onSelectedChange?: (selected: Value) => void;
      /** Disables the trigger and listbox. */
      disabled?: boolean;
      /** Accessible name for the trigger and listbox when visible text is insufficient. */
      a11yText?: string;
      /**
       * Clipped text added to the selected option. English default to be overridden is
       * `"selected"`.
       */
      a11ySelectedText: string;
      /** ID of an external label prepended to the trigger's selected value. */
      prefixId?: string;
      /** Visible text before the selected value; omit with `floatingLabel`. */
      prefixLabel?: string;
      /** Visible text after the selected value. */
      postfixLabel?: string;
      /** Visible text when there is no selection. Defaults to `"-"`. */
      unselectedText?: string;
      /** Floating label shown above a selected value. */
      floatingLabel?: string;
      /** `"auto"` selects on arrow navigation; `"manual"` requires activation. */
      listSelection?: "auto" | "manual";
      /** Closes the popup after click, `Enter`, or `Space` selection. Defaults to `true`. */
      collapseOnSelect?: boolean;
      /** Fills the containing block. */
      fluid?: boolean;
      /** Removes the trigger's border. */
      borderless?: boolean;
      /** Truncates overflowing trigger text. */
      truncate?: boolean;
      /** Applies the regular or form Skin treatment. Defaults to `"standard"`. */
      variant?: "standard" | "form";
      /** Applies split button styling to the trigger. */
      split?: "start" | "end";
      /** Sets popup positioning. Defaults to `"absolute"`. */
      strategy?: Strategy;
      /** Error styling without asserting validity to assistive technology. */
      hasError?: boolean;
      /** ID of an element describing the trigger, mapped to `aria-describedby`. */
      a11yDescribedBy?: string;
    };
