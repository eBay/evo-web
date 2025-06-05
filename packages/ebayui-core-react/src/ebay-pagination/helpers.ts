import { MAX_PAGES, MIN_PAGES, MIN_VISIBLE_ITEMS, TRAILING_SPACE_WITH_DOT, LEADING_SPACE_WITH_DOT } from "./const";
import { ItemState, PaginationVariant } from "./types";

export function pageNumbersAround(
    totalPages: number,
    selectedPage: number,
    maxVisiblePages: number = totalPages,
    variant: PaginationVariant = null,
): ItemState[] {
    const withDots = variant === "show-last" || (variant === "overflow" && totalPages > MAX_PAGES);
    const hasLeadingDots = variant === "overflow" && totalPages > MAX_PAGES;
    const visibleItems = Math.min(maxVisiblePages, totalPages);
    const startIndexWithoutDots = Math.max(0, selectedPage - Math.ceil((visibleItems - 1) / 2));
    const startIndexWithDots =
        visibleItems < MIN_VISIBLE_ITEMS
            ? selectedPage
            : Math.max(0, selectedPage - Math.floor((visibleItems - 1) / 2));
    const endIndex = (withDots ? startIndexWithDots : startIndexWithoutDots) + visibleItems;
    const closeToEnd = endIndex >= totalPages;
    const closeToFront = selectedPage <= MIN_VISIBLE_ITEMS;

    const visibleRangeWithDots = (start: number, end: number) => {
        const items = visibleRange(totalPages, start, end);

        if (visibleItems > 2) {
            items[end - 2] = "dots";
            items[end - 1] = "hidden";
            items[totalPages - 1] = "visible";
        } else if (visibleItems > 1) {
            items[end - 1] = "dots";
        }

        return items;
    };

    // middle show item[1] (...) and item[item.length - 1] (...)
    const visibleRangeWithOverflowDots = (start: number, end: number) => {
        // Following Dot
        if (closeToFront) {
            return visibleRangeWithDots(0, end);
            // Leading Dot
        } else if (closeToEnd) {
            const items = visibleRange(totalPages, totalPages - TRAILING_SPACE_WITH_DOT, totalPages);
            items[0] = "visible";
            items[1] = "dots";
            return items;
        }
        // Middle case with Leading & Following Dots
        const items = visibleRange(
            totalPages,
            selectedPage - LEADING_SPACE_WITH_DOT,
            selectedPage + LEADING_SPACE_WITH_DOT + 1,
        );
        items[0] = "visible";
        items[1] = closeToFront ? "visible" : "dots";
        items[totalPages - 2] = "dots";
        items[totalPages - 1] = "visible";
        return items;
    };

    if (closeToEnd && totalPages <= MAX_PAGES) {
        return visibleRange(totalPages, totalPages - visibleItems);
    }

    if (withDots) {
        return hasLeadingDots
            ? visibleRangeWithOverflowDots(startIndexWithDots, endIndex)
            : visibleRangeWithDots(startIndexWithDots, endIndex);
    }

    return visibleRange(totalPages, startIndexWithoutDots, endIndex);
}

export function calcPageState(
    selectedPage: number,
    visiblePages: number,
    totalPages: number,
    variant: PaginationVariant = "show-range",
): ItemState[] {
    if (selectedPage === -1) {
        return [];
    }

    const adjustedNumPages =
        variant === "overflow" ? MAX_PAGES : clamp(Math.min(totalPages, visiblePages), MIN_PAGES, MAX_PAGES);

    return pageNumbersAround(totalPages, selectedPage - 1, adjustedNumPages, variant);
}

function clamp(n: number, min: number, max: number): number {
    return n <= min ? min : n >= max ? max : n;
}

function visibleRange(totalItems: number, start: number, end?: number): ItemState[] {
    return Array<ItemState>(totalItems).fill("hidden").fill("visible", start, end);
}

/**
 * Calculates the maximum width for an element within its container.
 *
 * Based on eBayUI Core Marko implementation.
 * See https://github.com/eBay/ebayui-core/blob/v8.6.0/src/components/ebay-pagination/component.js#L119-L132
 */
export function getMaxWidth(el?: HTMLElement): number {
    if (!el) {
        return 0;
    }

    el.style.width = "100vw";
    const result = el.offsetWidth;
    el.style.width = null;
    return result;
}
