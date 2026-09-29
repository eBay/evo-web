import classNames from "classnames";
import { EvoIconStarDynamic } from "../icon/icons/star-dynamic";
import type { EvoStarRatingProps } from "./types";
import "@ebay/skin/star-rating.mjs";

const STAR_POSITIONS = [1, 2, 3, 4, 5];

/**
 * Star rating displays a score without allowing the user to change it. Use
 * `EvoStarRatingSelect` when a user must choose a rating.
 *
 * `EvoStarRating` renders one labeled image with five decorative star icons.
 * Its numeric `value` is limited to `0`–`5` and shown in half-star steps.
 * Override `a11yText` when the surrounding content needs a more specific label.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoStarRating } from "@evo-web/react/star-rating";
 *
 * <EvoStarRating value={4.5} a11yText="Seller rating: 4.5 out of 5" />
 * ```
 *
 * @summary Display-only star rating.
 */
export function EvoStarRating({
  value = 0,
  a11yText,
  className,
  ...rest
}: EvoStarRatingProps) {
  const rounded = Number.isFinite(value)
    ? Math.round(Math.max(0, Math.min(5, value)) * 2) / 2
    : 0;
  const whole = Math.floor(rounded);
  const dataStars = rounded % 1 ? `${whole}-5` : `${whole}`;
  const accessibleLabel =
    a11yText === undefined ? `Rating: ${rounded} out of 5` : a11yText;

  return (
    <div
      {...rest}
      role="img"
      aria-label={accessibleLabel ?? undefined}
      className={classNames("star-rating", className)}
      data-stars={dataStars}
    >
      {STAR_POSITIONS.map((position) => (
        <EvoIconStarDynamic key={position} className="star-rating__icon" />
      ))}
    </div>
  );
}
