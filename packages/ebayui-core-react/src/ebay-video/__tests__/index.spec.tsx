import React from "react";
import { render, screen } from "@testing-library/react";
import { EbayVideo, EbayVideoSource } from "../index";

describe("<EbayVideo>", () => {
    beforeEach(() =>
        render(
            <EbayVideo
                thumbnail="https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/iphone-thumbnail.jpg"
                width={500}
                height={300}
                a11yPlayText="Play"
                a11yLoadText="Loading"
                errorText="Error loading"
                reportText="Report"
            >
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
        expect(screen.getByLabelText("Play")).toBeInTheDocument();
    });

    it("shows loading spinner", () => {
        expect(screen.getByLabelText("Loading")).toBeInTheDocument();
    });
});
