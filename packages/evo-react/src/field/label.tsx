import classNames from "classnames";
import type { EvoLabelProps } from "./types";
import "@ebay/skin/field.mjs";

/**
 * Names a field control. Set `htmlFor` to the control's `id`; `required` adds
 * only the visual mark, so the control also needs native `required`.
 *
 * @summary Associated field label.
 */
export function EvoLabel({
  className,
  children,
  stacked = false,
  required = false,
  position = "start",
  ...rest
}: EvoLabelProps) {
  return (
    <label
      {...rest}
      className={classNames(
        "field__label",
        stacked && "field__label--stacked",
        position === "end" && "field__label--end",
        className,
      )}
    >
      {children}
      {required && (
        <>
          {" "}
          <sup aria-hidden="true">*</sup>
        </>
      )}
    </label>
  );
}
