import type { ComponentProps } from "react";
import classNames from "classnames";
import type { EvoSkeletonTextboxProps, SupportedElements } from "./types";

/**
 * Textbox-shaped placeholder for an `EvoSkeleton` group.
 *
 * @summary Loading textbox shape.
 */
export function EvoSkeletonTextbox<T extends SupportedElements = "div">({
  as,
  className,
  ...rest
}: EvoSkeletonTextboxProps<T>) {
  const classes = classNames("skeleton__textbox", className);
  if (as === "span") {
    return <span {...(rest as ComponentProps<"span">)} className={classes} />;
  }
  return <div {...(rest as ComponentProps<"div">)} className={classes} />;
}
