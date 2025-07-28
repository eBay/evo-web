import React, { Children, ComponentProps, FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import CarouselControlButton from "./carousel-control-button";
import CarouselList from "./carousel-list";
import { ListItemRef } from "./types";
import { animateCarouselLoop, getMaxOffset, getNextIndex, getOffset, getSlide } from "./helpers";
import { debounce } from "../common/debounce";
import { EbayIcon } from "../ebay-icon";
import reactDom from "react-dom";
import { useReducedMotion } from "../utils";

// Make sure to support React 16
const flushSync = reactDom.flushSync || ((callback) => callback());

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
    const [slideWidth, setSlideWidth] = useState(0);
    const [offset, setOffset] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<Array<ListItemRef | null>>([]);
    const itemCount = Children.count(children);
    const itemsPerSlide = Math.floor(_itemsPerSlide) || undefined;
    const isSingleSlide = itemCount <= itemsPerSlide;
    const isAutoplayEnabled = Boolean(autoplay);
    const prevControlDisabled = isSingleSlide || (offset === 0 && !isAutoplayEnabled);
    const nextControlDisabled =
        isSingleSlide || (offset === getMaxOffset(itemsRef.current, slideWidth) && !isAutoplayEnabled);

    const handleResize = () => {
        if (!containerRef.current) return;

        const { width: containerWidth } = containerRef.current.getBoundingClientRect();
        setSlideWidth(containerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", debounce(handleResize, 16));

        return () => {
            window.removeEventListener("resize", debounce(handleResize, 16));
        };
    }, []);

    // During autoplay animation, we manually set the offset positions, so we temporarily disable
    // until the animation is complete
    const [disableOffsetCalculation, setDisableOffsetCalculation] = useState(false);

    useEffect(() => {
        if (!disableOffsetCalculation) {
            setOffset(getOffset(itemsRef.current, activeIndex, slideWidth));
        }
    }, [activeIndex, slideWidth, disableOffsetCalculation]);

    useEffect(() => {
        if (index >= 0 && index <= itemCount - 1) {
            setActiveIndex(index);
        }
    }, [index]);

    useEffect(() => {
        itemsRef.current = itemsRef.current.splice(0, itemCount);
    }, [children]);

    useEffect(() => {
        const { width: containerWidth } = containerRef.current.getBoundingClientRect();
        setSlideWidth(containerWidth);
    }, [containerRef.current]);

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
                onAnimationStart: () => setDisableOffsetCalculation(true),
                onAnimationEnd: () => setDisableOffsetCalculation(false),
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
                    itemsRef={itemsRef}
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
                        <EbayIcon name={paused ? "play24" : "pause24"} />
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default EbayCarousel;
