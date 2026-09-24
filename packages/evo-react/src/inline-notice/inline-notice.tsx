import { useEffect, useEffectEvent } from "react";
import classNames from "classnames";
import { EvoIconAttentionFilled16 } from "../icon/icons/attention-filled-16";
import { EvoIconConfirmationFilled16 } from "../icon/icons/confirmation-filled-16";
import { EvoIconInformationFilled16 } from "../icon/icons/information-filled-16";
import type { EvoInlineNoticeProps, InlineNoticeStatus } from "./types";
import "@ebay/skin/inline-notice.mjs";

const icons = {
  attention: EvoIconAttentionFilled16,
  confirmation: EvoIconConfirmationFilled16,
  information: EvoIconInformationFilled16,
} satisfies Record<InlineNoticeStatus, typeof EvoIconAttentionFilled16>;

const defaultA11yText: Record<InlineNoticeStatus, string> = {
  attention: "Attention",
  confirmation: "Confirmation",
  information: "Information",
};

/**
 * Inline notices give concise feedback within the current page content.
 *
 * `EvoInlineNotice` displays a labeled status icon and a named
 * `EvoInlineNoticeMain` region. Place the main region after the icon so the
 * Skin structure remains intact. `hidden` removes the notice from the DOM and
 * `onNoticeShow` runs when it becomes visible.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoInlineNotice,
 *   EvoInlineNoticeMain,
 * } from "@evo-web/react/inline-notice";
 *
 * <EvoInlineNotice status="confirmation" a11yText="Confirmed">
 *   <EvoInlineNoticeMain>Payment received.</EvoInlineNoticeMain>
 * </EvoInlineNotice>
 * ```
 *
 * @summary Inline status message with a labeled icon.
 */
export function EvoInlineNotice({
  a11yText,
  children,
  className,
  hidden = false,
  onNoticeShow,
  ref,
  status = "attention",
  ...rest
}: EvoInlineNoticeProps) {
  const notifyShow = useEffectEvent(() => onNoticeShow?.());

  useEffect(() => {
    if (!hidden) {
      notifyShow();
    }
  }, [hidden]);

  if (hidden) {
    return null;
  }

  const Icon = icons[status];

  return (
    <div
      {...rest}
      ref={ref}
      className={classNames(
        "inline-notice",
        `inline-notice--${status}`,
        className,
      )}
    >
      <span className="inline-notice__header">
        <Icon
          a11yText={a11yText ?? defaultA11yText[status]}
          a11yVariant="label"
        />
      </span>
      {children}
    </div>
  );
}
