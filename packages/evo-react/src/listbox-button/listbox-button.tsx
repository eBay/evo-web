/* eslint-disable jsx-a11y/role-supports-aria-props -- Skin styles aria-invalid on the native trigger, as Evo Marko does. */
import { useEffect, useId, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent, MouseEvent, Ref } from "react";
import classNames from "classnames";
import { EvoIconChevronDown16 } from "../icon/icons/chevron-down-16";
import { EvoListbox } from "../listbox/listbox";
import type { ListboxValue } from "../listbox/types";
import { useExpander } from "../utils/use-expander";
import type { EvoListboxButtonProps } from "./types";
import "@ebay/skin/button.mjs";
import "@ebay/skin/listbox-button.mjs";

/**
 * Listbox buttons let users choose one value from a popup list.
 *
 * The popup reuses `EvoListbox` for selection, typeahead, keyboard navigation,
 * and native form submission. Use `selected` with `onSelectedChange` for
 * controlled usage or `defaultSelected` to manage selection internally. Supply
 * an accessible name with `a11yText`, `prefixLabel`, `floatingLabel`, or an
 * external label through `prefixId`.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoListboxButton } from "@evo-web/react/listbox-button";
 *
 * <EvoListboxButton
 *   prefixLabel="Shipping region"
 *   a11ySelectedText="selected"
 *   name="region"
 *   options={[
 *     { value: "US", text: "United States" },
 *     { value: "CA", text: "Canada" },
 *   ]}
 * />;
 * ```
 *
 * @summary Button with a single-selection listbox popup.
 */
export function EvoListboxButton<Value extends ListboxValue = ListboxValue>({
  a11yDescribedBy,
  a11ySelectedText,
  a11yText,
  "aria-invalid": ariaInvalid,
  borderless = false,
  buttonName,
  className,
  collapseOnSelect = true,
  defaultOpen = false,
  defaultSelected = null,
  disabled = false,
  floatingLabel,
  fluid = false,
  hasError = false,
  listSelection = "manual",
  name,
  onBlurCapture,
  onOpenChange,
  onSelectedChange,
  open,
  options,
  postfixLabel,
  prefixId,
  prefixLabel,
  ref,
  selected,
  split,
  strategy = "absolute",
  truncate = false,
  unselectedText = "-",
  variant = "standard",
  ...rest
}: EvoListboxButtonProps<Value>) {
  const generatedId = useId();
  const labelId = `${generatedId}-label`;
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listboxRef = useRef<HTMLDivElement | null>(null);
  const [uncontrolledSelected, setUncontrolledSelected] =
    useState<Value | null>(defaultSelected);
  const currentSelected =
    selected !== undefined ? selected : uncontrolledSelected;
  const selectedOption = options.find(
    (option) => option.value === currentSelected,
  );
  const expander = useExpander({
    open,
    defaultOpen,
    onOpenChange,
    strategy,
    placement: "bottom-start",
    offset: 0,
    resetOnDisabled: disabled,
  });
  const isOpen = expander.open && !disabled;

  useEffect(() => {
    if (isOpen && expander.floatingStyles.visibility !== "hidden") {
      listboxRef.current?.focus({ preventScroll: true });
    }
  }, [isOpen, expander.floatingStyles.visibility]);

  function requestOpen(nextOpen: boolean) {
    if (nextOpen === isOpen || (disabled && nextOpen)) return;
    expander.setOpen(nextOpen);
  }

  function focusButton() {
    buttonRef.current?.focus({ preventScroll: true });
  }

  function closeAfterSelection() {
    if (!collapseOnSelect) return;
    requestOpen(false);
    focusButton();
  }

  function handleSelectedChange(nextSelected: Value) {
    if (selected === undefined) setUncontrolledSelected(nextSelected);
    onSelectedChange?.(nextSelected);
  }

  function handleTriggerClick(event: MouseEvent<HTMLButtonElement>) {
    if (disabled) return;
    const nextOpen = !isOpen;
    requestOpen(nextOpen);
    event.preventDefault();
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;
    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      requestOpen(false);
    } else if (
      (event.key === "ArrowDown" || event.key === "ArrowUp") &&
      !isOpen
    ) {
      event.preventDefault();
      requestOpen(true);
    }
  }

  function handleListboxKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (
      collapseOnSelect &&
      (event.key === "Enter" || event.key === " ") &&
      event.currentTarget.getAttribute("aria-activedescendant")
    ) {
      closeAfterSelection();
    }
  }

  function handleListboxClick(event: MouseEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("[role='option']")) {
      closeAfterSelection();
    }
  }

  function handleBlur(event: FocusEvent<HTMLDivElement | HTMLSpanElement>) {
    onBlurCapture?.(event);
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      requestOpen(false);
    }
  }

  const triggerLabel =
    a11yText ??
    floatingLabel ??
    prefixLabel ??
    (prefixId ? undefined : selectedOption?.text);
  const Root = truncate && !fluid ? "div" : "span";

  return (
    <Root
      {...rest}
      ref={ref as Ref<HTMLDivElement>}
      className={classNames(
        "listbox-button",
        fluid && "listbox-button--fluid",
        variant === "form" && "listbox-button--form",
        hasError && "listbox-button--error",
        className,
      )}
      onBlurCapture={handleBlur}
    >
      <button
        ref={(node) => {
          buttonRef.current = node;
          expander.refs.setReference(node);
        }}
        type="button"
        name={buttonName}
        value={selectedOption ? String(selectedOption.value) : undefined}
        disabled={disabled}
        className={classNames(
          "listbox-button__control",
          "btn",
          borderless ? "btn--borderless" : "btn--form",
          split && `btn--split-${split}`,
          truncate && "btn--truncated",
          floatingLabel && "btn--floating-label",
        )}
        aria-label={a11yText}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${generatedId}-listbox`}
        aria-describedby={a11yDescribedBy}
        aria-invalid={ariaInvalid}
        aria-labelledby={prefixId ? `${prefixId} ${labelId}` : undefined}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className="btn__cell">
          {floatingLabel ? (
            <span
              className={classNames(
                "btn__floating-label",
                "btn__floating-label--animate",
                !selectedOption && "btn__floating-label--inline",
              )}
            >
              {floatingLabel}
            </span>
          ) : (
            prefixLabel && <span className="btn__label">{prefixLabel}</span>
          )}
          {selectedOption ? (
            <>
              {selectedOption.icon}
              <span id={labelId} className="btn__text">
                {selectedOption.text}
              </span>
              {postfixLabel && (
                <span className="btn__postfix-label"> {postfixLabel}</span>
              )}
            </>
          ) : (
            !floatingLabel && (
              <span id={labelId} className="btn__text">
                {unselectedText}
              </span>
            )
          )}
          <EvoIconChevronDown16 />
        </span>
      </button>
      <div
        ref={expander.refs.setFloating}
        className={classNames(
          "listbox-button__listbox",
          strategy === "fixed" && "listbox-button__listbox--fixed",
        )}
        style={expander.floatingStyles}
      >
        <EvoListbox
          id={`${generatedId}-listbox`}
          ref={listboxRef}
          options={options}
          selected={currentSelected}
          onSelectedChange={handleSelectedChange}
          classPrefix="listbox-button"
          a11yText={triggerLabel}
          aria-labelledby={!triggerLabel && prefixId ? prefixId : undefined}
          a11ySelectedText={a11ySelectedText}
          name={name}
          disabled={disabled}
          listSelection={listSelection}
          tabIndex={isOpen ? 0 : -1}
          onEscape={() => {
            requestOpen(false);
            focusButton();
          }}
          onKeyDown={handleListboxKeyDown}
          onClick={handleListboxClick}
        />
      </div>
    </Root>
  );
}
