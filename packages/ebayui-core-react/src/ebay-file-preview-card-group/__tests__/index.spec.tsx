import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { EbayFilePreviewCardProps, EbayFilePreviewCard, EbayFilePreviewCardAction } from "../../ebay-file-preview-card";
import { EbayFilePreviewCardGroup } from "../";
import { EbayIconHeart16 } from "../../ebay-icon/icons/ebay-icon-heart-16";

describe("<EbayFilePreviewCardGroup>", () => {
    it("click on see more show more images", async () => {
        const cards = Array.from({ length: 20 }, () => ({
            file: {
                name: "file-name.jpg",
                type: "image",
                src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
            },
        }));
        render(
            <EbayFilePreviewCardGroup a11ySeeMoreText="see more tet">
                {cards.map((cardFile, index) => (
                    <EbayFilePreviewCard key={index} {...cardFile} />
                ))}
            </EbayFilePreviewCardGroup>,
        );

        const imagesBeforeClick = screen.getAllByRole("img");
        expect(imagesBeforeClick.length).toBe(16);

        const seeMoreBtn = screen.getByText("+5");
        await userEvent.click(seeMoreBtn);

        const imagesAfterCLick = screen.getAllByRole("img");
        expect(imagesAfterCLick.length).toBe(20);
    });
    it("click on cancel fire onCancel event", async () => {
        const cards: EbayFilePreviewCardProps[] = Array.from({ length: 2 }, () => ({
            status: "uploading",
            file: {
                name: "file-name.jpg",
                type: "image",
                src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
            },
            a11yCancelUploadText: "Cancel upload",
        }));
        const onCancelClick = jest.fn();
        render(
            <EbayFilePreviewCardGroup onCancel={onCancelClick}>
                {cards.map((cardFile, index) => (
                    <EbayFilePreviewCard key={index} {...cardFile} />
                ))}
            </EbayFilePreviewCardGroup>,
        );
        const buttonEl = screen.getAllByRole("button", {
            name: "Cancel upload",
        })[0];

        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        expect(onCancelClick).toHaveBeenCalled();
    });
    it("click on menu action fire onMenuAction event", async () => {
        const onDeleteClick = jest.fn();
        const onMenuAction = jest.fn();
        const cards: EbayFilePreviewCardProps[] = Array.from({ length: 2 }, () => ({
            file: {
                name: "file-name.jpg",
                type: "image",
                src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
            },
            deleteText: "Delete",
            a11yCancelUploadText: "Cancel upload",
            menuActions: [
                {
                    event: "edit",
                    label: "Edit",
                },
                {
                    event: "download",
                    label: "Download",
                },
            ],
        }));

        render(
            <EbayFilePreviewCardGroup onMenuAction={onMenuAction} onDelete={onDeleteClick}>
                {cards.map((cardFile, index) => (
                    <EbayFilePreviewCard key={index} {...cardFile} />
                ))}
            </EbayFilePreviewCardGroup>,
        );
        const buttonEl = screen.getAllByRole("button")[0];

        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        const editEl = screen.getByRole("menuitem", { name: "Edit" });
        await userEvent.click(editEl);
        expect(onMenuAction).toHaveBeenCalledWith(
            expect.any(Object),
            expect.objectContaining({
                index: 0,
                menuActionEvent: {
                    checked: [0],
                    eventName: "edit",
                    index: 0,
                },
            }),
        );
        expect(onDeleteClick).not.toHaveBeenCalled();
    });
    it("click on delete fire onDelete event", async () => {
        const onDeleteClick = jest.fn();
        const cards: EbayFilePreviewCardProps[] = Array.from({ length: 2 }, () => ({
            file: {
                name: "file-name.jpg",
                type: "image",
                src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
            },
            deleteText: "Delete",
            a11yCancelUploadText: "Cancel upload",
        }));

        render(
            <EbayFilePreviewCardGroup onDelete={onDeleteClick}>
                {cards.map((cardFile, index) => (
                    <EbayFilePreviewCard key={index} {...cardFile} />
                ))}
            </EbayFilePreviewCardGroup>,
        );
        const buttonEl = screen.getAllByRole("button", {
            name: "Delete",
        })[0];

        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        expect(onDeleteClick).toHaveBeenCalled();
    });
    it("click on action fire onAction event", async () => {
        const onActionClick = jest.fn();
        const cards: EbayFilePreviewCardProps[] = Array.from({ length: 2 }, () => ({
            file: {
                name: "file-name.jpg",
                type: "image",
                src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
            },
        }));

        render(
            <EbayFilePreviewCardGroup onAction={onActionClick}>
                {cards.map((cardFile, index) => (
                    <EbayFilePreviewCard key={index} {...cardFile}>
                        <EbayFilePreviewCardAction icon={<EbayIconHeart16 />} aria-label="action-aria-label" />
                    </EbayFilePreviewCard>
                ))}
            </EbayFilePreviewCardGroup>,
        );
        const buttonEl = screen.getAllByRole("button", {
            name: "action-aria-label",
        })[0];

        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        expect(onActionClick).toHaveBeenCalled();
    });
});
