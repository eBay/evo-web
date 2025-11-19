import React from "react";
import { render } from "@testing-library/react";
import { EbayFilePreviewCard, EbayFilePreviewCardAction } from "../";
import { EbayIconHeart16 } from "../../ebay-icon/icons/ebay-icon-heart-16";

describe("<EbayFilePreviewCard>", () => {
    it("renders with status uploading", () => {
        const { asFragment } = render(
            <EbayFilePreviewCard status="uploading" a11yCancelUploadText="Cancel upload" className="test-class" />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders as span element", () => {
        const { asFragment } = render(
            <EbayFilePreviewCard
                as="span"
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
                footerTitle="file-name.csv"
                footerSubtitle="English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic"
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders with a href", () => {
        const { asFragment } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                href="/collection"
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
                footerTitle="file-name.csv"
                footerSubtitle="English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic"
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders with action button", () => {
        const { asFragment } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
            >
                <EbayFilePreviewCardAction icon={<EbayIconHeart16 />} aria-label="action label" />
            </EbayFilePreviewCard>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders with no action button", () => {
        const { asFragment } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
                footerTitle="file-name.csv"
                footerSubtitle="English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic"
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders with image, delete button and footer", () => {
        const { asFragment } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: "file-name.jpg",
                    type: "image",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
                footerTitle="file-name.csv"
                footerSubtitle="English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic"
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders with video", () => {
        const { asFragment } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: "file-name.jpg",
                    type: "image/jpeg",
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
            />,
        );
        const snapshot = asFragment();
        const fakeMenuButtonElement = snapshot.querySelectorAll("button.menu-button__button");
        fakeMenuButtonElement.forEach((button) => {
            button.setAttribute("aria-controls", "1234");
        });
        expect(snapshot).toMatchSnapshot();
    });
    it("renders with document", () => {
        const { asFragment } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: "file-name.jpg",
                    type: "image/jpeg",
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
            />,
        );
        const snapshot = asFragment();
        const fakeMenuButtonElement = snapshot.querySelectorAll("button.menu-button__button");
        fakeMenuButtonElement.forEach((button) => {
            button.setAttribute("aria-controls", "1234");
        });
        expect(snapshot).toMatchSnapshot();
    });
    it("renders with multi action button", () => {
        const { asFragment } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: "file-name.jpg",
                    type: "image/jpeg",
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
            />,
        );
        const snapshot = asFragment();
        const fakeMenuButtonElement = snapshot.querySelectorAll("button.menu-button__button");
        fakeMenuButtonElement.forEach((button) => {
            button.setAttribute("aria-controls", "1234");
        });
        expect(snapshot).toMatchSnapshot();
    });
    it("renders with see more button", () => {
        const { asFragment } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                a11ySeeMoreText="See more"
                seeMore={15}
                file={{
                    name: "file-name.jpg",
                    type: "image/jpeg",
                    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
                }}
            />,
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("should render with video", async () => {
        const { asFragment } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: "file-name.mov",
                    type: "video/quicktime",
                    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
                }}
            />,
        );

        expect(asFragment()).toMatchSnapshot();
    });
    it("should render with mock file", async () => {
        const mockFile = new File(["file content"], "example.txt", {
            type: "text/plain",
        });
        const { asFragment } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={mockFile}
                footerTitle="file-name.csv"
                footerSubtitle="English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic"
            />,
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
