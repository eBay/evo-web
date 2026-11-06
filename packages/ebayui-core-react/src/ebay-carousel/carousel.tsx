import React, { Children, ComponentProps, FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import focusables from "makeup-focusables";
import CarouselControlButton from "./carousel-control-button";
import CarouselList from "./carousel-list";
import { ListItemRef } from "./types";
import { animateCarouselLoop, getMaxOffset, getNextIndex, getOffset, getSlide } from "./helpers";
import { EbayIconPause24 } from "../ebay-icon/icons/ebay-icon-pause-24";
import { EbayIconPlay24 } from "../ebay-icon/icons/ebay-icon-play-24";
import reactDom from "react-dom";
import { useReducedMotion } from "../utils";

// Make sure to support React 16
const flushSync = reactDom.flushSync || ((callback) => callback());

type CarouselLayout = {
    slideWidth: number;
    items: Omit<ListItemRef, "fullyVisible">[];
};

const initialLayout: CarouselLayout = { slideWidth: 0, items: [] };

const isSameLayout = (a: CarouselLayout, b: CarouselLayout): boolean =>
    a.slideWidth === b.slideWidth &&
    a.items.length === b.items.length &&
    a.items.every(
        (item, i) =>
            item.element === b.items[i].element && item.left === b.items[i].left && item.right === b.items[i].right,
    );

export type CarouselProps = ComponentProps<"div"> & {
    className?: string;
    gap?: number;
    index?: number; // Scroll to index slide
    imageTreatment?: boolean; // Image slide?
    itemsPerSlide?: number; // number of slides to be displayed
    a11yPreviousText?: string;
    a11yNextText?: string;
    a11yPauseText?: string;
    a11yPlayText?: string;
    autoplay?: boolean | number;
    onNext?: (event: React.SyntheticEvent) => void;
    onPrevious?: (event: React.SyntheticEvent) => void;
    onScroll?: ({ index }) => void;
    onSlide?: ({ slide }) => void;
    onPlay?: (event: React.SyntheticEvent) => void;
    onPause?: (event: React.SyntheticEvent) => void;
};

const EbayCarousel: FC<CarouselProps> = ({
    gap = 16,
    index = 0,
    itemsPerSlide: _itemsPerSlide,
    a11yPreviousText,
    a11yNextText,
    a11yPauseText,
    a11yPlayText,
    autoplay,
    onScroll = () => {},
    onNext = () => {},
    onPrevious = () => {},
    onSlide = () => {},
    onPlay = () => {},
    onPause = () => {},
    className,
    children,
    ...rest
}) => {
    const [activeIndex, setActiveIndex] = useState(index);
    const [layout, setLayout] = useState(initialLayout);
    const { slideWidth } = layout;
    const [offset, setOffset] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLUListElement | null>(null);
    const scrollLeftRef = useRef(0);
    const observerRef = useRef<ResizeObserver | null>(null);
    const observedWidthsRef = useRef(new Map<Element, number>());
    const loopingRef = useRef(false);
    const measureDeferredRef = useRef(false);
    const items: ListItemRef[] = layout.items.map(({ element, left, right }) => ({
        element,
        left,
        right,
        fullyVisible: left - offset >= -0.01 && right - offset <= slideWidth + 0.01,
    }));
    const itemsRef = useRef(items);
    itemsRef.current = items;
    const itemCount = Children.count(children);
    const itemsPerSlide = Math.floor(_itemsPerSlide) || undefined;
    const isSingleSlide = itemCount <= itemsPerSlide;
    const isAutoplayEnabled = Boolean(autoplay);
    const prevControlDisabled = isSingleSlide || (offset === 0 && !isAutoplayEnabled);
    const nextControlDisabled = isSingleSlide || (offset === getMaxOffset(items, slideWidth) && !isAutoplayEnabled);

    const measure = () => {
        const container = containerRef.current;
        const list = listRef.current;
        if (!container || !list) return;

        const elements = Array.from(list.children) as HTMLLIElement[];
        const rects = elements.map((element) => element.getBoundingClientRect());
        const firstLeft = rects.length ? rects[0].left : 0;
        const next: CarouselLayout = {
            slideWidth: container.getBoundingClientRect().width,
            items: elements.map((element, i) => ({
                element,
                left: rects[i].left - firstLeft,
                right: rects[i].right - firstLeft,
            })),
        };

        scrollLeftRef.current = list.scrollLeft;
        setLayout((prev) => (isSameLayout(prev, next) ? prev : next));
    };

    const requestMeasure = () => {
        const observer = observerRef.current;
        if (!observer || !containerRef.current || !listRef.current) return;

        // Re-observing makes the observer report every element again, so measure() runs after the next layout.
        observedWidthsRef.current.clear();
        observer.disconnect();
        for (const element of [containerRef.current, ...Array.from(listRef.current.children)]) {
            observer.observe(element, { box: "border-box" });
        }
    };

    useEffect(() => {
        // ResizeObserver is missing in jsdom; items then stay unmeasured and fully visible.
        if (typeof ResizeObserver === "undefined") return;

        const observer = new ResizeObserver((entries) => {
            let widthChanged = false;
            for (const { target, borderBoxSize } of entries) {
                const width = borderBoxSize[0].inlineSize;
                if (observedWidthsRef.current.get(target) !== width) {
                    observedWidthsRef.current.set(target, width);
                    widthChanged = true;
                }
            }

            if (!widthChanged) return;

            // getBoundingClientRect includes the transforms the autoplay loop puts on items.
            if (loopingRef.current) {
                measureDeferredRef.current = true;
            } else {
                measure();
            }
        });
        observerRef.current = observer;

        return () => {
            observer.disconnect();
            observerRef.current = null;
        };
    }, []);

    useEffect(() => requestMeasure(), [children, gap, isAutoplayEnabled]);

    const visibilityKey = Array.from({ length: itemCount }, (_, i) => items[i]?.fullyVisible ?? true).join();

    useEffect(() => {
        if (!listRef.current) return;

        // Collect every item's focusables before writing tabindex so layout is read only once.
        const updates = Array.from(listRef.current.children, (item) => ({
            elements: focusables(item as HTMLElement),
            visible: item.getAttribute("aria-hidden") !== "true",
        }));

        for (const { elements, visible } of updates) {
            for (const element of elements) {
                if (visible) {
                    if (element.hasAttribute("data-carousel-tabindex")) {
                        element.setAttribute("tabindex", element.getAttribute("data-carousel-tabindex"));
                    } else {
                        element.removeAttribute("tabindex");
                    }
                } else {
                    element.setAttribute("tabindex", "-1");
                }
            }
        }
    }, [visibilityKey, layout]);

    // During autoplay animation, we manually set the offset positions, so we temporarily disable
    // until the animation is complete
    const [disableOffsetCalculation, setDisableOffsetCalculation] = useState(false);

    useEffect(() => {
        if (!disableOffsetCalculation) {
            setOffset(getOffset(itemsRef.current, activeIndex, slideWidth));
        }
    }, [activeIndex, slideWidth, disableOffsetCalculation, layout]);

    useEffect(() => {
        if (index >= 0 && index <= itemCount - 1) {
            setActiveIndex(index);
        }
    }, [index]);

    const isReducedMotion = useReducedMotion();
    const [paused, setPaused] = useState(isReducedMotion);
    useEffect(() => {
        setPaused(isReducedMotion);
    }, [isReducedMotion]);

    const togglePlayback = (event) => {
        setPaused(!paused);
        if (paused) {
            onPlay(event);
        } else {
            onPause(event);
        }
    };

    // Use ref to keep track of the active index inside the interval callback
    const activeIndexRef = useRef(activeIndex);
    activeIndexRef.current = activeIndex;

    const updateActiveIndex = (direction, itemsToShow) => {
        const currentIndex = activeIndexRef.current;
        const nextIndex = getNextIndex(direction, currentIndex, itemsRef.current, slideWidth, itemsToShow);
        const slide = getSlide(currentIndex, itemsToShow, nextIndex);
        onSlide({ slide });

        if (isAutoplayEnabled) {
            animateCarouselLoop({
                direction,
                nextIndex,
                currentIndex,
                itemsRef,
                slideWidth,
                gap,
                onAnimationStart: () => {
                    loopingRef.current = true;
                    setDisableOffsetCalculation(true);
                },
                onAnimationEnd: () => {
                    loopingRef.current = false;
                    setDisableOffsetCalculation(false);
                    if (measureDeferredRef.current) {
                        measureDeferredRef.current = false;
                        requestMeasure();
                    }
                },
            });
        }

        // Use flushSync to update the active index synchronously so it properly trigger the animation on autoplay
        flushSync(() => setActiveIndex(nextIndex));
    };

    useEffect(() => {
        if (!isAutoplayEnabled || paused || isUserInteracting) {
            return;
        }

        const autoplayTimeout = typeof autoplay === "number" ? autoplay : 4000;
        const interval = setInterval(() => {
            updateActiveIndex("RIGHT", itemsPerSlide);
        }, autoplayTimeout);

        return () => clearInterval(interval);
    }, [isAutoplayEnabled, paused, itemsPerSlide, isUserInteracting]);

    const handleControlClick = (event: SyntheticEvent<HTMLButtonElement>, { direction }) => {
        updateActiveIndex(direction, itemsPerSlide);

        if (direction === "LEFT") {
            onPrevious(event);
        } else {
            onNext(event);
        }
    };

    const handleStartInteraction = () => setIsUserInteracting(true);
    const handleEndInteraction = () => setIsUserInteracting(false);

    return (
        <div
            className={classNames("carousel", className, {
                "carousel--slides": itemsPerSlide,
                "carousel--peek": itemsPerSlide % 1 === 0,
                carousel__autoplay: isAutoplayEnabled,
            })}
            role="group"
            {...rest}
        >
            <div
                ref={containerRef}
                className="carousel__container"
                onFocusCapture={handleStartInteraction}
                onMouseEnter={handleStartInteraction}
                onTouchStartCapture={handleStartInteraction}
                onBlurCapture={handleEndInteraction}
                onMouseLeave={handleEndInteraction}
                onTouchEndCapture={handleEndInteraction}
            >
                <CarouselControlButton
                    label={a11yPreviousText}
                    type="prev"
                    disabled={prevControlDisabled}
                    onClick={handleControlClick}
                />
                <CarouselList
                    listRef={listRef}
                    items={items}
                    itemsRef={itemsRef}
                    scrollLeftRef={scrollLeftRef}
                    nativeScrolling={!isAutoplayEnabled}
                    offset={offset}
                    gap={gap}
                    itemsPerSlide={itemsPerSlide}
                    nextControlDisabled={nextControlDisabled}
                    isAutoplayEnabled={isAutoplayEnabled}
                    activeIndex={activeIndex}
                    onScroll={onScroll}
                    onSetActiveIndex={setActiveIndex}
                    slideWidth={slideWidth}
                >
                    {children}
                </CarouselList>
                <CarouselControlButton
                    type="next"
                    label={a11yNextText}
                    disabled={nextControlDisabled}
                    onClick={handleControlClick}
                />

                {isAutoplayEnabled ? (
                    <button
                        className="carousel__playback"
                        type="button"
                        onClick={togglePlayback}
                        aria-label={paused ? a11yPlayText : a11yPauseText}
                    >
                        {paused ? <EbayIconPlay24 /> : <EbayIconPause24 />}
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default EbayCarousel;
