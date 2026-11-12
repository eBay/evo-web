import type { EvoSelectOptionGroupProps } from "./types";

/**
 * Groups related `EvoSelectOption` elements under a visible `label`.
 *
 * @summary Native select option group.
 */
export function EvoSelectOptionGroup({
  children,
  ...rest
}: EvoSelectOptionGroupProps) {
  return <optgroup {...rest}>{children}</optgroup>;
}
