import type { ComponentProps, JSX } from "react";
import classNames from "classnames";
import type {
  EvoToggleButtonFillImageProps,
  EvoToggleButtonImageProps,
  EvoToggleButtonInlineImageProps,
} from "./types";

/**
 * Shows an image before the toggle button content. Without `fillPlacement`, it
 * renders an `<img>` that receives the remaining attributes. With
 * `fillPlacement`, the image covers its frame as a background on a `<span>`
 * that receives the remaining attributes. Use it instead of
 * `EvoToggleButtonIcon`, not alongside it.
 *
 * @summary Toggle button image media.
 */
export function EvoToggleButtonImage(
  props: EvoToggleButtonFillImageProps,
): JSX.Element;
export function EvoToggleButtonImage(
  props: EvoToggleButtonInlineImageProps,
): JSX.Element;
export function EvoToggleButtonImage({
  src,
  alt,
  fillPlacement,
  ...rest
}: EvoToggleButtonImageProps) {
  if (fillPlacement !== undefined) {
    const { className, style, ...spanProps } = rest as ComponentProps<"span">;

    return (
      <span className="toggle-button__image-container">
        <span
          {...spanProps}
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
          aria-hidden={alt ? undefined : true}
          className={classNames("toggle-button__image", className)}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: fillPlacement,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            ...style,
          }}
        />
      </span>
    );
  }

  return (
    <span className="toggle-button__image-container">
      <span className="toggle-button__image">
        <img {...(rest as ComponentProps<"img">)} src={src} alt={alt} />
      </span>
    </span>
  );
}
