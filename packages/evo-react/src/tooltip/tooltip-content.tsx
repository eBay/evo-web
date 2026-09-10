import classNames from "classnames";
import { useTooltipContext } from "./context";
import type { EvoTooltipContentProps } from "./types";
import { useRefTee } from "../utils/use-ref-tee";

export function EvoTooltipContent({
  className,
  style,
  ref,
  children,
  ...rest
}: EvoTooltipContentProps) {
  const {
    open,
    tooltipId,
    setFloating,
    arrowRef,
    floatingStyles,
    arrowStyles,
  } = useTooltipContext();
  const [floatingRef] = useRefTee([setFloating, ref], null);

  return (
    <span
      {...rest}
      id={tooltipId}
      ref={floatingRef}
      className={classNames("tooltip__overlay", className)}
      style={{ ...style, ...floatingStyles }}
      role="tooltip"
      tabIndex={open ? -1 : undefined}
    >
      <span ref={arrowRef} className="tooltip__pointer" style={arrowStyles} />
      <span className="tooltip__mask">
        <span className="tooltip__cell">
          <span className="tooltip__content">{children}</span>
        </span>
      </span>
    </span>
  );
}
