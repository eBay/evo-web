import type { ComponentProps } from "react";
import classNames from "classnames";
import type { EvoSkeletonButtonProps, SupportedElements } from "./types";

/**
 * Button-shaped placeholder for an `EvoSkeleton` group.
 *
 * @summary Loading button shape.
 */
export function EvoSkeletonButton<T extends SupportedElements = "div">({
  as,
  className,
  size,
  ...rest
}: EvoSkeletonButtonProps<T>) {
  const classes = classNames(
    "skeleton__button",
    size && `skeleton__button--${size}`,
    className,
  );
  if (as === "span") {
    return <span {...(rest as ComponentProps<"span">)} className={classes} />;
  }
  return <div {...(rest as ComponentProps<"div">)} className={classes} />;
}
