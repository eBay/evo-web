// copy-pasted from @ebay/ebayui-core/dist/components/ebay-carousel/utils/scroll-transition
// todo: replace with ebayui-core-react/ebay-carousel when it's ready

/**
 * Checks on an interval to see if the element is scrolling.
 * When the scrolling has finished it then calls the function.
 *
 * @param {HTMLElement} el The element which scrolls.
 * @param {(offset: number)=>{}} fn The function to call after scrolling completes.
 * @return {function} A function to cancel the scroll listener.
 */
type ReturnFunctionType = () => void;
const onScrollEnd = (el: HTMLElement, fn: (offset: number) => void): ReturnFunctionType => {
    let timeout: ReturnType<typeof setTimeout>;
    let frame: number;
    let lastPos: number | undefined;

    (function checkMoved() {
        const { scrollLeft } = el;
        if (lastPos !== scrollLeft) {
            lastPos = scrollLeft;
            timeout = setTimeout(() => {
                frame = requestAnimationFrame(checkMoved);
            }, 90);
            return;
        }

        fn(lastPos);
    })();

    return () => {
        clearTimeout(timeout);
        cancelAnimationFrame(frame);
    };
};

const supportsScrollBehavior: boolean = typeof window !== "undefined" && "scrollBehavior" in document.body.style;

/**
 * Utility to animate scroll position of an element using an `ease-out` curve over 250ms.
 * Cancels the animation if the user touches back down.
 *
 * @param {HTMLElement} el The element to scroll.
 * @param {number} to The offset to animate to.
 * @param {function} fn A function that will be called after the transition completes.
 * @return {function} A function that cancels the transition.
 */
export function scrollTransition(el: HTMLElement, to: number, fn: () => void): ReturnFunctionType {
    if (supportsScrollBehavior) {
        el.scrollTo({ left: to });
        return onScrollEnd(el, fn);
    }

    let lastPosition: number;
    let cancelInterruptTransition: () => void;

    let frame = requestAnimationFrame((startTime) => {
        const { scrollLeft } = el;
        const distance = to - scrollLeft;
        const duration = 450;
        (function animate(curTime) {
            const delta = curTime - startTime;
            if (delta > duration) {
                el.scrollLeft = to;
                cancel();
                return fn();
            }

            el.scrollLeft = easeInOut(delta / duration) * distance + scrollLeft;
            frame = requestAnimationFrame(animate);
        })(startTime);
    });

    // The animation can be interrupted by new touch events.
    el.addEventListener("touchstart", handleTouchStart);

    return cancel;

    function cancel() {
        cancelAnimationFrame(frame);

        if (lastPosition === undefined) {
            cancelTouchStart();
        } else {
            if (cancelInterruptTransition) cancelInterruptTransition();
            cancelTouchEnd();
        }
    }

    function handleTouchStart() {
        cancel();
        lastPosition = el.scrollLeft;
        // If we were interrupted by a touch start we wait for a touch end to see if we moved.
        el.addEventListener("touchend", handleTouchEnd);
    }

    function handleTouchEnd() {
        cancelTouchEnd();
        // If we haven't moved because of the interrupt we continue to transition.
        if (lastPosition === el.scrollLeft) {
            cancelInterruptTransition = scrollTransition(el, to, fn);
        }
    }

    function cancelTouchStart() {
        el.removeEventListener("touchstart", handleTouchStart);
    }

    function cancelTouchEnd() {
        el.removeEventListener("touchend", handleTouchEnd);
    }
}

/**
 * Ease out timing function.
 * Based on https://gist.github.com/gre/1650294.
 *
 * @param {number} val - A number between 0 and 1.
 * @return {number}
 */
function easeInOut(val: number): number {
    return val < 0.5 ? 2 * val * val : -1 + (4 - 2 * val) * val;
}
