import classNames from "classnames";
import type { EvoDialogBannerProps } from "./types";

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
