import type { EvoListItemLinkProps } from "./types";

/**
 * An `EvoList` item that navigates with an `<a>`. Use `as` with an
 * anchor-compatible client-side router component.
 *
 * @summary Link list item.
 */
export function EvoListItemLink({
  as: _as,
  children,
  ...rest
}: EvoListItemLinkProps) {
  const Component = _as ?? "a";

  return (
    <li>
      <Component {...rest}>{children}</Component>
    </li>
  );
}
