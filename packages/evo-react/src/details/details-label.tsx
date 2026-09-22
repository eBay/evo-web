import classNames from "classnames";
import { createElement } from "react";
import type { ElementType } from "react";
import type { EvoDetailsLabelProps } from "./types";
import { useDetailsContext } from "./context";

/**
 * Names the content revealed by `EvoDetailsSummary`. It belongs inside the
 * summary.
 *
 * @summary Summary label.
 */
export function EvoDetailsLabel({
  children,
  className,
  ...rest
}: EvoDetailsLabelProps) {
  const { a11yHeadingTag = "span" } = useDetailsContext();
  const LabelTag: ElementType = a11yHeadingTag;

  return createElement(
    LabelTag,
    {
      ...rest,
      className: classNames("details__label", className),
    },
    children,
  );
}
