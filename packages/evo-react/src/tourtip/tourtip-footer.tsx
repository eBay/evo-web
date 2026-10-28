import classNames from "classnames";
import type { EvoTourtipFooterProps } from "./types";

/**
 * Optional footer, placed inside `EvoTourtipOverlay` after
 * `EvoTourtipContent`. It can include a sequence `index` and interactive
 * navigation controls.
 *
 * @summary Tourtip footer and sequence position.
 */
export function EvoTourtipFooter({
  index,
  children,
  className,
  ref,
  ...rest
}: EvoTourtipFooterProps) {
  return (
    <span
      {...rest}
      ref={ref}
      className={classNames("tourtip__footer", className)}
    >
      {index && <span className="tourtip__index">{index}</span>}
      {children}
    </span>
  );
}
