import type { EvoListItemProps } from "./types";

/**
 * A static item in `EvoList`. Use `EvoListItemButton` for an action or
 * `EvoListItemLink` for navigation. Add named leading, content, and trailing
 * children in the desired order.
 *
 * @summary Static list item.
 */
export function EvoListItem({ children, ...rest }: EvoListItemProps) {
  return (
    <li>
      <div {...rest}>{children}</div>
    </li>
  );
}
