import classNames from "classnames";
import type { EvoFileInputDescriptionProps } from "./types";

export function EvoFileInputDescription({
  className,
  children,
  ...rest
}: EvoFileInputDescriptionProps) {
  return (
    <span
      {...rest}
      className={classNames("file-input__content-subheader", className)}
    >
      {children}
    </span>
  );
}
