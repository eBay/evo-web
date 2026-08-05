import classNames from "classnames";
import { ChipProvider } from "./context";
import type { EvoChipProps } from "./types";
import "@ebay/skin/chip.mjs";

export function EvoChip({ children, className, ...rest }: EvoChipProps) {
  return (
    <ChipProvider>
      <span {...rest} className={classNames("chip", className)}>
        {children}
      </span>
    </ChipProvider>
  );
}
