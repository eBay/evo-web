import { useState } from "react";
import type { KeyboardEvent } from "react";
import classNames from "classnames";
import { EvoChip } from "../chip/chip";
import { EvoChipDeleteButton } from "../chip/chip-delete-button";
import { EvoChipText } from "../chip/chip-text";
import { EvoCombobox } from "../combobox/combobox";
import { ChipsComboboxProvider } from "./context";
import type { EvoChipsComboboxProps } from "./types";
import "@ebay/skin/chips-combobox.mjs";

/**
 * Chips comboboxes let users choose or type several values. Each selected
 * value appears as a removable chip, and chosen options leave the suggestion
 * list. Use `selected` and `onSelectedChange` to control the values or
 * `defaultSelected` for internal state. `EvoChipsComboboxOption` children
 * supply the available choices.
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
  "aria-invalid": ariaInvalid,
  children,
  className,
  defaultSelected = [],
  disabled = false,
  fluid = false,
  onKeyDown,
  onSelectedChange,
  selected,
  style,
  ...comboboxProps
}: EvoChipsComboboxProps) {
  const [uncontrolledSelected, setUncontrolledSelected] =
    useState<readonly string[]>(defaultSelected);
  const [inputValue, setInputValue] = useState("");
  const currentSelected =
    selected !== undefined ? selected : uncontrolledSelected;
  const invalid = ariaInvalid === true || ariaInvalid === "true";

  function updateSelected(next: string[]) {
    if (selected === undefined) setUncontrolledSelected(next);
    onSelectedChange?.(next);
  }

  function addValue(text: string) {
    const value = text.trim();
    if (value && !currentSelected.includes(value)) {
      updateSelected([...currentSelected, value]);
    }
    setInputValue("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    onKeyDown?.(event);
    if (event.defaultPrevented || event.key !== "Enter") return;
    const value = event.currentTarget.value.trim();
    if (value) {
      event.preventDefault();
      addValue(value);
    }
  }

  return (
    <ChipsComboboxProvider selected={currentSelected}>
      <span
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
          <ul className="chips-combobox__items">
            {currentSelected.map((text, index) => (
              <li key={`${text}-${index}`}>
                <EvoChip>
                  <EvoChipText>{text}</EvoChipText>
                  <EvoChipDeleteButton
                    a11yText={`${a11yDeleteButtonText} ${text}`}
                    disabled={disabled}
                    onClick={() => {
                      updateSelected(
                        currentSelected.filter(
                          (_, itemIndex) => itemIndex !== index,
                        ),
                      );
                    }}
                  />
                </EvoChip>
              </li>
            ))}
          </ul>
        )}
        <EvoCombobox
          {...comboboxProps}
          className="chips-combobox__combobox"
          fluid={fluid}
          disabled={disabled}
          aria-invalid={ariaInvalid}
          value={inputValue}
          onValueChange={setInputValue}
          onOptionSelect={addValue}
          onKeyDown={handleKeyDown}
        >
          {children}
        </EvoCombobox>
      </span>
    </ChipsComboboxProvider>
  );
}
