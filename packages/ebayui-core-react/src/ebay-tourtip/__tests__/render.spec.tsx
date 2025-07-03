import React from "react";
import { render, screen, within } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const { DefaultTourtip, PointersWithAllDirections, FooterTourtip, FooterAndHeadingTourtip, PointerWithCustomLocation } =
    composeStories(stories);

describe("ebay-tourtip rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<DefaultTourtip />);

        const tourtip = container.querySelector(".tourtip");
        expect(tourtip).toHaveClass("tourtip--expanded");

        const tourtipButton = screen.getByRole("button", { name: "Info" });
        expect(tourtipButton).toHaveClass("btn tourtip__host btn--secondary");
        expect(tourtipButton).toHaveAttribute("aria-expanded", "true");

        const overlay = screen.getByRole("region");
        expect(overlay).toHaveClass("tourtip__overlay");
        expect(overlay.querySelector(".tourtip__pointer.tourtip__pointer--bottom")).toBeInTheDocument();
        expect(overlay.querySelector(".tourtip__mask .tourtip__cell .tourtip__content p")).toHaveTextContent("Content");

        const closeButton = screen.getByRole("button", { name: "close" });
        expect(closeButton).toHaveClass("tourtip__close");
        expect(closeButton).toHaveAttribute("type", "button");
        expect(closeButton.querySelector("svg")).toMatchSnapshot();
    });

    it("renders footer tourtip story correctly", () => {
        const { container } = render(<FooterTourtip />);

        const tourtip = container.querySelector(".tourtip");
        expect(tourtip).toHaveClass("tourtip--expanded");

        const tourtipButton = screen.getByRole("button", { name: "Info" });
        expect(tourtipButton).toHaveClass("btn tourtip__host btn--secondary");
        expect(tourtipButton).toHaveAttribute("aria-expanded", "true");

        const overlay = screen.getByRole("region");
        expect(overlay).toHaveClass("tourtip__overlay");
        expect(overlay.querySelector(".tourtip__pointer.tourtip__pointer--bottom")).toBeInTheDocument();
        expect(overlay.querySelector(".tourtip__mask .tourtip__cell .tourtip__content p")).toHaveTextContent(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        );

        const footer: HTMLElement = overlay.querySelector(".tourtip__footer");
        expect(footer.querySelector(".tourtip__index")).toHaveTextContent("1 / 3");
        expect(within(footer).getByRole("button", { name: "Back" })).toHaveClass("fake-link");
        expect(within(footer).getByRole("button", { name: "Next" })).toHaveClass("btn btn--primary");
    });

    it("renders footer and heading tourtip story correctly", () => {
        const { container } = render(<FooterAndHeadingTourtip />);

        const tourtip = container.querySelector(".tourtip");
        expect(tourtip).toHaveClass("tourtip--expanded");

        const tourtipButton = screen.getByRole("button", { name: "Info" });
        expect(tourtipButton).toHaveClass("btn tourtip__host btn--secondary");
        expect(tourtipButton).toHaveAttribute("aria-expanded", "true");

        const overlay = screen.getByRole("region");
        expect(overlay).toHaveClass("tourtip__overlay");
        expect(overlay.querySelector(".tourtip__pointer.tourtip__pointer--bottom")).toBeInTheDocument();
        expect(overlay.querySelector(".tourtip__mask .tourtip__cell .tourtip__content p")).toHaveTextContent(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        );

        const heading = overlay.querySelector(".tourtip__heading");
        expect(heading).toHaveTextContent("Title");

        const footer: HTMLElement = overlay.querySelector(".tourtip__footer");
        expect(footer.querySelector(".tourtip__index")).toHaveTextContent("1 / 3");
        expect(within(footer).getByRole("button", { name: "Back" })).toHaveClass("fake-link");
        expect(within(footer).getByRole("button", { name: "Next" })).toHaveClass("btn btn--primary");
    });

    it("renders pointer with custom location story correctly", () => {
        const { container } = render(<PointerWithCustomLocation />);

        const tourtip = container.querySelector(".tourtip");
        expect(tourtip).toHaveClass("tourtip--expanded");

        const tourtipButton = screen.getByRole("link", { name: "View options" });
        expect(tourtipButton).toHaveClass("tourtip__host");
        expect(tourtipButton).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButton).toHaveAttribute("href", "https://www.ebay.com");

        const overlay = screen.getByRole("region");
        expect(overlay).toHaveClass("tourtip__overlay");
        expect(overlay).toHaveStyle({ top: "40px", left: "-16px" });
        expect(overlay.querySelector(".tourtip__pointer.tourtip__pointer--top-left")).toBeInTheDocument();
        expect(overlay.querySelector(".tourtip__mask .tourtip__cell .tourtip__content p")).toHaveTextContent(
            "Use Access Key 'S' to display settings.",
        );
    });

    it("renders pointer direction story correctly", () => {
        const { container } = render(<PointersWithAllDirections />);

        const [
            tourtipTop,
            tourtipTopLeft,
            tourtipTopRight,
            tourtipRight,
            tourtipRightBottom,
            tourtipRightTop,
            tourtipBottom,
            tourtipBottomLeft,
            tourtipBottomRight,
            tourtipLeft,
            tourtipLeftBottom,
            tourtipLeftTop,
        ] = container.querySelectorAll(".tourtip");
        expect(tourtipTop).toHaveClass("tourtip--expanded");

        const tourtipButtonTop = within(tourtipTop as HTMLElement).getByRole("link", { name: "top" });
        expect(tourtipButtonTop).toHaveClass("tourtip__host");
        expect(tourtipButtonTop).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonTop).toHaveAttribute("href", "https://www.ebay.com");

        const overlayTop = tourtipTop.querySelector(".tourtip__overlay");
        expect(overlayTop.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--top");

        const tourtipButtonTopLeft = within(tourtipTopLeft as HTMLElement).getByRole("link", { name: "top-left" });
        expect(tourtipButtonTopLeft).toHaveClass("tourtip__host");
        expect(tourtipButtonTopLeft).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonTopLeft).toHaveAttribute("href", "https://www.ebay.com");

        const overlayTopLeft = tourtipTopLeft.querySelector(".tourtip__overlay");
        expect(overlayTopLeft.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--top-left");

        const tourtipButtonTopRight = within(tourtipTopRight as HTMLElement).getByRole("link", { name: "top-right" });
        expect(tourtipButtonTopRight).toHaveClass("tourtip__host");
        expect(tourtipButtonTopRight).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonTopRight).toHaveAttribute("href", "https://www.ebay.com");

        const overlayTopRight = tourtipTopRight.querySelector(".tourtip__overlay");
        expect(overlayTopRight.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--top-right");

        const tourtipButtonRight = within(tourtipRight as HTMLElement).getByRole("link", { name: "right" });
        expect(tourtipButtonRight).toHaveClass("tourtip__host");
        expect(tourtipButtonRight).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonRight).toHaveAttribute("href", "https://www.ebay.com");

        const overlayRight = tourtipRight.querySelector(".tourtip__overlay");
        expect(overlayRight.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--right");

        const tourtipButtonRightBottom = within(tourtipRightBottom as HTMLElement).getByRole("link", {
            name: "right-bottom",
        });
        expect(tourtipButtonRightBottom).toHaveClass("tourtip__host");
        expect(tourtipButtonRightBottom).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonRightBottom).toHaveAttribute("href", "https://www.ebay.com");

        const overlayRightBottom = tourtipRightBottom.querySelector(".tourtip__overlay");
        expect(overlayRightBottom.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--right-bottom");

        const tourtipButtonRightTop = within(tourtipRightTop as HTMLElement).getByRole("link", { name: "right-top" });
        expect(tourtipButtonRightTop).toHaveClass("tourtip__host");
        expect(tourtipButtonRightTop).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonRightTop).toHaveAttribute("href", "https://www.ebay.com");

        const overlayRightTop = tourtipRightTop.querySelector(".tourtip__overlay");
        expect(overlayRightTop.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--right-top");

        const tourtipButtonBottom = within(tourtipBottom as HTMLElement).getByRole("link", { name: "bottom" });
        expect(tourtipButtonBottom).toHaveClass("tourtip__host");
        expect(tourtipButtonBottom).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonBottom).toHaveAttribute("href", "https://www.ebay.com");

        const overlayBottom = tourtipBottom.querySelector(".tourtip__overlay");
        expect(overlayBottom.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--bottom");

        const tourtipButtonBottomLeft = within(tourtipBottomLeft as HTMLElement).getByRole("link", {
            name: "bottom-left",
        });
        expect(tourtipButtonBottomLeft).toHaveClass("tourtip__host");
        expect(tourtipButtonBottomLeft).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonBottomLeft).toHaveAttribute("href", "https://www.ebay.com");

        const overlayBottomLeft = tourtipBottomLeft.querySelector(".tourtip__overlay");
        expect(overlayBottomLeft.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--bottom-left");

        const tourtipButtonBottomRight = within(tourtipBottomRight as HTMLElement).getByRole("link", {
            name: "bottom-right",
        });
        expect(tourtipButtonBottomRight).toHaveClass("tourtip__host");
        expect(tourtipButtonBottomRight).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonBottomRight).toHaveAttribute("href", "https://www.ebay.com");

        const overlayBottomRight = tourtipBottomRight.querySelector(".tourtip__overlay");
        expect(overlayBottomRight.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--bottom-right");

        const tourtipButtonLeft = within(tourtipLeft as HTMLElement).getByRole("link", { name: "left" });
        expect(tourtipButtonLeft).toHaveClass("tourtip__host");
        expect(tourtipButtonLeft).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonLeft).toHaveAttribute("href", "https://www.ebay.com");

        const overlayLeft = tourtipLeft.querySelector(".tourtip__overlay");
        expect(overlayLeft.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--left");

        const tourtipButtonLeftBottom = within(tourtipLeftBottom as HTMLElement).getByRole("link", {
            name: "left-bottom",
        });
        expect(tourtipButtonLeftBottom).toHaveClass("tourtip__host");
        expect(tourtipButtonLeftBottom).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonLeftBottom).toHaveAttribute("href", "https://www.ebay.com");

        const overlayLeftBottom = tourtipLeftBottom.querySelector(".tourtip__overlay");
        expect(overlayLeftBottom.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--left-bottom");

        const tourtipButtonLeftTop = within(tourtipLeftTop as HTMLElement).getByRole("link", { name: "left-top" });
        expect(tourtipButtonLeftTop).toHaveClass("tourtip__host");
        expect(tourtipButtonLeftTop).toHaveAttribute("aria-expanded", "true");
        expect(tourtipButtonLeftTop).toHaveAttribute("href", "https://www.ebay.com");

        const overlayLeftTop = tourtipLeftTop.querySelector(".tourtip__overlay");
        expect(overlayLeftTop.querySelector(".tourtip__pointer")).toHaveClass("tourtip__pointer--left-top");
    });
});
