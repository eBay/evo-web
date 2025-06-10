import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import {
    EbayItemTile,
    EbayItemTileSuperTitle,
    EbayItemTileTitle,
    EbayItemTileSubTitle,
    EbayItemTileDescription,
    EbayItemTileAction,
} from "../../ebay-item-tile";
import { EbayItemTileGroup } from "../";

describe("<EbayItemTileGroup>", () => {
    it("should call onAction", async () => {
        const onActionClick = jest.fn();
        const tiles = Array.from({ length: 3 });
        render(
            <EbayItemTileGroup onAction={onActionClick}>
                {tiles.map((_, idx) => (
                    <EbayItemTile
                        key={idx}
                        file={{
                            name: "file-name.jpg",
                            type: "image",
                            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                        }}
                    >
                        <EbayItemTileAction aria-label={`action-label-${idx}`} icon="heart16" />
                        <EbayItemTileSuperTitle>Time Sensitive</EbayItemTileSuperTitle>
                        <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
                        <EbayItemTileSubTitle>256GB Space Gray</EbayItemTileSubTitle>
                        <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
                        <EbayItemTileDescription as="div">
                            <a href="https://ebay.com">Buy it now</a>
                        </EbayItemTileDescription>
                        <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
                    </EbayItemTile>
                ))}
            </EbayItemTileGroup>,
        );

        const buttonEl = screen.getByRole("button", { name: "action-label-1" });
        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        expect(onActionClick).toHaveBeenCalled();
    });
});
