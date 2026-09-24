import classNames from "classnames";
import type { MouseEvent } from "react";
import { EvoButton } from "../button/button";
import { EvoIconButton } from "../icon-button/icon-button";
import { useRefTee } from "../utils/use-ref-tee";
import { useFakeMenuButton } from "./context";
import type { EvoFakeMenuButtonTriggerProps } from "./types";

/**
 * Trigger for `EvoFakeMenuButton`. Provide visible text for button variants or
 * an `EvoIcon*` child with `variant="icon"` on the parent.
 *
 * @summary Button that toggles a fake menu.
 */
export function EvoFakeMenuButtonTrigger({
  children,
  className,
  onClick,
  ref,
  ...rest
}: EvoFakeMenuButtonTriggerProps) {
  const menuButton = useFakeMenuButton();
  const [buttonRef] = useRefTee<HTMLButtonElement>([
    ref,
    menuButton.triggerRef,
    menuButton.setReference,
  ]);
  const commonProps = {
    ...rest,
    ref: buttonRef,
    className: classNames("fake-menu-button__button", className),
    "aria-expanded": menuButton.open,
    "aria-controls": menuButton.menuId,
    disabled: menuButton.disabled,
    onClick: (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (!event.defaultPrevented) {
        menuButton.focusOnOpen.current = true;
        menuButton.setOpen(!menuButton.open);
      }
    },
  };

  if (menuButton.variant === "icon") {
    return (
      <EvoIconButton
        {...commonProps}
        a11yText={menuButton.a11yText ?? "Menu"}
        transparent={menuButton.transparent}
        size={menuButton.size}
      >
        {children}
      </EvoIconButton>
    );
  }

  return (
    <EvoButton
      {...commonProps}
      aria-label={menuButton.a11yText}
      priority={menuButton.priority}
      size={menuButton.size}
      borderless={menuButton.borderless}
      variant={menuButton.variant === "form" ? "form" : "standard"}
      bodyState={menuButton.noToggleIcon ? undefined : "expand"}
    >
      {children}
    </EvoButton>
  );
}
