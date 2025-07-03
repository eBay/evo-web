import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";

const {
    Default,
    Disabled,
    ExpandedByDefault,
    CustomIcon,
    TextInsteadOfIcon,
    _PointerDirection: PointerDirection,
    Modal,
} = composeStories(stories);

jest.mock("../../common/random-id");

describe("ebay-infotip rendering", () => {
    it("renders default story correctly", () => {
        const { container } = render(<Default />);

        const infotip = container.querySelector(".infotip");
        expect(infotip).not.toHaveClass("infotip--expanded");

        const infotipButton = screen.getByRole("button", { name: "Infotip" });
        expect(infotipButton).toHaveClass("icon-btn icon-btn--transparent infotip__host");
        expect(infotipButton).toHaveAttribute("aria-expanded", "false");
        expect(infotipButton.querySelector("svg")).toMatchSnapshot();

        const overlay = container.querySelector(".infotip__overlay");
        expect(overlay.querySelector(".infotip__pointer.infotip__pointer--bottom")).toBeInTheDocument();
        expect(overlay.querySelector(".infotip__mask")).toBeInTheDocument();
        expect(overlay.querySelector(".infotip__heading")).toHaveTextContent("Title");
        expect(overlay.querySelector(".infotip__content p")).toHaveTextContent("Content");

        const closeButton = screen.getByRole("button", { name: "Close" });
        expect(closeButton).toHaveClass("icon-btn icon-btn--transparent infotip__close");
        expect(closeButton.querySelector("svg")).toMatchSnapshot();
    });

    it("renders disabled story correctly", () => {
        render(<Disabled />);

        const infotipButton = screen.getByRole("button", { name: "Infotip" });
        expect(infotipButton).toHaveAttribute("aria-expanded", "false");
        expect(infotipButton).toBeDisabled();
    });

    it("renders expanded by default story correctly", () => {
        const { container } = render(<ExpandedByDefault />);

        const infotip = container.querySelector(".infotip");
        expect(infotip).toHaveClass("infotip--expanded");

        const infotipButton = screen.getByRole("button", { name: "Infotip" });
        expect(infotipButton).toHaveAttribute("aria-expanded", "true");
    });

    it("renders custom icon story correctly", () => {
        render(<CustomIcon />);

        const infotipButton = screen.getByRole("button", { name: "Infotip" });
        expect(infotipButton.querySelector("svg")).toMatchSnapshot();
    });

    it("renders text instead of icon story correctly", () => {
        render(<TextInsteadOfIcon />);

        const infotipButton = screen.getByRole("button", { name: "Click for infotip" });
        expect(infotipButton).toHaveTextContent("Click for infotip");
        expect(infotipButton.querySelector("svg")).not.toBeInTheDocument();
    });

    it("renders pointer direction story correctly", () => {
        const { container } = render(<PointerDirection expanded />);

        const [
            infotipTop,
            infotipTopLeft,
            infotipTopRight,
            infotipRight,
            infotipRightBottom,
            infotipRightTop,
            infotipBottom,
            infotipBottomLeft,
            infotipBottomRight,
            infotipLeft,
            infotipLeftBottom,
            infotipLeftTop,
        ] = container.querySelectorAll(".infotip__overlay");
        expect(infotipTop.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--top");
        expect(infotipTopLeft.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--top-left");
        expect(infotipTopRight.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--top-right");
        expect(infotipRight.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--right");
        expect(infotipRightBottom.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--right-bottom");
        expect(infotipRightTop.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--right-top");
        expect(infotipBottom.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--bottom");
        expect(infotipBottomLeft.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--bottom-left");
        expect(infotipBottomRight.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--bottom-right");
        expect(infotipLeft.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--left");
        expect(infotipLeftBottom.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--left-bottom");
        expect(infotipLeftTop.querySelector(".infotip__pointer")).toHaveClass("infotip__pointer--left-top");
    });

    it("renders modal story correctly", () => {
        const { container } = render(<Modal initialExpanded />);

        const dialog = screen.getByRole("dialog");
        expect(dialog).toHaveClass(
            "lightbox-dialog dialog--mini__overlay lightbox-dialog--mask-fade lightbox-dialog--show-init",
        );
        expect(dialog).toHaveAttribute("aria-modal", "true");
        expect(dialog).toHaveAttribute("aria-labelledby", "dialog-title-abc123");
        expect(dialog).not.toHaveAttribute("hidden");

        const h2 = screen.getByRole("heading", { level: 2 });
        expect(h2).toHaveAttribute("id", "dialog-title-abc123");
        expect(h2).toHaveTextContent("Title");

        expect(screen.getByRole("button", { name: "Close" })).toHaveClass("icon-btn lightbox-dialog__close");

        expect(dialog.querySelector(".lightbox-dialog__main")).toHaveTextContent(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        );

        const infotip = container.querySelector(".infotip");
        expect(infotip).toHaveClass("dialog--mini infotip--expanded");
    });
});
