import classNames from "classnames";
import type { EvoDialogBannerProps } from "./types";

/**
 * A banner adds visual context to an expressive dialog. Use a background image
 * or provide custom content when it helps set the tone for the task.
 *
 * Pass the banner to `EvoDialog` through its `banner` prop.
 *
 * @summary Expressive banner region for a dialog.
 */
export function EvoDialogBanner({
  src,
  position,
  className,
  style,
  children,
  ...rest
}: EvoDialogBannerProps) {
  return (
    <div
      {...rest}
      className={classNames("dialog__image", className)}
      style={{
        ...style,
        backgroundImage: src ? `url(${src})` : style?.backgroundImage,
        backgroundPosition: position ?? style?.backgroundPosition,
      }}
    >
      {children}
    </div>
  );
}
