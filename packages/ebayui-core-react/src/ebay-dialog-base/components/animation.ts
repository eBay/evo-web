import { useLayoutEffect, useRef } from "react";

interface AnimationData {
    dialog: React.RefObject<HTMLElement>;
    waitFor: React.RefObject<HTMLElement>[];
    classPrefix?: string;
    onTransitionEnd: () => void;
}

type CancelFunction = () => void;

interface DialogAnimationHookProps {
    open?: boolean;
    transitionElement?: TransitionElement;
    classPrefix: string;
    dialogRef: React.RefObject<HTMLElement>;
    dialogWindowRef: React.RefObject<HTMLElement>;
    enabled?: boolean;
    onTransitionEnd: () => void;
}

export type TransitionElement = "window" | "root";

export function useDialogAnimation({
    open,
    classPrefix,
    transitionElement,
    dialogRef,
    dialogWindowRef,
    enabled,
    onTransitionEnd,
}: DialogAnimationHookProps): void {
    const previousOpenValue = useRef(open);

    useLayoutEffect(() => {
        if (!enabled) {
            return;
        }

        let transitionElements = [dialogWindowRef, dialogRef];

        if (transitionElement === "window") {
            transitionElements = [dialogWindowRef];
        } else if (transitionElement === "root") {
            transitionElements = [dialogRef];
        }

        let cancelCurrentAnimation: () => void;

        if (open) {
            cancelCurrentAnimation = showAnimation({
                dialog: dialogRef,
                waitFor: transitionElements,
                classPrefix,
                onTransitionEnd,
            });
            // Trigger the hide animation only when that "open" value changed to make sure it doesn't flicker the dialog.
            // The error was visible in StrictMode where the component renders twice.
        } else if (previousOpenValue.current !== open) {
            cancelCurrentAnimation = hideAnimation({
                dialog: dialogRef,
                waitFor: transitionElements,
                classPrefix,
                onTransitionEnd,
            });
        }

        previousOpenValue.current = open;

        return () => {
            if (cancelCurrentAnimation) {
                cancelCurrentAnimation();
            }
        };
    }, [open, enabled]);
}

function showAnimation({ dialog, waitFor, classPrefix, onTransitionEnd }: AnimationData): CancelFunction {
    return transition(dialog, waitFor, `${classPrefix}--show`, onTransitionEnd);
}

function hideAnimation({ dialog, waitFor, classPrefix, onTransitionEnd }: AnimationData): CancelFunction {
    return transition(dialog, waitFor, `${classPrefix}--hide`, onTransitionEnd);
}

function transition(
    element: React.RefObject<HTMLElement>,
    waitFor: React.RefObject<HTMLElement>[],
    className: string,
    onTransitionEnd: () => void,
): CancelFunction {
    if (!element.current || !className) {
        return;
    }

    let ran = 0;
    const pending = waitFor ? waitFor.length : 0;
    const initClass = `${className}-init`;

    element.current.classList.add(initClass);

    return nextFrame(() => {
        if (!element.current) {
            return;
        }

        element.current.classList.add(className);
        element.current.classList.remove(initClass);

        waitFor.forEach((ref) => {
            const listener = () => {
                if (++ran === pending) {
                    element.current?.classList.remove(className);
                    onTransitionEnd();
                    ref.current?.removeEventListener("transitionend", listener);
                }
            };

            ref.current.addEventListener("transitionend", listener, { once: true });
        });
    });
}

function nextFrame(callback: () => void): CancelFunction {
    let frame: number;
    let cancelFrame: (n: number) => void;

    if (window.requestAnimationFrame) {
        frame = window.requestAnimationFrame(() => {
            frame = window.requestAnimationFrame(callback);
        });
        cancelFrame = window.cancelAnimationFrame;
    } else {
        frame = window.setTimeout(callback, 26); // 16ms to simulate RAF, 10ms to ensure called after the frame.
        cancelFrame = window.clearTimeout;
    }

    return () => {
        if (frame) {
            cancelFrame(frame);
            frame = undefined;
        }
    };
}
