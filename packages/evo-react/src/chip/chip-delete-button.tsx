import classNames from "classnames";
import { EvoIconClose12 } from "../icon/icons/close-12";
import { useChipContext } from "./context";
import type { EvoChipDeleteButtonProps } from "./types";

/**
 * Removes the chip value when the application handles its click. Use it inside
 * `EvoChip` and provide the required action-specific `a11yText`; the chip text
 * is linked through `aria-describedby`.
 *
 * @summary Chip removal action.
 */
export function EvoChipDeleteButton({
  a11yText = "delete",
  className,
  ...rest
}: EvoChipDeleteButtonProps) {
  const { textId } = useChipContext();

  return (
    <button
      {...rest}
      type="button"
      className={classNames("chip__button", className)}
      aria-label={a11yText}
      aria-describedby={textId}
    >
      <EvoIconClose12 />
    </button>
  );
}
