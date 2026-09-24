import classNames from "classnames";
import type { EvoFakeMenuButtonLabelProps } from "./types";

/**
 * Optional label segment at the start of `EvoFakeMenuButtonTrigger`.
 *
 * @summary Prefix label for a fake menu trigger.
 */
export function EvoFakeMenuButtonLabel({
  children,
  className,
  ref,
  ...rest
}: EvoFakeMenuButtonLabelProps) {
  return (
    <>
      <span
        {...rest}
        ref={ref}
        className={classNames("menu-button-prefix-label", className)}
      >
        {children}
      </span>{" "}
    </>
  );
}
