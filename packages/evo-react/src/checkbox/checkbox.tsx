import classNames from "classnames";
import { EvoIconCheckboxChecked18 } from "../icon/icons/checkbox-checked-18";
import { EvoIconCheckboxChecked24 } from "../icon/icons/checkbox-checked-24";
import { EvoIconCheckboxUnchecked18 } from "../icon/icons/checkbox-unchecked-18";
import { EvoIconCheckboxUnchecked24 } from "../icon/icons/checkbox-unchecked-24";
import type { EvoCheckboxProps } from "./types";
import "@ebay/skin/checkbox.mjs";

export function EvoCheckbox({
  className,
  ref,
  size,
  style,
  ...rest
}: EvoCheckboxProps) {
  const isLarge = size === "large";

  return (
    <span
      className={classNames(
        "checkbox",
        isLarge && "checkbox--large",
        className,
      )}
      style={style}
    >
      <input
        {...rest}
        ref={ref}
        className="checkbox__control"
        type="checkbox"
      />
      <span className="checkbox__icon" hidden>
        {isLarge ? (
          <>
            <EvoIconCheckboxUnchecked24 className="checkbox__unchecked" />
            <EvoIconCheckboxChecked24 className="checkbox__checked" />
          </>
        ) : (
          <>
            <EvoIconCheckboxUnchecked18 className="checkbox__unchecked" />
            <EvoIconCheckboxChecked18 className="checkbox__checked" />
          </>
        )}
      </span>
    </span>
  );
}
