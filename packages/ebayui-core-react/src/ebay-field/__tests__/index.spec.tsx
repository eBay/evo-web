import React from "react";
import { screen, render } from "@testing-library/react";
import { composeStory } from "@storybook/react-vite";
import Meta, { DefaultInline } from "./index.stories";

const DefaultStory = composeStory(DefaultInline, Meta);

describe("DefaultInline story", () => {
    beforeEach(() => {
        render(<DefaultStory />);
    });

    it("renders textbox correctly", () => {
        const field = screen.getByRole("textbox");
        expect(field).toHaveProperty("placeholder", "placeholder text");
    });

    it("renders textbox label correctly", () => {
        const label = screen.getByText("Label for textbox");
        expect(label).toBeInTheDocument();
    });

    it("renders switch correctly", () => {
        const field = screen.getByRole("switch");
        expect(field).toHaveProperty("value", "123");
    });

    it("renders switch label correctly", () => {
        const label = screen.getByText("Label for switch");
        expect(label).toBeInTheDocument();
    });

    it("renders checkbox correctly", () => {
        const field = screen.getByRole("checkbox");
        expect(field).toHaveProperty("checked", true);
    });

    it("renders checkbox label correctly", () => {
        const label = screen.getByText("Label for checkbox");
        expect(label).toBeInTheDocument();
    });
});
