import React, { ComponentProps, FC, ReactElement, useState } from "react";
import cx from "classnames";
import { EbayNoticeContent } from "../ebay-notice-base/components/ebay-notice-content";
import NoticeContent from "../common/notice-utils/notice-content";
import { findComponent } from "../common/component-utils";
import EbayIcon from "../ebay-icon/icon";
import { Icon } from "../ebay-icon/types";
import { EbayIconButton } from "../ebay-icon-button";
import { EducationDismissHandler } from "./types";

import { EbayEducationNoticeTitle, EbayEducationNoticeFooter } from "./index";
import { EbayIconClose16 } from "../ebay-icon/icons/ebay-icon-close-16";
import { EbayIconLightbulb24 } from "../ebay-icon/icons/ebay-icon-lightbulb-24";

export type Props = ComponentProps<"section"> & {
    a11yIconText?: string;
    a11yDismissText?: string;
    onDismiss?: EducationDismissHandler;
    dismissed?: boolean;
    educationIcon?: Icon | ReactElement;
    iconClass?: string;
    variant?: "prominent" | "none";
    iconVariant?: "prominent" | "none";
};

const EbayEducationNotice: FC<Props> = ({
    children,
    className,
    a11yIconText,
    variant = "none",
    iconVariant = "none",
    a11yDismissText,
    educationIcon = (
        <EbayIconLightbulb24 prominent={iconVariant === "prominent"} a11yText={a11yIconText} a11yVariant="label" />
    ),
    iconClass,
    dismissed = false,
    onDismiss = () => {},
    ...rest
}) => {
    const [isDismissed, setIsDismissed] = useState(dismissed);

    const content = findComponent(children, EbayNoticeContent);
    const titleComponent = findComponent(children, EbayEducationNoticeTitle);
    const footerComponent = findComponent(children, EbayEducationNoticeFooter);

    const isProminent = variant === "prominent";
    const isIconProminent = iconVariant === "prominent";

    const handleDismissed: EducationDismissHandler = (event) => {
        setIsDismissed(true);
        onDismiss(event);
    };

    if (!titleComponent) {
        throw new Error(
            `<EbayEducationNoticeTitle>: Please use a <EbayEducationNoticeTitle> that defines the content of the notice`,
        );
    }

    return isDismissed || dismissed ? null : (
        <section
            aria-roledescription="Notice"
            {...rest}
            className={cx(className, `education-notice`, {
                "education-notice--prominent": isProminent,
            })}
        >
            <div className="education-notice__header">
                {typeof educationIcon === "string" ? (
                    <EbayIcon
                        name={educationIcon}
                        className={iconClass}
                        prominent={isIconProminent}
                        a11yText={a11yIconText}
                        a11yVariant="label"
                    />
                ) : (
                    educationIcon
                )}

                {titleComponent}
                {a11yDismissText && (
                    <EbayIconButton
                        aria-label={a11yDismissText}
                        size="small"
                        className="education-notice__dismiss"
                        onClick={handleDismissed}
                        icon={<EbayIconClose16 />}
                    />
                )}
            </div>
            <NoticeContent {...content?.props} type="education" />
            {footerComponent}
        </section>
    );
};

export default EbayEducationNotice;
