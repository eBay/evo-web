/* eslint-disable jsx-a11y/no-static-element-interactions -- The wrapper delegates keyboard and focus events from its trigger and menu. */
import { useCallback, useEffect, useId, useRef } from "react";
import classNames from "classnames";
import { MenuButtonProvider } from "./context";
import type { EvoMenuButtonProps } from "./types";
import { useExpander } from "../utils/use-expander";
import { useRefTee } from "../utils/use-ref-tee";
import "@ebay/skin/menu-button.mjs";
import "@ebay/skin/filter-chip.mjs";

/**
 * Menu buttons reveal a temporary menu of commands or choices from a trigger.
 *
 * Compose `EvoMenuButtonTrigger` and `EvoMenuButtonMenu` inside this wrapper.
 * The menu accepts `EvoMenuButtonItem`, radio and checkbox items within their
 * corresponding `EvoMenu*Group`, and separators. Use `open` and
 * `onOpenChange` for controlled visibility; otherwise the wrapper manages
 * opening and dismissal. `collapseOnSelect` returns focus to the trigger.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoMenuButton,
 *   EvoMenuButtonItem,
 *   EvoMenuButtonMenu,
 *   EvoMenuButtonTrigger,
 * } from "@evo-web/react/menu-button";
 *
 * <EvoMenuButton>
 *   <EvoMenuButtonTrigger>Listing actions</EvoMenuButtonTrigger>
 *   <EvoMenuButtonMenu>
 *     <EvoMenuButtonItem onSelect={editListing}>Edit listing</EvoMenuButtonItem>
 *   </EvoMenuButtonMenu>
 * </EvoMenuButton>
 * ```
 *
 * @summary Button that expands a menu of actions or choices.
 */
export function EvoMenuButton({
  a11ySelectedText = "Filter Applied",
  a11yText,
  borderless = false,
  children,
  className,
  collapseOnSelect = false,
  defaultOpen = false,
  disabled = false,
  fixWidth = false,
  hasSelection = false,
  noToggleIcon = false,
  onBlur,
  onKeyDown,
  onOpenChange,
  open,
  partiallyDisabled = false,
  prefixId,
  priority,
  ref,
  reverse = false,
  size,
  split,
  strategy = "absolute",
  transparent = false,
  variant = "button",
  ...rest
}: EvoMenuButtonProps) {
  const menuId = useId();
  const triggerId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const focusOnOpen = useRef(false);
  const [rootRef, rootElementRef] = useRefTee<HTMLSpanElement>(ref);
  const expander = useExpander({
    open,
    defaultOpen,
    onOpenChange,
    placement: reverse ? "bottom-end" : "bottom-start",
    strategy,
    offset: 0,
    resetOnDisabled: disabled,
  });
  const effectiveOpen = !disabled && expander.open;

  const close = useCallback(
    (restoreFocus: boolean) => {
      if (effectiveOpen) expander.setOpen(false);
      if (restoreFocus) triggerRef.current?.focus();
    },
    [effectiveOpen, expander.setOpen],
  );

  const select = useCallback(() => {
    if (collapseOnSelect) close(true);
  }, [close, collapseOnSelect]);

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

  return (
    <MenuButtonProvider
      open={effectiveOpen}
      setOpen={expander.setOpen}
      select={select}
      focusOnOpen={focusOnOpen}
      triggerRef={triggerRef}
      setReference={expander.refs.setReference}
      setFloating={expander.refs.setFloating}
      floatingStyles={expander.floatingStyles}
      menuId={menuId}
      triggerId={triggerId}
      variant={variant}
      borderless={borderless}
      priority={priority}
      size={size}
      transparent={transparent}
      disabled={disabled}
      partiallyDisabled={partiallyDisabled}
      noToggleIcon={noToggleIcon}
      a11yText={a11yText}
      hasSelection={hasSelection}
      a11ySelectedText={a11ySelectedText}
      reverse={reverse}
      strategy={strategy}
      fixWidth={fixWidth}
      split={split}
      prefixId={prefixId}
    >
      <span
        {...rest}
        ref={rootRef}
        className={classNames("menu-button", className)}
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
        {children}
      </span>
    </MenuButtonProvider>
  );
}
