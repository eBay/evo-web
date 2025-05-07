import { useReducedMotion } from "../dom";
const TRANSITION_END = "transitionend";
/**
 * Applies a primer `-init` class before starting a transition
 * to make transitioning properties that are not animatable easier.
 *
 * **Order**
 * 1. Add class: "$className-init"
 * 2. Wait one frame.
 * 3. Remove class "$className-init".
 * 4. Add class "$className".
 * 5. Wait for animation to finish.
 * 6. Remove class "$className".
 *
 * @param {HTMLElement} options.el The root element that contains the animation.
 * @param {string} options.className The base className to use for the transition.
 * @param {string[]} options.transitionList A list of transition properties to listen for.
 * @param {Function} cb A callback called after the transition as ended.
 */
export default (
    {
        el,
        className,
        transitionList,
    }: { el: HTMLElement; className: string; transitionList: string[] },
    cb: Function,
) => {
    let ended: boolean;
    const pending = transitionList ? transitionList.length : 0;
    const classList = el.classList;
    const initClass = `${className}-init`;
    const transitions = new Set([...transitionList]);
    // On reduce motion devices we don't want to check for transoform
    if (useReducedMotion) {
        transitions.delete("tranform")
    }

    if (!("ontransitionend" in el)) {
        const id = setTimeout(cb, 0);
        return () => clearTimeout(id);
    }

    let cancelFrame: (() => void) | undefined = nextFrame(() => {
        cancelFrame = undefined;
        classList.add(className);
        classList.remove(initClass);

        if (pending) {
            el.addEventListener(TRANSITION_END, listener);
        } else {
            cancel();

            if (cb) {
                cb();
            }
        }
    });

    classList.add(initClass);

    return cancel;

    /**
     * Cancels the current transition and resets the className.
     */
    function cancel() {
        if (ended) {
            return;
        }

        ended = true;
        el.removeEventListener(TRANSITION_END, listener);

        if (cancelFrame) {
            cancelFrame();
            classList.remove(initClass);
        } else {
            classList.remove(className);
        }
    }

    /**
     * Handles a single transition end event.
     * Once all child transitions have ended the overall animation is completed.
     */
    function listener({
        propertyName
    }: TransitionEvent): ReturnType<EventListener> {
        transitions.delete(propertyName);
        if (transitions.size === 0) {
            el.removeEventListener(TRANSITION_END, listener);

            ended = true;
            classList.remove(className);

            if (cb) {
                cb();
            }
        }
    }
};

/**
 * Runs a function during the next animation frame.
 */
function nextFrame(fn: FrameRequestCallback) {
    let frame: number;

    frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(fn);
    });

    return () => {
        if (frame) {
            cancelAnimationFrame(frame);
            frame = 0;
        }
    };
}
