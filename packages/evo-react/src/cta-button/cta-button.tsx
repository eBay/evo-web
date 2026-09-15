import classNames from "classnames";
import { EvoButtonCell } from "../button/button-cell";
import { EvoIconArrowRight24 } from "../icon/icons/arrow-right-24";
import type { EvoCtaButtonProps } from "./types";
import "@ebay/skin/cta-button.mjs";

/**
 * CTA buttons identify the primary action in a flow.
 *
 * `EvoCtaButton` implements the CTA treatment as an `<a>`. Use it when the
 * primary next step navigates to another location, and use `EvoButton` for an
 * in-page action. Provide `href`, or use `as` with an anchor-compatible
 * client-side router component.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoCtaButton } from "@evo-web/react/cta-button";
 *
 * <EvoCtaButton href="/get-started">Get started</EvoCtaButton>
 * ```
 *
 * @summary Prominent call-to-action link.
 */
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
