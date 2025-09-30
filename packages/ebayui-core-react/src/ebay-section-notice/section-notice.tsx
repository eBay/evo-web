import React, {
    ComponentProps,
    FC,
    KeyboardEventHandler,
    MouseEventHandler,
    ReactElement,
    useEffect,
    useState,
} from "react";
import cx from "classnames";
import { EbayNoticeContent } from "../ebay-notice-base/components/ebay-notice-content";
import NoticeContent from "../common/notice-utils/notice-content";
import { EbayIcon, Icon } from "../ebay-icon";
import { EbaySectionNoticeFooter } from "./index";
import { randomId } from "../common/random-id";
import { findComponent } from "../utils";
import { EbayIconLightbulb24 } from "../ebay-icon/icons/ebay-icon-lightbulb-24";
import { EbayIconComponent, EbayIconComponentProps } from "../ebay-icon/icons/types";
import { EbayIconAttentionFilled16 } from "../ebay-icon/icons/ebay-icon-attention-filled-16";
import { EbayIconConfirmationFilled16 } from "../ebay-icon/icons/ebay-icon-confirmation-filled-16";
import { EbayIconInformationFilled16 } from "../ebay-icon/icons/ebay-icon-information-filled-16";
import { EbayIconClose16 } from "../ebay-icon/icons/ebay-icon-close-16";

export type SectionNoticeStatus = "general" | "none" | "attention" | "confirmation" | "information" | "education";
export type Props = ComponentProps<"section"> & {
    status?: SectionNoticeStatus;
    "aria-label"?: string;
    "aria-roledescription"?: string;
    className?: string;
    a11yDismissText?: string;
    onDismiss?: MouseEventHandler & KeyboardEventHandler;
    educationIcon?: Icon | ReactElement;
    iconClass?: string;
    prominent?: boolean;
};

const statusIcon: Record<Exclude<SectionNoticeStatus, "general" | "none" | "education">, EbayIconComponent> = {
    attention: EbayIconAttentionFilled16,
    confirmation: EbayIconConfirmationFilled16,
    information: EbayIconInformationFilled16,
};

const EbaySectionNotice: FC<Props> = ({
    status = "general",
    children,
    className,
    "aria-label": ariaLabel,
    "aria-roledescription": ariaRoleDescription = "Notice",
    a11yDismissText,
    educationIcon,
    iconClass,
    prominent,
    onDismiss = () => {},
    ...rest
}) => {
    const [dismissed, setDismissed] = useState(false);

    const [rId, setRandomId] = useState("");

    useEffect(() => {
        setRandomId(randomId());
    }, []);

    const content = findComponent(children, EbayNoticeContent);
    const hasStatus = status !== "general" && status !== "none";
    const isEducational = status === "education";
    let icon = null;

    const iconProps: EbayIconComponentProps = {
        className: iconClass,
        a11yText: ariaLabel,
        a11yVariant: "label",
    };

    if (hasStatus) {
        if (isEducational) {
            icon = educationIcon || <EbayIconLightbulb24 {...iconProps} />;
        } else {
            const Icon = statusIcon[status];
            icon = <Icon {...iconProps} />;
        }
    }

    if (!content) {
        throw new Error(`EbaySectionNotice: Please use a EbayNoticeContent that defines the content of the notice`);
    }

    const handleDismissed: ComponentProps<"button">["onClick"] = (event) => {
        setDismissed(true);
        onDismiss(event);
    };

    return dismissed ? null : (
        <section
            {...rest}
            className={cx(className, `section-notice`, {
                [`section-notice--${status}`]: hasStatus,
                "section-notice--education": isEducational && prominent,
                "section-notice--large-icon": isEducational,
            })}
            aria-label={!hasStatus ? ariaLabel : null}
            aria-labelledby={hasStatus ? `section-notice-${status}-${rId}` : null}
            aria-roledescription={ariaRoleDescription}
        >
            {icon && (
                <div className="section-notice__header" id={`section-notice-${status}-${rId}`}>
                    {typeof icon === "string" ? <EbayIcon name={icon as Icon} {...iconProps} /> : icon}
                </div>
            )}
            <NoticeContent {...content.props} type="section" />
            {children}
            {a11yDismissText && (
                <EbaySectionNoticeFooter>
                    <button
                        aria-label={a11yDismissText}
                        className="fake-link page-notice__dismiss"
                        onClick={handleDismissed}
                    >
                        <EbayIconClose16 />
                    </button>
                </EbaySectionNoticeFooter>
            )}
        </section>
    );
};

export default EbaySectionNotice;
