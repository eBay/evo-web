import classNames from "classnames";
import { EvoIconEekArrow } from "../icon/icons/eek-arrow";
import { EvoIconEekRangeArrow } from "../icon/icons/eek-range-arrow";
import type { EvoEekProps } from "./types";
import "@ebay/skin/eek.mjs";

const VALID_RANGES: Partial<Record<string, readonly string[]>> = {
  "A+++": ["D", "E", "G"],
  "A++": ["E", "G"],
  "A+": ["F", "G"],
  A: ["G"],
};

function getRatingPosition(max: string, min: string, rating: string) {
  const validMinimums = VALID_RANGES[max];
  if (!validMinimums?.includes(min)) {
    return null;
  }

  let current = max;
  let position = 1;

  while (current !== rating) {
    position++;
    if (current === min) {
      return null;
    }

    current =
      current.length > 1
        ? current.slice(0, current.length - 1)
        : String.fromCharCode(current.charCodeAt(0) + 1);
  }

  return Math.min(position, 7);
}

export function EvoEek({
  a11yText,
  max,
  min,
  rating,
  size,
  className,
  ...rest
}: EvoEekProps) {
  const ratingPosition = getRatingPosition(max, min, rating);

  return (
    <div
      {...rest}
      aria-label={a11yText ?? undefined}
      className={classNames(
        "eek",
        ratingPosition && `eek--rating-${ratingPosition}`,
        size === "large" && "eek--large",
        className,
      )}
      role="img"
    >
      <div className="eek__container" aria-hidden="true">
        <span className="eek__rating-range">
          <span>{max}</span>
          <EvoIconEekRangeArrow />
          <span>{min}</span>
        </span>
        <span className="eek__rating">{rating}</span>
      </div>
      <EvoIconEekArrow />
    </div>
  );
}
