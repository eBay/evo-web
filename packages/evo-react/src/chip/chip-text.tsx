import classNames from "classnames";
import { useChipContext } from "./context";
import type { EvoChipTextProps } from "./types";

/**
 * Identifies the value contained by `EvoChip`. Its `id` is available to the
 * delete button for additional accessible context.
 *
 * @summary Chip value text.
 */
export function EvoChipText({
  children,
  className,
  ...rest
}: EvoChipTextProps) {
  const { textId } = useChipContext();

  return (
    <span {...rest} id={textId} className={classNames("chip__text", className)}>
      {children}
    </span>
  );
}
