import { useLayoutEffect, useState } from "react";
import type { ComponentProps, JSX, MouseEvent, Ref } from "react";
import classNames from "classnames";
import { EvoIconChevronDown12 } from "../icon/icons/chevron-down-12";
import { useRefTee } from "../utils/use-ref-tee";
import type {
  AnchorFilterChipProps,
  EvoFilterChipProps,
  MenuFilterChipProps,
  NativeFilterChipProps,
} from "./types";
import "@ebay/skin/filter-chip.mjs";

export function EvoFilterChip(props: AnchorFilterChipProps): JSX.Element;
export function EvoFilterChip(props: MenuFilterChipProps): JSX.Element;
export function EvoFilterChip(props: NativeFilterChipProps): JSX.Element;
export function EvoFilterChip({
  children,
  selected: selectedProp,
  defaultSelected = false,
  open: openProp,
  defaultOpen = false,
  variant = "default",
  icon,
  image,
  a11ySelectedText,
  href,
  className,
  onClick,
  disabled,
  ref,
  ...rest
}: EvoFilterChipProps) {
  const [uncontrolledSelected, setUncontrolledSelected] =
    useState(defaultSelected);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const selected =
    selectedProp !== undefined ? selectedProp : uncontrolledSelected;
  const open = openProp !== undefined ? openProp : uncontrolledOpen;
  const isMenu = variant === "menu";
  const isAnchor = Boolean(href && a11ySelectedText && !isMenu);
  const [rootRef, internalRootRef] = useRefTee<
    HTMLAnchorElement | HTMLButtonElement | null
  >(ref as Ref<HTMLAnchorElement | HTMLButtonElement | null>, null);

  useLayoutEffect(() => {
    internalRootRef.current?.classList.add("filter-chip--animated");
  }, [internalRootRef]);

  const rootClassName = classNames(
    "filter-chip",
    variant === "expressive" && "filter-chip--expressive",
    (isAnchor || isMenu) && selected && "filter-chip--selected",
    className,
  );

  const content = (
    <>
      {variant === "expressive" && (
        <span className="filter-chip__media">{image}</span>
      )}
      {variant === "default" && icon}
      <span className="filter-chip__text">
        {children}
        {selected && (isAnchor || isMenu) && (
          <span className="clipped"> - {a11ySelectedText}</span>
        )}
      </span>
      {isMenu && <EvoIconChevronDown12 className="filter-chip__trailing" />}
    </>
  );

  if (isAnchor) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        return;
      }

      const nextSelected = !selected;
      if (selectedProp === undefined) {
        setUncontrolledSelected(nextSelected);
      }
      (onClick as AnchorFilterChipProps["onClick"])?.(event, {
        selected: nextSelected,
      });
    };

    return (
      <a
        {...(rest as ComponentProps<"a">)}
        ref={rootRef}
        className={rootClassName}
        href={disabled ? undefined : href}
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

    if (isMenu) {
      const nextOpen = !open;
      if (openProp === undefined) {
        setUncontrolledOpen(nextOpen);
      }
      (onClick as MenuFilterChipProps["onClick"])?.(event, {
        open: nextOpen,
      });
    } else {
      const nextSelected = !selected;
      if (selectedProp === undefined) {
        setUncontrolledSelected(nextSelected);
      }
      (onClick as NativeFilterChipProps["onClick"])?.(event, {
        selected: nextSelected,
      });
    }
  };

  return (
    <button
      {...(rest as ComponentProps<"button">)}
      ref={rootRef}
      type="button"
      disabled={disabled}
      aria-selected={!isMenu ? (selected ? "true" : "false") : undefined}
      aria-expanded={isMenu ? (open ? "true" : "false") : undefined}
      className={rootClassName}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
