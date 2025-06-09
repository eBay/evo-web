import React from "react";
import { Children, cloneElement, ReactElement, ReactNode, RefObject } from "react";
import { ListItemRef, MovementDirection, RelativeRect } from "./types";
import { CarouselItemProps } from "./carousel-item";

export function getRelativeRects(el: Element): RelativeRect {
    const parent = el.parentElement;
    const currentLeft = parent ? parent.firstElementChild.getBoundingClientRect().left : 0;
    const { left, right } = el.getBoundingClientRect();

    return {
        left: left - currentLeft,
        right: right - currentLeft,
    };
}

export const isNativeScrolling = (el: Element): boolean => getComputedStyle(el).overflowX !== "visible";

export const getMaxOffset = (items: ListItemRef[], slideWidth: number): number => {
    if (!items.length) {
        return 0;
    }

    const lastEl = items[items.length - 1];
    return Math.max(lastEl.right - slideWidth, 0) || 0;
};

export const getOffset = (items: ListItemRef[], index: number, slideWidth: number): number => {
    if (!items.length) {
        return 0;
    }

    return Math.min(items[index].left, getMaxOffset(items, slideWidth)) || 0;
};

export const alterChildren = (
    children: ReactNode,
    itemsRef: RefObject<Array<ListItemRef | null>>,
    itemsPerSlide?: number,
    slideWidth?: number,
    offset?: number,
    gap?: number,
): ReactElement[] =>
    Children.map(children, (item: ReactElement<CarouselItemProps>, index) => {
        const { style = {} } = item.props;
        let itemWidth;

        if (itemsPerSlide) {
            const itemsInSlide = itemsPerSlide + (itemsPerSlide % 1);
            itemWidth = `calc(${100 / itemsInSlide}% - ${((itemsInSlide - 1) * gap) / itemsInSlide}px)`;
        }
        const isStartOfSlide = itemsPerSlide ? index % itemsPerSlide === 0 : true;

        return cloneElement(item, {
            slideWidth,
            offset,
            ref: (el) => {
                itemsRef.current[index] = el;
            },
            className: isStartOfSlide ? "carousel__snap-point" : item.props.className,
            style: {
                ...style,
                width: itemWidth || style.width,
                marginRight: gap && index !== Children.count(children) - 1 ? `${gap}px` : style.marginRight,
            },
        });
    });
/**
 * Ensures that an index is valid.
 */
const normalizeIndex = (index: number, items?: ListItemRef[], itemsPerSlide?: number): number => {
    if (index > 0) {
        let result = index;
        result %= items.length || 1; // Ensure index is within bounds.
        result -= result % (itemsPerSlide || 1); // Round index to the nearest valid slide index.
        result = Math.abs(result); // Ensure positive value.
        return result;
    }

    return 0;
};

/**
 * Gets the slide for a given index.
 * Defaults to the current index if none provided.
 */
export const getSlide = (activeIndex: number, itemsPerSlide?: number, nextIndex = activeIndex): undefined | number => {
    if (!itemsPerSlide) {
        return;
    }

    return Math.ceil(nextIndex / itemsPerSlide);
};

const getDelta = (direction: MovementDirection): number => (direction === "LEFT" ? -1 : 1);

export const getNextIndex = (
    direction: MovementDirection,
    activeIndex: number,
    items?: ListItemRef[],
    slideWidth?: number,
    itemsPerSlide?: number,
): number => {
    let i = activeIndex;
    let item;

    // If going backward from 0, we go to the end.
    if (direction === "LEFT" && i === 0) {
        i = items.length - 1;
    } else {
        // Find the index of the next item that is not fully in view.
        do {
            const delta = getDelta(direction);
            item = items[(i += delta)];
        } while (item && item.fullyVisible);

        if (direction === "LEFT" && !itemsPerSlide) {
            // If going left without items per slide, go as far left as possible while keeping this item fully in view.
            const targetOffset = item.right - slideWidth;
            do {
                item = items[--i];
            } while (item && item.left >= targetOffset);
            i += 1;
        }
    }

    return normalizeIndex(i, items, itemsPerSlide);
};

export const getClosestIndex = (
    scrollLeft: number,
    items: ListItemRef[],
    slideWidth: number,
    itemsPerSlide = 1,
    gap?: number,
): number => {
    let closest;

    if (scrollLeft >= getMaxOffset(items, slideWidth) - gap) {
        closest = items.length - 1;
    } else {
        // Find the closest item using a binary search on each carousel slide.
        const totalItems = items.length;
        let low = 0;
        let high = Math.ceil(totalItems / itemsPerSlide) - 1;

        while (high - low > 1) {
            const mid = Math.floor((low + high) / 2);
            if (scrollLeft > items[mid * itemsPerSlide].left) {
                low = mid;
            } else {
                high = mid;
            }
        }

        const deltaLow = Math.abs(scrollLeft - items[low * itemsPerSlide].left);
        const deltaHigh = Math.abs(scrollLeft - items[high * itemsPerSlide].left);
        closest = normalizeIndex((deltaLow > deltaHigh ? high : low) * itemsPerSlide, items, itemsPerSlide);
    }

    return closest;
};

/**
 * This function will animate the carousel to loop back to the first slide and vice versa
 */
export function animateCarouselLoop({
    direction,
    nextIndex,
    currentIndex,
    itemsRef,
    slideWidth,
    gap,
    onAnimationStart,
    onAnimationEnd,
}: {
    direction: "RIGHT" | "LEFT";
    nextIndex: number;
    currentIndex: number;
    itemsRef: React.MutableRefObject<ListItemRef[]>;
    slideWidth: number;
    gap: number;
    onAnimationStart: () => void;
    onAnimationEnd: () => void;
}): void {
    // When the next slide is the first one, we loop the carousel to the last slide
    if (direction === "RIGHT" && nextIndex < currentIndex) {
        const lastSlide = itemsRef.current[currentIndex].element;
        let carouselList = lastSlide.closest("ul");

        // Remove the animation first before moving the slides
        carouselList.style.transition = "none";

        // Move all the slides before the first slide position
        const lastSlideTranslate = getMaxOffset(itemsRef.current, slideWidth) + slideWidth + gap;
        for (let i = currentIndex; i > nextIndex; i--) {
            itemsRef.current[i].element.style.transform = `translateX(${-lastSlideTranslate}px)`;
        }

        // Move the focus of the carousel to the new position of the last slide
        carouselList.style.transform = `translate3d(${slideWidth + gap}px, 0, 0)`;

        onAnimationStart();

        requestAnimationFrame(() => {
            // Re-enable the animation
            carouselList.style.transition = "";

            // Focus the carousel back to the first slide
            carouselList.style.transform = `translate3d(0, 0, 0)`;
            carouselList = null;
        });

        // When the animation ends, we remove the temporary position of the slides
        carouselList.addEventListener(
            "transitionend",
            () => {
                requestAnimationFrame(() => {
                    for (let i = currentIndex; i > nextIndex; i--) {
                        itemsRef.current[i].element.style.transform = ``;
                    }
                    onAnimationEnd();
                });
            },
            { once: true },
        );
        // When the next slide is the last one, we loop the carousel
    } else if (direction === "LEFT" && nextIndex > currentIndex) {
        const firstSlide = itemsRef.current[currentIndex].element;
        let carouselList = firstSlide.closest("ul");

        // Remove the animation first, before moving the slides
        carouselList.style.transition = "none";

        // Move all the slides after the last slide
        const firstSlideTranslate = getMaxOffset(itemsRef.current, slideWidth) + slideWidth + gap;
        for (let i = currentIndex; i < nextIndex; i++) {
            itemsRef.current[i].element.style.transform = `translateX(${firstSlideTranslate}px)`;
        }

        // Move the focus of the carousel to the new position of the first slide
        carouselList.style.transform = `translate3d(${-firstSlideTranslate}px, 0, 0)`;

        onAnimationStart();

        requestAnimationFrame(() => {
            // Re-enable the animation
            carouselList.style.transition = "";

            // Focus the carousel back to the last slide
            carouselList.style.transform = `translate3d(${-firstSlideTranslate + slideWidth + gap}px, 0, 0)`;
            carouselList = null;
        });

        // When the animation ends, we remove the temporary position of the slides
        carouselList.addEventListener(
            "transitionend",
            () => {
                requestAnimationFrame(() => {
                    for (let i = currentIndex; i < nextIndex; i++) {
                        itemsRef.current[i].element.style.transform = "";
                    }
                    onAnimationEnd();
                });
            },
            { once: true },
        );
    }
}
