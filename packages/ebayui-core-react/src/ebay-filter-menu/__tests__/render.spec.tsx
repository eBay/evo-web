import React from "react";
import { composeStories } from "@storybook/react-vite";
import * as stories from "./index.stories";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const { Default, WithSearch, WithFooterButton, WithDisabledItem } = composeStories(stories);

jest.mock("../../common/random-id");

describe("<EbayFilterMenu /> rendering", () => {
    it("renders Default story correctly", () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it("renders WithSearch story correctly", () => {
        const { container } = render(<WithSearch />);
        expect(container).toMatchSnapshot();
    });

    it("renders WithFooterButton story correctly", () => {
        const { container } = render(<WithFooterButton />);
        expect(container).toMatchSnapshot();
    });

    it("shouldn't change 'checked' for disabled items", async () => {
        render(<WithDisabledItem />);

        const disabledItem = screen.getByText("item 3").closest("label")!.querySelector("input");

        expect(disabledItem!.checked).toBe(false);
        await userEvent.click(disabledItem!);
        expect(disabledItem!.checked).toBe(false);

        disabledItem?.focus();
        await userEvent.keyboard("{Enter}");
        expect(disabledItem!.checked).toBe(false);
    });

    it('should change "checked" when the Space key is pressed', async () => {
        render(<Default variant="form" />);

        const checkbox = screen.getByText("item 1").closest("label")?.querySelector("input");

        expect(checkbox?.checked).toBe(false);

        checkbox?.focus();
        await userEvent.keyboard("{ }");
        expect(checkbox?.checked).toBe(true);
    });

    it('should change "checked" when the Enter key is pressed', async () => {
        render(<Default variant="form" />);

        const checkbox = screen.getByText("item 1").closest("label")?.querySelector("input");

        expect(checkbox?.checked).toBe(false);

        checkbox?.focus();
        await userEvent.keyboard("{Enter}");
        expect(checkbox?.checked).toBe(true);
    });

    it('should change "checked" when the label is pressed', async () => {
        render(<Default variant="form" />);

        const label = screen.getByText("item 1").closest("label");
        const checkbox = label?.querySelector("input");

        expect(checkbox?.checked).toBe(false);
        await userEvent.click(label!);
        expect(checkbox?.checked).toBe(true);
    });
});
