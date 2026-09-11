import classNames from "classnames";
import type { ElementType } from "react";
import { useTooltipContext } from "./context";
import { EvoButton } from "../button/button";
import type { EvoTooltipHostProps } from "./types";
import { useRefTee } from "../utils/use-ref-tee";

/**
 * Provides the element that opens and anchors the tooltip. It defaults to
 * `EvoButton`; use `as` for another element or component.
 *
 * Custom components must forward the supplied `ref` and DOM attributes to the
 * rendered host. The tooltip automatically applies `aria-expanded` and
 * `aria-describedby`.
 *
 * @summary Tooltip trigger and anchor.
 */
export function EvoTooltipHost<T extends ElementType = typeof EvoButton>({
  as,
  children,
  className,
  ref,
  ...rest
}: EvoTooltipHostProps<T>) {
  const { open, tooltipId, setReference } = useTooltipContext();
  const [referenceRef] = useRefTee([setReference, ref], null);
  const Component = (as ?? EvoButton) as ElementType;

  return (
    <Component
      {...rest}
      ref={referenceRef}
      className={classNames("tooltip__host", className)}
      aria-expanded={open}
      aria-describedby={tooltipId}
    >
      {children}
    </Component>
  );
}
