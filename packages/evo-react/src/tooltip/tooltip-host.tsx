import classNames from "classnames";
import type { ElementType } from "react";
import { useTooltipContext } from "./context";
import type { EvoTooltipHostProps } from "./types";
import { useRefTee } from "../utils/use-ref-tee";

export function EvoTooltipHost<T extends ElementType = "span">({
  as,
  children,
  className,
  ref,
  ...rest
}: EvoTooltipHostProps<T>) {
  const { open, tooltipId, setReference } = useTooltipContext();
  const [referenceRef] = useRefTee([setReference, ref], null);
  const Component = (as ?? "span") as ElementType;

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
