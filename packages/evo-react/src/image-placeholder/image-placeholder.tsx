import classNames from "classnames";
import { EvoIconImagePlaceholder } from "../icon/icons/image-placeholder";
import type { EvoImagePlaceholderProps } from "./types";
import "@ebay/skin/image-placeholder.mjs";

/**
 * Image placeholders fill the space where an image is unavailable. The SVG
 * defaults to a 300 by 300 pixel asset and can be sized to its container.
 *
 * `EvoImagePlaceholder` is decorative by default. Supply a localized
 * `a11yText` when the missing image is meaningful content. Native SVG
 * attributes and a React 19 `ref` pass through to the `<svg>`.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoImagePlaceholder } from "@evo-web/react/image-placeholder";
 *
 * <EvoImagePlaceholder a11yText="Product image unavailable" />
 * ```
 *
 * @summary SVG placeholder for an unavailable image.
 */
export function EvoImagePlaceholder({
  className,
  ...rest
}: EvoImagePlaceholderProps) {
  return (
    <EvoIconImagePlaceholder
      {...rest}
      className={classNames("image-placeholder", className)}
    />
  );
}
