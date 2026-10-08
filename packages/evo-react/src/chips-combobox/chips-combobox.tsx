import { useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import classNames from "classnames";
import { EvoChip } from "../chip/chip";
import { EvoChipDeleteButton } from "../chip/chip-delete-button";
import { EvoChipText } from "../chip/chip-text";
import { EvoCombobox } from "../combobox/combobox";
import { useRefTee } from "../utils/use-ref-tee";
import { ChipsComboboxProvider } from "./context";
import type { EvoChipsComboboxProps } from "./types";
import "@ebay/skin/chips-combobox.mjs";

type PendingRemoval = {
  index: number;
  selected: readonly string[];
};

function sameValues(a: readonly string[], b: readonly string[]) {
  return a.length === b.length && a.every((value, i) => value === b[i]);
}

/**
 * Chips comboboxes let users choose or type several values. Each selected
 * value appears as a removable chip, and chosen options leave the suggestion
 * list. Use `selected` and `onSelectedChange` to control the values or
 * `defaultSelected` for internal state. `EvoChipsComboboxOption` children
 * supply the available choices.
 *
 * Native `required` is not supported because chips are not the input's value.
 * Validate `selected` at the form level and set `aria-invalid` to show the
 * error state.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoChipsCombobox,
 *   EvoChipsComboboxOption,
 * } from "@evo-web/react/chips-combobox";
 *
 * <EvoChipsCombobox
 *   aria-label="Search filters"
 *   a11yDeleteButtonText="Remove"
 *   onSelectedChange={setFilters}
 * >
 *   <EvoChipsComboboxOption text="Free shipping" />
 *   <EvoChipsComboboxOption text="Local pickup" />
 * </EvoChipsCombobox>
 * ```
 *
 * @summary Text input for choosing multiple removable values.
 */
export function EvoChipsCombobox({
  a11yDeleteButtonText = "Remove",
  a11ySelectedItemsText = "Selected items",
  "aria-invalid": ariaInvalid,
  children,
  className,
  defaultSelected = [],
  disabled = false,
  fluid = false,
  onKeyDown,
  onSelectedChange,
  ref,
  selected,
  style,
  ...comboboxProps
}: EvoChipsComboboxProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [setInputElement, inputRef] = useRefTee<HTMLInputElement | null>(
    ref,
    null,
  );
  const [uncontrolledSelected, setUncontrolledSelected] =
    useState<readonly string[]>(defaultSelected);
  const [inputValue, setInputValue] = useState("");
  const currentSelected =
    selected !== undefined ? selected : uncontrolledSelected;
  const invalid = ariaInvalid === true || ariaInvalid === "true";
  const pendingRemoval = useRef<PendingRemoval | null>(null);

  // A controlled parent may apply, defer, or reject a removal, so focus moves
  // only once the requested selection renders and the clicked button is gone.
  useLayoutEffect(() => {
    const pending = pendingRemoval.current;
    if (!pending || !sameValues(pending.selected, currentSelected)) return;
    pendingRemoval.current = null;
    if (document.activeElement !== document.body) return;
    const buttons =
      listRef.current?.querySelectorAll<HTMLButtonElement>(".chip__button") ??
      [];
    const nextButton = buttons[pending.index] ?? buttons[buttons.length - 1];
    (nextButton ?? inputRef.current)?.focus();
  }, [currentSelected, inputRef]);

  function updateSelected(next: string[]) {
    if (selected === undefined) setUncontrolledSelected(next);
    onSelectedChange?.(next);
  }

  function addChip(text: string) {
    if (!currentSelected.includes(text)) {
      updateSelected([...currentSelected, text]);
    }
    setInputValue("");
  }

  function deleteChip(index: number) {
    const next = currentSelected.filter((_, itemIndex) => itemIndex !== index);
    pendingRemoval.current = { index, selected: next };
    updateSelected(next);
  }

  // EvoCombobox commits a highlighted option on Enter and prevents the default
  // before calling this handler, so this path only adds typed text. Like the
  // legacy component, Enter never submits a surrounding form, typed text is
  // stored verbatim, and a duplicate value stays in the input.
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    onKeyDown?.(event);
    if (event.defaultPrevented || event.key !== "Enter") return;
    event.preventDefault();
    const value = event.currentTarget.value;
    if (value.trim() && !currentSelected.includes(value)) {
      addChip(value);
    }
  }

  return (
    <ChipsComboboxProvider selected={currentSelected}>
      <div
        className={classNames(
          "chips-combobox",
          fluid && "chips-combobox--fluid",
          invalid && "chips-combobox--error",
          className,
        )}
        style={style}
        aria-disabled={disabled || undefined}
      >
        {currentSelected.length > 0 && (
          <ul
            ref={listRef}
            className="chips-combobox__items"
            aria-label={a11ySelectedItemsText}
          >
            {currentSelected.map((text, index) => (
              <li key={`${text}-${index}`}>
                <EvoChip>
                  <EvoChipText>{text}</EvoChipText>
                  <EvoChipDeleteButton
                    a11yText={a11yDeleteButtonText}
                    disabled={disabled}
                    onClick={() => deleteChip(index)}
                  />
                </EvoChip>
              </li>
            ))}
          </ul>
        )}
        <EvoCombobox
          {...comboboxProps}
          ref={setInputElement}
          className="chips-combobox__combobox"
          // Both are omitted from the props type; override untyped callers.
          inputSize={undefined}
          required={false}
          disabled={disabled}
          aria-invalid={ariaInvalid}
          value={inputValue}
          onValueChange={setInputValue}
          onOptionSelect={addChip}
          onKeyDown={handleKeyDown}
        >
          {children}
        </EvoCombobox>
      </div>
    </ChipsComboboxProvider>
  );
}
