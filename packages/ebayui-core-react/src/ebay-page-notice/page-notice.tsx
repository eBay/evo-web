import React, { ComponentProps, FC, KeyboardEventHandler, MouseEventHandler, useState } from "react";
import classNames from "classnames";
import NoticeContent from "../common/notice-utils/notice-content";
import { EbayNoticeContent } from "../ebay-notice-base/components/ebay-notice-content";
import { EbayPageNoticeFooter } from "./index";
import { findComponent } from "../utils";
import { EbayIconClose16 } from "../ebay-icon/icons/ebay-icon-close-16";
import { EbayIconComponent } from "../ebay-icon/icons/types";
import { EbayIconAttentionFilled16 } from "../ebay-icon/icons/ebay-icon-attention-filled-16";
import { EbayIconConfirmationFilled16 } from "../ebay-icon/icons/ebay-icon-confirmation-filled-16";
import { EbayIconInformationFilled16 } from "../ebay-icon/icons/ebay-icon-information-filled-16";

export type PageNoticeStatus = "general" | "attention" | "confirmation" | "information";
export type Props = ComponentProps<"section"> & {
    status?: PageNoticeStatus;
    "aria-label"?: string;
    a11yDismissText?: string;
    onDismiss?: MouseEventHandler & KeyboardEventHandler;
};

const icons: Record<Exclude<PageNoticeStatus, "general">, EbayIconComponent> = {
    attention: EbayIconAttentionFilled16,
    confirmation: EbayIconConfirmationFilled16,
    information: EbayIconInformationFilled16,
};

const EbayPageNotice: FC<Props> = ({
    id,
    status = "general",
    children,
    a11yDismissText,
    "aria-label": ariaLabel,
    onDismiss = () => {},
    className,
    ...rest
}) => {
    const [dismissed, setDismissed] = useState(false);
    const content = findComponent(children, EbayNoticeContent);

    if (!content) {
        throw new Error(`EbayPageNotice: Please use a EbayNoticeContent that defines the content of the notice`);
    }

    const handleDismissed: ComponentProps<"button">["onClick"] = (event) => {
        setDismissed(true);
        onDismiss(event);
    };

    const Icon = status !== "general" ? icons[status] : null;

    return dismissed ? null : (
        <section
            {...rest}
            aria-labelledby={id || `${status}-status`}
            className={classNames("page-notice", className, {
                [`page-notice--${status}`]: status !== "general",
            })}
        >
            {status !== `general` ? (
                <div className="page-notice__header" id={id || `${status}-status`}>
                    <Icon a11yText={ariaLabel} a11yVariant="label" />
                </div>
            ) : null}
            <NoticeContent {...content.props} type="page" />
            {children}
            {a11yDismissText && (
                <EbayPageNoticeFooter>
                    <button
                        aria-label={a11yDismissText}
                        className="fake-link page-notice__dismiss"
                        onClick={handleDismissed}
                    >
                        <EbayIconClose16 />
                    </button>
                </EbayPageNoticeFooter>
            )}
        </section>
    );
};

export default EbayPageNotice;
