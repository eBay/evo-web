import type {
  ComponentProps,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  Ref,
  RefObject,
} from "react";
import classNames from "classnames";
import { useFilterMenu, useFilterMenuItems } from "./context";
import type { EvoFilterMenuItemProps } from "./types";
import { useRefTee } from "../utils/use-ref-tee";
import { useRovingTabIndexItem } from "../utils/use-roving-tab-index";
import { EvoCheckbox } from "../checkbox/checkbox";
import { EvoRadio } from "../radio/radio";
import { EvoIconRadioChecked18 } from "../icon/icons/radio-checked-18";
import { EvoIconRadioUnchecked18 } from "../icon/icons/radio-unchecked-18";
import { EvoIconCheckboxChecked18 } from "../icon/icons/checkbox-checked-18";
import { EvoIconCheckboxUnchecked18 } from "../icon/icons/checkbox-unchecked-18";

/**
 * One radio or checkbox choice within `EvoFilterMenuItems`. Its required
 * `value` remains stable when the consumer filters or reorders items.
 *
 * @summary Selectable filter menu item.
 */
export function EvoFilterMenuItem({
  children,
  className,
  disabled = false,
  onClick,
  onFocus,
  onKeyDown,
  onSelect,
  ref,
  value,
  ...rest
}: EvoFilterMenuItemProps) {
  const { type, isForm, baseClass, radioName, selected, select } =
    useFilterMenu();
  const rovingTabIndex = useFilterMenuItems();
  const [itemRef, internalRef] = useRefTee<HTMLElement | null>(
    ref as Ref<HTMLElement | null>,
    null,
  );
  const { tabIndex, onFocus: onRovingFocus } = useRovingTabIndexItem({
    rovingTabIndex,
    item: {
      key: value,
      ref: internalRef as RefObject<HTMLElement | null>,
      disabled: disabled || isForm,
    },
  });
  const checked = selected.includes(value);
  const isRadio = type === "radio";
  const role = isRadio ? "menuitemradio" : "menuitemcheckbox";
  const classNameWithBase = classNames(`${baseClass}__item`, className);
  const selectItem = (
    event: Parameters<NonNullable<EvoFilterMenuItemProps["onSelect"]>>[0],
  ) => {
    const next = select(value);
    onSelect?.(event, next);
  };

  if (isForm) {
    return (
      <label
        {...(rest as ComponentProps<"label">)}
        ref={itemRef as Ref<HTMLLabelElement>}
        role={role}
        aria-checked={checked}
        aria-disabled={disabled || undefined}
        className={classNameWithBase}
      >
        {isRadio ? (
          <EvoRadio
            name={radioName}
            value={value}
            checked={checked}
            disabled={disabled}
            onClick={onClick as unknown as MouseEventHandler<HTMLInputElement>}
            onFocus={onFocus as unknown as FocusEventHandler<HTMLInputElement>}
            onKeyDown={
              onKeyDown as unknown as KeyboardEventHandler<HTMLInputElement>
            }
            onChange={(event) => {
              if (!disabled) selectItem(event);
            }}
          />
        ) : (
          <EvoCheckbox
            value={value}
            checked={checked}
            disabled={disabled}
            onClick={onClick as unknown as MouseEventHandler<HTMLInputElement>}
            onFocus={onFocus as unknown as FocusEventHandler<HTMLInputElement>}
            onKeyDown={
              onKeyDown as unknown as KeyboardEventHandler<HTMLInputElement>
            }
            onChange={(event) => {
              if (!disabled) selectItem(event);
            }}
          />
        )}
        <span className={`${baseClass}__text`}>{children}</span>
      </label>
    );
  }

  return (
    <div
      {...rest}
      ref={itemRef as Ref<HTMLDivElement>}
      role={role}
      aria-checked={checked}
      aria-disabled={disabled || undefined}
      tabIndex={tabIndex}
      className={classNameWithBase}
      onFocus={(event) => {
        onRovingFocus(event);
        onFocus?.(event);
      }}
      onClick={(event) => {
        onClick?.(event);
        if (!disabled && !event.defaultPrevented) {
          selectItem(event);
        }
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (
          !disabled &&
          !event.defaultPrevented &&
          (event.key === "Enter" || event.key === " ")
        ) {
          event.preventDefault();
          selectItem(event);
        }
      }}
    >
      <span className={`${baseClass}__${isRadio ? "radio" : "checkbox"}`}>
        {isRadio ? (
          checked ? (
            <EvoIconRadioChecked18 />
          ) : (
            <EvoIconRadioUnchecked18 />
          )
        ) : checked ? (
          <EvoIconCheckboxChecked18 />
        ) : (
          <EvoIconCheckboxUnchecked18 />
        )}
      </span>
      <span className={`${baseClass}__text`}>{children}</span>
    </div>
  );
}
