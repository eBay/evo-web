import classNames from "classnames";
import { EvoIconAttentionFilled16 } from "../icon/icons/attention-filled-16";
import { EvoIconConfirmationFilled16 } from "../icon/icons/confirmation-filled-16";
import { EvoIconInformationFilled16 } from "../icon/icons/information-filled-16";
import { EvoIconLightbulb24 } from "../icon/icons/lightbulb-24";
import { EvoIconClose16 } from "../icon/icons/close-16";
import { EvoIconButton } from "../icon-button/icon-button";
import { useEducationNotice } from "./context";
import type { EvoEducationNoticeHeaderProps } from "./types";

const statusIcons = {
  attention: EvoIconAttentionFilled16,
  confirmation: EvoIconConfirmationFilled16,
  information: EvoIconInformationFilled16,
};

/**
 * Header region containing the icon, title, and optional dismiss button.
 * Place `EvoEducationNoticeTitle` inside this component.
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
  const Icon = notice.status ? statusIcons[notice.status] : EvoIconLightbulb24;

  return (
    <div
      {...rest}
      ref={ref}
      id={notice.headerId}
      className={classNames("education-notice__header", className)}
    >
      {notice.icon !== "none" &&
        (notice.educationIcon && !notice.status ? (
          notice.educationIcon
        ) : (
          <Icon
            a11yText={notice.a11yIconText ?? notice.a11yText}
            a11yVariant="label"
            prominent={notice.iconVariant === "prominent"}
          />
        ))}
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
