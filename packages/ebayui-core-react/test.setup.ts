import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Makeup-js uses these methods, but they are not implemented in jsdom
Element.prototype.scrollIntoView = vi.fn();
Element.prototype.scroll = vi.fn();

if (typeof window.URL.createObjectURL === "undefined") {
    Object.defineProperty(window.URL, "createObjectURL", { value: () => {} });
}
