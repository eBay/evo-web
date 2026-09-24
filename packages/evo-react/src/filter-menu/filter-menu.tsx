import { useCallback, useId, useState } from "react";
import classNames from "classnames";
import { FilterMenuProvider } from "./context";
import type {
  EvoFilterMenuCheckboxProps,
  EvoFilterMenuProps,
  EvoFilterMenuRadioProps,
  FilterMenuSelection,
} from "./types";
import { EvoButton } from "../button/button";
import { EvoIconClear20 } from "../icon/icons/clear-20";
import { EvoIconSearch16 } from "../icon/icons/search-16";
import "@ebay/skin/filter-menu.mjs";

function toSelectedArray(
  selected: string | readonly string[] | null | undefined,
) {
  return typeof selected === "string"
    ? [selected]
    : selected === null || selected === undefined
      ? []
      : [...selected];
}

/**
 * Filter menus present a set of related filters as radio or checkbox choices.
 *
 * Compose `EvoFilterMenuItems` and `EvoFilterMenuItem` inside the menu. The
 * parent manages selection through `selected` and `onSelectedChange`, or
 * internally from `defaultSelected`. Use `variant="form"` for native inputs
 * and a submit footer. A search header can narrow the rendered items when the
 * consumer updates its children from `onSearchChange`.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoFilterMenu,
 *   EvoFilterMenuItems,
 *   EvoFilterMenuItem,
 * } from "@evo-web/react/filter-menu";
 *
 * <EvoFilterMenu type="checkbox" a11yText="Shipping filters">
 *   <EvoFilterMenuItems>
 *     <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
 *     <EvoFilterMenuItem value="local">Local pickup</EvoFilterMenuItem>
 *   </EvoFilterMenuItems>
 * </EvoFilterMenu>
 * ```
 *
 * @summary Selectable filter menu with optional search and form controls.
 */
export function EvoFilterMenu({
  a11yText,
  a11yLabelId,
  a11ySearchHeaderClearText = "Clear search",
  children,
  className,
  classPrefix,
  defaultSearchValue = "",
  defaultSelected,
  formAction,
  formMethod,
  formName,
  onFormSubmit,
  onFooterClick,
  onSearchChange,
  onSelectedChange,
  ref,
  searchHeaderPlaceholderText,
  searchValue,
  selected: selectedProp,
  type = "checkbox",
  variant,
  ...rest
}: EvoFilterMenuProps) {
  const isForm = variant === "form";
  const baseClass = classPrefix || "filter-menu";
  const radioName = useId();
  const itemsId = useId();
  const [uncontrolledSelected, setUncontrolledSelected] = useState<string[]>(
    () => toSelectedArray(defaultSelected),
  );
  const selected =
    selectedProp !== undefined
      ? toSelectedArray(selectedProp)
      : uncontrolledSelected;
  const [uncontrolledSearchValue, setUncontrolledSearchValue] =
    useState(defaultSearchValue);
  const currentSearchValue = searchValue ?? uncontrolledSearchValue;

  const selection = useCallback<() => FilterMenuSelection>(
    () => ({ selected: [...selected] }),
    [selected],
  );
  const select = useCallback(
    (value: string): FilterMenuSelection => {
      const checked = type === "radio" || !selected.includes(value);
      const nextSelected =
        type === "radio"
          ? [value]
          : checked
            ? [...selected, value]
            : selected.filter((item) => item !== value);
      if (selectedProp === undefined) {
        setUncontrolledSelected(nextSelected);
      }
      if (type === "radio") {
        (onSelectedChange as EvoFilterMenuRadioProps["onSelectedChange"])?.(
          value,
        );
      } else {
        (onSelectedChange as EvoFilterMenuCheckboxProps["onSelectedChange"])?.(
          nextSelected,
        );
      }
      return { selected: nextSelected, value, checked };
    },
    [onSelectedChange, selected, selectedProp, type],
  );
  const updateSearch = useCallback(
    (value: string) => {
      if (searchValue === undefined) {
        setUncontrolledSearchValue(value);
      }
      onSearchChange?.(value);
    },
    [onSearchChange, searchValue],
  );
  const content = isForm ? (
    <form
      name={formName}
      action={formAction}
      method={formMethod}
      onSubmit={(event) => onFormSubmit?.(event, selection())}
    >
      {children}
    </form>
  ) : (
    children
  );

  return (
    <FilterMenuProvider
      type={type}
      isForm={isForm}
      baseClass={baseClass}
      formName={formName}
      radioName={radioName}
      itemsId={itemsId}
      selected={selected}
      select={select}
      selection={selection}
      onFooterClick={onFooterClick}
      a11yText={a11yText}
      a11yLabelId={a11yLabelId}
    >
      <span
        {...rest}
        ref={ref}
        className={classNames(
          classPrefix ? `${baseClass}__menu` : baseClass,
          className,
        )}
      >
        {searchHeaderPlaceholderText && (
          <div className="filter-menu__header">
            <EvoIconSearch16 />
            <input
              type="text"
              className="filter-menu__search"
              value={currentSearchValue}
              placeholder={searchHeaderPlaceholderText}
              aria-label={searchHeaderPlaceholderText}
              aria-controls={itemsId}
              onChange={(event) => updateSearch(event.currentTarget.value)}
            />
            <EvoButton
              type="button"
              aria-label={a11ySearchHeaderClearText}
              onClick={() => updateSearch("")}
            >
              <EvoIconClear20 />
            </EvoButton>
          </div>
        )}
        {content}
      </span>
    </FilterMenuProvider>
  );
}
