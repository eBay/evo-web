import { pageNumbersAround } from "../helpers";
import { ItemState } from "../types";
import { MAX_PAGES } from "../const";

describe("pageNumbersAround()", () => {
    it("on empty input should return 0/0 items", () => {
        expect(pageNumbersAround(0, 0)).toEqual([]);
    });
    it("on total=1 should return 1/3 items", () => {
        expect(pageNumbersAround(3, 0, 1)).toEqual(["visible", "hidden", "hidden"]);
    });
    it("on total=2 should return 2/2 items", () => {
        expect(pageNumbersAround(2, 0, 2)).toEqual(["visible", "visible"]);
        expect(pageNumbersAround(2, 1, 2)).toEqual(["visible", "visible"]);
        expect(pageNumbersAround(2, 0, 3)).toEqual(["visible", "visible"]);
    });
    it("on total=2 should return 2/3 items", () => {
        expect(pageNumbersAround(3, 0, 2)).toEqual(["visible", "visible", "hidden"]);
        expect(pageNumbersAround(3, 1, 2)).toEqual(["visible", "visible", "hidden"]);
        expect(pageNumbersAround(3, 2, 2)).toEqual(["hidden", "visible", "visible"]);
    });
    it("on total=3 should return 3/3 items", () => {
        expect(pageNumbersAround(3, 0, 3)).toEqual(["visible", "visible", "visible"]);
        expect(pageNumbersAround(3, 1, 3)).toEqual(["visible", "visible", "visible"]);
        expect(pageNumbersAround(3, 2, 3)).toEqual(["visible", "visible", "visible"]);
    });
    it("on total=3 should return 3/4 items", () => {
        expect(pageNumbersAround(4, 0, 3)).toEqual(["visible", "visible", "visible", "hidden"]);
        expect(pageNumbersAround(4, 2, 3)).toEqual(["hidden", "visible", "visible", "visible"]);
    });
    it("on total=3 should return 3/9 items", () => {
        expect(pageNumbersAround(9, 0, 3)).toEqual([
            "visible",
            "visible",
            "visible",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
        ]);
        expect(pageNumbersAround(9, 2, 3)).toEqual([
            "hidden",
            "visible",
            "visible",
            "visible",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
        ]);
    });
});

function pageNumbersAroundWithDots(
    totalItems: number,
    selectedItem: number,
    maxVisibleItems: number = totalItems,
): ItemState[] {
    return pageNumbersAround(totalItems, selectedItem, maxVisibleItems, "show-last");
}

describe("pageNumbersAroundWithDots()", () => {
    it("on empty input should return []", () => {
        expect(pageNumbersAroundWithDots(0, 0)).toEqual([]);
    });
    it("on 1/1 should return [x]", () => {
        expect(pageNumbersAroundWithDots(1, 0, 1)).toEqual(["visible"]);
    });
    it("on 1/2 should return [x, ], [ ,x]", () => {
        expect(pageNumbersAroundWithDots(2, 0, 1)).toEqual(["visible", "hidden"]);
        expect(pageNumbersAroundWithDots(2, 1, 1)).toEqual(["hidden", "visible"]);
    });
    it("on 1/3 should return [x, , ], [ ,x, ], [ , ,x]", () => {
        expect(pageNumbersAroundWithDots(3, 0, 1)).toEqual(["visible", "hidden", "hidden"]);
        expect(pageNumbersAroundWithDots(3, 1, 1)).toEqual(["hidden", "visible", "hidden"]);
        expect(pageNumbersAroundWithDots(3, 2, 1)).toEqual(["hidden", "hidden", "visible"]);
    });

    it("on 2/2, 3/2 should return [x,x]", () => {
        expect(pageNumbersAroundWithDots(2, 0, 2)).toEqual(["visible", "visible"]);
        expect(pageNumbersAroundWithDots(2, 1, 2)).toEqual(["visible", "visible"]);
        expect(pageNumbersAroundWithDots(2, 1, 2)).toEqual(["visible", "visible"]);
        expect(pageNumbersAroundWithDots(2, 0, 3)).toEqual(["visible", "visible"]);
    });
    it("on 2/3 should return [x,…, ], [ ,x,x], [ ,x,x]", () => {
        expect(pageNumbersAroundWithDots(3, 0, 2)).toEqual(["visible", "dots", "hidden"]);
        expect(pageNumbersAroundWithDots(3, 1, 2)).toEqual(["hidden", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(3, 2, 2)).toEqual(["hidden", "visible", "visible"]);
    });
    it("on 2/4 should return [x,…, , ], [ ,x,…, ], [ , ,x,x], [ , ,x,x]", () => {
        expect(pageNumbersAroundWithDots(4, 0, 2)).toEqual(["visible", "dots", "hidden", "hidden"]);
        expect(pageNumbersAroundWithDots(4, 1, 2)).toEqual(["hidden", "visible", "dots", "hidden"]);
        expect(pageNumbersAroundWithDots(4, 2, 2)).toEqual(["hidden", "hidden", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(4, 3, 2)).toEqual(["hidden", "hidden", "visible", "visible"]);
    });

    it("on 3/3 should return [x,x,x]", () => {
        expect(pageNumbersAroundWithDots(3, 0, 3)).toEqual(["visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(3, 1, 3)).toEqual(["visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(3, 2, 3)).toEqual(["visible", "visible", "visible"]);
    });
    it("on 3/4 should return [x,…, ,x], [ ,x,x,x], [ ,x,x,x], [ ,x,x,x]", () => {
        expect(pageNumbersAroundWithDots(4, 0, 3)).toEqual(["visible", "dots", "hidden", "visible"]);
        expect(pageNumbersAroundWithDots(4, 1, 3)).toEqual(["hidden", "visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(4, 2, 3)).toEqual(["hidden", "visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(4, 3, 3)).toEqual(["hidden", "visible", "visible", "visible"]);
    });
    it("on 3/5 should return [x,…, , ,x], [ ,x,…, ,x], [ , ,x,x,x], [ , ,x,x,x], [ , ,x,x,x]", () => {
        expect(pageNumbersAroundWithDots(5, 0, 3)).toEqual(["visible", "dots", "hidden", "hidden", "visible"]);
        expect(pageNumbersAroundWithDots(5, 1, 3)).toEqual(["hidden", "visible", "dots", "hidden", "visible"]);
        expect(pageNumbersAroundWithDots(5, 2, 3)).toEqual(["hidden", "hidden", "visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(5, 3, 3)).toEqual(["hidden", "hidden", "visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(5, 4, 3)).toEqual(["hidden", "hidden", "visible", "visible", "visible"]);
    });
    it("on 3/9 should return [x,…, , , , , , ,x], [ , , , , ,x,…, ,x], [ , , , , , ,x,x,x]", () => {
        expect(pageNumbersAroundWithDots(9, 0, 3)).toEqual([
            "visible",
            "dots",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
        ]);
        expect(pageNumbersAroundWithDots(9, 5, 3)).toEqual([
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
            "dots",
            "hidden",
            "visible",
        ]);
        expect(pageNumbersAroundWithDots(9, 9, 3)).toEqual([
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
            "visible",
            "visible",
        ]);
    });

    it("on 4/4 should return [x,x,x,x]", () => {
        expect(pageNumbersAroundWithDots(4, 0, 4)).toEqual(["visible", "visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(4, 1, 4)).toEqual(["visible", "visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(4, 2, 4)).toEqual(["visible", "visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(4, 3, 4)).toEqual(["visible", "visible", "visible", "visible"]);
    });
    it("on 4/5 should return [x,x,…, ,x], [x,x,…, ,x], [ ,x,x,x,x], [ ,x,x,x,x], [ ,x,x,x,x]", () => {
        expect(pageNumbersAroundWithDots(5, 0, 4)).toEqual(["visible", "visible", "dots", "hidden", "visible"]);
        expect(pageNumbersAroundWithDots(5, 1, 4)).toEqual(["visible", "visible", "dots", "hidden", "visible"]);
        expect(pageNumbersAroundWithDots(5, 2, 4)).toEqual(["hidden", "visible", "visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(5, 3, 4)).toEqual(["hidden", "visible", "visible", "visible", "visible"]);
        expect(pageNumbersAroundWithDots(5, 4, 4)).toEqual(["hidden", "visible", "visible", "visible", "visible"]);
    });
    it("on 4/9 should return [x,x,…, , , , , ,x], [ , , , ,x,x,…, ,x], [ , , , , ,x,x,x,x]", () => {
        expect(pageNumbersAroundWithDots(9, 0, 4)).toEqual([
            "visible",
            "visible",
            "dots",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
        ]);
        expect(pageNumbersAroundWithDots(9, 5, 4)).toEqual([
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
            "visible",
            "dots",
            "hidden",
            "visible",
        ]);
        expect(pageNumbersAroundWithDots(9, 9, 4)).toEqual([
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
            "visible",
            "visible",
            "visible",
        ]);
    });
    it("on 5/9 should return [x,x,x,…, , , , ,x], [ , , ,x,x,x,…, ,x], [ , , , ,x,x,x,x,x]", () => {
        expect(pageNumbersAroundWithDots(9, 0, 5)).toEqual([
            "visible",
            "visible",
            "visible",
            "dots",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
        ]);
        expect(pageNumbersAroundWithDots(9, 5, 5)).toEqual([
            "hidden",
            "hidden",
            "hidden",
            "visible",
            "visible",
            "visible",
            "dots",
            "hidden",
            "visible",
        ]);
        expect(pageNumbersAroundWithDots(9, 9, 5)).toEqual([
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
        ]);
    });
});

function pageNumbersAroundWithOverflowDots(
    totalItems: number,
    selectedItem: number,
    maxVisibleItems: number = totalItems,
): ItemState[] {
    const variant = "overflow";
    return pageNumbersAround(totalItems, selectedItem, variant === "overflow" ? MAX_PAGES : maxVisibleItems, variant);
}

describe("pageNumbersAroundWithOverflowDots()", () => {
    it("on empty input should return []", () => {
        expect(pageNumbersAroundWithOverflowDots(0, 0)).toEqual([]);
    });
    // variant={'overflow'} default to MAX_PAGES
    it("on 1/1 should return [x]", () => {
        expect(pageNumbersAroundWithOverflowDots(1, 0)).toEqual(["visible"]);
    });
    it("on 2/2 should return [x,x]", () => {
        expect(pageNumbersAroundWithOverflowDots(2, 0)).toEqual(["visible", "visible"]);
        expect(pageNumbersAroundWithOverflowDots(2, 1)).toEqual(["visible", "visible"]);
    });
    it("on 3/3 should return [x,x,x]", () => {
        expect(pageNumbersAroundWithOverflowDots(3, 0)).toEqual(["visible", "visible", "visible"]);
        expect(pageNumbersAroundWithOverflowDots(3, 1)).toEqual(["visible", "visible", "visible"]);
        expect(pageNumbersAroundWithOverflowDots(3, 2)).toEqual(["visible", "visible", "visible"]);
    });
    it("on 2/2, 3/2 should return [x,x]", () => {
        expect(pageNumbersAroundWithOverflowDots(2, 0)).toEqual(["visible", "visible"]);
        expect(pageNumbersAroundWithOverflowDots(2, 1)).toEqual(["visible", "visible"]);
        expect(pageNumbersAroundWithOverflowDots(2, 0)).toEqual(["visible", "visible"]);
    });
    it("on 9/9 should return [x,x,x,x,x,x,x,x]", () => {
        expect(pageNumbersAroundWithOverflowDots(9, 0)).toEqual([
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
        ]);
        expect(pageNumbersAroundWithOverflowDots(9, 5)).toEqual([
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
        ]);
        expect(pageNumbersAroundWithOverflowDots(9, 9)).toEqual([
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
        ]);
    });
    it("on 15/15 should return [x,x,x,x,.....,(…),x], [x,x,x,x,.....,(…),x], [x,(...),x,x,x,x,(…),x], [x,(...),x,x,x,x,x,x]", () => {
        expect(pageNumbersAroundWithOverflowDots(15, 0)).toEqual([
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "dots",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
        ]);
        expect(pageNumbersAroundWithOverflowDots(15, 4)).toEqual([
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "dots",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
        ]);
        expect(pageNumbersAroundWithOverflowDots(15, 8)).toEqual([
            "visible",
            "dots",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "hidden",
            "hidden",
            "dots",
            "visible",
        ]);
        expect(pageNumbersAroundWithOverflowDots(15, 15)).toEqual([
            "visible",
            "dots",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "hidden",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
            "visible",
        ]);
    });
});
