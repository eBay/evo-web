import classNames from "classnames";
import type { MouseEvent } from "react";
import { EvoButton } from "../button/button";
import { EvoFilterChip } from "../filter-chip/filter-chip";
import { EvoIconButton } from "../icon-button/icon-button";
import { EvoIconOverflowVertical16 } from "../icon/icons/overflow-vertical-16";
import { useRefTee } from "../utils/use-ref-tee";
import { useMenuButton } from "./context";
import type { EvoMenuButtonTriggerProps } from "./types";

/**
 * Toggles the attached menu. Supply visible text for button and form variants,
 * or an `EvoIcon*` child and localized `a11yText` on the parent for icon mode.
 *
 * @summary Trigger for a menu button.
 */
export function EvoMenuButtonTrigger({
  children,
  className,
  onClick,
  ref,
  ...rest
}: EvoMenuButtonTriggerProps) {
  const menuButton = useMenuButton();
  const [buttonRef] = useRefTee<HTMLButtonElement>([
    ref,
    menuButton.triggerRef,
    menuButton.setReference,
  ]);
  const labelId = `${menuButton.triggerId}-label`;
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (
      !event.defaultPrevented &&
      !menuButton.disabled &&
      !menuButton.partiallyDisabled
    ) {
      menuButton.focusOnOpen.current = true;
      menuButton.setOpen(!menuButton.open);
    }
  };
  const commonProps = {
    ...rest,
    id: menuButton.triggerId,
    ref: buttonRef,
    className: classNames("menu-button__button", className),
    "aria-expanded": menuButton.open,
    "aria-controls": menuButton.menuId,
    "aria-haspopup": "true" as const,
    "aria-labelledby": menuButton.prefixId
      ? menuButton.variant === "icon"
        ? menuButton.prefixId
        : `${menuButton.prefixId} ${labelId}`
      : undefined,
    disabled: menuButton.disabled,
    onClick: handleClick,
  };

  if (menuButton.variant === "icon") {
    return (
      <EvoIconButton
        {...commonProps}
        a11yText={menuButton.a11yText ?? "Menu"}
        transparent={menuButton.transparent}
        size={menuButton.size}
      >
        {children ?? <EvoIconOverflowVertical16 />}
      </EvoIconButton>
    );
  }

  if (menuButton.variant === "filter") {
    return (
      <EvoFilterChip
        {...commonProps}
        variant="menu"
        open={menuButton.open}
        selected={menuButton.hasSelection}
        a11ySelectedText={menuButton.a11ySelectedText}
        aria-label={menuButton.a11yText}
      >
        {children}
      </EvoFilterChip>
    );
  }

  return (
    <EvoButton
      {...commonProps}
      aria-label={menuButton.a11yText}
      partiallyDisabled={menuButton.partiallyDisabled}
      priority={menuButton.priority}
      size={menuButton.size}
      borderless={menuButton.borderless}
      variant={menuButton.variant === "form" ? "form" : "standard"}
      bodyState={menuButton.noToggleIcon ? undefined : "expand"}
      split={menuButton.split}
    >
      {menuButton.prefixId ? <span id={labelId}>{children}</span> : children}
    </EvoButton>
  );
}
