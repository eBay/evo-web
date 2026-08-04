import type { ComponentProps } from "react";
import classNames from "classnames";
import { EvoIconTick16 } from "../icon/icons/tick-16";
import { useFakeMenuContext } from "./context";
import type { EvoFakeMenuItemProps } from "./types";

export function EvoFakeMenuItem({
  className,
  current = false,
  itemMatchesUrl = true,
  disabled = false,
  type,
  href,
  as: _as,
  children,
  ...rest
}: EvoFakeMenuItemProps) {
  const { baseClass } = useFakeMenuContext();
  const ariaCurrent = current ? (itemMatchesUrl ? "page" : "true") : undefined;
  const itemClassName = classNames(`${baseClass}__item`, className);
  const content = (
    <>
      <span>{children}</span>
      <EvoIconTick16 />
    </>
  );

  if (type === "button" || type === "submit") {
    return (
      <li>
        <button
          {...(rest as ComponentProps<"button">)}
          type={type}
          disabled={disabled}
          aria-current={ariaCurrent}
          className={itemClassName}
        >
          {content}
        </button>
      </li>
    );
  }

  const Component = _as ?? "a";

  return (
    <li>
      <Component
        {...(rest as ComponentProps<"a">)}
        href={disabled ? undefined : href}
        aria-disabled={disabled ? "true" : undefined}
        aria-current={ariaCurrent}
        className={itemClassName}
      >
        {content}
      </Component>
    </li>
  );
}
