import React, { FC, useEffect, ReactNode } from "react";
import classNames from "classnames";
import { EbayNoticeContent } from "../ebay-notice-base/components/ebay-notice-content";
import NoticeContent from "../common/notice-utils/notice-content";
import { findComponent } from "../common/component-utils";
import { NoticeStatus } from "./types";
import { EbayIconAttentionFilled16 } from "../ebay-icon/icons/ebay-icon-attention-filled-16";
import { EbayIconConfirmationFilled16 } from "../ebay-icon/icons/ebay-icon-confirmation-filled-16";
import { EbayIconInformationFilled16 } from "../ebay-icon/icons/ebay-icon-information-filled-16";
import { EbayIconComponent } from "../ebay-icon/icons/types";

type Props = React.ComponentProps<"div"> & {
    status?: NoticeStatus;
    onNoticeShow?: () => void;
    "aria-label": string;
    hidden?: boolean;
    className?: string;
    children?: ReactNode;
};

const icons: Record<Exclude<NoticeStatus, "general">, EbayIconComponent> = {
    attention: EbayIconAttentionFilled16,
    confirmation: EbayIconConfirmationFilled16,
    information: EbayIconInformationFilled16,
};

const EbayInlineNotice: FC<Props> = ({
    className,
    status = "general",
    children,
    hidden = false,
    "aria-label": ariaLabel,
    onNoticeShow = () => {},
    ...rest
}) => {
    useEffect(() => {
        if (!hidden) {
            onNoticeShow();
        }
    }, [hidden]);

    if (hidden) {
        return null;
    }

    const content = findComponent(children, EbayNoticeContent);

    if (!content) {
        throw new Error(`EbayInlineNotice: Please use a EbayNoticeContent that defines the content of the notice`);
    }

    const isGeneral = status === `general`;

    const Icon = !isGeneral ? icons[status] : null;

    return (
        <div {...rest} className={classNames(className, "inline-notice", { [`inline-notice--${status}`]: !isGeneral })}>
            {!isGeneral ? (
                <span className="inline-notice__header">
                    <Icon a11yText={ariaLabel} a11yVariant="label" />
                </span>
            ) : null}
            <NoticeContent {...content.props} type="inline" />
        </div>
    );
};

export default EbayInlineNotice;
