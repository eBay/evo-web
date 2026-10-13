import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { EbayTourtip, EbayTourtipContent, EbayTourtipHost } from "../../ebay-tourtip";

vi.mock("@floating-ui/react", async (importOriginal) => {
    const actual = await importOriginal<typeof import("@floating-ui/react")>();

    return {
        ...actual,
        useFloating: vi.fn(() => ({
            floatingStyles: {},
            refs: {
                reference: {},
                floating: {},
                setReference: vi.fn(),
                setFloating: vi.fn(),
            },
            middlewareData: { arrow: { x: 12, y: 0 } },
            placement: "bottom",
        })),
    };
});

describe("floating tooltip placement", () => {
    it("updates the pointer direction when the tooltip flips", () => {
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
