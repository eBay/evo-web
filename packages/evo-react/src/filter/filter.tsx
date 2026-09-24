import { useState } from "react";
import type { ComponentProps, JSX, MouseEvent, Ref } from "react";
import classNames from "classnames";
import type {
  AnchorFilterProps,
  EvoFilterProps,
  NativeFilterProps,
} from "./types";
import "@ebay/skin/filter-button.mjs";

/**
 * Filters let users select values to narrow a set of results.
 *
 * `EvoFilter` renders a toggle button, or a link when `href` is supplied. The
 * `selected` state can be controlled or managed internally with
 * `defaultSelected`. `onClick` receives the next selection state. A selected
 * link includes clipped selected text; translate `a11ySelectedText` for the
 * locale.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoFilter } from "@evo-web/react/filter";
 *
 * <EvoFilter
 *   selected={isSelected}
 *   onClick={(event, data) => setSelected(data.selected)}
 * >
 *   Free shipping
 * </EvoFilter>
 * ```
 *
 * @summary Selectable filter button or link.
 */
export function EvoFilter(props: AnchorFilterProps): JSX.Element;
export function EvoFilter(props: NativeFilterProps): JSX.Element;
export function EvoFilter({
  a11ySelectedText = "Selected",
  children,
  className,
  defaultSelected = false,
  disabled = false,
  href,
  onClick,
  ref,
  selected: selectedProp,
  useAriaPressed = true,
  ...rest
}: EvoFilterProps) {
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const selected = selectedProp !== undefined ? selectedProp : internalSelected;
  const baseClass = href ? "filter-link" : "filter-button";
  const filterClass = classNames(
    baseClass,
    `${baseClass}--${selected ? "selected" : "unselected"}`,
    className,
  );
  const content = (
    <span className={`${baseClass}__cell`}>
      <span>{children}</span>
      {href && selected && (
        <span className="clipped">- {a11ySelectedText}</span>
      )}
    </span>
  );

  if (href) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        event.preventDefault();
        return;
      }
      const nextSelected = !selected;
      if (selectedProp === undefined) {
        setInternalSelected(nextSelected);
      }
      (onClick as AnchorFilterProps["onClick"])?.(event, {
        selected: nextSelected,
      });
    };

    return (
      <a
        {...(rest as ComponentProps<"a">)}
        ref={ref as Ref<HTMLAnchorElement>}
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        className={filterClass}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }
    const nextSelected = !selected;
    if (selectedProp === undefined) {
      setInternalSelected(nextSelected);
    }
    (onClick as NativeFilterProps["onClick"])?.(event, {
      selected: nextSelected,
    });
  };

  return (
    <button
      {...(rest as ComponentProps<"button">)}
      ref={ref as Ref<HTMLButtonElement>}
      type="button"
      disabled={disabled}
      aria-pressed={useAriaPressed && selected ? "true" : undefined}
      className={filterClass}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
