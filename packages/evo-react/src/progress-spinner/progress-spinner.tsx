import classNames from "classnames";
import { EvoIconSpinner20 } from "../icon/icons/spinner-20";
import { EvoIconSpinner24 } from "../icon/icons/spinner-24";
import { EvoIconSpinner30 } from "../icon/icons/spinner-30";
import type { EvoProgressSpinnerProps } from "./types";
import "@ebay/skin/progress-spinner.mjs";

/**
 * A progress spinner indicates that an operation is still in progress.
 *
 * The spinner is indeterminate and does not communicate a percentage. `a11yText`
 * must describe what is loading.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoProgressSpinner } from "@evo-web/react/progress-spinner";
 *
 * <EvoProgressSpinner a11yText="Loading results" />
 * ```
 *
 * @summary Indeterminate loading indicator.
 */
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
