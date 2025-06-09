import React, { ComponentProps, FC, RefObject } from "react";
import classnames from "classnames";
import { withForwardRef } from "../common/component-utils/forwardRef";
import { EbayIcon } from "../ebay-icon";
import { EbayButtonCell, Size } from "../ebay-button";

type HTMLAnchorProps = ComponentProps<"a">;
type Props = HTMLAnchorProps & {
    fluid?: boolean;
    truncate?: boolean;
    size?: Size;
    forwardedRef?: RefObject<HTMLAnchorElement>;
};

const EbayCtaButton: FC<Props> = ({
    size,
    children,
    fluid,
    truncate,
    forwardedRef,
    className: extraClasses,
    ...rest
}) => {
    const className = classnames(
        extraClasses,
        "cta-btn",
        { "cta-btn--large": size === "large" },
        { "cta-btn--fluid": fluid },
        { "cta-btn--truncated": truncate },
    );

    return (
        <a {...rest} className={className} ref={forwardedRef}>
            <EbayButtonCell type="cta">
                <span>{children}</span>
                <EbayIcon name="arrowRight24" />
            </EbayButtonCell>
        </a>
    );
};

export default withForwardRef(EbayCtaButton);
