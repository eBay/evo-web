import type { ComponentProps } from "react";
import classNames from "classnames";
import type { EvoSkeletonImageProps, SupportedElements } from "./types";

/**
 * Image-shaped placeholder for an `EvoSkeleton` group.
 *
 * @summary Loading image shape.
 */
export function EvoSkeletonImage<T extends SupportedElements = "div">({
  as,
  className,
  ...rest
}: EvoSkeletonImageProps<T>) {
  const classes = classNames("skeleton__image", className);
  if (as === "span") {
    return <span {...(rest as ComponentProps<"span">)} className={classes} />;
  }
  return <div {...(rest as ComponentProps<"div">)} className={classes} />;
}
