import React, { FC, useEffect, ReactNode } from "react";
import classNames from "classnames";
import { EbayNoticeContent } from "../ebay-notice-base/components/ebay-notice-content";
import NoticeContent from "../common/notice-utils/notice-content";
import { findComponent } from "../common/component-utils";
import { EbayIcon, Icon } from "../ebay-icon";
import { NoticeStatus } from "./types";

type Props = React.ComponentProps<"div"> & {
    status?: NoticeStatus;
    onNoticeShow?: () => void;
    "aria-label": string;
    hidden?: boolean;
    className?: string;
    children?: ReactNode;
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

    return (
        <div {...rest} className={classNames(className, "inline-notice", { [`inline-notice--${status}`]: !isGeneral })}>
            {!isGeneral ? (
                <span className="inline-notice__header">
                    <EbayIcon name={`${status}Filled16` as Icon} a11yText={ariaLabel} a11yVariant="label" />
                </span>
            ) : null}
            <NoticeContent {...content.props} type="inline" />
        </div>
    );
};

export default EbayInlineNotice;
