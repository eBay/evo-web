import { useId } from "react";
import type { Ref, RefObject } from "react";
import classNames from "classnames";
import { EvoIconCheckboxChecked18 } from "../icon/icons/checkbox-checked-18";
import { EvoIconCheckboxUnchecked18 } from "../icon/icons/checkbox-unchecked-18";
import { EvoIconRadioChecked18 } from "../icon/icons/radio-checked-18";
import { EvoIconRadioUnchecked18 } from "../icon/icons/radio-unchecked-18";
import { EvoIconTick16 } from "../icon/icons/tick-16";
import { useRefTee } from "../utils/use-ref-tee";
import { useRovingTabIndexItem } from "../utils/use-roving-tab-index";
import {
  useMenuCheckboxGroupContext,
  useMenuContext,
  useMenuItemsContext,
  useMenuRadioGroupContext,
} from "./context";
import type {
  EvoMenuCheckboxItemProps,
  EvoMenuItemProps,
  EvoMenuRadioItemProps,
  MenuValue,
} from "./types";

type MenuItemBaseProps = EvoMenuItemProps & {
  role: "menuitem" | "menuitemradio" | "menuitemcheckbox";
  "aria-checked"?: boolean;
  "data-value"?: MenuValue;
};

function MenuItemBase({
  role,
  "aria-checked": ariaChecked,
  "data-value": dataValue,
  className,
  children,
  disabled = false,
  textValue,
  onClick,
  onFocus,
  onKeyDown,
  onMouseDown,
  onSelect,
  ref,
  ...rest
}: MenuItemBaseProps) {
  const { baseClass } = useMenuContext();
  const { rovingTabIndex } = useMenuItemsContext();
  const internalId = useId();
  const [itemRef, internalItemRef] = useRefTee<HTMLDivElement | null>(
    ref as Ref<HTMLDivElement | null>,
    null,
  );
  const { tabIndex, onFocus: onRovingFocus } = useRovingTabIndexItem({
    rovingTabIndex,
    item: {
      key: internalId,
      ref: internalItemRef as RefObject<HTMLElement | null>,
      disabled,
      textValue,
    },
  });
  return (
    <div
      {...rest}
      ref={itemRef}
      role={role}
      data-value={dataValue}
      aria-checked={ariaChecked}
      aria-disabled={disabled || undefined}
      tabIndex={tabIndex}
      className={classNames(`${baseClass}__item`, className)}
      onMouseDown={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        onMouseDown?.(event);
      }}
      onFocus={(event) => {
        if (disabled) {
          return;
        }
        onRovingFocus(event);
        onFocus?.(event);
      }}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        onClick?.(event);
        if (!event.defaultPrevented) {
          onSelect?.(event);
        }
      }}
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (
          disabled ||
          event.defaultPrevented ||
          (event.key !== "Enter" && event.key !== " ")
        ) {
          return;
        }

        event.preventDefault();
        onSelect?.(event);
      }}
    >
      {children}
    </div>
  );
}

export function EvoMenuItem({ children, ...rest }: EvoMenuItemProps) {
  const { variant } = useMenuContext();

  return (
    <MenuItemBase {...rest} role="menuitem">
      <span>{children}</span>
      {variant === "none" && <EvoIconTick16 />}
    </MenuItemBase>
  );
}

export function EvoMenuRadioItem<Value extends MenuValue>({
  value,
  children,
  onSelect,
  ...rest
}: EvoMenuRadioItemProps<Value>) {
  const { variant } = useMenuContext();
  const { selected, select } = useMenuRadioGroupContext();

  return (
    <MenuItemBase
      {...rest}
      role="menuitemradio"
      data-value={value}
      aria-checked={selected === value}
      onSelect={(event) => {
        select(value);
        onSelect?.(event);
      }}
    >
      {variant === "filter" && (
        <>
          <EvoIconRadioUnchecked18 className="icon--unchecked" />
          <EvoIconRadioChecked18 className="icon--checked" />
        </>
      )}
      <span>{children}</span>
      {variant === "none" && <EvoIconTick16 />}
    </MenuItemBase>
  );
}

export function EvoMenuCheckboxItem<Value extends MenuValue>({
  value,
  children,
  onSelect,
  ...rest
}: EvoMenuCheckboxItemProps<Value>) {
  const { variant } = useMenuContext();
  const { selected, toggle } = useMenuCheckboxGroupContext();

  return (
    <MenuItemBase
      {...rest}
      role="menuitemcheckbox"
      data-value={value}
      aria-checked={selected.includes(value)}
      onSelect={(event) => {
        toggle(value);
        onSelect?.(event);
      }}
    >
      {variant === "filter" && (
        <>
          <EvoIconCheckboxUnchecked18 className="icon--unchecked" />
          <EvoIconCheckboxChecked18 className="icon--checked" />
        </>
      )}
      <span>{children}</span>
      {variant === "none" && <EvoIconTick16 />}
    </MenuItemBase>
  );
}
