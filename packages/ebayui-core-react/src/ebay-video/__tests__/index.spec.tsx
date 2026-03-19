import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EbayVideo, EbayVideoSource } from "../index";

describe("<EbayVideo>", () => {
    const defaultProps = {
        thumbnail: "https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/iphone-thumbnail.jpg",
        width: 500,
        height: 300,
        a11yPlayText: "Play",
        errorText: "Error loading",
        reportText: "Report",
    };

    beforeEach(() =>
        render(
            <EbayVideo {...defaultProps}>
                <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4" />
            </EbayVideo>,
        ),
    );

    it("shows video player with poster", () => {
        const video = document.getElementsByTagName("video")[0];
        expect(video).not.toBeNull();
        expect(video.poster).toBe("https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/iphone-thumbnail.jpg");
    });

    it("shows error message", () => {
        expect(screen.getByText("Error loading")).toBeInTheDocument();
    });

    it("shows play button", () => {
        const playButtons = screen.getAllByLabelText("Play");
        expect(playButtons.length).toBeGreaterThan(0);
    });

    it("shows loading spinner", () => {
        const spinner = document.querySelector(".shaka-spinner");
        expect(spinner).toBeInTheDocument();
    });

    it("renders initial play button in shaka controls container", () => {
        const playButtonContainer = document.querySelector(".shaka-play-button-container");
        expect(playButtonContainer).toBeInTheDocument();

        const shakaControls = document.querySelector(".shaka-controls-container");
        expect(shakaControls).toBeInTheDocument();

        // Verify play button is inside shaka controls
        expect(shakaControls?.querySelector(".shaka-play-button")).toBeInTheDocument();
    });

    it("play button has correct icon with width 64", () => {
        const playButtonContainer = document.querySelector(".shaka-play-button-container");
        const playButton = playButtonContainer?.querySelector(".shaka-play-button");
        expect(playButton).toBeInTheDocument();

        const icon = playButton?.querySelector("svg");
        expect(icon).toHaveAttribute("width", "64");
        expect(icon).toHaveClass("icon--64-colored");
    });

    it("removes initial play button on click", async () => {
        const user = userEvent.setup();
        const playButtonContainer = document.querySelector(".shaka-play-button-container");
        const playButton = playButtonContainer?.querySelector(".shaka-play-button");
        expect(playButton).toBeInTheDocument();

        await user.click(playButton!);

        await waitFor(() => {
            const playButtonContainerAfterClick = document.querySelector(".shaka-play-button-container");
            // The initial play button should be removed from React tree
            expect(playButtonContainerAfterClick).not.toBeInTheDocument();
        });
    });

    describe("autoplay behavior", () => {
        it("sets autoplay attribute when autoplay prop is true", () => {
            const { container } = render(
                <EbayVideo {...defaultProps} autoPlay>
                    <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4" />
                </EbayVideo>,
            );

            const video = container.querySelector("video") as HTMLVideoElement;
            expect(video.autoplay).toBe(true);
        });

        it("triggers play when action prop changes to 'play'", () => {
            const { container, rerender } = render(
                <EbayVideo {...defaultProps}>
                    <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4" />
                </EbayVideo>,
            );

            const video = container.querySelector("video") as HTMLVideoElement;
            const playSpy = vi.spyOn(video, "play").mockImplementation(() => Promise.resolve());

            // Change action to 'play'
            rerender(
                <EbayVideo {...defaultProps} action="play">
                    <EbayVideoSource src="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4" />
                </EbayVideo>,
            );

            expect(playSpy).toHaveBeenCalled();
        });
    });
});
