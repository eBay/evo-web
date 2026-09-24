/* eslint-disable jsx-a11y/no-static-element-interactions -- The span delegates keyboard and focus events from its nested button and links. */
import { useEffect, useId, useRef } from "react";
import classNames from "classnames";
import { useExpander } from "../utils/use-expander";
import { useRefTee } from "../utils/use-ref-tee";
import { FakeMenuButtonProvider } from "./context";
import type { EvoFakeMenuButtonProps } from "./types";
import "@ebay/skin/menu-button.mjs";

/**
 * Fake menu buttons open a compact list of ordinary links or buttons.
 *
 * Place `EvoFakeMenuButtonTrigger` and `EvoFakeMenuButtonMenu` inside this
 * wrapper. The menu uses the existing `EvoFakeMenuItems`, `EvoFakeMenuItem`,
 * and `EvoFakeMenuSeparator` components. `open` and `onOpenChange` provide
 * controlled state; otherwise the wrapper manages opening and dismissal.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoFakeMenuButton,
 *   EvoFakeMenuButtonMenu,
 *   EvoFakeMenuButtonTrigger,
 * } from "@evo-web/react/fake-menu-button";
 * import {
 *   EvoFakeMenuItem,
 *   EvoFakeMenuItems,
 * } from "@evo-web/react/fake-menu";
 *
 * <EvoFakeMenuButton>
 *   <EvoFakeMenuButtonTrigger>More options</EvoFakeMenuButtonTrigger>
 *   <EvoFakeMenuButtonMenu>
 *     <EvoFakeMenuItems>
 *       <EvoFakeMenuItem href="/orders">Orders</EvoFakeMenuItem>
 *     </EvoFakeMenuItems>
 *   </EvoFakeMenuButtonMenu>
 * </EvoFakeMenuButton>
 * ```
 *
 * @summary Button that expands a fake menu of links or actions.
 */
export function EvoFakeMenuButton({
  a11yText,
  borderless = false,
  children,
  className,
  collapseOnSelect = false,
  defaultOpen = false,
  disabled = false,
  fixWidth = false,
  flip = true,
  noToggleIcon = false,
  onBlur,
  onKeyDown,
  onOpenChange,
  open,
  priority,
  ref,
  reverse = false,
  size,
  strategy = "absolute",
  transparent = false,
  variant = "button",
  ...rest
}: EvoFakeMenuButtonProps) {
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const focusOnOpen = useRef(false);
  const [rootRef, rootElementRef] = useRefTee<HTMLSpanElement>(ref);
  const expander = useExpander({
    open,
    defaultOpen,
    onOpenChange,
    placement: reverse ? "bottom-end" : "bottom-start",
    strategy,
    flip,
    offset: 0,
    resetOnDisabled: disabled,
  });

  useEffect(() => {
    if (!expander.open) {
      return;
    }
    const dismissOutside = (event: PointerEvent) => {
      if (!rootElementRef.current?.contains(event.target as Node)) {
        expander.setOpen(false);
      }
    };
    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, [expander.open, expander.setOpen, rootElementRef]);

  return (
    <FakeMenuButtonProvider
      open={expander.open}
      setOpen={expander.setOpen}
      focusOnOpen={focusOnOpen}
      triggerRef={triggerRef}
      setReference={expander.refs.setReference}
      setFloating={expander.refs.setFloating}
      floatingStyles={expander.floatingStyles}
      menuId={menuId}
      variant={variant}
      borderless={borderless}
      priority={priority}
      size={size}
      transparent={transparent}
      disabled={disabled}
      noToggleIcon={noToggleIcon}
      a11yText={a11yText}
      reverse={reverse}
      strategy={strategy}
      fixWidth={fixWidth}
      collapseOnSelect={collapseOnSelect}
    >
      <span
        {...rest}
        ref={rootRef}
        className={classNames("fake-menu-button", className)}
        onKeyDown={(event) => {
          if (expander.open && event.key === "Escape") {
            expander.setOpen(false);
            triggerRef.current?.focus();
          }
          onKeyDown?.(event);
        }}
        onBlur={(event) => {
          if (
            expander.open &&
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            expander.setOpen(false);
          }
          onBlur?.(event);
        }}
      >
        {children}
      </span>
    </FakeMenuButtonProvider>
  );
}
