import classNames from "classnames";
import type { EvoSkeletonProps } from "./types";
import "@ebay/skin/skeleton.mjs";

/**
 * Skeletons reserve space on a page for content that is still loading. Size
 * the placeholder to the expected content so loading does not shift the page.
 *
 * `EvoSkeleton` groups its placeholder parts as one image with an accessible
 * loading description. Compose the exported `EvoSkeleton*` parts inside it,
 * and replace the group with the loaded content when ready.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoSkeleton, EvoSkeletonImage, EvoSkeletonText } from "@evo-web/react/skeleton";
 *
 * <EvoSkeleton a11yText="Loading listing details">
 *   <EvoSkeletonImage style={{ width: 220, height: 220 }} />
 *   <EvoSkeletonText multiline />
 * </EvoSkeleton>
 * ```
 *
 * @summary Accessible placeholder group for loading content.
 */
export function EvoSkeleton({
  a11yText = "Loading...",
  color,
  className,
  children,
  ...rest
}: EvoSkeletonProps) {
  return (
    <div
      {...rest}
      role="img"
      aria-label={a11yText ?? undefined}
      className={classNames(
        "skeleton",
        color && `skeleton--${color}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
