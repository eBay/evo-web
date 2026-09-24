/* eslint-disable jsx-a11y/no-static-element-interactions -- The wrapper delegates keyboard and focus events from its trigger and menu. */
import { useCallback, useEffect, useId, useState } from "react";
import classNames from "classnames";
import { EvoFilterMenu } from "../filter-menu/filter-menu";
import { EvoFilterMenuFooterButton } from "../filter-menu/filter-menu-footer-button";
import type {
  EvoFilterMenuCheckboxProps,
  EvoFilterMenuProps,
} from "../filter-menu/types";
import { EvoIconChevronDown12 } from "../icon/icons/chevron-down-12";
import { useExpander } from "../utils/use-expander";
import { useRefTee } from "../utils/use-ref-tee";
import type {
  EvoFilterMenuButtonCheckboxProps,
  EvoFilterMenuButtonProps,
  EvoFilterMenuButtonRadioProps,
} from "./types";
import "@ebay/skin/filter-menu-button.mjs";

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
 * Filter menu buttons combine a trigger with a radio or checkbox filter menu.
 * The trigger shows an applied state when at least one value is selected.
 *
 * Compose `EvoFilterMenuItems` and `EvoFilterMenuItem` within the button, plus
 * an optional `EvoFilterMenuFooterButton`. The menu and trigger share
 * `selected`, `defaultSelected`, and `onSelectedChange`; `hasSelection` can
 * override the trigger styling when visible items are filtered. Use `open`
 * and `onOpenChange` for controlled visibility.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoFilterMenuButton,
 *   EvoFilterMenuItem,
 *   EvoFilterMenuItems,
 * } from "@evo-web/react/filter-menu-button";
 *
 * <EvoFilterMenuButton text="Delivery" defaultSelected={["free"]}>
 *   <EvoFilterMenuItems>
 *     <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
 *     <EvoFilterMenuItem value="local">Local pickup</EvoFilterMenuItem>
 *   </EvoFilterMenuItems>
 * </EvoFilterMenuButton>
 * ```
 *
 * @summary Trigger for a selectable filter menu.
 */
export function EvoFilterMenuButton({
  a11yFilterAppliedText = "Filter Applied",
  a11yFooterText,
  a11ySearchHeaderClearText,
  a11yText,
  children,
  className,
  countText,
  defaultOpen = false,
  defaultSearchValue,
  defaultSelected,
  disabled = false,
  footerText,
  formAction,
  formMethod,
  formName,
  hasSelection,
  onBlur,
  onFooterClick,
  onFormSubmit,
  onKeyDown,
  onOpenChange,
  onSearchChange,
  onSelectedChange,
  open,
  ref,
  searchHeaderPlaceholderText,
  searchValue,
  selected: selectedProp,
  text,
  type = "checkbox",
  variant,
  ...rest
}: EvoFilterMenuButtonProps) {
  const menuId = useId();
  const triggerId = useId();
  const [rootRef, rootElementRef] = useRefTee<HTMLSpanElement | null>(
    ref,
    null,
  );
  const [uncontrolledSelected, setUncontrolledSelected] = useState<string[]>(
    () => toSelectedArray(defaultSelected),
  );
  const selected =
    selectedProp !== undefined
      ? selectedProp
      : type === "radio"
        ? (uncontrolledSelected[0] ?? null)
        : uncontrolledSelected;
  const hasChecked = hasSelection ?? toSelectedArray(selected).length > 0;
  const expander = useExpander({
    open,
    defaultOpen,
    onOpenChange,
    placement: "bottom-start",
    strategy: "absolute",
    offset: 8,
    inline: false,
    resetOnDisabled: disabled,
  });
  const effectiveOpen = !disabled && expander.open;
  const [menuRef] = useRefTee<HTMLSpanElement | null>(
    expander.refs.setFloating,
    null,
  );

  const close = useCallback(
    (restoreFocus: boolean) => {
      if (effectiveOpen) {
        expander.setOpen(false);
      }
      if (
        restoreFocus &&
        expander.refs.reference.current instanceof HTMLElement
      ) {
        expander.refs.reference.current.focus();
      }
    },
    [effectiveOpen, expander.refs.reference, expander.setOpen],
  );

  useEffect(() => {
    if (!effectiveOpen) return;
    const dismissOutside = (event: PointerEvent) => {
      if (!rootElementRef.current?.contains(event.target as Node)) {
        expander.setOpen(false);
      }
    };
    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [effectiveOpen, expander.setOpen, rootElementRef]);

  useEffect(() => {
    if (!effectiveOpen || expander.floatingStyles.visibility === "hidden")
      return;
    const frame = requestAnimationFrame(() => {
      rootElementRef.current
        ?.querySelector<HTMLElement>(
          'input.filter-menu__search, input.checkbox__control:not([disabled]), input.radio__control:not([disabled]), [role^="menuitem"]:not([aria-disabled="true"])',
        )
        ?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [effectiveOpen, expander.floatingStyles.visibility, rootElementRef]);

  const handleSelectedChange = useCallback(
    (next: string | string[]) => {
      if (selectedProp === undefined) {
        setUncontrolledSelected(toSelectedArray(next));
      }
      if (type === "radio") {
        (
          onSelectedChange as EvoFilterMenuButtonRadioProps["onSelectedChange"]
        )?.(next as string);
      } else {
        (
          onSelectedChange as EvoFilterMenuButtonCheckboxProps["onSelectedChange"]
        )?.(next as string[]);
      }
    },
    [onSelectedChange, selectedProp, type],
  );

  const menuProps = {
    type,
    variant,
    selected,
    onSelectedChange: handleSelectedChange,
    formAction,
    formMethod,
    formName,
    searchHeaderPlaceholderText,
    a11ySearchHeaderClearText,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    onFooterClick: (
      event: Parameters<
        NonNullable<EvoFilterMenuCheckboxProps["onFooterClick"]>
      >[0],
      selection: Parameters<
        NonNullable<EvoFilterMenuCheckboxProps["onFooterClick"]>
      >[1],
    ) => {
      onFooterClick?.(event, selection);
      close(true);
    },
    onFormSubmit: (
      event: Parameters<
        NonNullable<EvoFilterMenuCheckboxProps["onFormSubmit"]>
      >[0],
      selection: Parameters<
        NonNullable<EvoFilterMenuCheckboxProps["onFormSubmit"]>
      >[1],
    ) => {
      onFormSubmit?.(event, selection);
      close(true);
    },
  } as EvoFilterMenuProps;

  return (
    <span
      {...rest}
      ref={rootRef}
      className={classNames("filter-menu-button", className)}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (
          effectiveOpen &&
          !event.defaultPrevented &&
          event.key === "Escape"
        ) {
          event.preventDefault();
          close(true);
        }
      }}
      onBlur={(event) => {
        onBlur?.(event);
        if (
          effectiveOpen &&
          !event.currentTarget.contains(event.relatedTarget as Node | null)
        ) {
          close(false);
        }
      }}
    >
      <button
        id={triggerId}
        ref={expander.refs.setReference}
        type="button"
        className={classNames(
          "filter-menu-button__button",
          hasChecked && "filter-menu-button__button--selected",
        )}
        disabled={disabled}
        aria-expanded={effectiveOpen}
        aria-haspopup="true"
        aria-controls={menuId}
        aria-label={a11yText}
        onClick={() => expander.setOpen(!expander.open)}
      >
        <span className="filter-menu-button__button-cell">
          <span className="filter-menu-button__button-text">
            {text}
            {countText && (
              <>
                {" "}
                <span className="filter-menu-button__count">{countText}</span>
              </>
            )}
          </span>
          <EvoIconChevronDown12 />
        </span>
        {hasChecked && <span className="clipped">{a11yFilterAppliedText}</span>}
      </button>
      <EvoFilterMenu
        {...menuProps}
        id={menuId}
        ref={menuRef}
        classPrefix="filter-menu-button"
        a11yLabelId={triggerId}
        style={effectiveOpen ? expander.floatingStyles : undefined}
      >
        {children}
        {footerText && (
          <EvoFilterMenuFooterButton aria-label={a11yFooterText}>
            {footerText}
          </EvoFilterMenuFooterButton>
        )}
      </EvoFilterMenu>
    </span>
  );
}
