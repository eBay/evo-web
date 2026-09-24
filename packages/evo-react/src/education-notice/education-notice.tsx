import { useId, useState } from "react";
import classNames from "classnames";
import { EducationNoticeProvider } from "./context";
import type { EvoEducationNoticeProps } from "./types";
import "@ebay/skin/education-notice.mjs";

/**
 * Education notices explain a concept or feature within a page.
 *
 * Place `EvoEducationNoticeTitle` inside `EvoEducationNoticeHeader`, followed
 * by `EvoEducationNoticeMain` and an optional `EvoEducationNoticeFooter` or
 * `EvoEducationNoticeCTA`. The header supplies the default lightbulb, an
 * optional status icon, and an optional dismiss control. When using the
 * controlled `dismissed` prop, update it in `onDismiss` to hide the notice.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoEducationNotice,
 *   EvoEducationNoticeHeader,
 *   EvoEducationNoticeMain,
 *   EvoEducationNoticeTitle,
 * } from "@evo-web/react/education-notice";
 *
 * <EvoEducationNotice a11yText="Listing guidance">
 *   <EvoEducationNoticeHeader>
 *     <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
 *   </EvoEducationNoticeHeader>
 *   <EvoEducationNoticeMain>
 *     Describe the item and include its condition.
 *   </EvoEducationNoticeMain>
 * </EvoEducationNotice>
 * ```
 *
 * @summary Educational notice with title, content, and optional dismissal.
 */
export function EvoEducationNotice({
  a11yDismissText,
  a11yIconText,
  a11yRoleDescription = "Notice",
  a11yText,
  children,
  className,
  dismissed,
  educationIcon,
  icon,
  iconVariant = "none",
  onCtaClick,
  onDismiss,
  ref,
  status,
  variant = "none",
  ...rest
}: EvoEducationNoticeProps) {
  const headerId = useId();
  const [internalDismissed, setInternalDismissed] = useState(false);
  const isDismissed = dismissed !== undefined ? dismissed : internalDismissed;
  const label = a11yText ?? "Education notice";
  const labelsFromHeader =
    icon !== "none" && !(educationIcon && !status) && !a11yIconText;

  if (isDismissed) {
    return null;
  }

  return (
    <EducationNoticeProvider
      headerId={headerId}
      status={status}
      a11yText={label}
      a11yIconText={a11yIconText}
      a11yDismissText={a11yDismissText}
      icon={icon}
      educationIcon={educationIcon}
      iconVariant={iconVariant}
      dismiss={(event) => {
        if (dismissed === undefined) {
          setInternalDismissed(true);
        }
        onDismiss?.(event);
      }}
      onCtaClick={onCtaClick}
    >
      <section
        {...rest}
        ref={ref}
        aria-label={labelsFromHeader ? undefined : label}
        aria-labelledby={labelsFromHeader ? headerId : undefined}
        aria-roledescription={a11yRoleDescription}
        className={classNames(
          "education-notice",
          variant === "prominent" && "education-notice--prominent",
          className,
        )}
      >
        {children}
      </section>
    </EducationNoticeProvider>
  );
}
