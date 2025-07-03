import React from "react";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Default } from "./index.stories";

const DefaultStory = composeStory(Default, Meta);

describe("ebay-video rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<DefaultStory />);
        const player = container.querySelector(".video-player");
        expect(player).toHaveClass("video-player--poster");
        expect(player).toHaveAttribute("style", "width: 600px; height: 400px;");

        const videoContainer = player.querySelector(".video-player__container");
        expect(videoContainer).toHaveClass("shaka-video-container");
        expect(videoContainer).toHaveAttribute("data-shaka-player-container", "");
        expect(videoContainer).toHaveAttribute("shaka-controls", "true");

        const videoElement = videoContainer.querySelector(".shaka-video");
        expect(videoElement).toBeInTheDocument();

        const overlay = player.querySelector(".video-player__overlay");
        expect(overlay).toHaveClass("video-player__overlay");

        const controlsContainer = videoContainer.querySelector(".shaka-controls-container");
        expect(controlsContainer).toBeInTheDocument();
        const playButton = controlsContainer.querySelector(".shaka-play-button");
        expect(playButton).toHaveAttribute("aria-label", "Play");
        expect(playButton).toHaveAttribute("icon", "replay");
        expect(playButton).toHaveClass("shaka-play-button shaka-no-propagation");
        const spinnerContainer = videoContainer.querySelector(".shaka-spinner-container");
        expect(spinnerContainer).toHaveClass("shaka-hidden");

        const bottomControls = player.querySelector(".shaka-bottom-controls");
        expect(bottomControls).toHaveClass("shaka-no-propagation");

        const errorOverlay = player.querySelector(".video-player__overlay--hidden");
        expect(errorOverlay).toBeInTheDocument();
        expect(errorOverlay.textContent).toContain("An error has occurred");

        const scrimContainer = player.querySelector(".shaka-scrim-container");
        expect(scrimContainer).toBeInTheDocument();

        const serverSideAdContainer = player.querySelector(".shaka-server-side-ad-container");
        expect(serverSideAdContainer).toBeInTheDocument();
        const clientSideAdContainer = player.querySelector(".shaka-client-side-ad-container");
        expect(clientSideAdContainer).toHaveClass("shaka-hidden");

        const video = player.querySelector("video");
        expect(video).toHaveClass("shaka-video");
        expect(video).toHaveAttribute(
            "poster",
            "https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/iphone-thumbnail.jpg",
        );
        expect(video).toHaveAttribute("style", "width: 600px; height: 400px;");
    });
});
