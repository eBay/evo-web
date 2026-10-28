import classNames from "classnames";
import { EvoIconClose16 } from "../icon/icons/close-16";
import { EvoIconButton } from "../icon-button/icon-button";
import { useEducationNotice } from "./context";
import type { EvoEducationNoticeHeaderProps } from "./types";

/**
 * Header for the notice title and optional dismiss button. Place
 * `EvoEducationNoticeIcon` inside it to render an icon.
 *
 * @summary Header of an education notice.
 */
export function EvoEducationNoticeHeader({
  children,
  className,
  ref,
  ...rest
}: EvoEducationNoticeHeaderProps) {
  const notice = useEducationNotice();

  return (
    <div
      {...rest}
      ref={ref}
      className={classNames("education-notice__header", className)}
    >
      {children}
      {notice.a11yDismissText && (
        <EvoIconButton
          a11yText={notice.a11yDismissText}
          size="small"
          className="education-notice__dismiss"
          onClick={notice.dismiss}
        >
          <EvoIconClose16 />
        </EvoIconButton>
      )}
    </div>
  );
}
