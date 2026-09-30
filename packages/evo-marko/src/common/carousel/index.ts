export interface CarouselView {
  atStart: boolean;
  atEnd: boolean;
  index: number;
  visible: boolean[];
  moving: boolean;
}

interface Item {
  index: number;
  start: number;
  end: number;
  snap: boolean;
}

interface State {
  target?: number;
  since?: number;
  unwrap?: () => void;
  index?: number;
  update?: () => void;
}

const EPSILON = 1;
const MOVE_TIMEOUT = 1500;
const SETTLE_DELAY = 100;

const states = new WeakMap<HTMLElement, State>();

function getState(el: HTMLElement) {
  let state = states.get(el);
  if (!state) states.set(el, (state = {}));
  return state;
}

function isRtl(el: HTMLElement) {
  return getComputedStyle(el).direction === "rtl";
}

function getPosition(el: HTMLElement) {
  return Math.abs(el.scrollLeft);
}

function getMax(el: HTMLElement) {
  return Math.max(el.scrollWidth - el.clientWidth, 0);
}

function prefersReducedMotion() {
  return matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMoving(state: State) {
  return (
    state.since !== undefined && performance.now() - state.since < MOVE_TIMEOUT
  );
}

function getDestination(el: HTMLElement) {
  const state = getState(el);
  return state.target !== undefined && isMoving(state)
    ? state.target
    : getPosition(el);
}

function measure(el: HTMLElement): Item[] {
  const rtl = isRtl(el);
  const bounds = el.getBoundingClientRect();
  const position = getPosition(el);
  const items = Array.from(el.children, (child, index) => {
    const rect = child.getBoundingClientRect();
    const start =
      position + (rtl ? bounds.right - rect.right : rect.left - bounds.left);
    return {
      index,
      start,
      end: start + rect.width,
      snap: getComputedStyle(child).scrollSnapAlign !== "none",
    };
  });

  if (!items.some((item) => item.snap)) {
    for (const item of items) item.snap = true;
  }

  return items.sort((a, b) => a.start - b.start);
}

function nearest(items: Item[], position: number, max: number) {
  let best = items[0];
  let bestDistance = Infinity;
  for (const item of items) {
    const distance = Math.abs(Math.min(item.start, max) - position);
    if (item.snap && distance < bestDistance) {
      best = item;
      bestDistance = distance;
    }
  }
  return best;
}

function getEdges(el: HTMLElement, position = getPosition(el)) {
  return {
    atStart: position <= EPSILON,
    atEnd: position >= getMax(el) - EPSILON,
  };
}

function getView(el: HTMLElement, position: number): CarouselView {
  const items = measure(el);
  const end = position + el.clientWidth;
  const visible: boolean[] = [];

  for (const item of items) {
    visible[item.index] =
      (item.start >= position - EPSILON && item.end <= end + EPSILON) ||
      (item.start <= position + EPSILON && item.end >= end - EPSILON);
  }

  return {
    ...getEdges(el, position),
    index: items.length ? nearest(items, position, getMax(el)).index : 0,
    visible,
    moving: isMoving(getState(el)),
  };
}

function getPageTarget(el: HTMLElement, from: number, direction: 1 | -1) {
  const items = measure(el);
  const max = getMax(el);
  const width = el.clientWidth;
  const stops = items
    .filter((item) => item.snap)
    .map((item) => Math.min(item.start, max));

  if (direction === 1) {
    const cut = items.find((item) => item.end > from + width + EPSILON);
    if (!cut) return max;
    const stop = stops.findLast((s) => s <= cut.start + EPSILON);
    return stop !== undefined && stop > from + EPSILON
      ? stop
      : (stops.find((s) => s > from + EPSILON) ?? max);
  }

  const cut = items.findLast((item) => item.start < from - EPSILON);
  if (!cut) return 0;
  const stop = stops.find((s) => s >= cut.end - width - EPSILON);
  return stop !== undefined && stop < from - EPSILON
    ? stop
    : (stops.findLast((s) => s < from - EPSILON) ?? 0);
}

function jump(el: HTMLElement, position: number) {
  el.scrollTo({ left: isRtl(el) ? -position : position, behavior: "instant" });
}

function scrollToPosition(el: HTMLElement, position: number, smooth: boolean) {
  const state = getState(el);
  const to = Math.min(Math.max(position, 0), getMax(el));
  if (!isMoving(state) && Math.abs(to - getPosition(el)) < EPSILON) return;

  if (smooth && !prefersReducedMotion()) {
    const since = performance.now();
    state.target = to;
    state.since = since;
    el.scrollTo({ left: isRtl(el) ? -to : to, behavior: "smooth" });
    setTimeout(() => {
      if (state.since === since) {
        settle(el);
        state.update?.();
      }
    }, MOVE_TIMEOUT);
  } else {
    state.target = state.since = undefined;
    jump(el, to);
  }

  state.update?.();
}

function holdView(el: HTMLElement, change: () => void) {
  const position = getPosition(el);
  const before = measure(el);
  const anchor =
    before.findLast((item) => item.start <= position + EPSILON) || before[0];
  const offset = position - anchor.start;

  change();

  const after = measure(el).find((item) => item.index === anchor.index)!;
  jump(el, after.start + offset);
}

// Moves the items at the far end next to this one with `order`, scrolls onto
// them, and moves them back once it settles.
function wrap(el: HTMLElement, direction: 1 | -1) {
  const items = measure(el);
  const width = el.clientWidth;
  const max = getMax(el);

  let moved: Item[];
  let rest: number;
  if (direction === 1) {
    const last = items.findIndex((item) => item.end >= width - EPSILON);
    moved = items.slice(0, last + 1);
    rest = items[items.length - 1].end - (items[last + 1]?.start ?? Infinity);
  } else {
    const first = items.findLastIndex((item) => item.start <= max + EPSILON);
    moved = items.slice(first);
    rest = items[first - 1]?.end ?? -Infinity;
  }

  if (rest < width || prefersReducedMotion()) {
    scrollToPosition(el, direction === 1 ? 0 : max, true);
    return;
  }

  const children = el.children as HTMLCollectionOf<HTMLElement>;
  const setOrder = (order: string) => {
    for (const item of moved) children[item.index].style.order = order;
  };

  el.style.scrollSnapType = "none";
  holdView(el, () => setOrder(String(direction)));

  const state = getState(el);
  state.unwrap = () => {
    state.unwrap = undefined;
    holdView(el, () => setOrder(""));
    el.style.scrollSnapType = "";
  };

  const after = measure(el);
  const find = (item: Item) => after.find((i) => i.index === item.index)!;
  scrollToPosition(
    el,
    direction === 1
      ? find(moved[0]).start
      : find(moved[moved.length - 1]).end - width,
    true,
  );
}

function settle(el: HTMLElement) {
  const state = getState(el);
  state.target = state.since = undefined;
  state.unwrap?.();
}

/** Moves a page forwards or backwards, wrapping round the ends with `loop`. */
export function page(el: HTMLElement, direction: 1 | -1, loop = false) {
  const state = getState(el);
  if (state.unwrap) {
    if (isMoving(state)) return;
    settle(el);
  }

  const from = getDestination(el);
  const { atStart, atEnd } = getEdges(el, from);
  if (loop && (direction === 1 ? atEnd : atStart) && !(atStart && atEnd)) {
    wrap(el, direction);
  } else {
    scrollToPosition(el, getPageTarget(el, from, direction), true);
  }
}

/** Scrolls an item to the leading edge and returns the index it lands on. */
export function scrollToIndex(el: HTMLElement, index: number) {
  const state = getState(el);
  const items = measure(el);
  if (!items.length) return (state.index = 0);

  const max = getMax(el);
  const wanted = items.find(
    (item) => item.index === Math.min(Math.max(index, 0), items.length - 1),
  )!;
  const stop = Math.min(
    items.findLast((item) => item.snap && item.start <= wanted.start + EPSILON)
      ?.start ?? 0,
    max,
  );
  const landing = nearest(items, stop, max).index;

  const first = state.index === undefined;
  state.index = landing;
  if (landing !== nearest(items, getDestination(el), max).index) {
    scrollToPosition(el, stop, !first);
  }

  return landing;
}

function onScrollEnd(
  el: HTMLElement,
  handler: () => void,
  signal: AbortSignal,
) {
  if ("onscrollend" in window) {
    el.addEventListener("scrollend", handler, { signal });
  } else {
    let timer: ReturnType<typeof setTimeout>;
    el.addEventListener(
      "scroll",
      () => {
        clearTimeout(timer);
        timer = setTimeout(handler, SETTLE_DELAY);
      },
      { passive: true, signal },
    );
    signal.addEventListener("abort", () => clearTimeout(timer));
  }
}

/** Reports changes to the view until the returned function is called. */
export function observe(
  el: HTMLElement,
  onChange: (changes: Partial<CarouselView>) => void,
) {
  const controller = new AbortController();
  const { signal } = controller;
  const state = getState(el);
  let view: CarouselView | undefined;

  const report = (next: CarouselView) => {
    const changes: Partial<CarouselView> = {};
    if (next.atStart !== view?.atStart) changes.atStart = next.atStart;
    if (next.atEnd !== view?.atEnd) changes.atEnd = next.atEnd;
    if (next.moving !== view?.moving) changes.moving = next.moving;
    if (next.index !== (state.index ?? 0)) changes.index = next.index;
    state.index = next.index;
    if (next.visible.join() !== view?.visible.join()) {
      changes.visible = next.visible;
    } else {
      next.visible = view.visible;
    }

    view = next;
    if (Object.keys(changes).length) onChange(changes);
  };
  const update = () => report(getView(el, getDestination(el)));
  state.update = update;

  el.addEventListener(
    "scroll",
    () => {
      if (view && !isMoving(state)) {
        report({ ...view, ...getEdges(el), moving: false });
      }
    },
    { passive: true, signal },
  );
  onScrollEnd(
    el,
    () => {
      // A jump just before a smooth scroll ends before the scroll does.
      if (
        isMoving(state) &&
        Math.abs(getPosition(el) - state.target!) > EPSILON
      ) {
        return;
      }
      settle(el);
      update();
    },
    signal,
  );

  const takeOver = () => {
    state.target = state.since = undefined;
  };
  for (const type of ["pointerdown", "wheel", "keydown"]) {
    el.addEventListener(type, takeOver, { passive: true, signal });
  }

  const resizeObserver = new ResizeObserver(update);
  const observeSizes = () => {
    resizeObserver.disconnect();
    resizeObserver.observe(el);
    for (const child of Array.from(el.children)) {
      resizeObserver.observe(child);
    }
  };
  const mutationObserver = new MutationObserver(observeSizes);
  mutationObserver.observe(el, { childList: true });
  observeSizes();

  signal.addEventListener("abort", () => {
    resizeObserver.disconnect();
    mutationObserver.disconnect();
    if (state.update === update) state.update = undefined;
  });

  return () => controller.abort();
}
