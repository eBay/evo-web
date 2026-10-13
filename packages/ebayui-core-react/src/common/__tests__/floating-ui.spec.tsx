import React from "react";
import { render, renderHook } from "@testing-library/react";
import { useFloating } from "@floating-ui/react";
import { describe, expect, it, vi } from "vitest";
import { useFloatingDropdown } from "../floating-ui";
import { EbayTourtip, EbayTourtipContent, EbayTourtipHost } from "../../ebay-tourtip";

vi.mock("@floating-ui/react", async (importOriginal) => {
    const actual = await importOriginal<typeof import("@floating-ui/react")>();

    return {
        ...actual,
        autoUpdate: vi.fn(),
        flip: vi.fn(() => ({ name: "flip" })),
        offset: vi.fn(() => ({ name: "offset" })),
        shift: vi.fn(() => ({ name: "shift" })),
        arrow: vi.fn(() => ({ name: "arrow" })),
        inline: vi.fn(() => ({ name: "inline" })),
        useFloating: vi.fn(),
    };
});

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

    it("does not return overlay styles when closed", () => {
        vi.mocked(useFloating).mockReturnValue({ floatingStyles, refs } as unknown as ReturnType<typeof useFloating>);

        const { result } = renderHook(() => useFloatingDropdown({ open: false }));

        expect(result.current.overlayStyles).toBeUndefined();
    });

    it("returns overlay styles when open", () => {
        vi.mocked(useFloating).mockReturnValue({ floatingStyles, refs } as unknown as ReturnType<typeof useFloating>);

        const { result } = renderHook(() => useFloatingDropdown({ open: true }));

        expect(result.current.overlayStyles).toBe(floatingStyles);
    });
});

describe("floating tooltip placement", () => {
    it("updates the pointer direction when the tooltip flips", () => {
        vi.mocked(useFloating).mockReturnValue({
            floatingStyles: {},
            refs: {
                reference: {},
                floating: {},
                setReference: vi.fn(),
                setFloating: vi.fn(),
            },
            middlewareData: { arrow: { x: 12, y: 0 } },
            placement: "bottom",
        } as unknown as ReturnType<typeof useFloating>);

        const { container } = render(
            <EbayTourtip a11yCloseText="close" pointer="bottom">
                <EbayTourtipHost>
                    <button>Open tourtip</button>
                </EbayTourtipHost>
                <EbayTourtipContent>Tourtip content</EbayTourtipContent>
            </EbayTourtip>,
        );

        expect(container.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--top");
    });
});
