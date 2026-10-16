import { useState } from "react";
import classNames from "classnames";
import { EducationNoticeProvider } from "./context";
import type { EvoEducationNoticeProps } from "./types";
import "@ebay/skin/education-notice.mjs";

/**
 * Education notices explain a concept or feature within a page.
 *
 * `a11yText` names the notice region. Compose
 * `EvoEducationNoticeHeader` with `EvoEducationNoticeTitle`, followed by
 * `EvoEducationNoticeMain` and an optional `EvoEducationNoticeFooter`.
 * Include `EvoEducationNoticeIcon` in the header to show an icon. The header
 * can also contain the optional dismiss button.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoEducationNotice,
 *   EvoEducationNoticeFooter,
 *   EvoEducationNoticeHeader,
 *   EvoEducationNoticeIcon,
 *   EvoEducationNoticeMain,
 *   EvoEducationNoticeTitle,
 * } from "@evo-web/react/education-notice";
 *
 * <EvoEducationNotice a11yText="Listing guidance">
 *   <EvoEducationNoticeHeader>
 *     <EvoEducationNoticeIcon />
 *     <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
 *   </EvoEducationNoticeHeader>
 *   <EvoEducationNoticeMain>Describe the condition.</EvoEducationNoticeMain>
 *   <EvoEducationNoticeFooter>
 *     <a href="/seller-center">Read listing tips</a>
 *   </EvoEducationNoticeFooter>
 * </EvoEducationNotice>
 * ```
 *
 * @summary Educational notice with title, content, and optional dismissal.
 */
export function EvoEducationNotice({
  a11yDismissText,
  a11yRoleDescription = "Notice",
  a11yText = "Education notice",
  children,
  className,
  dismissed,
  onDismiss,
  ref,
  variant = "none",
  ...rest
}: EvoEducationNoticeProps) {
  const [internalDismissed, setInternalDismissed] = useState(false);
  const isDismissed = dismissed !== undefined ? dismissed : internalDismissed;

  if (isDismissed) {
    return null;
  }

  return (
    <EducationNoticeProvider
      a11yText={a11yText}
      a11yDismissText={a11yDismissText}
      dismiss={(event) => {
        if (dismissed === undefined) {
          setInternalDismissed(true);
        }
        onDismiss?.(event);
      }}
    >
      <section
        {...rest}
        ref={ref}
        aria-label={a11yText}
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
