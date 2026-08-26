import { useCallback, useId, useState } from "react";
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
  const [temporaryValue, setTemporaryValue] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);
  const currentValue = isControlled ? value : uncontrolledValue;

  if (listSelection === "manual" && temporaryValue !== null) {
    setTemporaryValue(null);
  }

  const displayedValue = temporaryValue ?? currentValue;
  const expander = useExpander({
    defaultOpen,
    offset: 4,
    onOpenChange,
    open,
    placement: "bottom-start",
    strategy,
  });
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
    shouldWrap: true,
  });
  const floatingLabel = useFloatingLabel({
    containerTagName: fluid ? "div" : "span",
    disabled,
    focused: focused || expander.open,
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
      if (nextOpen !== expander.open) {
        expander.setOpen(nextOpen);
      }
    },
    [expander.open, expander.setOpen],
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
      updateValue(text);
      activeDescendant.reset();
      requestOpen(false);
    },
    [activeDescendant.reset, requestOpen, updateValue],
  );

  const handleFocusOut = (event: FocusEvent<HTMLElement>) => {
    if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
      return;
    }

    setFocused(false);
    const preview = temporaryValue;
    requestOpen(false);
    activeDescendant.reset();

    if (preview === null) {
      return;
    }

    updateValue(preview);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    activeDescendant.reset();
    updateValue(event.currentTarget.value);
    requestOpen(true);
    onChange?.(event);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    requestOpen(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur?.(event);
  };

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    requestOpen(true);
    onClick?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!expander.open) {
        requestOpen(true);
      } else {
        const option =
          event.key === "ArrowDown"
            ? activeDescendant.activateNext()
            : activeDescendant.activatePrevious();
        if (listSelection === "automatic") {
          setTemporaryValue(option?.data ?? null);
        }
      }
    } else if (event.key === "Enter" && expander.open) {
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
  };

  const Wrapper = fluid ? "div" : "span";
  const activeOption = expander.open
    ? activeDescendant.getActiveItem()
    : undefined;
  const postfixButtonProps = postfix?.buttonProps;
  const postfixMouseDown = postfixButtonProps?.onMouseDown;

  return (
    <ComboboxProvider
      activeDescendant={activeDescendant}
      autocomplete={autocomplete}
      displayedValue={displayedValue}
      filterValue={currentValue}
      selectOption={selectOption}
    >
      <floatingLabel.Container {...floatingLabel.containerProps}>
        <floatingLabel.Label {...floatingLabel.labelProps} htmlFor={inputId} />
        <Wrapper
          className={classNames(
            "combobox",
            fluid && "combobox--fluid",
            expander.open && "combobox--expanded",
            className,
          )}
          style={style}
          onBlur={handleFocusOut}
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
              aria-expanded={expander.open}
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
                  onMouseDown={(event) => {
                    event.preventDefault();
                    postfixMouseDown?.(event);
                  }}
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
            className="combobox__listbox"
            style={expander.floatingStyles}
          >
            {children}
          </div>
        </Wrapper>
      </floatingLabel.Container>
    </ComboboxProvider>
  );
}
