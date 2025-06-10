import React from "react";
import { render } from "@testing-library/react";
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
    it("renders component in gallery layout", () => {
        const tiles = Array.from({ length: 3 });
        const { asFragment } = render(
            <EbayItemTileGroup>
                {tiles.map((_, idx) => (
                    <EbayItemTile
                        key={idx}
                        file={{
                            name: "file-name.jpg",
                            type: "image",
                            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                        }}
                    >
                        <EbayItemTileAction aria-label="action-label" icon="heart16" />
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
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders component in list layout", () => {
        const tiles = Array.from({ length: 3 });
        const { asFragment } = render(
            <EbayItemTileGroup layout="list">
                {tiles.map((_, idx) => (
                    <EbayItemTile
                        key={idx}
                        file={{
                            name: "file-name.jpg",
                            type: "image",
                            src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                        }}
                    >
                        <EbayItemTileAction aria-label="action-label" icon="heart16" />
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
        expect(asFragment()).toMatchSnapshot();
    });
});
