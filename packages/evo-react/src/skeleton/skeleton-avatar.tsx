import type { ComponentProps } from "react";
import classNames from "classnames";
import type { EvoSkeletonAvatarProps, SupportedElements } from "./types";

/**
 * Avatar-shaped placeholder for an `EvoSkeleton` group.
 *
 * @summary Loading avatar shape.
 */
export function EvoSkeletonAvatar<T extends SupportedElements = "div">({
  as,
  className,
  ...rest
}: EvoSkeletonAvatarProps<T>) {
  const classes = classNames("skeleton__avatar", className);
  if (as === "span") {
    return <span {...(rest as ComponentProps<"span">)} className={classes} />;
  }
  return <div {...(rest as ComponentProps<"div">)} className={classes} />;
}
