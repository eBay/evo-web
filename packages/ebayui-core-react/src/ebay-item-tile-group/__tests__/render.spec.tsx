import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
    EbayItemTile,
    EbayItemTileSupertitle,
    EbayItemTileTitle,
    EbayItemTileSubtitle,
    EbayItemTileDescription,
    EbayItemTileAction,
} from "../../ebay-item-tile";
import { EbayItemTileGroup } from "../";
import { EbayIconHeart16 } from "../../ebay-icon/icons/ebay-icon-heart-16";

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
                        <EbayItemTileAction aria-label="action-label" icon={<EbayIconHeart16 />} />
                        <EbayItemTileSupertitle>Time Sensitive</EbayItemTileSupertitle>
                        <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
                        <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
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
                        <EbayItemTileAction aria-label="action-label" icon={<EbayIconHeart16 />} />
                        <EbayItemTileSupertitle>Time Sensitive</EbayItemTileSupertitle>
                        <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
                        <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
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
