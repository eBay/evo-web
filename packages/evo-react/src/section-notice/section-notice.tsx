import { useId, useState } from "react";
import classNames from "classnames";
import { EvoIconAttentionFilled16 } from "../icon/icons/attention-filled-16";
import { EvoIconConfirmationFilled16 } from "../icon/icons/confirmation-filled-16";
import { EvoIconInformationFilled16 } from "../icon/icons/information-filled-16";
import { EvoIconClose16 } from "../icon/icons/close-16";
import { SectionNoticeProvider } from "./context";
import type { EvoSectionNoticeProps, SectionNoticeStatus } from "./types";
import "@ebay/skin/section-notice.mjs";

const icons = {
  attention: EvoIconAttentionFilled16,
  confirmation: EvoIconConfirmationFilled16,
  information: EvoIconInformationFilled16,
} satisfies Record<SectionNoticeStatus, typeof EvoIconAttentionFilled16>;

const defaultA11yText: Record<SectionNoticeStatus, string> = {
  attention: "Attention",
  confirmation: "Confirmation",
  information: "Information",
};

/**
 * Section notices communicate important information within a section.
 *
 * `EvoSectionNotice` contains a named `EvoSectionNoticeMain` region. Omit
 * `status` for an iconless notice, or set a status for a labeled icon. Place
 * title and body content inside the main region;
 * place `EvoSectionNoticeCTA` or `EvoSectionNoticeFooter` after it. An
 * `a11yDismissText` adds a keyboard accessible dismiss button. When using the
 * controlled `dismissed` prop, update it in `onDismiss` to hide the notice.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoSectionNotice,
 *   EvoSectionNoticeMain,
 *   EvoSectionNoticeTitle,
 * } from "@evo-web/react/section-notice";
 *
 * <EvoSectionNotice status="confirmation" a11yText="Order confirmed">
 *   <EvoSectionNoticeMain>
 *     <EvoSectionNoticeTitle>Your order is in</EvoSectionNoticeTitle>
 *     We will email you when it ships.
 *   </EvoSectionNoticeMain>
 * </EvoSectionNotice>
 * ```
 *
 * @summary Notice within a section with optional status and actions.
 */
export function EvoSectionNotice({
  a11yDismissText,
  a11yIconText,
  a11yRoleDescription = "Notice",
  a11yText,
  children,
  className,
  dismissed,
  icon,
  onCtaClick,
  onDismiss,
  ref,
  status,
  ...rest
}: EvoSectionNoticeProps) {
  const generatedId = useId();
  const [internalDismissed, setInternalDismissed] = useState(false);
  const isDismissed = dismissed !== undefined ? dismissed : internalDismissed;
  const label = a11yText ?? (status ? defaultA11yText[status] : "Notice");
  const headerId = `${generatedId}-status`;
  const Icon = status ? icons[status] : null;
  const hasIcon = Boolean(Icon && icon !== "none");

  if (isDismissed) {
    return null;
  }

  return (
    <SectionNoticeProvider onCtaClick={onCtaClick}>
      <section
        {...rest}
        ref={ref}
        aria-label={!hasIcon || a11yIconText ? label : undefined}
        aria-labelledby={hasIcon && !a11yIconText ? headerId : undefined}
        aria-roledescription={a11yRoleDescription}
        className={classNames(
          "section-notice",
          status && `section-notice--${status}`,
          className,
        )}
      >
        {hasIcon && Icon && (
          <div className="section-notice__header" id={headerId}>
            <Icon a11yText={a11yIconText ?? label} a11yVariant="label" />
          </div>
        )}
        {children}
        {a11yDismissText && (
          <div className="section-notice__footer">
            <button
              type="button"
              aria-label={a11yDismissText}
              className="fake-link section-notice__dismiss"
              onClick={(event) => {
                if (dismissed === undefined) {
                  setInternalDismissed(true);
                }
                onDismiss?.(event);
              }}
            >
              <EvoIconClose16 />
            </button>
          </div>
        )}
      </section>
    </SectionNoticeProvider>
  );
}
