import React, { ComponentProps, FC, useEffect, useMemo, useState } from "react";
import { filterByType, useRandomId, useReducedMotion } from "../utils";
import classNames from "classnames";
import EbayProgressBarExpressiveMessage from "./progress-bar-expressive-message";

export type EbayProgressBarExpressiveProps = ComponentProps<"div"> & {
    size?: "medium" | "large";
};

const MESSAGE_DURATION_DEFAULT = 1500;
const MESSAGE_DURATION_REDUCED_MOTION_MULTIPLIER = 1.5;
const MESSAGE_FADE_IN_DURATION = 833;

const EbayProgressBarExpressive: FC<EbayProgressBarExpressiveProps> = ({
    className,
    "aria-label": ariaLabel,
    children,
    size,
    ...rest
}) => {
    const messageId = useRandomId();
    const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
    const [messageIsFadingIn, setMessageIsFadingIn] = useState(false);
    const [isInitialMessage, setIsInitialMessage] = useState(true);
    const messages = filterByType(children, EbayProgressBarExpressiveMessage);
    const messageCount = messages.length;
    const fadeInFirstMessage = size !== "medium";
    const expressiveLinesItems = useMemo(() => new Array(12).fill(0), []);

    const currentMessage = messages[currentMessageIndex] || null;
    const nextMessageIndex = currentMessageIndex === messageCount - 1 ? 0 : currentMessageIndex + 1;
    const nextMessage = messages[nextMessageIndex] || null;
    const isReducedMotion = useReducedMotion();

    useEffect(() => {
        let fadeInTimeout;
        let nextMessageTimeout;
        let initialMessageTimeout;
        if (messageCount > 0) {
            const nextMessageTimeoutDuration =
                (nextMessage?.props?.duration ?? MESSAGE_DURATION_DEFAULT) *
                (isReducedMotion ? MESSAGE_DURATION_REDUCED_MOTION_MULTIPLIER : 1);

            if ((!fadeInFirstMessage || isReducedMotion) && !currentMessage) {
                setCurrentMessageIndex(nextMessageIndex);
            } else {
                fadeInTimeout = setTimeout(() => {
                    setMessageIsFadingIn(true);

                    nextMessageTimeout = setTimeout(() => {
                        setCurrentMessageIndex(nextMessageIndex);
                        setMessageIsFadingIn(false);
                    }, nextMessageTimeoutDuration);
                }, MESSAGE_FADE_IN_DURATION);
            }

            initialMessageTimeout = setTimeout(() => {
                setIsInitialMessage(false);
            }, MESSAGE_FADE_IN_DURATION);
        }

        return () => {
            clearTimeout(fadeInTimeout);
            clearTimeout(nextMessageTimeout);
            clearTimeout(initialMessageTimeout);
        };
    }, [messageCount, currentMessageIndex, nextMessageIndex]);

    return (
        <div {...rest} className={classNames("progress-bar-expressive", className)}>
            {messageCount > 0 ? (
                <div
                    className={classNames("progress-bar-expressive__messages", {
                        "progress-bar-expressive__messages--medium": size === "medium",
                    })}
                >
                    {!isReducedMotion && nextMessage ? (
                        <EbayProgressBarExpressiveMessage
                            {...nextMessage.props}
                            aria-hidden="true"
                            isFadingIn={messageIsFadingIn}
                        />
                    ) : null}

                    {currentMessage ? (
                        <EbayProgressBarExpressiveMessage
                            {...currentMessage.props}
                            id={messageId}
                            role="status"
                            isFadingIn={messageCount === 1}
                            isFadingOut={messageIsFadingIn}
                            isInitial={isInitialMessage}
                        />
                    ) : null}
                </div>
            ) : null}
            <div
                role="progressbar"
                aria-label={ariaLabel}
                aria-describedby={messageId}
                className="progress-bar-expressive__progress"
            >
                <div className="progress-bar-expressive__lines">
                    {expressiveLinesItems.map((_, index) => (
                        <div key={index} className="progress-bar-expressive__line" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EbayProgressBarExpressive;
