import classNames from "classnames";
import { useChipContext } from "./context";
import type { EvoChipTextProps } from "./types";

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
