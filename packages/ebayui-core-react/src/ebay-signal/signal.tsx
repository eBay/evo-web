import React, { FC, ComponentProps, ReactNode } from "react";
import classNames from "classnames";

export type SignalStatus = "neutral" | "trustworthy" | "time-sensitive" | "recent";
export type SignalTone = "neutral" | "information" | "positive" | "warning" | "attention";
export type SignalEmphasis = "default" | "strong" | "subtle";

type Props = ComponentProps<"span"> & {
    /**
     * @deprecated Use `tone`. Maps: trustworthy → information, recent → positive,
     * time-sensitive → attention, neutral → neutral.
     */
    status?: SignalStatus;
    /** Color tone. Takes precedence over `status`. */
    tone?: SignalTone;
    /** Visual emphasis. Defaults to `"default"`. */
    emphasis?: SignalEmphasis;
    /**
     * Optional leading icon, rendered before the label. Pass a 12px icon such as
     * `<EbayIconPromotion12 />`; it is `aria-hidden` unless `a11yText` is given, so don't pass it.
     */
    icon?: ReactNode;
};

const EbaySignal: FC<Props> = ({ status = "neutral", tone, emphasis = "default", icon, children, ...rest }) => {
    const className = classNames(
        "signal",
        `signal--${tone || status}`,
        emphasis !== "default" && `signal--${emphasis}`,
        rest.className,
    );
    return (
        <span {...rest} className={className}>
            {icon}
            {children}
        </span>
    );
};

export default EbaySignal;
