import { renderHook } from "@testing-library/react";
import { useFloating } from "@floating-ui/react";
import { vi } from "vitest";
import { useFloatingDropdown } from "../floating-ui";

vi.mock("@floating-ui/react", () => ({
    autoUpdate: vi.fn(),
    flip: vi.fn(() => ({ name: "flip" })),
    offset: vi.fn(() => ({ name: "offset" })),
    shift: vi.fn(() => ({ name: "shift" })),
    arrow: vi.fn(() => ({ name: "arrow" })),
    inline: vi.fn(() => ({ name: "inline" })),
    useFloating: vi.fn(),
}));

describe("useFloatingDropdown", () => {
    const floatingStyles = {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0px, 0px)",
    } as const;

    const refs = {
        reference: { current: null },
        floating: { current: null },
        setReference: vi.fn(),
        setFloating: vi.fn(),
    };

    beforeEach(() => {
        vi.mocked(useFloating).mockReturnValue({
            floatingStyles,
            refs,
        } as unknown as ReturnType<typeof useFloating>);
    });

    it("should not return overlay styles when closed", () => {
        const { result } = renderHook(() => useFloatingDropdown({ open: false }));

        expect(result.current.overlayStyles).toBeUndefined();
    });

    it("should return overlay styles when open", () => {
        const { result } = renderHook(() => useFloatingDropdown({ open: true }));

        expect(result.current.overlayStyles).toBe(floatingStyles);
    });
});
