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
} from "../";

describe("<EbayItemTile>", () => {
    it("renders component with action", () => {
        const { asFragment } = render(
            <EbayItemTile
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
            </EbayItemTile>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders component without action", () => {
        const { asFragment } = render(
            <EbayItemTile
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
            >
                <EbayItemTileSuperTitle>Time Sensitive</EbayItemTileSuperTitle>
                <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
                <EbayItemTileSubTitle>256GB Space Gray</EbayItemTileSubTitle>
                <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
                <EbayItemTileDescription as="div">
                    <a href="https://ebay.com">Buy it now</a>
                </EbayItemTileDescription>
                <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
            </EbayItemTile>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders component without secondary section", () => {
        const { asFragment } = render(
            <EbayItemTile
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
            >
                <EbayItemTileSuperTitle>Time Sensitive</EbayItemTileSuperTitle>
                <EbayItemTileDescription className="price">$29.99</EbayItemTileDescription>
                <EbayItemTileDescription as="div">
                    <a href="https://ebay.com">Buy it now</a>
                </EbayItemTileDescription>
                <EbayItemTileDescription>Free shipping</EbayItemTileDescription>
            </EbayItemTile>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders component without description", () => {
        const { asFragment } = render(
            <EbayItemTile
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
            >
                <EbayItemTileSuperTitle>Time Sensitive</EbayItemTileSuperTitle>
                <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
                <EbayItemTileSubTitle>256GB Space Gray</EbayItemTileSubTitle>
            </EbayItemTile>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
