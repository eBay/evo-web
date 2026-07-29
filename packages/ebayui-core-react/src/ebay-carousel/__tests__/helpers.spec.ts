import { describe, expect, it } from "vitest";
import { getOffset } from "../helpers";
import { ListItemRef } from "../types";

const makeItem = (left: number, right: number): ListItemRef => ({
    element: null,
    left,
    right,
    fullyVisible: true,
});

describe("getOffset", () => {
    const items = [makeItem(0, 100), makeItem(100, 200), makeItem(200, 300)];

    it("returns the offset for a valid index", () => {
        expect(getOffset(items, 1, 500)).toBe(0);
    });

    it("clamps to the last item when index is too large", () => {
        expect(getOffset(items, 10, 500)).toBe(getOffset(items, 2, 500));
    });

    it("clamps to the first item when index is negative", () => {
        expect(getOffset(items, -1, 500)).toBe(getOffset(items, 0, 500));
    });

    it("returns 0 when there are no items", () => {
        expect(getOffset([], -1, 500)).toBe(0);
    });
});
