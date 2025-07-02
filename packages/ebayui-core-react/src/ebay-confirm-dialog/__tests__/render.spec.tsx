import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { Default, WithAnimation } from "./index.stories";

const DefaultStory = composeStory(Default, Meta);
const AnimationStory = composeStory(WithAnimation, Meta);

jest.mock("../../common/random-id");

describe("ebay-confirm-dialog rendering", () => {
    it("renders default story correctly", () => {
        render(<DefaultStory />);

        const dialog = screen.queryByRole("dialog");

        expect(dialog).toHaveAttribute("aria-modal", "true");
        expect(dialog).toHaveClass("confirm-dialog confirm-dialog--mask-fade confirm-dialog--show-init");
        expect(dialog).toHaveAttribute("aria-labelledby", "dialog-title-abc123");
        expect(dialog).toHaveAttribute("aria-hidden", "false");

        const h2 = screen.queryByRole("heading", { level: 2 });
        expect(h2).toHaveAttribute("id", "dialog-title-abc123");
        expect(h2.textContent).toEqual("Delete Address?");

        expect(screen.queryByText("You will permanently lose this address.")).toBeInTheDocument();
        const [buttonCancel, buttonOkay] = screen.queryAllByRole("button");
        expect(buttonCancel.textContent).toEqual("Cancel");
        expect(buttonCancel).toHaveClass("btn confirm-dialog__reject btn--secondary");
        expect(buttonOkay.textContent).toEqual("Okay");
        expect(buttonOkay).toHaveAttribute("aria-describedby", "confirm-dialog-main");
        expect(buttonOkay).toHaveAttribute("id", "confirm-dialog-confirm");
        expect(buttonOkay).toHaveClass("btn confirm-dialog__confirm btn--primary");
    });

    it("renders animation story correctly", () => {
        render(<AnimationStory />);

        const dialog = screen.queryByRole("dialog");
        expect(dialog).not.toBeInTheDocument();
    });
});
