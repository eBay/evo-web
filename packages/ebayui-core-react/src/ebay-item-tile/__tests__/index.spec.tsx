import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

        const buttonEl = screen.getByRole("button", { name: "action-label" });
        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        expect(onActionClick).toHaveBeenCalled();
    });
});
