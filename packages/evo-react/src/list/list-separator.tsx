import type { EvoListSeparatorProps } from "./types";

/**
 * Separates adjacent `EvoList` items with a native `<hr>`.
 *
 * @summary List separator.
 */
export function EvoListSeparator(props: EvoListSeparatorProps) {
  return <hr {...props} />;
}
