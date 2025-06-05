import { act, renderHook } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import useKeyPress from "../use-key-press";

describe("useKeyPress", () => {
    it("should return [false,false] by default", () => {
        const { result } = renderHook(() => useKeyPress());

        expect(result.current).toEqual([false, false]);
    });
    it("should return [true,false] on arrow-up", () => {
        const { result } = renderHook(() => useKeyPress());

        act(() => {
            fireEvent.keyDown(window, { key: "ArrowUp" });
        });

        expect(result.current).toEqual([true, false]);
    });
    it("should return [false,true] on arrow-down", () => {
        const { result } = renderHook(() => useKeyPress());

        act(() => {
            fireEvent.keyDown(window, { key: "ArrowDown" });
        });

        expect(result.current).toEqual([false, true]);
    });
});
