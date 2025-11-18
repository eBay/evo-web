import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { EbayFilePreviewCard, EbayFilePreviewCardAction } from "../";
import { EbayIconHeart16 } from "../../ebay-icon/icons/ebay-icon-heart-16";

describe("<EbayFilePreviewCard>", () => {
    it("should call onCancel", async () => {
        const onCancelClick = jest.fn();
        render(
            <EbayFilePreviewCard status="uploading" a11yCancelUploadText="Cancel upload" onCancel={onCancelClick} />,
        );

        const buttonEl = screen.getByRole("button", { name: "Cancel upload" });
        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        expect(onCancelClick).toHaveBeenCalled();
    });
    it("should call onDelete", async () => {
        const onDeleteClick = jest.fn();
        render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete text"
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
                onDelete={onDeleteClick}
            />,
        );

        const buttonEl = screen.getByRole("button", { name: "Delete text" });
        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        expect(onDeleteClick).toHaveBeenCalled();
    });
    it("should call multi action menu delete call", async () => {
        const onDeleteClick = jest.fn();
        const onMenuAction = jest.fn();
        render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
                menuActions={[
                    {
                        event: "edit",
                        label: "Edit",
                    },
                    {
                        event: "download",
                        label: "Download",
                    },
                ]}
                onMenuAction={onMenuAction}
                onDelete={onDeleteClick}
            />,
        );

        const buttonEl = screen.getByRole("button");
        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        const deleteEl = screen.getByRole("menuitem", { name: "Delete" });
        await userEvent.click(deleteEl);
        expect(onDeleteClick).toHaveBeenCalled();
        expect(onMenuAction).not.toHaveBeenCalled();
    });
    it("should call multi action menu delete call", async () => {
        const onDeleteClick = jest.fn();
        const onMenuAction = jest.fn();
        render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
                menuActions={[
                    {
                        event: "edit",
                        label: "Edit",
                    },
                    {
                        event: "download",
                        label: "Download",
                    },
                ]}
                onMenuAction={onMenuAction}
                onDelete={onDeleteClick}
            />,
        );

        const buttonEl = screen.getByRole("button");
        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        const editEl = screen.getByRole("menuitem", { name: "Edit" });
        await userEvent.click(editEl);
        expect(onMenuAction).toHaveBeenCalledWith(
            expect.any(Object),
            expect.objectContaining({
                checked: [0],
                eventName: "edit",
                index: 0,
            }),
        );
        expect(onDeleteClick).not.toHaveBeenCalled();
    });
    it("should call see more", async () => {
        const onSeeMoreMock = jest.fn();
        render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                a11ySeeMoreText="See more"
                seeMore={15}
                onSeeMore={onSeeMoreMock}
                file={{
                    name: "file-name.jpg",
                    type: "image/jpeg",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
            />,
        );

        const buttonEl = screen.getByRole("button", { name: "See more" });
        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        expect(onSeeMoreMock).toHaveBeenCalled();
    });
    it("should call on action", async () => {
        const onActionMock = jest.fn();
        render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
                onAction={onActionMock}
            >
                <EbayFilePreviewCardAction icon={<EbayIconHeart16 />} aria-label="action-label" />
            </EbayFilePreviewCard>,
        );

        const buttonEl = screen.getByRole("button", { name: "action-label" });
        expect(buttonEl).toBeInTheDocument();
        await userEvent.click(buttonEl);
        expect(onActionMock).toHaveBeenCalled();
    });
});
