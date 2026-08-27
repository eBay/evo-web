/**
 * Calculates the maximum width for an element within its container.
 * Works my making the element as large as possible, reading its width,
 * and then restoring its original width.
 *
 * @param {HTMLElement} el the element to get the max width for
 */
export function getMaxWidth(el: HTMLElement) {
  const width = el.style.width;

  el.style.width = "100vw";
  const result = el.offsetWidth;

  el.style.width = width;
  return result;
}

/** Index of the child whose leading edge sits nearest the container's own. */
export function getScrollIndex(el: HTMLElement) {
  let closest = 0;
  let closestDistance = Infinity;

  for (let i = 0; i < el.children.length; i++) {
    const distance = Math.abs(getScrollOffset(el, i));
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = i;
    }
  }

  return closest;
}

/**
 * How far `el` has to scroll to bring a child to its leading edge.
 *
 * Measured, not derived from `clientWidth`: that is rounded to a whole pixel
 * while children are laid out at fractional widths, so multiplying it by an
 * index drifts. A distance also needs no RTL case.
 */
export function getScrollOffset(el: HTMLElement, index: number) {
  const child = el.children[index];
  if (!child) return 0;

  const bounds = el.getBoundingClientRect();
  const rect = child.getBoundingClientRect();
  return getComputedStyle(el).direction === "rtl"
    ? rect.right - bounds.right
    : rect.left - bounds.left;
}

/** Scrolls by `distance` now. `scroll-behavior: smooth` animates the setter. */
export function scrollInstantly(el: HTMLElement, distance: number) {
  el.scrollBy({ left: distance, behavior: "instant" });
}

/**
 * Eases the scroll position towards whatever `distance` reports, re-aimable
 * mid-move so a new target inherits the speed already built up — which
 * `scroll-behavior: smooth` cannot do, as it restarts from a standstill.
 *
 * Critically damped over 450ms, matching Skin's `$ebay-carousel-transition-time`.
 */
export function createScroller(element: () => HTMLElement) {
  const duration = 450;
  /** A critically damped spring is within 1% once ω·t reaches ~6.64. */
  const omega = 6640 / duration;
  let remaining: null | (() => number) = null;
  /** Pixels per second, towards the target. */
  let velocity = 0;
  /** Sub-pixel movement banked until it adds up; scroll positions are whole. */
  let debt = 0;
  let frame = 0;
  let last = 0;

  function finish() {
    element().style.scrollSnapType = "";
    remaining = null;
    velocity = 0;
    debt = 0;
    frame = 0;
  }

  function step(now: number) {
    const el = element();
    const left = (remaining as () => number)() - debt;
    const dt = Math.min(now - last, 50) / 1000;
    last = now;
    const arrived = Math.abs(left) <= 0.5 && Math.abs(velocity) < 60;

    if (arrived) {
      scrollInstantly(el, (remaining as () => number)());
      finish();
      return;
    }

    // One step along x(t) = (A + Bt)·e^(−ωt), the spring's closed form.
    const decay = Math.exp(-omega * dt);
    const b = omega * left - velocity;
    const after = (left + b * dt) * decay;
    velocity = (omega * (left + b * dt) - b) * decay;

    debt += left - after;
    const px = Math.round(debt);
    if (px) {
      scrollInstantly(el, px);
      debt -= px;
    }
    frame = requestAnimationFrame(step);
  }

  function stop() {
    cancelAnimationFrame(frame);
    finish();
  }

  return {
    get running() {
      return frame !== 0;
    },
    /** `animate: false`, and reduced motion, land instantly. */
    to(distance: () => number, animate = true) {
      if (!animate || useReducedMotion) {
        stop();
        scrollInstantly(element(), distance());
        return;
      }

      remaining = distance;
      if (!frame) {
        // Snapping would drag each frame's nudge onto the next item.
        element().style.scrollSnapType = "none";
        last = performance.now();
        frame = requestAnimationFrame(step);
      }
    },
    stop,
  };
}

/**
 * Determines if the user has requested reduced motion in their system preferences.
 *
 * This function checks the `prefers-reduced-motion` media query to see if the user
 * has indicated that they prefer reduced motion. This can be useful for improving
 * accessibility by disabling animations or transitions for users who may be sensitive
 * to motion.
 *
 * @returns {boolean} `true` if the user prefers reduced motion, `false` otherwise.
 */
export const useReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
