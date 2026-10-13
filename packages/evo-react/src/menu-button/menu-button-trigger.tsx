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
 * Toggles the attached menu using the presentation configured on its root.
 *
 * @summary Trigger for a menu button.
 */
export function EvoMenuButtonTrigger(props: EvoMenuButtonTriggerProps) {
  const menuButton = useMenuButton();
  const {
    a11ySelectedText = "Filter Applied",
    hasSelection = false,
    noToggleIcon = false,
    ...triggerProps
  } = props;
  const [buttonRef] = useRefTee<HTMLButtonElement>([
    props.ref,
    menuButton.triggerRef,
    menuButton.setReference,
  ]);
  const labelId = `${menuButton.triggerId}-label`;
  const toggleMenu = (
    event: MouseEvent<HTMLButtonElement>,
    partiallyDisabled: boolean,
  ) => {
    if (!event.defaultPrevented && !menuButton.disabled && !partiallyDisabled) {
      menuButton.focusOnOpen.current = true;
      menuButton.setOpen(!menuButton.open);
    }
  };

  if (menuButton.variant === "filter") {
    const {
      a11yText,
      children,
      className,
      onClick,
      partiallyDisabled = false,
      prefixId,
      ...rest
    } = triggerProps;

    return (
      <EvoFilterChip
        {...rest}
        ref={buttonRef}
        id={menuButton.triggerId}
        className={classNames("menu-button__button", className)}
        aria-expanded={menuButton.open}
        aria-controls={menuButton.menuId}
        aria-haspopup="true"
        aria-disabled={partiallyDisabled || undefined}
        aria-labelledby={prefixId ? `${prefixId} ${labelId}` : undefined}
        disabled={menuButton.disabled}
        variant="menu"
        open={menuButton.open}
        selected={hasSelection}
        a11ySelectedText={a11ySelectedText}
        aria-label={a11yText ?? undefined}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          onClick?.(event);
          toggleMenu(event, partiallyDisabled);
        }}
      >
        {prefixId ? <span id={labelId}>{children}</span> : children}
      </EvoFilterChip>
    );
  }

  if (menuButton.variant === "icon") {
    const {
      a11yText = "Menu",
      children,
      className,
      onClick,
      partiallyDisabled = false,
      prefixId,
      ...rest
    } = triggerProps;

    return (
      <EvoIconButton
        {...rest}
        ref={buttonRef}
        id={menuButton.triggerId}
        className={classNames("menu-button__button", className)}
        aria-expanded={menuButton.open}
        aria-controls={menuButton.menuId}
        aria-haspopup="true"
        aria-labelledby={prefixId || undefined}
        disabled={menuButton.disabled}
        a11yText={a11yText}
        partiallyDisabled={partiallyDisabled}
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          onClick?.(event);
          toggleMenu(event, partiallyDisabled);
        }}
      >
        {children ?? <EvoIconOverflowVertical16 />}
      </EvoIconButton>
    );
  }

  const {
    a11yText,
    children,
    className,
    onClick,
    partiallyDisabled = false,
    prefixId,
    ...rest
  } = triggerProps;

  return (
    <EvoButton
      {...rest}
      ref={buttonRef}
      id={menuButton.triggerId}
      className={classNames("menu-button__button", className)}
      aria-expanded={menuButton.open}
      aria-controls={menuButton.menuId}
      aria-haspopup="true"
      aria-labelledby={prefixId ? `${prefixId} ${labelId}` : undefined}
      aria-label={a11yText ?? undefined}
      disabled={menuButton.disabled}
      partiallyDisabled={partiallyDisabled}
      variant={menuButton.variant === "form" ? "form" : "standard"}
      bodyState={noToggleIcon ? undefined : "expand"}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        toggleMenu(event, partiallyDisabled);
      }}
    >
      {prefixId ? <span id={labelId}>{children}</span> : children}
    </EvoButton>
  );
}
