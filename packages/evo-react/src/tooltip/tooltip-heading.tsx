import classNames from "classnames";
import type { ElementType } from "react";
import type { EvoTooltipHeadingProps } from "./types";

export function EvoTooltipHeading<T extends ElementType = "span">({
  as,
  className,
  children,
  ...rest
}: EvoTooltipHeadingProps<T>) {
  const Component = (as ?? "span") as ElementType;

  return (
    <Component {...rest} className={classNames("tooltip__heading", className)}>
      {children}
    </Component>
  );
}
