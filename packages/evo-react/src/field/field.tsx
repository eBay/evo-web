import type { ComponentProps } from "react";
import classNames from "classnames";
import type { EvoFieldProps } from "./types";
import "@ebay/skin/field.mjs";

/**
 * Fields arrange a form control with its label, supporting text, and optional
 * related controls.
 *
 * `EvoField` supplies layout only. Connect `EvoLabel` with the control's `id`
 * through `htmlFor`, and connect `EvoFieldDescription` through the control's
 * `aria-describedby`. Use a `<fieldset>` and `<legend>` for related controls.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoField, EvoFieldDescription, EvoLabel } from "@evo-web/react/field";
 *
 * <EvoField layout="block">
 *   <EvoLabel htmlFor="listing-title" stacked required>
 *     Listing title
 *   </EvoLabel>
 *   <input id="listing-title" required aria-describedby="title-help" />
 *   <EvoFieldDescription id="title-help">
 *     Include the item's brand and model.
 *   </EvoFieldDescription>
 * </EvoField>
 * ```
 *
 * @summary Form control layout with optional label and description parts.
 */
export function EvoField({
  layout = "inline",
  className,
  children,
  ...rest
}: EvoFieldProps) {
  const classes = classNames("field", className);
  if (layout === "block") {
    return (
      <div {...(rest as ComponentProps<"div">)} className={classes}>
        {children}
      </div>
    );
  }
  return (
    <span {...(rest as ComponentProps<"span">)} className={classes}>
      {children}
    </span>
  );
}
