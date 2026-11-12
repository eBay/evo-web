import { use } from "react";
import { PlaceholderHiddenContext } from "./context";
import type { EvoSelectOptionProps } from "./types";

/**
 * An option in `EvoSelect` or `EvoSelectOptionGroup`.
 *
 * @summary Native select option.
 */
export function EvoSelectOption({
  children,
  label,
  ...rest
}: EvoSelectOptionProps) {
  const placeholderHidden = use(PlaceholderHiddenContext);
  const hideText = placeholderHidden && rest.value === "";

  return (
    <option {...rest} label={hideText ? undefined : label}>
      {hideText ? null : children}
    </option>
  );
}
