import { useId, useState } from "react";
import classNames from "classnames";
import { EvoIconAttentionFilled16 } from "../icon/icons/attention-filled-16";
import { EvoIconConfirmationFilled16 } from "../icon/icons/confirmation-filled-16";
import { EvoIconInformationFilled16 } from "../icon/icons/information-filled-16";
import { EvoIconClose16 } from "../icon/icons/close-16";
import { PageNoticeProvider } from "./context";
import type { EvoPageNoticeProps, PageNoticeStatus } from "./types";
import "@ebay/skin/page-notice.mjs";

const icons = {
  attention: EvoIconAttentionFilled16,
  confirmation: EvoIconConfirmationFilled16,
  information: EvoIconInformationFilled16,
} satisfies Record<PageNoticeStatus, typeof EvoIconAttentionFilled16>;

const defaultA11yText: Record<PageNoticeStatus, string> = {
  attention: "Attention",
  confirmation: "Confirmation",
  information: "Information",
};

/**
 * Page notices communicate important information within a page section.
 *
 * `EvoPageNotice` renders a labeled status icon and contains the named
 * `EvoPageNoticeMain` region. Place title and body content inside that region;
 * place `EvoPageNoticeCTA` or `EvoPageNoticeFooter` after it. An
 * `a11yDismissText` adds a keyboard accessible dismiss button. When using the
 * controlled `dismissed` prop, update it in `onDismiss` to hide the notice.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoPageNotice,
 *   EvoPageNoticeMain,
 *   EvoPageNoticeTitle,
 * } from "@evo-web/react/page-notice";
 *
 * <EvoPageNotice status="confirmation" a11yText="Order confirmed">
 *   <EvoPageNoticeMain>
 *     <EvoPageNoticeTitle>Your order is in</EvoPageNoticeTitle>
 *     <p>We will email you when it ships.</p>
 *   </EvoPageNoticeMain>
 * </EvoPageNotice>
 * ```
 *
 * @summary Page notice with a status icon and optional actions.
 */
export function EvoPageNotice({
  a11yDismissText,
  a11yIconText,
  a11yRoleDescription,
  a11yText,
  children,
  className,
  dismissed,
  icon,
  onCtaClick,
  onDismiss,
  ref,
  status = "attention",
  ...rest
}: EvoPageNoticeProps) {
  const generatedId = useId();
  const [internalDismissed, setInternalDismissed] = useState(false);
  const isDismissed = dismissed !== undefined ? dismissed : internalDismissed;
  const label = a11yText ?? defaultA11yText[status];
  const headerId = `${generatedId}-status`;
  const Icon = icons[status];

  if (isDismissed) {
    return null;
  }

  return (
    <PageNoticeProvider onCtaClick={onCtaClick}>
      <section
        {...rest}
        ref={ref}
        aria-label={icon === "none" || a11yIconText ? label : undefined}
        aria-labelledby={icon === "none" || a11yIconText ? undefined : headerId}
        aria-roledescription={a11yRoleDescription}
        className={classNames(
          "page-notice",
          `page-notice--${status}`,
          className,
        )}
      >
        {icon !== "none" && (
          <div className="page-notice__header" id={headerId}>
            <Icon a11yText={a11yIconText ?? label} a11yVariant="label" />
          </div>
        )}
        {children}
        {a11yDismissText && (
          <div className="page-notice__footer">
            <button
              type="button"
              aria-label={a11yDismissText}
              className="fake-link page-notice__dismiss"
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
    </PageNoticeProvider>
  );
}
