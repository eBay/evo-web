import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Makeup-js uses these methods, but they are not implemented in jsdom
Element.prototype.scrollIntoView = vi.fn();
Element.prototype.scroll = vi.fn();

if (typeof window.URL.createObjectURL === "undefined") {
    Object.defineProperty(window.URL, "createObjectURL", { value: () => {} });
}

// Mock IntersectionObserver for pagination visibility detection
class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = null;
    readonly rootMargin: string = "";
    readonly thresholds: ReadonlyArray<number> = [];
    private callback: IntersectionObserverCallback;
    private elements: Map<Element, boolean> = new Map();

    constructor(callback: IntersectionObserverCallback) {
        this.callback = callback;
    }

    observe(element: Element) {
        this.elements.set(element, true);
        // Simulate immediate visibility by triggering callback
        this.triggerIntersection(element, true);
    }

    unobserve(element: Element) {
        this.elements.delete(element);
    }

    disconnect() {
        this.elements.clear();
    }

    takeRecords(): IntersectionObserverEntry[] {
        return [];
    }

    private triggerIntersection(element: Element, isIntersecting: boolean) {
        const entry: IntersectionObserverEntry = {
            target: element,
            isIntersecting,
            intersectionRatio: isIntersecting ? 1 : 0,
            boundingClientRect: element.getBoundingClientRect(),
            intersectionRect: isIntersecting ? element.getBoundingClientRect() : new DOMRect(),
            rootBounds: null,
            time: Date.now(),
        };
        this.callback([entry], this);
    }
}

global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
