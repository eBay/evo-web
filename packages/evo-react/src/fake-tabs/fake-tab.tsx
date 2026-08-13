import classNames from "classnames";
import { useFakeTabsContext } from "./context";
import type { EvoFakeTabProps } from "./types";

export function EvoFakeTab({
  id,
  href,
  as: Component,
  className,
  children,
  onClick,
  ...rest
}: EvoFakeTabProps) {
  const { selected, ariaCurrent } = useFakeTabsContext();
  const isDisabled = href === undefined;
  const isSelected = Object.is(selected, id);
  const Tag = Component ?? "a";

  return (
    <li className={classNames("fake-tabs__item", className)}>
      <Tag
        {...rest}
        href={href}
        aria-current={!isDisabled && isSelected ? ariaCurrent : undefined}
        aria-disabled={isDisabled ? "true" : undefined}
        onClick={isDisabled ? undefined : onClick}
      >
        {children}
      </Tag>
    </li>
  );
}
