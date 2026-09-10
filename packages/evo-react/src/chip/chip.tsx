import classNames from "classnames";
import { ChipProvider } from "./context";
import type { EvoChipProps } from "./types";
import "@ebay/skin/chip.mjs";

/**
 * Chips filter content or let users select values from a predefined set.
 * `EvoChip` is the value container; the application owns filtering, selection, and
 * removal behavior.
 *
 * `EvoChipText` identifies the value. `EvoChipDeleteButton` receives the chip
 * text through `aria-describedby`; provide its accessible action label and
 * handle its click in the application.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoChip, EvoChipText } from "@evo-web/react/chip";
 *
 * <EvoChip>
 *   <EvoChipText>Free shipping</EvoChipText>
 * </EvoChip>
 * ```
 *
 * @summary Compact value or selection label.
 */
export function EvoChip({ children, className, ...rest }: EvoChipProps) {
  return (
    <ChipProvider>
      <span {...rest} className={classNames("chip", className)}>
        {children}
      </span>
    </ChipProvider>
  );
}
