import classNames from "classnames";
import { EvoIconSpinner20 } from "../icon/icons/spinner-20";
import { EvoIconSpinner24 } from "../icon/icons/spinner-24";
import { EvoIconSpinner30 } from "../icon/icons/spinner-30";
import type { EvoProgressSpinnerProps } from "./types";
import "@ebay/skin/progress-spinner.mjs";

export function EvoProgressSpinner({
  a11yText = "Loading",
  size,
  className,
  ...rest
}: EvoProgressSpinnerProps) {
  const SpinnerIcon =
    size === "large"
      ? EvoIconSpinner30
      : size === "small"
        ? EvoIconSpinner20
        : EvoIconSpinner24;

  return (
    <span
      {...rest}
      aria-label={a11yText ?? undefined}
      className={classNames(
        "progress-spinner",
        size === "large" && "progress-spinner--large",
        className,
      )}
      role="img"
    >
      <SpinnerIcon />
    </span>
  );
}
