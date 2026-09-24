import type { EvoSelectOptionProps } from "./types";

/**
 * An option in `EvoSelect` or `EvoSelectOptionGroup`.
 *
 * @summary Native select option.
 */
export function EvoSelectOption({ children, ...rest }: EvoSelectOptionProps) {
  return <option {...rest}>{children}</option>;
}
