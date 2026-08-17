import classNames from "classnames";
import { EvoIconRadioChecked18 } from "../icon/icons/radio-checked-18";
import { EvoIconRadioChecked24 } from "../icon/icons/radio-checked-24";
import { EvoIconRadioUnchecked18 } from "../icon/icons/radio-unchecked-18";
import { EvoIconRadioUnchecked24 } from "../icon/icons/radio-unchecked-24";
import type { EvoRadioProps } from "./types";
import "@ebay/skin/radio.mjs";

export function EvoRadio({
  className,
  ref,
  size,
  style,
  ...rest
}: EvoRadioProps) {
  const isLarge = size === "large";

  return (
    <span
      className={classNames("radio", isLarge && "radio--large", className)}
      style={style}
    >
      <input {...rest} ref={ref} className="radio__control" type="radio" />
      <span className="radio__icon" hidden>
        {isLarge ? (
          <>
            <EvoIconRadioUnchecked24 className="radio__unchecked" />
            <EvoIconRadioChecked24 className="radio__checked" />
          </>
        ) : (
          <>
            <EvoIconRadioUnchecked18 className="radio__unchecked" />
            <EvoIconRadioChecked18 className="radio__checked" />
          </>
        )}
      </span>
    </span>
  );
}
