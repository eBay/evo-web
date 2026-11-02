import React, { FC, ReactNode, Children, useEffect, useRef, RefObject, useCallback, useState } from "react";
import classNames from "classnames";
import { alterChildren, getClosestIndex } from "./helpers";
import { scrollTransition } from "./scroll-to-transition";
import { ListItemRef } from "./types";

type CarouselListProps = {
    gap?: number;
    itemsPerSlide: number;
    slideWidth: number;
    offset: number;
    activeIndex: number;
    nextControlDisabled?: boolean;
    isAutoplayEnabled?: boolean;
    className?: string;
    listRef: RefObject<HTMLUListElement | null>;
    items: ListItemRef[];
    itemsRef: RefObject<ListItemRef[]>;
    nativeScrolling: boolean;
    children: ReactNode;
    onSetActiveIndex: (index: number) => void;
    onScroll?: ({ index }) => void;
};

const CarouselList: FC<CarouselListProps> = ({
    gap = 16,
    itemsPerSlide,
    slideWidth,
    offset,
    activeIndex,
    nextControlDisabled,
    isAutoplayEnabled,
    className,
    listRef,
    items,
    itemsRef,
    nativeScrolling,
    children,
    onSetActiveIndex,
    onScroll,
}) => {
    const [translateLeft, setTranslateLeft] = useState(0);
    const [skipScrolling, setSkipScrolling] = useState(false);
    const [scrollTransitioning, setScrollTransitioning] = useState(false);
    const scrollTimeout = useRef(null);
    const lastScrollLeftRef = useRef(0);

    useEffect(() => {
        const size = Children.count(children);

        if (!size || !listRef.current) return;

        if (skipScrolling) {
            setSkipScrolling(false);

            return;
        }

        if (nativeScrolling) {
            if (offset === lastScrollLeftRef.current) return;

            lastScrollLeftRef.current = offset;
            setScrollTransitioning(true);
            return scrollTransition(listRef.current, offset, () => setScrollTransitioning(false));
        } else {
            setTranslateLeft(offset);
        }
    }, [offset]);

    const handleFinishScrolling = useCallback(() => {
        const scrollLeft = listRef.current.scrollLeft;
        lastScrollLeftRef.current = scrollLeft;
        const closest = getClosestIndex(scrollLeft, itemsRef.current, slideWidth, itemsPerSlide, gap);
        if (closest !== activeIndex) {
            setSkipScrolling(true);
            onSetActiveIndex(closest);
            onScroll({ index: closest });
        }
    }, [listRef.current, slideWidth, activeIndex, onSetActiveIndex]);

    const handleScroll = () => {
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }
        scrollTimeout.current = setTimeout(() => {
            if (!scrollTransitioning) {
                handleFinishScrolling();
            }
        }, 640);
    };

    return (
        <div
            className={classNames(
                "carousel__viewport",
                {
                    "carousel__viewport--mask": !nextControlDisabled && !isAutoplayEnabled,
                },
                className,
            )}
        >
            <ul
                className="carousel__list"
                ref={listRef}
                onScroll={handleScroll}
                style={{ transform: `translate3d(${-translateLeft}px, 0, 0)` }}
            >
                {alterChildren(children, items, itemsPerSlide, gap)}
            </ul>
        </div>
    );
};

export default CarouselList;
