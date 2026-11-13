import type { EvoListItemButtonProps } from "./types";

/**
 * An `EvoList` item that runs an action with a native `<button>`.
 *
 * @summary Button list item.
 */
export function EvoListItemButton({
  children,
  ...rest
}: EvoListItemButtonProps) {
  return (
    <li>
      <button {...rest}>{children}</button>
    </li>
  );
}
