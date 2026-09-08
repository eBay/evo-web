import { fireEvent, createEvent } from "@marko/testing-library";

async function pressKey(
  el: Element,
  info: KeyboardEventInit & { key: string },
) {
  for (const event of [
    createEvent.keyDown(el, info as any),
    createEvent.keyUp(el, info as any),
  ]) {
    // Re-assign properties so older browsers respect the supplied `info`
    (Object.keys(info) as (keyof typeof info)[]).forEach((key) => {
      if ((event as any)[key] !== info[key]) {
        Object.defineProperty(event, key, { value: info[key] });
      }
    });
    await fireEvent(el, event);
  }
}
/**
 * Simulates a touch based scroll event over 4 animation frames.
 *
 * @param {HTMLElement} el The element to scroll.
 * @param {number} to The new scrollLeft for the element.
 * @param {function} cb A callback to call after the scroll.
 */
function simulateScroll(el: HTMLElement, to: number, cb: Function) {
  fireEvent.scroll(el);
  el.scrollLeft = to;
  setTimeout(cb, 600);
}

function waitFrames(count: number, cb: Function) {
  if (count) {
    return requestAnimationFrame(() => {
      waitFrames(count - 1, cb);
    });
  }

  cb();
}

interface FastAnimations {
  fastAnimationStyle?: HTMLStyleElement;
  start: () => void;
  stop: () => void;
}

const fastAnimations: FastAnimations = {
  // Adds an style to the document which forces all transitions to run more quickly for the tests.
  start() {
    if (this.fastAnimationStyle) {
      return;
    }

    this.fastAnimationStyle = document.createElement("style");
    this.fastAnimationStyle.innerHTML = `* {
                transition-duration: 0.1s !important;
                transition-delay: 0.1s !important;
                scroll-behavior: auto !important;
            }`;
    document.head.appendChild(this.fastAnimationStyle);
  },
  stop() {
    if (!this.fastAnimationStyle) {
      return;
    }

    document.head.removeChild(this.fastAnimationStyle);
    this.fastAnimationStyle = undefined;
  },
};

export { fastAnimations, waitFrames, simulateScroll, pressKey };
