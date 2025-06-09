export function scroll(el?: HTMLElement): void {
    if (!el) {
        return;
    }

    const parentEl = el.parentElement;
    const offsetBottom = el.offsetTop + el.offsetHeight;
    const scrollBottom = parentEl.scrollTop + parentEl.offsetHeight;

    if (el.offsetTop < parentEl.scrollTop) {
        parentEl.scrollTop = el.offsetTop;
    } else if (offsetBottom > scrollBottom) {
        parentEl.scrollTop = offsetBottom - parentEl.offsetHeight;
    }
}
