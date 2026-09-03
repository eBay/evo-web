import { useId } from "react";
import type { Ref, RefObject } from "react";
import classNames from "classnames";
import { useActiveDescendantItem } from "../utils/use-active-descendant";
import { useRefTee } from "../utils/use-ref-tee";
import { useComboboxContext } from "./context";
import type { EvoComboboxOptionProps } from "./types";

function matchesFilter(text: string, filterValue: string) {
  return text.toLowerCase().includes(filterValue.trim().toLowerCase());
}

export function EvoComboboxOption({
  className,
  onClick,
  onKeyDown,
  onMouseDown,
  ref,
  sticky = false,
  text,
  ...rest
}: EvoComboboxOptionProps) {
  const generatedId = useId();
  const {
    activeDescendant,
    autocomplete,
    displayedValue,
    filterValue,
    selectOption,
    disabled,
  } = useComboboxContext();
  const [optionRef, internalRef] = useRefTee<HTMLDivElement | null>(
    ref as Ref<HTMLDivElement | null>,
    null,
  );
  const hidden =
    autocomplete === "list" && !sticky && !matchesFilter(text, filterValue);
  const { isActive } = useActiveDescendantItem({
    activeDescendant,
    enabled: !hidden,
    item: {
      key: generatedId,
      id: generatedId,
      ref: internalRef as RefObject<HTMLDivElement | null>,
      data: text,
    },
  });

  if (hidden) {
    return null;
  }

  return (
    <div
      {...rest}
      id={generatedId}
      ref={optionRef}
      role="option"
      tabIndex={-1}
      aria-selected={text === displayedValue}
      className={classNames(
        "combobox__option",
        isActive && "combobox__option--active",
        className,
      )}
      onMouseDown={(event) => {
        event.preventDefault();
        if (!disabled) {
          onMouseDown?.(event);
        }
      }}
      onClick={(event) => {
        if (disabled) {
          return;
        }

        onClick?.(event);
        if (!event.defaultPrevented) {
          selectOption(text);
        }
      }}
      onKeyDown={(event) => {
        if (disabled) {
          return;
        }

        onKeyDown?.(event);
        if (
          !event.defaultPrevented &&
          (event.key === "Enter" || event.key === " ")
        ) {
          event.preventDefault();
          selectOption(text);
        }
      }}
    >
      {text}
    </div>
  );
}
