import classNames from "classnames";
import { EvoIconClose12 } from "../icon/icons/close-12";
import { useChipContext } from "./context";
import type { EvoChipDeleteButtonProps } from "./types";

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
