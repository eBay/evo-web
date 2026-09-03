import { useCallback, useEffect, useId, useState } from "react";
import type {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  RefObject,
} from "react";
import classNames from "classnames";
import { EvoIconButton } from "../icon-button";
import { useActiveDescendant } from "../utils/use-active-descendant";
import { useExpander } from "../utils/use-expander";
import { useFloatingLabel } from "../utils/use-floating-label";
import { useRefTee } from "../utils/use-ref-tee";
import { ComboboxProvider } from "./context";
import type { EvoComboboxProps } from "./types";
import "@ebay/skin/combobox.mjs";

type TemporaryValue = {
  key: string;
  origin: string;
  value: string;
};

const activeDescendantScrollIntoView: ScrollIntoViewOptions = {
  block: "nearest",
};

export function EvoCombobox({
  autocomplete = "none",
  borderless = false,
  children,
  className,
  defaultOpen = false,
  defaultValue = "",
  disabled,
  floatingLabel: floatingLabelText,
  fluid = false,
  id,
  listSelection = "automatic",
  onBlur,
  onChange,
  onClick,
  onFocus,
  onKeyDown,
  onOpenChange,
  onValueChange,
  open,
  placeholder,
  postfix,
  ref,
  strategy = "absolute",
  style,
  value,
  ...inputProps
}: EvoComboboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const listboxId = `${inputId}-listbox`;
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const [temporaryValue, setTemporaryValue] = useState<TemporaryValue | null>(
    null,
  );
  const [focused, setFocused] = useState(false);
  const currentValue = isControlled ? value : uncontrolledValue;
  const expander = useExpander({
    defaultOpen,
    offset: 4,
    onOpenChange,
    open,
    placement: "bottom-start",
    resetOnDisabled: Boolean(disabled),
    strategy,
  });
  const effectiveOpen = !disabled && expander.open;
  const [setListboxElement, listboxRef] = useRefTee<HTMLElement | null>(
    expander.refs.setFloating,
    null,
  );
  const [setForwardedInputElement] = useRefTee<HTMLInputElement | null>(
    ref,
    null,
  );
  const activeDescendant = useActiveDescendant<string, string>({
    containerRef: listboxRef as RefObject<HTMLElement | null>,
    scrollIntoView: activeDescendantScrollIntoView,
    shouldWrap: true,
  });
  const activeOption = effectiveOpen
    ? activeDescendant.getActiveItem()
    : undefined;
  const hasValidTemporaryValue =
    temporaryValue !== null &&
    listSelection === "automatic" &&
    temporaryValue.origin === currentValue &&
    temporaryValue.key === activeOption?.key;

  if (temporaryValue !== null && !hasValidTemporaryValue) {
    setTemporaryValue(null);
  }

  const displayedValue = hasValidTemporaryValue
    ? temporaryValue.value
    : currentValue;
  const previewValue = hasValidTemporaryValue ? temporaryValue.value : null;

  useEffect(() => {
    if (disabled) {
      activeDescendant.reset();
    }
  }, [activeDescendant.reset, disabled]);

  const floatingLabel = useFloatingLabel({
    containerTagName: fluid ? "div" : "span",
    disabled,
    focused: focused || effectiveOpen,
    text: floatingLabelText,
    value: displayedValue,
  });

  const setInputElement = useCallback(
    (node: HTMLInputElement | null) => {
      expander.refs.setReference(node);
      setForwardedInputElement(node);
    },
    [expander.refs.setReference, setForwardedInputElement],
  );

  const requestOpen = useCallback(
    (nextOpen: boolean) => {
      if (disabled && nextOpen) {
        return;
      }

      if (nextOpen !== expander.open) {
        expander.setOpen(nextOpen);
      }
    },
    [disabled, expander.open, expander.setOpen],
  );

  const updateValue = useCallback(
    (nextValue: string) => {
      setTemporaryValue(null);
      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
      if (nextValue !== currentValue) {
        onValueChange?.(nextValue);
      }
    },
    [currentValue, isControlled, onValueChange],
  );

  const selectOption = useCallback(
    (text: string) => {
      if (disabled) {
        return;
      }

      updateValue(text);
      activeDescendant.reset();
      requestOpen(false);
    },
    [activeDescendant.reset, disabled, requestOpen, updateValue],
  );

  const handleFocusOut = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
        return;
      }

      setFocused(false);
      requestOpen(false);
      activeDescendant.reset();

      if (previewValue !== null) {
        updateValue(previewValue);
      }
    },
    [activeDescendant.reset, previewValue, requestOpen, updateValue],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      activeDescendant.reset();
      updateValue(event.currentTarget.value);
      requestOpen(true);
      onChange?.(event);
    },
    [activeDescendant.reset, disabled, onChange, requestOpen, updateValue],
  );

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      setFocused(true);
      requestOpen(true);
      onFocus?.(event);
    },
    [disabled, onFocus, requestOpen],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      onBlur?.(event);
    },
    [onBlur],
  );

  const handleClick = useCallback(
    (event: MouseEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      requestOpen(true);
      onClick?.(event);
    },
    [disabled, onClick, requestOpen],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (!effectiveOpen) {
          requestOpen(true);
        } else {
          const option =
            event.key === "ArrowDown"
              ? activeDescendant.activateNext()
              : activeDescendant.activatePrevious();
          if (listSelection === "automatic") {
            setTemporaryValue(
              option
                ? {
                    key: option.key,
                    origin: currentValue,
                    value: option.data,
                  }
                : null,
            );
          }
        }
      } else if (event.key === "Enter" && effectiveOpen) {
        const option = activeDescendant.getActiveItem();
        if (option) {
          event.preventDefault();
          selectOption(option.data);
        } else {
          requestOpen(false);
        }
      } else if (event.key === "Escape") {
        setTemporaryValue(null);
        activeDescendant.reset();
        requestOpen(false);
      }

      onKeyDown?.(event);
    },
    [
      activeDescendant.activateNext,
      activeDescendant.activatePrevious,
      activeDescendant.getActiveItem,
      activeDescendant.reset,
      currentValue,
      disabled,
      effectiveOpen,
      listSelection,
      onKeyDown,
      requestOpen,
      selectOption,
    ],
  );

  const Wrapper = fluid ? "div" : "span";
  const postfixButtonProps = postfix?.buttonProps;
  const postfixMouseDown = postfixButtonProps?.onMouseDown;
  const postfixClick = postfixButtonProps?.onClick;
  const handlePostfixClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        return;
      }

      setTemporaryValue(null);
      activeDescendant.reset();
      postfixClick?.(event);
    },
    [activeDescendant.reset, disabled, postfixClick],
  );
  const handlePostfixMouseDown = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (!disabled) {
        postfixMouseDown?.(event);
      }
    },
    [disabled, postfixMouseDown],
  );

  return (
    <ComboboxProvider
      activeDescendant={activeDescendant}
      autocomplete={autocomplete}
      displayedValue={displayedValue}
      filterValue={currentValue}
      disabled={disabled}
      selectOption={selectOption}
    >
      <floatingLabel.Container {...floatingLabel.containerProps}>
        <floatingLabel.Label {...floatingLabel.labelProps} htmlFor={inputId} />
        <Wrapper
          className={classNames(
            "combobox",
            fluid && "combobox--fluid",
            effectiveOpen && "combobox--expanded",
            className,
          )}
          style={style}
          onBlurCapture={handleFocusOut}
        >
          <span
            className={classNames("combobox__control", {
              "combobox__control--actionable": Boolean(postfixButtonProps),
              "combobox__control--borderless": borderless,
            })}
          >
            <input
              {...inputProps}
              id={inputId}
              ref={setInputElement}
              type="text"
              role="combobox"
              disabled={disabled}
              value={displayedValue}
              placeholder={
                floatingLabel.showPlaceholder ? placeholder : undefined
              }
              autoComplete="off"
              aria-autocomplete={autocomplete}
              aria-haspopup="listbox"
              aria-expanded={effectiveOpen}
              aria-owns={listboxId}
              aria-controls={listboxId}
              aria-activedescendant={activeOption?.id}
              onBlur={handleBlur}
              onChange={handleChange}
              onClick={handleClick}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
            />
            {postfix &&
              (postfixButtonProps ? (
                <EvoIconButton
                  {...postfixButtonProps}
                  disabled={disabled || postfixButtonProps.disabled}
                  transparent
                  onClick={handlePostfixClick}
                  onMouseDown={handlePostfixMouseDown}
                >
                  {postfix.icon}
                </EvoIconButton>
              ) : (
                postfix.icon
              ))}
          </span>
          <div
            id={listboxId}
            ref={setListboxElement}
            role="listbox"
            className={classNames(
              "combobox__listbox",
              "combobox__listbox--set-position",
              strategy === "fixed" && "combobox__listbox--fixed",
            )}
            style={expander.floatingStyles}
          >
            {children}
          </div>
        </Wrapper>
      </floatingLabel.Container>
    </ComboboxProvider>
  );
}
