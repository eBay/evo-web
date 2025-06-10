import React from "react";
import { render } from "@testing-library/react";
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
        expect(asFragment()).toMatchSnapshot();
    });
});
