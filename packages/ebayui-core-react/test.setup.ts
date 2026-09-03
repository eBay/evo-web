import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Makeup-js uses these methods, but they are not implemented in jsdom
Element.prototype.scrollIntoView = vi.fn();
Element.prototype.scroll = vi.fn();

if (typeof window.URL.createObjectURL === "undefined") {
    Object.defineProperty(window.URL, "createObjectURL", { value: () => {} });
}

// shaka-player 5 registers listeners on the media element's track lists,
// which jsdom implements as plain objects rather than EventTargets
{
    const video = document.createElement("video");
    for (const list of [video.textTracks, (video as { audioTracks?: object }).audioTracks]) {
        const proto = list && Object.getPrototypeOf(list);
        if (proto && typeof proto.addEventListener !== "function") {
            proto.addEventListener = vi.fn();
            proto.removeEventListener = vi.fn();
            proto.dispatchEvent = vi.fn();
        }
    }
}

if (typeof window.SVGPathElement === "undefined") {
    Object.defineProperty(window, "SVGPathElement", {
        writable: true,
        value: class SVGPathElement extends HTMLElement {},
    });
}
