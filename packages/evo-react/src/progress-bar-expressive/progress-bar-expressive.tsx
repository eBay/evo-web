import { useEffect, useId, useRef, useState } from "react";
import classNames from "classnames";
import type {
  EvoProgressBarExpressiveProps,
  ProgressBarExpressiveMessage,
} from "./types";
import { useReducedMotion } from "./use-reduced-motion";
import "@ebay/skin/progress-bar-expressive.mjs";

const MESSAGE_DURATION_DEFAULT = 1500;
const MESSAGE_DURATION_REDUCED_MOTION_MULTIPLIER = 1.5;
const MESSAGE_FADE_IN_DURATION = 833;
const EXPRESSIVE_LINE_COUNT = 12;
const EMPTY_MESSAGES: readonly ProgressBarExpressiveMessage[] = [];

export function EvoProgressBarExpressive({
  a11yText = "Loading...",
  messages: inputMessages,
  size,
  className,
  ref,
  ...rest
}: EvoProgressBarExpressiveProps) {
  const messageId = useId();
  const isReducedMotion = useReducedMotion();
  const messages = inputMessages ?? EMPTY_MESSAGES;
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  const [currentMessageIndex, setCurrentMessageIndex] = useState(() =>
    size === "medium" || isReducedMotion ? 0 : -1,
  );
  const [messageIsFadingIn, setMessageIsFadingIn] = useState(false);
  const [isInitialMessage, setIsInitialMessage] = useState(true);
  const currentMessageIndexRef = useRef(currentMessageIndex);
  const timerRef = useRef<{
    fadeIn?: ReturnType<typeof setTimeout>;
    showMessage?: ReturnType<typeof setTimeout>;
  }>({});

  currentMessageIndexRef.current = currentMessageIndex;

  const firstMessageIndex = size === "medium" || isReducedMotion ? 0 : -1;
  const messageCount = messages.length;
  const visibleMessageIndex =
    currentMessageIndex >= 0 && messageCount > 0
      ? Math.min(currentMessageIndex, messageCount - 1)
      : -1;
  const nextMessageIndex =
    visibleMessageIndex < 0 || visibleMessageIndex === messageCount - 1
      ? 0
      : visibleMessageIndex + 1;
  const currentMessage = messages[visibleMessageIndex];
  const nextMessage = messages[nextMessageIndex];
  const visibleMessageIsFadingIn = messageIsFadingIn;

  useEffect(() => {
    const clearTimers = () => {
      clearTimeout(timerRef.current.fadeIn);
      clearTimeout(timerRef.current.showMessage);
      timerRef.current = {};
    };

    clearTimers();

    if (messageCount === 0) {
      currentMessageIndexRef.current = -1;
      setCurrentMessageIndex(-1);
      setMessageIsFadingIn(false);
      return clearTimers;
    }

    const startingIndex =
      currentMessageIndexRef.current < 0
        ? firstMessageIndex
        : Math.min(currentMessageIndexRef.current, messageCount - 1);
    currentMessageIndexRef.current = startingIndex;
    setCurrentMessageIndex(startingIndex);
    setMessageIsFadingIn(false);

    const rotateToNextMessage = (index: number) => {
      const latestMessageCount = messagesRef.current.length;
      if (latestMessageCount === 0) {
        return;
      }

      const nextIndex =
        index >= latestMessageCount - 1
          ? 0
          : Math.min(index + 1, latestMessageCount - 1);
      currentMessageIndexRef.current = nextIndex;
      setCurrentMessageIndex(nextIndex);
      setMessageIsFadingIn(false);
      scheduleMessage(nextIndex);
    };

    const scheduleMessage = (index: number): void => {
      if (index < 0) {
        timerRef.current.fadeIn = setTimeout(() => {
          setMessageIsFadingIn(true);
          timerRef.current.showMessage = setTimeout(
            () => {
              currentMessageIndexRef.current = 0;
              setCurrentMessageIndex(0);
              setMessageIsFadingIn(false);
              if (messagesRef.current.length > 1) {
                scheduleMessage(0);
              }
            },
            getMessageDuration(messagesRef.current[0], isReducedMotion),
          );
        }, MESSAGE_FADE_IN_DURATION);
        return;
      }

      if (messageCount < 2) {
        return;
      }

      if (isReducedMotion) {
        timerRef.current.showMessage = setTimeout(
          () => rotateToNextMessage(index),
          getMessageDuration(messagesRef.current[index], true),
        );
        return;
      }

      timerRef.current.fadeIn = setTimeout(
        () => {
          setMessageIsFadingIn(true);
          timerRef.current.showMessage = setTimeout(
            () => rotateToNextMessage(index),
            MESSAGE_FADE_IN_DURATION,
          );
        },
        getMessageDuration(messagesRef.current[index], false),
      );
    };

    scheduleMessage(startingIndex);

    return clearTimers;
  }, [firstMessageIndex, isReducedMotion, messageCount, size]);

  useEffect(() => {
    if (messageCount === 0) {
      return;
    }

    setIsInitialMessage(true);
    const initialMessageTimeout = setTimeout(() => {
      setIsInitialMessage(false);
    }, MESSAGE_FADE_IN_DURATION);

    return () => clearTimeout(initialMessageTimeout);
  }, [isReducedMotion, messageCount, size]);

  return (
    <div
      {...rest}
      ref={ref}
      className={classNames("progress-bar-expressive", className)}
    >
      {messageCount > 0 ? (
        <div
          className={classNames(
            "progress-bar-expressive__messages",
            size === "medium" && "progress-bar-expressive__messages--medium",
          )}
        >
          {!isReducedMotion && messageCount > 1 && nextMessage ? (
            <div
              aria-hidden="true"
              className={classNames(
                "progress-bar-expressive__message",
                visibleMessageIsFadingIn &&
                  "progress-bar-expressive__message--in",
              )}
            >
              {nextMessage.content}
            </div>
          ) : null}

          <div
            role="status"
            id={messageId}
            className={classNames(
              "progress-bar-expressive__message",
              visibleMessageIsFadingIn &&
                "progress-bar-expressive__message--out",
              messageCount === 1 && "progress-bar-expressive__message--in",
              isInitialMessage && "progress-bar-expressive__message--initial",
            )}
          >
            {currentMessage?.content}
          </div>
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-label={a11yText}
        aria-describedby={messageCount > 0 ? messageId : undefined}
        className="progress-bar-expressive__progress"
      >
        <div className="progress-bar-expressive__lines">
          {Array.from({ length: EXPRESSIVE_LINE_COUNT }, (_, index) => (
            <div key={index} className="progress-bar-expressive__line" />
          ))}
        </div>
      </div>
    </div>
  );
}

function getMessageDuration(
  message: ProgressBarExpressiveMessage | undefined,
  isReducedMotion: boolean,
) {
  return (
    (message?.duration ?? MESSAGE_DURATION_DEFAULT) *
    (isReducedMotion ? MESSAGE_DURATION_REDUCED_MOTION_MULTIPLIER : 1)
  );
}
