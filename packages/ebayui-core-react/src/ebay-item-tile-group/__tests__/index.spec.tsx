import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import {
    EbayItemTile,
    EbayItemTileSectionSuperTitle,
    EbayItemTileSectionTitle,
    EbayItemTileSectionSubTitle,
    EbayItemTileSectionDescription,
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
                        <EbayItemTileSectionSuperTitle>Time Sensitive</EbayItemTileSectionSuperTitle>
                        <EbayItemTileSectionTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileSectionTitle>
                        <EbayItemTileSectionSubTitle>256GB Space Gray</EbayItemTileSectionSubTitle>
                        <EbayItemTileSectionDescription className="price">$29.99</EbayItemTileSectionDescription>
                        <EbayItemTileSectionDescription as="div">
                            <a href="https://ebay.com">Buy it now</a>
                        </EbayItemTileSectionDescription>
                        <EbayItemTileSectionDescription>Free shipping</EbayItemTileSectionDescription>
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
