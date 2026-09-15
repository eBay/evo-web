import classNames from "classnames";
import type { EvoFileInputDescriptionProps } from "./types";

/**
 * States accepted formats or upload limits for the file input. It belongs
 * between the header and picker action.
 *
 * @summary Supporting file input guidance.
 */
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
