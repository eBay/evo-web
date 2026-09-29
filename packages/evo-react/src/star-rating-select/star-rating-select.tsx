import { useId, useState } from "react";
import classNames from "classnames";
import { EvoIconStarDynamic } from "../icon/icons/star-dynamic";
import type { EvoStarRatingSelectProps, StarRatingSelectValue } from "./types";
import "@ebay/skin/star-rating-select.mjs";

const STAR_VALUES: StarRatingSelectValue[] = [1, 2, 3, 4, 5];
const DEFAULT_STAR_TEXT: readonly [string, string, string, string, string] = [
  "1 star",
  "2 stars",
  "3 stars",
  "4 stars",
  "5 stars",
];

/**
 * Lets users pick a rating from 1 to 5 with five native radio buttons.
 *
 * Use `value` to control the rating or `defaultValue` to set a starting
 * rating. `a11yText` names the group and `a11yStarText` names each star. For a
 * read-only score, use `EvoStarRating`.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoStarRatingSelect } from "@evo-web/react/star-rating-select";
 *
 * <EvoStarRatingSelect
 *   name="purchase-rating"
 *   a11yText="Rate your purchase"
 *   a11yStarText={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
 *   onValueChange={(value) => setRating(value)}
 * />
 * ```
 *
 * @summary Interactive five-star rating with native radios.
 */
export function EvoStarRatingSelect({
  value,
  defaultValue = 0,
  a11yText = "Rating",
  a11yStarText = DEFAULT_STAR_TEXT,
  disabled,
  name,
  onValueChange,
  className,
  ...rest
}: EvoStarRatingSelectProps) {
  const generatedId = useId();
  const radioName = name ?? `evo-star-rating-${generatedId}`;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : uncontrolledValue;

  return (
    <div
      {...rest}
      role="radiogroup"
      aria-label={a11yText ?? undefined}
      className={classNames("star-rating-select", className)}
    >
      {STAR_VALUES.map((starValue) => (
        <span className="star-rating-select__radio" key={starValue}>
          <input
            aria-label={a11yStarText[starValue - 1]}
            className={classNames("star-rating-select__control", {
              "star-rating-select__control--filled": starValue <= selectedValue,
            })}
            type="radio"
            name={radioName}
            value={starValue}
            disabled={disabled}
            checked={selectedValue === starValue}
            onChange={() => {
              if (!isControlled) {
                setUncontrolledValue(starValue);
              }
              onValueChange?.(starValue);
            }}
          />
          <span className="star-rating-select__radio-icon">
            <EvoIconStarDynamic className="star-rating__icon" />
          </span>
        </span>
      ))}
    </div>
  );
}
