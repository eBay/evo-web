import classNames from "classnames";
import { EvoButtonCell } from "../button/button-cell";
import { EvoIconArrowRight24 } from "../icon/icons/arrow-right-24";
import type { EvoCtaButtonProps } from "./types";
import "@ebay/skin/cta-button.mjs";

export function EvoCtaButton({
  as: _as,
  children,
  className: extraClasses,
  fluid = false,
  size,
  truncated = false,
  ...rest
}: EvoCtaButtonProps) {
  const Component = _as ?? "a";
  const className = classNames(
    extraClasses,
    "cta-btn",
    size === "large" && "cta-btn--large",
    fluid && "cta-btn--fluid",
    truncated && "cta-btn--truncated",
  );

  return (
    <Component {...rest} className={className}>
      <EvoButtonCell type="cta">
        <span>{children}</span>
        <EvoIconArrowRight24 />
      </EvoButtonCell>
    </Component>
  );
}
