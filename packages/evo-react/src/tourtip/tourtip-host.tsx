import classNames from "classnames";
import type { ElementType } from "react";
import { useTourtip } from "./context";
import type { EvoTourtipHostProps } from "./types";
import { useRefTee } from "../utils/use-ref-tee";

/**
 * Anchor for the tourtip. It defaults to `<span>`; use `as` for a link, button,
 * or another element. Custom components must forward the supplied `ref` and
 * DOM attributes to their rendered element.
 *
 * @summary Tourtip host and position anchor.
 */
export function EvoTourtipHost<T extends ElementType = "span">({
  as,
  children,
  className,
  ref,
  ...rest
}: EvoTourtipHostProps<T>) {
  const { open, overlayId, hostRef, setReference } = useTourtip();
  const [referenceRef] = useRefTee([setReference, hostRef, ref], null);
  const Component = (as ?? "span") as ElementType;
  return (
    <Component
      {...rest}
      ref={referenceRef}
      className={classNames("tourtip__host", className)}
      aria-expanded={open}
      aria-controls={overlayId}
    >
      {children}
    </Component>
  );
}
