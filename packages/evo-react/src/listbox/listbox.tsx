import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import classNames from "classnames";
import { EvoIconTick16 } from "../icon/icons/tick-16";
import type { EvoListboxProps, ListboxValue } from "./types";
import "@ebay/skin/listbox.mjs";

/**
 * A listbox presents a persistent list of choices from which users select one.
 *
 * Supply stable option values and an accessible name through `a11yText` or
 * `aria-labelledby`. `selected` and `onSelectedChange` support controlled usage;
 * `defaultSelected` initializes uncontrolled usage. The hidden native `<select>`
 * carries the selected value when `name` is supplied.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoListbox } from "@evo-web/react/listbox";
 *
 * <EvoListbox
 *   a11yText="Shipping region"
 *   a11ySelectedText="selected"
 *   name="region"
 *   options={[
 *     { value: "US", text: "United States" },
 *     { value: "CA", text: "Canada" },
 *   ]}
 * />;
 * ```
 *
 * @summary Single-selection list with keyboard and typeahead navigation.
 */
export function EvoListbox<Value extends ListboxValue = ListboxValue>({
  a11yText,
  a11ySelectedText,
  className,
  classPrefix = "listbox",
  defaultSelected = null,
  disabled = false,
  listSelection = "manual",
  name,
  onEscape,
  onFocus,
  onKeyDown,
  onSelectedChange,
  options,
  ref,
  selected,
  tabIndex = 0,
  typeaheadTimeoutLength = 1300,
  ...rest
}: EvoListboxProps<Value>) {
  const generatedId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef("");
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [uncontrolledSelected, setUncontrolledSelected] =
    useState<Value | null>(defaultSelected);
  const [activeValue, setActiveValue] = useState<Value | null>(null);
  const currentSelected =
    selected !== undefined ? selected : uncontrolledSelected;
  const availableOptions = options.filter((option) => !option.disabled);
  const effectiveActive =
    activeValue !== null &&
    availableOptions.some((option) => option.value === activeValue)
      ? activeValue
      : null;
  const activeIndex = availableOptions.findIndex(
    (option) => option.value === effectiveActive,
  );

  useEffect(() => {
    return () => {
      if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    };
  }, []);

  function focusOption(value: Value, select: boolean) {
    setActiveValue(value);
    const index = options.findIndex((option) => option.value === value);
    const element =
      rootRef.current?.querySelectorAll<HTMLElement>("[role='option']")[index];
    element?.scrollIntoView?.({ block: "nearest" });
    if (select) chooseOption(value);
  }

  function chooseOption(value: Value) {
    if (disabled || currentSelected === value) return;
    if (selected === undefined) setUncontrolledSelected(value);
    onSelectedChange?.(value);
  }

  function move(direction: 1 | -1) {
    if (!availableOptions.length) return;
    const nextIndex =
      activeIndex === -1
        ? direction === 1
          ? 0
          : availableOptions.length - 1
        : (activeIndex + direction + availableOptions.length) %
          availableOptions.length;
    focusOption(availableOptions[nextIndex].value, listSelection === "auto");
  }

  function handleTypeahead(key: string) {
    if (key.length !== 1 || key === " " || !availableOptions.length)
      return false;
    searchRef.current += key;
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    searchTimerRef.current = setTimeout(() => {
      searchRef.current = "";
    }, typeaheadTimeoutLength);
    const collator = new Intl.Collator(undefined, {
      usage: "search",
      sensitivity: "base",
    });
    const ordered = [
      ...availableOptions.slice(activeIndex + 1),
      ...availableOptions.slice(0, activeIndex + 1),
    ];
    const match = ordered.find(
      (option) =>
        collator.compare(
          option.text.slice(0, searchRef.current.length),
          searchRef.current,
        ) === 0,
    );
    if (!match) return false;
    focusOption(match.value, false);
    return true;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    onKeyDown?.(event);
    if (event.defaultPrevented || disabled) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      move(event.key === "ArrowDown" ? 1 : -1);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const option =
        event.key === "Home"
          ? availableOptions[0]
          : availableOptions[availableOptions.length - 1];
      if (option) focusOption(option.value, listSelection === "auto");
    } else if (event.key === "Enter" || event.key === " ") {
      if (effectiveActive !== null) {
        event.preventDefault();
        chooseOption(effectiveActive);
      }
    } else if (event.key === "Escape") {
      onEscape?.();
    } else if (!event.altKey && !event.ctrlKey && !event.metaKey) {
      if (handleTypeahead(event.key)) event.preventDefault();
    }
  }

  return (
    <>
      <div
        {...rest}
        ref={(node) => {
          rootRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        role="listbox"
        aria-label={a11yText}
        aria-activedescendant={
          effectiveActive === null
            ? undefined
            : `${generatedId}-option-${options.findIndex((option) => option.value === effectiveActive)}`
        }
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : tabIndex}
        className={classNames(`${classPrefix}__options`, className)}
        onFocus={(event) => {
          if (effectiveActive === null) {
            const initial = availableOptions.find(
              (option) => option.value === currentSelected,
            );
            setActiveValue(initial?.value ?? null);
          }
          onFocus?.(event);
        }}
        onKeyDown={handleKeyDown}
      >
        {options.map((option, index) => {
          const {
            value,
            text,
            description,
            icon,
            disabled: optionDisabled,
            className: optionClassName,
            onClick,
            ...optionProps
          } = option;
          const isSelected = value === currentSelected;
          return (
            <div
              {...optionProps}
              key={value}
              id={`${generatedId}-option-${index}`}
              role="option"
              tabIndex={-1}
              aria-disabled={optionDisabled || undefined}
              aria-selected={isSelected}
              className={classNames(
                `${classPrefix}__option`,
                effectiveActive === value && `${classPrefix}__option--active`,
                optionClassName,
              )}
              data-value={value}
              onClick={(event) => {
                if (disabled || optionDisabled) return;
                focusOption(value, false);
                chooseOption(value);
                onClick?.(event);
              }}
              onKeyDown={(event) => {
                event.stopPropagation();
                handleKeyDown(event);
              }}
            >
              <span className={`${classPrefix}__value`}>
                {icon}
                {icon ? <span>{text}</span> : text}
                {isSelected && (
                  <span className="clipped">{a11ySelectedText}</span>
                )}
              </span>
              {description && (
                <div className={`${classPrefix}__description`}>
                  {description}
                </div>
              )}
              <EvoIconTick16 />
            </div>
          );
        })}
      </div>
      <select
        hidden
        className={`${classPrefix}__native`}
        name={name}
        disabled={disabled}
        value={String(currentSelected ?? options[0]?.value ?? "")}
        onChange={() => {}}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={String(option.value)}
            disabled={option.disabled}
          >
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
}
