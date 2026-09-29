import classNames from "classnames";
import { useTourtip } from "./context";
import type { EvoTourtipOverlayProps } from "./types";
import { useRefTee } from "../utils/use-ref-tee";

/**
 * Positioned tourtip region. Compose `EvoTourtipContent` first, then an
 * optional `EvoTourtipFooter`. The region is named by `EvoTourtipHeading`
 * unless `aria-label` is set. When omitting the heading, give the region an
 * `aria-label`. If the heading has a custom `id`, also set the matching
 * `aria-labelledby` here for server rendering.
 *
 * @summary Positioned tourtip region.
 */
export function EvoTourtipOverlay({
  children,
  className,
  style,
  ref,
  "aria-label": ariaLabel,
  "aria-labelledby": inputLabelledBy,
  ...rest
}: EvoTourtipOverlayProps) {
  const {
    overlayId,
    headingId,
    setFloating,
    arrowRef,
    floatingStyles,
    arrowStyles,
  } = useTourtip();
  const [floatingRef] = useRefTee([setFloating, ref], null);

  return (
    <span
      {...rest}
      id={overlayId}
      ref={floatingRef}
      role="region"
      aria-label={ariaLabel}
      // The overlay renders before its heading, so heading presence is unknown
      // during server rendering. Reference the heading unless `aria-label` names
      // the region instead.
      aria-labelledby={inputLabelledBy ?? (ariaLabel ? undefined : headingId)}
      className={classNames("tourtip__overlay", className)}
      style={{ ...style, ...floatingStyles }}
    >
      <span ref={arrowRef} className="tourtip__pointer" style={arrowStyles} />
      <span className="tourtip__mask">
        <span className="tourtip__cell">{children}</span>
      </span>
    </span>
  );
}
