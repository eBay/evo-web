import type { ComponentProps } from "react";
import classNames from "classnames";
import type { EvoSkeletonTextProps, SupportedElements } from "./types";

/**
 * Text-line placeholder for an `EvoSkeleton` group.
 *
 * @summary Loading text shape.
 */
export function EvoSkeletonText<T extends SupportedElements = "div">({
  as,
  className,
  multiline,
  size,
  ...rest
}: EvoSkeletonTextProps<T>) {
  const classes = classNames(
    "skeleton__text",
    multiline && "skeleton__text--multiline",
    size === "large" && "skeleton__text--large",
    className,
  );
  if (as === "span") {
    return <span {...(rest as ComponentProps<"span">)} className={classes} />;
  }
  return <div {...(rest as ComponentProps<"div">)} className={classes} />;
}
