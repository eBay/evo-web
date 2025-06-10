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
} from "../";

describe("<EbayItemTile>", () => {
    it("should call onAction", async () => {
        const onActionClick = jest.fn();
        render(
            <EbayItemTile
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
                onAction={onActionClick}
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
            </EbayItemTile>,
        );

        const buttonEl = screen.getByRole("button", { name: "action-label" });
        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        expect(onActionClick).toHaveBeenCalled();
    });
});
