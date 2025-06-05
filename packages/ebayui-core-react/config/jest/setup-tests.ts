import "@testing-library/jest-dom";

// Makeup-js uses these methods, but they are not implemented in jsdom
Element.prototype.scrollIntoView = jest.fn();
Element.prototype.scroll = jest.fn();

if (typeof window.URL.createObjectURL === "undefined") {
    Object.defineProperty(window.URL, "createObjectURL", { value: () => {} });
}
