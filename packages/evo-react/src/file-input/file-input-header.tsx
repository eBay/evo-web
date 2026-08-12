import classNames from "classnames";
import type { EvoFileInputHeaderProps } from "./types";

export function EvoFileInputHeader({
  as: As = "span",
  className,
  children,
  ...rest
}: EvoFileInputHeaderProps) {
  return (
    <As
      {...rest}
      className={classNames("file-input__content-header", className)}
    >
      {children}
    </As>
  );
}
