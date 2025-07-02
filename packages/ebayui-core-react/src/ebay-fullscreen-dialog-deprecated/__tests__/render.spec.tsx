import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Default, AlwaysOpened } from "./index.stories";

const DefaultStory = composeStory(Default, Meta);
const AlwaysOpenedStory = composeStory(AlwaysOpened, Meta);

jest.mock("../../common/random-id");

describe("ebay-fullscreen-dialog-deprecated rendering", () => {
    it("renders default story correctly", () => {
        render(<DefaultStory />);

        const dialog = screen.queryByRole("dialog");
        expect(dialog).not.toBeInTheDocument();
    });

    it("renders always opened story correctly", () => {
        render(<AlwaysOpenedStory />);

        const dialog = screen.getByRole("dialog");

        expect(dialog).toHaveAttribute("aria-modal", "true");
        expect(dialog).toHaveClass("fullscreen-dialog fullscreen-dialog--mask-fade-slow fullscreen-dialog--show-init");
        expect(dialog).toHaveAttribute("aria-labelledby", "dialog-title-abc123");
        expect(dialog).toHaveAttribute("aria-hidden", "false");
        expect(dialog).not.toHaveAttribute("hidden");

        const h2 = screen.getByRole("heading", { level: 2 });
        expect(h2).toHaveAttribute("id", "dialog-title-abc123");
        expect(h2).toHaveTextContent("Heading");

        expect(screen.getByRole("button", { name: "Close dialog" })).toBeInTheDocument();

        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", "http://www.ebay.com");
        expect(link).toHaveTextContent("www.ebay.com");

        expect(screen.getByText("©2021 eBay")).toBeInTheDocument();
        expect(
            screen.getByText(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            ),
        ).toBeInTheDocument();
    });
});
