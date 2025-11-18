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
} from "../";
import { EbayIconHeart16 } from "../../ebay-icon/icons/ebay-icon-heart-16";

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
                <EbayItemTileAction aria-label="action-label" icon={<EbayIconHeart16 />} />
                <EbayItemTileSupertitle>Time Sensitive</EbayItemTileSupertitle>
                <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
                <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
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
                <EbayItemTileSupertitle>Time Sensitive</EbayItemTileSupertitle>
                <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
                <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
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
                <EbayItemTileSupertitle>Time Sensitive</EbayItemTileSupertitle>
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
                <EbayItemTileSupertitle>Time Sensitive</EbayItemTileSupertitle>
                <EbayItemTileTitle href="/collection">Apple iPhone 11 Pro Max </EbayItemTileTitle>
                <EbayItemTileSubtitle>256GB Space Gray</EbayItemTileSubtitle>
            </EbayItemTile>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
