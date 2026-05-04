import classNames from "classnames";
import type { EvoDetailsSummaryProps } from "./types";
import { useDetailsContext } from "./context";
import { EvoIconChevronDown16 } from "../icon/icons/chevron-down-16";

export function EvoDetailsSummary({
  children,
  className,
  ...rest
}: EvoDetailsSummaryProps) {
  const { size, alignment } = useDetailsContext();

  return (
    <summary
      className={classNames(
        "details__summary",
        size === "small" && "details__summary--small",
        alignment === "center" && "details__summary--center",
        className,
      )}
      {...rest}
    >
      {children}
      <span className="details__icon" hidden>
        <EvoIconChevronDown16 />
      </span>
    </summary>
  );
}
